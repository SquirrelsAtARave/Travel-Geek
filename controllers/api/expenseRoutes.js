const router = require('express').Router();
const {Expense} = require('../../models');

router.post('/', async (req, res) => {
    try {
      const ExpenseData = await Expense.create({
        user_id: req.session.user_id,
        category: req.body.category,
        description: req.body.description,
        amount: req.body.amount
      });
  
     res.status(200).json(ExpenseData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/', async (req, res) => {
    try {
      const DeletedExpense = await Expense.destroy({
        where: {
          id:req.body.id
        }
      });
  
     res.status(200).json(DeletedExpense);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    
    }
  });

  module.exports = router;