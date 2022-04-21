function dirigirEBeber(idade){
    if (idade >= 18){
        return console.log("Já pode dirigir e beber");
    } else{
        return console.log("Não pode nem dirigir nem beber");
    } 
}

dirigirEBeber(6)
dirigirEBeber(79)


// ----------------------------------------------------------

function previsaoRodagem (gasolinaConsumida, Mkm){
    return console.log(gasolinaConsumida*Mkm + "Km") 
}

previsaoRodagem(15,5)

// -----------------------------------------

eMail = prompt ("Coloque seu email:"); 


function validaEmail(){
    if (eMail.indexOf('@') != -1 ){
        return true;
    } else {
        return false;
    }

}

function ExibeResultadoValidacao(){
    if (validaEmail () == true) {
        document.write("<p>E-mail validado</p>");
    }
    else {
        document.write("<p>E-mail fornecido INVALIDO</p>");
    }
}


ExibeResultadoValidacao(validaEmail);
