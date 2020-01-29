import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Equipment from "./pages/Equipment";
import Shoes from "./pages/Shoes";
import Textile from "./pages/Textile";
import Ball from "./pages/Ball";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ball" component={Ball} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/shoes" component={Shoes} />
        <Route path="/textile" component={Textile} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
