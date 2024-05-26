let modal = document.querySelector(".modal-window");
let btnClose = document.getElementById("cross");
let btnOpen = document.getElementById("open");

btnOpen.onclick = function(){
    modal.classList.add('active');
}
btnClose.onclick = function(){
    modal.classList.remove('active');
}