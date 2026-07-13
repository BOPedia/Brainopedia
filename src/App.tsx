import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ArticleContent } from './components/ArticleContent';
import { Header } from './components/Header';
import { DonationBanner } from './components/DonationBanner';
import { Footer } from './components/Footer';

function AppContent(): import("react/jsx-runtime").JSX.Element {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // CHANGE: Default to 'home' instead of 'about' when no articleId exists
  const currentArticle = articleId || 'home';

  const setCurrentArticle = (article: string) => {
    navigate(`/${article}`);
  };

  // Scroll to top when article changes
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
    document.title = 'Brainopedia - Encyclopedia of Neurodivergent Minds';
  }, []);

  return (
    <div className="min-h-screen bg-[#0A9DC4]">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onSearchSelect={(articleId) => setCurrentArticle(articleId)}
      />

      <DonationBanner onNavigateTo={() => setCurrentArticle('')} />

      <div className="flex">
        <Sidebar
          currentArticle={currentArticle}
          setCurrentArticle={setCurrentArticle}
          isOpen={isSidebarOpen}
          closeSidebar={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 p-2 md:p-8 lg:p-12 max-w-5xl mx-auto w-full">
          {/* ArticleContent will now receive 'home' by default */}
          <ArticleContent articleId={currentArticle} setCurrentArticle={setCurrentArticle} />
        </main>
      </div>

      <Footer setCurrentArticle={setCurrentArticle} />
    </div>
  );
}

export default function App(): import("react/jsx-runtime").JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/:articleId" element={<AppContent />} />
        <Route path="/:articleId/:tabId" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}