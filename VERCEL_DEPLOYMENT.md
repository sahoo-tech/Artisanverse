# Vercel Deployment Quick Start

## File Structure for Vercel
```
/
├── api/
│   └── index.js                    # Serverless function entry point
├── artisanverse-ai-backend/        # Backend source code
├── vercel.json                     # Vercel configuration
└── render.yaml                     # Render configuration (ignored by Vercel)
```

## Key Configuration Files

### `vercel.json`
- Configures serverless function deployment
- Routes all requests to `api/index.js`
- Sets environment variables and function limits

### `api/index.js`
- Entry point for Vercel serverless functions
- Imports and exports the Express app from backend

## Deployment Commands

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## Environment Variables
Set these in Vercel dashboard or via CLI:
```bash
vercel env add NODE_ENV production
vercel env add JWT_SECRET your-secret-here
vercel env add CLIENT_URL https://your-frontend-domain.com
vercel env add OPENAI_API_KEY your-openai-key
```

## Limitations on Vercel
- No persistent file storage (use cloud storage instead)
- No Socket.IO (serverless functions are stateless)
- 30-second function timeout
- Cold start latency for infrequent requests

## When to Choose Vercel
- ✅ Need global edge distribution
- ✅ API-only backend
- ✅ Want automatic scaling
- ✅ Minimal server management
- ❌ Need real-time features (Socket.IO)
- ❌ Require persistent file storage
- ❌ Long-running operations (>30s)