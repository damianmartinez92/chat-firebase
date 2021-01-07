import React, { useContext } from "react";
import { ChatContext } from "../Context/ChatProvider";

const Navbar = () => {
  const { usuario, iniciarSesion, cerrarSesion } = useContext(ChatContext);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand">Chat Firebase</span>
      <div>
        {usuario.estado ? (
          <button
            className="btn btn-outline-danger my-2"
            onClick={cerrarSesion}
          >
            Cerrar Sesión
          </button>
        ) : (
          <button
            className="btn btn-outline-success my-2"
            onClick={iniciarSesion}
          >
            Acceder
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
