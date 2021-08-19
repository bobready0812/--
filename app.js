const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(aa) {
    aa.preventDefault();
   const username = loginInput.value;
   loginForm.classList.add ("hidden");
   greeting.innerText =`Hello, ${username}`
   greeting.classList.remove("hidden");
   localStorage.setItem("username", username);
}

function handleClicked(event) {
    event.preventDefault();
    
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleClicked);

