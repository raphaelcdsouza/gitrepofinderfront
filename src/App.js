import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Callback from './pages/Callback';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/callback" exact component={Callback} />
      </Switch>
    </Router>
  )
}

export default App;
