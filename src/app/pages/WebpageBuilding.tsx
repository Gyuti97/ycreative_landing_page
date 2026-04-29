import { Link } from "react-router";
import { PageLayout } from "../components/PageLayout";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/SEO";

export function WebpageBuilding() {
  const { t } = useLanguage();
  return (
    <>
      <SEO 
        title={t('seo.web.title')} 
        description={t('seo.web.description')} 
      />
      <PageLayout 
        title={t('web.title')} 
        subtitle={t('web.tagline')}
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
            {t('web.subheadline.text')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800/50 p-8 rounded-sm hover:border-purple-900/50 transition-colors group">
              <div className="text-purple-500 mb-6 font-mono text-sm tracking-widest">{t('common.benefit')} 0{i}</div>
              <p className="text-lg text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                {t(`web.benefit${i}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials / Recent Works */}
        <div className="space-y-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-700" />
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{t('proof.recentWorks.tagline')}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: t('proof.recentWorks.sentiment.title'),
                url: 'https://sentiment.hu',
                description: t('proof.recentWorks.sentiment.desc'),
                color: 'from-blue-900 to-slate-900'
              },
              {
                title: t('proof.recentWorks.bigicepdr.title'),
                url: 'https://bigicepdr.hu',
                description: t('proof.recentWorks.bigicepdr.desc'),
                color: 'from-purple-900 to-slate-900'
              },
              {
                title: t('proof.recentWorks.designbyschmidt.title'),
                url: 'https://designbyschmidt.eu',
                description: t('proof.recentWorks.designbyschmidt.desc'),
                color: 'from-slate-800 to-slate-900'
              }
            ].map((work, index) => (
              <div key={index} className="group relative flex flex-col">
                <div className="relative aspect-video bg-slate-950 border border-slate-800 overflow-hidden mb-6 group-hover:border-purple-700 transition-all duration-500">
                  {/* Browser Header */}
                  <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  </div>
                  
                  {/* Image Placeholder with mshots */}
                  <div className="absolute inset-0 top-8">
                    <img 
                      src={`https://s.wordpress.com/mshots/v1/${work.url}?w=800`}
                      alt={work.title}
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                  </div>

                  <div className="absolute inset-0 top-8 p-6 flex flex-col justify-end items-start bg-gradient-to-t from-slate-950/80 to-transparent">
                    <div className="text-xl font-bold text-white mb-1 tracking-tight">{work.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono tracking-wider">{work.url.replace('https://', '')}</div>
                  </div>

                  <div className="absolute inset-0 top-8 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <a 
                      href={work.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-slate-950 text-xs tracking-widest uppercase font-bold hover:bg-purple-50 transition-colors"
                    >
                      {t('proof.visitSite')}
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg text-white mb-2">{work.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-12 border-t border-slate-800">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 rounded-sm border border-slate-800 relative overflow-hidden group">
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-colors duration-700" />
            
            <div className="relative z-10 space-y-8">
              <p className="text-2xl text-white font-medium max-w-2xl leading-tight">
                {t('web.cta')}
              </p>
              
              <Link 
                to="/start-your-project?service=webpage-building"
                className="group px-8 py-4 bg-white text-slate-950 hover:bg-purple-50 transition-all duration-300 flex items-center gap-3"
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

