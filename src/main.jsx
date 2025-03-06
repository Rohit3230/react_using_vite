import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Todos from "./components/todos/Todos";
import About from "./components/About";
import Home from "./components/Home";
import ReactConcepts from "./components/ReactConcepts";
import "./App.css";
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
<React.StrictMode>
      <> 
       <BrowserRouter>
           <Routes>'
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<Todos />} />
              <Route path="/react-concepts" element={<ReactConcepts />} />
            </Routes>
          </BrowserRouter>
        </>
      </React.StrictMode>
    );
