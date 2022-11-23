import React from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from './pages/home';
import NoPage from './pages/noPage';
import * as Pages from './pages';
import { apiMapping } from './config';
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
              return <Route key={`/${page}/${route}`} path={`/${page}/${route}`} element={<Widget />} />
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
