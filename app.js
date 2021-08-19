const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginButton() {
   const username = loginInput.value;
if(username === "") {
    alert("이름을 적어주세요");
} else if (username.length > 15) {
    alert ("이름이 너무 깁니다");
}
}



loginButton.addEventListener("click", onLoginButton);