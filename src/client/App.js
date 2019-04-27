import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ScantronPage from './pages/ScantronPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route path="/scantron" component={ ScantronPage }/>
      </Switch>
    </Router>
  );
}

export default App;
