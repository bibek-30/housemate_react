import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [roomData, setRoomData] = useState([]);

  const [authData, setAuthData] = useState({
    city: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      city: authData.city,
    };

    const response = await axios.post(`http://127.0.0.1:8000/api/feed`, data);
    console.log(response.data);
    setRoomData(response.data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-1/4 py-2 px-4 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
          value={authData.city}
          onChange={(e) => {
            setAuthData({
              ...authData,
              city: e.target.value,
            });
          }}
        />
        <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
          Search
        </button>
      </form>
      <section className="py-6 sm:py-12 dark:bg-white dark:text-white">
        <div className="container p-6 mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {roomData.map((room) => (
              <article className="flex flex-col dark:bg-blue-600" key={room.id}>
                <Link
                  to={`/room/${room.id}`}
                  aria-label={room.title}
                  className="room-image block w-full h-52 dark:bg-white"
                >
                  <img
                    alt={room.title}
                    className="object-cover w-full h-full transition-transform duration-300 ease-out transform-gpu hover:scale-110"
                    src={room.image}
                  />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                  <Link
                    to={`/room/${room.id}`}
                    className="text-xs tracking-wider uppercase hover:none dark:text-white"
                  >
                    {room.city}
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      {room.title}
                    </h3>
                  </Link>

                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-white">
                    <span>Rs {room.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;

// import React, { useState } from "react";
// import axios from "axios";

// const Search = (props) => {
//   const [authData, setAuthData] = useState({
//     title: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = {
//       title: authData.title,
//     };

//     const response = await axios.post(`http://127.0.0.1:8000/api/search`, data);
//     props.handleSearch(response.data);
//     console.log(response.data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           className="border-black"
//           value={authData.title}
//           onChange={(e) => {
//             setAuthData({
//               ...authData,
//               title: e.target.value,
//             });
//           }}
//         />
//         <button>Search</button>
//       </form>
//     </div>
//   );
// };

// export default Search;
