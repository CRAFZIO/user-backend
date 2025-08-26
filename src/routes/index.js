const express = require('express');
const Bus = require('../models/Bus');
const Assignment = require('../models/Assignment');

const router = express.Router();

router.get('/buses', async (_req, res) => {
  try {
    const buses = await Bus.find().lean();
    res.json({ data: buses });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch buses' });
  }
});

router.get('/buses/:id', async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id).lean();
    if (!bus) return res.status(404).json({ error: 'Bus not found' });
    res.json({ data: bus });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bus' });
  }
});

// Get assignments for current date
router.get('/assignments/today', async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const assignments = await Assignment.find({
      assignDate: {
        $gte: today,
        $lt: tomorrow
      }
    }).lean();
    
    res.json({ data: assignments });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch today\'s assignments' });
  }
});

// Get all assignments
router.get('/assignments', async (req, res) => {
  try {
    const assignments = await Assignment.find().lean();
    res.json({ data: assignments });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assignments' });
  }
});

module.exports = router;
