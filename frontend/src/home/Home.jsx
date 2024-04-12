import Banner from "../components/Banner";
import BestSellerBook from "./BestSellBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";

const Home = () => {
  // const {books} = useContext(AllContext);
  return (
    <>
      <Banner />
      <BestSellerBook />
      <FavBook />
      <PromoBanner />
    </>
  );
};

export default Home;
