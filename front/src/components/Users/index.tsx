import { useEffect } from "react";
import styles from "./styles.module.scss";

type IUser = {
    userID: string;
    username: string;
}

export function Users({ socket, username, setUsername }: any) {
    useEffect(() => {
        socket.on("users", (user: IUser[]) => {
            setUsername(user);
        });
    }, []);

    return (
        <aside className={styles.users}>
            <ul className={styles.userList}>
                {username.map((data: IUser, index: number) => (
                    <li key={index}>{data.username}</li>
                ))}
            </ul>
        </aside>
    );
}