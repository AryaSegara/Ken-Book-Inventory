import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { pool } from "../config/database.js";

export const registerUser = async (req, res) => {
  const { username, email, password, fullname } = req.body;
  try {
    const hash = await argon2.hash(password);
    const result = await pool.query(
      "INSERT INTO users (username, email, password, fullname) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, email, hash, fullname]
    );
    res.status(201).json({ message: "Register Success", data: result.rows[0] });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (result.rows.length > 0) {
      const testPassword = await argon2.verify(
        result.rows[0].password,
        password
      );

      if (testPassword) {
        const token = jwt.sign(result.rows[0], process.env.SECRET_KEY);

        res.cookie("token", token, {
          httpOnly: true,
        });

        res.status(200).json({
          token,
          message: "Login Success",
        });
      } else {
        res.status(401).json({ message: "Password Salah" });
      }
    } else {
      res.status(401).json({ message: "Username Tidak Terdaftar" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
