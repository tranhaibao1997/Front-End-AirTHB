import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/Navbar/NavBar";
import Banner from "./component/Banner/Banner";
import ExpList from "./component/Experience/ExpList";
import Footer from "./component/Footer/Footer";
import FilterTag from "./component/FilterTag/FilterTag";
import ExperiencePage from "./component/ExperiencePage/ExperiencePage";
import SingleExp from "./component/SingleExp/SingleExp";
import CreateExp from "./component/CreateExp/CreateExp";

function App() {
  return (
    <Router>
      <>
        <NavBar></NavBar>
        <Switch>
          {/* <Route exact path="/" component={Banner}></Route>
        <Route exact path="/" component={FilterTag}></Route>
        <Route exact path="/" component={ExpList}></Route> */}
          <Route exact path="/" component={ExperiencePage}></Route>
          <Route exact path="/experiences/create" component={CreateExp}></Route>
          <Route exact path="/experiences/:expId" component={SingleExp}></Route>
        </Switch>
        <Footer></Footer>
      </>
    </Router>
  );
}

export default App;
