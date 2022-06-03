import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UsersList from "./pages/UsersList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/coup2coeur" element={<UsersList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
