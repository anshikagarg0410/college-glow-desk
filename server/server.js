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
app.use(cors());
app.use(express.json());

// Define a simple root route
app.get('/', (req, res) => res.send('API is running...'));

// --- CORRECTED: Use a consistent /api prefix for all routes ---
app.use('/api/academic', academicRoutes);
app.use('/api', uploadRoutes); // Now it listens for /api/upload-file

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));