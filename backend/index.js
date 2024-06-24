import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { testConnection } from "./config/Database.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (origin === "http://localhost:5173" || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.options("*", cors());

app.listen(5000, async () => {
  await testConnection();
  console.log("Server running at port 5000");
});