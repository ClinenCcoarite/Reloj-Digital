const sec = document.querySelector('.hand-sec');
const minHand = document.querySelector('.hand-min');
const hourHand = document.querySelector('.hand-hour');
const good = document.querySelector('.am');

const lect = document.querySelectorAll(`.hora`);

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const degress = ((seconds / 60) * 360) + 90;
    sec.style.transform = `rotate(${degress}deg)`;
    lect[2].innerHTML =seconds ;

    const min = now.getMinutes();
    const minDegress = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegress}deg)`;
    lect[1].innerHTML = min + " : ";
    
    const hour = now.getHours();
    const hourDegress = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegress}deg)`;
    lect[0].innerHTML = Math.round((hour) - 12) + " : ";
    hour >= 12 ? good.innerHTML=" PM" : good.innerHTML=" AM";
}
setInterval(setDate, 1000);