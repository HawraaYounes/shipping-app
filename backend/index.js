const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
