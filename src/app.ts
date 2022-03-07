import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on("connection", (socket) => {
    socket.on("message", (msg) => {
        socket.broadcast.emit("message", msg);
    })

    console.log("user connected");
});

httpServer.listen(4000);