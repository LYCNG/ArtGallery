import React from 'react';
import { motion } from 'framer-motion';

const AboutProject: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 w-full max-w-[1600px] mx-auto overflow-hidden">
      
      {/* Decorative Divider */}
      <div className="flex items-center justify-center gap-4 mb-20 opacity-50">
        <div className="h-px w-12 bg-primary/30" />
        <span className="text-primary/60 text-xs tracking-[0.3em] font-serif uppercase">The Concept</span>
        <div className="h-px w-12 bg-primary/30" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left: The Vision */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
            Where Algorithms <br />
            <span className="italic opacity-80">Dream in Color.</span>
          </h2>
          <p className="text-text-main/80 leading-relaxed text-lg max-w-xl font-sans font-light">
            ArtSide is not just a gallery; it's a digital experiment exploring the intersection of <span className="text-accent font-medium">Human Curation</span> and <span className="text-accent font-medium">Artificial Intelligence</span>.
          </p>
          <p className="text-text-main/70 leading-relaxed font-sans font-light">
            Every artwork exhibited here was born from neural networks, hallucinated from prompts, and refined into the visual experiences you see today. This project serves as a portfolio demonstration of modern frontend engineering.
          </p>

          <div className="pt-4 flex gap-4">
             <div className="px-4 py-1.5 rounded-full border border-primary/20 text-xs text-primary/70 uppercase tracking-wider">AI Generated</div>
             <div className="px-4 py-1.5 rounded-full border border-primary/20 text-xs text-primary/70 uppercase tracking-wider">Concept Demo</div>
          </div>
        </motion.div>

        {/* Right: Technical Stack */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           {/* Tech Card Background */}
           <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-2 scale-[1.02]" />
           
           <div className="relative bg-bg-base/60 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 md:p-10 shadow-sm">
             <h3 className="font-serif text-2xl text-text-main mb-8 border-b border-primary/10 pb-4">
               Built With
             </h3>
             
             <div className="grid grid-cols-2 gap-6">
               {[
                 { label: 'React 19', detail: 'Component Architecture' },
                 { label: 'TypeScript', detail: 'Type Safety' },
                 { label: 'Tailwind CSS v4', detail: 'Semantic Styling' },
                 { label: 'Framer Motion', detail: 'Fluid Animations' },
                 { label: 'Vite', detail: 'Next Gen Tooling' },
                 { label: 'AI Models', detail: 'Content Generation' }
               ].map((tech, idx) => (
                 <motion.div 
                   key={tech.label}
                   className="space-y-1"
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.4 + idx * 0.1 }}
                   viewport={{ once: true }}
                 >
                   <div className="text-primary font-medium">{tech.label}</div>
                   <div className="text-text-muted text-xs uppercase tracking-wide">{tech.detail}</div>
                 </motion.div>
               ))}
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProject;
