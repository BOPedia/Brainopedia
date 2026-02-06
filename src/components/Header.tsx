import React from 'react';
import { Search, Menu } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleSidebar: () => void;
}

export function Header({ searchQuery, setSearchQuery, toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-[#0c264d] text-white sticky top-0 z-50 shadow-md w-full">
      <div className="flex items-center gap-4 px-4 md:px-6 py-4 w-full max-w-full">
        <button
          onClick={toggleSidebar}
          className="xl:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-[#f4f4f4] text-2xl font-bold" style={{ fontFamily: 'Avenir, Nunito, sans-serif', fontWeight: 800 }}>Brainopedia</h1>
            <p className="text-sm text-[#ffd166] opacity-90">Your encyclopedic platform about neurodivergent minds.</p>
          </div>
        </div>
        
        <div className="flex-1 max-w-md ml-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search volumes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#2abcd4]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}