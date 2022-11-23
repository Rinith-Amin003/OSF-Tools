import React from 'react';
import './index.css';
import * as Pages from './pages'

function App() {
  const Widget = Pages['files']['create'];
  return (
    <div className="App">
      <Widget/>
    </div >
  );
}

export default App;
