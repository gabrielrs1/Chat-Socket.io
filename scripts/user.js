const URL = "http://localhost:3000";
const socket = io(URL, { autoConnect: false });

let usersList = document.getElementById("users-list");
let sendName = document.getElementById("send-name");
let username = document.getElementById("user-name");

sendName.addEventListener("submit", (event) => {
    event.preventDefault();

    if(username.value) {
        let modal = document.getElementById("modal");
    
        modal.style.display = "none";

        let userValue = username.value
        
        socket.auth = { userValue };
        socket.connect();

        username.value = "";
    }
});

socket.on("users", (users) => {
    console.log("aqui", users)
    users.forEach(user => {
        let li = document.createElement("li");
        let p = document.createElement("p");

        p.textContent = user.username;
        
        li.appendChild(p);
        usersList.appendChild(li);
    });
});

