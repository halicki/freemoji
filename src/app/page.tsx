"use client";

import { useState } from "react";
import Image from "next/image";
import {
  content,
  variantLabels,
  type VariantKey,
  type SectionContent,
} from "@/data/content";

const EMOJIS = ["😀", "😂", "🥹", "😍", "🤔", "😎", "🥳", "😤", "🤗", "😭"];

/* ─── Navbar ─── */
function Navbar({
  variant,
  setVariant,
}: {
  variant: VariantKey;
  setVariant: (v: VariantKey) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          <Image src="/logo.svg" alt="freemoji" width={160} height={49} className="h-8 w-auto" priority />
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-500">
          {/* Variant dropdown */}
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as VariantKey)}
            className="bg-yellow/10 border border-yellow/30 rounded-full px-4 py-2 text-sm font-600 text-gray-700 focus:outline-none focus:border-yellow cursor-pointer"
          >
            {(Object.keys(variantLabels) as VariantKey[]).map((k) => (
              <option key={k} value={k}>
                {variantLabels[k]}
              </option>
            ))}
          </select>

          <a href="#about" className="hover:text-yellow transition-colors">
            O nas
          </a>
          <a href="#for-whom" className="hover:text-yellow transition-colors">
            Dla kogo
          </a>
          <a href="#offer" className="hover:text-yellow transition-colors">
            Oferta
          </a>
          <a href="#faq" className="hover:text-yellow transition-colors">
            FAQ
          </a>
          <a
            href="#contact"
            className="bg-yellow hover:bg-yellow-dark text-gray-900 px-5 py-2.5 rounded-full font-600 transition-colors"
          >
            Kontakt
          </a>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value as VariantKey)}
            className="bg-yellow/10 border border-yellow/30 rounded-full px-3 py-1.5 text-xs font-600 text-gray-700 focus:outline-none"
          >
            {(Object.keys(variantLabels) as VariantKey[]).map((k) => (
              <option key={k} value={k}>
                {variantLabels[k]}
              </option>
            ))}
          </select>
          <button
            className="p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-500">
          <a href="#about" onClick={() => setOpen(false)}>O nas</a>
          <a href="#for-whom" onClick={() => setOpen(false)}>Dla kogo</a>
          <a href="#offer" onClick={() => setOpen(false)}>Oferta</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setOpen(false)} className="bg-yellow text-gray-900 px-5 py-2.5 rounded-full font-600 text-center">
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero({ c }: { c: SectionContent }) {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[60%] h-full bg-yellow rounded-bl-[120px] -z-10" />
      <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-yellow/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center min-h-[85vh]">
        <div className="animate-fade-up">
          <h1 className="font-display font-800 text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            {c.hero.headline.map((line, i) =>
              i === c.hero.headline.length - 1 ? (
                <span key={i}>
                  <span className="relative inline-block">
                    {line}
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 8c50-6 100-6 150-2s100 2 146-4" stroke="#FFD600" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                  .
                </span>
              ) : (
                <span key={i}>
                  {line}
                  <br />
                </span>
              )
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
            {c.hero.subtitle}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-600 text-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            {c.hero.cta}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-gray-400">{c.hero.ctaSub}</p>
        </div>
        <div className="relative flex justify-center animate-scale-in">
          <span className="absolute -top-6 right-8 text-5xl animate-float">😀</span>
          <span className="absolute top-1/4 -right-4 text-4xl animate-float-delayed">😍</span>
          <span className="absolute bottom-12 right-0 text-6xl animate-float stagger-2">🤗</span>
          <span className="absolute top-1/3 -left-4 text-3xl animate-float-delayed stagger-3">😎</span>
          <span className="absolute -bottom-2 left-12 text-4xl animate-float stagger-4">🥳</span>
          <div className="w-72 h-96 md:w-96 md:h-[28rem] bg-yellow/20 rounded-[3rem] flex items-center justify-center">
            <span className="text-[10rem] md:text-[12rem] select-none">🙋</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About({ c }: { c: SectionContent }) {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-yellow/30 to-yellow/10 overflow-hidden flex items-end justify-center">
            <span className="text-[8rem] mb-8">👩‍💼</span>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow rounded-2xl -z-10" />
        </div>
        <div>
          <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-3">
            {c.about.label}
          </p>
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-12 leading-tight">
            {c.about.heading.split("freemoji").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-yellow">freemoji</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h2>
          <div className="space-y-10">
            {c.about.points.map((p) => (
              <div key={p.num} className="flex gap-6">
                <span className="font-display font-800 text-5xl text-yellow/40 leading-none shrink-0">
                  {p.num}
                </span>
                <div>
                  <h3 className="font-600 text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Emoji showcase ─── */
function EmojiShowcase({ c }: { c: SectionContent }) {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">
          {c.emojiShowcase.heading.split("emocji").map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="text-yellow">emocji</span>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {c.emojiShowcase.subheading}
        </p>
      </div>
      <div className="flex gap-6 mb-6 whitespace-nowrap overflow-hidden">
        {[...EMOJIS, ...EMOJIS].map((e, i) => (
          <div key={`a${i}`} className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl shadow-sm flex items-center justify-center text-4xl md:text-5xl shrink-0 hover:scale-110 hover:shadow-lg transition-all cursor-default">
            {e}
          </div>
        ))}
      </div>
      <div className="flex gap-6 whitespace-nowrap overflow-hidden">
        {[...EMOJIS.slice().reverse(), ...EMOJIS.slice().reverse()].map((e, i) => (
          <div key={`b${i}`} className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl shadow-sm flex items-center justify-center text-4xl md:text-5xl shrink-0 hover:scale-110 hover:shadow-lg transition-all cursor-default">
            {e}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Dla kogo? ─── */
function ForWhom({ c }: { c: SectionContent }) {
  return (
    <section id="for-whom" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">
            {c.forWhom.heading}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          {c.forWhom.bullets.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4 hover:border-yellow hover:shadow-lg hover:shadow-yellow/10 transition-all"
            >
              <span className="text-2xl">{"👤"}</span>
              <p className="text-gray-700 font-500">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Cyfrowa komunikacja ─── */
function DigitalComm({ c }: { c: SectionContent }) {
  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/5 rounded-full blur-[80px]" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-3">
            {c.digitalComm.label}
          </p>
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-6 leading-tight">
            {c.digitalComm.heading}
          </h2>
          {c.digitalComm.paragraphs.map((p, i) => (
            <p key={i} className="text-gray-400 leading-relaxed mb-6">{p}</p>
          ))}
          <div className="inline-flex items-center gap-3 bg-yellow/10 border border-yellow/20 rounded-2xl px-6 py-4">
            <span className="text-3xl">💡</span>
            <p className="text-sm text-yellow-light">{c.digitalComm.callout}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {["🧑‍💻", "👩‍🏫", "🧑‍🤝‍🧑", "📱"].map((emoji, i) => (
            <div key={i} className="aspect-square rounded-3xl bg-gray-800 flex items-center justify-center text-6xl hover:bg-gray-700 transition-colors">
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Problem ─── */
function Problem({ c }: { c: SectionContent }) {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display font-800 text-4xl md:text-5xl mb-6">
          {c.problem.heading}
        </h2>
        <p className="text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
          {c.problem.desc}
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {c.problem.bullets.map((b, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <span className="text-3xl block mb-3">{"⚠️"}</span>
              <p className="text-gray-600 font-500 text-sm">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Solution ─── */
function Solution({ c }: { c: SectionContent }) {
  return (
    <section className="py-20 bg-yellow relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="absolute text-5xl select-none" style={{ left: `${(i * 5.3) % 100}%`, top: `${(i * 7.1) % 100}%`, transform: `rotate(${(i * 17) % 40 - 20}deg)` }}>
            {EMOJIS[i % EMOJIS.length]}
          </span>
        ))}
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display font-800 text-4xl md:text-5xl text-gray-900 mb-4">
            {c.solution.heading}
          </h2>
          <p className="text-xl text-gray-900/70 font-500">{c.solution.desc}</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {c.solution.benefits.map((b, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-yellow-dark/20">
              <span className="text-2xl block mb-2">{b.emoji}</span>
              <p className="text-gray-800 text-sm font-500">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Webinar ─── */
function Webinar({ c }: { c: SectionContent }) {
  return (
    <section id="offer" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Webinar promo */}
          <div>
            <h2 className="font-display font-800 text-3xl md:text-4xl mb-4">
              {c.webinarPromo.heading}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              {c.webinarPromo.subtitle}
            </p>
            <ul className="space-y-3 mb-8">
              {c.webinarPromo.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-yellow mt-0.5">✓</span>
                  <span className="text-gray-600">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-600 transition-all hover:scale-105">
                {c.webinarPromo.cta1}
              </a>
              <a href="#faq" className="bg-white border border-gray-200 hover:border-yellow text-gray-700 px-6 py-3 rounded-full font-600 transition-colors">
                {c.webinarPromo.cta2}
              </a>
            </div>
          </div>

          {/* Webinar content */}
          <div>
            <h3 className="font-display font-700 text-2xl mb-6">{c.webinar.heading}</h3>
            {c.webinar.desc && <p className="text-gray-500 mb-4">{c.webinar.desc}</p>}
            <div className="space-y-4">
              {c.webinar.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                  <span className="text-2xl shrink-0">{b.emoji}</span>
                  <p className="text-gray-600">{b.text}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-yellow hover:bg-yellow-dark text-gray-900 px-6 py-3 rounded-full font-600 transition-colors"
            >
              {c.webinar.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    { q: "Czym dokładnie jest cyfrowa mowa ciała?", a: "To sposób wyrażania emocji, intencji i tonu w komunikacji pisemnej — za pomocą emoji, interpunkcji, formatowania tekstu, czasu odpowiedzi i innych elementów, które zastępują mimikę i gesty w rozmowie twarzą w twarz." },
    { q: "Dla kogo jest freemoji?", a: "Dla każdego, kto komunikuje się pisemnie w pracy lub życiu prywatnym. Szczególnie polecamy osobom z działów HR, sprzedaży, liderom zespołów, coachom i trenerom." },
    { q: "Jak wygląda szkolenie?", a: "Oferujemy webinary na żywo, materiały edukacyjne do samodzielnej nauki, interaktywne ćwiczenia oraz mini gry, które pomagają zrozumieć kontekst emoji w komunikacji." },
    { q: "Ile kosztuje dostęp?", a: "Dostęp do platformy zaczyna się od 199 zł. Szczegóły cennika znajdziesz w sekcji kontakt lub pisząc do nas na kontakt@freemoji.com." },
    { q: "Czy mogę przetestować platformę?", a: "Tak! Zapisz się na bezpłatny webinar, aby poznać nasze podejście i zobaczyć fragment platformy w akcji." },
  ];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-800 text-4xl md:text-5xl mb-4">FAQ</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left p-6 flex items-center justify-between gap-4 font-600 hover:bg-gray-50 transition-colors">
                {f.q}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`}>
                  <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openIdx === i && <div className="px-6 pb-6 text-gray-500 leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-lg mx-auto px-6 text-center">
        <span className="text-7xl block mb-6">🎯</span>
        <p className="text-yellow font-600 text-sm uppercase tracking-widest mb-3">Produkt</p>
        <h2 className="font-display font-800 text-4xl md:text-5xl mb-6">Zacznij już dziś</h2>
        <div className="bg-yellow rounded-3xl p-10 mb-8">
          <p className="text-gray-900/60 text-sm mb-2">Dostęp do platformy od</p>
          <p className="font-display font-800 text-6xl text-gray-900">199<span className="text-3xl">,00 zł</span></p>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-full font-600 text-lg transition-all hover:scale-105 hover:shadow-xl">
          Zapisz się teraz
        </a>
        <p className="mt-4 text-gray-400 text-sm">(Nie zapomnij dodać emoji!)</p>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-display font-800 text-4xl mb-4">Masz <span className="text-yellow">pytanie</span>?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">Napisz do nas — odpowiadamy szybko i z emoji!</p>
            <a href="mailto:kontakt@freemoji.com" className="text-yellow hover:text-yellow-light text-lg font-600 transition-colors">
              kontakt@freemoji.com
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Imię" className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow transition-colors" />
            <input type="email" placeholder="Email" className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow transition-colors" />
            <textarea placeholder="Wiadomość" rows={4} className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow transition-colors resize-none" />
            <button className="bg-yellow hover:bg-yellow-dark text-gray-900 font-600 px-8 py-3.5 rounded-xl transition-colors self-start">
              Wyślij wiadomość
            </button>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/logo.svg" alt="freemoji" width={120} height={37} className="h-6 w-auto brightness-0 invert" />
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} freemoji. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            {["Instagram", "LinkedIn", "Facebook"].map((s) => (
              <a key={s} href="#" className="text-gray-500 hover:text-yellow text-sm transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [variant, setVariant] = useState<VariantKey>("normalne");
  const c = content[variant];

  return (
    <>
      <Navbar variant={variant} setVariant={setVariant} />
      <main>
        <Hero c={c} />
        <About c={c} />
        <EmojiShowcase c={c} />
        <ForWhom c={c} />
        <DigitalComm c={c} />
        <Problem c={c} />
        <Solution c={c} />
        <Webinar c={c} />
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
