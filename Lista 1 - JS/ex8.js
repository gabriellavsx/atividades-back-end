/*8. Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e
idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista
de nomes pré-definida; e gere idades entre 18 e 90 anos.
*/

function gerarPessoa(quantidade) {
    const nomes = ["Maria", "Ellen", "Carolline", "Carolina", "Fernando", "Gabriel", "João", "Fabio", "Angela", "Bruna"];
    const listaPessoas = [];
  
    for (let i = 0; i < quantidade; i++) {
      const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;
      const nome = nomes[Math.floor(Math.random() * nomes.length)];
      const pessoa = {
        id: i + 1,
        nome: nome,
        idade: idade
      };
      listaPessoas.push(pessoa);
    }
  
    return listaPessoas;
}
  

const res = gerarPessoa(2);
console.log(res);