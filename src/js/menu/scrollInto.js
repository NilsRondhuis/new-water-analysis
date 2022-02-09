import refs from "../refs/refs";
import scrollInto from "../common/scroll-into-start";

refs.listNav.addEventListener('click', scrollSection);

function scrollSection(e) {
    e.preventDefault();

    if (e.target.classList.contains('js-link-about')) {
        scrollInto(document.querySelector('.section-about'));
        removeClassMenu();
    } else if (e.target.classList.contains('js-link-price')) {
        scrollInto(document.querySelector('.section-price'));
        removeClassMenu();
    } else if (e.target.classList.contains('js-link-team')) {
        scrollInto(document.querySelector('.section-work'));
        removeClassMenu();
    } else if (e.target.classList.contains('js-link-contacts')) {
        scrollInto(document.querySelector('.section-contacts'));
        removeClassMenu();
    }

}

function removeClassMenu() {
    refs.listNav.classList.remove('list-nav--is-show');
    refs.listNavItem.forEach(el => el.classList.remove('list-nav__item--is-show'));
    document.body.classList.remove('body-hidden-scroll');
    refs.iconCross.classList.remove('is-show');
    refs.iconMenu.classList.remove('is-hidden');
}