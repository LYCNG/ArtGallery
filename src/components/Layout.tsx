import React from 'react';
import Navbar from './Navbar';
// import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const { theme } = useTheme(); // theme is no longer used in the render

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-text-main font-sans selection:bg-highlight selection:text-white">
      {/* Cinematic Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] z-100 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Dynamic Background Base - Transitions smoothly via CSS vars */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-bg-base transition-colors duration-700">
        
        {/* Helper gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-accent/20 via-secondary/10 to-highlight/10 transition-colors duration-700" />

        {/* Dynamic Orbs - Colors mapped to semantic variables */}
        
        {/* Orb 1: The Highlight (Sun/Gold vs Tropical Yellow) */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-highlight rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse-glow transition-colors duration-700" />
        
        {/* Orb 2: The Secondary (Peach vs Teal) */}
        <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-secondary rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-float transition-colors duration-700" style={{ animationDelay: '1s' }} />
        
        {/* Orb 3: The Primary (Terracotta vs Red-Orange) */}
        <div className="absolute bottom-[-20%] left-[20%] w-[900px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-[150px] opacity-20 animate-float transition-colors duration-700" style={{ animationDelay: '3s' }} />

        {/* Orb 4: The Accent (Sky vs Cyan) */}
        <div className="absolute top-[10%] left-[30%] w-[400px] h-[400px] bg-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-float transition-colors duration-700" style={{ animationDelay: '2s' }} />
      
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-bg-base/50 to-white/40 mix-blend-overlay" />
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-24 pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
        {children}
      </main>
      
      <footer className="relative z-10 py-12 text-center text-primary/80 text-2xl font-serif tracking-widest transition-colors duration-500">
        <p>
          Copyright &copy; 2026 <a href="https://sharklian-portfolio.vercel.app/zh-TW" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 border-b border-primary/20 hover:border-primary">SharkLian Studio</a>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
