import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hu';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // SEO
    'seo.title': 'Y Creative | Full-Scale Creative Agency',
    'seo.description': 'Y Creative is a full-scale creative agency specializing in performance advertising, video editing, webpage building, and social media management.',
    'seo.keywords': 'creative agency, performance marketing, video editing, web development, social media management, Google Ads, Meta Ads, TikTok Ads',
    'seo.advertising.title': 'Performance Advertising | Y Creative',
    'seo.advertising.description': 'Scale your business with high-performance Google, Meta, and TikTok advertising campaigns.',
    'seo.video.title': 'Professional Video Editing | Y Creative',
    'seo.video.description': 'High-impact video editing for social media, advertising, and brand storytelling.',
    'seo.web.title': 'Webpage Building | Y Creative',
    'seo.web.description': 'Custom, high-converting websites designed to grow your revenue.',
    'seo.social.title': 'Social Media Management | Y Creative',
    'seo.social.description': 'Strategic social media management to build your brand and engage your audience.',
    'seo.start.title': 'Start Your Project | Y Creative',
    'seo.start.description': 'Ready to scale? Fill out the form and let\'s start your creative project.',
    
    // Header
    'header.cta': 'START PROJECT',
    'header.nav.advertising': 'ADVERTISING',
    'header.nav.video': 'VIDEO',
    'header.nav.web': 'WEB',
    'header.nav.social': 'SOCIAL',
    'header.mobile.language': 'Language / Nyelv',
    'header.mobile.en': 'English',
    'header.mobile.hu': 'Magyar',

    // Hero
    'hero.tagline': 'Full-Scale Creative Agency',
    'hero.headline1': 'Scale attention.',
    'hero.headline2': 'Grow revenue.',
    'hero.subheadline': 'One-stop-shop for websites, social media management, and performance advertising across Google, Meta, and TikTok.',
    'hero.slogan': 'Always start with the',
    'hero.slogan.why': 'WHY',
    'hero.cta.book': 'Start Your Project',
    'common.benefit': 'BENEFIT',

    // Proof
    'proof.tagline': 'Proven Results',
    'proof.headline1': 'Real numbers.',
    'proof.headline2': 'Real impact.',
    'proof.description': 'We don’t just make things look pretty. We build creative that moves the needle for your business.',
    'proof.metric1.value': '€12M+',
    'proof.metric1.label': 'Ad Spend Managed',
    'proof.metric1.desc': 'Strategically allocated across Meta, Google, and TikTok for maximum performance.',
    'proof.metric2.value': '4.2x',
    'proof.metric2.label': 'Avg. ROAS',
    'proof.metric2.desc': 'Average return on ad spend across our performance marketing clients.',
    'proof.metric3.value': '500+',
    'platforms.tagline': 'Advertising Platforms',
    'platforms.headline': 'We manage your presence across all major platforms',
    'platforms.google.desc': 'Search, Display, YouTube, Shopping campaigns engineered for maximum ROAS',
    'platforms.meta.desc': 'Facebook & Instagram advertising for precise audience targeting and brand growth',
    'platforms.tiktok.desc': 'Short-form video campaigns designed to capture attention and drive viral growth',
    'proof.recentWorks.tagline': 'Our Recent Works',
    'proof.recentWorks.headline': 'Websites designed by Y Creative',
    'proof.recentWorks.sentiment.title': 'Sentiment.hu',
    'proof.recentWorks.sentiment.desc': 'Bold, artistic web presence for a professional tattoo artist.',
    'proof.recentWorks.bigicepdr.title': 'Bigicepdr.hu',
    'proof.recentWorks.bigicepdr.desc': 'Dynamic, result-oriented platform for automotive repair services.',
    'proof.recentWorks.designbyschmidt.title': 'Designbyschmidt.eu',
    'proof.recentWorks.designbyschmidt.desc': 'Clean, professional portfolio for premium interior design services.',
    'proof.capabilities': 'Core Capabilities',
    'proof.cap1': 'Performance Ads',
    'proof.cap2': 'Conversion Design',
    'proof.cap3': 'Brand Strategy',
    'proof.cap4': 'Video Editing',
    'proof.cap5': 'Web Development',
    'proof.cap6': 'Copywriting',
    'proof.cap7': 'Growth Hacking',
    'proof.cap8': 'Data Analytics',
    'proof.visitSite': 'Visit Site',

    // Showcase
    'showcase.tagline': 'Selected Work',
    'showcase.headline1': 'Creative that',
    'showcase.headline2': 'commands attention.',
    'showcase.description': 'We create high-impact visual content designed to stop the scroll and build lasting brand authority.',
    'showcase.cta': 'WORK WITH US',
    'showcase.project1.title': 'Professional E-commerce',

    // Process
    'process.tagline': 'Our Approach',
    'process.headline1': 'Strategy first.',
    'process.headline2': 'Design second.',
    'process.description': 'We believe that great creative is a waste of money if it isn’t built on a solid strategic foundation.',
    'process.step1.number': '01',
    'process.step1.title': 'Discovery',
    'process.step1.desc': 'We dive deep into your brand, your audience, and your "WHY" to find the core message.',
    'process.step1.timeline': 'Week 1',
    'process.step2.number': '02',
    'process.step2.title': 'Strategy',
    'process.step2.desc': 'We map out the path from where you are to where you want to be with clear objectives.',
    'process.step2.timeline': 'Week 2',
    'process.step3.number': '03',
    'process.step3.title': 'Execution',
    'process.step3.desc': 'Our creative team brings the strategy to life with high-impact visuals and copy.',
    'process.step3.timeline': 'Week 3-4',
    'process.step4.number': '04',
    'process.step4.title': 'Optimization',
    'process.step4.desc': 'We analyze performance and refine the creative to ensure maximum results.',
    'process.step4.timeline': 'Ongoing',
    'process.commitment': 'Our Commitment',
    'process.commitment.text': 'We don’t just deliver assets; we deliver business results through strategic creative.',
    'process.commitment.item1': 'No generic templates',
    'process.commitment.item2': 'Data-driven decisions',
    'process.commitment.item3': 'Direct communication',

    // CTA
    'cta.headline1': 'Ready to start',
    'cta.headline2': 'with your WHY?',
    'cta.description': 'Let’s build something that finally reflects the quality of your brand.',
    'cta.button': 'START YOUR PROJECT',
    'cta.email': 'hello@ycreative.art',
    'cta.trust1.value': '24h',
    'cta.trust1.label': 'Response Time',
    'cta.trust2.value': '100%',
    'cta.trust2.label': 'Dedicated Focus',
    'cta.trust3.value': 'Top 1%',
    'cta.trust3.label': 'Creative Quality',
    'cta.copyright': 'Y Creative Agency. All rights reserved.',

    // Start Project Page
    'start.hero.headline': 'Let’s start with the',
    'start.hero.why': 'WHY',
    'start.hero.subheadline': 'Tell us a little about your project and we’ll come back to you with the best next step for your brand.',
    'start.hero.support': 'Clear process. Strategic thinking. Creative built around results.',
    'start.hero.trust': 'Typically replies within 1–2 business days.',
    
    'start.step1.title': 'Tell us who you are',
    'start.step1.subtitle': 'STEP 1 — CONTACT DETAILS',
    'start.form.name': 'Full name *',
    'start.form.name.placeholder': 'Your full name',
    'start.form.email': 'Email address *',
    'start.form.email.placeholder': 'you@company.com',
    'start.form.brand': 'Company / Brand name *',
    'start.form.brand.placeholder': 'Your company or brand name',
    'start.form.link': 'Website or social media link',
    'start.form.link.placeholder': 'Website, Instagram, LinkedIn, or other link',
    'start.button.continue': 'Continue',

    'start.step2.title': 'Tell us what you need',
    'start.step2.subtitle': 'STEP 2 — PROJECT DETAILS',
    'start.form.service': 'What service are you interested in? *',
    'start.form.service.opt1': 'Advertising',
    'start.form.service.opt2': 'Video Editing',
    'start.form.service.opt3': 'Webpage Building',
    'start.form.service.opt4': 'Social Media Editing',
    'start.form.service.opt5': 'Multiple Services',
    'start.form.service.opt6': 'Not Sure Yet',
    
    'start.form.goal': 'What are you looking to achieve? *',
    'start.form.goal.opt1': 'More leads',
    'start.form.goal.opt2': 'Better brand presence',
    'start.form.goal.opt3': 'Higher conversion rate',
    'start.form.goal.opt4': 'More polished content',
    'start.form.goal.opt5': 'Launching a new business',
    'start.form.goal.opt6': 'I need help defining this',
    
    'start.form.project': 'Tell us about your project *',
    'start.form.project.placeholder': 'What are you building, promoting, or improving? What do you need help with?',
    
    'start.form.budget': 'Estimated budget',
    'start.form.budget.placeholder': 'e.g. €2000 or "Not sure yet"',
    'start.form.budget.opt1': 'Under €500',
    'start.form.budget.opt2': '€500–€1,500',
    'start.form.budget.opt3': '€1,500–€3,000',
    'start.form.budget.opt4': '€3,000–€5,000',
    'start.form.budget.opt5': '€5,000+',
    'start.form.budget.opt6': 'Not sure yet',
    
    'start.form.timeline': 'Preferred timeline',
    'start.form.timeline.opt1': 'ASAP',
    'start.form.timeline.opt2': 'Within 2 weeks',
    'start.form.timeline.opt3': 'Within 1 month',
    'start.form.timeline.opt4': '1–3 months',
    'start.form.timeline.opt5': 'Just exploring',
    
    'start.form.source': 'How did you hear about us?',
    'start.form.source.opt1': 'Instagram',
    'start.form.source.opt2': 'TikTok',
    'start.form.source.opt3': 'Referral',
    'start.form.source.opt4': 'Google',
    'start.form.source.opt5': 'LinkedIn',
    'start.form.source.opt6': 'Other',
    
    'start.form.consent': 'I agree to being contacted regarding my inquiry and understand my details will only be used for project communication. *',
    'start.form.privacy.notice': 'Your data is processed securely and only used for project communication.',
    'start.form.error.missing_id': 'Contact form is currently unavailable. Please email us directly at hello@ycreative.art',
    'start.button.back': 'Back',
    'start.button.submit': 'Submit Inquiry',
    
    'start.reassurance.title': 'No pressure. No generic proposals.',
    'start.reassurance.text': 'Just a clear first conversation around what your brand actually needs.',
    
    'start.success.title': 'Thanks — we’ve got your inquiry.',
    'start.success.subtitle': 'Success',
    'start.success.text': 'We’ll review your project details and get back to you with the best next step.',
    'start.success.secondary': 'If your project is time-sensitive, feel free to mention it in your message.',
    'start.success.back': 'Back to Home',
    'start.process.tagline': 'Process',
    'start.response.tagline': 'Response Time',

    // Advertising Page
    'advertising.title': 'Advertising that makes your brand impossible to ignore.',
    'advertising.tagline': 'Performance Advertising',
    'advertising.subheadline.why': 'Always start with the WHY.',
    'advertising.subheadline.text': 'At Y Creative Agency, we believe the most effective advertising starts with understanding why your audience should care. We create campaigns that do more than attract attention — they build desire, trust, and action.',
    'advertising.benefit1': 'We turn your offer into a message people instantly understand and actually remember.',
    'advertising.benefit2': 'We combine strategy, positioning, and high-impact creative so your ads do not just look professional — they perform with purpose.',
    'advertising.benefit3': 'Every campaign is designed to move the right audience closer to choosing your brand with confidence.',
    'advertising.cta': 'If you want advertising that feels sharper, smarter, and built to convert, let’s create it together.',
    'advertising.platforms': 'Core Platforms',

    // Video Page
    'video.title': 'Video editing that holds attention and drives action.',
    'video.tagline': 'Capture Attention',
    'video.subheadline.why': 'Always start with the WHY.',
    'video.subheadline.text': 'Great video is not just about how it looks — it is about what your audience feels, understands, and does next. At Y Creative Agency, we edit videos that make your brand look elevated, intentional, and impossible to scroll past.',
    'video.benefit1': 'We shape raw footage into clear, polished stories that communicate your value in seconds.',
    'video.benefit2': 'Every cut, transition, and pacing choice is made to keep viewers engaged and emotionally connected to your message.',
    'video.benefit3': 'From ad creatives to brand films and social reels, we create edits that feel professional and work hard for your business.',
    'video.cta': 'If your content deserves more impact, we are ready to turn your footage into something people remember.',
    'video.services': 'Creative Services',

    // Web Page
    'web.title': 'Websites built to impress, reassure, and convert.',
    'web.tagline': 'Build Authority',
    'web.subheadline.why': 'Always start with the WHY.',
    'web.subheadline.text': 'A strong website does not begin with design alone — it begins with understanding why people land on your page and what makes them trust you enough to take the next step. At Y Creative Agency, we build websites that combine clarity, credibility, and conversion.',
    'web.benefit1': 'We create pages that guide visitors naturally through your message instead of overwhelming them with noise.',
    'web.benefit2': 'Every section, headline, and design element is built to strengthen trust and make your brand feel established.',
    'web.benefit3': 'From landing pages to full websites, we turn your online presence into a business asset that works even when you are not.',
    'web.cta': 'If you want a website that finally reflects the quality of your brand, let’s build it the right way.',
    'web.tech': 'Technical Expertise',

    // Social Page
    'social.title': 'Social media content that makes your brand look instantly stronger.',
    'social.tagline': 'Grow Community',
    'social.subheadline.why': 'Always start with the WHY.',
    'social.subheadline.text': 'Social media should not feel random or disposable. It should make your audience understand why your brand matters and why it deserves their attention. At Y Creative Agency, we shape content that looks consistent, polished, and strategically built for growth.',
    'social.benefit1': 'We refine your content so every post feels aligned with your brand instead of disconnected from it.',
    'social.benefit2': 'From reels to visual assets and edited social content, we help your brand show up with clarity, style, and intention.',
    'social.benefit3': 'Better content creates stronger perception — and stronger perception makes your business more desirable, memorable, and trusted.',
    'social.cta': 'If you want your social media presence to feel more professional and more powerful, we are ready to shape it.',
    'social.channels': 'Social Channels',
  },
  hu: {
    // SEO
    'seo.title': 'Y Creative | Teljes Körű Kreatív Ügynökség',
    'seo.description': 'Az Y Creative egy teljes körű kreatív ügynökség, amely teljesítményalapú hirdetésekre, videóvágásra, weboldalkészítésre és közösségi média kezelésre specializálódott.',
    'seo.keywords': 'kreatív ügynökség, teljesítmény marketing, videóvágás, webfejlesztés, közösségi média kezelés, Google Ads, Meta Ads, TikTok Ads',
    'seo.advertising.title': 'Teljesítményalapú Hirdetés | Y Creative',
    'seo.advertising.description': 'Skálázza vállalkozását nagy teljesítményű Google, Meta és TikTok hirdetési kampányokkal.',
    'seo.video.title': 'Professzionális Videóvágás | Y Creative',
    'seo.video.description': 'Nagy hatású videóvágás közösségi médiához, hirdetésekhez és márkaépítéshez.',
    'seo.web.title': 'Weboldalkészítés | Y Creative',
    'seo.web.description': 'Egyedi, magas konverziójú weboldalak, amelyeket a bevétele növelésére terveztünk.',
    'seo.social.title': 'Közösségi Média Kezelés | Y Creative',
    'seo.social.description': 'Stratégiai közösségi média kezelés a márkaépítéshez és a közönség bevonásához.',
    'seo.start.title': 'Projekt Indítása | Y Creative',
    'seo.start.description': 'Készen áll a skálázásra? Töltse ki az űrlapot, és indítsuk el kreatív projektjét.',
    
    // Header
    'header.cta': 'PROJEKT INDÍTÁSA',
    'header.nav.advertising': 'HIRDETÉS',
    'header.nav.video': 'VIDEÓ',
    'header.nav.web': 'WEB',
    'header.nav.social': 'SOCIAL',
    'header.mobile.language': 'Nyelv / Language',
    'header.mobile.en': 'English',
    'header.mobile.hu': 'Magyar',

    // Hero
    'hero.tagline': 'Teljes Körű Kreatív Ügynökség',
    'hero.headline1': 'Figyelmet vonz.',
    'hero.headline2': 'Bevételt növel.',
    'hero.subheadline': 'Minden egy helyen: weboldalak, közösségi média kezelés, és teljesítmény hirdetések Google, Meta és TikTok platformokon.',
    'hero.slogan': 'Mindig kezdd a',
    'hero.slogan.why': 'MIÉRT-tel',
    'hero.cta.book': 'Projekt Indítása',
    'common.benefit': 'ELŐNY',

    // Proof
    'proof.tagline': 'Bizonyított Eredmények',
    'proof.headline1': 'Valódi számok.',
    'proof.headline2': 'Valódi hatás.',
    'proof.description': 'Nem csak szép dolgokat készítünk. Olyan kreatív megoldásokat építünk, amelyek valódi növekedést hoznak a vállalkozásodnak.',
    'proof.metric1.value': '12M €+',
    'proof.metric1.label': 'Kezelt hirdetési keret',
    'proof.metric1.desc': 'Stratégiailag elosztva Meta, Google és TikTok platformokon a maximális teljesítményért.',
    'proof.metric2.value': '4.2x',
    'proof.metric2.label': 'Átlagos ROAS',
    'proof.metric2.desc': 'Átlagos hirdetési megtérülés teljesítményalapú marketing ügyfeleinknél.',
    'proof.metric3.value': '500+',
    'platforms.tagline': 'Hirdetési Platformok',
    'platforms.headline': 'Jelenlétedet kezeljük minden fő platformon',
    'platforms.google.desc': 'Keresési, Display, YouTube, Shopping kampányok maximális ROAS-ra optimalizálva',
    'platforms.meta.desc': 'Facebook & Instagram hirdetések pontos közönség célzással és márkanövekedéssel',
    'platforms.tiktok.desc': 'Rövid videó kampányok figyelemfelkeltésre és virális növekedésre tervezve',
    'proof.recentWorks.tagline': 'Legutóbbi Munkáink',
    'proof.recentWorks.headline': 'Y Creative által tervezett weboldalak',
    'proof.recentWorks.sentiment.title': 'Sentiment.hu',
    'proof.recentWorks.sentiment.desc': 'Merész, művészi webes jelenlét egy professzionális tetoválóművész számára.',
    'proof.recentWorks.bigicepdr.title': 'Bigicepdr.hu',
    'proof.recentWorks.bigicepdr.desc': 'Dinamikus, eredményorientált platform autójavító szolgáltatásokhoz.',
    'proof.recentWorks.designbyschmidt.title': 'Designbyschmidt.eu',
    'proof.recentWorks.designbyschmidt.desc': 'Letisztult, professzionális portfólió prémium belsőépítészeti tervezéshez.',
    'proof.capabilities': 'Fő Kompetenciák',
    'proof.cap1': 'Teljesítmény Hirdetések',
    'proof.cap2': 'Konverziós Dizájn',
    'proof.cap3': 'Márkastratégia',
    'proof.cap4': 'Videóvágás',
    'proof.cap5': 'Webfejlesztés',
    'proof.cap6': 'Szövegírás',
    'proof.cap7': 'Growth Hacking',
    'proof.cap8': 'Adatelemzés',
    'proof.visitSite': 'Weboldal megtekintése',

    // Showcase
    'showcase.tagline': 'Válogatott Munkáink',
    'showcase.headline1': 'Kreatív, amely',
    'showcase.headline2': 'figyelmet követel.',
    'showcase.description': 'Nagy hatású vizuális tartalmakat készítünk, amelyek megállítják a görgetést és tartós márka-tekintélyt építenek.',
    'showcase.cta': 'DOLGOZZ VELÜNK',
    'showcase.project1.title': 'Professzionális E-kereskedelem',

    // Process
    'process.tagline': 'A Mi Módszerünk',
    'process.headline1': 'Előbb stratégia.',
    'process.headline2': 'Aztán dizájn.',
    'process.description': 'Hisszük, hogy a nagyszerű kreatív csak pénzkidobás, ha nem szilárd stratégiai alapokra épül.',
    'process.step1.number': '01',
    'process.step1.title': 'Felfedezés',
    'process.step1.desc': 'Mélyre ásunk a márkádban, a közönségedben és a "MIÉRT"-edben, hogy megtaláljuk a központi üzenetet.',
    'process.step1.timeline': '1. hét',
    'process.step2.number': '02',
    'process.step2.title': 'Stratégia',
    'process.step2.desc': 'Világos célokkal térképezzük fel az utat onnan, ahol most tartasz, oda, ahová el akarsz jutni.',
    'process.step2.timeline': '2. hét',
    'process.step3.number': '03',
    'process.step3.title': 'Megvalósítás',
    'process.step3.desc': 'Kreatív csapatunk életre kelti a stratégiát nagy hatású vizuális elemekkel és szövegekkel.',
    'process.step3.timeline': '3-4. hét',
    'process.step4.number': '04',
    'process.step4.title': 'Optimalizálás',
    'process.step4.desc': 'Elemezzük a teljesítményt és finomítjuk a kreatívokat a maximális eredmény érdekében.',
    'process.step4.timeline': 'Folyamatos',
    'process.commitment': 'Elkötelezettségünk',
    'process.commitment.text': 'Nem csak eszközöket adunk át; üzleti eredményeket szállítunk stratégiai kreatív megoldásokkal.',
    'process.commitment.item1': 'Nincsenek sablonok',
    'process.commitment.item2': 'Adatvezérelt döntések',
    'process.commitment.item3': 'Közvetlen kommunikáció',

    // CTA
    'cta.headline1': 'Készen állsz a',
    'cta.headline2': 'MIÉRT-tel kezdeni?',
    'cta.description': 'Építsünk valamit, ami végre valóban tükrözi a márkád minőségét.',
    'cta.button': 'PROJEKT INDÍTÁSA',
    'cta.email': 'hello@ycreative.art',
    'cta.trust1.value': '24ó',
    'cta.trust1.label': 'Válaszidő',
    'cta.trust2.value': '100%',
    'cta.trust2.label': 'Dedikált fókusz',
    'cta.trust3.value': 'Top 1%',
    'cta.trust3.label': 'Kreatív minőség',
    'cta.copyright': 'Y Creative Agency. Minden jog fenntartva.',

    // Start Project Page
    'start.hero.headline': 'Kezdjük a',
    'start.hero.why': 'MIÉRT-tel',
    'start.hero.subheadline': 'Mesélj röviden a projektedről, és visszajelzünk a márkád számára legjobb következő lépéssel.',
    'start.hero.support': 'Tiszta folyamat. Stratégiai gondolkodás. Eredményre épített kreatív.',
    'start.hero.trust': 'Általában 1–2 munkanapon belül válaszolunk.',
    
    'start.step1.title': 'Mondd el, ki vagy',
    'start.step1.subtitle': '1. LÉPÉS — KAPCSOLATI ADATOK',
    'start.form.name': 'Teljes név *',
    'start.form.name.placeholder': 'Teljes neved',
    'start.form.email': 'E-mail cím *',
    'start.form.email.placeholder': 'te@ceged.hu',
    'start.form.brand': 'Cég / Márkanév *',
    'start.form.brand.placeholder': 'Céged vagy márkád neve',
    'start.form.link': 'Weboldal vagy social media link',
    'start.form.link.placeholder': 'Weboldal, Instagram, LinkedIn vagy más link',
    'start.button.continue': 'Tovább',

    'start.step2.title': 'Mondd el, mire van szükséged',
    'start.step2.subtitle': '2. LÉPÉS — PROJEKTADATOK',
    'start.form.service': 'Melyik szolgáltatás érdekel? *',
    'start.form.service.opt1': 'Hirdetés',
    'start.form.service.opt2': 'Videóvágás',
    'start.form.service.opt3': 'Weboldal készítés',
    'start.form.service.opt4': 'Social media szerkesztés',
    'start.form.service.opt5': 'Több szolgáltatás',
    'start.form.service.opt6': 'Még nem vagyok benne biztos',
    
    'start.form.goal': 'Mit szeretnél elérni? *',
    'start.form.goal.opt1': 'Több érdeklődő',
    'start.form.goal.opt2': 'Erősebb márkajelenlét',
    'start.form.goal.opt3': 'Magasabb konverzió',
    'start.form.goal.opt4': 'Igényesebb tartalom',
    'start.form.goal.opt5': 'Új vállalkozás indítása',
    'start.form.goal.opt6': 'Ebben segítségre van szükségem',
    
    'start.form.project': 'Mesélj a projektedről *',
    'start.form.project.placeholder': 'Min dolgozol jelenleg, mit szeretnél fejleszteni vagy elindítani, és miben van szükséged segítségre?',
    
    'start.form.budget': 'Becsült költségkeret',
    'start.form.budget.placeholder': 'pl. 2000 € vagy "Még nem tudom"',
    'start.form.budget.opt1': '500 € alatt',
    'start.form.budget.opt2': '500–1 500 €',
    'start.form.budget.opt3': '1 500–3 000 €',
    'start.form.budget.opt4': '3 000–5 000 €',
    'start.form.budget.opt5': '5 000 € felett',
    'start.form.budget.opt6': 'Még nem tudom',
    
    'start.form.timeline': 'Preferált időzítés',
    'start.form.timeline.opt1': 'Azonnal',
    'start.form.timeline.opt2': '2 héten belül',
    'start.form.timeline.opt3': '1 hónapon belül',
    'start.form.timeline.opt4': '1–3 hónapon belül',
    'start.form.timeline.opt5': 'Egyelőre csak tájékozódom',
    
    'start.form.source': 'Hol hallottál rólunk?',
    'start.form.source.opt1': 'Instagram',
    'start.form.source.opt2': 'TikTok',
    'start.form.source.opt3': 'Ajánlás',
    'start.form.source.opt4': 'Google',
    'start.form.source.opt5': 'LinkedIn',
    'start.form.source.opt6': 'Egyéb',
    
    'start.form.consent': 'Elfogadom, hogy az Y Creative a megadott adataim alapján kapcsolatba lépjen velem az érdeklődésem kapcsán, és az adatokat kizárólag projektkommunikáció céljából használja fel. *',
    'start.form.privacy.notice': 'Adatait biztonságosan kezeljük, és kizárólag projektkommunikációra használjuk fel.',
    'start.form.error.missing_id': 'A kapcsolatfelvételi űrlap jelenleg nem érhető el. Kérjük, írjon nekünk közvetlenül a hello@ycreative.art címre.',
    'start.button.back': 'Vissza',
    'start.button.submit': 'Érdeklődés elküldése',
    
    'start.reassurance.title': 'Nincs nyomás. Nincsenek sablonajánlatok.',
    'start.reassurance.text': 'Csak egy tiszta első beszélgetés arról, mire van valóban szüksége a márkádnak.',
    
    'start.success.title': 'Köszönjük, megkaptuk az érdeklődésedet.',
    'start.success.subtitle': 'Siker',
    'start.success.text': 'Átnézzük a projekted részleteit, és a legjobb következő lépéssel jelentkezünk.',
    'start.success.secondary': 'Ha sürgős a projekt, ezt nyugodtan jelezd az üzenetben.',
    'start.success.back': 'Vissza a főoldalra',
    'start.process.tagline': 'Folyamat',
    'start.response.tagline': 'Válaszidő',

    // Advertising Page
    'advertising.title': 'Hirdetések, amelyek mellett lehetetlen szó nélkül továbblépni.',
    'advertising.tagline': 'Teljesítmény Hirdetés',
    'advertising.subheadline.why': 'Always start with the WHY.',
    'advertising.subheadline.text': 'Az Y Creative Agency-nél hisszük, hogy a valóban hatékony hirdetés ott kezdődik, hogy megértjük, miért fontos a márkád a közönséged számára. Olyan kampányokat alkotunk, amelyek nemcsak figyelmet szereznek, hanem vágyat, bizalmat és cselekvést is kiváltanak.',
    'advertising.benefit1': 'Az ajánlatodat olyan üzenetté formáljuk, amelyet az emberek azonnal megértenek és meg is jegyeznek.',
    'advertising.benefit2': 'A stratégiát, a pozicionálást és az erős kreatív megoldásokat úgy kapcsoljuk össze, hogy a hirdetéseid ne csak professzionális hatásúak legyenek, hanem valódi céllal működjenek.',
    'advertising.benefit3': 'Minden kampányunkat úgy építjük fel, hogy a megfelelő közönséget magabiztosan közelebb vigye a márkád választásához.',
    'advertising.cta': 'Ha olyan hirdetéseket szeretnél, amelyek élesebbek, tudatosabbak és valódi konverzióra készülnek, dolgozzunk együtt.',
    'advertising.platforms': 'Alapplatformok',

    // Video Page
    'video.title': 'Videóvágás, amely megtartja a figyelmet és cselekvésre ösztönöz.',
    'video.tagline': 'Figyelemfelkeltés',
    'video.subheadline.why': 'Always start with the WHY.',
    'video.subheadline.text': 'Egy erős videó nemcsak attól jó, ahogy kinéz, hanem attól is, amit a néző érez, megért és ezután tesz. Az Y Creative Agency-nél olyan videókat vágunk, amelyek emelik a márkád színvonalát, tudatos benyomást keltenek, és lehetetlenné teszik a továbbgörgetést.',
    'video.benefit1': 'A nyersanyagból letisztult, erős történetet formálunk, amely másodpercek alatt közvetíti az értékedet.',
    'video.benefit2': 'Minden vágás, átmenet és ritmusváltás azt szolgálja, hogy a néző végig figyeljen, és kapcsolódjon az üzenetedhez.',
    'video.benefit3': 'Legyen szó reklámvideóról, brand filmről vagy social reelről, olyan anyagokat készítünk, amelyek professzionális érzetűek és valóban dolgoznak a vállalkozásodért.',
    'video.cta': 'Ha a tartalmad nagyobb hatást érdemel, mi készen állunk arra, hogy a felvételeidből emlékezetes anyagot készítsünk.',
    'video.services': 'Kreatív Szolgáltatások',

    // Web Page
    'web.title': 'Weboldalak, amelyek lenyűgöznek, bizalmat építenek és ügyfelet hoznak.',
    'web.tagline': 'Tekintélyépítés',
    'web.subheadline.why': 'Always start with the WHY.',
    'web.subheadline.text': 'Egy erős weboldal nem csupán dizájnnal kezdődik, hanem azzal, hogy megértjük, miért érkezik a látogató az oldaladra, és mi fogja őt meggyőzni arról, hogy a következő lépést veled tegye meg. Az Y Creative Agency-nél olyan weboldalakat készítünk, amelyek egyszerre világosak, hitelesek és konverzióra épülnek.',
    'web.benefit1': 'Olyan oldalakat tervezünk, amelyek természetesen vezetik végig a látogatót az üzeneteden, ahelyett hogy túlterhelnék információval.',
    'web.benefit2': 'Minden szekciót, címsort és vizuális elemet azért alakítunk ki, hogy erősítse a bizalmat és megalapozott, professzionális márkaérzetet adjon.',
    'web.benefit3': 'Landing page-től a teljes weboldalig az online jelenlétedet valódi üzleti eszközzé alakítjuk, amely akkor is dolgozik érted, amikor te éppen nem.',
    'web.cta': 'Ha olyan weboldalt szeretnél, amely végre valóban tükrözi a márkád minőségét, építsük fel jól.',
    'web.tech': 'Technikai Szakértelem',

    // Social Page
    'social.title': 'Social media tartalom, amely azonnal erősebbé teszi a márkádat.',
    'social.tagline': 'Közösségépítés',
    'social.subheadline.why': 'Always start with the WHY.',
    'social.subheadline.text': 'A social media jelenlét nem lehet esetleges vagy felejthető. A célja az, hogy a közönséged megértse, miért fontos a márkád, és miért érdemes figyelmet adnia neked. Az Y Creative Agency-nél olyan tartalmakat formálunk, amelyek egységesek, igényesek és tudatosan építik a növekedést.',
    'social.benefit1': 'Úgy finomítjuk a tartalmaidat, hogy minden poszt a márkáddal összhangban álljon, ne pedig különálló elemnek hasson.',
    'social.benefit2': 'Reelektől a vizuális elemekig és szerkesztett social tartalmakig segítünk abban, hogy a márkád tisztán, stílusosan és tudatosan jelenjen meg.',
    'social.benefit3': 'A jobb tartalom erősebb márkaérzetet épít, az erősebb márkaérzet pedig kívánatosabbá, emlékezetesebbé és hitelesebbé teszi a vállalkozásodat.',
    'social.cta': 'Ha azt szeretnéd, hogy a social media jelenléted professzionálisabbnak és erősebbnek hasson, mi készen állunk formát adni neki.',
    'social.channels': 'Közösségi Csatornák',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ycreative_language');
      return (saved === 'en' || saved === 'hu') ? saved : 'en';
    } catch (e) {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('ycreative_language', lang);
    } catch (e) {
      console.error('Failed to save language preference:', e);
    }
  };

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
