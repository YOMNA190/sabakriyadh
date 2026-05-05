import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '1',
    title: 'اتصل أو راسلنا',
    description: 'اتصل على 0556900804 أو راسلنا على الواتساب — نجاوبك فوراً',
  },
  {
    number: '2',
    title: 'نوصلك خلال 30 دقيقة',
    description: 'نرسل لك أقرب عربة تسليك بالكمبروسر مع فني متخصص — تتبع الوصول مباشرة',
  },
  {
    number: '3',
    title: 'إنجاز واحترافية',
    description: 'نسليك المجاري من جذورها باستخدام الكمبروسر، ونضمن تدفق المياه بشكل طبيعي',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !stepsRef.current) return;

    const ctx = gsap.context(() => {
      // Steps stagger animation
      gsap.fromTo(
        stepsRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Connecting line animation
      gsap.fromTo(
        '.connecting-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 80%',
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
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface-light)' }}
    >
      <div className="content-max-width mx-auto">
        <SectionHeader
          eyebrow="طريقة العمل"
          title="ثلاث خطوات بسيطة"
          description="عملية سهلة وسريعة من الاتصال حتى إنجاز المهمة"
          light
        />

        <div ref={stepsRef} className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div
            className="connecting-line hidden lg:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 origin-right"
            style={{
              background: 'repeating-linear-gradient(to left, var(--color-border-light) 0, var(--color-border-light) 8px, transparent 8px, transparent 16px)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Number Circle */}
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{
                    backgroundColor: 'var(--color-electric-yellow)',
                    boxShadow: '0 4px 16px rgba(245,197,24,0.3)',
                  }}
                >
                  <span className="text-2xl md:text-3xl font-black" style={{ color: 'var(--color-obsidian)' }}>
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-dark)' }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed max-w-sm mx-auto" style={{ color: 'var(--color-text-secondary-dark)' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
