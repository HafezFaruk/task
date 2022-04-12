import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Body from "./components/Body/Body.js";
// import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer.js";
import Navbar from "./components/Navbar/Navbar.js";


function App() {
  return (
    <div className="App">
      {/* <div className="animation"></div> */}
      {/* <Cursor /> */}
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
 }

export default App;
