import express from "express";
import http from "http";
import { Server } from "socket.io";
import { messageT } from "./types";
require("dotenv").config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [process.env.ORIGIN ?? "http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  socket.on("create-room", (token, callback) => {
    socket.join(token);
    callback({
      status: "ok",
      token: token,
    });
  });

  socket.on("join-room", (token, callback) => {
    const roomExists = io.sockets.adapter.rooms.has(token);
    if (roomExists) {
      socket.join(token);
      callback({
        status: "ok",
        token: token,
      });
    } else {
      callback({
        status: "not found",
      });
    }
  });

  socket.on("message", (data: messageT, callback) => {
    socket.to(data.token).emit("message", {
      username: data.username,
      message: data.message,
    });
    callback({
      status: "ok",
    });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected: ", socket.id);
  });
});

server.listen(3001, () => {
  console.log("✔️ Server listening on port 3001");
});
