let usersList = document.getElementById("users-list")
let sendName = document.getElementById("send-name");
let userName = document.getElementById("user-name");

sendName.addEventListener("submit", (event) => {
    event.preventDefault();

    if(userName.value) {
        let modal = document.getElementById("modal");
    
        modal.style.display = "none";

        socket.emit("user", userName.value);

        userName.value = "";
    }
});

function loadUsers() {
    socket.on("user", (name) => {
        console.log(name)
        let li = document.createElement("li");
        let user = document.createElement("p");
    
        user.textContent = name;
        
        li.appendChild(user);
        usersList.appendChild(li);
    });
}
