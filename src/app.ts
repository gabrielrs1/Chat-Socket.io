import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

app.get("/", (request, response) => {
    return response.sendFile(__dirname + "/view/chat.html");
});

io.on("connection", (socket) => {
    socket.on("user", (name) => {
        io.emit("user", name);
    });

    socket.on("chat-message", (msg) => {
        socket.broadcast.emit("chat-message", msg);
    });
    
    console.log("user connected");
})

server.listen(3000, () => { console.log("Server Connected.") });