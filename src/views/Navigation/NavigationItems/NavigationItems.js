import React from 'react';
import propTypes from 'prop-types';

import classes from '../../../styles/NavigationItems.module.css';
import NavigationItem  from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
 <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>ADD SECTION</NavigationItem>
    <NavigationItem link="/">ADD BOOK</NavigationItem>
    <NavigationItem link="/">{props.email}</NavigationItem>
 </ul>
);

navigationItems.propTypes = {
   email: propTypes.string.isRequired
}

export default navigationItems;
