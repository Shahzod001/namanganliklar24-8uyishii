var elOpenBtn = document.querySelector(".btn");
var elModal = document.querySelector(".modal-box");
var elCloseModalBtn = document.querySelector(".modal-box");
var elOver = document.querySelector("body");

elOpenBtn.addEventListener("click" , function(){
    elModal.classList.add("modal-open");
    elOver.classList.add("over")
});
elCloseModalBtn.addEventListener("click" , function(){
    elModal.classList.remove("modal-open");
    elOver.classList.remove("over");
});