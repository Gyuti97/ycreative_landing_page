import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                             linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-blue-950/20" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-5xl lg:text-6xl tracking-tight text-white mb-6">
              {t('cta.headline1')}<br />
              {t('cta.headline2')}
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/start-your-project"
                className="group px-8 py-4 bg-purple-900 text-white hover:bg-purple-800 transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-sm tracking-wider uppercase">{t('cta.button')}</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a 
                href="mailto:hello@ycreative.art" 
                className="text-sm tracking-wider text-slate-400 hover:text-purple-400 transition-colors uppercase"
              >
                {t('cta.email')}
              </a>
            </div>
          </div>

          {/* Trust signals */}
          <div className="pt-12 border-t border-slate-800">
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl text-white mb-2">{t('cta.trust1.value')}</div>
                <div className="text-[10px] md:text-xs tracking-wider text-slate-500 uppercase">{t('cta.trust1.label')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl text-white mb-2">{t('cta.trust2.value')}</div>
                <div className="text-[10px] md:text-xs tracking-wider text-slate-500 uppercase">{t('cta.trust2.label')}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl text-white mb-2">{t('cta.trust3.value')}</div>
                <div className="text-[10px] md:text-xs tracking-wider text-slate-500 uppercase">{t('cta.trust3.label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-32 pt-12 border-t border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-900 to-blue-900 rounded-sm flex items-center justify-center">
                <span className="text-white flex items-center leading-none">
                  <span className="text-base opacity-60">[</span>
                  <span className="text-2xl mx-1 tracking-tight">Y</span>
                  <span className="text-base opacity-60">]</span>
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm tracking-wider text-white uppercase">Y Creative</span>
                <span className="text-xs text-slate-500 italic mt-1">
                  {t('hero.slogan')}{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent not-italic">
                    {t('hero.slogan.why')}
                  </span>
                </span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} {t('cta.copyright')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
