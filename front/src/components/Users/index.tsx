import { socketConnect } from "../../services/socket";

import styles from "./styles.module.scss";

export function Users() {
    const socket = socketConnect();

    // socket.auth = ;

    return(
        <aside className={styles.users}>
            <ul id="users-list" className={styles.userList}>
            </ul>
        </aside>
    );
}