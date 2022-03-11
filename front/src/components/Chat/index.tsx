import { FormEvent, useEffect, useState } from "react";

import styles from "./styles.module.scss";

export function Chat({ socket }: any) {
    const [text, setText] = useState("");

    const [message, setMessage] = useState<any>([]);
    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        socket.emit("message", text);

        setMessage((prevText: any) => [
            ...prevText, {
                message: text,
                myMessage: true
            }
        ]);

        setText("")
    }

    useEffect(() => {
        socket.on("message", (msg: string) => {
            setMessage((prevText: any) => [
                ...prevText, {
                    message: msg,
                    myMessage: false
                }
            ]);
        });
    }, []);
    
    return (
        <div className={styles.chat}>
            <ul className={styles.messages}>
                {message.map((msg: any, index: number) => (
                    <li key={index} className={msg.myMessage ? styles.user : styles.notUser}>{msg.message}</li>
                ))}
            </ul>
        
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}