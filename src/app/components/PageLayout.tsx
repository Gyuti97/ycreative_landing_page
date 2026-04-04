import { ReactNode } from "react";
import { motion } from "motion/react";

interface PageLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Grid overlay - subtle */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                             linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-slate-950 to-blue-950/30 pointer-events-none" />

      <div className="relative pt-32 pb-20 px-6 lg:px-12 max-w-[1400px] mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-purple-700 to-blue-700" />
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">{subtitle}</span>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight text-white mb-8">
            {title}
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
