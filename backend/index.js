const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Use the auth routes
app.use('/auth', authRoutes);

// Use the shipment routes
app.use('/api', shipmentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
