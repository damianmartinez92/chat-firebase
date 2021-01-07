import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Chat from "./Components/Chat";

import { ChatContext } from "./Context/ChatProvider";

const App = () => {
  const { usuario } = useContext(ChatContext);

  return usuario !== null ? (
    <div>
      <Navbar />
      {usuario.estado ? (
        <Chat />
      ) : (
        <div className="lead text-center mt-5">Debes iniciar sesión</div>
      )}
    </div>
  ) : (
    <h1>Cargando...</h1>
  );
};

export default App;
