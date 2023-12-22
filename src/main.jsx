import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import UserProvider from "./contexts/UserProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);
