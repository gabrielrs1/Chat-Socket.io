import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

type IUsers = {
    username: string;
}

export function Users({ socket }: any) {
    const [username, setUsername] = useState<string[]>([]);

    useEffect(() => {
        socket.on("users", (user: any) => {
            // console.log(user)
            console.log(user)
            user.forEach((name: any) => {
                setUsername((prevName) => [...prevName, name.username]);
            });
        });
    }, []);

    return (
        <aside className={styles.users}>
            <ul className={styles.userList}>
                {username.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </aside>
    );
}