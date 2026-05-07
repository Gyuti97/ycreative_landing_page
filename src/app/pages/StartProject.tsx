import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { PageLayout } from "../components/PageLayout";
import { SEO } from "../components/SEO";

export function StartProject() {
  const { t } = useLanguage();

  return (
    <>
      <SEO 
        title={t('seo.start.title')} 
        description={t('seo.start.description')} 
      />
      <PageLayout 
      title={
        <>
          {t('start.hero.headline')}{' '}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent italic">
            {t('start.hero.why')}
          </span>
        </>
      }
      subtitle={t('start.hero.subheadline')}
    >
      <div className="max-w-4xl space-y-12">
        {/* Support & Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-slate-800">
          <div className="space-y-2">
            <p className="text-sm tracking-widest text-purple-500 uppercase font-mono">{t('start.process.tagline')}</p>
            <p className="text-lg text-slate-300">{t('start.hero.support')}</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm tracking-widest text-blue-500 uppercase font-mono">{t('start.response.tagline')}</p>
            <p className="text-lg text-slate-300">{t('start.hero.trust')}</p>
          </div>
        </div>

        {/* Contact CTA instead of Form */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-sm space-y-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-48 h-48">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="absolute -right-32 -top-32 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <h3 className="text-3xl md:text-4xl text-white font-bold tracking-tight">
                {t('start.cta.title')}
              </h3>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                {t('start.cta.description')}
              </p>
            </div>

            <ul className="space-y-4 relative z-10">
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className="flex items-start gap-4 text-slate-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                  <span className="text-sm md:text-base">{t(`start.cta.item${num}`)}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 pt-4 relative z-10">
              <a 
                href="mailto:hello@ycreative.art"
                className="w-full sm:w-auto px-10 py-5 bg-purple-900 text-white hover:bg-purple-800 transition-all duration-300 uppercase text-xs tracking-[0.2em] font-bold text-center rounded-sm"
              >
                {t('start.cta.email_btn')}
              </a>
              
              <div className="flex flex-col items-center lg:items-start gap-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">{t('start.cta.call_btn')}</span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-2">
                  <a 
                    href="tel:+36303737451"
                    className="text-xl text-white hover:text-purple-400 font-medium transition-colors"
                  >
                    {t('start.cta.phone_val')}
                  </a>
                  <a 
                    href="tel:+36308263994"
                    className="text-xl text-white hover:text-purple-400 font-medium transition-colors"
                  >
                    {t('start.cta.phone_val2')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reassurance Block */}
        <div className="pt-20 border-t border-slate-800">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 rounded-sm border border-slate-800 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-colors duration-700" />
            <div className="relative z-10 space-y-4">
              <h4 className="text-2xl text-white font-medium">{t('start.reassurance.title')}</h4>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                {t('start.reassurance.text')}
              </p>
            </div>
          </div>
        </div>
      </div>
      </PageLayout>
    </>
  );
}
