var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('hola mundo!');
});
app.listen(3000, function() {
    console.log('aplicacion ejemplo, escuchando en puerto 3000');
});