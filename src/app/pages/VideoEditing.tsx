import { Link } from "react-router";
import { PageLayout } from "../components/PageLayout";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/SEO";

export function VideoEditing() {
  const { t } = useLanguage();
  return (
    <>
      <SEO 
        title={t('seo.video.title')} 
        description={t('seo.video.description')} 
      />
      <PageLayout 
        title={t('video.title')} 
        subtitle={t('video.tagline')}
      >
      <div className="max-w-4xl space-y-20">
        {/* Slogan & Subheadline */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 bg-gradient-to-b from-purple-700 to-blue-700" />
            <p className="text-2xl text-slate-300 italic">
              Always start with the{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent not-italic font-medium">
                WHY
              </span>
            </p>
          </div>
          
          <p className="text-2xl text-slate-300 leading-relaxed">
            {t('video.subheadline.text')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800/50 p-8 rounded-sm hover:border-blue-900/50 transition-colors group">
              <div className="text-blue-500 mb-6 font-mono text-sm tracking-widest">{t('common.benefit')} 0{i}</div>
              <p className="text-lg text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                {t(`video.benefit${i}`)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="pt-12 border-t border-slate-800">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 rounded-sm border border-slate-800 relative overflow-hidden group">
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors duration-700" />
            
            <div className="relative z-10 space-y-8">
              <p className="text-2xl text-white font-medium max-w-2xl leading-tight">
                {t('video.cta')}
              </p>
              
              <Link 
                to="/start-your-project?service=video-editing"
                className="group px-8 py-4 bg-white text-slate-950 hover:bg-blue-50 transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-sm tracking-wider uppercase font-bold">{t('hero.cta.book')}</span>
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
      </div>
      </PageLayout>
    </>
  );
}
