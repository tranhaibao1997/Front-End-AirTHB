import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/Navbar/NavBar'
import Banner from './component/Banner/Banner';

function App() {
  return (
    <Router>
      <>
        <NavBar></NavBar>
        <Switch>
        <Route exact path="/" component={Banner}></Route>
        </Switch>
      </>
    </Router>

  );
}

export default App;
