import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


import AuthRoute from "./routes/auth-router.js";


const port = process.env.PORT || 3000;
const app = express();



app.use(express.json());
app.use(cookieParser());

app.use("/auth",AuthRoute);

app.listen(port,() =>{
    console.log("Server Berhasil Di Jalankan");
})