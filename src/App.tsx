import React, { useState, useEffect } from 'react';
import { MemoryRouter, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ArticleContent } from './components/ArticleContent';
import { Header } from './components/Header';
import { DonationBanner } from './components/DonationBanner';
import { Footer } from './components/Footer';
import { Search, Menu, X } from 'lucide-react';

// Parse the real browser URL so deep links work in preview
function getInitialEntries(): string[] {
  try {
    const path = window.location.pathname;
    return path && path !== '/' ? [path] : ['/'];
  } catch {
    return ['/'];
  }
}

function AppContent() {
  const { articleId, tabId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentArticle = articleId || 'about';

  const setCurrentArticle = (article: string) => {
    navigate(`/${article}`);
  };

  // Scroll to top when article changes, but NOT when only tab changes
  useEffect(() => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const prevPathParts = (window as any).__prevPath?.split('/').filter(Boolean) || [];
    if (pathParts[0] !== prevPathParts[0]) {
      window.scrollTo(0, 0);
    }
    (window as any).__prevPath = location.pathname;
  }, [articleId, location.pathname]);

  // Set favicon and page title
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = '/images/favicon.png';
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
          <ArticleContent articleId={currentArticle} setCurrentArticle={setCurrentArticle} tabId={tabId} />
        </main>
      </div>

      <Footer setCurrentArticle={setCurrentArticle} />
    </div>
  );
}

export default function App() {
  return (
    <MemoryRouter initialEntries={getInitialEntries()} initialIndex={0}>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/:articleId" element={<AppContent />} />
        <Route path="/:articleId/:tabId" element={<AppContent />} />
      </Routes>
    </MemoryRouter>
  );
}
