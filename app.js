const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".min-hand");
const sec = document.querySelector(".sec-hand");
const dh = document.querySelector(".dh");
const dm = document.querySelector(".dm");
const ds = document.querySelector(".ds");
const period = document.querySelector(".period");

function updateTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    // Analog Rotations
    let hrotation = (30 * h) + (0.5 * m);
    let mrotation = (6 * m) + (0.1 * s);
    let srotation = (6 * s);

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

    // Digital & AM/PM
    let ampm = h >= 12 ? 'PM' : 'AM';
    let hDisplay = h % 12 || 12;

    dh.innerHTML = hDisplay < 10 ? '0' + hDisplay : hDisplay;
    dm.innerHTML = m < 10 ? '0' + m : m;
    ds.innerHTML = s < 10 ? '0' + s : s;
    period.innerHTML = ampm;
}

setInterval(updateTime, 1000);
updateTime(); // Initial Call
