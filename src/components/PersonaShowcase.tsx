import PersonaReveal from './PersonaReveal';
import { PersonaScene } from './PersonaScene';
import { ArrowRight } from 'lucide-react';
import './persona-showcase.css';
import './persona-reveal.css';

export default function PersonaShowcase() {
  return <section id="persona-builder" className="persona-showcase" aria-labelledby="persona-heading">
    <PersonaReveal />
    <div id="persona-details" className="ps-section-inner">
      <div className="ps-mobile-product ps-static"><p>THE COMPLETE PERSONA BUILDER CONCEPT</p><PersonaScene /></div>
      <div className="ps-caption"><p><strong>Illustrative product preview.</strong> An idealized view of intended functionality. Nova is fictional; this is not a recording of a shipped editor.</p></div>
      <div className="ps-story"><div><span>01</span><h3>Define the identity.</h3><p>A name and a niche give your creator a clear starting point.</p></div><div><span>02</span><h3>Find their personality.</h3><p>Choose the qualities that shape how your character comes across.</p></div><div><span>03</span><h3>See it come together.</h3><p>Review the persona concept before moving on to content.</p></div></div>
      <a className="ps-link" href="#how-it-works">Explore the intended workflow <ArrowRight size={17} /></a>
    </div>
  </section>;
}
