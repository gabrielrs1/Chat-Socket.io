import { useState } from "react";

import { io } from "socket.io-client";

// import { SocketContextProvider } from "./context/SocketContext";

import { Chat } from "./components/Chat";
import { Modal } from "./components/Modal";
import { Users } from "./components/Users";

import "./styles/global.module.scss";
import styles from "./styles/global.module.scss";

const socket = io("http://localhost:4000", { autoConnect: true });

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={styles.network}>
      <Users socket={socket} />
      <Chat />
      <Modal
       closeModal={closeModal}
       modalIsOpen={modalIsOpen}
       socket={socket}
      />
    </div>
  )
}

export default App