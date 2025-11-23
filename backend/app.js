const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const trekRoutes = require('./routes/trekRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const authRoutes = require('./routes/adminAuth');
const contactRoutes = require('./routes/contactRoutes');
const quizRoutes = require('./routes/quizRoutes');
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

app.use('/api/treks', trekRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/quiz', quizRoutes);
app.use("/api/upload", uploadRoutes);


app.get('/', (req,res) => res.send('Summit Backend Running'));

module.exports = app;
