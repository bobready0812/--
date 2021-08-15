
const h2 =document.querySelector("h2")


function handleTitleClick2() {
if(h2.innerText === "안녕하세요") {
    h2.innerText = "안녕히 가세요!"
} else {
    h2.innerText = "안녕하세요!"
};
};

h2.addEventListener("click", handleTitleClick2);
