import React, { useEffect, useState } from "react";
import edusify from "../../assets/edusify.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-10 flex items-center justify-between p-4 ${
        sticky ? "bg-[#212ea0] transition duration-500" : "bg-transparent"
      }`}
    >
      <div className="flex flex-row">
        <img src={edusify} alt="" className="size-7 md:size-12"/>
        <h1 className="ml-2 mt-2 text-white text-xs md:text-base md:ml-4 md:mt-4">
  UPPERHILL COLLEGE
</h1>

      </div>
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="md:hidden w-[26px] cursor-pointer z-20"
        onClick={toggleMenu}
      />
      <ul
        className={`flex md:flex-row flex-col md:items-center fixed md:static bg-[#212ea0] md:bg-transparent h-full md:w-auto transition-all duration-300 ease-in-out
        ${mobileMenu ? "w-[50vw] right-0 top-0" : "w-0 right-[-100vw]"} 
        md:top-0 md:right-auto md:p-0 p-4 z-10`}
      >
        {/* Added margin-top to separate first menu item from the icon */}
        <li className="list-none mx-6 text-white text-[15px] mt-12 md:mt-0">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        {/* Increased margin between menu items */}
        <li className="list-none mx-6 text-white text-[15px] mt-8 md:mt-0">
          <Link to="programs" smooth={true} offset={-240} duration={500}>
            Programs
          </Link>
        </li>
        <li className="list-none mx-6 text-white text-[15px] mt-8 md:mt-0">
          <Link to="about" smooth={true} offset={-97} duration={500}>
            About Us
          </Link>
        </li>
        <li className="list-none mx-3 text-white text-[11px] md:text-[15px] mt-8 md:mt-0">
  <Link 
    to="contact" 
    smooth={true} 
    offset={-240} 
    duration={500} 
    className="btn text-[11px] !important  md:text-[15px]"  // Setting a smaller text size
  >
    Contact Us
  </Link>
</li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
