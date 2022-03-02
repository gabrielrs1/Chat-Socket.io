let socket = io();

let messages = document.getElementById("ul");
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(input.value) {
        socket.emit("chat-message", input.value);
        input.value = '';
    }
});

socket.on("chat-message", (msg) => {
    let message = document.createElement("li");
    message.textContent = msg;
    messages.appendChild(message);
});