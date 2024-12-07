import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar logoName={"PicoSat4Bangladesh"} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
