import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Pointer from "./components/Pointer";
import "./App.css";
import Menubar from "./components/Menubar";
import About from "./components/About";
import Contact from "./components/Contact"
import Projects from "./components/Projects";

const App = () => {
  useEffect(() => {
    const cursor = Pointer({
      color: "red",
      element: document.getElementById("custom-cursor"),
    });

    return () => {
      cursor.destroy();
    };
  }, []);

  return (
    <div className="">
      <Navbar />
      <div>
        <main>
          <Routes>
            <Route path="/*" element={<Herosection />} />
            <Route path="/menubar" element={<Menubar />} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
       
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
