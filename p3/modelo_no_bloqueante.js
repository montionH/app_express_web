var fs = require('fs')
console.log('\nabriendo archivo...')

var content = fs.readFileSync('el_quijote.txt', 'utf8', function(error, content) {
    console.log(content)
})
console.log(content)
console.log('\nhaciendo otra cosa')
console.log(process.uptime())