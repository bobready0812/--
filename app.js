
function changeColors() {
    const width = window.innerWidth;
    if(width <= 450) {
        document.body.style.backgroundColor = "tomato";
    } else if (width > 450 && width <= 500) {
        document.body.style.backgroundColor = "aqua";
    } else if (width > 500 && width <= 600) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}


window.addEventListener("resize", changeColors);

