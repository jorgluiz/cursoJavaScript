const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//1 - função filtrar o país 
const chineses = f => f.pais === 'China'
//2 - função filtrar mulheres chinesas
const mulheres = f => f.genero ==='F'
//3 - função filtrar o menor salário
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)

    // mulher chinesa com menor salário
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)

})