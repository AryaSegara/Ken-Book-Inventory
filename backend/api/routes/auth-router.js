import express from "express";
import {
  loginAdmin
} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", loginAdmin);



export default router;
