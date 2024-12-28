import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Leftnavbar from "./Leftnavbar";
import UserTable from "../UserData/User";
import image from "../../assets/image/insights (1).png";
import image1 from "../../assets/image/Income.png";
import image2 from "../../assets/image/Profit.png";
import image3 from "../../assets/image/Union.png";
import Card from "../../Componets/Card";

import logo from "../../assets/image/Logo.png";

const cardData = [
  {
    price: "$1212121",
    status: "Sales",
    image: image,
  },
  {
    price: "$2323232",
    status: "Expense",
    image: image3,
  },
  {
    price: "$3434343",
    status: "Profit",
    image: image2,
  },
  {
    price: "$3434343",
    status: "Income",
    image: image1,
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const newValue = !prev;
      localStorage.setItem("isMenuOpen", newValue);
      return newValue;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Sidebar */}
      {isMenuOpen && <Leftnavbar toggleMenu={toggleMenu} />}
      <div
        className={`flex flex-col transition-all duration-300`}
        style={{
          marginLeft: isMenuOpen ? "15%" : "0%",
          width: isMenuOpen ? "85%" : "100%",
        }}
      >
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 flex items-center justify-between bg-[#121E48] md:p-10 p-4 shadow-md transition-all ${
            isScrolled ? "z-50" : ""
          }`}
          style={{
            width: isMenuOpen ? "calc(100% - 15%)" : "100%",
            marginLeft: isMenuOpen ? "15%" : "0",
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-4">
            {/* <img
              src={logo}
              alt="Company Logo"
              className="w-32 h-10 object-contain bg-transparent"
            /> */}

            {/* Hamburger Menu Icon */}
            {!isMenuOpen && (
              <button
                className=" w-6 h-5 flex flex-col justify-between items-center bg-transparent border-none focus:outline-none "
                onClick={() => setIsMenuOpen(true)} // Opens the menu
              >
                <span className="block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out"></span>
                <span className="block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out"></span>
                <span className="block w-full h-1 bg-white rounded transition-all duration-300 ease-in-out"></span>
              </button>
            )}
          </div>

          {/* Navbar Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 pl-10 bg-[#FFFFFF1A] rounded-full text-white placeholder-white w-[10rem] md:w-60"
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="7" strokeWidth="2" />
                <line x1="16" y1="16" x2="20" y2="20" strokeWidth="2" />
              </svg>
            </div>

            {/* Notifications */}
            <div className="relative cursor-pointer bg-[#e0e6ed66] p-2 rounded-full">
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-200 text-white group-hover:text-[#3087eb]"
              >
                <path
                  d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 6V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* User Profile */}
            <img
              src="https://html.vristo.sbthemes.com/assets/images/user-profile.jpeg"
              alt="User Profile"
              className="w-9 h-9 rounded-full object-cover"
            />
          </div>
        </nav>

        {/* Main Content */}
        <main className="mt-[6rem]  relative   m-4  rounded-xl gap-6 z-40 ">
          {/* card design */}
          <div className=" w-full     grid  xl:grid-cols-4 md:grid-cols-2        grid-cols-2 gap-6">
            {cardData.map((card, index) => (
              <Card
                key={index}
                price={card.price}
                status={card.status}
                image={card.image}
              />
            ))}
          </div>
          {/* Table */}
          <section className="  rounded-lg   shadow-xl border border-slate-400 mt-[4rem]">
            <Routes>
              <Route path="/" element={<UserTable />} />
            </Routes>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
