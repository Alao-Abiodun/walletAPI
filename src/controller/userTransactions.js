import pool from '../model/db';

class userTransaction {
    constructor(fullName, income, expenses) {
        this.fullName = fullName,
            this.income = income,
            this.expenses = expenses
    }

    userIncome() {
        const totalIncome = 0;
    }

    userExpenses() {
        const totalIncome = 0;
    }

    withdraw() {

    }

    deposit() {

    }
}

export default userTransaction;