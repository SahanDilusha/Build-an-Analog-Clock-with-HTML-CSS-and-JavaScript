const hourhand = document.querySelector(".hour");
const minutehand = document.querySelector(".minute");
const secondhand = document.querySelector(".second");

const setTime = () => {

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const secondsDe = (second / 60) * 360 + 90;
    const minutesDe = (minute / 60) * 360 + (second / 60) * 6 + 90;
    const hoursDe = (hour / 12) * 360 + (minute / 60) * 30 + 90;
    


}