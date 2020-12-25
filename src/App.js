import React, { useEffect } from "react";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/details/:id" component={GameDetails} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
