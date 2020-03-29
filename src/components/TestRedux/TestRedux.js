import React from 'react';
import classes from './TestRedux.module.css';
import {connect } from 'react-redux';
import {incrementCounter, decrementCounter } from '../../redux/actions/testRedux/testReduxAction';
const testRedux = (props) => {
    return (
        <div>
            <h2>Current count: {props.counter}</h2>
            <button className={classes.IncrementBtn} 
             onClick={props.incrementCounter}>Increment!</button>
            <button className={classes.DecrementBtn} 
             onClick={props.decrementCounter}>Decrement!</button>
        </div>
    );  
}

const mapStateToProps = state => {
    return {
        counter: state.test.counter
    }
}

const mapDispatchToProps = dispacth => {
    return {
        incrementCounter: () => dispacth(incrementCounter()),
        decrementCounter: () => dispacth(decrementCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(testRedux);
