const hourhand = document.querySelector(".hour");
const minutehand = document.querySelector(".minute");
const secondhand = document.querySelector(".second");

function setTime() {



    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const secondsDe = (seconds / 60) * 360 + 90;
    const minutesDe = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hoursDe = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

    hourhand.style.transform = `rotate(${hoursDe}deg)`;
    minutehand.style.transform = `rotate(${minutesDe}deg)`;
    secondhand.style.transform = `rotate(${secondsDe}deg)`;

}

setInterval(setTime, 1000);
setTime();