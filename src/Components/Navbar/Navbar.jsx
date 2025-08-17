import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaInfinity } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Search from "../../Pages/Search/Search";
import Cart from "../../Pages/Cart/Cart";

function Navbar() {
  return (
    <>
      <div className="bg-white test-black hover:underline hover:cursor-pointer justify-center font-semibold flex">
        Welcome to Shopfinity <FaLongArrowAltRight className="mt-[5px] ml-2 hover:scale-125 transition-transform duration-300" />
      </div>

      <nav className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] px-10 py-7 flex shadow-md sticky top-0 z-50">
        {/* Logo Section */}
        <div className="text-4xl font-bold text-white flex items-center gap-1 hover:text-[#FACC15] transition-colors duration-300">
          <span className="text-[#FACC15]">Shop</span>
          <FaInfinity className="text-white group-hover:text-[#FACC15] mt-1" />
          <span className="text-[#FACC15]">nity</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-9 ml-40 mt-8">
          <NavLink
            to="/"
            className={({isActive}) =>
              `text-[20px] hover:text-white hover:bg-[#FACC15] hover:rounded-b-md w-3 h-4 transition-colors duration-200 ${isActive ? "text-[#FACC15]" :"text-white" }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive}) =>
              `text-[20px] hover:text-[#FACC15] transition-colors duration-200 ${isActive ? "text-[#FACC15]" :"text-white" }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({isActive}) =>
              `text-[20px] hover:text-[#FACC15] transition-colors duration-200 ${isActive ? "text-[#FACC15]" :"text-white" }`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/newarrival"
            className={({isActive}) =>
              `text-[20px] hover:text-[#FACC15] transition-colors duration-200 ${isActive ? "text-[#FACC15]" :"text-white" }`
            }
          >
            New Arrivals
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive}) =>
              `text-[20px] hover:text-[#FACC15] transition-colors duration-200 ${isActive ? "text-[#FACC15]" :"text-white" }`
            }
          >
            Contact
          </NavLink>

          {/* Search comes first */}
          <Search />

          {/* Cart comes after Search */}
          <Cart />

          <div className="flex items-center space-x-1 mb-2">
            <IoLogInOutline className="text-white text-2xl mr-3" />
            <CgProfile className="text-white text-2xl" />
            <Link
              to="/contact"
              className="text-white text-[20px] hover:text-[#FACC15] transition-colors duration-200"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
