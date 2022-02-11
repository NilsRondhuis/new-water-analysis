import { success, defaultModules } from '@pnotify/core/dist/PNotify';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});


export default function() {
    success({
        title: 'Чудово!',
        text: 'Ваша заявка прийнята, очікуйте дзвінок спеціаліста.',
        maxTextHeight: null,
        closerHover: document.body.clientWidth < 1199 ? false : true,
        icon: false,
        shadow: true,
        delay: 3000,
        sticker: false,
    });
}



