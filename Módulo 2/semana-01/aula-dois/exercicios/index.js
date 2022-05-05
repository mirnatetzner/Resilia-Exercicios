//utilizar métoxos document.querySelector, document.append, documentElement, addEventListener, atributos innerText e innerHTML, style para criar uma página que muda de layout com cliques, com arquivos html, css e js:


//COMPORTAMENTO: ao clicar as caixas devem ser empilhadas em colunas 
//modificar as cores das caixas internas quando clicar com o botão direito do mouse



var caixaprincipal = document.querySelector('.principal')


caixaprincipal.onclick = function () {
    caixaprincipal.style.flexDirection = 'column';
};

var um = document.querySelector('#um')
var dois = document.querySelector('#dois')
var tres = document.querySelector('#tres')
var caixinhas = document.querySelector('.caixinhas')

um.addEventListener('mouseup', mouseDireito) = um.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';

dois.addEventListener('mouseup', mouseDireito) = dois.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';

tres.addEventListener('mouseup', mouseDireito) = tres.style.backgroundColor = 'rgba(0, 0, 255, 0.3)';

function mouseDireito(e) {
    if (typeof e === 'object') {
           e == 2 == true
        } 
    }




