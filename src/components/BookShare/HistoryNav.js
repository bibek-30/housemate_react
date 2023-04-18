// // import React from "react";
// // import { Link } from "react-router-dom";

// // const HistoryNav = () => {
// //   return (
// //     <div>
// //       <Link to={"/test/book"} className="font-bold text-lg text-gray-600 pl-5">
// //         Booking History
// //       </Link>
// //       <Link
// //         to={"/book-history"}
// //         className="font-bold text-lg text-gray-600 pl-5"
// //       >
// //         Shared Room
// //       </Link>
// //     </div>
// //   );
// // };

// // export default HistoryNav;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // const HistoryNav = () => {
// //   return (
// //     <nav className="mt-10">
// //       <ul className="space-y-2">
// //         <li>
// //           <Link
// //             className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
// //             to="/history/room-history"
// //           >
// //             Rooms
// //           </Link>
// //         </li>
// //         <li>
// //           <Link
// //             className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
// //             to="/history/booking-history"
// //           >
// //             Booking History
// //           </Link>
// //         </li>
// //         <li>
// //           <Link
// //             className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
// //             to="/history/share-room"
// //           >
// //             Share Room
// //           </Link>
// //         </li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default HistoryNav;

// import React from "react";
// import { Link } from "react-router-dom";

// const HistoryNav = () => {
//   return (
//     <nav className="mt-10">
//       <ul className="flex flex-row space-x-6">
//         <li>
//           <Link
//             className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
//             to="/history/room-history"
//           >
//             Rooms
//           </Link>
//         </li>
//         <li>
//           <Link
//             className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
//             to="/history"
//           >
//             Booking History
//           </Link>
//         </li>
//         <li>
//           <Link
//             className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
//             to="/history/share-room"
//           >
//             Share Room
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default HistoryNav;

import React from "react";
import { Link } from "react-router-dom";

const HistoryNav = () => {
  return (
    <nav className=" flex mt-10">
      <ul className="space-y-2">
        <li>
          <Link
            className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
            to="/history/room-history"
          >
            Rooms
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
            to="/history/booking-history"
          >
            Booking History
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
            to="/history/share-room"
          >
            Share Room
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-600 hover:text-gray-800 font-medium block py-2 px-4 rounded transition duration-200"
            to="/history"
          >
            Content
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HistoryNav;
