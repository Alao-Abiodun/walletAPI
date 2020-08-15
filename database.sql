CREATE DATABASE walletDB;
CREATE TABLE users
(
    id serial,
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    userName VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (email)
);
CREATE TABLE incomes
(
    id serial,
    user_id int NOT NULL,
    income_name VARCHAR(100) NOT NULL,
    income_amount VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE expenses
(
    id serial,
    user_id int NOT NULL,
    expense_name VARCHAR(100) NOT NULL,
    expense_amount VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE transactions
(
    transaction_id serial,
    user_id int NOT NULL,
    income_id int NOT NULL,
    expense_id int NOT NULL,
    transaction_type VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (income_id) REFERENCES incomes(id),
    FOREIGN KEY (expense_id) REFERENCES expenses(id)
);