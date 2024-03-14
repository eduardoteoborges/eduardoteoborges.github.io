function validar() {
    let nome = document.getElementById("nome");

    let sobrenome = document.querySelector("sobrenome");

    let ano_nasc = document.querySelector("ano_nasc");
    
    let graduacao = document.querySelector("graduacao");

    let matutino = document.querySelector("matutino");

    let vespertino = document.querySelector("vespertino");

    let noturno = document.querySelector("graduacao");




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

    if (matutino.value == "") {
        alert("Erro: não pode campo vazio!");
        return false;
    }

    if (vespertino.value == "") {
        alert("Erro: não pode campo vazio!");
        return false;
    }

    if (noturno.value == "") {
        alert("Erro: não pode campo vazio!");
        return false;
    }

    alert("Sucesso"); 
}