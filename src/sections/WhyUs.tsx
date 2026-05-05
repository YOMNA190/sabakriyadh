import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Truck, Shield, CheckCircle, Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Clock,
    title: 'وصول خلال 30 دقيقة',
    description: 'أسرع خدمة تسليك بالكمبروسر في الرياض، نوصلك بوقت قياسي مهما كان الحي.',
  },
  {
    icon: Truck,
    title: 'أحدث المعدات',
    description: 'نستخدم أحدث جيل من كمبروسرات التسليك العملاقة ومعدات الضغط العالي والماء العالمية.',
  },
  {
    icon: Shield,
    title: 'فريق متخصص',
    description: 'فنيون مدربون على أعلى مستوى مع خبرة سنوات في مجال الصرف الصحي.',
  },
  {
    icon: Clock,
    title: 'خدمة 24/7',
    description: 'متواجدون على مدار الساعة طوال أيام الأسبوع — حتى في الإجازات والمناسبات.',
  },
  {
    icon: CheckCircle,
    title: 'أسعار شفافة',
    description: 'لا hidden fees — نعطيك السعر قبل ما نبدأ والفاتورة واضحة بدون مفاجآت.',
  },
  {
    icon: Star,
    title: 'ضمان الجودة',
    description: 'رضاك هو هدفنا — إذا ما كنت راضي، نرجع لين ما تحل المشكلة.',
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current!.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
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
          eyebrow="لماذا نحن"
          title="لماذا كمبروسر الرياض هو اختيارك الأول؟"
          description="نمتلك المزايا التي تجعلنا الخيار الأمثل لكل أهالي الرياض"
          light
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border-light)',
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(245,197,24,0.15)' }}
              >
                <feature.icon size={24} style={{ color: 'var(--color-electric-yellow)' }} />
              </div>

              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-dark)' }}>
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary-dark)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
