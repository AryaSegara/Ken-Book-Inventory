import { pool} from "../config/database.js";

export const getAllKategori = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM kategori");
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const addKategori = async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO kategori (nama_kategori) VALUES ($1)",
            [req.body.nama_kategori]
        );
        res.status(200).json(({ message: "Add Success", data: result.rows[0] }));
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateKategori = async (req, res) => {
    try {
        const result = await pool.query(
            "UPDATE kategori SET nama_kategori = $1 WHERE id_kategori = $2 RETURNING *",
            [req.body.name, req.params.id]
        );
        res.status(200).json({ message: "Update Success", data: result.rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const deleteKategori = async (req, res) => {
    try {
        const result = await pool.query(
            "DELETE FROM kategori WHERE id_kategori = $1",
            [req.params.id_kategori]
        );
        res.status(200).json({ message: "Delete Success", data: result.rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}