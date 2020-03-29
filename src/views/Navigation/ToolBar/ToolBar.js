import React from 'react';
import propTypes from 'prop-types';
import classes from './../../../styles/Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            L.M.S
        </div>
        <nav className={classes.DesktopOnly}>
           <NavigationItems email={props.adminEmail}/>
        </nav>
    </header>
);
 
toolbar.propTypes = {
    adminEmail: propTypes.string.isRequired
};
export default toolbar;
