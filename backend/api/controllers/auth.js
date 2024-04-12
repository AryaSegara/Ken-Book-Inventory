import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { pool } from "../config/database.js";

export const registerUser = async (req, res) => {
  const { username, email, password} = req.body;
  try {
    const hash = await argon2.hash(password);
    const result = await pool.query(
      "INSERT INTO admin (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hash]
    );
    res.status(201).json({ message: "Register Success", data: result.rows[0] });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM admin WHERE username = $1", [
      username,
    ]);

    if (result.rows.length > 0) {
      const testPassword = await argon2.verify(
        result.rows[0].password,
        password
      );
      // console.log(testPassword);

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
        res.status(401).json({ message: "Password wrong" });
      }
    } else {
      res.status(401).json({ message: "Username Not Registered" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateAccount = async (req, res) => {
  const { username, email, fullname } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE users SET username = $1, email = $2, fullname = $3 WHERE id = $4 RETURNING *",
      [username, email, fullname, id]
    );
    res.status(200).json({ message: "Update Success", data: result.rows[0] });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteAccount = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    res.status(200).json({ message: "Delete Success", data: result.rows[0] });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
