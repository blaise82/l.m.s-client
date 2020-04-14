import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./redux/store";
import NoMatch from "./views/NoMatch";
import Home from "./views/Home";
import SignupPage from "./views/SignupPage";
import AddBookSection from './components/AddBookSection';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/add-section" component={AddBookSection}/>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
