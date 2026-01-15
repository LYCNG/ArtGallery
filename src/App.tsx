import React, { Suspense } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import GalleryGrid from './components/GalleryGrid';
import { ThemeProvider } from './context/ThemeContext';

import AboutProject from './components/AboutProject';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-[#B25F56]">Loading ArtSide...</div>}>
          <Hero />
          <GalleryGrid />
          <AboutProject />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
