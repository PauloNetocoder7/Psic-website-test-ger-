import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Check, 
  Menu, 
  X, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Star,
  Users,
  Compass,
  MessageSquare,
  HelpCircle,
  Sparkles,
  Heart
} from 'lucide-react';

// Define the services data matching requirements exactly in German
interface Service {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "individual",
    emoji: "👤",
    title: "Einzeltherapie",
    description: "Wir bieten einen sicheren und vertraulichen Raum, um persönliche Herausforderungen zu erforschen, Stress zu bewältigen und vergangene Erfahrungen zu heilen. Unser maßgeschneiderter Ansatz hilft Klienten, praktische Werkzeuge zu entwickeln, die die Selbsterkenntnis und ein dauerhaftes emotionales Wohlbefinden fördern."
  },
  {
    id: "teen",
    emoji: "🌱",
    title: "Therapie für Jugendliche",
    description: "Der Alltag moderner Jugendlicher kann sowohl für sie selbst als auch für ihre Familien eine große Herausforderung sein. Wir bieten einfühlsame Beratung, um junge Menschen dabei zu unterstützen, Bewältigungsstrategien zu entwickeln, ihr Selbstwertgefühl zu stärken und schulischen oder sozialen Stress abzubauen."
  },
  {
    id: "family",
    emoji: "🏡",
    title: "Familientherapie",
    description: "Wir arbeiten mit Familien zusammen, um partnerschaftliche und familiäre Bindungen zu stärken, anhaltende Konflikte zu lösen und Kommunikationsmuster zu verbessern. Unsere Sitzungen sind darauf ausgelegt, gegenseitiges Verständnis, Respekt und Unterstützung zwischen allen Mitgliedern zu fördern."
  },
  {
    id: "trauma",
    emoji: "💫",
    title: "Trauma- & PTBS-Behandlung",
    description: "Das Erleben von Traumata kann dazu führen, dass Sie sich blockiert, isoliert oder ständig in Alarmbereitschaft fühlen. Wir nutzen wissenschaftlich fundierte, traumaspezifische Therapien, um Klienten dabei zu helfen, schwierige Erinnerungen sicher zu verarbeiten und die Kontrolle über ihr Leben zurückzugewinnen."
  },
  {
    id: "anxiety",
    emoji: "🌊",
    title: "Hilfe bei Angst & Depressionen",
    description: "Chronische Angstzustände und anhaltende Gefühle der Niedergeschlagenheit können den Alltag extrem belasten. Wir vermitteln wissenschaftlich erprobte Bewältigungsstrategien, um Klienten zu helfen, sich aus negativen Denkmustern zu befreien und Motivation sowie inneren Frieden wiederzufinden."
  },
  {
    id: "grief",
    emoji: "🕊️",
    title: "Trauerbegleitung & Verlustbewältigung",
    description: "Trauer ist eine zutiefst persönliche Reise ohne festen Zeitrahmen oder vorgeschriebenen Weg. Wir bieten eine sanfte und stützende Begleitung, um Klienten dabei zu helfen, ihren Verlust zu würdigen, komplexe Gefühle zu verarbeiten und nach einem großen Einschnitt Schritt für Schritt zurück ins Leben zu finden."
  }
];

// Define therapeutic approaches data in German
interface Approach {
  title: string;
  subtitle: string;
  description: string;
}

