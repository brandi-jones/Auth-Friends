import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsListPrivate from './components/FriendsListPrivate';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ="/friends-list" component={FriendsListPrivate} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
