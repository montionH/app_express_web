//const {response} = require('express');

const pool = require('../data/config');

//ruta de la app
const router = app => {
        //mostrar mensaje de bienvenidad root
        app.get('/', (request, response) => {
            response.send({
                message: 'bienvenido isaac a node.js express rest API'
            });
        });

        //mostrar todos los usuarios
        app.get('/users', (request, response) => {
            pool.query('SELECT * FROM users', (error, result) => {
                if (error) throw error;

                response.send(result);
            });
        });

        //mostrar un solo usuario por id
        app.get('/users/:id', (request, response) => {
            const id = request.params.id;

            pool.query('SELECT * FROM users WHERE id=?', id, (error, result) => {
                if (error) throw error;
                response.send(result);

            });
        });
        //agregar un nuevo usuario
        app.post('/users', (request, response) => {
            pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
                if (error) throw error;

                response.status(201).send(`User added with ID: ${result.insertId}`);
            });
        });

    }
    //exportar el router
module.exports = router;