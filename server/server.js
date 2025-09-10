import express from 'express';
import connectDB from './config/db.config.js';
import cors from 'cors';
import 'dotenv/config';
import academicRoutes from './routes/academic.routes.js';
import uploadRoutes from './routes/upload.routes.js';

const app = express();

// Connect to the Database
connectDB();

// Initialize Middleware
app.use(cors()); // For handling cross-origin requests
app.use(express.json()); // For parsing JSON bodies

// Define a simple root route
app.get('/', (req, res) => res.send('API is running...'));

// --- CORRECTED: Define API Routes with a consistent /api prefix ---
app.use('/api/academic', academicRoutes);
app.use('/api', uploadRoutes); // This will handle /api/upload-file and /api/upload-link

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));