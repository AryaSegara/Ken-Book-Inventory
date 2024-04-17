import { pool} from "../database.js";

export const getAllKategori = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM kategori");
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}