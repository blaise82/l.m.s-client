import React from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import SignupForm from "./SignupForm";
import { signup } from "../redux/actions/users";

class SignupPage extends React.Component {
  submit = (data) =>
    this.props.signup(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: Proptypes.shape({
    push: Proptypes.func.isRequired,
  }).isRequired,
  signup: Proptypes.func.isRequired,
};

export default connect(null, { signup })(SignupPage);
