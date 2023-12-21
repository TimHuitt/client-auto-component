// IMPORT COMPONENTS
import Header from "../Header"
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// IMPORT PAGES
import Docs from "../../Pages/Docs/Docs"
import User from "../../Pages/User"
// import Components from "../../Pages/Components"


function App() {

  const [user, setUser] = useState({});

  return (
    <>
    <div className="app-container"> 
      <main className="content">
        <Header />

            <Routes>
              <Route path="/" element={<Docs />} />
              <Route path="/user" element={<User />} />
              <Route path="/logout" element={<Docs />} />
            </Routes>
      </main>
    </div>
    </>
  );
}

export default App;
