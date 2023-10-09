import './Appv2.css';

// import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import TicketingPage from './pages/TicketingPage';

import { Routes, Route } from "react-router-dom";

import './fonts/Asher Punk/Asher Punk.ttf';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/ticketing" element={ <TicketingPage /> }></Route>
        
        <Route exact path="/" element={ <LandingPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
