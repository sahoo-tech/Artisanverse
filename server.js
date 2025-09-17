const app = require('./app');

// Use the server from app.js if it exists (for Socket.IO), otherwise create a basic HTTP server
const server = app.server || require('http').createServer(app);

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated');
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated');
  });
});

// Start server (only when not in serverless environment)
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5002;
  console.log(`Attempting to start server on port: ${PORT}`);
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`
🎨 ===============================================
   ArtisanVerse AI Backend Server Started
   Port: ${PORT}
   Environment: ${process.env.NODE_ENV || 'development'}
   Time: ${new Date().toLocaleString()}
🎨 ===============================================
    `);
  });
}

module.exports = app;
