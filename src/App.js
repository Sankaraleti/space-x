import React from 'react'
import Header from './Components/Header/Header'
import GetData from './Components/GetApiData/GetData'
import './style.css'
import LaunchInfo from './Components/LaunchInfo/LaunchInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/launch" element={<LaunchInfo />} />
          <Route path="/" element={<GetData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


// GitHub token
// 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

export default App;
