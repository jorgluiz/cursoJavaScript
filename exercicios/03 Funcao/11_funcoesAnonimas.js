/*importante OBS: Trabalhar com funções normais você pode nomear funções e
                  criar função anônima e passar ela para ser executada em outra função 
                  ou pode armazenar uma função anônima dentro de uma variável 
 */
//função anônima (sem nome)
 const soma = function (x, y){
     return x + y
 }

 const imprimirResultado = function (a, b, operacao = soma){
     console.log(operacao(a, b))
      }

 imprimirResultado(3, 4)
 imprimirResultado(3, 4, soma)
 //passando uma função anônima diretamente para outra função. Dentro do parâmetro 
 imprimirResultado(3, 4, function (x, y) {
     return x - y
 })

 //Função arrow. Bem simplificada 
 imprimirResultado(3, 4, (x, y) => x * y)

 //Função dentro de um objeto ***
 const pessoa = {
     falar: function () {
         console.log('Opa')
     }
 }

pessoa.falar()
console.log('Fim do código!')

