import React from 'react';
import { X, BookOpen, Brain, Zap, Focus, Users, Palette, Calculator, Info, Heart, PenTool, Ear, Star, Sparkles, Newspaper, ChevronDown, ChevronRight, RefreshCw, Activity, Eye, Waves, Hand, Headphones, ScanEye, MessageSquare, Lightbulb, Grid3x3, Infinity, Dna, Droplets, Shield, Puzzle, TrendingDown, AlertCircle, MessageCircle, Smile, BrainCog, Skull, Bug, Radio } from 'lucide-react';
import { FootballHelmet } from './icons/FootballHelmet';

interface SidebarProps {
  currentArticle: string;
  setCurrentArticle: (id: string) => void;
  isOpen: boolean;
  closeSidebar: () => void;
}

const categories = [
  {
    name: 'Core Neurodevelopmental',
    articles: [
      { id: 'adhd', label: 'ADHD', icon: Zap },
      { id: 'autism', label: 'Autism or "ASD"', icon: Infinity },
    ]
  },
  {
    name: 'Learning Differences & Profiles',
    articles: [
      { id: 'dyslexia', label: 'Dyslexia', icon: BookOpen },
      { id: 'dyscalculia', label: 'Dyscalculia', icon: Calculator },
      { id: 'dysgraphia', label: 'Dysgraphia', icon: PenTool },
      { id: 'nvld', label: 'Non-Verbal Learning Disability or "NVLD"', icon: Grid3x3 },
      { id: 'dld', label: 'Developmental Learning Disorder or "DLD"', icon: MessageSquare },
      { id: 'hyperlexia', label: 'Hyperlexia', icon: Sparkles },
      { id: 'giftedness', label: 'Giftedness', icon: Lightbulb },
      { id: 'twice-exceptional', label: 'Twice Exceptional or "2E"', icon: Star },
    ]
  },
  {
    name: 'Processing & Sensory',
    articles: [
      { id: 'apd', label: 'Auditory Processing Disorder or "APD"', icon: Headphones },
      { id: 'visual-processing', label: 'Visual Processing Disorder', icon: ScanEye },
      { id: 'spd', label: 'Sensory Processing Disorder or "SPD"', icon: Hand },
      { id: 'misophonia', label: 'Misophonia', icon: Ear },
      { id: 'synesthesia', label: 'Synesthesia', icon: Palette },
    ]
  },
  {
    name: 'Movement & Motor',
    articles: [
      { id: 'dyspraxia', label: 'Dyspraxia or "DCD"', icon: Focus },
      { id: 'tourette', label: 'Tourette Syndrome', icon: Users },
    ]
  },
  {
    name: 'Mental Health Crossovers',
    articles: [
      { id: 'ocd', label: 'Obsessive-Compulsive Disorder or "OCD"', icon: RefreshCw },
      { id: 'bipolar', label: 'Bipolar Disorder', icon: Activity },
      { id: 'schizophrenia', label: 'Schizophrenia', icon: Eye },
    ]
  },
  {
    name: 'Genetic or Environmental',
    articles: [
      { id: 'down-syndrome', label: 'Down Syndrome', icon: Dna },
      { id: 'intellectual-disability', label: 'Intellectual Disability', icon: Brain },
      { id: 'fasd', label: 'Fetal Alcohol Spectrum Disorder or "FASD"', icon: Droplets },
      { id: 'epilepsy', label: 'Epilepsy', icon: Waves },
    ]
  },
  {
    name: 'Acquired Neurodivergence',
    subcategories: [
      {
        name: 'Traumatic Injuries',
        articles: [
          { id: 'tbi', label: 'TBI (Traumatic Brain Injury)', icon: Skull },
          { id: 'cte', label: 'CTE (Chronic Traumatic Encephalopathy)', icon: BrainCog },
        ]
      },
      {
        name: 'Strokes and Blood-Flow Problems',
        articles: []
      },
      {
        name: 'Oxygen-Loss Injuries',
        articles: []
      },
      {
        name: 'Chemical or Toxin-Related',
        articles: []
      },
      {
        name: 'Brain Inflammation',
        articles: [
          { id: 'pandas', label: 'PANDAS', icon: Radio },
        ]
      },
    ]
  }
];

