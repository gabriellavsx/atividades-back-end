/* 1. Escreva uma função que calcule e retorne o fatorial de um número.*/

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= numero; i++) {
        resultado *= i;
      }
      return resultado;
    }
}
  
/*const res = calcularFatorial(0);
console.log(res);*/
  