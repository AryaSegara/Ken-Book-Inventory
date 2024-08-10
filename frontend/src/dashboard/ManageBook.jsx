import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBook = () => {
  const [allBooks, setAllBokks] = useState([]);
  const [allKategori, setAllKategori] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/book/getAllBook`)
      .then((response) => response.json())
      .then((data) => setAllBokks(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/kategori/getAllKategori`)
      .then((response) => response.json())
      .then((data) => setAllKategori(data));
  }, []);

  const getKategoriNameById = (id) => {
    const kategori = allKategori?.find((s) => s.id_kategori === id);
    return kategori?.nama_kategori;
  };

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/book/deleteBook/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        window.location.reload();
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your books</h2>

      <Table className="lg:w-[1300px]">
        <Table.Head>
          <Table.HeadCell>NO</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit Or Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book.id_buku}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{book.judul_buku}</Table.Cell>
              <Table.Cell>
                <img src={book.gambar} alt="" className="h-20"/>
              </Table.Cell>
              <Table.Cell>{book.penulis}</Table.Cell>
              <Table.Cell>{getKategoriNameById(book.id_kategori)}</Table.Cell>
              <Table.Cell>{book.harga}</Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                  to={`/admin/dashboard/edit-book/${book.id_buku}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book.id_buku)}
                  className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageBook;
