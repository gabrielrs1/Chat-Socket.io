import { useState } from "react";

import { socketConnect } from "./services/socket";

import { Chat } from "./components/Chat";
import { Modal } from "./components/Modal";
import { Users } from "./components/Users";

import "./styles/global.module.scss";
import styles from "./styles/styles.module.scss";

const socket = socketConnect();

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.network}>
      <div className={styles.content}>
        <Users socket={socket} />
        <Chat socket={socket} />
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