let sliderElement = document.querySelector('#slider'); //input slider; 
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor'); //span tamanho caracteres;
let password = document.querySelector('#password'); //span password;

let containerPassword = document.querySelector('#container-password'); //div containere-password;
//Caracteres a serem utilizados na criação da senha;
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
let novaSenha = ''; //vazio

sizePassword.innerHTML = sliderElement.value; //mostrar o valor no input slider;
//mostrar o valor no input slider de acordo com a posição que está;
slider.oninput = function() { 
    sizePassword.innerHTML = this.value;
}
//Criar a senha;
function generatePassword() {
    let pass = '';
    //i é 0, n vai ter todos os caracteres de charset; enquanto i < o valor do slider;  ++i;
    for(let i = 0, n = charset.length; i < slider.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n)); //número aleatório;
    }
    
    containerPassword.classList.remove('hide'); //remover o container que esconde o campo senha;
    password.innerHTML = pass; //mostrar a senha;
    novaSenha = pass;
}

//clicar na senha e copiar;
function copyPassword() {
    alert('Senha copiada com sucesso!');
    navigator.clipboard.writeText(novaSenha);
}
