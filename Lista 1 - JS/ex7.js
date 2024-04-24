/* 7. Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo:
“(([]))” retorna true, “(([)])” retorna falso.
*/
function estaBemFormada(sequencia) {
    const pilha = [];
    const mapeamento = {
        '(': ')',
        '[': ']'
    };

    for (let i = 0; i < sequencia.length; i++) {
        const char = sequencia[i];
        if (mapeamento[char]) {
            pilha.push(char);
        } else {
            const topo = pilha.pop();
            if (char !== mapeamento[topo]) {
                return false;
            }
        }
    }

    return pilha.length === 0;
}


console.log(estaBemFormada("(([]))"));
console.log(estaBemFormada("(([)])")); 
