/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoMdMenu, IoMdClose, IoMdSearch } from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "KELAS",
    path: "/kelas",
  },
  {
    id: 2,
    title: "DISKUSI",
    path: "/about",
  },
  {
    id: 3,
    title: "TANYA JAWAB",
    path: "/services",
  },
  {
    id: 4,
    title: "GRATIS",
    path: "/contact",
  },
  {
    id: 5,
    title: "WEBINAR",
    path: "/blog",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="container py-5 flex justify-between items-center ">
        {/* Logo & Name Section */}
        <div className="flex items-center gap-1">
          <img src="public/image/logo.png" alt="logo" width={40} />
          <div className="font-bold  text-2xl flex   p-2 rounded-lg items-center gap-2">
            B-TECHNOLOGY.CO
          </div>
        </div>
        {/* Search section*/}
        <form className={`lg:block ${isMenuOpen ? "hidden" : "hidden"}`}>
          <div className="flex items-center border-b ] py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Cari Kelas..."
              aria-label="Full name"
            />

            <button
              className="flex-shrink-0 border-transparent border-4   text-sm py-1 px-2 rounded"
              type="button"
            >
              Search
            </button>
          </div>
        </form>

        {/* Menu Section */}
        <div className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row items-center gap-3">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="inline-block py-2 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {item.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">MASUK</button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              DAFTAR
            </button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoMdClose className="text-4xl" />
            ) : (
              <IoMdMenu className="text-4xl" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
