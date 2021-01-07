import React from "react";
import FormAgrega from "./FormAgrega";

const Chat = () => {
  return (
    <div className="mt-3 px-2">
      <div className="d-flex justify-content-end mb-2">
        <span className="badge rounded-pill bg-primary">
          Mensaje del usuario activo
        </span>
      </div>
      <div className="d-flex justify-content-start mb-2">
        <span className="badge rounded-pill bg-secondary">
          Mensaje del usuario externo
        </span>
      </div>

      <FormAgrega />
    </div>
  );
};

export default Chat;
