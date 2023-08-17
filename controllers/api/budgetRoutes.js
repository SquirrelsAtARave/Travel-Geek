const router = require('express').Router();
const {Budget} = require('../../models');

router.post('/', async (req, res) => {
    try {
      const BudgetData = await Budget.create(req.body);
  
     res.status(200).json(BudgetData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;