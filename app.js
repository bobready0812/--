const button = document.querySelector("button");
let count = 1;

function addclick () {
    let remain = count % 2;
    
    if(remain = 0) {
        button.innerText="hello!";
    } else {
        button.innerText="not~!";
    }
    
    count++
   
}




button.addEventListener("click", addclick);