//Program odliczający czas do jakiegoś wydarzenia
//  alert('To działa!');

const nowTime = new Date().getTime();
const endTime = new Date('2020-03-22 17:00:00').getTime();
const time = endTime - nowTime;

const spanD = document.querySelector('span.d'); //days
const spanH = document.querySelector('span.h'); //hours
const spanM = document.querySelector('span.m'); //minutes
const spanS = document.querySelector('span.s'); //socunds
setInterval(() => {
    const nowTime = new Date().getTime();
    // const time = Math.floor((endTime-nowTime)/1000);
    const time = endTime - nowTime;
    let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24))); //wyliczenie liczby dni
    // console.log(days);

    let hours = Math.floor((endTime / (1000 * 60 * 60)) - nowTime / (1000 * 60 * 60)) % 24 // wyliczenie liczby godzin
    // console.log(hours);
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = Math.floor((endTime / (1000 * 60)) - nowTime / (1000 * 60)) % 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let secounds = Math.floor((endTime / (1000)) - nowTime / (1000)) % 60;
    secounds = secounds < 10 ? `0${secounds}` : secounds;

    spanD.textContent = days;
    spanH.textContent = hours;
    spanM.textContent = minutes;
    spanS.textContent = secounds;

}, 1000)