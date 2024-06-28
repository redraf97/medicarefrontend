// src/socket.js
import { io } from 'socket.io-client';

const URL = 'http://localhost:3000'; // Remplacez par l'URL de votre serveur Socket.IO
const socket = io(URL, {
  withCredentials: true,
  autoConnect: false,
});

export default socket;
