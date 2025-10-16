import React from 'react';
import { Routes, Route } from 'react-router-dom';

import User from './Components/User';
import Prop from './Components/Prop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <h1>hello</h1>
     
      <User
        name="Rani"
        dept="IT"
        skills={["Java", "C", "JavaScript"]}
      />

      <Prop
        movies={["RajaRani", "Leo", "Tourist Family"]}
        keyval={{
          id: 1,
          name: "Rehu",
          age: 10
        }}
      />
    </>
  );
}

export default App;
