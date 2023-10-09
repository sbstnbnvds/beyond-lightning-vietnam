import './Appv2.css';
import LandingPage from './pages/LandingPage';
import TicketingPage from './pages/TicketingPage';

import { Routes, Route } from "react-router-dom";

import './fonts/Asher Punk/Asher Punk.ttf';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/ticketing" element={ <TicketingPage /> }></Route>
        
        <Route exact path="/" element={ <LandingPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
