import express from 'express';
const router = express.Router();

import ExpenseCtrl from '../controller/expense.controller';

router.get('/expenses', ExpenseCtrl.fetchAllExpenses);
router.get('/expenses/:id', ExpenseCtrl.getSingleExpense);
router.post('/expenses', ExpenseCtrl.addAnExpense);

export default router;