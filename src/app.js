import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import userRoute from './routes/user.route';
import incomeRoute from './routes/income.route'
import expenseRoute from './routes/expense.route';

import connectDB from './model/db';
connectDB;

const { NODE_DEVELOPMENT } = process.env;
const PORT = NODE_DEVELOPMENT || 2000;


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is the index route');
})

app.use('/v1', userRoute);
app.use('/v1', incomeRoute);
app.use('/v1', expenseRoute);

app.listen(PORT, () => {
    console.log(`Express is connected to the server on ${PORT}`);
})


