import React, { useEffect, useContext, useRef } from "react";
import FormAgrega from "./FormAgrega";

import { ChatContext } from "../Context/ChatProvider";

const Chat = () => {
  const { usuario, mensajes } = useContext(ChatContext);
  const refZonaChat = useRef(null);

  useEffect(() => {
    refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight;
  }, [mensajes]);
  return (
    <div
      className="mt-3 px-2"
      style={{ height: "83vh", overflowY: "scroll" }}
      ref={refZonaChat}
    >
      {mensajes.map((mensaje, i) =>
        usuario.uid === mensaje.uid ? (
          <div>
            <span className="small d-flex justify-content-end">
              {mensaje.name}
            </span>
            <div className="d-flex justify-content-end mb-2" key={i}>
              <h5>
                <span
                  className="badge rounded-pill bg-primary"
                  style={{ whiteSpace: "initial" }}
                >
                  {mensaje.texto}
                </span>
              </h5>
            </div>
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <span className="small d-flex justify-content-start">
              {mensaje.name}
            </span>
            <div className="d-flex justify-content-start mb-2" key={i}>
              <h5>
                <span
                  className="badge rounded-pill bg-secondary"
                  style={{ whiteSpace: "initial" }}
                >
                  {mensaje.texto}
                </span>
              </h5>
            </div>
          </div>
        )
      )}

      <FormAgrega />
    </div>
  );
};

export default Chat;
