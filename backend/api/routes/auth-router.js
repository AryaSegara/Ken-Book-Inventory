import express from "express";
import {
  registerUser,
  loginAdmin,
  updateAccount,
  deleteAccount,
} from "../controllers/auth.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginAdmin);
router.put("/update/:id",verifyToken, updateAccount);
router.delete("/delete/:id",verifyToken, deleteAccount);

export default router;
