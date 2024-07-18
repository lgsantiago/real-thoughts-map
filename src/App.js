// src/App.js
import React, { useState } from "react";
import "./App.css";
import Map from "./Map";
import AddressSearch from "./AddressSearch";

function App() {
  const [address, setAddress] = useState("");
  const [addressToSearch, setAddressToSearch] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSearch = () => {
    setAddress("");
    setAddressToSearch(address);
  };

  return (
    <div className="App">
      <Map address={addressToSearch} />
      <AddressSearch
        address={address}
        handleAddressChange={handleAddressChange}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
