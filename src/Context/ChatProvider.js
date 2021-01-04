import React, { useState, useEffect, createContext } from "react";
import { db, auth, provider } from "../firebase";

export const ChatContext = createContext();

const ChatProvider = (props) => {
  const dataUsuario = { uid: null, email: null, estado: null };

  const [usuario, setUsuario] = useState(dataUsuario);

  useEffect(() => {
    detectarUsuario();
  }, []);

  const detectarUsuario = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario({ uid: user.uid, email: user.email, estado: true });
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

  return (
    <ChatContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
