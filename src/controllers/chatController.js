import express from 'express';
import ChatLog from '../models/chatLog.js';

const router = express.Router();

// Route to get chat logs
router.get('/', async (req, res) => {
  try {
    const logs = await ChatLog.find({});
    res.json(logs);
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch logs' });
  }
});

// Route to delete a specific log by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await ChatLog.findByIdAndDelete(id);
    if (result) {
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'Log not found' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete log' });
  }
});

export default router;