const approaches: Approach[] = [
  {
    title: "Kognitive Verhaltenstherapie (KVT)",
    subtitle: "Action-orientiert und Empirisch fundiert",
    description: "Eine strukturierte und wissenschaftlich fundierte Behandlungsmethode, die sich auf die Verbindung zwischen Gedanken, Gefühlen und Verhaltensweisen konzentriert. Wir unterstützen Klienten dabei, dysfunktionale Denkmuster zu erkennen und zu verändern, um konkrete, positive Veränderungen in ihrem täglichen Leben zu erzielen."
  },
  {
    title: "Achtsamkeitsbasierte Therapie",
    subtitle: "Präsenz und Emotionale Verankerung",
    description: "Durch die Integration moderner kognitiver Therapie mit Achtsamkeit und der bewussten Wahrnehmung des gegenwärtigen Augenblicks lernen Klienten, ihre Gedanken und Gefühle ohne Verurteilung zu beobachten. Es ist wissenschaftlich erwiesen, dass diese Praxis Stress reduziert, intensive Emotionen reguliert und die mentale Widerstandskraft stärkt."
  },
  {
    title: "Akzeptanz- und Commitmenttherapie (ACT)",
    subtitle: "Wertorientiert und Bewusstes Wachstum",
    description: "Ein transformativer psychologischer Ansatz, der Klienten dazu ermutigt, ihre inneren Gedanken und Gefühle anzunehmen, anstatt gegen sie anzukämpfen. Wir begleiten Menschen dabei, ihre persönlichen Kernwerte zu klären und sich für konkrete Handlungen zu entscheiden, die ihr Leben dauerhaft bereichern."
  }
];

// Define FAQs data in German
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Woher weiß ich, ob eine Therapie das Richtige für mich ist?",
    answer: "Eine Therapie kann für jeden hilfreich sein, der vor Lebensübergängen, Beziehungsproblemen, chronischem Stress oder psychischen Herausforderungen steht. Wenn Sie sich festgefahren oder überfordert fühlen oder sich selbst einfach besser verstehen möchten, bieten unsere Sitzungen einen strukturierten, professionellen Raum, um tiefere Einblicke zu gewinnen und praktische Werkzeuge für positive Veränderungen zu entwickeln."
  },
  {
    question: "Bieten Sie Online-Therapiesitzungen (Videosprechstunden) an?",
    answer: "Ja, wir bieten absolut sichere und vertrauliche Online-Therapiesitzungen an. Unsere Telemedizin-Plattform gewährleistet das gleiche hohe Qualitätsniveau wie unsere persönlichen Gespräche vor Ort – ganz bequem und privat von Ihrem eigenen Zuhause aus."
  },
  {
    question: "Wie lange dauert eine Therapie in der Regel?",
    answer: "Die Dauer der Begleitung ist sehr individuell und hängt von Ihren persönlichen Zielen und Herausforderungen ab. Einige Klienten profitieren von strukturierten, lösungsorientierten Kurzzeittherapien (8 bis 12 Sitzungen), während andere sich für eine tiefergehende, langfristige Aufarbeitung komplexer Traumata oder anhaltendes persönliches Wachstum entscheiden. Wir besprechen Ihre Fortschritte regelmäßig gemeinsam."
  },
  {
    question: "Werden die Kosten von der Krankenkasse übernommen oder erstattet?",
    answer: "Wir arbeiten primär als Privatpraxis, um Ihnen ein Höchstmaß an Diskretion, Flexibilität und Therapiefreiheit zu garantieren. Wir stellen Ihnen jedoch gerne eine detaillierte monatliche Rechnung aus, die Sie bei Ihrer privaten Krankenversicherung oder Zusatzversicherung zur Prüfung einer teilweisen oder vollständigen Erstattung einreichen können. Wir empfehlen, dies vorab mit Ihrer Kasse abzuklären."
  },
  {
    question: "Was passiert in der ersten Sprechstunde oder dem Erstgespräch?",
    answer: "In unserem Erstgespräch konzentrieren wir uns darauf, zu verstehen, was Sie zu uns führt, Ihre persönliche Lebensgeschichte zu beleuchten und gemeinsame Ziele für die Therapie zu definieren. Es ist ein partnerschaftlicher, einfühlsamer und informativer Austausch, um festzustellen, ob die therapeutische Chemie stimmt, und um Ihren individuellen Behandlungsplan zu entwerfen."
  }
];

