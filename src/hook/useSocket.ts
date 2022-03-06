import { useContext } from "react";
import { SocketContext } from "../context/socket";

export function useSocket() {
    const value = useContext(SocketContext);

    return value;
}