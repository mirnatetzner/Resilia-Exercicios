/* Acessar um atributo dentro do objeto através da palavra reservada 'this' */

var lampada = {
    "acessa": true,
    "acender": function (){
        if(!this.acessa){
            this.acesa = true;
        } else {
            return "lâmpada já está acesa";
        }
    },
    "apagar": function(){
        if(this.acesa){
            this.acesa = false;
        } else{
            return "lâmpada já está apagada";
        }
    },
}

/* 
PADRÃO DE PROJETO
getters são métodos especiais de um objeto, eles são utilizados para retornar o valor de um atributo específico,
geralmente é uma junção entre "get" e o nome do atributo
o que é utilizado para pegar a cor, para saber qual valor está guardado ali  */

lampada = {
    "cor": "amarela",
    "getCor": function(){
        return this.cor;
    }
}

/* Setters - no portugues setar um novo visualViewport
São métodos especiais de um objeto
Eles são utilizados para alterar o valor de um atributo específico . 
Para isso eles precisam receber como argumento o novo valor.Elesseu nome é geralmente a junção 'set' +nome do atributo
 */
lampada = {
    "cor": "Amarela",
    "setCor":function (novaCor){
        this.cor = novaCor;
    }
}


// Conceito de modelar

//ATIVIDADE MODELANDO UM CARRO

/* 
JSON stringify

pega um objeto JSON e transforma em string */

var meuObjeto = {
    "nome": "objeto da Mirna",
    "getNome": function (){
        return this.nome;

    }
}

meuObjeto.getNome


é um método do objeto JSON

var texto = JSON.stringify(meuObjeto);

> texto;
//retorna: '{"nome":"objeto da Mirna"}'


//o stringify não guarda os métodos, só os atributos e valores

/* 
JSON.parse 
transfora texto em objeto
numeros não ficam entre aspas quando estão como stringify e quando retorna tipo número*/

/* 
SERIALIZAÇÃO é o processo de transformar um objeto em string para enviar e depois 
transformar novamente quando for utiliza-lo */