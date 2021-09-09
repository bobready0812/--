
const h1 = document.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = String(date.getHours());
    const minutes= String(date.getMinutes());

    h1.innerText = `${hours}:${minutes}`;
}







setInterval( getTime , 1000 );