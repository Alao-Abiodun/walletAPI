import IncomeService from '../services/income.service';

class IncomeController {

    fetchAllIncomes(req, res) {
        const allIncomes = IncomeService.fetchAllIncomes();
        return res.json({
            status: 'success',
            data: allIncomes
        }).status(200);
    }

    addAnIncome(req, res) {
        const newIncome = req.body;
        const createdIncome = IncomeService.addAnIncome(newIncome);
        return res.json({
            status: 'success',
            data: createdIncome
        }).status(201)
    }

    getSingleIncome(req, res) {
        const id = req.params.id;
        const foundIncome = IncomeService.getIncome(id);
        return res.json({
            status: 'success',
            data: foundIncome
        }).status(200)
    }
}

export default new IncomeController();