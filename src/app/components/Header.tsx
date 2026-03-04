import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-900 to-blue-900 rounded-sm flex items-center justify-center">
                <span className="text-white flex items-center leading-none">
                  <span className="text-base opacity-60">[</span>
                  <span className="text-2xl mx-1 tracking-tight">Y</span>
                  <span className="text-base opacity-60">]</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm tracking-wider text-white uppercase">Y Creative</span>
            </div>
          </div>

          {/* Right side: Language switcher and CTA */}
          <div className="flex items-center gap-4">
            {/* Language Switcher - Slider */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-sm overflow-hidden">
              <button
                onClick={() => setLanguage('en')}
                className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-gradient-to-br from-purple-900 to-blue-900' 
                    : 'hover:bg-slate-800'
                }`}
              >
                <span className={`text-white flex items-center leading-none transition-colors ${
                  language === 'en' ? 'opacity-100' : 'opacity-40'
                }`}>
                  <span className="text-base opacity-60">[</span>
                  <span className="text-lg mx-0.5 tracking-tight">EN</span>
                  <span className="text-base opacity-60">]</span>
                </span>
              </button>
              
              <div className="w-px h-6 bg-slate-800" />
              
              <button
                onClick={() => setLanguage('hu')}
                className={`w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                  language === 'hu' 
                    ? 'bg-gradient-to-br from-purple-900 to-blue-900' 
                    : 'hover:bg-slate-800'
                }`}
              >
                <span className={`text-white flex items-center leading-none transition-colors ${
                  language === 'hu' ? 'opacity-100' : 'opacity-40'
                }`}>
                  <span className="text-base opacity-60">[</span>
                  <span className="text-lg mx-0.5 tracking-tight">HU</span>
                  <span className="text-base opacity-60">]</span>
                </span>
              </button>
            </div>

            {/* CTA */}
            <button className="px-6 py-2.5 bg-purple-900 text-white text-sm tracking-wide hover:bg-purple-800 transition-colors duration-200">
              {t('header.cta')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}