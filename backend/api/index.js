import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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

app.use("/auth", AuthRoute); //admin
app.use("/book", BookRoute); //book
app.use("/kategori", KategoriRoute); //kategori

app.listen(port, () => {
  console.log("Server Berhasil Di Jalankan");
});
