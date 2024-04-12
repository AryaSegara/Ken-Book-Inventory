import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

// import { AllContext } from "../App";

const BestSellerBook = () => {
  // const {books} = useContext(AllContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/getAllBook")
      .then((response) => response.json())
      .then(data => setBooks(data.slice(0,8)));
  }, []);


  return(
    <div>
      <BookCard books={books} headline="Best Seller Books" />
    </div>
  )
};

export default BestSellerBook;
