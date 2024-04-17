import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-slate-500 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-52">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black font-serif">
            Book Anime
            <span className="text-blue-700"> Best Here</span>
          </h2>
          <p className="md:w-4/5">
            Anime Anime terbaik di sepanjang masa saat ini dipercaya membuat
            banyak peminatnya dan terus berkembang seiring berjalannya waktu.
            Tempatnya Penyimpanan Judul- judul Anime yang di sukai dan yang terbaik menurut saya
          </p>
        </div>

        {/* right side */}
        <div>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  );
};

export default Banner;
