import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Counter } from "./hello/Hello";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <Counter />
        </Route>
        <Route path="/:user">
          <div>test</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
