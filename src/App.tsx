import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  Home  from './pages/Home/Home'
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/weather-app" element={<Home />}/>
          {/* <Route path="/month-statistics" element={<MonthStatistics />}/> */}
        </Routes>
    </div>
    </div>
  );
}

export default App;
