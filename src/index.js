import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './scrolltotop';

import Landing from './landing/landing';
import About from './about/about';
import Personas from './cvs-uiux/cvs-uiux';
import DevelopmentSummary from './development/developmentsummary';
import DevelopmentLive from './development/developmentlive';
import HackerNewsSummary from './hackernews-redesign/redesignsummary';
import HackerNewsLive from './hackernews-redesign/redesignlive';

import EyeTracking from './eye-tracking/eye-tracking';
import BCUP from './bcup/bcup';
import Footer from './header-footer/footer';
import Header from './header-footer/header';

class App extends Component {

  render() {

    return (
      <Router>
        <ScrollToTop />
          <Header className='header'/>
            <Routes>
              <Route path='/portfolio' element={<Landing />} />
              <Route path='/portfolio/about' element={<About />} />
              <Route path='/portfolio/cvs-uiux' element={<Personas />} />
              <Route path='/portfolio/eye-tracking' element={<EyeTracking />} />
              <Route path='/portfolio/hackernews-redesign' element={<HackerNewsSummary />} />
              <Route path='/portfolio/hackernews-redesign/live' element={<HackerNewsLive />} />
              <Route path='/portfolio/skincare-app' element={<DevelopmentSummary />} />
              <Route path='/portfolio/skincare-app/live' element={<DevelopmentLive />} />
              <Route path='/portfolio/bcup' element={<BCUP />} /> 
            </Routes>
          <Footer className='footer'/>
      </Router>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);
