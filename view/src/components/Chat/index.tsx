import { useState } from "react";
import { useSocket } from "../../hook/useSocket";

import styles from "./styles.module.scss";

export function Chat() {
    const socket = useSocket();
    console.log(socket);
    
    const [message, setMessage] = useState("");
    
    function handleSubmit(event: any) {
        event.preventDefault();

        console.log("Aqui", message);
    }

    return(
        <div className={styles.chat}>
            <ul className={styles.messages}></ul>
        
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => setMessage(event.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}