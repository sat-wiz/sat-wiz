import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './shared/NavBar';
import Callback from './auth/Callback';
//lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'))
const ScantronPage = lazy(() => import('./pages/ScantronPage'))
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'))

//uppermost components are pages that represent the entire page of a specific routex
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Suspense fallback={ <img src="https://svgshare.com/i/CpJ.svg" alt="gears" /> }>
          <Route exact path="/" component={ HomePage }/>
          <Route path="/scantron" component={ ScantronPage }/>
          <Route path="/analytics" component={ AnalyticsPage }/>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
