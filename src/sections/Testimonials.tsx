import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    stars: 5,
    quote:
      'خدمة سريعة جداً، وصلوا لحي الياسمين خلال 25 دقيقة! تسليك المجاري بالكمبروسر كان احترافي والسعر مناسب جداً مقابل الجودة.',
    author: 'أبو ناصر العتيبي',
    district: 'حي الياسمين، شمال الرياض',
  },
  {
    stars: 5,
    quote:
      'أفضل كمبروسر جربته في شمال الرياض. فريق محترف ومعدات نظيفة وحديثة. أنصح الجميع في حي الملقا يجربونهم.',
    author: 'عبدالله بن محمد',
    district: 'حي الملقا، شمال الرياض',
  },
  {
    stars: 5,
    quote:
      'مطعمي كان محتاج تسليك مصائد دهون بشكل مستعجل، جوا بسرعة البرق وسلكوا المشكلة من جذورها. خدمة ممتازة للمطاعم.',
    author: 'سلطان المطيري',
    district: 'حي الصحافة، شمال الرياض',
  },
  {
    stars: 5,
    quote:
      'خدمة 24 ساعة فعلاً! اتصلت بالليل الساعة 2 الفجر و جوا فوراً. شكراً كمبروسر الرياض على الاحترافية والسرعة.',
    author: 'أبو ريان الشمري',
    district: 'حي الربيع، شرق الرياض',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [ratingValue, setRatingValue] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      // Cards animation
      gsap.fromTo(
        cardsRef.current!.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );

      // Rating counter
      ScrollTrigger.create({
        trigger: '.rating-summary',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: 4.9,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: () => {
              setRatingValue(parseFloat(obj.val.toFixed(1)));
            },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface-light)' }}
    >
      <div className="content-max-width mx-auto">
        <SectionHeader
          eyebrow="آراء عملائنا"
          title="أكثر من 10,000 عميل راضٍ في الرياض"
          description="تعرف على تجارب عملائنا في مختلف أحياء الرياض"
          light
        />

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-border-light)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="var(--color-electric-yellow)"
                    style={{ color: 'var(--color-electric-yellow)' }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-dark)' }}>
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-full h-px mb-4" style={{ backgroundColor: 'var(--color-border-light)' }} />

              {/* Author */}
              <p className="text-sm font-bold" style={{ color: 'var(--color-text-dark)' }}>
                {testimonial.author}
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-secondary-dark)' }}>
                {testimonial.district}
              </p>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="rating-summary text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span
              className="text-5xl md:text-6xl font-black"
              style={{ color: 'var(--color-electric-yellow)' }}
            >
              {ratingValue.toFixed(1)}
            </span>
          </div>
          <div className="flex justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={24}
                fill="var(--color-electric-yellow)"
                style={{ color: 'var(--color-electric-yellow)' }}
              />
            ))}
          </div>
          <p className="text-base" style={{ color: 'var(--color-text-secondary-dark)' }}>
            متوسط التقييم من 500+ عميل
          </p>
        </div>
      </div>
    </section>
  );
}
