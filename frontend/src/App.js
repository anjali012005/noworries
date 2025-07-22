import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Navbar from "./Pages/Navbar/Navbars";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./Pages/Footer/Footer";
import BookDoctor from "./Components/BookDoctor/BookDoctor";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookDoctor/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
