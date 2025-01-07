import React, { useRef } from "react";

const App = () => {
  // Create refs for each section
  const homeRef = useRef([]);
  const aboutRef = useRef([]);
  const servicesRef = useRef([]);
  const contactRef = useRef([]);

  // Scroll to the selected section
  const handleScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Navigation Menu */}
      <nav>
        <button onClick={() => handleScrollToSection(homeRef)}>Home</button>
        <button onClick={() => handleScrollToSection(aboutRef)}>About</button>
        <button onClick={() => handleScrollToSection(servicesRef)}>
          Services
        </button>
        <button onClick={() => handleScrollToSection(contactRef)}>
          Contact
        </button>
      </nav>

      {/* Sections */}
      <section
        ref={homeRef}
        style={{ height: "100vh", background: "lightblue" }}
      >
        <h1>Home</h1>
      </section>
      <section
        ref={aboutRef}
        style={{ height: "100vh", background: "lightgreen" }}
      >
        <h1>About</h1>
      </section>
      <section
        ref={servicesRef}
        style={{ height: "100vh", background: "lightyellow" }}
      >
        <h1>Services</h1>
      </section>
      <section
        ref={contactRef}
        style={{ height: "100vh", background: "lightcoral" }}
      >
        <h1>Contact</h1>
      </section>
    </div>
  );
};

export default App;
