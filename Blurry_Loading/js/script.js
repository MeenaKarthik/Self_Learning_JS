const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring(){
    load++;

    if(load > 99) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    // map 0 - 100 to 1 - 0 for opacity (solid to disappear)
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    //image going from blurred (max 30 px blurred) to clear image (0 px) at the same amount of time as load goes from 0 - 100
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};