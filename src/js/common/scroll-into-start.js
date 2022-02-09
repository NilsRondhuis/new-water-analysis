export default function (target) {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}