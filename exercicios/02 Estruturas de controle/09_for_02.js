const notas = [6, 4, 8, 0, 70, 10,]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}
//console.log()

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(typeof pessoa)