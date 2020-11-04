const formProximity = document.querySelectorAll('.catalog__form-proximity'),
    formRadio = document.querySelectorAll('.catalog__form-radio'),
    formCircle = document.querySelectorAll('.catalog__form-circle'),
    formRadioText = document.querySelectorAll('.catalog__form-radio-text'),
    formOption = document.querySelectorAll('.catalog__form-addoption'),
    formOptionSquare = document.querySelectorAll('.catalog__form-addoption-square'),
    formOptionText = document.querySelectorAll('.catalog__form-addoption-text'),
    more = document.querySelector('.catalog__form-more'),
    activeFormItem = document.querySelector('.catalog__form-hidden-item'),
    imgOne = document.querySelector('.catalog__form-img-one'),
    imgTwo = document.querySelector('.catalog__form-img-two'),
    imgThree = document.querySelector('.catalog__form-img-three'),
    proximityBox = document.querySelector('.catalog__form-proximity-wrapper'),
    radioBox = document.querySelector('.catalog__form-radio-box'),
    optionBox = document.querySelector('.catalog__form-addoption-box'),
    switcher = document.querySelector('.switcher-text'),
    switchBtn = document.querySelector('.switcher-button'),
    cls = document.querySelector('.close'),
    btnPlus = document.querySelector('.plus'),
    catalogItem = document.querySelectorAll('.catalog__body-item-hidd');

function cleanRadio() {
    for (let i = 0; i < formRadioText.length; i++) {
        formRadioText[i].classList.remove("active");
    }
    for (let i = 0; i < formCircle.length; i++) {
        formCircle[i].classList.remove("active");
    }
}

for (let i = 0; i < formProximity.length; i++) {
    formProximity[i].onclick = function (e) {
        e.target.classList.toggle("active");
    }
}

for (let i = 0; i < formRadio.length; i++) {
    formRadio[i].onclick = function () {
        cleanRadio();
        formRadioText[i].classList.toggle("active");
        formCircle[i].classList.toggle("active");
    }
}

for (let i = 0; i < formOption.length; i++) {
    formOption[i].onclick = function () {
        formOptionSquare[i].classList.toggle("active");
        formOptionText[i].classList.toggle("active");
    }
}

more.onclick = function () {
    more.classList.add("active");
    activeFormItem.classList.add("active");
}

imgOne.onclick = function () {
    proximityBox.classList.toggle("hidd");
    imgOne.classList.toggle("hidd");
}

imgTwo.onclick = function () {
    radioBox.classList.toggle("hidd");
    imgTwo.classList.toggle("hidd");
}

imgThree.onclick = function () {
    optionBox.classList.toggle("hidd");
    imgThree.classList.toggle("hidd");
}

switcher.onclick = function () {
    switchBtn.classList.toggle("no-active");
}

cls.onclick = function () {
    for (let i = 0; i < formProximity.length; i++) {
        formProximity[i].classList.remove("active");
    }

    cleanRadio();

    for (let i = 0; i < formOption.length; i++) {
        formOptionSquare[i].classList.remove("active");
        formOptionText[i].classList.remove("active");
    }

    switchBtn.classList.remove("no-active");
}

let count = 1;

btnPlus.onclick = function() {
    for (let i=0; i < 3*count; i++) {
        catalogItem[i].classList.add("show");
    }
    count++;
}