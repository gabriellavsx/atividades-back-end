/*9. Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a
média de idades das pessoas presentes na lista.
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
  
function calcularMediaIdades(listaPessoas) {
    const totalIdades = listaPessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
    const mediaIdades = totalIdades / listaPessoas.length;
    return mediaIdades;
  }
  

  const res = gerarPessoa(2);
  console.log(res);
  const mediaIdades = calcularMediaIdades(res);
  console.log(`A média de idades é: ${mediaIdades}`);
  