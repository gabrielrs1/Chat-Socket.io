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

let users: any = [];

io.on("connection", (socket) => {
    socket.on("users", (user) => {
        users.push({
            userID: socket.id,
            username: user
        });

        io.emit("users", users);
    });

    socket.on("message", (msg) => {
        const user = msg.user;

        const findUser = user.find((user: any) => user.userID == socket.id);

        socket.broadcast.emit("message", { msg: msg.text, findUser });
    });

    socket.on("disconnect", () => {
        users.filter((element: any, index: number) => {
            if(element.userID == socket.id) {
                users.splice(index, 1);
            }
        });

        io.emit("users", users);
    });

    console.log(`user ${socket.id}`);
});

serverHttp.listen(4000, () => console.log("connected server"));