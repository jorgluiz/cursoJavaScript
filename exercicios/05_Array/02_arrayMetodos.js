const pilotos = ['Vettel', 'Alonso', 'Raikonen', 'Massa']
// pop() removo o ultimo elemento do array
pilotos.pop() 
console.log(pilotos)
// adicionando um elemento
pilotos.push('Verstappen')
console.log(pilotos)
// shifit() remove o primeiro elemento da lista
pilotos.shift()
console.log(pilotos)
// unshift() adiciona no primeiro elemento da lista
pilotos.unshift('Hamilton')
console.log(pilotos) 

//splice pode adicionar e remover elementos 

// adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)    
//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array (pega uma parte do array)
console.log(algunsPilotos1, 'novo array aqui***')

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2, 'novo array***')