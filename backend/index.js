const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Use the auth routes
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
