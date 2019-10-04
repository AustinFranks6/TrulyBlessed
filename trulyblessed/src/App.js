import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <React.Fragment>
          <Switch>
            <Route component={Home} exact path="/" />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
