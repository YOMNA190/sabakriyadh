import { useEffect } from 'react';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyUs from '../sections/WhyUs';
import EmergencyHighlight from '../sections/EmergencyHighlight';
import Coverage from '../sections/Coverage';
import HowItWorks from '../sections/HowItWorks';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import StickyEmergencyBar from '../components/StickyEmergencyBar';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface LandingPageProps {
  title?: string;
  description?: string;
  serviceType?: string;
}

const LandingPage = ({ title, description, serviceType }: LandingPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Here you could customize the Hero or other sections based on props
  // For now, we'll use the main layout which is already highly optimized

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-obsidian)' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <EmergencyHighlight />
        <Coverage />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyEmergencyBar />
      <FloatingWhatsApp />
      <div className="h-20" />
    </div>
  );
};

export default LandingPage;
