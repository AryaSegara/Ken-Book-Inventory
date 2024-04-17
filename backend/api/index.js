import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";


import AuthRoute from "./routes/auth-router.js";
import BookRoute from "./routes/book-router.js";
import KategoriRoute from "./routes/kategori-router.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());


// export const verifyToken = (req, res, next) => {
//   // console.log(req.headers)

//   if (req.headers.authorization) {
//     const token = req.headers.authorization.split(" ")[1];
//     console.log(token);
//     try {
//       const user = jwt.verify(token, process.env.SECRET_KEY);
//       req.user = user;
//       next();
//     } catch (error) { 
//       res.status(401);
//       res.send("Token Invalid");
//     }
//   }else{
//     res.status(401);
//     res.send("Empty Token ");
//   }
// };

app.use("/auth", AuthRoute); //admin
app.use("/book", BookRoute); //book
app.use("/kategori", KategoriRoute); //kategori

app.listen(port, () => {
  console.log("Server Berhasil Di Jalankan");
});
