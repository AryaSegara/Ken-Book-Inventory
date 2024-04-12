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

app.use("/api", AuthRoute);
app.use("/api", BookRoute);
app.use("/api", KategoriRoute);

app.get("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.json("Logout berhasil");
});

app.listen(port, () => {
  console.log("Server Berhasil Di Jalankan");
});
