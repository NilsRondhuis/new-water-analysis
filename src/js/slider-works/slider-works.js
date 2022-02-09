import refs from "../refs/refs";

let count = 0;
let width;

function init() {
    width = refs.sliderWorks.clientWidth;
    
    refs.sliderLine.style.width = width * refs.imagesSlider.length + 'px';
    refs.imagesSlider.forEach(el => {
        el.style.width = width + 'px';
        el.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

refs.sliderBtnPrev.addEventListener('click', () => {
    count -= 1;
    if (count < 0) {
        count = refs.imagesSlider.length - 1;
    }
    rollSlider();
}); 

refs.sliderBtnNext.addEventListener('click', () => {
    count += 1;
    if (count >= refs.imagesSlider.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider() {
    refs.sliderLine.style.transform = `translate(-${count * width}px)`;
}