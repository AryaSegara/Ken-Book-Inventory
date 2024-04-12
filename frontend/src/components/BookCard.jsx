// import { useContext } from "react";  
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
// import { AllContext } from "../App";

const BookCard = ({ books, headline }) => {
  return (
    <div className="my-10 px-4 lg:px-24 py-8">
      <h2 className="text-5xl text-center font-bold text-black py-1 font-sans">
        {headline}
      </h2>

      {/* Card Books */}
      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((b) => (
            <SwiperSlide key={b.id_buku}>
              <Link to={`/book/${b.id_buku}`}>
                <div className="relative">
                  <img src={b.gambar} alt="" />
                </div>
                <div className="font-bold p-3">
                  <div>
                    <h3>{b.judul_buku}</h3>
                    <p>{b.penulis}</p>
                  </div>
                  <div>
                    <p>Rp.{b.harga}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
