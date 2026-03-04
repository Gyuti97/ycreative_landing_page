import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.cta': 'START PROJECT',
    
    // Hero
    'hero.tagline': 'Visual Performance Agency',
    'hero.headline1': 'Scale attention.',
    'hero.headline2': 'Build momentum.',
    'hero.subheadline': 'Short-form and long-form video editing optimized for ads, campaigns, and brand visibility growth.',
    'hero.slogan': 'Always start with the',
    'hero.slogan.why': 'WHY',
    'hero.cta.book': 'Book a Strategy Call',
    'hero.cta.work': 'View Our Work',
    
    // Proof
    'proof.tagline': 'Performance',
    'proof.headline1': 'Built for scale,',
    'proof.headline2': 'optimized for conversion.',
    'proof.description': "We don't just edit. We engineer visual systems that drive measurable attention, engagement, and growth.",
    'proof.metric1.value': '12hr',
    'proof.metric1.label': 'Rush Available',
    'proof.metric1.desc': 'When you need speed',
    'proof.metric2.value': '48-72hr',
    'proof.metric2.label': 'Standard Delivery',
    'proof.metric2.desc': 'Most projects completed',
    'proof.capabilities': 'Capabilities',
    'proof.cap1': 'Paid Social Ads',
    'proof.cap2': 'Brand Campaigns',
    'proof.cap3': 'Product Launches',
    'proof.cap4': 'Event Coverage',
    'proof.cap5': 'Testimonial Edits',
    'proof.cap6': 'Educational Series',
    'proof.cap7': 'Explainer Videos',
    'proof.cap8': 'Viral Shorts',
    
    // Showcase
    'showcase.tagline': 'Selected Work',
    'showcase.headline1': 'Performance-driven edits',
    'showcase.headline2': 'that move metrics.',
    'showcase.project1.title': 'Viral Product Launch',
    'showcase.project1.category': 'Paid Social',
    'showcase.project1.metrics': '12M views • 4.8x ROAS',
    'showcase.project2.title': 'Brand Campaign Series',
    'showcase.project2.category': 'Long-Form',
    'showcase.project2.metrics': '2.3M reach • 68% completion',
    'showcase.project3.title': 'Educational Content',
    'showcase.project3.category': 'YouTube',
    'showcase.project3.metrics': '850K subscribers • 89% retention',
    'showcase.project4.title': 'TikTok Series',
    'showcase.project4.category': 'Short-Form',
    'showcase.project4.metrics': '45M views • 18% engagement',
    'showcase.project5.title': 'SaaS Demo Videos',
    'showcase.project5.category': 'Product',
    'showcase.project5.metrics': '2.1M views • 34% conversion lift',
    'showcase.project6.title': 'Event Highlight Reel',
    'showcase.project6.category': 'Corporate',
    'showcase.project6.metrics': '1.8M impressions • 92% sentiment',
    'showcase.cta': 'See How We Work',
    
    // Process
    'process.tagline': 'Our System',
    'process.headline1': 'A proven process',
    'process.headline2': 'for performance.',
    'process.description': 'From strategy to delivery, every step is designed for clarity, speed, and measurable impact.',
    'process.step1.number': '01',
    'process.step1.title': 'Discovery',
    'process.step1.desc': 'We start with why. Understanding your objectives, audience, and KPIs to architect the right visual strategy.',
    'process.step1.timeline': 'Day 1',
    'process.step2.number': '02',
    'process.step2.title': 'Production Planning',
    'process.step2.desc': 'Strategic editing framework, pacing analysis, and platform optimization mapped before the first cut.',
    'process.step2.timeline': 'Day 1-2',
    'process.step3.number': '03',
    'process.step3.title': 'Editing & Refinement',
    'process.step3.desc': 'Precision editing with performance in mind. Every frame, transition, and beat engineered for attention.',
    'process.step3.timeline': 'Day 2-4',
    'process.step4.number': '04',
    'process.step4.title': 'Delivery & Scale',
    'process.step4.desc': 'Multi-format exports, platform specifications, and ongoing optimization as your content performs.',
    'process.step4.timeline': 'Day 4+',
    'process.commitment': 'Our Commitment',
    'process.commitment.text': "Unlimited revisions until it's right. 24-hour rush available. Cancel anytime.",
    'process.commitment.item1': 'No long-term contracts',
    'process.commitment.item2': 'Dedicated editor assigned',
    'process.commitment.item3': 'Multi-platform optimization',
    
    // CTA
    'cta.headline1': 'Ready to scale',
    'cta.headline2': 'your visibility?',
    'cta.description': 'Book a 30-minute strategy call. No pitch, just clarity on how we can drive performance for your brand.',
    'cta.button': 'Book Strategy Call',
    'cta.email': 'Or Email Us Directly',
    'cta.trust1.value': '< 24hr',
    'cta.trust1.label': 'First Response',
    'cta.trust2.value': 'No Risk',
    'cta.trust2.label': 'Cancel Anytime',
    'cta.trust3.value': '∞',
    'cta.trust3.label': 'Revisions',
    'cta.copyright': 'Y Creative. All rights reserved.',
  },
  hu: {
    // Header
    'header.cta': 'PROJEKT INDÍTÁSA',
    
    // Hero
    'hero.tagline': 'Vizuális Teljesítmény Ügynökség',
    'hero.headline1': 'Figyelmet vonz.',
    'hero.headline2': 'Lendületet épít.',
    'hero.subheadline': 'Rövid és hosszú formátumú videó szerkesztés hirdetésekhez, kampányokhoz és márka láthatóság növeléséhez optimalizálva.',
    'hero.slogan': 'Mindig kezdd a',
    'hero.slogan.why': 'MIÉRT-tel',
    'hero.cta.book': 'Stratégiai Konzultáció',
    'hero.cta.work': 'Munkáink Megtekintése',
    
    // Proof
    'proof.tagline': 'Teljesítmény',
    'proof.headline1': 'Skálázhatóságra építve,',
    'proof.headline2': 'konverzióra optimalizálva.',
    'proof.description': 'Nem csak szerkesztünk. Vizuális rendszereket tervezünk, amelyek mérhető figyelmet, elköteleződést és növekedést eredményeznek.',
    'proof.metric1.value': '12 óra',
    'proof.metric1.label': 'Sürgős Kiszállítás',
    'proof.metric1.desc': 'Ha gyorsaságra van szükséged',
    'proof.metric2.value': '48-72 óra',
    'proof.metric2.label': 'Standard Kiszállítás',
    'proof.metric2.desc': 'A legtöbb projekt elkészül',
    'proof.capabilities': 'Képességek',
    'proof.cap1': 'Fizetett Közösségi Hirdetések',
    'proof.cap2': 'Márka Kampányok',
    'proof.cap3': 'Termék Bevezetések',
    'proof.cap4': 'Esemény Lefedés',
    'proof.cap5': 'Ajánlás Szerkesztések',
    'proof.cap6': 'Oktatási Sorozatok',
    'proof.cap7': 'Magyarázó Videók',
    'proof.cap8': 'Virális Rövidfilmek',
    
    // Showcase
    'showcase.tagline': 'Kiválasztott Munkák',
    'showcase.headline1': 'Teljesítmény-vezérelt szerkesztések',
    'showcase.headline2': 'amelyek mozgatják a mutatókat.',
    'showcase.project1.title': 'Virális Termékbevezetés',
    'showcase.project1.category': 'Fizetett Közösségi',
    'showcase.project1.metrics': '12M megtekintés • 4.8x ROAS',
    'showcase.project2.title': 'Márka Kampány Sorozat',
    'showcase.project2.category': 'Hosszú Forma',
    'showcase.project2.metrics': '2.3M elérés • 68% befejezés',
    'showcase.project3.title': 'Oktatási Tartalom',
    'showcase.project3.category': 'YouTube',
    'showcase.project3.metrics': '850K feliratkozó • 89% megtartás',
    'showcase.project4.title': 'TikTok Sorozat',
    'showcase.project4.category': 'Rövid Forma',
    'showcase.project4.metrics': '45M megtekintés • 18% elköteleződés',
    'showcase.project5.title': 'SaaS Bemutató Videók',
    'showcase.project5.category': 'Termék',
    'showcase.project5.metrics': '2.1M megtekintés • 34% konverzió növekedés',
    'showcase.project6.title': 'Esemény Kiemelés',
    'showcase.project6.category': 'Vállalati',
    'showcase.project6.metrics': '1.8M megjelenés • 92% pozitív vélemény',
    'showcase.cta': 'Nézd Meg Hogyan Dolgozunk',
    
    // Process
    'process.tagline': 'Rendszerünk',
    'process.headline1': 'Bevált folyamat',
    'process.headline2': 'a teljesítményért.',
    'process.description': 'A stratégiától a kiszállításig minden lépés az egyértelműségre, sebességre és mérhető hatásra lett tervezve.',
    'process.step1.number': '01',
    'process.step1.title': 'Felfedezés',
    'process.step1.desc': 'Miérttel kezdjük. Megértjük céljaidat, közönségedet és KPI-jaidat, hogy megtervezzük a megfelelő vizuális stratégiát.',
    'process.step1.timeline': '1. Nap',
    'process.step2.number': '02',
    'process.step2.title': 'Gyártás Tervezése',
    'process.step2.desc': 'Stratégiai szerkesztési keretrendszer, tempó elemzés és platform optimalizálás az első vágás előtt.',
    'process.step2.timeline': '1-2. Nap',
    'process.step3.number': '03',
    'process.step3.title': 'Szerkesztés és Finomítás',
    'process.step3.desc': 'Precíziós szerkesztés a teljesítményre fókuszálva. Minden képkocka, átmenet és ütem a figyelemre lett tervezve.',
    'process.step3.timeline': '2-4. Nap',
    'process.step4.number': '04',
    'process.step4.title': 'Kiszállítás és Skálázás',
    'process.step4.desc': 'Többformátumú export, platform specifikációk és folyamatos optimalizálás ahogy a tartalmod teljesít.',
    'process.step4.timeline': '4. Nap+',
    'process.commitment': 'Elkötelezettségünk',
    'process.commitment.text': 'Korlátlan módosítás amíg nem tökéletes. 24 órás sürgős kiszállítás elérhető. Bármikor lemondható.',
    'process.commitment.item1': 'Nincs hosszú távú szerződés',
    'process.commitment.item2': 'Dedikált szerkesztő kijelölve',
    'process.commitment.item3': 'Többplatformos optimalizálás',
    
    // CTA
    'cta.headline1': 'Készen állsz a láthatóságod',
    'cta.headline2': 'növelésére?',
    'cta.description': 'Foglalj egy 30 perces stratégiai konzultációt. Nincs reklám, csak tiszta kép arról, hogyan tudjuk növelni márkád teljesítményét.',
    'cta.button': 'Stratégiai Konzultáció',
    'cta.email': 'Vagy Írj Nekünk Emailt',
    'cta.trust1.value': '< 24 óra',
    'cta.trust1.label': 'Első Válasz',
    'cta.trust2.value': 'Nincs Kockázat',
    'cta.trust2.label': 'Bármikor Lemondható',
    'cta.trust3.value': '∞',
    'cta.trust3.label': 'Módosítások',
    'cta.copyright': 'Y Creative. Minden jog fenntartva.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
