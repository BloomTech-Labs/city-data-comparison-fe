import React from 'react';
import Dashboard from './dashboard/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>City Data Comparison</h1>

      {/* route components in here here */}
      <Route path='/' component={Dashboard} />
    </div>
  );
}

export default App;
