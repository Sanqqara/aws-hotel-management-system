import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from './components/Home'
import AddItems from './components/AddItems'

class App extends React.Component {

  render() {
    return <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addItems">
          <AddItems />
        </Route>
      </Switch>
    </div>;
  }
}

export default App;
