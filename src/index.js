import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ChatProvider from "./Context/ChatProvider";

ReactDOM.render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
