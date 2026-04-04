import { useLanguage } from "../context/LanguageContext";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      number: t('process.step1.number'),
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
      timeline: t('process.step1.timeline')
    },
    {
      number: t('process.step2.number'),
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
      timeline: t('process.step2.timeline')
    },
    {
      number: t('process.step3.number'),
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
      timeline: t('process.step3.timeline')
    },
    {
      number: t('process.step4.number'),
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
      timeline: t('process.step4.timeline')
    }
  ];

  return (
    <section id="process" className="py-32 bg-slate-900">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-700" />
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{t('process.tagline')}</span>
          </div>
          <h2 className="text-5xl tracking-tight text-white mb-6">
            {t('process.headline1')}<br />
            {t('process.headline2')}
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t('process.description')}
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-auto-rows-fr gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative h-full">
              {/* Connector line - desktop only */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-purple-700/30 to-blue-700/30 -translate-y-1/2" />
              )}

              <div className="relative h-full bg-slate-950 border border-slate-800 p-8 group-hover:border-purple-700 transition-all duration-300">
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Number */}
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-6xl text-slate-800 group-hover:text-purple-900/50 transition-colors duration-300">
                    {step.number}
                  </span>
                  <span className="text-xs tracking-wider text-slate-500 uppercase">
                    {step.timeline}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
