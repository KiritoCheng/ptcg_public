import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Counter } from "./hello/Hello";
import { CategoryPage } from "./category/Category";
import CardPage from "./card/Card";
import "./App.css";

function App() {
  return (
    <Router basename="/ptcg">
      <Switch>
        <Route path="/test">
          <Counter />
        </Route>
        <Route path="/category">
          <CategoryPage />
        </Route>
        <Route path="/card">
          <CardPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
