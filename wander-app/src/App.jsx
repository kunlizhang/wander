import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import ExamplePage from './pages/ExamplePage';
import WelcomePage from './pages/WelcomePage';
import TripInitPage from './pages/TripInitPage';
import TripSpecificsPage from './pages/TripSpecificsPage';
import GeneratedItinerariesPage from './pages/GeneratedItinerariesPage';
import ItineraryWalkthroughPage from './pages/ItineraryWalkthroughPage';
import SummaryItineraryPage from './pages/SummaryItineraryPage';
import EditItineraryPage from './pages/EditItineraryPage';
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
          <Route path="/walkthrough" element={<ItineraryWalkthroughPage/>} />
          <Route path="/summary" element={<SummaryItineraryPage/>} />
          <Route path="/edit" element={<EditItineraryPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
