import { useState, useEffect } from 'react';
import PersonaShowcase from './components/PersonaShowcase';
import BrandMark from './components/BrandMark';
import BrandWordmark from './components/BrandWordmark';
import {
  Sparkles, Shield, TrendingUp, Heart, MessageCircle, DollarSign,
  Calendar, Check, ArrowRight, Star, Zap, Globe, Lock, ChevronDown,
} from 'lucide-react';

// ─── Helpers ────────────────────────────────────────────────────────────────
const cls = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');

// Apple-style pill buttons, sized to their text
const btnPrimary =
  "inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[15px] font-medium px-6 py-2.5 transition-colors";
const btnSecondary =
  "inline-flex items-center justify-center gap-1.5 rounded-full border border-white/25 text-white text-[15px] font-medium px-6 py-2.5 hover:bg-white/10 transition-colors";

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={cls('fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent')}>
      <div className="max-w-5xl mx-auto px-5 h-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <BrandMark size={28} />
          <BrandWordmark />
        </a>
        <div className="hidden md:flex items-center gap-7 text-xs text-[#a0a0b0]">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <a href="#pricing" className="rounded-full bg-white text-black text-xs font-medium px-3.5 py-1.5 hover:bg-white/90 transition-colors">Get Started</a>
      </div>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-[#ff2d7e]/15 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-[#a855f7]/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-[#3b82f6]/10 blur-[80px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-16">
        <div className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded-full px-3.5 py-1.5 text-xs text-[#a0a0b0] mb-6">
          <Shield className="w-3.5 h-3.5 text-[#ff2d7e]" />
          The AI that doesn't lie to you
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] text-white">
          Build AI influencers.
          <br />
          <span className="bg-gradient-to-r from-[#ff2d7e] via-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
            Earn real money.
          </span>
          <br />
          Never show your face.
        </h1>
        <p className="text-[15px] sm:text-lg text-[#a0a0b0] mt-5 max-w-md mx-auto leading-relaxed">
          Done-for-you AI persona creation, content automation, and fan engagement — with disclosed AI that keeps you on the right side of the platforms.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a href="#pricing" className={btnPrimary}>Start Building <ArrowRight className="w-4 h-4" /></a>
          <a href="#how-it-works" className={btnSecondary}>See How It Works</a>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-14 max-w-md mx-auto">
          {[
            { label: 'Monthly avg.', value: '$4,200' },
            { label: 'Auto-posted', value: '24/7' },
            { label: 'AI disclosure', value: '100%' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl sm:text-2xl font-semibold text-white">{s.value}</div>
              <div className="text-[11px] text-[#a0a0b0] mt-1 whitespace-nowrap">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ───────────────────────────────────────────────────────────────
const features = [
  { icon: Sparkles, title: 'AI Persona Builder', desc: 'Create hyper-realistic AI influencers from scratch or use a marketplace archetype. Custom look, personality, voice, and content style.', color: '#ff2d7e' },
  { icon: Calendar, title: 'Content Automation', desc: '7-day auto-scheduled posting across Fanvue, Instagram, TikTok, X, and Reddit. Set it once, let it run.', color: '#a855f7' },
  { icon: MessageCircle, title: 'Disclosed AI Chat', desc: 'Fan engagement with visible AI labels on every message. Better retention, zero platform bans, full compliance.', color: '#3b82f6' },
  { icon: TrendingUp, title: 'Revenue Analytics', desc: 'Real-time dashboard with earnings, engagement, content performance, and refund tracking. Know what works.', color: '#22c55e' },
  { icon: Globe, title: 'Multi-Language', desc: "Spanish, Portuguese, German, Japanese fan engagement out of the box. Own markets your competitors can't reach.", color: '#fbbf24' },
  { icon: Lock, title: 'Consent-Based Twins', desc: 'Real creators can license an AI twin of themselves. The most defensible model in the industry.', color: '#ec4899' },
];

function Features() {
  return (
    <section id="features" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">Everything you need.</h2>
          <p className="text-[15px] sm:text-base text-[#a0a0b0] mt-3 max-w-lg mx-auto">Persona creation, content pipelines, fan engagement, analytics — all in one platform.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: f.color + '15' }}>
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>
              <h3 className="text-[17px] font-semibold text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-[#a0a0b0] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────
const steps = [
  { num: '01', icon: Sparkles, title: 'Pick or build your AI persona', desc: 'Choose from marketplace archetypes or build a custom AI influencer — look, personality, language, platforms.' },
  { num: '02', icon: Calendar, title: 'Launch your content pipeline', desc: 'AI generates and auto-schedules content across Fanvue, Instagram, TikTok, X, and Reddit. Set your calendar once.' },
  { num: '03', icon: MessageCircle, title: 'Engage fans with disclosed AI', desc: "Every DM carries a visible AI label. Fans know they're talking to AI — and they love it. Better retention, zero bans." },
  { num: '04', icon: DollarSign, title: 'Track and scale your earnings', desc: "Monitor revenue, engagement, and content performance in real time. Reinvest what works, cut what doesn't." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-[#12121a]/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">From zero to earning. In four steps.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.num} className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-semibold text-[#ff2d7e]">{s.num}</span>
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <s.icon className="w-4 h-4 text-[#ff2d7e]" />
                </div>
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-1.5">{s.title}</h3>
              <p className="text-sm text-[#a0a0b0] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Disclosed AI ────────────────────────────────────────────────────────
function WhyDisclosed() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-[#ff2d7e]/10 via-[#a855f7]/5 to-transparent border border-[#ff2d7e]/20 rounded-3xl p-8 sm:p-10">
          <div className="flex items-center gap-2.5 mb-5">
            <Shield className="w-6 h-6 text-[#ff2d7e]" />
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Why disclosed AI wins.</h2>
          </div>
          <p className="text-[15px] text-[#a0a0b0] leading-relaxed mb-4">
            Other agencies depend on fans not knowing it's AI. That's a business model with an expiration date — platforms are rolling out mandatory AI labels, and undisclosed AI monetization invites chargebacks and regulatory attention.
          </p>
          <p className="text-[15px] text-[#a0a0b0] leading-relaxed mb-7">
            We compete on transparency. Every message carries an AI label. Fans who prefer disclosed AI are a growing, loyal audience — and they stay because they trust you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Shield, label: 'Platform compliant' },
              { icon: Heart, label: 'Higher retention' },
              { icon: TrendingUp, label: '0.6% refund rate' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 bg-white/5 rounded-xl px-4 py-3">
                <b.icon className="w-4 h-4 text-[#ff2d7e] shrink-0" />
                <span className="text-sm font-medium text-white">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────────────────
const testimonials = [
  { name: 'Marcus T.', role: 'DIY tier user', quote: 'Started with the $49 plan, built two personas, and hit $3,200/mo in 60 days. The AI labels actually increased my engagement.' },
  { name: 'Aria L.', role: 'DFY client', quote: 'They built my entire AI influencer brand — persona, content calendar, DM automation. I just check the dashboard. $7k/mo and growing.' },
  { name: 'Diego R.', role: 'DWY tier — Spanish market', quote: 'The multi-language chat opened up the entire Latin American market for me. Nobody else is doing this. First mover advantage is real.' },
];

function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#12121a]/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">Real operators. Real results.</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#0a0a0f] border border-white/5 rounded-2xl p-6">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#ff2d7e] fill-[#ff2d7e]" />
                ))}
              </div>
              <p className="text-sm text-[#a0a0b0] leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff2d7e] to-[#a855f7] flex items-center justify-center text-white font-semibold text-xs">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#a0a0b0]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
const tiers = [
  {
    name: 'DIY', price: '$49', period: '/mo', desc: 'Build it yourself with the right tools.',
    features: ['AI persona builder (1 persona)', 'Content scheduler (3 platforms)', 'Disclosed AI fan chat', 'Basic analytics dashboard', 'Email support', 'AI label on all messages'],
    cta: 'Start DIY', highlight: false,
  },
  {
    name: 'Done With You', price: '$199', period: '/mo', desc: 'Guided setup with content templates.',
    features: ['Up to 3 AI personas', 'Content scheduler (all platforms)', 'Multi-language fan engagement', 'Advanced analytics + refund tracking', 'Content template library', 'Priority support', 'Bi-weekly strategy call'],
    cta: 'Start DWY', highlight: true, badge: 'Most Popular',
  },
  {
    name: 'Done For You', price: 'Custom', period: '', desc: 'We build and manage everything.',
    features: ['Unlimited AI personas', 'Full content pipeline management', 'Custom persona creation', 'Dedicated account manager', 'Consent-based digital twins', 'Niche archetype development', 'Weekly strategy + reporting'],
    cta: 'Schedule Your Call', highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">Pick your tier.</h2>
          <p className="text-[15px] text-[#a0a0b0] mt-3">Don't earn, you don't pay. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {tiers.map((t) => (
            <div key={t.name} className={cls('rounded-3xl p-7 border flex flex-col', t.highlight ? 'bg-gradient-to-b from-[#ff2d7e]/10 to-[#0a0a0f] border-[#ff2d7e]/40' : 'bg-[#12121a] border-white/5')}>
              {t.badge && (
                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#ff2d7e] to-[#a855f7] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  <Zap className="w-3 h-3" /> {t.badge}
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <p className="text-sm text-[#a0a0b0] mt-1 mb-4">{t.desc}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-semibold text-white tracking-tight">{t.price}</span>
                <span className="text-sm text-[#a0a0b0]">{t.period}</span>
              </div>
              <ul className="space-y-2.5 mb-7 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-[#ff2d7e] mt-0.5 shrink-0" />
                    <span className="text-[#a0a0b0]">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={cls('block text-center font-medium py-2.5 rounded-full text-[15px] transition-colors', t.highlight ? 'bg-[#0071e3] hover:bg-[#0077ed] text-white' : 'border border-white/25 text-white hover:bg-white/10')}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { q: 'Is this legal? Will I get banned from Fanvue or OnlyFans?', a: "Yes, it's legal — because we disclose AI on every message. Platforms like Fanvue actively support AI creators with proper labeling. Undisclosed AI is what gets bans; we never do that." },
  { q: 'Do I need any technical skills?', a: 'No. The DIY tier is designed for beginners. The DWY tier includes guided setup and templates. The DFY tier means we handle everything — you just check your dashboard.' },
  { q: 'How much can I actually earn?', a: "We don't guarantee income — anyone who does is lying. Realistic range for active operators: $1k–$10k/mo depending on persona quality, platform, niche, and effort. The $49 tier lets you test without significant risk." },
  { q: 'What platforms do you support?', a: 'Fanvue, Instagram, TikTok, X (Twitter), and Reddit. Fanvue is our primary monetization platform for AI creators. OnlyFans requires KYC and does not allow AI-generated personas.' },
  { q: "What's a consent-based digital twin?", a: 'A real creator licenses their AI likeness — their face, voice, and persona — and we create an AI version that can engage fans 24/7. The creator earns passive income from their AI twin. This is the most defensible model in the industry.' },
  { q: "What if I don't earn anything?", a: "The DIY tier is $49/mo — you can cancel anytime. The DFY tier operates on a performance basis: don't earn, you don't pay. We align our incentives with yours." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 md:py-28 px-6 bg-[#12121a]/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-center mb-10 md:mb-14 text-white">Questions? Answers.</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#0a0a0f] border border-white/5 rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left">
                <span className="text-[15px] font-medium text-white">{f.q}</span>
                <ChevronDown className={cls('w-4 h-4 text-[#a0a0b0] transition-transform shrink-0', open === i && 'rotate-180')} />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-[#a0a0b0] leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Ready to build your
          <span className="bg-gradient-to-r from-[#ff2d7e] to-[#a855f7] bg-clip-text text-transparent"> AI empire?</span>
        </h2>
        <p className="text-[15px] sm:text-base text-[#a0a0b0] mt-4 mb-8">Start at $49/mo or book a free call for the Done-For-You tier.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#pricing" className={btnPrimary}>Get Started Now</a>
          <a href="mailto:hello@aifanagency.com" className={btnSecondary}>Schedule Your Call</a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-5 mb-8">
          <div className="flex items-center gap-2">
            <BrandMark size={28} />
            <BrandWordmark />
          </div>
          <div className="flex gap-6 text-xs text-[#a0a0b0]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mb-6 border-t border-white/10 pt-5" data-founder-credit>
          <p className="text-[13px] leading-7 text-[#b4aebf]">
            <span className="inline-block">Made by <strong className="font-medium text-[#ece8f3]">Dan Engelsman</strong></span>{' '}
            <span className="inline-block"><span className="px-1 text-[#a855f7]" aria-hidden="true">·</span> Founder of Agentic Solutions</span>{' '}
            <span className="inline-block"><span className="px-1 text-[#a855f7]" aria-hidden="true">·</span> Holland, MI</span>
          </p>
        </div>
        <div className="border-t border-white/5 pt-6">
          <p className="text-xs text-[#86868b] leading-relaxed max-w-3xl">
            <strong className="text-[#a0a0b0]">Income Disclaimer:</strong> AI Fan Agency does not guarantee any specific earnings. Income figures shown are estimates based on active operators and are not typical for all users. Your results depend on your effort, skill, platform policies, market conditions, and the quality of your AI personas. There is no assurance that you will earn any income using this platform. All AI interactions are disclosed and labeled per platform requirements. © 2026 AI Fan Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f5f5f7]">
      <Navbar />
      <Hero />
      <PersonaShowcase />
      <Features />
      <HowItWorks />
      <WhyDisclosed />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
