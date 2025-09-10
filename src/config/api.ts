/**
 * API Configuration
 * Centralized configuration for API endpoints
 */

// Determine the base URL based on environment
const getBaseURL = () => {
  // In production (Netlify), use the deployed backend
  if (import.meta.env.PROD) {
    return 'https://college-glow-desk.onrender.com';
  }
  
  // In development, use localhost
  return 'http://localhost:5000';
};

export const API_BASE_URL = getBaseURL();

// API endpoints
export const API_ENDPOINTS = {
  SUBJECTS: `${API_BASE_URL}/api/academic/subjects`,
  RESOURCES: `${API_BASE_URL}/api/academic/resources`,
  UPLOAD_FILE: `${API_BASE_URL}/api/upload-file`,
  UPLOAD_LINK: `${API_BASE_URL}/api/upload-link`,
  HEALTH: `${API_BASE_URL}/health`,
} as const;

// Helper function to build API URLs
export const buildApiUrl = (endpoint: string, params?: Record<string, string | number>) => {
  const url = new URL(endpoint);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }
  return url.toString();
};
