import refs from "../refs/refs";


refs.menuBtn.addEventListener('click', () => {
    onOpenAndClose();
    heightMenu();
});


function onOpenAndClose() {
    refs.iconMenu.classList.toggle('is-hidden');
    refs.iconCross.classList.toggle('is-show');

    if (refs.iconMenu.classList.contains('is-hidden')) {
        refs.listNav.classList.add('list-nav--is-show');
        document.body.classList.add('body-hidden-scroll');
        refs.listNavItem.forEach(el => el.classList.add('list-nav__item--is-show'));
        refs.heroSection.classList.remove('hero--shadow-bottom');
    } else {
        refs.listNav.classList.remove('list-nav--is-show');
        document.body.classList.remove('body-hidden-scroll');
        refs.listNavItem.forEach(el => el.classList.remove('list-nav__item--is-show'));
        refs.heroSection.classList.add('hero--shadow-bottom');
    }
}

function heightMenu() {
    refs.listNav.style.height = `${refs.heroSection.clientHeight}px`;
}