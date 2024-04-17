import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { pool } from "../database.js";

// export const register = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const hashPassword = await argon2.hash(password);
//     const result = await pool.query(
//       "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
//       [username, email, hashPassword]
//     );
//     res.status(201).json({ msg: "Pendaftaran berhasil", data: result.rows[0] });
//   } catch (error) {
//     // console.log(error);
//     res.status(500).json({ error });
//   }
// };

// const a = async()=>{
//     const hash = await argon2.hash("admin123");
//     console.log(hash);
// }
// a();

// export const loginAdmin = async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const result = await pool.query("SELECT * FROM admin WHERE username = $1", [
//       username,
//     ]);

//     if (result.rows.length > 0) {
//       const testPassword = await argon2.verify(
//         result.rows[0].password,
//         password
//       );
//       console.log(testPassword);

//       if (testPassword) {
//         const token = jwt.sign(result.rows[0], process.env.SECRET_KEY);
//         res.cookie('token', token, {
//           httpOnly: true,
//         });

//         res.status(200).json({
//           token,
//           message: "Login Berhasil",
//         });
//       } else {
//         res.status(401).json({ message: "Password Salah" });
//       }
//     } else {
//       res.status(401).json({ message: "Pengguna Tidak DiTemukan" });
//     }
//   } catch (err) {
//     console.log(err);
//     return next (err);
//   }
// };

export async function loginAdmin(req, res) {
  const { username, password } = req.body;
  try {
    const admin = await pool.query("SELECT * FROM admin WHERE username = $1", [
      username,
    ]);
    if (admin.rows.length > 0) {
      const passwordMatch = await argon2.verify(
        admin.rows[0].password,
        password
      );
      if (passwordMatch) {
        const token = jwt.sign(admin.rows[0].username, process.env.SECRET_KEY);
        res.cookie("token", token, {
          httpOnly: true,
        });
        return res.status(200).send({ token, message: "Login Berhasil" });
      } else {
        return res.status(401).send({ message: "Password Salah" });
      }
    } else{
      return res.status(401).send({ message: "Pengguna Tidak DiTemukan" });
    }
  } catch (error) {
    console.log(error);
  }
}
