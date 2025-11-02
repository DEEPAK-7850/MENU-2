import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BarMenu from './section/Barmenu'; // ✅ Import second app entry
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Add Routes & Route imports

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/barmenu" element={<BarMenu />} /> {/* ✅ Add wildcard if it has its own routes */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
