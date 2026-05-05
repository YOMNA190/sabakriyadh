import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Clock, Star, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current || !contentRef.current) return;

    // Parallax on background
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Entrance timeline
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      bgRef.current,
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        '.hero-headline',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        '.hero-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        '.hero-cta',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.hero-stats',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo(
        '.hero-scroll',
        { opacity: 0 },
        { opacity: 0.6, duration: 0.4, ease: 'power3.out' },
        '-=0.1'
      );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+966556900804';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً أبو رياض، أحتاج تسليك كمبروسر الآن في حي [أدخل اسم الحي].. هل متاحين؟');
    window.open(`https://wa.me/966556900804?text=${message}`, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{ minHeight: '600px' }}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0,
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.6) 100%)',
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Eyebrow Badge */}
        <div className="hero-eyebrow opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{
            backgroundColor: 'rgba(245,197,24,0.15)',
            border: '1px solid var(--color-electric-yellow)',
          }}
        >
          <Clock size={14} style={{ color: 'var(--color-electric-yellow)' }} />
          <span className="text-sm font-semibold" style={{ color: 'var(--color-electric-yellow)' }}>
            خدمة 24 ساعة على مدار الأسبوع
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-headline opacity-0 text-hero-display font-black text-white mb-4"
          style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
        >
          أقوى خدمات التسليك بالكمبروسر في الرياض
        </h1>

        {/* Sub-headline */}
        <p className="hero-sub opacity-0 text-hero-sub font-semibold max-w-[600px] mx-auto mb-8"
          style={{ color: 'var(--color-foreground-muted)' }}
        >
          نصلك خلال 30 دقيقة بأحدث آلياتنا المتطورة — خدمة طوارئ 24/7
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta opacity-0 flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={handleCall}
            className="pulse-animation flex items-center gap-2 px-8 py-4 rounded-full text-lg font-extrabold text-white transition-transform active:scale-95"
            style={{ backgroundColor: 'var(--color-emergency-red)' }}
          >
            <Phone size={20} />
            اتصل الآن: 0556900804
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-8 py-4 rounded-full text-lg font-extrabold text-white transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'var(--color-whatsapp-green)' }}
          >
            <WhatsAppIcon />
            واتساب مباشر
          </button>
        </div>

        {/* Trust Stats */}
        <div className="hero-stats opacity-0 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            { value: '+10,000', label: 'عملية ناجحة' },
            { value: '30', label: 'دقيقة وصول' },
            { value: '24/7', label: 'خدمة متواصلة' },
            { value: '5.0', label: 'تقييم العملاء', icon: true },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center gap-1 justify-center">
                <span className="text-xl md:text-2xl font-black" style={{ color: 'var(--color-electric-yellow)' }}>
                  {stat.value}
                </span>
                {stat.icon && <Star size={18} fill="var(--color-electric-yellow)" style={{ color: 'var(--color-electric-yellow)' }} />}
              </div>
              <span className="text-xs font-medium" style={{ color: 'var(--color-foreground-dim)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 bounce-gentle">
        <ChevronDown size={24} style={{ color: 'var(--color-foreground-dim)' }} />
      </div>
    </section>
  );
}
