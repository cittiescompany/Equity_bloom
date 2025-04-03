import { io } from "socket.io-client";

const socket = io("http://localhost:1100", { transports: ["websocket"] });

export default socket;