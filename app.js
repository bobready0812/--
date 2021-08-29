const chat_box1 = document.querySelector(".chat-box1");
const chat_box2 = document.querySelector(".chat-box2");
const chat_box3 = document.querySelector(".chat-box3");
const a = chat_box1.querySelector("a");
let count = 0;
let count2 ;
let count3 ;
let count4 ;


function changeColor1 () {
    chat_box1.style.background = "orange";
}
function changeColor2 () { 
    chat_box2.style.background = "skyblue"
}
function changeColor3 () {
    chat_box3.style.background = "palegreen";
}



function innerText1 () {
    let remain = count % 2;
    
    if(remain == 0) {
        chat_box1.innerText = "Hello!";
        chat_box1.style.background = "orange";
    } else {
        chat_box1.innerText ="";
    }
    count++;
    count2++

}
function innerText2 () {
    let remain = count % 2;
    
    if(remain == 0) {
        chat_box2.innerText = "I'm";
        
    } else {
        chat_box2.innerText ="";
    }
    count++;
    count3++
    
}
function innerText3 () {
   
    let remain = count % 2;
    if(remain == 0) {
        chat_box3.innerText = "Daehyeon!";
        
    } else {
        chat_box3.innerText ="";
    }
    count++;
    coun4++;
}

function changeColor4 () { 
    if(count2 == null ) {
    chat_box1.style.background = "white";
    } else {
        chat_box1.style.background = "orange";
    }
}
function changeColor5 () {
    if(count3 == null ) {
        chat_box2.style.background = "white";
        } else {
            chat_box2.style.background = "skyblue";
        }
}
function changeColor6 () {
    if(count4 == null ) {
        chat_box3.style.background = "white";
        } else {
            chat_box3.style.background = "palegreen";
        }
   
    
}

chat_box1.addEventListener("mouseenter", changeColor1);
chat_box2.addEventListener("mouseenter", changeColor2);
chat_box3.addEventListener("mouseenter", changeColor3);


chat_box1.addEventListener("mouseleave", changeColor4);
chat_box2.addEventListener("mouseleave", changeColor5);
chat_box3.addEventListener("mouseleave", changeColor6);


chat_box1.addEventListener("click", innerText1);
chat_box2.addEventListener("click", innerText2);
chat_box3.addEventListener("click", innerText3);
