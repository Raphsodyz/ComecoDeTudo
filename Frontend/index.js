var sanduicheModalAddition = document.getElementsByClassName('form-check form-check-inline');

function selecionarSanduiche(idSanduiche, idImage){

    var sanduicheSelecionado = $('#sanduicheTipo' + idSanduiche).text();
    document.getElementById('itemSelecionado').innerHTML = sanduicheSelecionado;
    var sanduicheModalBody = document.querySelector(".modal-body");
    var sanduicheModalImage = document.getElementById('sanduicheModalImage');
    sanduicheModalImage.width = "450";
    sanduicheModalImage.src = document.getElementById("img-hamburguer" + idImage).src;
    sanduicheModalBody.appendChild(sanduicheModalImage);
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