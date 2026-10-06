import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, Check, Sparkles } from 'lucide-react';
import { PersonaScene } from './PersonaScene';

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ramp = (p: number, start: number, end: number) => {
  const t = clamp((p - start) / (end - start));
  return t * t * (3 - 2 * t);
};

export default function PersonaReveal() {
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const studio = useRef<HTMLDivElement>(null);
  const [still, setStill] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(media.matches);
    change(); media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);

  useEffect(() => {
    const el = track.current;
    const view = stage.current;
    if (!el || !view) return;
    let frame = 0;
    let active = true;
    const paint = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const p = still || reduced ? 1 : clamp((48 - rect.top) / Math.max(1, rect.height - view.clientHeight));
      const values: Record<string, number> = {
        '--pr-progress': p,
        '--pr-intro': 1 - ramp(p, .13, .23),
        '--pr-choices': ramp(p, .16, .25) * (1 - ramp(p, .38, .46)),
        '--pr-choice-one': ramp(p, .16, .23),
        '--pr-choice-two': ramp(p, .22, .29),
        '--pr-choice-three': ramp(p, .28, .35),
        '--pr-meet': ramp(p, .4, .48) * (1 - ramp(p, .62, .7)),
        '--pr-light': .13 + .87 * ramp(p, .25, .48),
        '--pr-portrait': 1 - ramp(p, .64, .77),
        '--pr-portrait-scale': 1.1 - .1 * ramp(p, .25, .48) - .24 * ramp(p, .64, .77),
        '--pr-studio': ramp(p, .68, .8),
        '--pr-pullback': .92 + .08 * ramp(p, .68, .82),
        '--pr-final': ramp(p, .76, .84),
      };
      for (const [key, value] of Object.entries(values)) view.style.setProperty(key, String(value));
      if (studio.current) {
        const reserve = view.clientHeight <= 602 ? 250 : 300;
        const scale = Math.min(1, (view.clientWidth - 80) / studio.current.offsetWidth, (view.clientHeight - reserve) / studio.current.offsetHeight);
        view.style.setProperty('--pr-fit', String(Math.max(.15, scale)));
      }
    };
    const schedule = () => { if (active && !frame) frame = requestAnimationFrame(paint); };
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; if (active) schedule(); });
    observer.observe(el);
    const resize = new ResizeObserver(schedule);
    resize.observe(view);
    if (studio.current) resize.observe(studio.current);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    paint();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); resize.disconnect();
      window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule);
    };
  }, [still, reduced]);

  return <div ref={track} className={`persona-reveal ${still || reduced ? 'pr-still' : ''}`}>
    <div ref={stage} className="pr-stage">
      <div className="pr-topline"><span>01 / PERSONA BUILDER</span><button type="button" onClick={() => { setStill(!still); requestAnimationFrame(() => track.current?.scrollIntoView({ block: 'start' })); }} disabled={reduced}>{reduced ? 'Reduced motion enabled' : still ? 'Enable scroll story' : 'Show complete preview'}</button></div>
      <div className="pr-portrait" aria-hidden="true"><img src={`${import.meta.env.BASE_URL}showcase/nova-portrait.webp`} alt="" width="800" height="1000" /><div className="pr-portrait-shade" /></div>
      <div className="pr-beat pr-intro" aria-hidden="true"><p className="pr-eyebrow">THE CREATOR STARTS WITH YOU</p><h2>Every creator<br />starts with<br /><span>an idea.</span></h2><p className="pr-support">You don’t need to have it all figured out.</p><span className="pr-scroll-hint"><ArrowDown size={16} /> Scroll to shape the story</span></div>
      <div className="pr-beat pr-choices" aria-hidden="true"><p className="pr-eyebrow">A FEW CHOICES. A CLEARER IDENTITY.</p><h2>Give your idea<br /><span>some character.</span></h2><div className="pr-choice" style={{opacity:'var(--pr-choice-one)'}}><span>THE NICHE</span><strong>Lifestyle</strong><Check size={18} /></div><div className="pr-choice" style={{opacity:'var(--pr-choice-two)'}}><span>THE PERSONALITY</span><strong>Warm</strong><Check size={18} /></div><div className="pr-choice" style={{opacity:'var(--pr-choice-three)'}}><span>THE PRESENCE</span><strong>Confident</strong><Check size={18} /></div></div>
      <div className="pr-beat pr-meet" aria-hidden="true"><p className="pr-eyebrow">YOUR IDEA, TAKING SHAPE</p><h2>Meet<br /><span>Nova.</span></h2><p className="pr-support">A face. A personality.<br />A point of view.</p><span className="pr-ai-badge"><Sparkles size={13} /> FICTIONAL AI CREATOR</span></div>
      <div className="pr-final-heading" aria-hidden="true"><p className="pr-eyebrow">THE PERSONA BUILDER CONCEPT</p><h2>A persona draft.<br /><span>Ready for your direction.</span></h2></div>
      <div className="pr-studio ps-static" aria-hidden="true"><div ref={studio} className="pr-studio-inner"><PersonaScene /></div></div>
      <div className="pr-mobile-final" aria-hidden="true"><span>PERSONA DRAFT / 01</span><strong>Nova</strong><p>Lifestyle · Warm · Confident</p><div><Check size={16} /> Ready to review</div></div>
      <div className="pr-footer"><p>Illustrative product concept <span>·</span> Fictional AI creator</p><div className="pr-progress" aria-hidden="true"><span /></div><a href="#persona-details">Explore the details <ArrowRight size={13} /></a></div>
      <div className="pr-sr-only"><h2 id="persona-heading">From an idea to a persona draft.</h2><p>The illustrative story defines a lifestyle niche and a warm, confident personality, reveals Nova, a fictional AI creator, and presents the intended Persona Builder interface. This is not a recording of a shipped editor.</p></div>
    </div>
  </div>;
}
