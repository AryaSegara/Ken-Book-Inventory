import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

const DataBook = () => {
  const [allBooks, setAllBokks] = useState([]);
  const [allKategori, setAllKategori] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/book/getAllBook`)
      .then((response) => response.json())
      .then((data) => setAllBokks(data));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/kategori/getAllKategori`)
      .then((response) => response.json())
      .then((data) => setAllKategori(data));
  }, []);

  const getKategoriNameById = (id) => {
    const kategori = allKategori?.find((s) => s.id_kategori === id);
    return kategori?.nama_kategori;
  };

  return (
    <div className="px-14 my-24">
      <h2 className="mb-8 text-3xl font-bold">Data Your Books</h2>

      <Table className="lg:w-[1300px]">
        <Table.Head>
          <Table.HeadCell>NO</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
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
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default DataBook;
