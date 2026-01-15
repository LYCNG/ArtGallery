import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();
  
  const headerBackdrop = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(8px)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-4 bg-bg-base/60' : 'py-8'}`}
      style={{ backdropFilter: headerBackdrop }}
    >
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative group cursor-pointer">
          <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] text-primary group-hover:text-highlight transition-colors duration-500">
            ARTSIDE
          </h1>
          <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-highlight group-hover:w-full transition-all duration-500" />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center space-x-12">
            {['Exhibitions', 'Artists', 'Collections', 'Visit'].map((item) => (
                <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-sans text-sm tracking-[0.15em] text-text-main hover:text-primary transition-colors duration-300 uppercase font-medium"
                >
                {item}
                </a>
            ))}
            </nav>

             {/* Theme Toggle Button */}
            <button 
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-500"
                title={`Current: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
            >
                {theme === 'golden' && (
                     // Sun/Warm Icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                )}
                {theme === 'tropical' && (
                    // Flower/Exotic Icon
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v7.5"/><path d="m12 17 5-5.5a5.5 5.5 0 0 0-11 0L12 17Z"/><path d="m12 14-3.5-3a5.5 5.5 0 0 0 0 11H12Z"/><path d="m12 14 3.5-3a5.5 5.5 0 0 1 0 11H12Z"/></svg>
                )}
                {theme === 'nature' && (
                    // Leaf/Nature Icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.8-1-2.3-3.8-2-6 0 0 .5-1 3-2 1.3-.5 2.7 0 3.5 1.2.9 1.3.8 2.8.5 3.4Z"/><path d="M14.5 9.4c-1.1.8-1.8 2.2-2.3 3.7 2 .4 3.5.4 4.8-.3 1.8-1 2.3-3.8 2-6 0 0-.5-1-3-2-1.3-.5-2.7 0-3.5 1.2-.9 1.3-.8 2.8-.5 3.4Z"/></svg>
                )}
                {theme === 'noir' && (
                    // Moon/Noir Icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/></svg>
                )}
            </button>

            <button className="hidden md:block px-6 py-2 border border-primary/30 rounded-full font-serif italic text-primary hover:bg-primary hover:text-white transition-all duration-500">
                Inquire
            </button>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden text-primary cursor-pointer">
                <div className="w-8 h-[1px] bg-primary mb-2" />
                <div className="w-6 h-[1px] bg-primary ml-auto" />
            </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
