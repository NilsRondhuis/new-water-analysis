import refs from "../refs/refs";

window.addEventListener('resize', () => {
    a(refs.orderFormSection.clientHeight);
});

function a(size) {
    refs.contactsSection.style.height = `${size}px`;
}
a(refs.orderFormSection.clientHeight);