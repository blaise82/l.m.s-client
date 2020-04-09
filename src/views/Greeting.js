import React from "react";
import { connect } from "react-redux";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { greetUser } from "../redux/actions/greeting/greetingAction";
import Button from "../components/Button";
import classes from "../styles/Greeting.module.css";

const greeting = (props) => {
  return (
    <div>
      <h1 className={classes.Heading}>{props.welcome}</h1>
      <Link exact to="signin">
        <Button btnName="Sign In" />
      </Link>
      &nbsp;Or &nbsp;
      <Link exact to="signup">
        <Button btnName="Sign Up" />
      </Link>
    </div>
  );
};

const mapStateToProps = ({ greeting }) => {
  return {
    welcome: greeting.welcome,
  };
};

const mapDispatchToProps = (dispacth) => {
  return {
    greetUser: () => dispacth(greetUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(greeting);
