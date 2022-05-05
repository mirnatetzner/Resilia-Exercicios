
cachorro.nome = prompt("Qual nome do cachorro?");
cachorro.nascimento = prompt("Quando ele nasceu?");

var cachorro = {
    nome,
    nascimento,
    latir: function(){
        alert('O cachorro Latiu');
       
    },
    comer: function(){
        alert('O cachorro comeu');
    },
    printaCachorro: function(){
        console.log(cachorro);
    },

};
