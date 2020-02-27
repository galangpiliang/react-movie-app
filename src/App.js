import React from "react";
import "./App.scss";
import Home from "./components/home";
import Layout from "./components/layouts";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
