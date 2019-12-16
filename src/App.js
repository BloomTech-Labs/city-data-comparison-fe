import React from 'react';
import Dashboard from './components/dashboard/Dashboard'
import Navigation from './components/navigation/Navigation'
import Footer from './components/navigation/Footer'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1>City Data Comparison</h1>

      {/* route components in here here */}
      <Route path='/' component={Navigation} />
      <Route exact path='/' component={Dashboard} />
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
