import React from 'react';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header className='header'/>
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='/cvs-uiux' element={<Personas />} />
        <Route path='/manga-mockup' element={<IterativeDesign />} />
        {/* <Route path='/hackernews-redesign' element={<HackerNewsSummary />} /> */}
        {/* <Route path='/hackernews-redesign/live' element={<HackerNewsLive />} /> */}
        {/* <Route path='/skincare-app' element={<DevelopmentSummary />} /> */}
        {/* <Route path='/skincare-app/live' element={<DevelopmentLive />} /> */}
        {/* <Route path='/bcup' element={<BCUP />} />  */}
      </Routes>
      <Footer className='footer'/>
    </Router>
  </React.StrictMode>);
