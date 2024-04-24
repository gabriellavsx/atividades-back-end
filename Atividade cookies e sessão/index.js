const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mustacheExpress = require('mustache-express');

const app = express();


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


app.use(express.urlencoded({ extended: true }));

// Configuração da sessão
app.use(session({
  secret: 'segredo_sessao',
  resave: false,
  saveUninitialized: false
}));

app.use(cookieParser());

let totalAccessCounter = 0;

app.get('/', (req, res) => {
  totalAccessCounter++;

  if (!req.session.userAccessCounter) {
    req.session.userAccessCounter = 1;
  } else {
    req.session.userAccessCounter++;
  }

  res.render('index');
});

app.post('/salvauser', (req, res) => {
  req.session.username = req.body.username;
  res.redirect('/');
});

app.get('/random', (req, res) => {
  let randomNumber;
  if (!req.cookies.randomNumber) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    res.cookie('randomNumber', randomNumber, { maxAge: 900000, httpOnly: true });
  } else {
    randomNumber = req.cookies.randomNumber;
  }
  res.send(`Número aleatório: ${randomNumber}`);
});

app.get('/contador', (req, res) => {
  res.send(`Total de acessos: ${totalAccessCounter}, Acessos do usuário: ${req.session.userAccessCounter}`);
});

app.listen(3000, () => {
  console.log('Server running...');
});
