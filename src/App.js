import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import classes from './styles/App.module.css';
import Greeting from './views/Greeting';
import store from './redux/store';

const SignIn = () => <h1>Just a dummy signin component to test Routing configuration!</h1>;
const SignUp = () => <h1>Just a dummy signup component to test Routing configuration!</h1>;
const NotFound = () => <h1>Just a dummy page not found component to test Routing configuration!</h1>

function App() {
  return ( 
    <Provider store = {store}>
      <Router>
        <div className={classes.App}>
       <Switch>
          <Route path='/' exact component={Greeting} />
          <Route path='/signin' exact component= {SignIn}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='*' exact component={NotFound}/>
       </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;


