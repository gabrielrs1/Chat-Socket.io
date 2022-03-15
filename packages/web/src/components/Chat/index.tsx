import { FormEvent, useEffect, useState } from "react";
import { Message } from "./styles";

import styles from "./styles.module.scss";

type User = {
    userID: string;
    username: string;
}

type IProps = {
    socket: any;
    users: User[]
}

type Message = {
    message: string;
    user: User;
}

export function Chat({ socket, users }: IProps) {
    const [text, setText] = useState("");

    const [messages, setMessages] = useState<User[]>([]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        socket.emit("chat-message", {
            message: text,
            users
        });

        setMessages((prevText: any) => [
            ...prevText, {
                message: text
            }
        ]);

        setText("");
    }

    useEffect(() => {
        socket.on("chat-message", ({ message, user }: Message) => {
            setMessages((prevText: any) => [
                ...prevText, {
                    message,
                    user: user.username
                }
            ]);
        });
    }, []);

    return (
        <div className={styles.chat}>
            <ul className={styles.messages}>
                {messages.map((msg: any, index: number) => (
                    <Message key={index} user={msg.user}>
                        {msg.message}
                        <p>
                            {msg.user ? msg.user + ":" : "Me:"}
                        </p>
                    </Message>
                ))}
            </ul>
        
            <form onSubmit={handleSubmit} className={styles.form}>
                <input 
                 type="text"
                 placeholder="Escreva sua mensagem..."
                 value={text} onChange={(event) => setText(event.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}