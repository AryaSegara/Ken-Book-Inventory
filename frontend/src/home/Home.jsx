// import { Navigate, useOutletContext } from "react-router-dom";
import Banner from "../components/Banner";
import MyFooter from "../components/MyFooter";
import Navbar from "../components/Navbar";
import BestSellerBook from "./BestSellBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";

const Home = () => {
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
};

export default Home;
