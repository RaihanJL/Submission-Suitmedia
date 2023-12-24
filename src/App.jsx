import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Ideas from './pages/Ideas';
import Work from './pages/Work';
import About from './pages/About';
import Services from './pages/Services';
import Carrers from './pages/Carrers';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="ideas" element={<Ideas />} />
          <Route path="careers" element={<Carrers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;