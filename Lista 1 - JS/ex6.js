/* 6. Escreva uma função que permita contar o número de vogais contidas em uma string
fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
retorna o número 3 (há 3 vogais nessa palavra).
*/

function contarVogais(texto){
    const vogais = "aeiouAEIOU";
    let count = 0;
    for(let i=0;i<texto.length;i++){
        if(vogais.includes(texto[i])){
            count ++;
        }
    }
    return count;
}

const res = contarVogais('Brocolis');
console.log(res);