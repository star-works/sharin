import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./design-system/pages/Homepage";
import Forgetpage from "./design-system/pages/Forgetpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/driver-signup" element={<Forgetpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
