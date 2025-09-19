import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Downloads from './pages/Downloads';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
