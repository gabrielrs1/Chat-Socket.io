import { FormEvent, Fragment, useEffect, useState } from "react";
import { socketConnect } from "../../services/socket";

import styles from "./styles.module.scss";

export function Chat() {
    // const socket = socketConnect();

    const [text, setText] = useState("");
    const [message, setMessage] = useState<string[]>([]);
    
    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        // socket.emit("message", text);

        setMessage((prevText) => [ ...prevText, text ]);

        setText("")
    }

    useEffect(() => {
        // socket.on("message", (msg) => {
        //     console.log("aq", msg)
        //     setMessage((prevText) => [ ...prevText, msg ]);
        // });
    }, []);
    
    return (
        <div className={styles.chat}>
            <ul className={styles.messages}>
                {message.map((msg, i) => (
                    <Fragment key={i}>
                        {msg && (
                            <li>{msg}</li>
                        )}
                    </Fragment>
                ))}
            </ul>
        
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}