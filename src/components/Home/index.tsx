import { Chat } from "../Chat";
import { Users } from "../Users";

import styles from "./styles.module.scss";

export function Home() {
    return(
        <div className={styles.network}>
            <Users />
            <Chat />
        </div>
    );
}