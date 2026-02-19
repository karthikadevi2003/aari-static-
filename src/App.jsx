import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Designs from "./pages/Designs";
import Craft from "./pages/Craft";
import Custom from "./pages/Custom";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        {/* 🔥 ADD THIS CLASS (CRITICAL FOR CENTER ALIGN) */}
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/designs" element={<Designs />} />
          
            <Route path="/craft" element={<Craft />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;