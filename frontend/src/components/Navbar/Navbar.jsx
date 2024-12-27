/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoMdMenu, IoMdClose, IoMdSearch } from "react-icons/io";

const NavbarMenu = [
  { id: 1, title: "KELAS", path: "/kelas" },
  { id: 2, title: "DISKUSI", path: "/about" },
  { id: 3, title: "TANYA JAWAB", path: "/services" },
  { id: 4, title: "GRATIS", path: "/contact" },
  { id: 5, title: "WEBINAR", path: "/blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center 0">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="public/image/logo.png" alt="logo" width={40} />
          <span className="font-bold text-xl text-gray-800">
            B-TECHNOLOGY.CO
          </span>
          {/* Mobile Search Icon */}
          <div className="lg:hidden flex items-center">
            {isSearchOpen ? (
              <div className="bg-white flex absolute top-20 left-[140px]  items-center border border-gray-300 rounded-md overflow-hidden w-60 h-8 ">
                <input
                  className="appearance-none bg-transparent border-none text-gray-700 py-2 px-3 focus:outline-none w-40"
                  type="text"
                  placeholder="Cari Kelas..."
                />
                <button
                  className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600"
                  type="button"
                >
                  <IoMdSearch />
                </button>
                <IoMdClose
                  className="text-2xl text-gray-700 ml-2 cursor-pointer"
                  onClick={toggleSearch}
                />
              </div>
            ) : (
              <IoMdSearch
                className="text-2xl text-gray-700 cursor-pointer"
                onClick={toggleSearch}
              />
            )}
          </div>
        </div>

        {/* Search Bar */}

        {/* Desktop Menu */}
        <div
          className={`hidden lg:flex items-center gap-6 ${
            isSearchOpen ? "hidden" : "flex"
          }`}
        >
          <ul className="flex items-center gap-6">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="text-gray-700 hover:text-blue-500 transition"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ">
            MASUK
          </button>
          <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400">
            DAFTAR
          </button>
        </div>

        {/* Mobile Hamburger Menu Icon*/}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoMdClose className="text-3xl text-gray-700" />
            ) : (
              <IoMdMenu className="text-3xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden  shadow-md mx-10 bg-gray-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="text-gray-700 hover:text-blue-500 transition"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <button className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600 ">
              MASUK
            </button>
            <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded w-full hover:bg-gray-400">
              DAFTAR
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
