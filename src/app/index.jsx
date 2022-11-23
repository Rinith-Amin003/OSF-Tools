import React from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from './pages/home';
import NoPage from './pages/noPage';
import * as Pages from './pages';
import { apiMapping, defaultConfig } from './config';
import './index.css';



function App(props) {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {
          Object.keys(apiMapping).map(page => {
            return apiMapping[page].map((route) => {
              const Widget = Pages[page][route];
              const newRoute = route !== defaultConfig.defaultPage ? `/${page}/${route}` : `/${page}`;
              return <Route key={newRoute} path={newRoute} element={<Widget />} />
            })
          })
            .map(page => page)
        }
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
