import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import SignIn from "./Auth/signin";
import Login from "./Auth/Login";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
