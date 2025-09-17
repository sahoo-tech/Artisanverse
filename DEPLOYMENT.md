# ArtisanVerse AI Backend - Multi-Platform Deployment

This guide covers deploying the ArtisanVerse AI Backend to multiple platforms including Render.com and Vercel.

## 🚀 Platform Support

- ✅ **Render** - Full-featured deployment with persistent storage and Socket.IO
- ✅ **Vercel** - Serverless deployment (note: limited file persistence, no Socket.IO)

---

## 🔧 Render Deployment

### Prerequisites
- A Render.com account
- The repository pushed to GitHub
- OpenAI API key (for AI features)

### Deployment Steps
1. **Connect Repository**: Link your GitHub repository to Render
2. **Configure Service**: Use the included `render.yaml` configuration
3. **Set Environment Variables**: See environment variables section below

### Features on Render
- ✅ Full Express.js server
- ✅ Socket.IO real-time features
- ✅ Persistent file uploads
- ✅ Full CRUD operations with file persistence

---

## ⚡ Vercel Deployment

### Prerequisites
- A Vercel account
- The repository pushed to GitHub
- OpenAI API key (for AI features)

### Deployment Steps
1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Service**: Uses the included `vercel.json` configuration
3. **Set Environment Variables**: Use Vercel dashboard or CLI

### Features on Vercel
- ✅ Serverless Express.js API
- ✅ Fast global edge network
- ✅ Automatic scaling
- ⚠️ In-memory data persistence (resets between requests)
- ❌ No Socket.IO (serverless limitation)
- ⚠️ File uploads to `/tmp` (temporary, cleared between invocations)

---

## 🔐 Environment Variables

### Required for all platforms:
```bash
NODE_ENV=production              # Set automatically
JWT_SECRET=auto-generated        # Auto-generated on Render, manual on Vercel
CLIENT_URL=https://your-domain   # Your frontend domain
OPENAI_API_KEY=sk-...           # Your OpenAI API key
```

### Optional variables:
```bash
EMAIL_USER=your-email@gmail.com     # Gmail address for notifications
EMAIL_PASS=your-app-password        # Gmail app password
STRIPE_SECRET_KEY=sk_live_...       # For payment processing
PAYPAL_CLIENT_ID=your-paypal-id     # PayPal client ID
PAYPAL_CLIENT_SECRET=your-secret    # PayPal client secret
RATE_LIMIT_WINDOW_MS=900000         # Rate limit window (15 minutes)
RATE_LIMIT_MAX_REQUESTS=100         # Max requests per window
```

### Platform-specific variables:
```bash
# Render
PORT=10000                          # Set automatically

# Vercel
VERCEL=true                         # Set automatically
```

---

## 🏗️ Architecture Differences

### Render (Standard Server)
```
Client → Load Balancer → Node.js Server → File System
                      ↓
                   Socket.IO Server
```

### Vercel (Serverless)
```
Client → Edge Network → Serverless Function → In-Memory Data
```

---

## 📊 Health Check Endpoint

Both platforms provide a health check at `/health`:

```json
{
  "status": "OK",
  "timestamp": "2025-01-14T12:00:00.000Z",
  "uptime": 3600,
  "environment": "production",
  "version": "1.0.0",
  "platform": "Render" // or "Vercel"
}
```

---

## 📁 File Handling

### Render
- Files stored in `public/uploads/`
- Persistent across requests
- Full file management capabilities

### Vercel
- Files stored in `/tmp/uploads/`
- Temporary storage (cleared between invocations)
- Suitable for processing, not long-term storage

---

## 🛠️ Development Considerations

### For Render deployment:
- Use when you need persistent data storage
- Ideal for applications requiring Socket.IO
- Better for traditional full-stack applications

### For Vercel deployment:
- Use when you need global edge distribution
- Ideal for API-only backends
- Consider external database for data persistence
- File uploads should be handled via cloud storage (AWS S3, etc.)

---

## 📋 Deployment Checklist

### Before deploying:
- [ ] Environment variables configured
- [ ] Repository pushed to GitHub
- [ ] OpenAI API key obtained
- [ ] Frontend domain URL ready
- [ ] Email credentials configured (if using notifications)

### After deploying:
- [ ] Test `/health` endpoint
- [ ] Verify API routes work
- [ ] Test file uploads (if applicable)
- [ ] Check logs for any errors
- [ ] Update frontend API URL

---

## 🚨 Important Notes

- **Data Persistence**: Vercel uses in-memory storage that resets between function invocations
- **Real-time Features**: Socket.IO only works on Render (persistent server required)
- **File Uploads**: Consider cloud storage for production Vercel deployments
- **Scaling**: Both platforms auto-scale, but differently (containers vs functions)

---

## 🔍 Troubleshooting

### Common Issues:
1. **CORS errors**: Check `CLIENT_URL` environment variable
2. **JWT errors**: Ensure `JWT_SECRET` is set
3. **File upload fails**: Check upload directory permissions
4. **API not responding**: Verify health endpoint first

### Platform-specific:
- **Render**: Check build logs for npm install errors
- **Vercel**: Function timeout issues (30s max), check function logs