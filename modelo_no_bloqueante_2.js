'use strict'
setTimeout(function() {
    console.log('tarea 1');
}, 3000);
setTimeout(function() {
    console.log('tarea 2');
}, 20000);
setTimeout(function() {
    console.log('tarea 3');
}, 10000);
setTimeout(function() {
    console.log('tarea 4');
}, 2000);
console.log('tarea 5');
console.log(process.uptime())
console.log('fin del programa');