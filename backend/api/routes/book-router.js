import express from "express";

import { getAllBook, addBook, getBookById ,deleteBook, updateBook} from "../controllers/book.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/getAllBook", getAllBook);
router.get("/getBookById/:id_buku", getBookById);
router.post("/addBook",verifyToken, addBook);
router.put("/updateBook/:id_buku",verifyToken, updateBook);
router.delete("/deleteBook/:id_buku",verifyToken, deleteBook);

router.get("/me",verifyToken,(req,res)=>{
    try {
        res.json(req.user);
    } catch (error) {
        res.status(404);
        res.send("belum login");
    }
}); 

export default router;