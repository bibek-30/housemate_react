import React, { useState } from "react";

function RoomData() {
  const [inputs, setInputs] = useState([""]);
  const [amenities, setAmenities] = useState([]);

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
    setAmenities(inputs);
  };

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
    setAmenities(newInputs);
  };

  return (
    <div className="bg-red-100">
      {inputs.map((input, index) => (
        <input
          className="border"
          key={index}
          value={input}
          onChange={(event) => handleInputChange(event, index)}
        />
      ))}
      <button type="button" onClick={handleAddInput}>
        Add
      </button>
      {amenities.length > 0 && (
        <div>
          <p>Amenities: {amenities.join(", ")}</p>
          <button onClick={() => console.log(amenities)}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default RoomData;
