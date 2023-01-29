import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Counter } from "../features/hello/Hello";
import { CategoryPage } from "../features/category/Category";
import CardPage from "../containers/card/Card";
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
