import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Downloads from './pages/Downloads';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Security from './pages/Security';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/security" element={<Security />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
