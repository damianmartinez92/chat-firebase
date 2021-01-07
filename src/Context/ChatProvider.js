import React, { useState, useEffect, createContext } from "react";
import { db, auth, provider } from "../firebase";

export const ChatContext = createContext();

const ChatProvider = (props) => {
  const dataUsuario = { uid: null, email: null, name: null, estado: null };

  const [usuario, setUsuario] = useState(dataUsuario);

  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    detectarUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const detectarUsuario = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario({
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          estado: true,
        });
        cargarMensajes();
      } else {
        setUsuario({ uid: null, email: null, name: null, estado: false });
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
    db.collection("chat")
      .orderBy("fecha")
      .onSnapshot((query) => {
        const arrayMensajes = query.docs.map((item) => item.data());
        setMensajes(arrayMensajes);
      });
  };

  const agregarMensaje = async (uidChat, textoInput, nameUser) => {
    try {
      await db.collection("chat").add({
        fecha: Date.now(),
        texto: textoInput,
        uid: uidChat,
        name: nameUser,
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
