import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { LandingPage } from './Pages/LandingPage/LandingPage';
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
