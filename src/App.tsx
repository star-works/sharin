import "./App.css";
import Homepage from "./design-system/pages/Homepage";
import ForgetPage from "./design-system/pages/ForgetPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/driver-signup" element={<ForgetPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
