import React, { useEffect, useState } from "react";
import logo from "../../assets/logo_1.png";
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
    <nav className={`w-full fixed top-0 left-0 z-10 flex items-center justify-between p-4 ${sticky ? "bg-[#212ea0] transition duration-500" : "bg-transparent"}`}>
      <img src={logo} alt="Logo" className="w-[45px] md:w-[38px]" />
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="md:hidden w-[26px] cursor-pointer"
        onClick={toggleMenu}
      />
      <ul className={`flex md:flex-row flex-col md:items-center absolute md:static bg-[#212ea0] md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out ${mobileMenu ? "right-0 top-16" : "-right-full top-16"} md:top-0 md:right-0 md:p-0 p-4`}>
        <li className="list-none mx-6 text-white text-[15px]">
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="list-none mx-6 text-white text-[15px]">
          <Link to="programs" smooth={true} offset={-210} duration={500}>
            Programs
          </Link>
        </li>
        <li className="list-none mx-6 text-white text-[15px]">
          <Link to="about" smooth={true} offset={-80} duration={500}>
            About Us
          </Link>
        </li>
        <li className="list-none mx-6 text-white text-[15px]">
          <Link to="contact" smooth={true} offset={-210} duration={500} className="btn">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
