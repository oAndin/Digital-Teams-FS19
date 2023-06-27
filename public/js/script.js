console.log("Hello World!");

btnCriarEquipe.onclick = function() {
    overlay.classList.add('active');
    modal.classList.add('active');
}
overlay.onclick = function() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
}

btnClose.onclick = function() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
}
