import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { ChatContext } from "./Context/ChatProvider";

const App = () => {
  const { usuario } = useContext(ChatContext);

  return usuario !== null ? (
    <div>
      <Navbar />
      <h1>Chat</h1>
    </div>
  ) : (
    <h1>Cargando...</h1>
  );
};

export default App;
