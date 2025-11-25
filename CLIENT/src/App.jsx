// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import SignIn from "./Auth/SignIn";
import Login from "./Auth/Login";

const AppContent = () => {
  const location = useLocation();

  // pages where Navbar and Footer should NOT show
  const hideLayout = ["/Signin", "/Login"];

  const shouldHideLayout = hideLayout.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
