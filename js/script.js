//Скрипты index.html

//Модальное окно
let letter = document.querySelector(".contact-us");
let letterForm = document.querySelector(".letter-form__hidden");

letter.addEventListener("click", function(evt){
  evt.preventDefault();
  letterForm.classList.add("modal-show");
});

//Закрытие модального окна
let closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", function(){
  letterForm.classList.remove("modal-show");
});

//слайдер дрелей
let paginations = document.querySelectorAll('.slider__pagination-item');
let rightArrow = document.querySelector('.slider__navigation-next');
let leftArrow = document.querySelector('.slider__navigation-prev');
let firstSlide = document.querySelector('.slider__item');
let secondSlide = document.querySelector('.second-slider');
let toggleFunctionArrow = function() {
  firstSlide.classList.toggle('slider__item--active');
  secondSlide.classList.toggle('slider__item--active');
  paginations.forEach(function(pagination) {
    pagination.classList.toggle('slider__pagination-item--active');
  });
};

//console.log(rightArrow);
//console.log(firstSlide);
//console.log(secondSlide);
rightArrow.onclick = toggleFunctionArrow;
leftArrow.onclick = toggleFunctionArrow;

//Переключение слайдов pagination-ом
/*paginations.forEach(function(pagination) {
  pagination.onclick = function() {
    toggleFunctionArrow();
  };
});*/
