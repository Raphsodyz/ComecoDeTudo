// $('selectHamburguer').click(() => {
//     let itemSelecionado = {};
//     sanduiche.nome = $('#sanduicheTipo').val();
// })

window.onload = function (){
    
    var sanduicheModalTitle = $('#sanduicheTipo1').text();
    document.getElementById('itemSelecionado').innerHTML = sanduicheModalTitle;
}