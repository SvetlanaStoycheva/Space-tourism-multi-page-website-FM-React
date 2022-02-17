import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sitebar';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import CrewPage from './pages/CrewPage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/destination'>
          <DestinationPage />
        </Route>
        <Route exact path='/crew'>
          <CrewPage />
        </Route>
        <Route exact path='/technology'>
          <TechnologyPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
