import React, { useState } from 'react';
import ArtworkCard from './ArtworkCard';
import ArtworkModal from './ArtworkModal';
import { artworks, type Artwork } from '../data/artworks';

const GalleryGrid: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArtwork(null), 300);
  };

  return (
    <>
      <section id="exhibitions" className="py-24 relative">
          <div className="mb-16 flex items-end justify-between border-b border-primary/20 pb-6 mx-4 md:mx-0 transition-colors duration-500">
            <div>
              <span className="text-highlight text-xs font-bold tracking-widest uppercase mb-2 block transition-colors duration-500">
                Current Collection
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary transition-colors duration-500">
                Featured Works
              </h2>
            </div>
            <div className="hidden md:block text-right">
               <p className="text-text-muted text-sm transition-colors duration-500">01 — 06</p>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-x-12 md:gap-y-20">
          {artworks.map((artwork, index) => (
            <div key={artwork.id} className={index % 2 === 1 ? 'md:translate-y-12' : ''}>
               <ArtworkCard 
                 artwork={artwork} 
                 index={index} 
                 onClick={() => handleArtworkClick(artwork)}
               />
            </div>
          ))}
        </div>
        
        {/* Decorative background number */}
        <div className="absolute top-0 right-0 -z-10 text-[20vw] leading-none font-serif text-primary opacity-[0.05] pointer-events-none select-none transition-colors duration-500">
          01
        </div>
      </section>

      {/* Artwork Modal */}
      <ArtworkModal 
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default GalleryGrid;
