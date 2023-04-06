import axios from "axios";
import React, { useState } from "react";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState([""]);
  const [conditions, setconditions] = useState([]);

  const token = localStorage.getItem("token");

  function handleButtonClick() {
    setIsOpen(!isOpen);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let data = { conditions: conditions };

    axios
      .post(`http://127.0.0.1:8000/api/shareRoom/2`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
    console.log("Submitted data:", conditions);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleInputChange(event, index) {
    const values = [...inputs];
    values[index] = event.target.value;
    setInputs(values);
  }

  function handleAddInput() {
    setInputs([...inputs, ""]);
  }

  function handleAddCondition() {
    setconditions((prevConditions) => [
      ...prevConditions,
      ...inputs.filter((input) => input),
    ]);
    setInputs([""]);
  }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 z-10"
        onClick={handleButtonClick}
      >
        Share Room
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md">
            <div className="mb-4">
              <label
                htmlFor="conditions"
                className="block text-gray-700 font-bold mb-2"
              >
                Conditions:
              </label>
              {inputs.map((input, index) => (
                <input
                  type="text"
                  id={`conditions-${index}`}
                  className="border rounded-md px-4 py-2 w-full mb-2"
                  key={index}
                  value={input}
                  onChange={(event) => handleInputChange(event, index)}
                />
              ))}
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleAddInput}
              >
                Add
              </button>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleAddCondition}
              >
                Save
              </button>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Terms and conditions:
              </label>
              <ul style={{ listStyle: "disc" }}>
                {conditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Test;
