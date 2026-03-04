import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// ============================================================================
// VIDEO PROJECT CONFIGURATION
// ============================================================================
// Add your video URLs or file paths here for each project
// Supported formats: MP4, WebM, etc.
// You can use local files (e.g., "/videos/project1.mp4") or external URLs

const VIDEO_PROJECTS = [
  {
    id: 1,
    videoUrl: "", // Add your video URL here
    titleKey: 'showcase.project1.title',
    categoryKey: 'showcase.project1.category',
    gradient: "from-purple-900/30 to-blue-900/30"
  },
  {
    id: 2,
    videoUrl: "", // Add your video URL here
    titleKey: 'showcase.project2.title',
    categoryKey: 'showcase.project2.category',
    gradient: "from-blue-900/30 to-purple-900/30"
  },
  {
    id: 3,
    videoUrl: "", // Add your video URL here
    titleKey: 'showcase.project3.title',
    categoryKey: 'showcase.project3.category',
    gradient: "from-purple-900/30 to-blue-900/30"
  },
  {
    id: 4,
    videoUrl: "", // Add your video URL here
    titleKey: 'showcase.project4.title',
    categoryKey: 'showcase.project4.category',
    gradient: "from-blue-900/30 to-purple-900/30"
  },
  {
    id: 5,
    videoUrl: "", // Add your video URL here
    titleKey: 'showcase.project5.title',
    categoryKey: 'showcase.project5.category',
    gradient: "from-purple-900/30 to-blue-900/30"
  },
  {
    id: 6,
    videoUrl: "", // Add your video URL here
    titleKey: 'showcase.project6.title',
    categoryKey: 'showcase.project6.category',
    gradient: "from-blue-900/30 to-purple-900/30"
  }
];

// ============================================================================
// SHOWCASE COMPONENT
// ============================================================================

export function Showcase() {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="showcase" className="py-32 bg-slate-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-700" />
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{t('showcase.tagline')}</span>
          </div>
          <h2 className="text-5xl tracking-tight text-white">
            {t('showcase.headline1')}<br />
            {t('showcase.headline2')}
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[9/16] bg-slate-900 overflow-hidden cursor-pointer border border-slate-800 hover:border-purple-700 transition-all duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
              
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                                     linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                />
              </div>

              {/* Video placeholder - Replace with actual video when videoUrl is provided */}
              {project.videoUrl ? (
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
                  src={project.videoUrl}
                  loop
                  muted
                  playsInline
                />
              ) : null}

              {/* Hover overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-opacity duration-500 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-80'
                }`}
              />

              {/* Play indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className={`w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center transition-all duration-300 ${
                    hoveredId === project.id ? 'scale-110 border-purple-500' : 'scale-100'
                  }`}
                >
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block px-3 py-1 bg-purple-900/30 backdrop-blur-sm border border-purple-700/30 rounded-sm mb-3">
                  <span className="text-xs tracking-wider text-purple-300 uppercase">
                    {t(project.categoryKey)}
                  </span>
                </div>
                <h3 className="text-xl text-white">
                  {t(project.titleKey)}
                </h3>
              </div>

              {/* Top accent line */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-700 to-blue-700 transition-all duration-300 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#process" 
            className="inline-flex items-center gap-3 text-sm tracking-wider text-slate-400 hover:text-purple-400 transition-colors uppercase group"
          >
            <span>{t('showcase.cta')}</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
