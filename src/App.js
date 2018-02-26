import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Home from "./views/Home/Home";
import Profile from "./views/Profile/Profile";
import EditProfile from "./views/EditProfile/EditProfile";
import CreateReview from "./components/createReview/createReview";
import About from "./views/About/About";
import ReviewDetails from "./components/ReviewDetails/ReviewDetails";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/createreview" component={CreateReview} />
          <Route path="/about" component={About} />
          <Route path="/reviewdetails/:id" component={ReviewDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
