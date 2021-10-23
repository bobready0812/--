const sci = document.querySelector(".scissors");
const rok = document.querySelector(".rock");
const pap = document.querySelector(".paper");
const iCh = document.querySelector(".iChoose");
const cCh = document.querySelector(".comChoose");
const right = document.querySelector(".right");


function handleClick(e) {
 if(e.target.innerText === "가위") {
     iCh.innerText = "가위";
     machineChoose(0);
 } else if (e.target.innerText === "바위"){
     iCh.innerText = "바위";
     machineChoose(1);
 } else {
     iCh.innerText = "보";
     machineChoose(2);
 }
}

function machineChoose (a) {
    const ran  = Math.floor(Math.random() * 3);
    if (ran == 0) {
      cCh.innerText="컴퓨터가 고른것: 가위";
    } else if (ran == 1) {
        cCh.innerText = "컴퓨터가 고른것: 바위";
    } else {
        cCh.innerText = "컴퓨터가 고른것: 보";
    }
 
   if (a == 0 && ran == 0) {
       right.innerText ="비김!";
   } else if (a == 0 && ran == 1) {
       right.innerText = "짐!";
   } else if (a == 0 && ran == 2) {
       right.innerText = "이김!";
   } else if (a == 1 && ran == 0) {
       right.innerText = "이김!" ;
   } else if (a == 1 && ran == 1) {
       right.innerText = "비김!";
   } else if (a == 1 && ran == 2) {
       right.innerText = "짐!" ;
   } else if (a == 2 && ran == 0) {
    right.innerText = "짐!" ;
   } else if (a == 2 && ran == 1) {
    right.innerText = "이김!";
} else {
    right.innerText = "비김!" ;
} 
    
}

sci.addEventListener("click", handleClick);
rok.addEventListener("click", handleClick);
pap.addEventListener("click", handleClick);