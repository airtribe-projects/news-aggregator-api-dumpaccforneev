const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const preferencesRoutes = require('./routes/preferencesRoutes');
const newsRoutes = require('./routes/newsRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/preferences', preferencesRoutes);
app.use('/news', newsRoutes);

// Database connection
const db = require('./config/db');
db();

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
