/**
 * Error Handling Middleware
 * Provides comprehensive error logging and debugging for the backend
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

// Log file paths
const errorLogPath = path.join(logsDir, 'error.log');
const accessLogPath = path.join(logsDir, 'access.log');

/**
 * Log error to file and console
 */
function logError(error, req = null) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    error: {
      message: error.message,
      stack: error.stack,
      name: error.name
    },
    request: req ? {
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body,
      params: req.params,
      query: req.query
    } : null
  };

  // Log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.error('🚨 Error:', logEntry);
  }

  // Log to file
  const logLine = JSON.stringify(logEntry) + '\n';
  fs.appendFileSync(errorLogPath, logLine);
}

/**
 * Log access requests
 */
function logAccess(req, res, responseTime) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    method: req.method,
    url: req.url,
    statusCode: res.statusCode,
    responseTime: `${responseTime}ms`,
    userAgent: req.get('User-Agent'),
    ip: req.ip || req.connection.remoteAddress
  };

  const logLine = JSON.stringify(logEntry) + '\n';
  fs.appendFileSync(accessLogPath, logLine);
}

/**
 * Request logging middleware
 */
export const requestLogger = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const responseTime = Date.now() - start;
    logAccess(req, res, responseTime);
  });
  
  next();
};

/**
 * Error handling middleware
 */
export const errorHandler = (err, req, res, next) => {
  // Log the error
  logError(err, req);

  // Default error
  let error = { ...err };
  error.message = err.message;

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = { message, statusCode: 404 };
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = { message, statusCode: 400 };
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = { message, statusCode: 400 };
  }

  // Cloudinary errors
  if (err.http_code) {
    const message = `Cloudinary error: ${err.message}`;
    error = { message, statusCode: 500 };
  }

  // Send error response
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

/**
 * 404 handler
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

/**
 * Health check endpoint
 */
export const healthCheck = (req, res) => {
  const health = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
    memory: process.memoryUsage(),
    database: 'Connected', // You can add actual DB health check here
    cloudinary: 'Configured' // You can add actual Cloudinary health check here
  };

  res.json(health);
};

/**
 * Get logs endpoint (for debugging)
 */
export const getLogs = (req, res) => {
  try {
    const { type = 'error', lines = 50 } = req.query;
    const logFile = type === 'access' ? accessLogPath : errorLogPath;
    
    if (!fs.existsSync(logFile)) {
      return res.json({ logs: [], message: 'No logs found' });
    }

    const logContent = fs.readFileSync(logFile, 'utf8');
    const logLines = logContent.trim().split('\n').slice(-parseInt(lines));
    
    const logs = logLines.map(line => {
      try {
        return JSON.parse(line);
      } catch {
        return { raw: line };
      }
    });

    res.json({ logs, count: logs.length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to read logs' });
  }
};
