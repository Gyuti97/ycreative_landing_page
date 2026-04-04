import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t('header.nav.advertising'), path: '/advertising' },
    { name: t('header.nav.video'), path: '/video-editing' },
    { name: t('header.nav.web'), path: '/webpage-building' },
    { name: t('header.nav.social'), path: '/social-media' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-slate-950 border-b border-slate-800' 
          : scrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800'
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-50">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-900 to-blue-900 rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white flex items-center leading-none">
                  <span className="text-sm md:text-base opacity-60">[</span>
                  <span className="text-xl md:text-2xl mx-1 tracking-tight">Y</span>
                  <span className="text-sm md:text-base opacity-60">]</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs md:text-sm tracking-wider text-white uppercase font-medium">Y Creative</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-purple-500' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side: Language switcher and CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-sm overflow-hidden">
              <button
                onClick={() => setLanguage('en')}
                className={`w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-gradient-to-br from-purple-900 to-blue-900' 
                    : 'hover:bg-slate-800'
                }`}
              >
                <span className={`text-white text-xs font-bold transition-colors ${
                  language === 'en' ? 'opacity-100' : 'opacity-40'
                }`}>
                  EN
                </span>
              </button>
              
              <div className="w-px h-4 bg-slate-800" />
              
              <button
                onClick={() => setLanguage('hu')}
                className={`w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                  language === 'hu' 
                    ? 'bg-gradient-to-br from-purple-900 to-blue-900' 
                    : 'hover:bg-slate-800'
                }`}
              >
                <span className={`text-white text-xs font-bold transition-colors ${
                  language === 'hu' ? 'opacity-100' : 'opacity-40'
                }`}>
                  HU
                </span>
              </button>
            </div>

            {/* CTA */}
            <Link 
              to="/start-your-project"
              className="px-6 py-2.5 bg-purple-900 text-white text-sm tracking-wide hover:bg-purple-800 transition-colors duration-200"
            >
              {t('header.cta')}
            </Link>
          </div>

          {/* Mobile Language Switcher (Visible in Header) */}
          <div className="lg:hidden flex items-center bg-slate-900 border border-slate-800 rounded-sm overflow-hidden mr-2 z-50">
            <button
              onClick={() => setLanguage('en')}
              className={`w-9 h-9 flex items-center justify-center transition-all duration-300 ${
                language === 'en' 
                  ? 'bg-gradient-to-br from-purple-900 to-blue-900' 
                  : 'hover:bg-slate-800'
              }`}
            >
              <span className={`text-white text-[10px] font-bold transition-colors ${
                language === 'en' ? 'opacity-100' : 'opacity-40'
              }`}>
                EN
              </span>
            </button>
            
            <div className="w-px h-4 bg-slate-800" />
            
            <button
              onClick={() => setLanguage('hu')}
              className={`w-9 h-9 flex items-center justify-center transition-all duration-300 ${
                language === 'hu' 
                  ? 'bg-gradient-to-br from-purple-900 to-blue-900' 
                  : 'hover:bg-slate-800'
              }`}
            >
              <span className={`text-white text-[10px] font-bold transition-colors ${
                language === 'hu' ? 'opacity-100' : 'opacity-40'
              }`}>
                HU
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden z-50 p-2 transition-all duration-300 rounded-sm ${
              mobileMenuOpen 
                ? 'bg-slate-800 text-white border border-slate-700' 
                : 'text-white hover:text-purple-400'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950 z-40 lg:hidden transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-6 pb-12">
          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-8 mb-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl tracking-widest uppercase font-light transition-colors ${
                  location.pathname === link.path 
                    ? 'text-purple-500' 
                    : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-8">
            {/* Mobile Language Switcher */}
            <div className="flex flex-col gap-4">
              <span className="text-xs tracking-[0.2em] text-slate-500 uppercase">{t('header.mobile.language')}</span>
              <div className="flex gap-4">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-3 rounded-sm border transition-all ${
                    language === 'en' 
                      ? 'bg-purple-900 border-purple-700 text-white' 
                      : 'border-slate-800 text-slate-400'
                  }`}
                >
                  {t('header.mobile.en')}
                </button>
                <button
                  onClick={() => setLanguage('hu')}
                  className={`px-6 py-3 rounded-sm border transition-all ${
                    language === 'hu' 
                      ? 'bg-purple-900 border-purple-700 text-white' 
                      : 'border-slate-800 text-slate-400'
                  }`}
                >
                  {t('header.mobile.hu')}
                </button>
              </div>
            </div>

            {/* Mobile CTA */}
            <Link 
              to="/start-your-project"
              className="block w-full py-4 bg-gradient-to-r from-purple-900 to-blue-900 text-white text-center text-lg tracking-wider uppercase font-medium hover:opacity-90 transition-opacity"
            >
              {t('header.cta')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
