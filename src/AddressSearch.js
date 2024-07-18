import React from "react";

const AddressSearch = ({ address, handleAddressChange, handleSearch }) => {
  return (
    <div className="Content">
      <h2>Search for an Address</h2>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter address"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default AddressSearch;
