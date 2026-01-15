const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Criar Conta (que está no painel da direita)
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

// Entrar (que está no painel da esquerda)
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});