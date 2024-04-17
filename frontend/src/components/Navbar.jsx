import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBookSkull, FaXmark } from "react-icons/fa6";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    const scrollInterval = setInterval(handleScroll,100);

    return () => clearInterval(scrollInterval);
  }, []);

  //navItems Here
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "All Book", path: "/allbook" },
    { link: "Manage You Book", path: "/admin/dashboard/databook" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 lef-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 
          ${isSticky ? "sticky top-0 right-0 left-0 bg-indigo-50" : ""}`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-green-400 italic flex items-center gap-2"
          >
            <FaBookSkull className="inline-block" />
            KenBooks
          </Link>


          {/* nav items */}
          <ul className="md:flex space-x-12 hidden">
            {
              navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-base font-bold text-black uppercase cursor-pointer hover:text-blue-700"
                >
                  {link}
                </Link>
              ))
            }
          </ul>


          {/* btn */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
          </div>


          {/* menu btn */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              { 
                isMenuOpen ? (<FaXmark className="h-5 w-5 text-black" />)
                : 
                (<FaBarsStaggered className="h-5 w-5 text-black" />) 
              }
            </button>
          </div>
        </div>


        {/* natiItems  */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 
            ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
        >
          {
              navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-base font-bold text-white uppercase cursor-pointer"
                >
                  {link}
                </Link>
              ))
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
