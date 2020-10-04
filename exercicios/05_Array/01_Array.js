console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
//undefined
console.log(aprovados[3])

//adicionando ou substituir um elemento 
aprovados[3] = 'Paulo'
console.log(aprovados[3])
//adicionar novo elemento no Array
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Júnior'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // alterar o array (ordenando)
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
// função splice. Posso add e remover
aprovados.splice(1, 1, /*'Elemento1', 'Elemento2'*/)
console.log(aprovados)