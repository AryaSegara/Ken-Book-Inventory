import { pool } from "../database.js";

export const getAllBook = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM buku");
    res.status(200).json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getBookById = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM buku WHERE id_buku = $1", [
      req.params.id_buku,
    ]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}                                                                                                                                                                             

export const addBook = async (req, res) => {
  console.log(req.body);
  try {
    const result = await pool.query(
      "INSERT INTO buku (judul_buku, penulis, harga, gambar, id_kategori, deskripsi) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        req.body.judul_buku,
        req.body.penulis,
        req.body.harga,
        req.body.gambar,
        // req.body.category,
        req.body.id_kategori,
        req.body.deskripsi,
      ]
    );
    res.status(200).json(({ message: "Add Success", data: result.rows[0] }));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
;

export const updateBook = async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE buku SET judul_buku = $1, penulis = $2, harga = $3, gambar = $4, id_kategori = $5, deskripsi = $6 WHERE id_buku = $7 RETURNING *",
      [
        req.body.judul_buku,
        req.body.penulis,
        req.body.harga,
        req.body.gambar,
        req.body.id_kategori,
        req.body.deskripsi,
        req.params.id_buku,
      ]
    );
    res.status(200).json({ message: "Update Success", data: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


export const deleteBook = async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM buku WHERE id_buku = $1",
      [req.params.id_buku]
    );
    res.status(200).json({ message: "Delete Success", data: result.rows[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
