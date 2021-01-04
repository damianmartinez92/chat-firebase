import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import { ChatContext } from "./Context/ChatProvider";

const App = () => {
  const { saludo } = useContext(ChatContext);

  return (
    <div>
      <Navbar />
      <h1>Chat {saludo}</h1>
    </div>
  );
};

export default App;
