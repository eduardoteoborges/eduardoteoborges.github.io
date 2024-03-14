function validar() {
    let nome = document.getElementById("nome");

    let email = document.querySelector("sobrenome");

    let email = document.querySelector("data_nasc");
    
    let profissao = document.querySelector("graduacao");


    if (nome.value == "") {
        alert("Erro: nome vazio!");
        return false;
    }

    if (sobrenome.value == "") {
        alert("Erro: sobrenome vazio!");
        return false;
    }

    if (data_nasc.value == "") {
        alert("Erro: data vazia!");
        return false;
    }


    if (graduacao.value == "") {
        alert("Erro: graduacao vazia!");
        return false;
    }

    alert("Sucesso"); 
}