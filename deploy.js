#!/usr/bin/env node

/**
 * Deployment Script for College Glow Desk
 * This script helps deploy both frontend and backend
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  try {
    log(`\n🔄 ${description}...`, 'blue');
    log(`Command: ${command}`, 'cyan');
    
    const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    log(`✅ ${description} completed successfully`, 'green');
    if (output.trim()) {
      console.log(output);
    }
    return true;
  } catch (error) {
    log(`❌ ${description} failed`, 'red');
    console.error(error.message);
    return false;
  }
}

function checkPrerequisites() {
  log('\n🔍 Checking prerequisites...', 'blue');
  
  const checks = [
    {
      name: 'Node.js',
      command: 'node --version',
      required: true
    },
    {
      name: 'npm',
      command: 'npm --version',
      required: true
    },
    {
      name: 'Netlify CLI',
      command: 'netlify --version',
      required: false
    }
  ];
  
  let allGood = true;
  
  for (const check of checks) {
    try {
      const output = execSync(check.command, { encoding: 'utf8', stdio: 'pipe' });
      log(`✅ ${check.name}: ${output.trim()}`, 'green');
    } catch (error) {
      if (check.required) {
        log(`❌ ${check.name}: Not found`, 'red');
        allGood = false;
      } else {
        log(`⚠️  ${check.name}: Not found (optional)`, 'yellow');
      }
    }
  }
  
  return allGood;
}

function buildFrontend() {
  log('\n🏗️  Building frontend...', 'blue');
  
  // Install dependencies
  if (!runCommand('npm install', 'Installing dependencies')) {
    return false;
  }
  
  // Build the project
  if (!runCommand('npm run build', 'Building frontend')) {
    return false;
  }
  
  // Check if dist folder exists
  if (!fs.existsSync('dist')) {
    log('❌ Build failed: dist folder not found', 'red');
    return false;
  }
  
  log('✅ Frontend build completed', 'green');
  return true;
}

function deployFrontend() {
  log('\n🚀 Deploying frontend to Netlify...', 'blue');
  
  try {
    // Check if netlify CLI is available
    execSync('netlify --version', { stdio: 'pipe' });
    
    // Deploy to Netlify
    if (runCommand('netlify deploy --prod --dir dist', 'Deploying to Netlify')) {
      log('✅ Frontend deployed successfully!', 'green');
      return true;
    }
  } catch (error) {
    log('⚠️  Netlify CLI not found. Please install it with: npm install -g netlify-cli', 'yellow');
    log('   Or deploy manually by uploading the dist folder to Netlify', 'yellow');
  }
  
  return false;
}

function testBackend() {
  log('\n🧪 Testing backend...', 'blue');
  
  if (fs.existsSync('test-backend.js')) {
    if (runCommand('node test-backend.js', 'Running backend tests')) {
      log('✅ Backend tests completed', 'green');
      return true;
    }
  } else {
    log('⚠️  test-backend.js not found, skipping backend tests', 'yellow');
  }
  
  return true;
}

function showDeploymentInfo() {
  log('\n📋 Deployment Information:', 'blue');
  log('Frontend URL: https://college-glow-desk.netlify.app', 'green');
  log('Backend URL: https://college-glow-desk.onrender.com', 'green');
  log('\n📚 Documentation: DEPLOYMENT.md', 'cyan');
  log('🧪 Test Script: test-backend.js', 'cyan');
  log('🔧 Setup Helper: setup-environment.js', 'cyan');
}

async function main() {
  log('🚀 College Glow Desk - Deployment Script', 'bright');
  log('==========================================', 'bright');
  
  // Check prerequisites
  if (!checkPrerequisites()) {
    log('\n❌ Prerequisites check failed. Please install required tools.', 'red');
    process.exit(1);
  }
  
  // Get deployment type from command line arguments
  const args = process.argv.slice(2);
  const deployType = args[0] || 'full';
  
  log(`\n📦 Deployment type: ${deployType}`, 'blue');
  
  let success = true;
  
  switch (deployType) {
    case 'frontend':
    case 'front':
      success = buildFrontend() && deployFrontend();
      break;
      
    case 'backend':
    case 'back':
      success = testBackend();
      break;
      
    case 'test':
      success = testBackend();
      break;
      
    case 'build':
      success = buildFrontend();
      break;
      
    case 'full':
    default:
      success = buildFrontend() && deployFrontend() && testBackend();
      break;
  }
  
  if (success) {
    log('\n🎉 Deployment completed successfully!', 'green');
    showDeploymentInfo();
  } else {
    log('\n❌ Deployment failed. Please check the errors above.', 'red');
    process.exit(1);
  }
}

// Handle command line arguments
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  log('🚀 College Glow Desk - Deployment Script', 'bright');
  log('\nUsage: node deploy.js [type]', 'blue');
  log('\nTypes:', 'blue');
  log('  frontend, front  - Deploy only frontend to Netlify', 'cyan');
  log('  backend, back    - Test backend deployment', 'cyan');
  log('  test            - Run backend tests only', 'cyan');
  log('  build           - Build frontend only', 'cyan');
  log('  full (default)  - Full deployment (frontend + backend test)', 'cyan');
  log('\nExamples:', 'blue');
  log('  node deploy.js', 'cyan');
  log('  node deploy.js frontend', 'cyan');
  log('  node deploy.js backend', 'cyan');
  log('  node deploy.js test', 'cyan');
  process.exit(0);
}

main().catch(error => {
  log(`\n❌ Unexpected error: ${error.message}`, 'red');
  process.exit(1);
});
