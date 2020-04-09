import React from "react";
import isEmail from "validator/lib/isEmail";
import PropTypes from "prop-types";
import style from "../styles/Signup.module.css";

class SignupForm extends React.Component {
  state = {
    data: {
      fullName: "",
      email: "",
      password: "",
    },
    loading: false,
    errors: {},
  };

  onChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch((err) =>
        this.setState({
          errors: { globalError: err.response.data.message },
          loading: false,
        })
      );
    }
  };

  validate = (data) => {
    const errors = {};

    if (!data.fullName) errors.fullName = "You must fill your names";
    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "You can't leave password blank";

    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <div className={style.form}>
          <div className={style.head}>
            <p className={style.title}>L.M.S - Sign Up</p>
            <p className={style.sub_title}>Please fill the form</p>
            <p className={style.sub_title2}>{errors.globalError}</p>
          </div>
          <form onSubmit={this.onSubmit}>
            <ul>
              <li className={style.input_wrap}>
                <label htmlFor="fullName" className={style.label}>
                  Full Names
                </label>
                <div className={style.input_dev}>
                  <input
                    type="text"
                    placeholder="enter your full names"
                    name="fullName"
                    className={style.input}
                    value={data.fullName}
                    onChange={this.onChange}
                  />
                </div>
                {<p className={style.message}>{errors.fullName}</p>}
              </li>
              <li className={style.input_wrap}>
                <label htmlFor="email" className={style.label}>
                  Email
                </label>
                <div className={style.input_dev}>
                  <input
                    type="text"
                    placeholder="enter your email"
                    name="email"
                    className={style.input}
                    value={data.email}
                    onChange={this.onChange}
                  />
                </div>
                {<p className={style.message}>{errors.email}</p>}
              </li>
              <li className={style.input_wrap}>
                <label htmlFor="password" className={style.label}>
                  Password
                </label>
                <div className={style.input_dev}>
                  <input
                    type="password"
                    placeholder="secured password"
                    name="password"
                    className={style.input}
                    value={data.password}
                    onChange={this.onChange}
                  />
                </div>
                {<p className={style.message}>{errors.password}</p>}
              </li>
              <div className={style.action}>
                <button className={style.button}>sign up</button>
              </div>
            </ul>
          </form>
        </div>
        <div className={style.one} />
        <div className={style.two} />
        <div className={style.three} />
      </div>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SignupForm;
