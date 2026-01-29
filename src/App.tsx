import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ArticleContent } from './components/ArticleContent';
import { Header } from './components/Header';
import { DonationBanner } from './components/DonationBanner';
import { Footer } from './components/Footer';

export default function App() {
  const [currentArticle, setCurrentArticle] = useState('about');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentArticle]);

  useEffect(() => {
    document.title = 'Brainopedia - Encyclopedia of Neurodivergent Conditions';
  }, []);

  return (
    <div className="min-h-screen bg-[#2abcd4]">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <DonationBanner onNavigateToDonate={() => setCurrentArticle('donate')} />
      
      <div className="flex">
        <Sidebar 
          currentArticle={currentArticle}
          setCurrentArticle={setCurrentArticle}
          isOpen={isSidebarOpen}
          closeSidebar={() => setIsSidebarOpen(false)}
        />
        
        <main className="flex-1 p-2 md:p-8 lg:p-12 max-w-5xl mx-auto w-full">
          <ArticleContent articleId={currentArticle} setCurrentArticle={setCurrentArticle} />
        </main>
      </div>
      
      <Footer setCurrentArticle={setCurrentArticle} />
    </div>
  );
}
