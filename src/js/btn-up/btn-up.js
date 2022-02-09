import refs from "../refs/refs";
import scrollInto from "../common/scroll-into-start";


window.addEventListener('scroll', getScrollPageY);
refs.btnUp.addEventListener('click', () => {
    scrollTo(document.body)
});

function getScrollPageY() {
    const rect = document.body.getBoundingClientRect();
    if (rect.y < -1000) {
        refs.btnUp.classList.add('btn-anim');
    } else {
        refs.btnUp.classList.remove('btn-anim');
    }
}

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop, 
        behavior: 'smooth',
    });
}
