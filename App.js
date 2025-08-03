import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ReactPage from './pages/ReactPage';
import JavaScriptPage from './pages/JavaScriptPage';
import HtmlCssPage from './pages/HtmlCssPage';
import NodeJsPage from './pages/NodeJsPage';
import JavaPage from './pages/JavaPage';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <Router>
      {/* ✅ Scroll to top on route change */}
      <ScrollToTop />

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: '1' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/react" element={<ReactPage />} />
            <Route path="/javascript" element={<JavaScriptPage />} />
            <Route path="/html-css" element={<HtmlCssPage />} />
            <Route path="/nodejs" element={<NodeJsPage />} />
            <Route path="/java" element={<JavaPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
