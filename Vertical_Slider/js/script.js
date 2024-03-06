const sliderContainer  = document.querySelector('.slider-container');
const slideRight  = document.querySelector('.right-slide');
const slideLeft  = document.querySelector('.left-slide');
const upButton  = document.querySelector('.up-button');
const downButton  = document.querySelector('.down-button');
//get all the divs (count) in class="right-slide" (background images)
const slidesLength  = slideRight.querySelectorAll('div').length;

console.log(slidesLength); //4


let activeSlideIndex = 0;

//get the last index (3) to move to the correct position
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    console.log(sliderHeight);
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    } else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * 
        sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * 
            sliderHeight}px)`;

}



