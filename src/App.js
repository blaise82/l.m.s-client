import React from 'react';
import { Provider } from 'react-redux';
import classes from './App.module.css';
import TestRedux from '../src/components/TestRedux/TestRedux';
import store from './redux/store';

function App() {
    /* I used CSS modules concept because
      * They allow the scoping of CSS by automatically 
      * creating a unique classname of the format [filename]\_[classname]\_\_[hash]
      * This helps us to use classes that are uniquely bound to a specific class
      * classes is an object with all CSS classes that are available in App.css
      * So to access them, we simply do {classes.ClassNameWeWant}
     */
  return ( 
    <Provider store = {store}>
    <div className={classes.App}>
    <h1>lms-client main file</h1>
      {/* Just used  <TestRedux/> to give you a clue on how other components will utulise the store!
        * So You can remove <TestRedux/> component because it does not 
        * add any value to our LMS project and 
        * add yours accordingily
       */}
      <TestRedux test/>
    </div>
    </Provider>
  );
}

export default App;
