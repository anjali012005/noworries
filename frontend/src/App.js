import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Navbar from "./Pages/Navbar/Navbars";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./Pages/Footer/Footer";
import BookDoctor from "./Components/BookDoctor/BookDoctor";
import PatientQueue from "./Components/PatientQueue/PatientQueue";
import MyProfile from "./Components/MyProfile/MyProfile";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookDoctor />} />
            <Route path="/queue" element={<PatientQueue/>} />
            <Route path="my-profile" element={<MyProfile/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

// export default App;

export default App;