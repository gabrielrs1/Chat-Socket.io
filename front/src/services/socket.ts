import socketClient from "socket.io-client";

export function socketConnect() {
    return socketClient("http://localhost:4000");
}
