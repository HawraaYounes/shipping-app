const { Shipment, User } = require('../models');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findByPk(decoded.id);
    if (!req.user) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate.' });
  }
};


router.post('/shipments', authenticate, async (req, res) => {
  try {
    const shipment = await Shipment.create({ ...req.body, userId: req.user.id });
    res.json(shipment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/shipments', authenticate, async (req, res) => {
  try {
    const shipments = await Shipment.findAll({ where: { userId: req.user.id } });
    res.json(shipments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/shipments/:id', authenticate, async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }
    await shipment.update(req.body);
    res.json(shipment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/shipments/:id', authenticate, async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!shipment) {
      return res.status(404).json({ error: 'Shipment not found' });
    }
    await shipment.destroy();
    res.json({ message: 'Shipment deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
