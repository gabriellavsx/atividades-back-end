/* média de idades das pessoas presentes na lista.
10. Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os
dados por um dos atributos informados por parâmetros.*/

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
function ordenarDados(listaPessoas, atributo) {
    return listaPessoas.sort((a, b) => {
      if (a[atributo] < b[atributo]) {
        return -1;
      }
      if (a[atributo] > b[atributo]) {
        return 1;
      }
      return 0;
    });
  }
  const pessoas = gerarPessoa(10);
  console.log(pessoas);
  const ordenados = ordenarDados(pessoas,'nome');
  console.log(ordenados);
