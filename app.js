const button = document.querySelector(".hello");
console.log(button);

function handleClick(){
    button.style.color ="aqua";
}

button.addEventListener("click", handleClick);


const h1 =document.querySelector("h1");
console.dir(h1);


function handleh2 () {
    h1.innerText = "아닌뒈용~?"
};
h1.addEventListener("mousewheel", handleh2) ;


