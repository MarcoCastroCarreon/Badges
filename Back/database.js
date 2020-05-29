const mongoose = require('mongoose');

const host = process.env.DB_HOST || 'localhost';
const database = process.env.DB_SCHEMA || 'badges';
const username = process.env.DB_USERNAME || 'admin-mcastro';
const password = process.env.DB_PASSWORD || 'alkapon34';

// const dbUri = `mongodb+srv://${host}/`;

const dbUri = `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`

const connection = async () => {
    try {
        console.log('Connecting...');
        const conn = await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected');
        return conn;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

module.exports = { connection };