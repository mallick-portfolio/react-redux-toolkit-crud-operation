import React from "react";
import Navabar from "./components/Navabar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddBook from "./components/AddBook.jsx";
const App = () => {
  return (
    <div>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </div>
  );
};

export default App;
