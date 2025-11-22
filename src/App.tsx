import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./design-system/pages/Homepage";
import ForgetPasswordPage from "./design-system/pages/ForgetPasswordPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/forgot-password" element={<ForgetPasswordPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
