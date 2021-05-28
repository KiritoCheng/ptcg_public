import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Counter } from "./hello/Hello";
import { Category } from "./category/Category";
import "./App.css";

function App() {
  return (
    <Router basename="/ptcg">
      <Switch>
        <Route path="/test">
          <Counter />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