export function Sidebar({ currentArticle, setCurrentArticle, isOpen, closeSidebar }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({
    'Core Neurodevelopmental': true,
    'Learning Differences & Profiles': true,
    'Processing & Sensory': true,
    'Movement & Motor': true,
    'Mental Health Crossovers': true,
    'Genetic or Environmental': true,
    'Acquired Neurodivergence': true,
  });

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const handleArticleClick = (id: string) => {
    setCurrentArticle(id);
    closeSidebar();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed xl:relative h-screen xl:h-auto w-72 bg-[#ffd166] border-r border-[#0c264d] 
          transition-transform duration-300 z-50 xl:z-0 overflow-y-auto xl:overflow-y-visible
          ${isOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full xl:h-auto">
          {/* Mobile close button */}
          <div className="xl:hidden flex items-center justify-between p-4 border-b border-[#0c264d]">
            <span className="text-[#0c264d]">Navigation</span>
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-[#ffcc00]/30 rounded-md"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="p-4 flex-1">
            {/* Home & About - Top Section */}
            <div className="mb-6">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleArticleClick('about')}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left
                      ${currentArticle === 'about' 
                        ? 'bg-[#0A9DC4] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Info className="w-5 h-5" />
                    <span>Home & About</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="mb-6 pt-6 border-t border-gray-200">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-3 px-3">
                Encyclopedia Volumes
              </h2>
              
              {categories.map((category) => (
                <div key={category.name} className="mb-4">
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#0c264d] hover:bg-gray-50 rounded-md transition-colors"
                    style={{ fontFamily: 'Avenir, Nunito, sans-serif', fontWeight: 800 }}
                  >
                    <span>{category.name}</span>
                    {expandedCategories[category.name] ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedCategories[category.name] && (
                    <div className="mt-1 ml-2">
                      {/* Check if category has subcategories */}
                      {category.subcategories ? (
                        // Render subcategories
                        category.subcategories.map((subcategory) => (
                          <div key={subcategory.name} className="mb-2">
                            <button
                              onClick={() => toggleCategory(`${category.name} - ${subcategory.name}`)}
                              className="w-full flex items-center justify-between px-2 py-1.5 text-sm text-[#0c264d] hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <span>{subcategory.name}</span>
                              {expandedCategories[`${category.name} - ${subcategory.name}`] ? (
                                <ChevronDown className="w-3 h-3" />
                              ) : (
                                <ChevronRight className="w-3 h-3" />
                              )}
                            </button>
                            
                            {expandedCategories[`${category.name} - ${subcategory.name}`] && subcategory.articles.length > 0 && (
                              <ul className="space-y-1 mt-1 ml-4">
                                {subcategory.articles.map((article) => {
                                  const Icon = article.icon;
                                  return (
                                    <li key={article.id}>
                                      <button
                                        onClick={() => handleArticleClick(article.id)}
                                        className={`
                                          w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left
                                          ${currentArticle === article.id 
                                            ? 'bg-[#0A9DC4] text-white' 
                                            : 'text-gray-700 hover:bg-gray-100'
                                          }
                                        `}
                                      >
                                        <Icon className="w-5 h-5" />
                                        <span>{article.label}</span>
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        ))
                      ) : (
                        // Render regular articles
                        <ul className="space-y-1">
                          {category.articles.map((article) => {
                            const Icon = article.icon;
                            return (
                              <li key={article.id}>
                                <button
                                  onClick={() => handleArticleClick(article.id)}
                                  className={`
                                    w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left
                                    ${currentArticle === article.id 
                                      ? 'bg-[#0A9DC4] text-white' 
                                      : 'text-gray-700 hover:bg-gray-100'
                                    }
                                  `}
                                >
                                  <Icon className="w-5 h-5" />
                                  <span>{article.label}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-3 px-3">
                Resources
              </h2>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleArticleClick('blog')}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left
                      ${currentArticle === 'blog' 
                        ? 'bg-[#0A9DC4] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Newspaper className="w-5 h-5" />
                    <span>Blog & Updates</span>
                  </button>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    Support Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    Newsletters
                  </a>
                </li>
              </ul>
            </div>

            {/* Donate */}
            <div className="pt-6 border-t border-gray-200">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => handleArticleClick('donate')}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-left
                      ${currentArticle === 'donate' 
                        ? 'bg-[#0A9DC4] text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Donate</span>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}