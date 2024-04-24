//Aluna: Maria Gabriella Victor Gomes da Silva 
const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// para o express entender os dados do html 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use(session({
    secret: 'seu_segredo_secreto',
    resave: false,
    saveUninitialized: false
}));
  

app.use(passport.initialize());
app.use(passport.session());
  
const users = [];
  
passport.use(new LocalStrategy((username, password, done) => {
  const user = users.find(u => u.username === username);
  if (!user || user.password !== password) {
    return done(null, false, { message: 'Usuário ou senha inválidos' });
  }
  return done(null, user);
}));
  

passport.serializeUser((user, done) => {
  done(null, user.id);
});
  

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});
  

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registro.html'));
});

app.post('/', (req, res) => {
    const { username, password } = req.body;
    // Verifica se o usuário já existe
    if (users.some(user => user.username === username)) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }
    // Cria um novo usuário
    const newUser = {
      id: Date.now().toString(),
      username,
      password
    };
    users.push(newUser);
    console.log('Novo usuário registrado:', newUser);
    res.json({ message: 'Usuário registrado com sucesso' });
});
  
  

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })
);
// Rota para tarefas
app.get('/tarefas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tarefas.html'));
});

app.listen(3000, () =>
    console.log('Server running...')
);


