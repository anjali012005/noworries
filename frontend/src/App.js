// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./Pages/HomePage";
// import Navbar from "./Pages/Navbar/Navbars";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Footer from "./Pages/Footer/Footer";
// import BookDoctor from "./Components/BookDoctor/BookDoctor";
// import PatientQueue from "./Components/PatientQueue/PatientQueue";
// import MyProfile from "./Components/MyProfile/MyProfile";
// import SignUp from "./Pages/SignUp/SignUp";
// import Login from "./Pages/Login/Login";

// function App() {
//   const location = useLocation();
//   const hideNavbar = ['/', '/login'].includes(location.pathname);

//   return (
//     <div className="app-wrapper">
//       {!hideNavbar && <Navbar />}
//       <Router>
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<SignUp />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/book" element={<BookDoctor />} />
//             <Route path="/queue" element={<PatientQueue />} />
//             <Route path="my-profile" element={<MyProfile />} />
//           </Routes>
//         </div>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// // export default App;

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import Navbar from "./Pages/Navbar/Navbars";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./Pages/Footer/Footer";
import BookDoctor from "./Components/BookDoctor/BookDoctor";
import PatientQueue from "./Components/PatientQueue/PatientQueue";
import MyProfile from "./Components/MyProfile/MyProfile";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import { useLocation } from "react-router-dom";

// ✅ Create a component inside Router to use `useLocation()`
function AppContent() {
  const location = useLocation();
  const hideNavbar = ['/', '/login'].includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar /> }
      <div className="content">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/book" element={<BookDoctor />} />
          <Route path="/queue" element={<PatientQueue />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>
      {!hideNavbar &&<Footer />}
    </>
  );
}

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
