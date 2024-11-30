import { add } from "@utils/add";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  const result = add(1, 2);
  res.send("hello typescript from node! " + result);
});

app.listen(port, () => {
  console.log(`[server]: server is running at http://localhost:${port}`);
});
