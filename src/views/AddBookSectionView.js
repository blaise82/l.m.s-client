import React, {Component} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import classes from '../styles/AddBookSectionView.module.css';
import {addSection} from '../redux/actions/bookSectionAction';

class AddBookSectionView extends Component {
     
  state = {
    data: {
      sectionName: ''
    },
    sectionError: '',
  }

  onChangeHandler = (e) =>
  this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value },
  });

  onSubmitHandler = (e) => {
    e.preventDefault();
    const sectionError = this.validate(this.state.data);
    this.setState({ sectionError});
    if (sectionError.length === 0) {
      this.props.addSection(this.state.data, this.props.token)
    }
  };

  validate = (data) => {
    return data.sectionName.trim() ==='' ? "You must provide book section!": ''
  };
    render(){
        return(
       <div>
        <div className={classes.form}>
          <div className={classes.head}>
            <p className={classes.title}>L.M.S - Add Section</p>
            <p className={classes.sub_title}>Please fill the form</p>
            <p className={classes.Successmessage}>
                  {this.props.message}
            </p>
            <p className={classes.ErrorMessage}>
                  {this.props.error}
            </p>
          </div>
          <form onSubmit={(e) => this.onSubmitHandler(e)}>
            <ul>
              <li className={classes.input_wrap}>
                <label htmlFor="sectionName" className={classes.label}>
                 Section Name
                </label>
                <div className={classes.input_dev}>
                  <input
                    type="text"
                    placeholder="Enter section name"
                    aria-label="sectionName"
                    name="sectionName"
                    className={classes.input}
                    value={this.state.data.sectionName}
                    onChange={(e) => this.onChangeHandler(e)}
                  />
                </div>
                <p className={classes.BelowErroMessage} aria-label="SectionError">
                  {this.state.sectionError}
                </p>
              </li>
              <div className={classes.action}>
                <button className={classes.button} aria-label="submit">
                  Add Section
                </button>
              </div>
            </ul>
          </form>
        </div>
      </div>
        );
    }

}
AddBookSectionView.propTypes = {
  addSection: propTypes.func.isRequired,
  token: propTypes.string.isRequired,
  message: propTypes.string,
  error: propTypes.string
};
AddBookSectionView.defaultProps = {
  message: '',
  error: ''
}

const mapStateToProps = state => {
  return {
      message : state.section.message,
      error: state.section.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSection: (data, token) => dispatch(addSection(data, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddBookSectionView);
