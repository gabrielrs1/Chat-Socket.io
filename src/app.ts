import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

interface ISocket extends Socket {
    username?: string;
}

// app.get("/", (request: Request, response: Response) => {
//     return response.sendFile(__dirname + "/view/chat.html");
// });

io.use((socket: ISocket, next) => {
    const username = socket.handshake.auth.userValue;

    socket.username = username;

    next();
});

io.on("connection", (socket: Socket) => {
    const users = [];

    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: (socket as ISocket).username,
        });
    }
    
    socket.emit("users", users);

    socket.on("chat-message", (msg: string) => {
        socket.broadcast.emit("chat-message", msg);
    });
    
    console.log("user connected");
})

server.listen(4000, () => { console.log("Server Connected.") });