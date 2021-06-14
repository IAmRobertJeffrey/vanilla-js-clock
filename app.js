
const clock = {
    hoursRotationPoint: document.querySelector("#hoursRotationPoint"),
    minutesRotationPoint: document.querySelector("#minutesRotationPoint"),
    secondsRotationPoint: document.querySelector("#secondsRotationPoint"),

    updateCurrentDate()
    {
        let currentFullDate = new Date();
        return currentFullDate;
    },
    updateHoursHand()
    {
        this.hoursRotationPoint.style.transform = `rotateZ(${clock.updateCurrentDate().getHours() * 30}deg)`;
        console.log(clock.updateCurrentDate().getHours());
    },
    updateMinutesHand()
    {
        this.minutesRotationPoint.style.transform = `rotateZ(${clock.updateCurrentDate().getMinutes() * 6}deg)`;
    },
    updateSecondsHand()
    {
        this.secondsRotationPoint.style.transform = `rotateZ(${clock.updateCurrentDate().getSeconds() * 6}deg)`;     
    }
    
    
};

 setInterval(clock.updateSecondsHand, 1000);
 setInterval(clock.updateMinutesHand, 1000);
 setInterval(clock.updateHoursHand, 1000);


