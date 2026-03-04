import { useLanguage } from "../context/LanguageContext";

export function Proof() {
  const { t } = useLanguage();

  const metrics = [
    {
      value: t('proof.metric1.value'),
      label: t('proof.metric1.label'),
      description: t('proof.metric1.desc')
    },
    {
      value: t('proof.metric2.value'),
      label: t('proof.metric2.label'),
      description: t('proof.metric2.desc')
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
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{t('proof.tagline')}</span>
          </div>
          <h2 className="text-5xl tracking-tight text-white mb-6">
            {t('proof.headline1')}<br />
            {t('proof.headline2')}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t('proof.description')}
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="group relative bg-slate-950 p-8 border border-slate-800 hover:border-purple-700 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="text-5xl text-white mb-2">{metric.value}</div>
              <div className="text-sm tracking-wider text-white uppercase mb-1">{metric.label}</div>
              <div className="text-xs text-slate-500">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="bg-slate-950 border border-slate-800 p-12">
          <h3 className="text-xs tracking-[0.2em] text-slate-400 uppercase mb-8">{t('proof.capabilities')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 cursor-pointer"
              >
                <div className="w-2 h-2 bg-purple-700 mt-2 transition-all duration-300 group-hover:bg-blue-700" />
                <span className="text-base text-slate-300 group-hover:text-purple-400 transition-colors duration-300 uppercase tracking-wide">
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
