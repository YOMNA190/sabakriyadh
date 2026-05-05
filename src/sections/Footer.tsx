import { Phone } from 'lucide-react';

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const handleCall = () => {
    window.location.href = 'tel:+966556900804';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً أبو رياض، أحتاج كمبروسر الآن في حي [أدخل اسم الحي].. هل متاحين؟');
    window.open(`https://wa.me/966556900804?text=${message}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="pt-16 pb-6 px-4"
      style={{
        backgroundColor: 'var(--color-obsidian)',
        borderTop: '1px solid var(--color-industrial)',
      }}
    >
      <div className="content-max-width mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div>
            <div className="text-xl font-black mb-3">
              <span style={{ color: '#FFFFFF' }}>كمبروسر</span>{' '}
              <span style={{ color: 'var(--color-electric-yellow)' }}>الرياض</span>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--color-foreground-dim)' }}>
              أقوى خدمات التسليك بالكمبروسر في الرياض
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleWhatsApp}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--color-whatsapp-green)', color: '#FFFFFF' }}
              >
                <WhatsAppIcon size={18} />
              </button>
              <button
                onClick={handleCall}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--color-emergency-red)', color: '#FFFFFF' }}
              >
                <Phone size={18} />
              </button>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4
              className="text-sm font-bold mb-4"
              style={{ color: 'var(--color-electric-yellow)' }}
            >
              خدماتنا
            </h4>
            <ul className="space-y-2">
              {['تسليك مجاري بالكمبروسر', 'تنظيف البيارات', 'تسليك مصائد الدهون', 'صيانة دورية'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'var(--color-foreground-muted)' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column */}
          <div>
            <h4
              className="text-sm font-bold mb-4"
              style={{ color: 'var(--color-electric-yellow)' }}
            >
              مناطقنا
            </h4>
            <ul className="space-y-2">
              {['شمال الرياض', 'شرق الرياض', 'غرب الرياض', 'جنوب الرياض'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection('#coverage')}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'var(--color-foreground-muted)' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="text-sm font-bold mb-4"
              style={{ color: 'var(--color-electric-yellow)' }}
            >
              تواصل معنا
            </h4>
            <div className="space-y-3">
              <button
                onClick={handleCall}
                className="flex items-center gap-2 text-base font-bold text-white transition-colors hover:text-[var(--color-electric-yellow)]"
              >
                <Phone size={18} />
                0556900804
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-base font-bold transition-colors hover:opacity-80"
                style={{ color: 'var(--color-whatsapp-green)' }}
              >
                <WhatsAppIcon size={18} />
                واتساب مباشر
              </button>
              <p className="text-sm" style={{ color: 'var(--color-foreground-dim)' }}>
                متواجدون 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t gap-4"
          style={{ borderColor: 'var(--color-industrial)' }}
        >
          <p className="text-sm" style={{ color: 'var(--color-foreground-dim)' }}>
            © 2026 كمبروسر الرياض. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm" style={{ color: 'var(--color-foreground-dim)' }}>
            تصميم وتطوير
          </p>
        </div>
      </div>
    </footer>
  );
}
