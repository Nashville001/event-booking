import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TicketSelection from "./components/TicketSelection";
import AttendeeInfo from "./components/AttendeeInfo";
import TicketReady from "./components/TicketReady";

function App() {
  return (
    <div className="bg-svg">
      <Navigation />
      <div className="center">
        <Routes>
          <Route path="/" element={<TicketSelection />} />
          <Route path="/attendee-details" element={<AttendeeInfo />} />
          <Route path="/ticket-ready" element={<TicketReady />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
