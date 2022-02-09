class CountDownTimer {
    constructor({ date, selector }) {
        this.timerId = null;
        this.date = date;

        this.refs = this.getRefs(selector);
    }

    getRefs(selector) {
        const refs = {};
        refs.timer = document.querySelector(selector);
        refs.days = document.querySelector('[data-value="days"]');
        refs.hours = document.querySelector('[data-value="hours"]');
        refs.mins = document.querySelector('[data-value="mins"]');
        refs.secs = document.querySelector('[data-value="secs"]');
        refs.value = document.querySelectorAll('.timer__num');

        return refs;
    }

    calcTimer = () => {
        const currentTime = new Date();
        const time = this.date - currentTime;
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.refs.days.textContent = days < 10 ? '0' + days : days;
        this.refs.hours.textContent = hours < 10 ? '0' + hours : hours;
        this.refs.mins.textContent = mins < 10 ? '0' + mins : mins;
        this.refs.secs.textContent = secs < 10 ? '0' + secs : secs;

        this.timerStop(time);
    }

    timerStart = () => {
        this.timerId = setInterval(this.calcTimer, 1000);
    }

    timerStop = (time) => {
        if (time <= 0) {
            clearInterval(this.timerId);

            this.refs.value.forEach(value => value.textContent = 'Finish');
        }
    }
}

const timer = new CountDownTimer({
    date: new Date('January 31, 2022 19:42:00'),
    selector: '#timer-1',
});

timer.timerStart();