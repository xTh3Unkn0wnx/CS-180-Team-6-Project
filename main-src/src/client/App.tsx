import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { NotFoundPage } from "./components/NotFound";
import { useState } from "react";
import axios from "axios";

import reactLogo from "./assets/react.svg";
import { stringify } from "querystring";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  axios.get("/api/hello").then((response) => setMessage(response.data));
  const handleButton = async () => {
    if (data != "") {
      setData("");
    } else {
      try {
        const response = await axios.get("/api/data");
        setData(response.data);
      } catch (err) {
        console.error(`Error fetxhing data:`, err);
      }
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header title="Live Active" />
              <Main />
              <Footer />
              <div>
                <p>{message}</p>
              </div>
              <button onClick={handleButton}>Click me</button>
              <div>
                {Object.entries(data).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}: </strong>
                    {value}
                  </li>
                ))}
              </div>
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
