import { io } from "socket.io-client";

export function socketConnect() {
    return io("http://localhost:4000", { autoConnect: true });
}
