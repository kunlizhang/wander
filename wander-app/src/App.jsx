import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import ExamplePage from './pages/ExamplePage';
import WelcomePage from './pages/WelcomePage';
import TripInitPage from './pages/TripInitPage';
import TripSpecificsPage from './pages/TripSpecificsPage';
import GeneratedItinerariesPage from './pages/GeneratedItinerariesPage';

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/example" element={<ExamplePage/>} />
          <Route path="/trip" element={<TripInitPage/>} />
          <Route path="/tripPlan" element={<TripSpecificsPage/>} />
          <Route path="/generated" element={<GeneratedItinerariesPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
