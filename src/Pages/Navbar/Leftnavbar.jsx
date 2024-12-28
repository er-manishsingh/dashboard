import { List, ListItem } from "@mui/material";

import { Link } from "react-router-dom";
import logo from "../../assets/image/Logo.png";
import dashboardicon from "../../assets/image/dashboard.png";
import invoice from "../../assets/image/invoice-off.png";
import proppsals from "../../assets/image/description.png";
import service from "../../assets/image/services-off.png";
import transactions from "../../assets/image/transactions-off.png";
import project from "../../assets/image/folder.png";
import user from "../../assets/image/description.png";
import settingicon from "../../assets/image/settings-off.png";
import logout from "../../assets/image/logout.png";

function Leftnavbar({ toggleMenu }) {
  return (
    <div
      className="fixed left-0 top-0 h-full bg-white text-white shadow-lg  w-[7rem] lg:w-[16.8rem]  overflow-hidden"
      style={{
        zIndex: 110,
      }}
    >
      {/* Logo and Close Icon */}
      <div className="flex items-center justify-between  px-4">
        {/* Logo */}
        <div className="flex items-center  w-[8rem] h-[2.5rem]">
          <img
            src={logo}
            alt="Company Logo"
            className="  w-full  h-full  object-contain"
          />
        </div>

        {/* Left side menu close icon */}
        <div
          className="bg-[#e0e6ed66] cursor-pointer p-2 rounded-full ml-2"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 m-auto"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 19L7 12L13 5"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              opacity="0.5"
              d="M16.9998 19L10.9998 12L16.9998 5"
              stroke="red"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>

      {/* Navigation List */}
      <List className="space-y-4">
        {/* Dashboard List Item with Dropdown */}
        <ListItem
          className={`w-full  py-3 text-black rounded-md cursor-pointer bg-transparent   group overflow-y-auto  `}
        >
          <div className="relative 2xl:left-[-1rem] flex items-center justify-between py-[5px]  flex-col  w-full  overflow-y-auto    ">
            <div className="bg-[#1CD2AD1A] w-full py-4">
              <Link
                to="/"
                className="flex items-center w-full text-sm no-underline font-[600]"
              >
                <div className="flex items-start justify-start 2xl:ml-3 2xl:pl-1 gap-2">
                  {/* Icon */}
                  <div className=" w-[2rem]  h-[1rem]  ">
                    <img
                      src={dashboardicon}
                      alt=""
                      className=" w-full h-full  object-contain"
                    />
                  </div>
                  {/* Label */}

                  <span className="hidden m-0 lg:inline-block font-Poppins font-medium">
                    Dashboard
                  </span>
                </div>
              </Link>
            </div>
            <div className=" bg-transparent w-full py-4 flex  justify-between items-center  gap-2">
              <Link
                to="/"
                className="flex items-center w-full text-sm no-underline font-[600]"
              >
                <div className="flex items-start justify-start 2xl:ml-3 2xl:pl-1 gap-2     w-full ">
                  {/* Icon */}
                  <div className=" w-[2rem]  h-[1.3rem]   flex justify-center items-center ">
                    <img
                      src={invoice}
                      alt=""
                      className=" w-full h-full  object-contain"
                    />
                  </div>
                  {/* Label */}

                  <span className="hidden m-0 lg:inline-block font-Poppins font-medium text-[#767676]">
                    Invoices
                  </span>
                </div>
              </Link>
            </div>
            <div className=" bg-transparent w-full py-4 flex  justify-between items-center  gap-2">
              <Link
                to="/"
                className="flex items-center w-full text-sm no-underline font-[600]"
              >
                <div className="flex items-start justify-start 2xl:ml-3 2xl:pl-1 gap-2     w-full ">
                  {/* Icon */}
                  <div className=" w-[2rem]  h-[1.3rem]   flex justify-center items-center ">
                    <img
                      src={proppsals}
                      alt=""
                      className=" w-full h-full  object-contain"
                    />
                  </div>
                  {/* Label */}

                  <span className="hidden m-0 lg:inline-block font-Poppins font-medium text-[#767676]">
                    Proposals
                  </span>
                </div>
              </Link>
            </div>
            <div className=" bg-transparent w-full py-4 flex  justify-between items-center  gap-2">
              <Link
                to="/"
                className="flex items-center w-full text-sm no-underline font-[600]"
              >
                <div className="flex items-start justify-start 2xl:ml-3 2xl:pl-1 gap-2     w-full ">
                  {/* Icon */}
                  <div className=" w-[2rem]  h-[1.3rem]   flex justify-center items-center ">
                    <img
                      src={service}
                      alt=""
                      className=" w-full h-full  object-contain"
                    />
                  </div>
                  {/* Label */}

                  <span className="hidden m-0 lg:inline-block font-Poppins font-medium text-[#767676]">
                    Services
                  </span>
                </div>
              </Link>
            </div>
            <div className=" bg-transparent w-full py-4 flex  justify-between items-center  gap-2">
              <Link
                to="/"
                className="flex items-center w-full text-sm no-underline font-[600]"
              >
                <div className="flex items-start justify-start 2xl:ml-3 2xl:pl-1 gap-2     w-full ">
                  {/* Icon */}
                  <div className=" w-[2rem]  h-[1.3rem]   flex justify-center items-center ">
                    <img
                      src={transactions}
                      alt=""
                      className=" w-full h-full  object-contain"
                    />
                  </div>
                  {/* Label */}

                  <span className="hidden m-0 lg:inline-block font-Poppins font-medium text-[#767676]">
                    Transactions
                  </span>
                </div>
              </Link>
            </div>

            <div className=" bg-transparent w-full py-4 flex  justify-between items-center  pl-1 gap-2">
              <Link
                to="/"
                className="flex items-center w-full text-sm no-underline font-[600]"
              >
                <div className="flex items-start justify-start 2xl:ml-3 2xl:pl-1 gap-2     w-full ">
                  {/* Icon */}
                  <div className=" w-[1.5rem]  h-[1rem]   flex justify-center items-center ">
                    <img
                      src={project}
                      alt=""
                      className=" w-full h-full  object-contain"
                    />
                  </div>
                  {/* Label */}

                  <span className="hidden m-0 lg:inline-block font-Poppins font-medium text-[#767676]">
                    Projects
                  </span>
                </div>
              </Link>
            </div>
            <div className=" bg-transparent w-full py-4 flex  justify-between items-center  gap-2">
              <Link
                to="/"
                className="flex items-center w-full text-sm no-underline font-[600]"
              >
                <div className="flex items-start justify-start 2xl:ml-3 2xl:pl-1 gap-2     w-full ">
                  {/* Icon */}
                  <div className=" w-[2rem]  h-[1.3rem]   flex justify-center items-center ">
                    <img
                      src={user}
                      alt=""
                      className=" w-full h-full  object-contain"
                    />
                  </div>
                  {/* Label */}

                  <span className="hidden m-0 lg:inline-block font-Poppins font-medium text-[#767676]">
                    Customers
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </ListItem>
      </List>

      <div className=" w-full    h-auto   absolute bottom-4 flex  flex-col  gap-4 px-4 ">
        {/*setting  */}

        <div className=" w-full flex gap-1   items-center">
          {/* logo   */}
          <div className=" w-[2.3rem]  h-[1.6rem]  ">
            <img
              src={settingicon}
              alt=""
              className=" w-full h-full  object-contain"
            />
          </div>

          <div>
            <button className=" font-medium   hidden  xl:block text-[#767676] font-Poppins ">
              Settings
            </button>
          </div>
        </div>

        {/* log out  */}

        <div className=" w-full flex gap-1   items-center">
          {/* logo   */}
          <div className=" w-[2rem]  h-[1.2rem] pl-2 md:pl-1 ">
            <img
              src={logout}
              alt=""
              className=" w-full h-full  object-contain"
            />
          </div>

          <div>
            <button className=" font-medium  hidden  xl:block text-[#767676] font-Poppins ">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftnavbar;
