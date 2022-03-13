import { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./styles.module.scss";

type IUser = {
    userID: string;
    username: string;
}

type IProps = {
    socket: any;
    users: IUser[];
    setUsers: Dispatch<SetStateAction<IUser[]>>
}

export function Users({ socket, users, setUsers }: IProps) {
    useEffect(() => {
        socket.on("user", (user: IUser[]) => {
            setUsers(user);
        });
    }, []);

    return (
        <aside className={styles.users}>
            <ul className={styles.userList}>
                {users.map((user: IUser, index: number) => (
                    <li key={index}>
                        <p title={user.username}>
                            {user.username}
                        </p>
                    </li>
                ))}
            </ul>
        </aside>
    );
}