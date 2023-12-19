// import { useState } from 'react'
import "./App.css";

// IMPORT COMPONENTS
import Header from "../Header/Header"
import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
import Docs from "../../Pages/Docs/Docs"
// import Components from "../../Pages/Components"


function App() {
  return (
    <>
    <div className="app-container"> 
      <main className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Docs />} />
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route path="/components" element={<Components />} /> */}
        </Routes>
      </main>
    </div>
    </>
  );
}

export default App;
