import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

// connectionString_urlPattern: postgresql://abdulrahman:alao1996@localhost:5432/wallet_db
const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

const pool = new Pool({
    connectionString
})
export default pool;