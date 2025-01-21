import React, { useState } from "react";  

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");  

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <nav className="navbar">
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchTerm}  
        onChange={handleSearchChange}
      />
    </nav>
  );
};

export default Navbar;
