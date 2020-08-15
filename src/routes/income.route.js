import express from 'express';
const router = express.Router();

import IncomeCtrl from '../controller/income.controller';

router.get('/incomes', IncomeCtrl.fetchAllIncomes);
router.get('/incomes/:id', IncomeCtrl.getSingleIncome);
router.post('/incomes', IncomeCtrl.addAnIncome);

export default router;