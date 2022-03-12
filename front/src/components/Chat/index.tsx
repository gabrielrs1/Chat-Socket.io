import { FormEvent, useEffect, useState } from "react";
import { Message } from "./styles";

import styles from "./styles.module.scss";

export function Chat({ socket, username }: any) {
    const [text, setText] = useState("");

    const [message, setMessage] = useState<any>([]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        socket.emit("message", {
            text: text,
            user: username
        });

        setMessage((prevText: any) => [
            ...prevText, {
                message: text,
                myMessage: true
            }
        ]);

        setText("");
    }

    useEffect(() => {
        socket.on("message", (msg: any) => {
            setMessage((prevText: any) => [
                ...prevText, {
                    message: msg.msg,
                    myMessage: false,
                    user: msg.user.username
                }
            ]);
        });
    }, []);

    return (
        <div className={styles.chat}>
            <ul className={styles.messages}>
                {message.map((msg: any, index: number) => (
                    <Message key={index} msg={msg.user}>
                        {msg.message}
                        <span>{msg.user ? msg.user + ":" : "Me:"}</span>
                    </Message>
                ))}
            </ul>
        
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" placeholder="Escreva sua mensagem..." value={text} onChange={(event) => setText(event.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}