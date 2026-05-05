import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'خدماتنا', href: '#services' },
  { label: 'مناطقنا', href: '#coverage' },
  { label: 'آراء العملاء', href: '#testimonials' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.2 }
      );
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:+966556900804';
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 opacity-0"
        style={{
          backgroundColor: scrolled ? 'rgba(26,26,26,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
          height: '72px',
        }}
      >
        <div className="content-max-width mx-auto h-full flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-black">
              <span style={{ color: '#FFFFFF' }}>كمبروسر</span>{' '}
              <span style={{ color: 'var(--color-electric-yellow)' }}>الرياض</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold transition-colors duration-200 hover:text-[var(--color-electric-yellow)]"
                style={{ color: 'var(--color-foreground-muted)' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCall}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: 'var(--color-emergency-red)' }}
            >
              <Phone size={16} />
              <span>اتصل: 0556900804</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2"
              style={{ color: 'var(--color-electric-yellow)' }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: 'var(--color-obsidian)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-bold transition-colors duration-200 hover:text-[var(--color-electric-yellow)] border-r-2 border-transparent hover:border-[var(--color-electric-yellow)] pr-4"
              style={{ color: '#FFFFFF' }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleCall}
            className="flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-white mt-4"
            style={{ backgroundColor: 'var(--color-emergency-red)' }}
          >
            <Phone size={20} />
            <span>اتصل: 0556900804</span>
          </button>
        </div>
      )}
    </>
  );
}
