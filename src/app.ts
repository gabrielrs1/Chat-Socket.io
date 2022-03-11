import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";

const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});

interface ISocket extends Socket {
    username?: string;
}

io.use((socket: ISocket, next) => {
    const username = socket.handshake.auth.username;

    if (!username) {
      return next(new Error("invalid username"));
    }

    socket.username = username;

    next();
});

io.on("connection", (socket) => {
    const users = [];

    for (let [id, socket] of io.of("/").sockets) {
        users.push({
            userID: id,
            username: (socket as ISocket).username,
        });
    }

    io.emit("users", users);

    socket.on("message", (msg) => {
        socket.broadcast.emit("message", msg);
    })

    console.log(`user ${socket.id}`);
});

serverHttp.listen(4000, () => console.log("connected server"));