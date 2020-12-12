class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    setInt = setInterval(() => {
        const nowDate = Date.now();
        const time = this.targetDate - nowDate;
        this.updateClockface(time);
        this.timeFinish(time);
    }, 1000);

    updateClockface(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        const timerFace = document.querySelector(this.selector);
        console.log(timerFace);
        timerFace.querySelector('.value[data-value="days"]').textContent = `${days}`;
        timerFace.querySelector('.value[data-value="hours"]').textContent = `${hours}`;
        timerFace.querySelector('.value[data-value="mins"]').textContent = `${mins}`;
        timerFace.querySelector('.value[data-value="secs"]').textContent = `${secs}`;

    }

    pad(value) {
        return String(value).padStart(2, "0");
    }
    timeFinish(time) {
        if (time < 0) {
            clearInterval(this.setInt);
            this.timerFace.textContent = "Finish";
        }
    }
};
new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jan 25, 2021"),
});

new CountdownTimer({
    selector: "#timer-2",
    targetDate: new Date("Jan 01, 2021"),
});