import ExpenseService from '../services/expense.service';

class ExpenseController {

    fetchAllExpenses(req, res) {
        const allExpenses = ExpenseService.fetchAllExpenses();
        return res.json({
            message: 'success',
            data: allExpenses
        }).status(200);
    }

    addAnExpense(req, res) {
        const newExpense = req.body;
        const createdExpense = ExpenseService.addExpense(newExpense);
        return res.json({
            mesasage: 'success',
            data: createdExpense
        }).status(201)
    }

    getSingleExpense(req, res) {
        const id = req.params.id;
        const foundExpense = ExpenseService.getExpense(id);
        return res.json({
            message: 'success',
            data: foundExpense
        }).status(200)
    }
}

export default new ExpenseController();