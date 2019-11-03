import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Login from './components/layout/Login';
import Signup from './components/layout/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
