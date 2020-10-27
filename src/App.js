import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  return (
      <Router basename="/">
          <div className="App">
            <h1>Hux Financial</h1>
          </div>
      </Router>
  );
}

export default App;
