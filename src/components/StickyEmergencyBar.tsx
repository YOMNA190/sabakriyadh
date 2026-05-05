import { Phone } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function StickyEmergencyBar() {
  const handleCall = () => {
    window.location.href = 'tel:+966556900804';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('مرحباً أبو رياض، أحتاج كمبروسر الآن في حي [أدخل اسم الحي].. هل متاحين؟');
    window.open(`https://wa.me/966556900804?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] border-t-2"
      style={{
        background: 'linear-gradient(to bottom, #1A1A1A, rgba(26,26,26,0.98))',
        borderColor: 'var(--color-electric-yellow)',
        boxShadow: '0 -8px 32px rgba(0,0,0,0.3), 0 0 24px rgba(245,197,24,0.1)',
      }}
    >
      <div className="content-max-width mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">
        <div className="flex-shrink-0">
          <p className="text-xs font-bold" style={{ color: 'var(--color-electric-yellow)' }}>
            طوارئ الصرف الصحي — متوفر 24/7
          </p>
          <p className="text-lg md:text-xl font-black text-white">0556900804</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCall}
            className="pulse-animation flex items-center gap-2 px-5 py-3 md:px-7 md:py-3.5 rounded-full font-extrabold text-white text-sm md:text-base transition-transform active:scale-95"
            style={{ backgroundColor: 'var(--color-emergency-red)' }}
          >
            <Phone size={18} />
            <span className="hidden sm:inline">اتصل</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-5 py-3 md:px-7 md:py-3.5 rounded-full font-extrabold text-white text-sm md:text-base transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'var(--color-whatsapp-green)' }}
          >
            <WhatsAppIcon />
            <span className="hidden sm:inline">واتساب</span>
          </button>
        </div>
      </div>
    </div>
  );
}
