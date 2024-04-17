import express from "express";
import { getAllKategori } from "../controllers/kategori.js";

const router = express.Router();

router.get("/getAllKategori", getAllKategori);

export default router;