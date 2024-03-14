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

    const ano_nasc = parseInt(ano_nasc.value)

    if (ano_nasc < 2009) {
        alert("Você precisa ter pelo menos 15 anos para enviar o formulário.");
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