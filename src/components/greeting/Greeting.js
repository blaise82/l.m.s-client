import React from 'react';
import {connect } from 'react-redux';
import {greetUser } from '../../redux/actions/greeting/greetingAction';
const greeting = (props) => {
    return (
        <div>
            <h4>{props.welcome}</h4>
        </div>
    );  
}

const mapStateToProps = ({greeting}) => {
    return {
        welcome: greeting.welcome
    }
}

const mapDispatchToProps = dispacth => {
    return {
        greetUser: () => dispacth(greetUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(greeting);
