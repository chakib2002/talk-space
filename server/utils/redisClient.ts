import { createClient } from "redis";

const client = createClient({
  url: "redis://localhost:6379",
}).on("error", (err) => console.error("redis client error", err));

client.connect();
export default client;
