import { useEffect } from "react";
import { useState } from "react";


import { Card } from "flowbite-react";

const Shopp = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/getAllBook")
      .then((response) => response.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);
  return (
    <div className="mt-28 py-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map(book => 
          <Card key={book.id_buku} className="">
            <img src={book.gambar} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.judul_buku}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </p>

            {/* <button className="">Buy Now</button> */}
          </Card>)
          }
      </div>
    </div>
  );
};

export default Shopp;
