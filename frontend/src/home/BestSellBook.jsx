import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const BestSellerBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/book/getAllBook`)
      .then((response) => response.json())
      .then(data => setBooks(data.slice(0,8)));
  }, []);

  return(
    <div>
      <BookCard books={books} headline="Best Books Anime" />
    </div>
  )
};

export default BestSellerBook;
