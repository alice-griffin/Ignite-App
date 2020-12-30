import React, { useEffect } from "react";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewGames from './components/NewGames';
import UpcomingGames from './components/UpcomingGames';
import PopularGames from './components/PopularGames';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/upcoming-games" component={UpcomingGames} />
          <Route path="/popular-games" component={PopularGames} />
          <Route path="/new-games" component={NewGames} />
          <Route path="/details/:id" component={GameDetails} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
