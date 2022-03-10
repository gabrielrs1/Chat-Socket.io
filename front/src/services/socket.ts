import { io } from "socket.io-client";

export function socketConnect() {
    return io("http://localhost:3000", { autoConnect: true });
}
