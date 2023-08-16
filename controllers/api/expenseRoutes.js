const router = require('express').Router();
const {Expense} = require('../../models');

router.post('/', async (req, res) => {
    try {
      const ExpenseData = await Expense.create(req.body);
  
     res.status(200).json(ExpenseData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;