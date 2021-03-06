//Скрипты index.html

//Модальное окно
let letterLink = document.querySelector(".contact-us");
let letterForm = document.querySelector(".letter-form__hidden");
let letter = letterForm.querySelector(".letter");
let name = letterForm.querySelector("[name=name]");
let email = letterForm.querySelector("[name=e-mail]");

let isStorageSupport = true;
let storage = "";

let closeButton = document.querySelector(".close-button");

let mapLink = document.querySelector(".map");
let map = document.querySelector(".modal-map");
let mapClose = document.querySelector(".close-button__map");

let paginations = document.querySelectorAll(".slider__pagination-item");
let rightArrow = document.querySelector(".slider__navigation-next");
let leftArrow = document.querySelector(".slider__navigation-prev");
let firstSlide = document.querySelector(".slider__item");
let secondSlide = document.querySelector(".second-slider");

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

letterLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  letterForm.classList.add("modal-show");
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

letter.addEventListener("submit", function(evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    letter.classList.remove("modal-error");
    letter.offsetWidth = letter.offsetWidth;
    letter.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (letterForm.classList.contains("modal-show")) {
      letterForm.classList.remove("modal-show");
      letter.classList.remove("modal-error");
    }
  }
});

//Закрытие модального окна
closeButton.addEventListener("click", function() {
  letterForm.classList.remove("modal-show");
  letter.classList.remove("modal-error");
});

//карта
mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
});
mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
});

//слайдер дрелей
let toggleFunctionArrow = function() {
  firstSlide.classList.toggle("slider__item--active");
  secondSlide.classList.toggle("slider__item--active");
  paginations.forEach(function(pagination) {
    pagination.classList.toggle("slider__pagination-item--active");
  });
};

rightArrow.onclick = toggleFunctionArrow;
leftArrow.onclick = toggleFunctionArrow;
