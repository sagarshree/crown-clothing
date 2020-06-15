import React from "react";
import "./signin-signup-styles.scss";
import SignIn from "../signin/signin-component";
import SignUp from "../signup/signup-component";

const SignInSignUpPage = () => (
  <div className="signin-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
