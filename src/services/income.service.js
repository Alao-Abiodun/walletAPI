import dummyData from '../utils/incomeDummyData.util';
import Income from '../model/income.model';

class IncomeService {
    fetchAllIncomes() {
        const validIncome = dummyData.incomes.map((income) => {
            const newIncome = new Income();
            newIncome.id = income.id,
                newIncome.income_type = income.income_type,
                newIncome.price = income.price
            return newIncome
        })
        return validIncome;
    }

    addAnIncome(income) {
        const incomeLength = dummyData.incomes.length;
        const lastId = dummyData.incomes[incomeLength - 1].id;
        const newId = lastId + 1;
        income.id = newId;
        dummyData.incomes.push(income);
        return income;
    }

    getIncome(id) {
        const income = dummyData.incomes.find(income => income.id == id);
        return income || {};
    }

    // updateIncome(id, income_type) {
    //     const Id = dummyData.incomes.find(income => income.id = id);
    //     if (!Id) {
    //         return `The ${Id} is not found!`;
    //     } else {
    //         const newIncome = new Income();
    //         newIncome.income_type = income_type;
    //         return dummyData.incomes.push(newIncome);
    //     }
    // }

    // deleteIncome(id) {
    //     const Id = dummyData.incomes.find(income => income.id = id);
    //     if (!Id) {
    //         return `The ${Id} is not found!`;
    //     } else {
    //         return dummyData.incomes.pop(id);
    //     }
    // }
}

export default new IncomeService();