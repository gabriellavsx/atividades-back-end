/*Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
multiplicação e divisão e retorne o resultado da operação.
Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que
a operação informada é válida. Retorne nulo para os casos de erro.  */

function calculadoraSimples(valor1,valor2,operacao){
    if(!['+','-','*','/'].includes(operacao)){
        console.log("operação informada é válida");
        return null;
    }
    if(operacao == '/' && valor2 ==0){
        console.log("Não é possível divisão por zero");
        return null;
    }

    switch (operacao) {
        case '+':
          return valor1 + valor2;
        case '-':
          return valor1 - valor2;
        case '*':
          return valor1 * valor2;
        case '/':
          return valor1 / valor2;
        default:
          return null;
      }
}

/*const res = calculadoraSimples(10, 5, '+');
console.log(res);*/


