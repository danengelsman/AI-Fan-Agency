import { ArrowRight, Check, Sparkles, ShieldCheck } from 'lucide-react';
import BrandMark from './BrandMark';
import BrandWordmark from './BrandWordmark';

const asset = (name: string) => `${import.meta.env.BASE_URL}showcase/${name}`;

/** Marketing composition: sample data, never a functioning editor. */
export function PersonaScene() {
  return <div className="persona-scene" role="img" aria-label="Illustrative Persona Builder: Nova, a fictional AI creator with a lifestyle niche, warm confident personality, and planned Instagram and Fanvue channels. Persona draft ready to review.">
    <div className="ps-toolbar"><span className="ps-brand"><BrandMark size={20} /> <BrandWordmark /> <span>/</span> Studio</span><span className="ps-preview-label">PRODUCT CONCEPT</span></div>
    <div className="ps-workspace">
      <div className="ps-editor">
        <div className="ps-eyebrow">PERSONA BUILDER <span>01 / IDENTITY</span></div>
        <h3>A character.<br />With character.</h3>
        <p className="ps-subtitle">Give your idea a face, a voice, a point of view.</p>
        <div className="ps-field ps-identity"><span>CREATOR NAME</span><div>Nova<span className="ps-caret" /></div></div>
        <div className="ps-field ps-niche"><span>CONTENT NICHE</span><div>Lifestyle &amp; everyday inspiration <span className="ps-chevron">⌄</span></div></div>
        <div className="ps-field ps-personality"><span>PERSONALITY</span><div className="ps-tags"><b>Warm</b><b>Confident</b><b>Curious</b></div></div>
        <div className="ps-field ps-platforms"><span>PLANNED CHANNELS</span><div className="ps-channels"><span><Check size={12} /> Instagram</span><span><Check size={12} /> Fanvue</span></div></div>
        <div className="ps-build" aria-hidden="true"><Sparkles size={16} /> Shape your persona <ArrowRight size={16} /></div>
        <div className="ps-note"><ShieldCheck size={14} /> AI identity. Clearly disclosed.</div>
      </div>
      <div className="ps-portrait-panel">
        <div className="ps-portrait"><img src={asset('nova-portrait.webp')} alt="" loading="lazy" width="800" height="1000" /><div className="ps-scan" /><div className="ps-image-label"><span className="ps-dot" /> FICTIONAL AI CREATOR</div><div className="ps-portrait-caption"><span>YOUR IDEA, TAKING SHAPE</span><strong>Meet Nova.</strong><p>Lifestyle · Warm · Confident</p></div></div>
        <div className="ps-ready"><span className="ps-ready-icon"><Check size={18} /></span><div><strong>Persona draft ready</strong><span>Made to be reviewed. Made to be yours.</span></div><span className="ps-ready-number">01</span></div>
      </div>
    </div>
    <div className="ps-bottom"><span><span className="ps-dot" /> Identity, before everything.</span><span>ILLUSTRATIVE PREVIEW · SAMPLE DATA</span></div>
  </div>;
}

