const fs = require('fs');


const caminho = __dirname + '/16arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf8')
console.log(conteudo)

// assincrono...
//EX 01
fs.readFile(caminho, 'utf8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.hots}:${config.db.port}`)
})

// or

//EX 02
const config = require('./16arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})