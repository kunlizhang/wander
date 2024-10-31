import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import ExamplePage from './pages/ExamplePage';
import WelcomePage from './pages/WelcomePage';
import TripInitPage from './pages/TripInitPage';

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/example" element={<ExamplePage/>} />
          <Route path="/trip" element={<TripInitPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
