import React from "react";
import "./App.css";
import HomePage from "./components/pages/homepage-component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./components/shop/shop-component";
import Header from "./components/header/header-component";
import SignInSignUpPage from "./components/signin-signup/signin-signup-component";
import { auth } from "./firebase/firebase-utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
