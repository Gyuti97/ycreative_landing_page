import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950">
      {/* Grid overlay - subtle */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                             linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-slate-950 to-blue-950/30" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-4xl">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-700" />
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{t('hero.tagline')}</span>
          </div>

          {/* Main headline */}
          <h1 className={`${language === 'hu' ? 'text-[clamp(2.5rem,7vw,6.5rem)]' : 'text-[clamp(3rem,8vw,7rem)]'} leading-[0.95] tracking-tight text-white mb-8`}>
            {t('hero.headline1')}<br />
            {t('hero.headline2')}
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-slate-400 max-w-2xl mb-4 leading-relaxed">
            {t('hero.subheadline')}
          </p>

          {/* Slogan */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-12 w-1 bg-gradient-to-b from-purple-700 to-blue-700" />
            <p className="text-2xl text-slate-300 italic">
              {t('hero.slogan')}{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent not-italic font-medium">
                {t('hero.slogan.why')}
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <Link 
              to="/start-your-project"
              className="group px-8 py-4 bg-purple-900 text-white hover:bg-purple-800 transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-sm tracking-wider uppercase">{t('hero.cta.book')}</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient accent - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent opacity-50" />
    </section>
  );
}
