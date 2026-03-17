import React, { useRef, useEffect, useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { searchableArticles } from './searchIndex';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleSidebar: () => void;
  onSearchSelect: (articleId: string) => void;
}

export function Header({ searchQuery, setSearchQuery, toggleSidebar, onSearchSelect }: HeaderProps) {
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredResults = searchQuery.trim().length > 0
    ? (() => {
        const queryWords = searchQuery.toLowerCase().split(/\s+/).filter(word => word.length >= 3);
        if (queryWords.length === 0) return [];
        return searchableArticles.filter(article => {
          const searchText = (article.label + ' ' + article.keywords).toLowerCase();
          return queryWords.some(word => searchText.includes(word));
        });
      })()
    : [];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (articleId: string) => {
    onSearchSelect(articleId);
    setSearchQuery('');
    setShowResults(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && filteredResults.length > 0) {
      handleSelect(filteredResults[0].id);
    }
    if (e.key === 'Escape') {
      setShowResults(false);
    }
  };

  return (
    <header className="bg-[#0c264d] text-white sticky top-0 z-50 shadow-md w-full">
      <div className="flex items-center gap-4 px-4 md:px-6 py-2 w-full max-w-full">
        <button
          onClick={toggleSidebar}
          className="xl:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3">
          <img src="/images/brainopedia-logo.png" alt="Brainopedia Logo" className="w-18 h-18 object-contain" />
          <div>
            <h1 className="text-[#f4f4f4] text-2xl font-bold" style={{ fontFamily: 'Avenir, Nunito, sans-serif', fontWeight: 800 }}>Brainopedia</h1>
            <p className="text-sm text-[#ffd166] opacity-90">Your encyclopedic platform about neurodivergent minds.</p>
          </div>
        </div>
        
        <div className="flex-1 max-w-md ml-auto" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search volumes..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              onKeyDown={handleKeyDown}
              className="w-full pl-10 pr-10 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#2abcd4]"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setShowResults(false); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Search Results Dropdown */}
            {showResults && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-80 overflow-y-auto z-[100]">
                {filteredResults.length > 0 ? (
                  filteredResults.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => handleSelect(article.id)}
                      className="w-full text-left px-4 py-3 text-gray-800 hover:bg-[#2abcd4]/10 border-b border-gray-100 last:border-b-0 transition-colors"
                    >
                      {article.label.includes('\u2192') ? (
                        <span>
                          <span className="text-[#2abcd4] font-medium">{article.label.split('\u2192')[0].trim()}</span>
                          <span className="text-gray-400 mx-1">\u2192</span>
                          <span className="text-gray-700">{article.label.split('\u2192')[1].trim()}</span>
                        </span>
                      ) : (
                        <span className="font-medium">{article.label}</span>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-sm">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}