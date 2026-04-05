import { useLanguage } from "../context/LanguageContext";

export function Proof() {
  const { t } = useLanguage();

  const recentWorks = [
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
    }
  ];

  const capabilities = [
    t('proof.cap1'),
    t('proof.cap2'),
    t('proof.cap3'),
    t('proof.cap4'),
    t('proof.cap5'),
    t('proof.cap6'),
    t('proof.cap7'),
    t('proof.cap8')
  ];

  return (
    <section className="py-32 bg-slate-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-700" />
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{t('proof.recentWorks.tagline')}</span>
          </div>
          <h2 className="text-5xl tracking-tight text-white mb-6">
            {t('proof.recentWorks.headline')}
          </h2>
        </div>

        {/* Recent Works grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {recentWorks.map((work, index) => (
            <div 
              key={index}
              className="group relative flex flex-col"
            >
              {/* Browser Mockup */}
              <div className="relative aspect-video bg-slate-950 border border-slate-800 overflow-hidden mb-6 group-hover:border-purple-700 transition-all duration-500">
                {/* Browser Header */}
                <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="ml-4 h-4 w-32 bg-slate-800 rounded-sm" />
                </div>
                
                {/* Content Placeholder */}
                <div className="absolute inset-0 top-8 overflow-hidden">
                  <img 
                    src={`https://s.wordpress.com/mshots/v1/${work.url}?w=800`}
                    alt={work.title}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>

                <div className="absolute inset-0 top-8 p-8 flex flex-col justify-end items-start bg-gradient-to-t from-slate-950/80 to-transparent">
                  <div className="text-2xl font-bold text-white mb-1 tracking-tight">{work.title}</div>
                  <div className="text-xs text-slate-400 font-mono">{work.url.replace('https://', '')}</div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
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

              {/* Text Content */}
              <div>
                <h3 className="text-xl text-white mb-2">{work.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="bg-slate-950 border border-slate-800 p-8 md:p-12">
          <h3 className="text-xs tracking-[0.2em] text-slate-400 uppercase mb-8">{t('proof.capabilities')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="group flex items-center gap-4 cursor-pointer"
              >
                <div className="w-1.5 h-1.5 bg-purple-700 transition-all duration-300 group-hover:bg-blue-700 flex-shrink-0" />
                <span className="text-sm md:text-base text-slate-300 group-hover:text-purple-400 transition-colors duration-300 uppercase tracking-wide">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
