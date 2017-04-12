function logar() {
    let name = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    if (verificar(name, senha)) {
        localStorage.setItem("user", name);
        let path = window.location.pathname;
        let url = path.replace('areacliente', 'dashboard');
        window.location.assign(url);



    } else {
        window.alert("É preciso preencher o campo Usuário e Senha.");

    }

}


function verificar(name, senha) {
    if (name == "" || senha == "")
        return false;

    return true;

}