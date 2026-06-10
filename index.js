import express from "express";
import { Pool } from "pg";

const app = express();

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_2JLb1dzHjtlM@ep-square-art-aoq08eys-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
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
