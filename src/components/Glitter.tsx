import { useEffect, useRef } from 'react';

export default function Glitter() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const symbols = ['✦','★','✸','✿','◆','❋'];
    const colors  = [
      'rgba(233,30,140,0.45)',
      'rgba(255,215,0,0.55)',
      'rgba(255,133,200,0.5)',
      'rgba(255,255,255,0.4)',
    ];
    const spawn = () => {
      if (!ref.current) return;
      const el = document.createElement('div');
      el.className = 'gp';
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.cssText = `
        left:${Math.random()*100}%;
        top:${Math.random()*100}%;
        color:${colors[Math.floor(Math.random()*colors.length)]};
        font-size:${8+Math.random()*14}px;
        animation-duration:${3+Math.random()*5}s;
        animation-delay:${Math.random()*1.5}s;
        pointer-events:none;
        position:absolute;
      `;
      ref.current.appendChild(el);
      setTimeout(() => el.remove(), 9000);
    };
    const interval = window.matchMedia('(max-width: 640px)').matches ? 900 : 380;
    const id = setInterval(spawn, interval);
    return () => clearInterval(id);
  }, []);

  return <div ref={ref} className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" />;
}
