import Header from "../Header"
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Docs from "../../Pages/Docs/Docs"

function App() {
  return (
    <>
    <div className="app-container"> 
      <main className="content">
        <Header />
          <Routes>
            <Route path="/" element={<Docs />} />
          </Routes>
      </main>
    </div>
    </>
  );
}

export default App;
