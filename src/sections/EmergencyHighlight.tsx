import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EmergencyHighlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [displayNumber, setDisplayNumber] = useState('0500000000');
  const targetNumber = '0556900804';

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.emergency-headline',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.emergency-cta-btn',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.emergency-sub',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Phone number counter animation
      ScrollTrigger.create({
        trigger: phoneRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const obj = { val: 5000000000 };
          gsap.to(obj, {
            val: parseInt(targetNumber),
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: () => {
              setDisplayNumber('0' + Math.round(obj.val).toString());
            },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+966556900804';
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4"
      style={{
        background: 'linear-gradient(135deg, var(--color-electric-yellow) 0%, #E6A800 100%)',
      }}
    >
      <div className="content-max-width mx-auto text-center">
        <h2 className="emergency-headline opacity-0 text-section-title font-black mb-4" style={{ color: 'var(--color-obsidian)' }}>
          طوارئ التسليك والمجاري؟ لا تقلق، نوصلك خلال 30 دقيقة!
        </h2>

        <div ref={phoneRef} className="mb-6">
          <span
            className="text-hero-display font-black"
            style={{
              color: 'var(--color-obsidian)',
              textShadow: '0 2px 12px rgba(0,0,0,0.2)',
            }}
          >
            {displayNumber}
          </span>
        </div>

        <button
          onClick={handleCall}
          className="emergency-cta-btn opacity-0 inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-extrabold transition-all hover:scale-105 active:scale-95"
          style={{
            backgroundColor: 'var(--color-obsidian)',
            color: 'var(--color-electric-yellow)',
          }}
        >
          <Phone size={22} />
          اتصل الآن — نحن في الطريق
        </button>

        <p className="emergency-sub opacity-0 text-base font-semibold mt-6" style={{ color: 'rgba(26,26,26,0.7)' }}>
          لا تنتظر لين تسوء المشكلة — كل دقيقة مهمة في تسليك المجاري
        </p>
      </div>
    </section>
  );
}
