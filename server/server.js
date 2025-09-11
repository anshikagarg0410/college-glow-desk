import express from 'express';
import connectDB from './config/db.config.js';
import cors from 'cors';
import fetch from 'node-fetch';
import multer from 'multer';
import 'dotenv/config';
import academicRoutes from './routes/academic.routes.js';
import uploadRoutes from './routes/upload.routes.js';
import { 
  requestLogger, 
  errorHandler, 
  notFound, 
  healthCheck,
  getLogs 
} from './middleware/errorHandler.js';

const app = express();

// Connect to the Database
connectDB();

// Initialize Middleware
app.use(cors({ origin: '*', exposedHeaders: ['Content-Range', 'Accept-Ranges'] }));
app.use(express.json());
app.use(requestLogger);

// Define a simple root route
app.get('/', (req, res) => res.send('API is running...'));

// Serve empty favicon to avoid proxy 5xx
app.get('/favicon.ico', (req, res) => {
  res.status(200).type('image/x-icon').end();
});

// Health check endpoint
app.get('/health', healthCheck);

// Debug endpoints (only in development)
if (process.env.NODE_ENV !== 'production') {
  app.get('/api/logs', getLogs);
}

// --- CORRECTED: Use a consistent /api prefix for all routes ---
app.use('/api/academic', academicRoutes);
app.use('/api', uploadRoutes); // Now it listens for /api/upload-file

// Lightweight proxy to serve PDFs from Cloudinary to avoid viewer auth/CORS issues
app.get('/api/proxy/pdf', async (req, res) => {
  try {
    const src = String(req.query.src || '');
    const url = new URL(src);
    if (url.hostname !== 'res.cloudinary.com') {
      return res.status(400).json({ msg: 'Invalid source host' });
    }

    // Forward range requests for streaming
    const headers = new Headers();
    if (req.headers.range) headers.set('Range', req.headers.range);
    headers.set('Accept', 'application/pdf');
    headers.set('User-Agent', 'college-glow-desk-proxy');

    const upstream = await fetch(url.toString(), { headers });
    if (!upstream.ok || !upstream.body) {
      res.status(upstream.status || 502);
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.send('Upstream fetch failed');
    }

    // Pass through important headers
    res.status(upstream.status);
    res.setHeader('Access-Control-Allow-Origin', '*');
    const copyHeaders = ['content-type', 'content-length', 'accept-ranges', 'content-range', 'cache-control'];
    copyHeaders.forEach((h) => {
      const v = upstream.headers.get(h);
      if (v) res.setHeader(h, v);
    });

    upstream.body.pipe(res);
  } catch (e) {
    res.status(400).json({ msg: 'Invalid URL' });
  }
});

// Multer error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ msg: 'File too large. Maximum size is 10MB.' });
    }
    return res.status(400).json({ msg: error.message });
  }
  next(error);
});

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));