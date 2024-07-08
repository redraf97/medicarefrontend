// src/socket.js
import { io } from 'socket.io-client';

const URL = 'http://localhost:3000'; // Replace with your server URL
const socket = io(URL, {
  withCredentials: true,
  autoConnect: false,
});

export default socket;
