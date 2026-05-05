import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const neighborhoods = [
  // North
  'الياسمين', 'الملقا', 'النرجس', 'الصحافة', 'النزهة', 'الورود', 'العليا', 'المحمدية',
  // East
  'الربيع', 'الروضة', 'قرطبة', 'اليرموك', 'السليمانية',
  // West
  'المنار', 'المروج', 'الغدير', 'الفيصلية', 'الخالدية',
  // South
  'العزيزية', 'الرياض الجديدة', 'المناخ', 'المعذر', 'الشفا', 'الربوة',
];

export default function Coverage() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !badgesRef.current) return;

    const ctx = gsap.context(() => {
      // Map visual fade in
      gsap.fromTo(
        '.coverage-visual',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.coverage-visual',
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Badges cascade
      gsap.fromTo(
        badgesRef.current!.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.03,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: badgesRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Statement fade in
      gsap.fromTo(
        '.coverage-statement',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.coverage-statement',
            start: 'top 90%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="coverage"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface-dark)' }}
    >
      <div className="content-max-width mx-auto">
        <SectionHeader
          eyebrow="مناطق التغطية"
          title="نغطي جميع أحياء الرياض بخدمات التسليك بالكمبروسر"
          description="أينما كنت في الرياض، نوصلك بأسرع وقت. نخدم جميع الأحياء الشمالية، الشرقية، الغربية، والجنوبية."
        />

        {/* Coverage Visual */}
        <div className="coverage-visual opacity-0 flex items-center justify-center my-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Center pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse"
                style={{
                  backgroundColor: 'var(--color-electric-yellow)',
                  boxShadow: '0 0 40px rgba(245,197,24,0.4)',
                }}
              >
                <MapPin size={32} style={{ color: 'var(--color-obsidian)' }} />
              </div>
            </div>

            {/* Orbiting pins */}
            {[
              { top: '10%', left: '50%', delay: '0s' },
              { top: '25%', right: '10%', delay: '0.5s' },
              { top: '50%', right: '5%', delay: '1s' },
              { bottom: '25%', right: '10%', delay: '1.5s' },
              { bottom: '10%', left: '50%', delay: '2s' },
              { bottom: '25%', left: '10%', delay: '2.5s' },
              { top: '50%', left: '5%', delay: '3s' },
              { top: '25%', left: '10%', delay: '3.5s' },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  ...pos,
                  backgroundColor: 'rgba(245,197,24,0.2)',
                  border: '2px solid var(--color-electric-yellow)',
                  animation: `pulse-scale 2s ease-in-out ${pos.delay} infinite`,
                }}
              >
                <MapPin size={14} style={{ color: 'var(--color-electric-yellow)' }} />
              </div>
            ))}

            {/* Connection rings */}
            <div
              className="absolute inset-8 rounded-full border opacity-30"
              style={{ borderColor: 'var(--color-electric-yellow)', borderStyle: 'dashed' }}
            />
            <div
              className="absolute inset-16 rounded-full border opacity-20"
              style={{ borderColor: 'var(--color-electric-yellow)', borderStyle: 'dashed' }}
            />
            <div
              className="absolute inset-0 rounded-full border opacity-10"
              style={{ borderColor: 'var(--color-electric-yellow)', borderStyle: 'dashed' }}
            />
          </div>
        </div>

        {/* Neighborhood Badges */}
        <div
          ref={badgesRef}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {neighborhoods.map((neighborhood) => (
            <button
              key={neighborhood}
              onClick={() => {
                window.location.href = 'tel:+966556900804';
              }}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: 'rgba(245,197,24,0.1)',
                border: '1px solid var(--color-electric-yellow)',
                color: 'var(--color-electric-yellow)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-electric-yellow)';
                e.currentTarget.style.color = 'var(--color-obsidian)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(245,197,24,0.1)';
                e.currentTarget.style.color = 'var(--color-electric-yellow)';
              }}
            >
              {neighborhood}
            </button>
          ))}
        </div>

        {/* Coverage Statement */}
        <p
          className="coverage-statement opacity-0 text-center text-base font-semibold mt-10 italic"
          style={{ color: 'var(--color-foreground-muted)' }}
        >
          حتى لو حيك مو مذكور فوق، اتصل بينا — نوصل لكل زاوية في الرياض والضواحي
        </p>
      </div>
    </section>
  );
}
