import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./components/views/Detail/Detail";
import Home from "./components/views/Home/Home";
import Start from "./components/views/Start/Start";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/bd" component={Home} />
        <Route path="/bd/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
