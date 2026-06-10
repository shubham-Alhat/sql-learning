import express from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const pool = new Pool({
  connectionString: process.env.DB_URI,
});

app.use(express.json());

app.post("/signup", (req, res) => {});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  console.log(
    "INSERT INTO users (username,email,password) VALUES ('" +
      username +
      "','" +
      email +
      "','" +
      password +
      "')",
  );

  await pool.query(
    "INSERT INTO users (username,email,password) VALUES ('" +
      username +
      "','" +
      email +
      "','" +
      password +
      "')",
  );

  res.json({ message: "user login success...!!" });
});

app.get("/", (req, res) => {
  res.json({ message: "hellow" });
});

app.listen(3000);
