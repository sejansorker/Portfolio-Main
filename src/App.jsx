// import Navbar from "./components/Navbar"
// import SlidBar from "./components/SlidBar"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./layout/Layout";
// import About from "./pages/About";
// import Resume from "./pages/Resume";
// import Portfolio from "./pages/Portfolio";

// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// function App() {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/portfolio" element={<Portfolio />} />
          
//           <Route path="/contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App






import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
