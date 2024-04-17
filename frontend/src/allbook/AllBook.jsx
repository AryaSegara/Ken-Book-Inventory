import { useEffect } from "react";
import { useState } from "react";

import { Card } from "flowbite-react";
import Navbar from "../components/Navbar";
import MyFooter from "../components/MyFooter";
import { Link } from "react-router-dom";

const AllBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/book/getAllBook`)
      .then((response) => response.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);
  return (
    <>
      <Navbar />
      <div className="mt-28 py-12 px-4 lg:px-24">
        <h2 className="text-5xl font-bold text-center">All Books are here</h2>

        <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
          {books.map((book) => (
            <Card key={book.id_buku}>
              <img src={book.gambar} alt="" className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book.judul_buku}</p>
              </h5>
              <div className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  {book.penulis} | {book.harga}

                  Klik Button di bawah ini
                </p>
              </div>
              <Link to={`/book/${book.id_buku}`}>
                <div className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 text-center">
                  Show Now
                </div>
                </Link>
            </Card>
          ))}
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default AllBook;
