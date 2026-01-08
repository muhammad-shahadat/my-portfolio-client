import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {

  
  

  return (
    <>
      
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
