const Expense = require('../models/Expense');

exports.getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createExpense = async (req, res, next) => {
    try {
        const { amount, description, category } = req.body;
        const newExpense = await Expense.create({ amount, description, category });
        res.status(201).json(newExpense);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteExpense = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Expense.destroy({ where: { id } });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
