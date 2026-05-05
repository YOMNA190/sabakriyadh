import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, light = false }: SectionHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      tl.fromTo(
        '.eyebrow-text',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      )
        .fromTo(
          '.title-text',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo(
          '.desc-text',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="text-center max-w-[700px] mx-auto mb-12">
      <span
        className="eyebrow-text inline-block text-sm font-bold tracking-wide mb-4 opacity-0"
        style={{ color: 'var(--color-electric-yellow)', letterSpacing: '0.05em' }}
      >
        {eyebrow}
      </span>
      <h2
        className="title-text text-section-title font-extrabold mb-3 opacity-0"
        style={{ color: light ? 'var(--color-text-dark)' : '#FFFFFF' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="desc-text text-section-subtitle opacity-0"
          style={{ color: light ? 'var(--color-text-secondary-dark)' : 'var(--color-foreground-muted)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
