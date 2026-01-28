import React from 'react';
import { Routes, Route } from 'react-router-dom';

import User from './Components/User';
import Prop from './Components/Prop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Navbar from './Components/Navbar';
import State from './hooks/State';
import Effect from './hooks/Effect';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import GetUser from './pages/GetUser';
import GetUserDetails from './pages/GetUserDetails';
import Reducer from './hooks/Reducer';
import { createContext } from 'react';


export const UserContext = createContext()


const App = () => {
  return (
    <>
    
      <Navbar />
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
         <Route path="/users" element={<GetUser />} />
      <Route path="/users/:id" element={<GetUserDetails />} />
      <Route path="/reducer" element={<Reducer/>} />
        
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
