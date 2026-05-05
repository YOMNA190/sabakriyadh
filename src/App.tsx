import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LandingPage from './pages/LandingPage';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<LandingPage />} />

        {/* 6 Targeted Ad Landing Pages */}
        <Route 
          path="/riyadh-sewage-suction" 
          element={<LandingPage serviceType="شفط بيارات" />} 
        />
        <Route 
          path="/drain-cleaning-riyadh" 
          element={<LandingPage serviceType="تسليك مجاري" />} 
        />
        <Route 
          path="/compressor-riyadh-service" 
          element={<LandingPage serviceType="كمبروسر الرياض" />} 
        />
        <Route 
          path="/emergency-sewage-riyadh" 
          element={<LandingPage serviceType="طوارئ صرف صحي" />} 
        />
        <Route 
          path="/grease-trap-cleaning" 
          element={<LandingPage serviceType="شفط دهون" />} 
        />
        <Route 
          path="/best-sewage-company-riyadh" 
          element={<LandingPage serviceType="أفضل شركة صرف صحي" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
