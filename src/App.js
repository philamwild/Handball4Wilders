import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch></Switch>
      <Footer />
    </div>
  );
}

export default App;
