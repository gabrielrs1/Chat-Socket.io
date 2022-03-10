import { createContext, ReactNode, useEffect } from "react";
import { socketConnect } from "../services/socket";

type SocketContextType = {
    socket: any
}

type SocketProviderProps = {
    children: ReactNode;
}

export const SocketContext = createContext({} as SocketContextType);

export function SocketContextProvider(props: SocketProviderProps) {
    let socket;

    console.log(socket)

    return (
        <SocketContext.Provider value={{ socket }}>
            {props.children}
        </SocketContext.Provider>
    )
}