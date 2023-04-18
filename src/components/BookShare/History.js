// // import React from "react";
// // import HistoryNav from "./HistoryNav";
// // import { Routes, Route } from "react-router-dom";
// // import BookingHistory from "./BookingHistory";
// // import RoomHistory from "./RoomHistory";
// // import ShareHistory from "./ShareHistory";

// // const History = () => {
// //   return (
// //     <div className="flex">
// //       <div>
// //         <HistoryNav />
// //       </div>
// //       <div>
// //         <Routes>
// //           <Route to="/" element={<BookingHistory />} />
// //           <Route to="/roomshared" element={<ShareHistory />} />
// //           <Route to="/room-history" element={<RoomHistory />} />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // };

// // export default History;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import BookingHistory from "./BookingHistory";
// import RoomHistory from "./RoomHistory";
// import ShareHistory from "./ShareHistory";

// const History = () => {
//   const [selectedTab, setSelectedTab] = useState("booking");

//   const renderTab = () => {
//     switch (selectedTab) {
//       case "booking":
//         return <BookingHistory />;
//       case "room":
//         return <RoomHistory />;
//       case "share":
//         return <ShareHistory />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex">
//       <nav className="w-1/5 mt-10">
//         <ul className="space-y-2">
//           <li>
//             <Link
//               className={`${
//                 selectedTab === "booking"
//                   ? "bg-gray-200 text-gray-800 font-medium"
//                   : "text-gray-600 hover:text-gray-800 font-medium"
//               } block py-2 px-4 rounded transition duration-200`}
//               to="#"
//               onClick={() => setSelectedTab("booking")}
//             >
//               Booking History
//             </Link>
//           </li>
//           <li>
//             <Link
//               className={`${
//                 selectedTab === "room"
//                   ? "bg-gray-200 text-gray-800 font-medium"
//                   : "text-gray-600 hover:text-gray-800 font-medium"
//               } block py-2 px-4 rounded transition duration-200`}
//               to="#"
//               onClick={() => setSelectedTab("room")}
//             >
//               Room History
//             </Link>
//           </li>
//           <li>
//             <Link
//               className={`${
//                 selectedTab === "share"
//                   ? "bg-gray-200 text-gray-800 font-medium"
//                   : "text-gray-600 hover:text-gray-800 font-medium"
//               } block py-2 px-4 rounded transition duration-200`}
//               to="#"
//               onClick={() => setSelectedTab("share")}
//             >
//               Share Room
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="w-4/5 pr-14 dashboard-content">{renderTab()}</div>
//     </div>
//   );
// };

// export default History;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingHistory from "./BookingHistory";
import RoomHistory from "./RoomHistory";
import ShareHistory from "./ShareHistory";

const History = () => {
  const [selectedTab, setSelectedTab] = useState("booking");

  const renderTab = () => {
    switch (selectedTab) {
      case "booking":
        return <BookingHistory />;
      case "room":
        return <RoomHistory />;
      case "share":
        return <ShareHistory />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      <nav className="bg-gray-100 flex space-x-2 p-2">
        <Link
          className={`${
            selectedTab === "booking"
              ? "bg-gray-200 text-gray-800 font-medium"
              : "text-gray-600 hover:text-gray-800 font-medium"
          } block py-2 px-4 rounded transition duration-200`}
          to="#"
          onClick={() => setSelectedTab("booking")}
        >
          Booking History
        </Link>
        <Link
          className={`${
            selectedTab === "room"
              ? "bg-gray-200 text-gray-800 font-medium"
              : "text-gray-600 hover:text-gray-800 font-medium"
          } block py-2 px-4 rounded transition duration-200`}
          to="#"
          onClick={() => setSelectedTab("room")}
        >
          Room History
        </Link>
        <Link
          className={`${
            selectedTab === "share"
              ? "bg-gray-200 text-gray-800 font-medium"
              : "text-gray-600 hover:text-gray-800 font-medium"
          } block py-2 px-4 rounded transition duration-200`}
          to="#"
          onClick={() => setSelectedTab("share")}
        >
          Share Room
        </Link>
      </nav>
      <div className="flex-grow">{renderTab()}</div>
    </div>
  );
};

export default History;
