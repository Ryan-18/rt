import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Chat from './pages/Chat';
import HerbDetection from './pages/HerbDetection';
import HerbDetails from './pages/HerbDetails';
function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/herb-detection" element={<HerbDetection />} />
             <Route path="/herb-details/:herbName" element={<HerbDetails />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}
export default App;