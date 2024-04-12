// import { createContext, useState ,useEffect } from "react";
import MyFooter from "./components/MyFooter";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
// import { api } from "./util";

// export const AllContext = createContext();

function App() {
  // const [books,setBooks] = useState([]);

  // useEffect(() =>{
  //   api.get("/api/getAllBook")
  //   .then((response) => {
  //     setBooks(response.data);
  //   })
  // },[]);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
