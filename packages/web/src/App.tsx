import { useEffect, useState } from "react";

import { socketConnect } from "./services/socket";

import { Chat } from "./components/Chat";
import { Modal } from "./components/Modal";
import { Users } from "./components/Users";

import "./styles/global.module.scss";
import styles from "./styles/styles.module.scss";

const socket = socketConnect();

type IUser = {
  userID: string;
  username: string;
}

function App() {
  useEffect(() => {
    socket.disconnect();
  }, []);


  const [modalIsOpen, setModalIsOpen] = useState(true);

  const [users, setUsers] = useState<IUser[]>([]);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.network}>
      <div className={styles.content}>
        <Users 
         socket={socket}
         users={users}
         setUsers={setUsers}
        />
        <Chat socket={socket} users={users} />
        <Modal
         closeModal={closeModal}
         modalIsOpen={modalIsOpen}
         socket={socket}
        />
       </div>
    </div>
  )
}

export default App