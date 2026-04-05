import { useRef, useEffect } from "react";
import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export function Showcase() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {
            // Handle autoplay restrictions if necessary
          });
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 } // Start playing when 30% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="showcase" className="py-32 bg-slate-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-700" />
              <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{t('showcase.tagline')}</span>
            </div>
            <h2 className="text-5xl lg:text-7xl tracking-tight text-white leading-[1.1]">
              {t('showcase.headline1')}<br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {t('showcase.headline2')}
              </span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              {t('showcase.description') || 'We create high-impact visual content designed to stop the scroll and build lasting brand authority.'}
            </p>
            
            <div className="pt-8">
              <Link 
                to="/video-editing"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 hover:bg-purple-50 transition-all duration-300"
              >
                <span className="text-sm tracking-wider uppercase font-bold">{t('showcase.cta')}</span>
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

          {/* Right: 9:16 Video Box */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[9/16] bg-slate-900 border border-slate-800 overflow-hidden group shadow-2xl shadow-purple-900/20">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-700 to-blue-700 z-20" />
              
              {/* Video Element */}
              <video 
                ref={videoRef}
                autoPlay
                loop 
                muted 
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src="https://res.cloudinary.com/devicivta/video/upload/v1775347180/y_creative_website_480p_lrzje7.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 p-4 opacity-40">
                <div className="w-12 h-12 border-r-2 border-b-2 border-purple-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
