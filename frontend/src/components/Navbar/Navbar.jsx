/* eslint-disable no-unused-vars */
import React from "react";
import { IoMdMenu } from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    title: "Blog",
    path: "/blog",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="container py-10 flex justify-between items-center">
        {/* Logo Section */}
        {/* Name of the website*/}
        <div className="font-bold text-2xl">B-Technology.co</div>
        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
      </div>
    </nav>
  );
};

export default Navbar;
