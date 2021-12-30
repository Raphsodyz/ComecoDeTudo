window.onload = function (){
    
    var sanduicheModalTitle = $('#sanduicheTipo1').text();
    document.getElementById('itemSelecionado').innerHTML = sanduicheModalTitle;
    var sanduicheModalBody = document.querySelector(".modal-body");
    var sanduicheModalImage = document.createElement("IMG");
    sanduicheModalImage.width = "450";
    sanduicheModalImage.src = document.getElementById("img-hamburguer").src;
    sanduicheModalBody.appendChild(sanduicheModalImage);
}

function displayAbout(){
    var arrow = document.getElementById('arrow-btn');
    arrow.classList.toggle('rotate');
}