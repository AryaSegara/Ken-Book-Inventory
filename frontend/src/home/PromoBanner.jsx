import bookPic from "../assets/awardbooks.png";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">

        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            2024 National Book Awards For Fiction Shorlist
          </h2>
          <Link to="/shop" className="block">
            <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              Get Promo Code
            </button>
          </Link>
        </div>

        <div>
            <img src={bookPic} alt="" className="w-96"/>
        </div>
      </div>
    </div>

    
    // <div className="bg-slate-100">
    //     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    //         <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    //             <span className="block">Ready to dive in?</span>
    //             <span className="block text-indigo-600">Start your free trial today.</span>
    //         </h2>
    //         <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
    //             <div className="inline-flex rounded-md shadow">
    //                 <Link
    //                     to="/register"
    //                     className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
    //                 >
    //                     Get started
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default PromoBanner;
