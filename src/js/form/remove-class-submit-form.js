export default function () {
    const fields = document.querySelectorAll('.form__input, .form__message');
    const lables = document.querySelectorAll('.form__label');

    fields.forEach(field => {
        field.classList.remove('form__input--color-is-focus');
    });
    lables.forEach(label => {
        label.classList.remove('form__label-is-focus');
    });
}
