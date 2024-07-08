// src/App.jsx
import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Routers from "./Routes/Routers";
import { SocketProvider } from "./SocketContext";

function App() {
  return (
    <SocketProvider>
      <ToastContainer />
      <Routers />
    </SocketProvider>
  );
}

export default App;
