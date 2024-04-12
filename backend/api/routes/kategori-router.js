import express from "express";
import { getAllKategori, addKategori } from "../controllers/kategori.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/getAllKategori", getAllKategori);
router.post("/addKategori",verifyToken, addKategori);

export default router;