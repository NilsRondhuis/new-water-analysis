import { error, defaultModules } from '@pnotify/core/dist/PNotify';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

export default function () {
    error({
        title: 'Сталася помилка :(',
        text: "Спробуйте заповнити дані ще раз, або відновити зв'язок з інтернетом.",
        maxTextHeight: null,
        closerHover: document.body.clientWidth < 1199 ? false : true,
        icon: false,
        shadow: true,
        delay: 111113000,
        sticker: false,
    });
}