import { Chat } from "../Chat";
import { Users } from "../Users";

import styles from "./styles.module.scss";

type IUsername = {
    username: string;
}

export function Home({ username }: IUsername) {
    return(
        <div className={styles.network}>
            <Users username={username} />
            <Chat />
        </div>
    );
}