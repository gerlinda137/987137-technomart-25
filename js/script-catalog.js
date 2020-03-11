скрипты catalog.html
let toCart = document.querySelectorAll(".to-buy");
let toCartModal = document.querySelector(".added-to-basket__hidden");

toCart.forEach(function(item) {
  item.addEventListener("click", function(){
    toCartModal.classList.add("modal-show");
  });
});

let closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", function(){
  toCartModal.classList.remove("modal-show");
});
