import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ArticleContent } from './components/ArticleContent';
import { Header } from './components/Header';
import { DonationBanner } from './components/DonationBanner';
import { Footer } from './components/Footer';
import { Search, Menu, X } from 'lucide-react';

function AppContent() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentArticle = articleId || 'about';

  const setCurrentArticle = (article: string) => {
    navigate(`/${article}`);
  };

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  // Set favicon and page title
  useEffect(() => {
    // Update favicon
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = '/images/favicon.png';

    // Update page title
    document.title = 'Brainopedia - Encyclopedia of Neurodivergent Conditions';
  }, []);

  return (
    <div className="min-h-screen bg-[#0A9DC4]">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onSearchSelect={(articleId) => setCurrentArticle(articleId)}
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/:articleId" element={<AppContent />} />
      </Routes>
    </Router>
  );
}