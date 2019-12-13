import React from 'react';
import Dashboard from './dashboard/Dashboard'
import Navigation from './navigation/Navigation'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1>City Data Comparison</h1>

      {/* route components in here here */}
      <Route path='/' component={Navigation} />
      <Route exact path='/' component={Dashboard} />
    </div>
  );
}

export default App;
