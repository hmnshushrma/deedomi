// eslint-disable-next-line no-unused-vars
import './styles/main.scss';
import TemporaryLP from './routes/TemporaryLP';
import LandingPage from './routes/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<TemporaryLP />} />
      <Route path="/under-development" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
