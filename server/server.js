import express from 'express';
import connectDB from './config/db.config.js';
import cors from 'cors';
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
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Define a simple root route
app.get('/', (req, res) => res.send('API is running...'));

// Health check endpoint
app.get('/health', healthCheck);

// Debug endpoints (only in development)
if (process.env.NODE_ENV !== 'production') {
  app.get('/api/logs', getLogs);
}

// --- CORRECTED: Use a consistent /api prefix for all routes ---
app.use('/api/academic', academicRoutes);
app.use('/api', uploadRoutes); // Now it listens for /api/upload-file

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