import "./App.css";
// import Login from "./components/login/Login";
import About from "./components/About";
import Transfer from "./components/Transfer";
import Home from "./components/Home";
import Product from "./components/Product";
import Admin from "./components/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <h1>My App</h1>

      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/transfer" element={<Transfer />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

// const Home = () => {
//   <div>
//     <h2>Home</h2>
//   </div>;
// };

export default App;
