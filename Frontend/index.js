var sanduicheModalAddition = document.getElementsByClassName('form-check form-check-inline');

function selecionarSanduiche(idSanduiche, idImageSanduiche){

    var sanduicheSelecionado = $('#sanduicheTipo' + idSanduiche).text();
    document.getElementById('SanduicheSelecionado').innerHTML = sanduicheSelecionado;
    var sanduicheModalBody = document.getElementById('modal-sanduiche-img');
    var sanduicheModalImage = document.getElementById('sanduicheModalImage');
    sanduicheModalImage.width = "450";
    sanduicheModalImage.src = document.getElementById("img-hamburguer" + idImageSanduiche).src;
    sanduicheModalBody.appendChild(sanduicheModalImage);
}

function selecionarBebida(idBebida, idImageBebida){
    
    var bebidaSelecionada = $('#bebidaTipo' + idBebida).text();
    document.getElementById('BebidaSelecionada').innerHTML = bebidaSelecionada;
    var bebidaModalBody = document.getElementById('modal-bebida-img');
    var bebidaModalImage = document.getElementById('bebidaModalImage');
    bebidaModalImage.width = "450";
    bebidaModalImage.src = document.getElementById("img-bebida" + idImageBebida).src;
    bebidaModalBody.appendChild(bebidaModalImage);
}

function displayAddition(){
    
    var arrow = document.getElementById('arrow-btn');
    arrow.classList.toggle('rotate');
    if(document.getElementById('additionLine1').style.display == "none"){
        for(var i = 0; i < sanduicheModalAddition.length; i++){
            sanduicheModalAddition[i].style.display = "flex";
        }
    } else {
        for(var j = 0; j < sanduicheModalAddition.length; j++){
            sanduicheModalAddition[j].style.display = "none";
        }
    }
}

function modalClear(){

    document.getElementById('quantidade').value = '';
    document.getElementById('modalObsText').value = '';
    var sanduicheModalAdditionClear = document.getElementsByClassName('form-check-input');
    for(var k = 0; k < sanduicheModalAdditionClear.length; k++){
        sanduicheModalAdditionClear[k].checked = false;
    }
    
    for(var l = 0; l < sanduicheModalAddition.length; l++){
        sanduicheModalAddition[l].style.display = "none";
    }

}