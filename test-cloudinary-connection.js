#!/usr/bin/env node

/**
 * Test Cloudinary Connection
 * This script tests if Cloudinary is configured correctly
 */

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('🔍 Testing Cloudinary Connection...\n');

// Check environment variables
console.log('Environment Variables:');
console.log('CLOUDINARY_CLOUD_NAME:', process.env.CLOUDINARY_CLOUD_NAME ? '✅ Set' : '❌ Not set');
console.log('CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY ? '✅ Set' : '❌ Not set');
console.log('CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET ? '✅ Set' : '❌ Not set');
console.log('');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Test connection
async function testConnection() {
  try {
    console.log('🧪 Testing Cloudinary API connection...');
    const result = await cloudinary.api.ping();
    console.log('✅ Cloudinary connection successful!');
    console.log('Response:', result);
    
    // Test a simple upload
    console.log('\n📤 Testing file upload...');
    const uploadResult = await cloudinary.uploader.upload(
      'data:text/plain;base64,' + Buffer.from('Test file content').toString('base64'),
      {
        folder: 'college-glow-desk/test',
        public_id: `test-${Date.now()}`,
        resource_type: 'raw'
      }
    );
    
    console.log('✅ File upload successful!');
    console.log('Upload URL:', uploadResult.secure_url);
    console.log('Public ID:', uploadResult.public_id);
    
    // Clean up test file
    await cloudinary.uploader.destroy(uploadResult.public_id);
    console.log('🗑️ Test file cleaned up');
    
  } catch (error) {
    console.error('❌ Cloudinary test failed:', error.message);
    if (error.http_code) {
      console.error('HTTP Code:', error.http_code);
    }
    console.error('Full error:', error);
  }
}

testConnection();
