import { connect } from "socket.io-client";

import { createContext, ReactNode } from "react";

type SocketContextData = {
    socket: any;
}

export const SocketContext = createContext({} as SocketContextData);

type SocketProvider = {
    children: ReactNode;
}

export function SocketProvider(props: SocketProvider) {
    const socket = connect("http://localhost:3000");

    return (
        <SocketContext.Provider value={{ socket }}>
            {props.children}
        </SocketContext.Provider>
    );
}