import React from "react";
import "./App.scss";
import Home from "./components/home";
import Detail from "./components/detail";
import Layout from "./components/layouts";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail" component={Detail} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
