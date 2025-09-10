# College Glow Desk - Deployment Guide

## 🚀 Backend Deployment on Render

### Required Environment Variables

Your backend requires the following environment variables to be configured on Render:

```bash
# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/college-glow-desk?retryWrites=true&w=majority

# Cloudinary Configuration (for file uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Server Configuration
PORT=5000
```

### 🔧 Setting Up Environment Variables on Render

1. **Go to your Render Dashboard**
   - Visit: https://dashboard.render.com
   - Find your `college-glow-desk` service

2. **Navigate to Environment Variables**
   - Click on your service
   - Go to "Environment" tab
   - Add the following variables:

#### MongoDB Setup Options:

**Option A: MongoDB Atlas (Recommended)**
```bash
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/college-glow-desk?retryWrites=true&w=majority
```

**Option B: Render MongoDB Service**
```bash
MONGO_URI=mongodb://render-mongodb-service:27017/college-glow-desk
```

#### Cloudinary Setup:
1. Go to https://cloudinary.com
2. Create a free account
3. Get your credentials from the dashboard
4. Add them to Render:

```bash
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 📋 Deployment Checklist

- [ ] MongoDB connection string configured
- [ ] Cloudinary credentials configured
- [ ] Service restarted after adding environment variables
- [ ] Test API endpoints
- [ ] Test file upload functionality

### 🧪 Testing Your Deployment

After setting up environment variables, test these endpoints:

```bash
# Test basic API
curl https://college-glow-desk.onrender.com

# Test subjects endpoint
curl "https://college-glow-desk.onrender.com/api/academic/subjects?branch=Computer%20Science&year=1"

# Test resources endpoint
curl "https://college-glow-desk.onrender.com/api/academic/resources?branch=Computer%20Science&year=1&subjectName=Data%20Structures&resourceType=notes"
```

### 🔍 Troubleshooting

**Common Issues:**

1. **500 Error on Upload**: Check Cloudinary credentials
2. **Database Connection Error**: Verify MONGO_URI format
3. **CORS Issues**: Already configured in server.js
4. **File Upload Fails**: Check Cloudinary configuration

**Debug Steps:**
1. Check Render service logs
2. Verify environment variables are set
3. Test database connection
4. Test Cloudinary upload manually

### 🚀 Frontend Deployment

Frontend is already deployed on Netlify:
- **URL**: https://college-glow-desk.netlify.app
- **Configuration**: Uses netlify.toml for API proxy
- **Build**: `npm run build`
- **Publish**: `dist` folder

### 📁 Project Structure

```
college-glow-desk/
├── server/                 # Backend (Express.js)
│   ├── config/            # Database & Cloudinary config
│   ├── controllers/       # API controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── server.js         # Main server file
├── src/                  # Frontend (React + Vite)
├── dist/                 # Built frontend
├── netlify.toml          # Netlify configuration
└── package.json          # Dependencies
```

### 🔄 Redeployment

To redeploy backend:
1. Push changes to your Git repository
2. Render will automatically redeploy
3. Or manually trigger redeploy from Render dashboard

To redeploy frontend:
```bash
npm run build
netlify deploy --prod --dir dist
```
