import React from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
import Home from "./home/Home.jsx";
import Layout from "./layout/base.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './about';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="layout" element={<Layout />} />
        <Route path="about" element={<About />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
