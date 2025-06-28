const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const setupSwagger = require('./swagger'); // ✅ Make sure swagger.js is in same folder
const reportRoutes = require('./routes/reportRoutes'); // ✅ Ensure this file exists

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Setup Swagger
setupSwagger(app);

// Routes
app.use('/api/reports', reportRoutes);

// Export app for testing
module.exports = app;

// Start server if this file is run directly
if (require.main === module) {
  const mongoURI = process.env.MONGO_URI;

  console.log("🔍 MONGO_URI:", mongoURI); // Optional

  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('✅ MongoDB connected');
    app.listen(5000, () => {
  console.log("Server running on port 5000");
});
  }).catch(err => {
    console.error("❌ MongoDB connection failed:", err);
  });
}
