import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import About from "./components/About";
import Transfer from "./components/Transfer";
import Home from "./components/Home";
import Product from "./components/Product";
import Admin from "./components/Admin";
import Login from "./components/login/Login";
import SignIn from "./components/SignIn/SignIn";
import Logout from "./components/logout/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Hi!!!!!</h1>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/transfer" element={<Transfer />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
      </Router>
      <></>
    </div>
  );
}

export default App;
