import React from 'react';
import { motion } from 'framer-motion';
import type { Artwork } from '../data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
  onClick?: () => void;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, index, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${artwork.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative w-full aspect-3/4 cursor-pointer  rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 bg-bg-base"
      onClick={onClick}
    >
      {/* Background / Artwork Image */}
      <motion.img 
        layoutId={`image-${artwork.id}`}
        src={artwork.image}
        alt={artwork.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover "
        style={{ transition: 'transform 0.7s linear' }}
      />
      
      {/* Light Overlay that shimmers on hover */}
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div 
          className="translate-y-8 group-hover:translate-y-0 transition-all ease-out bg-bg-base/90 backdrop-blur-md p-5 rounded-md shadow-sm border border-primary/20"
          style={{ transition: '0.3s ease-out' }}
        >
          <p className="text-[10px] uppercase text-primary mb-1 font-bold">
            {artwork.type}
          </p>
          <h3 className="font-serif text-xl font-medium text-text-main mb-1">
            {artwork.title}
          </h3>
          <div className="flex justify-between items-end overflow-hidden max-h-0 group-hover:max-h-[60px] transition-[max-height] duration-500 ease-out">
            <div className="flex flex-col gap-1">
               <span className="text-[11px] text-text-muted font-medium">Artist</span>
             <div className="flex items-center gap-3">
                 <span className="text-sm text-text-muted">{artwork.artist}</span>
                 <div className="flex items-center gap-2 opacity-60">
                   {/* Instagram */}
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                   {/* X / Twitter */}
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="p-[0.5px]"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                   {/* Facebook */}
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                   {/* TikTok */}
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                 </div>
               </div>
            </div>
            <span className="text-sm text-text-muted mb-0.5">{artwork.year}</span>
          </div>
        </motion.div>
      </div>
      
    </motion.div>
  );
};

export default ArtworkCard;
