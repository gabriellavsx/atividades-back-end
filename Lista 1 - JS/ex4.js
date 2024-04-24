/*4. Escreva uma função que retorne um vetor contendo o resultado da tabuada de um
número recebido por parâmetro. Cada resultado na respectiva posição do índice.
 */

function tabuada(num){
    const tabuada =[];
    for(let i =0; i<=10;i++){
        tabuada.push(num*i);
    }
    return tabuada;
}
const res = tabuada(7);
console.log(res);