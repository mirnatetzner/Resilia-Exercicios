// ao clicar no button com o conteúdo 'abrir' a aplicacao deve criar um  
//<p> com o conteúdo 'Estamos abertos!' e adiciona-lo ao corpo da página  

var queroAbrir = document.querySelector('#abrir');
var caixa = document.querySelector('div');

queroAbrir.onclick = novoParagrafo
var Paragrafo = document.createElement('p');

function novoParagrafo (){
    Paragrafo.innerText = 'Estamos abertos!';
    caixa.append(Paragrafo);
}

var queroFechar = document.querySelector('#fechar');

queroFechar.onclick = trocaLetreiro

function trocaLetreiro (){
    Paragrafo.innerText = 'Estamos fechados!'

}