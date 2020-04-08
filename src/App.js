import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './redux/store';
import NoMatch from './views/NoMatch';
import Home from './views/Home';

function App() {
	return (
		<Provider store={store}>
		<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
				</Router>
		</Provider>
	);
}

export default App;
