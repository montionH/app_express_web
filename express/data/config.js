const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'usuario', //credenciales generada en phpmyadmin
    password: 'usuario',
    database: 'api',
};

//crear a mysql pool

const pool = mysql.createPool(config);
//exportar a pool
module.exports = pool;