import React, { useState, useEffect } from "react";
import axios from "axios";

const RoomData = () => {
  let sn = 1;

  const [roomData, setRoomData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomDataPerPage] = useState(10);

  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageOpen(true);
  };

  const handleImageClose = () => {
    setIsImageOpen(false);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://127.0.0.1:8000/api/get-room`);
      console.log(response);
      setRoomData(response.data);
    }
    fetchData();
  }, []);

  const indexOfLastPayment = currentPage * roomDataPerPage;
  const indexOfFirstPayment = indexOfLastPayment - roomDataPerPage;
  const currentroomData = roomData.slice(
    indexOfFirstPayment,
    indexOfLastPayment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="relative overflow-x-auto">
      <h1 className="font-bold text-xl">Rooms</h1>
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  SN
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Room Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Locations
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Price Per Months
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentroomData.map((item, index) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.address}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      key={item.image}
                      onClick={() => handleImageClick(item.image)}
                    >
                      <img src={item.image} alt="room" className="room-image" />
                    </a>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                  <td className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                    <button className="px-3 py-1 mr-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400">
                      Edit
                    </button>
                    <button className="px-3 py-1 ml-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:bg-red-400">
                      Block
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isImageOpen && (
            <div className="image-modal">
              <div className="image-modal-content">
                <span className="close" onClick={handleImageClose}>
                  &times;
                </span>
                <img src={selectedImage} alt="modal" className="modal-image" />
              </div>
            </div>
          )}

          <nav className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
            <div className="hidden sm:block">
              <p className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">{indexOfFirstPayment + 1}</span>{" "}
                to{" "}
                <span className="font-medium">
                  {indexOfLastPayment > roomData.length
                    ? roomData.length
                    : indexOfLastPayment}
                </span>{" "}
                of <span className="font-medium">{roomData.length}</span>{" "}
                roomData
              </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
              <button
                onClick={() =>
                  paginate(currentPage === 1 ? 1 : currentPage - 1)
                }
                disabled={currentPage === 1}
                className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  paginate(
                    currentPage === Math.ceil(roomData.length / roomDataPerPage)
                      ? currentPage
                      : currentPage + 1
                  )
                }
                disabled={
                  currentPage === Math.ceil(roomData.length / roomDataPerPage)
                }
                className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Next
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default RoomData;
