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
    origin: process.env.BASE_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", AuthRoute); //admin
app.use("/api/book", BookRoute); //book
app.use("/api/kategori", KategoriRoute); //kategori

app.listen(port, () => {
  console.log("Server Berhasil Di Jalankan");
});

export default app;