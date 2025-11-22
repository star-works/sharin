import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./design-system/pages/Homepage";
import ForgetPasswordPage from "./design-system/pages/ForgetPasswordPage";
import ButtonVariants from "./design-system/pages/ButtonVariants";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/forgot-password" element={<ForgetPasswordPage />} />
          <Route path="/button-variants" element={<ButtonVariants />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
