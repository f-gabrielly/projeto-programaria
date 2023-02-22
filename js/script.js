document.getElementById("botao-enviar").addEventListener("click", validacao )

function validacao(){
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value

    if(nome != "" && email !="" && telefone !=""){
        alert("Dados enviados com sucesso!")
    }else{
        alert("Por favor, preencha todos os campos.")
    }
}


