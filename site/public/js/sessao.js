// sessão
function validarSessao() {
    var email = sessionStorage.getItem('email');
    var senha = sessionStorage.getItem('senha');
    var cnpj = sessionStorage.getItem('idDistribuidora');


    if (email != null && senha != null && cnpj != null) {
    } else {
        window.location = "../login.html";
    }
}

function validarSessaoUsuario() {
    var email = sessionStorage.EMAIL_USUARIO;
    var senha = sessionStorage.SENHA_USUARIO;
   
    if (email == null && senha == null) {
        window.location = "../login.html"
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

