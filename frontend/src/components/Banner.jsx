import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-slate-500 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-52">
        
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black font-serif">
            Sell Your Best
            <span className="text-blue-700"> Books Here</span>
          </h2>
          <p className="md:w-4/5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            repellendus fugiat, ad quidem corrupti fugit, velit ex esse,
            repudiandae labore eveniet rem quas saepe numquam deleniti ea minus
            dolor. Pariatur.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-500 text-white py-2 px-6 font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
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
