import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  console.log("client connected: ", socket.id);
  socket.on("disconnect", () => {
    console.log("Client disconnected: ", socket.id);
  });
});

server.listen(3001, () => {
  console.log("✔️ Server listening on port 3001");
});
