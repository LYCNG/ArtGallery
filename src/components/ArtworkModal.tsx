import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Artwork } from '../data/artworks';

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({ artwork, isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-8 "
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto md:overflow-visible flex flex-col md:flex-row items-center scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Sticky on mobile to ensure accessibility */}
            <button
              onClick={onClose}
              className="fixed top-24 right-4 md:absolute md:top-4 md:right-4 z-100 w-12 h-12 md:w-10 md:h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors duration-300 backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </button>

            {/* Image Section */}
            <motion.div 
              className="relative w-full h-[50vh] md:h-auto md:min-h-[500px] md:w-[65%] self-start rounded-xl overflow-hidden shadow-2xl shrink-0 bg-black/5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-contain md:object-cover"
              />
            </motion.div>

            {/* Info Section */}
            <motion.div 
              className="w-full md:w-[45%] p-6 md:p-10 flex flex-col justify-center bg-bg-base/90 md:bg-bg-base/80 backdrop-blur-xl md:self-end rounded-xl shadow-2xl md:-ml-12 md:mt-16 z-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              {/* Type Badge */}
              <motion.span 
                className="inline-block text-[10px] tracking-[0.2em] uppercase text-accent font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {artwork.type}
              </motion.span>

              {/* Title */}
              <motion.h2 
                className="font-serif text-2xl md:text-4xl font-medium text-primary mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                {artwork.title}
              </motion.h2>

              {/* Artist & Year */}
              <motion.div 
                className="flex items-center gap-4 text-xs md:text-sm text-text-muted mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span>{artwork.artist}</span>
                <span className="w-1 h-1 rounded-full bg-text-muted" />
                <span>{artwork.year}</span>
                
              </motion.div>

              {/* Divider */}
              <motion.div 
                className="w-16 h-px bg-primary/30 mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.65, duration: 0.4 }}
                style={{ transformOrigin: 'left' }}
              />

              {/* Description */}
              <motion.p 
                className="text-text-main leading-relaxed text-sm md:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {artwork.description}
              </motion.p>

              {/* Action Button */}
              {/* Footer Divider */}
              <motion.div 
                className="w-full h-px bg-primary/20 mt-8 mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
              />

              {/* Social Icons (Boxed) */}
              <motion.div 
                className="flex items-center gap-8 text-primary self-center pb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                 {/* Instagram */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform duration-300 cursor-pointer"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                 {/* X / Twitter */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="hover:scale-110 transition-transform duration-300 cursor-pointer p-px"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                 {/* Facebook */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform duration-300 cursor-pointer"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                 {/* TikTok */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hover:scale-110 transition-transform duration-300 cursor-pointer"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtworkModal;
