import dummyData from '../utils/expenseDummyData.util';
import Expense from '../model/expense.model';

class ExpenseService {

    fetchAllExpenses() {
        const validExpense = dummyData.expenses.map((expense) => {
            const newExpense = new Expense();
            newExpense.id = expense.id,
                newExpense.expense_type = expense.expense_type,
                newExpense.price = expense.price
            return newExpense
        })
        return validExpense;
    }

    addExpense(expense) {
        const expenseLength = dummyData.expenses.length;
        const lastId = dummyData.expenses[expenseLength - 1].id;
        const newId = lastId + 1;
        expense.id = newId;
        dummyData.expenses.push(expense);
        return expense;
    }

    getExpense(id) {
        const expense = dummyData.expenses.find(expense => expense.id == id);
        return expense || {};
    }

    // updateExpense(id, expense_type) {
    //     const id = dummyData.expenses.find(expense => expense.id = id);
    //     if (!id) {
    //         return `The ${id} is not found!`;
    //     } else {
    //         const newExpense = new Expense();
    //         newExpense.expense_type = expense_type;
    //         return dummyData.expenses.push(newExpense);
    //     }
    // }

    // deleteExpense(id) {
    //     const id = dummyData.expenses.find(expense => expense.id = id);
    //     if (!id) {
    //         return `The ${id} is not found!`;
    //     } else {
    //         return dummyData.expenses.pop(id);
    //     }
    // }
}

export default new ExpenseService();