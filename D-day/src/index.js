const clockTitle = document.querySelector(".js-clock");

function d_day_clock() {

    const nowDate = new Date();
    const christmas = new Date(2021, 12, 25, 0, 0, 0);

    const day = String( Math.floor((christmas.getTime()-nowDate.getTime()) / (1000*60*60*24)) - 31).padStart(3,"0");
    const hours = String(24-nowDate.getHours()-1).padStart(2, "0");
    const minutes = String(60-nowDate.getMinutes()-1).padStart(2, "0");
    const seconds = String(60-nowDate.getSeconds()).padStart(2, "0");

    clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

d_day_clock();
setInterval(d_day_clock, 1000);
