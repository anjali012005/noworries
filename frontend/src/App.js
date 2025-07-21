import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Navbar from "./Pages/Navbar/Navbars";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./Pages/Footer/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
