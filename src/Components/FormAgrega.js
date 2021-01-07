import React, { useState, useContext } from "react";
import { ChatContext } from "../Context/ChatProvider";

const FormAgrega = () => {
  const [mensaje, setMensaje] = useState("");

  const { usuario, agregarMensaje } = useContext(ChatContext);

  const agregar = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) {
      console.log("Mensaje vacio");
      return;
    } else {
      agregarMensaje(usuario.uid, mensaje, usuario.name);
      setMensaje("");
    }
  };

  return (
    <form className="fixed-bottom input-group p-3 bg-dark" onSubmit={agregar}>
      <input
        type="text"
        className="form-control"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormAgrega;
