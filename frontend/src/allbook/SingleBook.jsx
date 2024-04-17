import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import MyFooter from "../components/MyFooter";

const SingleBook = () => {
  const { judul_buku, gambar, deskripsi } = useLoaderData();

  return (
    <>
      <Navbar />
      <div className="mt-28 px-4 lg:px-24 flex py-10">
        <img src={gambar} alt="" className="h-96 mx-10 mt-20" />
        <div className="py-20">
          <h2 className="text-5xl font-bold mt-18 mx-8">{judul_buku}</h2>
          <div>
            <h3 className="text-3xl font-bold mx-8 mt-8">{deskripsi}</h3>
          </div>
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default SingleBook;
