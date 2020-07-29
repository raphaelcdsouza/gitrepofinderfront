import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GithubAuthProvider } from './hooks/githubAuth';

import Dashboard from './pages/Dashboard';
import Callback from './pages/Callback';

import GlobalStyles from './styles/global';

function App() {
  return (
    <GithubAuthProvider>
      <Router>
        <GlobalStyles />

        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/callback" exact component={Callback} />
        </Switch>
      </Router>
    </GithubAuthProvider>
  )
}

export default App;
