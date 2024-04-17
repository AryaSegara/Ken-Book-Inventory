import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";

const UploadBook = () => {
  const [seletedCategory, setSelectedCategory] = useState([]);
  const [editedKategori, setEditedKategori] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/kategori/getAllKategori`)
      .then((response) => response.json())
      .then((data) => setSelectedCategory(data));
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const judul_buku = form.judul_buku.value;
    const penulis = form.penulis.value;
    const gambar = form.gambar.value;
    const id_kategori = form.id_kategori.value;
    const harga = form.harga.value;
    const deskripsi = form.deskripsi.value;

    const dataObj = {
      judul_buku,
      penulis,
      gambar,
      id_kategori,
      harga,
      deskripsi,
    };
    //UploadBook
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_BASE_URL}/book/addBook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Upload Success");
        window.location.reload();
      });
  };

  return (
    <div className="px-12 my-24">
      <h2 className="mb-8 text-3xl font-bold">Upload A book</h2>

      <form
        onSubmit={handleSubmit}
        className="flex lg:w-[1400px] flex-col flex-wrap gap-6"
      >
        {/* Bari Pertama */}
        <div className="flex gap-10">
          {/* Judul Buku */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="judul_buku" value="Book Title" />
            </div>
            <TextInput
              id="judul_buku"
              name="judul_buku"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>
          {/* Penulis */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="penulis" value="Author Name" />
            </div>
            <TextInput
              id="penulis"
              name="penulis"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>

        {/* Bari Kedua*/}
        <div className="flex gap-10">
          {/* Gambar */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="gambar" value="Book Image URL" />
            </div>
            <TextInput
              id="gambar"
              name="gambar"
              type="text"
              placeholder="Book Image URL"
              required
            />
          </div>

          {/* Kategori */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="id_kategori" value="Book Category" />
            </div>

            <Select
              id="id_kategori"
              name="id_kategori"
              className="w-full rounded"
              value={editedKategori.id_kategori}
              onChange={(e) => {
                console.log(e.target.value);
                setEditedKategori({
                  ...editedKategori,
                  id_kategori: e.target.value,
                });
              }}
            >
              {seletedCategory.map((k) => (
                <option key={k.id_kategori} value={k.id_kategori}>
                  {k.nama_kategori}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Book Price */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="harga" value="Your Price" />
          </div>
          <TextInput
            id="harga"
            type="number"
            placeholder="Book Price"
            className="w-full"
            required
          />
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="deskripsi" value="Book Description" />
          </div>
          <Textarea
            id="deskripsi"
            name="deskripsi"
            placeholder="Write Your Book Description..."
            className="w-full"
            required
            rows={6}
          />
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
