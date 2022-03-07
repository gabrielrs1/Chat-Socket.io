import styles from "./styles.module.scss";

export function Modal() {
    return(
        <div className={styles.modal}>
            <h1 className={styles.title}>Chat.io</h1>

            <form id="send-name">
                <input type="text" name="user-name" id="user-name" placeholder="Digite seu nome" />

                <button type="submit">Iniciar!</button>
            </form>
        </div>
    );
}