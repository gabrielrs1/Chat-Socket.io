import { io } from "socket.io-client";
import socket from "../../api/socket";

import styles from "./styles.module.scss";

export function Users() {
    return(
        <aside className={styles.users}>
            <ul id="users-list" className={styles.userList}>
            </ul>
        </aside>
    );
}