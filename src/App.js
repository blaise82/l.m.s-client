import React from 'react';
import { Provider } from 'react-redux';
import classes from './styles/App.module.css';
import Greeting from '../src/components/greeting/Greeting';
import store from './redux/store';

function App() {
  return ( 
    <Provider store = {store}>
    <div className={classes.App}>
    <h1><Greeting greeting/></h1>
    </div>
    </Provider>
  );
}

export default App;
