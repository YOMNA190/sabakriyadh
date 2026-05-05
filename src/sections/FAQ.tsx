import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'كم تكلفة تسليك المجاري بالكمبروسر في الرياض؟',
    answer:
      'السعر يعتمد على حجم البيارة والموقع، لكننا نضمن أفضل سعر في الرياض مع أعلى جودة. اتصل على 0556900804 و احصل على عرض سعر فوري مجاني.',
  },
  {
    question: 'كم مدة الوصول للموقع؟',
    answer:
      'نوصلك خلال 30 دقيقة في معظم أحياء الرياض. الأحياء البعيدة قد تأخذ 45 دقيقة كحد أقصى. نتابع معك وقت الوصول لحظة بلحظة.',
  },
  {
    question: 'هل الخدمة متوفرة 24 ساعة؟',
    answer:
      'نعم! نعمل 24 ساعة في اليوم، 7 أيام في الأسبوع، 365 يوم في السنة — حتى في الإجازات الرسمية وعطلات نهاية الأسبوع.',
  },
  {
    question: 'ما هي الأحياء التي تغطونها؟',
    answer:
      'نغطي جميع أحياء الرياض: شمال، جنوب، شرق، غرب، ووسط. من حي الياسمين شمالاً إلى حي الشفا جنوباً وكل الأحياء بينهم.',
  },
  {
    question: 'هل لديكم ضمان على الخدمة؟',
    answer:
      'نعم، نقدم ضمان رضا 100%. إذا ما كنت راضي عن الخدمة أو رجعت المشكلة خلال 48 ساعة، نرجع نصلحها مجاناً.',
  },
  {
    question: 'كيف أحجز موعد؟',
    answer:
      'سهل جداً! اتصل على 0556900804 أو راسلنا على الواتساب. نحدد الموعد اللي يناسبك ونرسل لك الفريق في الوقت المحدد.',
  },
  {
    question: 'هل تقبلون الدفع الإلكتروني؟',
    answer:
      'نعم، نقبل الدفع نقداً، بالبطاقة، وعبر التحويل البنكي. بنقدم قريباً خيار الدفع الإلكتروني عبر Apple Pay و STC Pay.',
  },
  {
    question: 'ما هو حجم كمبروسر الشفط؟',
    answer:
      'نستخدم كمبروسرات شفط بأحجام متنوعة عملاقة تصل إلى 12,000 لتر حسب حاجة الموقع. كل عرباتنا مجهزة بأحدث تقنيات الشفط والضغط.',
  },
  {
    question: 'هل تقدمون صيانة دورية؟',
    answer:
      'نعم! عندنا باقات صيانة دورية شهرية وربع سنوية للبيارات ومصائد الدهون. تواصل معنا للتفاصيل والأسعار الخاصة.',
  },
  {
    question: 'كيف أتواصل عبر الواتساب؟',
    answer:
      'اضغط على زر الواتساب اللي في الشاشة أو ارسل رسالة على 0556900804. نجاوبك فوراً ونحدد لك الموعد والتفاصيل.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="border-b"
      style={{ borderColor: 'var(--color-border-dark)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-right cursor-pointer group"
      >
        <span
          className="text-lg font-semibold transition-colors duration-200"
          style={{ color: isOpen ? 'var(--color-electric-yellow)' : '#FFFFFF' }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          className="flex-shrink-0 ml-3 transition-transform duration-300"
          style={{
            color: 'var(--color-electric-yellow)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <div
        ref={answerRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '300px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pb-5 text-base leading-relaxed" style={{ color: 'var(--color-foreground-muted)' }}>
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-container',
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
      id="faq"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-surface-dark)' }}
    >
      <div className="content-max-width mx-auto">
        <SectionHeader
          eyebrow="الأسئلة الشائعة"
          title="كل اللي تبي تعرفه عن خدماتنا"
          description="إذا كان سؤالك مو موجود هنا، تواصل معنا مباشرة"
        />

        <div className="faq-container max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item opacity-0">
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
