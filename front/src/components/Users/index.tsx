import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type IUser = {
    userID: string;
    username: string;
}

export function Users({ socket }: any) {
    const [username, setUsername] = useState<IUser[]>([]);

    useEffect(() => {
        socket.on("users", (user: IUser[]) => {
            setUsername(user)
        });
    }, []);

    return (
        <aside className={styles.users}>
            <ul className={styles.userList}>
                {username.map((data, index) => (
                    <li key={index}>{data.username}</li>
                ))}
            </ul>
        </aside>
    );
}