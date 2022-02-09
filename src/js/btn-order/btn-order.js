import refs from "../refs/refs";

refs.btnOrder.forEach(btn => {
    btn.addEventListener('click', onClickBtnOrder);
});

function onClickBtnOrder() {
    refs.orderFormSection.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    });
}