import React, { useState, useEffect, createContext } from "react";
import { db, auth, provider } from "../firebase";

export const ChatContext = createContext();

const ChatProvider = (props) => {
  const dataUsuario = { uid: null, email: null, estado: null };

  const [usuario, setUsuario] = useState(dataUsuario);

  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    detectarUsuario();
  }, []);

  const detectarUsuario = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario({ uid: user.uid, email: user.email, estado: true });
        cargarMensajes();
      } else {
        setUsuario({ uid: null, email: null, estado: false });
      }
    });
  };

  const iniciarSesion = async () => {
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  const cerrarSesion = () => {
    auth.signOut();
  };

  const cargarMensajes = () => {
    db.collection("chat").onSnapshot((query) => {
      const arrayMensajes = query.docs.map((item) => item.data());
      setMensajes(arrayMensajes);
    });
  };

  const agregarMensaje = async (uidChat, textoInput) => {
    try {
      await db.collection("chat").add({
        fecha: Date.now(),
        texto: textoInput,
        uid: uidChat,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{ usuario, mensajes, iniciarSesion, cerrarSesion, agregarMensaje }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
