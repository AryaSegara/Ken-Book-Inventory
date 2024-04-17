import { Navigate, useOutletContext } from "react-router-dom";
import Banner from "../components/Banner";
import MyFooter from "../components/MyFooter";
import Navbar from "../components/Navbar";
import BestSellerBook from "./BestSellBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";

const Home = () => {
  const [admin, 
      // setAdmin
        ] = useOutletContext();

  if (admin) {
    return (
      <>
        <Navbar />
        <Banner />
        <BestSellerBook />
        <FavBook />
        <PromoBanner />
        <MyFooter />
      </>
    );
  }else{
    return <Navigate to="/login"/>
  }
};

export default Home;
