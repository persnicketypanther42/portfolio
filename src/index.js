import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Landing from './landing/landing';
import Personas from './cvs-uiux/cvs-uiux';
// import DevelopmentSummary from './development/summary';
// import DevelopmentLive from './development/development';
// import HackerNewsSummary from './hackernews-redesign/summary';
// import HackerNewsLive from './hackernews-redesign/hackernews';

import IterativeDesign from './iterative-design/iterative-design';
// import BCUP from './bcup/bcup';
import Footer from './header-footer/footer';
import Header from './header-footer/header';

class App extends Component {

  render() {

    return (
      <Router>
        <Header className='header'/>
        <Routes>
          <Route path='/portfolio' element={<Landing />} />
          <Route path='/portfolio/cvs-uiux' element={<Personas />} />
          <Route path='/portfolio/manga-mockup' element={<IterativeDesign />} />
          {/* <Route path='/portfolio/hackernews-redesign' element={<HackerNewsSummary />} /> */}
          {/* <Route path='/portfolio/hackernews-redesign/live' element={<HackerNewsLive />} /> */}
          {/* <Route path='/portfolio/skincare-app' element={<DevelopmentSummary />} /> */}
          {/* <Route path='/portfolio/skincare-app/live' element={<DevelopmentLive />} /> */}
          {/* <Route path='/portfolio/bcup' element={<BCUP />} />  */}
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
