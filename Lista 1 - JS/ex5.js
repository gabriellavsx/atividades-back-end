/* 5 - Escreva uma função que retorne um número fornecido pelo usuário, porém
invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número
578. O argumento da função e o retorno deve ser um valor inteiro.
*/

function inverterNumero(numero){
    const stringnum = numero.toString();
    const numInvertidoString = stringnum.split('').reverse().join('');
    const numeroInvertido = parseInt(numInvertidoString,10);
    return numeroInvertido;
}

const numeroInvertido = inverterNumero(875);
console.log(numeroInvertido);