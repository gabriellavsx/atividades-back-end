/*2. Escreva uma função que retorne uma String contendo uma sequência de
N mensagens do texto informado pelo usuário. O valor de N e a mensagem são
informados por parâmetro.*/

function gerarSequencia(n, mensagem){
    let sequencia ='';
    for(let i =0;i<n;i++){
        sequencia+=`${mensagem}\n`
    }
    return sequencia;
}

/*const men = gerarSequencia(5,'olá');
console.log(men);*/