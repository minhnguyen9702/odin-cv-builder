import React from "react";

function PersonalDetails({ name, onChange }) {
  return (
    <>
      <label htmlFor="name">Fullname:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Enter your full name"
      />
    </>
  );
}

export default PersonalDetails;
