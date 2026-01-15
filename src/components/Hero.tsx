import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="relative h-[85vh] flex flex-col items-center justify-center text-center">
      
      {/* Main Title */}
      <div className="relative z-10 mix-blend-normal">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-accent font-sans tracking-[0.3em] uppercase text-sm mb-6 font-semibold transition-colors duration-500"
        >
          {theme === 'golden' && 'Curated Light & Shadow'}
          {theme === 'tropical' && 'Nature & Vibrance'}
          {theme === 'nature' && 'Earth, Sky & Wood'}
          {theme === 'noir' && 'Shadows & Elegance'}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-serif text-6xl md:text-9xl font-thin tracking-tighter text-primary transition-colors duration-500"
        >
          <span className="block drop-shadow-sm transition-colors duration-500">
            {theme === 'golden' && 'GOLDEN'}
            {theme === 'tropical' && 'TROPICAL'}
            {theme === 'nature' && 'NATURE'}
            {theme === 'noir' && 'NOIR'}
          </span>
          <span className="block italic text-highlight opacity-90 mt-[-0.2em] transition-colors duration-500">
            {theme === 'golden' && 'Hour'}
            {theme === 'tropical' && 'Paradise'}
            {theme === 'nature' && 'Awaits'}
            {theme === 'noir' && 'Gallery'}
          </span>
        </motion.h1>
      </div>

      {/* Abstract Sun/Light Element */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 150, opacity: 0.6 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-[0] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-transparent via-highlight to-transparent opacity-50 transition-colors duration-500"
      />
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-primary/60 transition-colors duration-500">
          {theme === 'golden' && 'Bask'}
          {theme === 'tropical' && 'Bloom'}
          {theme === 'nature' && 'Explore'}
          {theme === 'noir' && 'Discover'}
        </span>
        <div className="w-[1px] h-12 bg-primary/20 overflow-hidden transition-colors duration-500">
          <div className="w-full h-1/2 bg-primary animate-[float_2s_infinite] transition-colors duration-500" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
