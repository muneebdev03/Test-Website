import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Description from "./components/Description";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Menu />
    </div>
  );
}

export default App;
