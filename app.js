const button = document.querySelector(".hello");
console.log(button);

function handleClick(){
    button.style.color ="aqua";
}

button.addEventListener("click", handleClick);


const h1 =document.querySelector("h1");
console.dir(h1);


function handleh2 () {
   if(h1.innerText === "저는 사람입니다") {
       h1.innerText = "아뉜데용~?"
   } else {
       h1.innerText = "아뉘라구요 ㅋㅋ"
   }
};
h1.addEventListener("mousewheel", handleh2) ;



const h4 = document.querySelector(".I")
console.log(h4);

function hadleMouseLeave() {
    h4.innerText = "ㅇㅈ~" ;
};

h4.addEventListener("mouseleave", hadleMouseLeave);
