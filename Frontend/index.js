window.onload = function (){
    
    var sanduicheModalTitle = $('#sanduicheTipo1').text();
    document.getElementById('itemSelecionado').innerHTML = sanduicheModalTitle;
    var sanduicheModalBody = document.querySelector(".modal-body");
    var sanduicheModalImage = document.createElement("IMG");
    sanduicheModalImage.width = "450";
    sanduicheModalImage.src = document.getElementById("img-hamburguer").src;
    sanduicheModalBody.appendChild(sanduicheModalImage);
}

function displayAddition(){
    
    var arrow = document.getElementById('arrow-btn');
    arrow.classList.toggle('rotate');
    if(document.getElementById('additionLine1').style.display == "none"){
        document.getElementById('additionLine1').style.display = "flex";
        document.getElementById('additionLine2').style.display = "flex";
        document.getElementById('additionLine3').style.display = "flex";
    } else {
        document.getElementById('additionLine1').style.display = "none";
        document.getElementById('additionLine2').style.display = "none";
        document.getElementById('additionLine3').style.display = "none";
    }
}