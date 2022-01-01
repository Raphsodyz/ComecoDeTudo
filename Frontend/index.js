var sanduicheModalAddition = document.getElementsByClassName('form-check form-check-inline');

window.onload = function (){
    
    var sanduicheModalTitle = $('#sanduicheTipo1').text();
    document.getElementById('itemSelecionado').innerHTML = sanduicheModalTitle;
    var sanduicheModalBody = document.querySelector(".modal-body");
    var sanduicheModalImage = document.createElement("IMG");
    sanduicheModalImage.width = "450";
    sanduicheModalImage.src = document.getElementById("img-hamburguer1").src;
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
        for(var i = 0; i < sanduicheModalAddition.length; i++){
            sanduicheModalAddition[i].style.display = "none";
        }
    }
}

function modalClear(){
    document.getElementById('quantidade').value = '';
    document.getElementById('modalObsText').value = '';
    var sanduicheModalAdditionClear = document.getElementsByClassName('form-check-input');
    for(var j = 0; j < sanduicheModalAdditionClear.length; j++){
        sanduicheModalAdditionClear[j].checked = false;
    }
    
    for(var k = 0; k < sanduicheModalAddition.length; k++){
        sanduicheModalAddition[k].style.display = "none";
    }

}