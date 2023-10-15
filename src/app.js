const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const studentsRoutes = require('./routes/studentsRoutes');
const worksRoutes = require('./routes/worksRoutes');
const otpRoutes = require('./routes/otpRoutes');

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/student_register', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/students', studentsRoutes);
app.use('/works', worksRoutes);
app.use('/otp', otpRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
