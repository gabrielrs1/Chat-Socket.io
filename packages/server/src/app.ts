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

type IUser = {
    userID: string;
    username: string;
}

type IMessage = {
    message: string;
    users: IUser[];
}

let users: IUser[] = [];

io.on("connection", (socket) => {
    socket.on("user", (username: string) => {
        users.push({
            userID: socket.id,
            username
        });
        
        io.emit("user", users);
    });

    socket.on("chat-message", ({ message, users }: IMessage) => {
        const user = users.find((user: IUser) => {
            return user.userID == socket.id
        });

        socket.broadcast.emit("chat-message", { message, user });
    });

    socket.on("disconnect", () => {
        users.filter((user: IUser, index: number) => {
            if(user.userID == socket.id) {
                users.splice(index, 1);
            }
        });

        io.emit("user", users);
    });

    console.log(`user ${socket.id}`);
});

serverHttp.listen(4000, () => console.log("connected server"));