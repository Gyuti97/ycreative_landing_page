import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { PageLayout } from "../components/PageLayout";
import { SEO } from "../components/SEO";

type FormData = {
  name: string;
  email: string;
  brand: string;
  link: string;
  service: string;
  goal: string;
  project: string;
  budget: string;
  timeline: string;
  source: string;
  consent: boolean;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  brand: "",
  link: "",
  service: "",
  goal: "",
  project: "",
  budget: "",
  timeline: "",
  source: "",
  consent: false,
};

export function StartProject() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      // Map URL params to translation keys or values
      const serviceMap: Record<string, string> = {
        'advertising': t('start.form.service.opt1'),
        'video-editing': t('start.form.service.opt2'),
        'webpage-building': t('start.form.service.opt3'),
        'social-media-editing': t('start.form.service.opt4'),
      };
      if (serviceMap[serviceParam]) {
        setFormData(prev => ({ ...prev, service: serviceMap[serviceParam] }));
      }
    }
  }, [searchParams, t]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final submission to Formspree
      setIsSending(true);
      setError(null);

      const formspreeId = import.meta.env.xpqokzgg;
      
      if (!formspreeId) {
        console.error("Formspree ID is missing. Please add VITE_FORMSPREE_ID to your environment variables.");
        setError(t('start.form.error.missing_id'));
        setIsSending(false);
        return;
      }

      try {
        const response = await fetch(`https://formspree.io/f/xpqokzgg`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Project Inquiry from ${formData.brand}`,
          })
        });

        if (response.ok) {
          setIsSending(false);
          setIsSubmitted(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const data = await response.json();
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (err) {
        setIsSending(false);
        setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again later.');
        console.error("Submission error:", err);
      }
    }
  };

  if (isSubmitted) {
    return (
      <PageLayout title={t('start.success.title')} subtitle={t('start.success.subtitle')}>
        <div className="max-w-2xl space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 bg-gradient-to-b from-purple-700 to-blue-700" />
            <p className="text-2xl text-slate-300">
              {t('start.success.text')}
            </p>
          </div>
          <p className="text-slate-400 italic">
            {t('start.success.secondary')}
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              setFormData(initialFormData);
            }}
            className="px-6 py-3 bg-purple-900 text-white hover:bg-purple-800 transition-all duration-300 uppercase text-sm tracking-widest"
          >
            {t('start.success.back')}
          </button>
        </div>
      </PageLayout>
    );
  }

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

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <p className="text-xs tracking-[0.3em] text-slate-500 uppercase">{t('start.step1.subtitle')}</p>
                  <h3 className="text-3xl text-white font-medium">{t('start.step1.title')}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.name')}</label>
                    <input 
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('start.form.name.placeholder')}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.email')}</label>
                    <input 
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('start.form.email.placeholder')}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.brand')}</label>
                    <input 
                      required
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder={t('start.form.brand.placeholder')}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.link')}</label>
                    <input 
                      type="text"
                      name="link"
                      value={formData.link}
                      onChange={handleInputChange}
                      placeholder={t('start.form.link.placeholder')}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="px-8 py-3 bg-purple-900 text-white hover:bg-purple-800 transition-all duration-300 uppercase text-sm tracking-widest font-bold"
                >
                  {t('start.button.continue')}
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <p className="text-xs tracking-[0.3em] text-slate-500 uppercase">{t('start.step2.subtitle')}</p>
                  <h3 className="text-3xl text-white font-medium">{t('start.step2.title')}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.service')}</label>
                    <select 
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors appearance-none"
                    >
                      <option value="" disabled>{t('start.form.service')}</option>
                      <option value={t('start.form.service.opt1')}>{t('start.form.service.opt1')}</option>
                      <option value={t('start.form.service.opt2')}>{t('start.form.service.opt2')}</option>
                      <option value={t('start.form.service.opt3')}>{t('start.form.service.opt3')}</option>
                      <option value={t('start.form.service.opt4')}>{t('start.form.service.opt4')}</option>
                      <option value={t('start.form.service.opt5')}>{t('start.form.service.opt5')}</option>
                      <option value={t('start.form.service.opt6')}>{t('start.form.service.opt6')}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.goal')}</label>
                    <select 
                      required
                      name="goal"
                      value={formData.goal}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors appearance-none"
                    >
                      <option value="" disabled>{t('start.form.goal')}</option>
                      <option value={t('start.form.goal.opt1')}>{t('start.form.goal.opt1')}</option>
                      <option value={t('start.form.goal.opt2')}>{t('start.form.goal.opt2')}</option>
                      <option value={t('start.form.goal.opt3')}>{t('start.form.goal.opt3')}</option>
                      <option value={t('start.form.goal.opt4')}>{t('start.form.goal.opt4')}</option>
                      <option value={t('start.form.goal.opt5')}>{t('start.form.goal.opt5')}</option>
                      <option value={t('start.form.goal.opt6')}>{t('start.form.goal.opt6')}</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.project')}</label>
                    <textarea 
                      required
                      name="project"
                      rows={4}
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder={t('start.form.project.placeholder')}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.budget')}</label>
                    <input 
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder={t('start.form.budget.placeholder')}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.timeline')}</label>
                    <select 
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors appearance-none"
                    >
                      <option value="" disabled>{t('start.form.timeline')}</option>
                      <option value={t('start.form.timeline.opt1')}>{t('start.form.timeline.opt1')}</option>
                      <option value={t('start.form.timeline.opt2')}>{t('start.form.timeline.opt2')}</option>
                      <option value={t('start.form.timeline.opt3')}>{t('start.form.timeline.opt3')}</option>
                      <option value={t('start.form.timeline.opt4')}>{t('start.form.timeline.opt4')}</option>
                      <option value={t('start.form.timeline.opt5')}>{t('start.form.timeline.opt5')}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-slate-400 uppercase tracking-wider">{t('start.form.source')}</label>
                    <select 
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border border-slate-800 p-4 text-white focus:border-purple-600 outline-none transition-colors appearance-none"
                    >
                      <option value="" disabled>{t('start.form.source')}</option>
                      <option value={t('start.form.source.opt1')}>{t('start.form.source.opt1')}</option>
                      <option value={t('start.form.source.opt2')}>{t('start.form.source.opt2')}</option>
                      <option value={t('start.form.source.opt3')}>{t('start.form.source.opt3')}</option>
                      <option value={t('start.form.source.opt4')}>{t('start.form.source.opt4')}</option>
                      <option value={t('start.form.source.opt5')}>{t('start.form.source.opt5')}</option>
                      <option value={t('start.form.source.opt6')}>{t('start.form.source.opt6')}</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <input 
                        required
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="mt-1.5 w-5 h-5 accent-purple-600"
                      />
                      <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                        {t('start.form.consent')}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-6 pt-8">
                  {error && (
                    <div className="p-4 bg-red-900/20 border border-red-900/50 text-red-400 text-sm">
                      {error}
                    </div>
                  )}
                  <div className="flex items-center gap-6">
                    <button 
                      type="button"
                      disabled={isSending}
                      onClick={() => setStep(1)}
                      className="text-sm tracking-widest text-slate-500 hover:text-white transition-colors uppercase disabled:opacity-50"
                    >
                      {t('start.button.back')}
                    </button>
                    <button 
                      type="submit"
                      disabled={isSending}
                      className="px-8 py-3 bg-purple-900 text-white hover:bg-purple-800 transition-all duration-300 uppercase text-sm tracking-widest font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                    >
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t('start.form.sending')}
                        </>
                      ) : (
                        t('start.button.submit')
                      )}
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-500 max-w-xs leading-tight opacity-60">
                    {t('start.form.privacy.notice')}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

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
