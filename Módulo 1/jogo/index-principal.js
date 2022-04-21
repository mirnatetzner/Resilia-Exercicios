// js simples 
// var playGame = document.getElementById('play')
document.getElementById('play').onclick = function () {
    document.getElementById('menu').style.display = "none"
    document.getElementById('choose').style.display = "flex"
}

var marceline = document.getElementById('bt-marceline') 
marceline.onclick = function () {
    window.location.href = './marceline/index.html';   
}

var reigelado = document.getElementById('bt-rei-gelado') 
reigelado.onclick = function () {
    window.location.href = './rei-gelado/index.html';   
}

var jake = document.getElementById('bt-jake') 
jake.onclick = function () {
    window.location.href = './jake/index.html';   
}


// jquery method

// $(document).ready(function () {

//     $("#play").click(function () {
//         $(".main-menu").css("display", "none");
//         $(".choose-character").css("display", "block");

//     });

//     $("#bt-marceline").click(function () {
//         window.location.href = './marceline/index.html';
        
//     })

//     $("#bt-rei-gelado").click(function () {
//         window.location.href = './rei-gelado/index.html';
        
//     })

//     $("#bt-jake").click(function () {
//         window.location.href = './jake/index.html';
        
//     })
// })


