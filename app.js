const firebaseConfig = {
    apiKey: "AIzaSyBs60CFn9_f480ZNVzvTvDUtowb2SHOq2Y",
    authDomain: "projetoong-b55bb.firebaseapp.com",
    projectId: "projetoong-b55bb",
    storageBucket: "projetoong-b55bb.appspot.com",
    messagingSenderId: "291374527385",
    appId: "1:291374527385:web:06b138e25d3c14e7765908"
  };

firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click',()=>{
    const email = emailField.value;
    const password = passwordField.value;

firebase.auth().signInWithEmailAndPassword(email, password)
 .then((userCredential) => {
 // Usuário logado com sucesso
 const user = userCredential.user;
 console.log('Usuário logado:', user);
 })

.catch((error) => {
 // Tratar erros de autenticação
 const errorMessage = error.message;
 console.error('Erro de autenticação:', errorMessage);
 });
});

//

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

 

const app = express();

 

// Conectar ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cadastro', { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 20000 });

 

// Definir o modelo do usuário
const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    celular: String,
    endereco: String,
    complemento: String,
    numero: String,
    bairro: String,
    cidade: String,
    uf: String,
    cep: String
});

 

app.use(bodyParser.urlencoded({ extended: true }));

 

// Rota para salvar o usuário
app.post('/salvar-usuario', (req, res) => {
    const usuarioData = req.body;

 

    const usuario = new Usuario(usuarioData);

 

    usuario.save()
        .then(() => {
            res.json({ success: true });
        })
        .catch(error => {
            console.error('Erro ao salvar usuário:', error);
            res.json({ success: false });
        });
});

 

app.listen(3000, () => {
    console.log('Servidor está ouvindo na porta 3000');
});
