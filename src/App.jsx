import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Loader Component
import Loader from "./components/Loader";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Sections
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import MovingText from "./components/MovingText";

// About Sections
import About from "./components/About";

// Skills Sections
import Skills from "./components/Skills";
import Skills2 from "./components/Skills2";

// Projects Sections
import Projects from "./components/Projects";
import Projects2 from "./components/Projects2";

// Contact Sections
import Contact from "./components/Contact";
import Contact2 from "./components/Contact2";

// Other Components
import Testimonials from "./components/Testimonials";
import Education from "./components/Education";
import TechStats from "./components/TechStats";

// Reusable page components
const HomePage = () => (
  <>
    <Home />
    <MovingText />
    <Home2 heading="Why I'm" imgsrc="/huzaifa.jpg" />
    <TechStats />
    <Home3 />
    <Testimonials heading="Our Clients Awesome " />
    <Education />
  </>
);

const AboutPage = () => (
  <>
    <About />
    <Home2 heading="About" imgsrc="/blue-coat-2.jpg" />
    <Testimonials heading="Our Clients Awesome " />
  </>
);

const SkillsPage = () => (
  <>
    <Skills />
    <Skills2 />
  </>
);

const ProjectsPage = () => (
  <>
    <Projects />
    <Projects2 />
    <TechStats />
  </>
);

const ContactPage = () => (
  <>
    <Contact />
    <Contact2 />
  </>
);

// Loader trigger on route change
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // You can adjust duration
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
