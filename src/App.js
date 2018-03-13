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

import ReactGA from "react-ga";
ReactGA.initialize("UA-102758287-2", {
    debug: true,
    gaOptions: { cookieDomain: "none" }
});

function withTracker(WrappedComponent, options = {}) {
    const trackPage = page => {
        ReactGA.set({
            page,
            ...options
        });
        ReactGA.pageview(page);
    };

    const HOC = class extends Component {
        componentDidMount() {
            const page = this.props.location.pathname;
            trackPage(page);
        }

        componentWillReceiveProps(nextProps) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return HOC;
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={withTracker(Home)} />
                    <Route path="/profile" component={withTracker(Profile)} />
                    <Route path="/editprofile" component={EditProfile} />
                    <Route path="/createreview" component={CreateReview} />
                    <Route path="/about" component={About} />
                    <Route
                        path="/reviewdetails/:id"
                        component={ReviewDetails}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
