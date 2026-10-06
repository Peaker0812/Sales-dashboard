const express = require('express');
const router = express.Router();

// Mock sales data
const salesData = [
  { id: 1, month: 'January', sales: 4000, profit: 2400 },
  { id: 2, month: 'February', sales: 3000, profit: 1398 },
  { id: 3, month: 'March', sales: 2000, profit: 9800 },
  { id: 4, month: 'April', sales: 2780, profit: 3908 }
];

// GET all sales
router.get('/sales', (req, res) => {
  res.json({ success: true, data: salesData, count: salesData.length });
});

// GET sales summary
router.get('/summary', (req, res) => {
  const totalSales = salesData.reduce((sum, d) => sum + d.sales, 0);
  const totalProfit = salesData.reduce((sum, d) => sum + d.profit, 0);
  res.json({ success: true, totalSales, totalProfit });
});

// GET single sale by id
router.get('/:id', (req, res) => {
  const data = salesData.find(d => d.id == req.params.id);
  if (!data) return res.status(404).json({ success: false, error: 'Not found' });
  res.json({ success: true, data });
});

// POST new sale
router.post('/sales', (req, res) => {
  const newSale = { id: Date.now(), ...req.body };
  salesData.push(newSale);
  res.status(201).json({ success: true, data: newSale });
});

module.exports = router;
