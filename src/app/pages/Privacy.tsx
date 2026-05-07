import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/SEO";
import { motion } from "motion/react";
import { Link } from "react-router";

export function Privacy() {
  const { t } = useLanguage();

  const sections = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-24">
      <SEO title={t('footer.privacy')} />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-700" />
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase font-mono">legal</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t('privacy.title')}
          </h1>

          <p className="text-xs text-slate-500 font-mono mb-12">
            {t('privacy.last_updated')}
          </p>

          <div className="space-y-12">
            {sections.map((num) => (
              <div key={num} className="group">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-3 group-hover:text-purple-400 transition-colors">
                  {t(`privacy.section.${num}.title`)}
                </h2>
                <div className="text-slate-400 leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {t(`privacy.section.${num}.content`)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="h-px w-full bg-slate-900 my-16" />
          
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-purple-400 transition-colors group"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t('privacy.back')}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
