//Aluna: Maria Gabriella Victor Gomes da Silva 
const express = require('express');
const app = express();
const path = require('path');

// para o express entender os dados do html req.body
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


//1. Crie 2 rotas e apresente uma hiperligação (link) em cada uma delas para a outra.
app.get('/rota1', (req, res) =>
    res.send('<h2>Rota 1</h2><br><a href="http://localhost:3000/rota2">Ir para rota 2</a>')
);

app.get('/rota2', (req, res) =>
    res.send('<h2>Rota 2</h2><br><a href="http://localhost:3000/rota1">Ir para rota 1</a>')
);

//2. Crie uma rota que receba um texto por parâmetro GET (query) e exiba o mesmo invertido. 
//(http://localhost:3000/inverter/:texto)

app.get('/inverter/:texto', (req, res) => {
    const textoInvertido = req.params.texto.split('').reverse().join('');
    res.send('Texto invertido = ' + textoInvertido);
});


/*3. Crie uma rota que receba 2 valores por POST (usuário e senha) e faça a validação da mesma. 
Se a senha for 2 vezes o nome do usuário, exiba uma mensagem de que o usuário possui permissão de acesso, caso contrário informe que não possui.*/ 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const user = req.body.user;
    const senha = req.body.senha
    if (senha === user + user) {
        res.send('<h2>Acesso permitido!</h2>');
    }
    else {
        res.send('<h2>Acesso negado!</h2>');
    }
});

app.listen(3000, () =>
    console.log('Server running...')
);

