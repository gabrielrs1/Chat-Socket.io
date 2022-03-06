import { Home } from "./components/Home";
import { SocketProvider } from "./context/socket";
import "./styles/global.module.scss";

function App() {
  return (
    <SocketProvider>
      <Home />
    </SocketProvider>
  )
}

export default App