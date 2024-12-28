import React from "react";
import users from "./Userdata";
import Ellipse from "../.././assets/image/Ellipse 44.png";
import Elli from "../.././assets/image/Elli.png";
import Ellip from "../.././assets/image/Ellip.png";
import Ellips from "../.././assets/image/Ellips.png";

const UserTable = () => {
  console.log("User table data loaded", users);

  return (
    <>
      <div className=" rounded-md  overflow-hidden shadow-2xl">
        <div className="min-w-full p-2 mx-auto  overflow-x-auto border shadow-md sm:rounded-lg 2xl:shadow-lg border-slate-100 h-fit">
          <div className="flex items-center justify-between py-6 w-full">
            <h5 className="mb-2 ml-1 text-lg  font-medium dark:text-white-light cursor-pointer mt-2 font-Poppins  text-[#1C1C28]">
              Current Projects
            </h5>
            <button
              type="button"
              className="text-white bg-[#1CD2AD] hover:bg-[#42bda4d8] focus:outline-none  font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2 dark:bg-[#1CD2AD] dark:hover:bg-[#48dcbede]  font-Poppins"
            >
              Create
            </button>
          </div>
          <table
            className="min-w-full text-sm text-left"
            style={{ tableLayout: "fixed" }}
          >
            <thead className="text-xs bg-[#F6F8FA] sticky top-0 z-10">
              <tr>
                {[
                  { label: "Project Name", width: "20" },
                  { label: "Customer", width: "20" },
                  { label: "Sent Date", width: "20%" },
                  { label: "Amount", width: "20%" },
                ].map((col) => (
                  <th
                    key={col.label}
                    scope="col"
                    className="px-6 py-2 text-sm font-medium text-gray-700 font-Poppins"
                    style={{ width: col.width }}
                  >
                    <h2 className="text-[15px] text-[#000000] font-Poppins">
                      {col.label}
                    </h2>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, idx) => (
                  <tr
                    key={user.id}
                    className="bg-white border-b cursor-pointer hover:bg-slate-50"
                  >
                    <td className="px-6 py-2 font-[500] text-[#8E90A6] whitespace-nowrap overflow-hidden text-ellipsis font-Poppins">
                      {user.projectName}
                    </td>
                    <td className="px-6 py-2 font-[500] text-[#8E90A6] whitespace-nowrap overflow-hidden text-ellipsis font-Poppins">
                      {user.customerName}
                    </td>
                    <td className="px-6 py-2  font-[500]  text-[#8E90A6] whitespace-nowrap font-Poppins">
                      {user.sentDate}
                    </td>
                    <td className="px-6 py-2 font-[400] text-[#8E90A6] whitespace-nowrap mainfont font-Poppins">
                      {user.amount}
                    </td>
                    <td className="px-6 py-2 font-semibold text-[#3087eb] whitespace-nowrap font-Poppins">
                      <button
                        type="button"
                        class="text-[#1CD2AD]  bg-[#1CD2AD33] bg-gradient-to-bl font-Poppins    font-medium rounded-xl text-sm px-5 py-1 text-center me-2 mb-2"
                      >
                        PAID
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-2 text-center font-[500] text-[#3087eb] font-Poppins"
                  >
                    No Users Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Event welcoming box */}
      <div className="my-8 md:ml-6 rounded-lg font-Poppins    shadow-2xl border border-slate-300 md:w-[28rem] h-[20rem]">
        {/* Header */}
        <div className="w-full h-[10%]">
          <h3 className="p-3 text-gray-700">Events</h3>
        </div>

        {/* Events List */}
        <div className="w-full h-[90%] overflow-y-auto">
          {/* Event Item */}
          <div className="flex items-center p-2 md:p-4">
            <img
              src={Ellipse}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
              <span className="block text-gray-800 font-medium">
                Wade Warren
              </span>
              <span className="text-sm text-blue-600">🎂 Birthday • Today</span>
            </div>
            <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-md shadow-md">
              Wish
            </button>
          </div>

          {/* Another Event Item */}
          <div className="flex items-center p-2 md:p-4">
            <img
              src={Elli}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
              <span className="block text-gray-800 font-medium">
                Wade Warren
              </span>
              <span className="text-sm text-blue-600">
                🎉 Joining Us • Today
              </span>
            </div>
            <button className="bg-blue-500 items-center text-white text-sm px-2 md:px-4 py-1 rounded-md shadow-md">
              Congratulations
            </button>
          </div>

          {/* Another Event Item */}
          <div className="flex items-center p-2 md:p-4">
            <img
              src={Ellip}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
              <span className="block text-gray-800 font-medium">
                Wade Warren
              </span>
              <span className="text-sm text-gray-500">
                💼 Work Anniversary • 7 September, 2022
              </span>
            </div>
          </div>
          {/* Another Event Item */}
          <div className="flex items-center px-4 py-3">
            <img
              src={Ellipse}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
              <span className="block text-gray-800 font-medium">
                Wade Warren
              </span>
              <span className="text-sm text-gray-500">🎉 Welcome •</span>
            </div>
          </div>
          {/* Another Event Item */}
          <div className="flex items-center px-4 py-3">
            <img
              src={Elli}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-grow">
              <span className="block text-gray-800 font-medium">
                Wade Warren
              </span>
              <span className="text-sm text-gray-500">💼 Work Anniversary</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
