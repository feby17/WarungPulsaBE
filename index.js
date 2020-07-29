const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:12345678@localhost:5432/warungpulsa';

const app = express()
var jsonParser = bodyParser.json()

app.use(cors())

app.post('/api/user', (req, res, next) => {
    const results = [];
    // Grab data from http request
    const data = {text: req.body.text, complete: false};
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        // SQL Query > Insert Data
        client.query('INSERT INTO m_user(username, password) values($1, $2)',
        [data.username, data.password]);
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM m_user');
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
});

app.get('/api/user', (req, res, next) => {
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM m_user ORDER BY username ASC;');
    // Stream results back one row at a time
    query.on('row', (row) => {
        results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.json(results);
        });
    });
});

app.get('/api/pelanggan', (req, res, next) => {
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT no_hp,COUNT(*) as jml_transaksi FROM t_transaksi GROUP BY no_hp');
    // Stream results back one row at a time
    query.on('row', (row) => {
        results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.json(results);
        });
    });
});

app.get('/api/produk', (req, res, next) => {
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM m_produk ORDER BY kode_produk ASC;');
    // Stream results back one row at a time
    query.on('row', (row) => {
        results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.json(results);
        });
    });
});

app.get('/api/transaksi', (req, res, next) => {
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM t_transaksi');
    // Stream results back one row at a time
    query.on('row', (row) => {
        results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
        done();
        return res.json(results);
        });
    });
});


app.post('/api/login', jsonParser,(req, res, next) => {
    const results = [];
    // Grab data from http request
    const data = {username: req.body.username, password: req.body.password};
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
        // Handle connection errors
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }
        // SQL Query > Select Data
        const query = client.query('SELECT * FROM m_user WHERE username = $1 AND password = $2',[data.username,data.password]);
        // Stream results back one row at a time
        query.on('row', (row) => {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
            done();
            if(results.length > 0 ){
                return res.json(results);
            }
            return res.status(500).json({success: false, data: "wrong username or password"});
        });
    });
});

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`App listening on port ${port}`))
