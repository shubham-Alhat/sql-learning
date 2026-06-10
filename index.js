import express from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const pool = new Pool({
  connectionString: process.env.DB_URI,
});

app.use(express.json());

// app.post("/signup", async (req, res) => {
//   const username = req.body.username;
//   const email = req.body.email;
//   const password = req.body.password;

//   const user = await pool.query(
//     `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`,
//   );

//   console.log(user);

//   return res.json({ message: "login success." });
// });

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const user = await pool.query(
    `INSERT INTO users (username,email,password) VALUES ($1, $2, $3) RETURNING id;`,
    [username, email, password],
  );

  console.log(user);

  res.json({ message: "user login success...!!" });
});

app.get("/", (req, res) => {
  res.json({ message: "hellow" });
});

app.listen(3000);
