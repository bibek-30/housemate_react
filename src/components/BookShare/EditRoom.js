import React, { useState } from "react";

const RoomEdit = ({ room, onSave, onCancel }) => {
  const [title, setTitle] = useState(room.title);
  const [price, setPrice] = useState(room.price);
  const [desc, setDesc] = useState(room.desc);
  const [image, setImage] = useState(room.image);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: room.id, title, image, price, desc });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-medium mb-4">Edit Room</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="address"
          >
            Price
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="address"
          >
            Descriptions
          </label>
          <textarea
            className="border border-gray-400 p-2 w-full"
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && (
            <img
              className="mt-2 w-1/3 h-1/2"
              src={image}
              alt="Selected image preview"
            />
          )}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2"
            type="submit"
          >
            Save
          </button>
          <button
            className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoomEdit;
