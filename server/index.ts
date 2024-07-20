import express from "express";
import http from "http";
import { Server } from "socket.io";
import redis from "./utils/redisClient";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", async (socket) => {
  socket.on(
    "create-room",
    async (data: { username: string; token: string }, callback) => {
      await socket.join(data.token);
      await redis.rPush("rooms", data.token);
      return callback({
        status: "ok",
        token: data.token,
      });
    }
  );

  socket.on("disconnect", () => {
    console.log("Client disconnected: ", socket.id);
  });
});

server.listen(3001, () => {
  console.log("✔️ Server listening on port 3001");
});
