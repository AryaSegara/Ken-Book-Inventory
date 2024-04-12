import express from "express";

import { getAllBook, addBook, getBookById } from "../controllers/book.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/getAllBook", getAllBook);
router.get("/getBookById/:id_buku", getBookById);
router.post("/addBook", verifyToken, addBook);

export default router;