import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Card from "./pages/card/Card";
import PlaceOther from "./pages/PlaceOther/PlaceOther";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : <></>}
      <div className="app">
        <Navbar setshowLogin={setshowLogin}></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/other" element={<PlaceOther />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
