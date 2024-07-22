const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expenseController');

router.get('/expenses', expenseController.getExpenses);
router.post('/expenses', expenseController.createExpense);
router.delete('/expenses/:id', expenseController.deleteExpense);

module.exports = router;
