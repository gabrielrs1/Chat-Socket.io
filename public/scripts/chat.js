let socket = io();

let messages = document.getElementById("ul");
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(input.value) {
        socket.emit("chat-message", input.value);

        let user = true;

        listMessage(input.value, user);

        input.value = "";
    }
});

socket.on("chat-message", (msg) => {
    listMessage(msg);
});

function listMessage(msg, user) {
    let message = document.createElement("li");

    message.textContent = msg;
    message.style.marginLeft = user ? "0px" : "";
    message.style.marginLeft = user ? "auto" : "";
    message.style.background = user ? "var(--purple-500)" : "var(--purple-800)";
    message.style.color = user ? "var(--white)" : "var(--gray-600)";
    
    messages.appendChild(message);
}