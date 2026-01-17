import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Artwork } from '../data/artworks';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, isOpen, onClose, onNext, onPrev }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          {/* Navigation Arrows (Desktop) */}
          {!isMobile && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </>
          )}

          {isMobile ? (
            // Mobile Layout (Vertical Stack, Full Screen)
            <motion.div
              layoutId={`card-${artwork.id}`}
              className="relative z-10 w-full h-dvh overflow-y-auto scrollbar-hide bg-bg-base/95 backdrop-blur-xl shadow-none flex flex-col"
              onClick={(e) => e.stopPropagation()}
              style={{ borderRadius: '0px' }}
            >
           
              {/* Image Section */}
              <motion.div className="relative w-full h-[50dvh] shrink-0 bg-black/5">
                <motion.img
                  layoutId={`image-${artwork.id}`}
                  src={artwork.image}
                  alt={artwork.title}
                  loading="eager"
                  // @ts-ignore
                  fetchPriority="high"
                  decoding="sync"
                  className="w-full h-full object-contain"
                />
                 {/* Mobile Navigation Overlay on Image */}
                 <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                    <button 
                      onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
                      className="pointer-events-auto p-2 rounded-full bg-black/20 text-white/70 hover:bg-black/40 backdrop-blur-sm transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                      className="pointer-events-auto p-2 rounded-full bg-black/20 text-white/70 hover:bg-black/40 backdrop-blur-sm transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                 </div>
              </motion.div>

              {/* Info Section */}
              <motion.div 
                className="relative z-20 -mt-8 flex-1 p-6 flex flex-col pt-10 pb-20 bg-bg-base rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                   {/* Close Button (Fixed - adjusted for safe area if needed, using top-4) */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 w-8 h-8 rounded-full  text-gray-400 hover:text-gray-600 flex items-center justify-center  transition-colors duration-300 backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>

                 <motion.span className="inline-block text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-3">{artwork.type}</motion.span>
                 <motion.h2 className="font-serif text-2xl font-medium text-primary mb-2">{artwork.title}</motion.h2>
                 <motion.div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                    <span>{artwork.artist}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                    <span>{artwork.year}</span>
                 </motion.div>
                 <motion.div className="w-12 h-px bg-primary/30 mb-6" />
                 <motion.p className="text-text-main leading-relaxed text-sm flex-1">{artwork.description}</motion.p>
                 <motion.div className="w-full h-px bg-primary/20 mt-8 mb-6" />
                 {/* Social Icons */}
                 <motion.div className="flex items-center gap-6 text-primary self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform duration-300 cursor-pointer"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="hover:scale-110 transition-transform duration-300 cursor-pointer p-px"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform duration-300 cursor-pointer"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform duration-300 cursor-pointer"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                 </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            // Desktop Layout (Horizontal)
            <motion.div
              layoutId={`card-${artwork.id}`}
              className="relative z-10 w-full max-w-6xl overflow-visible flex flex-row items-center"
              onClick={(e) => e.stopPropagation()}
              style={{ borderRadius: '0.75rem' }}
            >
               {/* Close Button */}
               <button
                onClick={onClose}
                className="absolute -top-12 right-0 z-40 p-2 text-white/50 hover:text-white transition-colors"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                 <span className="sr-only">Close</span>
               </button>

              {/* Image Section */}
              <motion.div 
                className="relative min-h-[500px] w-[65%] self-start overflow-hidden shadow-2xl shrink-0 bg-black/5 rounded-l-xl"
              >
                <motion.img
                  layoutId={`image-${artwork.id}`}
                  src={artwork.image}
                  alt={artwork.title}
                   loading="eager"
                   // @ts-ignore
                   fetchPriority="high"
                   decoding="sync"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Info Section */}
              <motion.div 
                className="w-[45%] p-10 flex flex-col justify-center bg-bg-base/80 backdrop-blur-xl self-end rounded-xl shadow-2xl -ml-12 mt-16 z-20 min-h-[400px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                <motion.span 
                  className="inline-block text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-4"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                >
                  {artwork.type}
                </motion.span>
                <motion.h2 
                  className="font-serif text-4xl font-medium text-primary mb-2"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
                >
                  {artwork.title}
                </motion.h2>
                <motion.div 
                  className="flex items-center gap-4 text-sm text-text-muted mb-6"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                >
                  <span>{artwork.artist}</span>
                  <span className="w-1 h-1 rounded-full bg-text-muted" />
                  <span>{artwork.year}</span>
                </motion.div>
                <motion.div 
                  className="w-16 h-px bg-primary/30 mb-6"
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.65, duration: 0.4 }} style={{ transformOrigin: 'left' }}
                />
                <motion.p 
                  className="text-text-main leading-relaxed text-base"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                >
                  {artwork.description}
                </motion.p>
                <motion.div 
                  className="w-full h-px bg-primary/20 mt-8 mb-8"
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.75, duration: 0.5 }}
                />
                 <motion.div 
                   className="flex items-center gap-8 text-primary self-center pb-2"
                   initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform duration-300 cursor-pointer"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="hover:scale-110 transition-transform duration-300 cursor-pointer p-px"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform duration-300 cursor-pointer"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform duration-300 cursor-pointer"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                 </motion.div>
              </motion.div>
            </motion.div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtworkModal;
