import refs from "../refs/refs";

refs.inputName.addEventListener('focus', onFocusInputName);
refs.inputName.addEventListener('blur', onNotFocusInputName);

refs.inputTel.addEventListener('focus', onFocusInputTel);
refs.inputTel.addEventListener('blur', onNotFocusInputTel);

refs.inputCity.addEventListener('focus', onFocusInputCity);
refs.inputCity.addEventListener('blur', onNotFocusInputCity);

refs.formMessage.addEventListener('focus', onFocusMessage);
refs.formMessage.addEventListener('blur', onNotFocusMessage);

function onFocusInputName(e) {
    refs.labelName.classList.add('form__label-is-focus');
    e.currentTarget.classList.add('form__input--color-is-focus');
}
function onNotFocusInputName(e) {
    if (e.currentTarget.value === '') {
        refs.labelName.classList.remove('form__label-is-focus');
        e.currentTarget.classList.remove('form__input--color-is-focus');
    } else return;
}

function onFocusInputTel(e) {
    refs.labelTel.classList.add('form__label-is-focus');
    e.currentTarget.classList.add('form__input--color-is-focus');
    if (e.currentTarget.value.length > 4) {
        return;
    } else e.currentTarget.value = '+380';
}
function onNotFocusInputTel(e) {
    if (e.currentTarget.value.length === 4) {
        refs.labelTel.classList.remove('form__label-is-focus');
        e.currentTarget.classList.remove('form__input--color-is-focus');
        e.currentTarget.value = '';
    } else if (e.currentTarget.value === '') {
        refs.labelTel.classList.remove('form__label-is-focus');
        e.currentTarget.classList.remove('form__input--color-is-focus');
    } else return;
}

function onFocusInputCity(e) {
    refs.labelCity.classList.add('form__label-is-focus');
    e.currentTarget.classList.add('form__input--color-is-focus');
}
function onNotFocusInputCity(e) {
    if (e.currentTarget.value === '') {
        refs.labelCity.classList.remove('form__label-is-focus');
        e.currentTarget.classList.remove('form__input--color-is-focus');
    } else return;
}

function onFocusMessage(e) {
    e.currentTarget.classList.add('form__input--color-is-focus');
}
function onNotFocusMessage(e) {
    e.currentTarget.classList.remove('form__input--color-is-focus');
}