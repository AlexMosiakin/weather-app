import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="global-container">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/weather-app" element={<Home />} />
          <Route
            path="*"
            element={<Navigate to="/weather-app" replace />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
