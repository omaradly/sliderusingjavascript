//1-get information from html 
//array make by jse6
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
//get number of image
var slidesCount = sliderImages.length;
//number of image will start from it
var currentSlide = 1;
//to print number of this slide in it 
var slideNumberElement = document.getElementById('slider-number');
var nextBottom = document.getElementById('next');
var prevBottom = document.getElementById('prev');
//create indicators
var mainlist = document.createElement('ul');
//set id for this list
mainlist.setAttribute('id', 'main-ul');
//create li as number of images
var i;
for (i = 1; i <= slidesCount; i += 1) {
    var liList = document.createElement('li');
    //set index attribute to get the li in future
    liList.setAttribute('data-index', i);
    //set data in every li
    liList.appendChild(document.createTextNode(i));
    //set li in ul
    mainlist.appendChild(liList);
}
//add ul to page
document.getElementById('indicators').appendChild(mainlist);
// indicators created
var ulCreated = document.getElementById('main-ul');
//get array of li
var arrLi = Array.from(document.querySelectorAll('#main-ul li'));
//remove active class from images and li
function removerAllActives() {
    'use strict';
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    arrLi.forEach(function (l) {
        l.classList.remove('active');
    });
}
//create checker function
function theChecker() {
    'use strict';
    //set value if div number
    slideNumberElement.textContent = "Slide #" + (currentSlide) + " Of " + (slidesCount);
    removerAllActives();
    sliderImages[currentSlide - 1].classList.add('active');
    ulCreated.children[currentSlide - 1].classList.add('active');
    //chech if this the first slide
    if (currentSlide === 1) {
        prevBottom.classList.add('disabled');
    } else {
        //remove disabled class
        prevBottom.classList.remove('disabled');
    }
    //chech if this the last slide
    if (currentSlide === slidesCount) {
        nextBottom.classList.add('disabled');
    } else {
        //remove disabled class
        nextBottom.classList.remove('disabled');
    }
}
//function of events
function nextSlide() {
    'use strict';
    if (nextBottom.classList.contains('disabled')) {
        //do no thing
        return false;
    } else {
        currentSlide += 1;
        theChecker();
    }
}
function prevSlide() {
    'use strict';
    if (prevBottom.classList.contains('disabled')) {
        //do no thing
        return false;
    } else {
        currentSlide -= 1;
        theChecker();
    }
}
var x;
for (x = 0; x < arrLi.length; x += 1) {
    arrLi[x].onclick = function () {
        'use strict';
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
};
}

//events
nextBottom.onclick = nextSlide;
prevBottom.onclick = prevSlide;
theChecker();
