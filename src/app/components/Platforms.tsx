import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function Platforms() {
  const { t } = useLanguage();

  const platforms = [
    {
      name: 'Google Ads',
      path: '/advertising',
      description: t('platforms.google.desc'),
      icon: (
        <svg className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      name: 'Meta Ads',
      path: '/advertising',
      description: t('platforms.meta.desc'),
      icon: (
        <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      )
    },
    {
      name: 'TikTok Ads',
      path: '/advertising',
      description: t('platforms.tiktok.desc'),
      icon: (
        <svg className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-700" />
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">
              {t('platforms.tagline')}
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-blue-700 to-purple-700" />
          </div>
          <h2 className="text-4xl tracking-tight text-white">
            {t('platforms.headline')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Link
              key={index}
              to={platform.path}
              className="group relative bg-slate-900 border border-slate-800 p-8 hover:border-purple-700 transition-all duration-300 block"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="mb-6">{platform.icon}</div>

              <h3 className="text-xl text-white mb-3 uppercase tracking-wide">
                {platform.name}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {platform.description}
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
