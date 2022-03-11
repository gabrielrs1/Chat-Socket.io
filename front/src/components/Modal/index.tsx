import { FormEvent, useState } from "react";
import ReactModal from "react-modal";

import styles from "./styles.module.scss";

type IProps = {
    closeModal: () => void;
    modalIsOpen: boolean;
    socket: any
}

export function Modal({ closeModal, modalIsOpen, socket }: IProps) {
    const [username, setUsername] = useState("");

    function handleGetName(event: FormEvent) {
        event.preventDefault();

        socket.auth = { username };
        socket.connect();

        setUsername("");

        closeModal();
    }

    return (
        <ReactModal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         className={styles.modalContent}
        >
            <h1 className={styles.title}>Chat.io</h1>
            <form onSubmit={handleGetName} className={styles.form}>
                <input 
                 type="text"
                 value={username}
                 onChange={(event) => setUsername(event.target.value)}
                 placeholder="Digite seu nome"
                />

                <button type="submit">Iniciar!</button>
            </form>
        </ReactModal>
    );
}