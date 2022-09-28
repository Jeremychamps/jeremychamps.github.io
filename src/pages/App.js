import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Couple from "./Couple";
import Friends from "./Friends";
import NotFound from "./NotFound";
import "./style.css"









const App = () => {
  return (
    <div>
      
      <div className="app-header"></div>
      <div className="post-container"></div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jeu-a-boire-pour-couple" element={<Couple />} />
      <Route path="/jeu-a-boire-entre-amis" element={<Friends />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};


export default App;