export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Accordion active index state
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Contact form submission state
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const toggleFaq = (index: number) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      // Clear form
      setContactData({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-text font-sans relative overflow-x-hidden luxury-noise selection:bg-brand-gold/30 selection:text-white">
      
      {/* Top Disclaimer Banner */}
      <div className="sticky top-0 z-[100] w-full bg-amber-100 text-amber-950 font-semibold px-4 py-2.5 border-b border-amber-200 shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-center transition-all duration-300">
        <span>TEST-WEBSITE FÜR PSYCHOLOGEN</span>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-[38px] z-50 w-full bg-brand-black/90 backdrop-blur-md border-b border-brand-border/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold text-[10px] tracking-tighter uppercase font-serif group-hover:scale-105 duration-300 shadow-gold-glow">
              Ψ
            </div>
            <span className="font-serif font-semibold text-lg lg:text-xl tracking-tight text-white group-hover:text-brand-gold transition-colors duration-300 flex items-center gap-2">
              <span>Test-Website <span className="text-brand-gold font-normal lg:font-light">für Psychologen</span></span>
              <span className="flex items-center gap-1.5 ml-1 select-none">
                <img src="https://flagcdn.com/w40/de.png" alt="Germany Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
              </span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Über Uns</a>
            <a href="#services" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Leistungen</a>
            <a href="#approach" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Therapieansatz</a>
            <a href="#faq" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">FAQ</a>
            <a href="#contact" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs text-brand-gold hover:underline underline-offset-4 font-semibold">Kontakt</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-brand-gold p-1 focus:outline-none transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[70px] left-0 w-full bg-brand-charcoal border-b border-brand-border py-8 px-6 flex flex-col gap-6 shadow-2xl animate-fade-in">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Über Uns
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Leistungen
            </a>
            <a 
              href="#approach" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Therapieansatz
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-gold font-semibold uppercase tracking-widest text-sm transition-colors"
            >
              Kontakt
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-36 md:pb-44 flex items-center justify-center border-b border-brand-border/40 overflow-hidden bg-brand-black">
        
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/xtTB6YrY/Whats-App-Image-2026-05-19-at-20-54-18.jpg" 
            alt="Warme und stilvolle Atmosphäre" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75 filter brightness-95 contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-brand-black/60" />
        </div>

        {/* Subtle decorative gold light flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 border border-brand-gold/30 px-3.5 py-1.5 mb-8 bg-brand-charcoal/50 backdrop-blur-sm">
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            <span className="text-brand-gold uppercase tracking-widest text-[9.5px] font-semibold font-mono">Wissenschaftlich fundierte klinische Behandlung</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-[1.12]">
            Sie haben es verdient, sich besser zu fühlen — <span className="italic font-normal text-brand-gold block mt-2 sm:inline sm:mt-0">und Sie können es schaffen.</span>
          </h1>
          
          <p className="font-sans text-brand-text/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mb-12">
            Einfühlsame und wissenschaftlich fundierte Therapie für Einzelpersonen, Jugendliche und Familien. Begleitet von qualifizierten Fachkräften.
          </p>

          <div className="flex justify-center w-full max-w-xs">
            <a 
              href="#about"
              className="w-full px-8 py-4 bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 gold-glow-button border border-white flex items-center justify-center gap-2 cursor-pointer shadow-gold-glow"
            >
              Mehr erfahren <ArrowRight size={14} />
            </a>
          </div>

          {/* Quick validation markers below hero */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-xs font-mono text-brand-muted border-t border-brand-border/40 pt-8 w-full">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-brand-gold" /> Approbierte klinische Psychologen & Psychotherapeuten
            </span>
            <span className="flex items-center gap-1.5">
              <LockIcon size={14} /> Sichere und absolut vertrauliche Plattformen
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-gold" /> Flexible Terminvereinbarung & Sitzungen
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Visual Brand Statement */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative mb-6 group overflow-hidden border border-brand-border p-2 bg-brand-charcoal shadow-2xl">
                <div className="absolute top-4 left-4 z-10 bg-brand-black/90 border border-brand-gold/30 px-3 py-1 text-[9px] uppercase font-mono tracking-widest font-semibold text-brand-gold">
                  Unsere Professionelle Begleitung
                </div>
                <img 
                  src="https://i.ibb.co/B2Dkrq1k/Whats-App-Image-2026-05-19-at-20-37-56.jpg" 
                  alt="Therapeutisches Gespräch in der Praxis" 
                  referrerPolicy="no-referrer"
                  className="w-full h-64 md:h-80 object-cover filter brightness-90 contrast-105 hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>

              <div className="relative mb-8 group overflow-hidden border border-brand-border p-2 bg-brand-charcoal shadow-2xl">
                <div className="absolute top-4 left-4 z-10 bg-brand-black/90 border border-brand-gold/30 px-3 py-1 text-[9px] uppercase font-mono tracking-widest font-semibold text-brand-gold">
                  Therapieraum und Praxis-Atmosphäre
                </div>
                <img 
                  src="https://i.ibb.co/6cLZLN0f/Whats-App-Image-2026-05-19-at-20-36-08.jpg" 
                  alt="Praxisraum für Psychotherapie" 
                  referrerPolicy="no-referrer"
                  className="w-full h-64 md:h-80 object-cover filter brightness-90 contrast-105 hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>

              <div className="w-12 h-px bg-brand-gold mb-6" />
              <span className="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-3">Unsere Kernpraxis</span>
              <h2 className="font-serif text-3xl md:text-4.5xl leading-tight text-white mb-6 font-semibold">
                Therapeutische Versorgung neu definiert — mit einem exzellenten, patientenzentrieten Ansatz.
              </h2>
              <p className="text-brand-muted text-base font-light leading-relaxed mb-8">
                Wir sind fest davon überzeugt, dass eine herausragende psychologische Begleitung ein wesentlicher Grundstein für ein erfülltes Leben ist. Indem wir traditionelle Barrieren abbauen und empirische Forschung nutzen, gestalten wir individuelle Behandlungswege, um nachhaltige Heilung und persönliches Wachstum zu fördern.
              </p>
              
              <div className="bg-brand-charcoal/80 p-6 border border-brand-border/80 flex items-start gap-4 shadow-xl">
                <span className="text-2xl text-brand-gold pt-1">💡</span>
                <div>
                  <h4 className="font-serif text-white font-medium mb-1">Unser Universelles Versprechen</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Wir setzen ausschließlich anerkannte, wissenschaftlich evaluierte Methoden ein, die passgenau auf Ihre biologische, psychologische und soziale Situation abgestimmt sind.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key details */}
            <div className="lg:col-span-7 bg-brand-charcoal p-8 md:p-12 border border-brand-border shadow-2xl relative">
              
              <div className="absolute top-0 right-12 -translate-y-1/2 bg-brand-black border border-brand-border px-4 py-1.5 text-brand-gold text-[10px] uppercase font-mono tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block animate-pulse"></span>
                Offizielles Statement der Praxis
              </div>

              <span className="text-xs text-brand-gold font-mono tracking-widest uppercase block mb-2">Unternehmensübersicht</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-6">
                Herzlich willkommen auf der „Test-Website für Psychologen“
              </h3>
              
              <p className="text-brand-text/90 text-base md:text-lg leading-relaxed font-light mb-8">
                Wir sind ein hochqualifiziertes Team von Fachkräften für mentale Gesundheit, das sich einer einfühlsamen und wissenschaftlich fundierten Therapie verschrieben hat. Unsere Therapeuten verfügen über fortgeschrittene Universitätsabschlüsse in Klinischer Psychologie und Sozialarbeit sowie weitreichende Erfahrung in der Unterstützung von Einzelpersonen, Jugendlichen und Familien bei der Überwindung von Lebenskrisen.
              </p>

              <hr className="border-brand-border mb-8" />

              {/* Robust Key Metrics Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">15+ Jahre</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">Kombinierte Erfahrung</div>
                </div>

                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">5.000+</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">Durchgeführte Sitzungen</div>
                </div>

                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">Global</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">Flexible Online-Beratung</div>
                </div>
                
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 border-b border-brand-border bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-[11px] font-mono block mb-3 font-semibold">Unsere Spezialisierungen</span>
            <h2 className="font-serif text-3xl md:text-4.5xl text-white mb-6 font-semibold">
              Wissenschaftlich fundierte Behandlungsschwerpunkte
            </h2>
            <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed">
              Wir bieten hochgradig personalisierte klinische Interventionen an, die exakt auf Ihre aktuelle Lebensphase zugeschnitten sind. Jede Behandlung basiert auf wissenschaftlich anerkannten Therapieansätzen und wird mit größter Sorgfalt durchgeführt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-brand-charcoal p-8 border border-brand-border gold-glow-card relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-black border border-brand-border/80 flex items-center justify-center text-3xl mb-8 group-hover:border-brand-gold/60 transition-colors duration-300">
                    {service.emoji}
                  </div>
                  
                  <h3 className="font-serif text-lg md:text-xl text-white font-medium mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <a 
                  href="#contact"
                  className="mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-brand-gold group-hover:underline underline-offset-4 font-semibold text-left w-fit cursor-pointer animate-pulse"
                >
                  Verfügbarkeit anfragen <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Therapeutic Approach Section */}
      <section id="approach" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Description */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="w-12 h-px bg-brand-gold mb-6" />
              <span className="text-brand-gold uppercase tracking-widest text-xs font-mono block mb-3 font-semibold">Unser Therapieansatz</span>
              <h2 className="font-serif text-3xl md:text-4.5xl text-white leading-tight mb-6 font-semibold">
                Klinische Methoden für langfristiges seelisches Gleichgewicht.
              </h2>
              <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed mb-8">
                In unserer Praxis lehnen wir standardisierte und unpersönliche Ansätze ab. Wir verfolgen eine integrative Methodik und kombinieren verschiedene, wissenschaftlich evaluierte Therapiemethoden, um Klienten ganzheitlich zu behandeln.
              </p>
              
              <div className="flex flex-col gap-4 border-t border-brand-border pt-8 font-serif italic text-brand-gold text-sm">
                <span>„Empirische Fundierung bildet unser Fundatment. Menschliche Empathie vollendet den Heilungsweg.“</span>
              </div>
            </div>

            {/* Right Column: Method Details */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {approaches.map((appr, idx) => (
                <div 
                  key={idx}
                  className="bg-brand-charcoal hover:bg-brand-charcoal/80 p-8 md:p-10 border border-brand-border hover:border-brand-gold/40 transition-all duration-300 relative group"
                >
                  <div className="absolute top-8 right-8 font-serif text-5xl md:text-6xl text-brand-border group-hover:text-brand-gold/10 font-bold select-none transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  
                  <span className="text-brand-gold font-mono text-[10px] uppercase tracking-widest font-semibold block mb-2">
                    {appr.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-4">
                    {appr.title}
                  </h3>
                  
                  <p className="text-brand-text/90 text-sm md:text-base leading-relaxed font-light max-w-2xl">
                    {appr.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-[11px] font-mono block mb-3 font-semibold">Häufig Gestellte Fragen</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 font-semibold">
              Wissenswertes & Fragen
            </h2>
            <p className="text-brand-muted text-sm md:text-base font-light max-w-xl mx-auto">
              Antworten zu organisatorischen Details, Erstattungen durch Krankenkassen, Online-Videosprechstunden und dem Ablauf des ersten Erstgesprächs.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div 
                  key={index}
                  className={`border border-brand-border transition-all duration-300 ${isOpen ? 'bg-brand-charcoal border-brand-gold/30 shadow-gold-glow' : 'bg-brand-charcoal/40 hover:bg-brand-charcoal/80'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 font-serif text-base md:text-lg text-white font-medium hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-brand-gold flex-shrink-0 transition-transform duration-300">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {/* Pure JS/CSS accordion simulation */}
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{ 
                      maxHeight: isOpen ? '400px' : '0px',
                      opacity: isOpen ? '1' : '0'
                    }}
                  >
                    <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-brand-text/80 leading-relaxed font-light border-t border-brand-border/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 border-b border-brand-border bg-brand-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-xs font-mono block mb-3 font-semibold">Erstkontakt</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-6">
              Beginnen Sie noch heute Ihren Weg zur Besserung.
            </h2>
            <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed">
              Senden Sie uns eine Nachricht oder setzen Sie sich direkt mit unserem Empfangsteam in Verbindung. Wir bearbeiten jede Anfrage mit größter Diskretion innerhalb eines klinischen Arbeitstags.
            </p>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Anschrift der Praxis</h4>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Wellness-Allee 123, Suite 200,<br />10115 Berlin (Demo-Adresse)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Telefonnummer</h4>
                  <p className="text-xs text-brand-muted mt-1">
                    +49 (0) 30 555-1234
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">E-Mail-Adresse</h4>
                  <p className="text-xs text-brand-muted mt-1 hover:text-brand-gold transition-colors">
                    kontakt@testwebsite4psychologists.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Sprechzeiten</h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Montag – Freitag, 9:00 Uhr – 18:00 Uhr
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 p-5 border-l-2 border-brand-gold/60 bg-brand-charcoal/20 text-[11px] text-brand-muted tracking-wide leading-relaxed font-mono text-center mx-auto max-w-xl">
            Sämtliche Kommunikation über diesen digitalen Kanal ist im Rahmen der gesetzlichen Bestimmungen und Datenschutzvorgaben für die sichere Verarbeitung medizinischer Daten streng geschützt.
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-brand-black py-12 md:py-20 border-t border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-lg tracking-wider text-white uppercase mb-2 flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <span>Ψ TEST-WEBSITE <span className="text-brand-gold font-light font-serif">FÜR PSYCHOLOGEN</span></span>
              <span className="flex items-center gap-1.5 ml-1 select-none">
                <img src="https://flagcdn.com/w40/de.png" alt="Germany Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5" referrerPolicy="no-referrer" />
              </span>
            </div>
            <p className="text-[11px] text-brand-muted max-w-sm leading-relaxed mx-auto md:mx-0 font-light">
              Dies ist eine Demonstration-Website, die ausschließlich zu Veranschaulichungszwecken erstellt wurde. Alle angegebenen Behandlungen, Dienste und geschäftlichen Details sind fiktiv.
            </p>
          </div>

          {/* Repeat Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-widest font-medium text-brand-muted">
            <a href="#about" className="hover:text-white transition-colors">Über Uns</a>
            <a href="#services" className="hover:text-white transition-colors">Leistungen</a>
            <a href="#approach" className="hover:text-white transition-colors">Therapieansatz</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors text-brand-gold">Kontakt</a>
          </div>

        </div>

        {/* Real Bottom License bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-brand-border/40 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11.5px] text-brand-muted font-light">
            © 2025 Test-Website für Psychologen — Reine Demo-Website. Alle bereitgestellten Informationen sind frei erfunden.
          </p>
          <p className="text-[11.5px] text-brand-muted/80 flex items-center gap-1 font-mono">
            Inspiriert von anspruchsvollen klinischen Standards <Heart size={10} className="text-brand-gold inline" /> Patientenzentrierte Begleitung
          </p>
        </div>
      </footer>

    </div>
  );
}

// Custom lock icon to preserve look
function LockIcon({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-brand-gold"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
