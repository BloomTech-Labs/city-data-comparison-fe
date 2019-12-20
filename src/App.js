import React from 'react';
import Dashboard from './components/dashboard/Dashboard'
import Navigation from './components/navigation/Navigation'
import Footer from './components/navigation/Footer'
import './App.scss';
import {Route} from "react-router-dom";
import Map from "./components/Map";
import Profile from './components/user-profile/Profile'
import PrivacyPolicy from "./components/legal/PrivacyPolicy"


function App() {
  return (
    <div className="App">
      {/* route components in here here */}
      <Navigation />
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/' component={Footer} />
      <Route path="/map" component={Map} />
      <Route path='/profile' component={Profile} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
    </div>
  );
}

export default App;
