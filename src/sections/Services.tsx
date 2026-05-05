import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Droplets, Wrench, Shield, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Droplets,
    title: 'تسليك مجاري بالكمبروسر',
    description:
      'تسليك احترافي لأصعب الانسدادات في المجاري والأنابيب باستخدام ضغط هوائي وماء عالي القوة — حلول فورية وآمنة.',
    image: '/images/service-jetting.jpg',
  },
  {
    icon: Truck,
    title: 'تنظيف البيارات بالكمبروسر',
    description:
      'تنظيف شامل للبيارات باستخدام تقنية الكمبروسر العملاقة، إزالة الرواسب والمواد العالقة بكفاءة عالية جداً.',
    image: '/images/service-pumping.jpg',
  },
  {
    icon: Wrench,
    title: 'تسليك مصائد الدهون بالكمبروسر',
    description:
      'تسليك متخصص لمصائد الدهون في المطاعم والمطابخ التجارية باستخدام تقنية الكمبروسر لضمان النظافة التامة.',
    image: '/images/service-grease.jpg',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.info-bar',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.info-bar',
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
      id="services"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface-dark)' }}
    >
      <div className="content-max-width mx-auto">
        <SectionHeader
          eyebrow="خدماتنا المتخصصة"
          title="أقوى خدمات التسليك بالكمبروسر في الرياض"
          description="نقدم خدمات تسليك متكاملة باستخدام أحدث كمبروسرات الضغط العالي وفريق فني متخصص في التسليك"
        />

        {/* Service Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--color-structural)',
                border: '1px solid var(--color-industrial)',
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-structural)] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: 'rgba(245,197,24,0.1)',
                    border: '1px solid var(--color-electric-yellow)',
                  }}
                >
                  <service.icon size={32} style={{ color: 'var(--color-electric-yellow)' }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-foreground-muted)' }}>
                  {service.description}
                </p>
              </div>

              {/* Hover border effect */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ border: '2px solid var(--color-electric-yellow)' }}
              />
            </div>
          ))}
        </div>

        {/* Info Bar */}
        <div
          className="info-bar opacity-0 mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-6 rounded-2xl"
          style={{
            backgroundColor: 'var(--color-structural)',
            border: '1px solid var(--color-industrial)',
          }}
        >
          <div className="flex items-center gap-3">
            <Shield size={24} style={{ color: 'var(--color-electric-yellow)' }} />
            <span className="text-base font-bold text-white">ضمان رضا 100% على جميع خدماتنا</span>
          </div>
          <div className="hidden md:block w-px h-6" style={{ backgroundColor: 'var(--color-industrial)' }} />
          <div className="flex items-center gap-3">
            <Clock size={24} style={{ color: 'var(--color-electric-yellow)' }} />
            <span className="text-base font-bold text-white">استجابة فورية — لا نتأخر عن موعدنا</span>
          </div>
        </div>
      </div>
    </section>
  );
}
