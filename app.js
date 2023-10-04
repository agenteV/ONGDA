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
