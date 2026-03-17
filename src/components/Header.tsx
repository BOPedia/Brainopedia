import React, { useRef, useEffect, useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

// Searchable index of all articles
const searchableArticles = [
  { id: 'about', label: 'Home & About', keywords: 'brainopedia home about neurodivergent welcome introduction' },
  { id: 'adhd', label: 'ADHD', keywords: 'attention deficit hyperactivity disorder adhd add inattention impulsivity executive function focus concentration' },
  { id: 'autism', label: 'Autism (ASD)', keywords: 'autism spectrum disorder asd asperger social communication sensory repetitive behaviors neurodevelopmental' },
  { id: 'dyslexia', label: 'Dyslexia', keywords: 'dyslexia reading learning disability phonological decoding literacy letters words' },
  { id: 'dyscalculia', label: 'Dyscalculia', keywords: 'dyscalculia math mathematics number sense arithmetic learning disability calculation' },
  { id: 'dysgraphia', label: 'Dysgraphia', keywords: 'dysgraphia writing handwriting motor learning disability spelling fine motor' },
  { id: 'nvld', label: 'Non-Verbal Learning Disability (NVLD)', keywords: 'nvld nonverbal non-verbal learning disability spatial visual social skills' },
  { id: 'dld', label: 'Developmental Language Disorder (DLD)', keywords: 'dld developmental language disorder speech communication grammar vocabulary' },
  { id: 'hyperlexia', label: 'Hyperlexia', keywords: 'hyperlexia early reading advanced decoding comprehension precocious' },
  { id: 'giftedness', label: 'Giftedness', keywords: 'giftedness gifted talented high ability intelligence iq advanced intellectual' },
  { id: 'twice-exceptional', label: 'Twice Exceptional (2E)', keywords: 'twice exceptional 2e gifted disability dual exceptionality' },
  { id: 'apd', label: 'Auditory Processing Disorder (APD)', keywords: 'auditory processing disorder apd hearing listening sound discrimination central' },
  { id: 'visual-processing', label: 'Visual Processing Disorder', keywords: 'visual processing disorder vpd vision perception spatial tracking' },
  { id: 'spd', label: 'Sensory Processing Disorder (SPD)', keywords: 'sensory processing disorder spd sensitivities overresponsive underresponsive integration' },
  { id: 'misophonia', label: 'Misophonia', keywords: 'misophonia sound sensitivity trigger sounds chewing anger rage selective sound' },
  { id: 'synesthesia', label: 'Synesthesia', keywords: 'synesthesia senses colors sounds cross-modal perception' },
  { id: 'dyspraxia', label: 'Dyspraxia (DCD)', keywords: 'dyspraxia dcd developmental coordination disorder motor planning clumsy movement' },
  { id: 'tourette', label: 'Tourette Syndrome', keywords: 'tourette tics motor vocal involuntary movements sounds' },
  { id: 'ocd', label: 'OCD', keywords: 'ocd obsessive compulsive disorder intrusive thoughts rituals anxiety' },
  { id: 'bipolar', label: 'Bipolar Disorder', keywords: 'bipolar disorder mania depression mood swings manic episodes cycling' },
  { id: 'schizophrenia', label: 'Schizophrenia', keywords: 'schizophrenia psychosis hallucinations delusions thought disorder' },
  { id: 'down-syndrome', label: 'Down Syndrome', keywords: 'down syndrome trisomy 21 chromosome intellectual developmental genetic' },
  { id: 'intellectual-disability', label: 'Intellectual Disability', keywords: 'intellectual disability cognitive developmental adaptive functioning iq' },
  { id: 'fasd', label: 'Fetal Alcohol Spectrum Disorder (FASD)', keywords: 'fasd fetal alcohol spectrum disorder prenatal exposure developmental' },
  { id: 'epilepsy', label: 'Epilepsy', keywords: 'epilepsy seizures neurological convulsions brain electrical activity' },
  { id: 'tbi', label: 'TBI (Traumatic Brain Injury)', keywords: 'tbi traumatic brain injury concussion head trauma acquired' },
  { id: 'cte', label: 'CTE (Chronic Traumatic Encephalopathy)', keywords: 'cte chronic traumatic encephalopathy concussion sports head injury degenerative' },
  { id: 'pandas', label: 'PANDAS', keywords: 'pandas autoimmune streptococcal neuropsychiatric pediatric ocd tics infection brain inflammation' },
  { id: 'blog', label: 'Blog & Updates', keywords: 'blog news updates articles posts' },
  { id: 'donate', label: 'Donate', keywords: 'donate support contribute funding help' },
];

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
    ? searchableArticles.filter(article => {
        const query = searchQuery.toLowerCase();
        return article.label.toLowerCase().includes(query) ||
               article.keywords.toLowerCase().includes(query);
      })
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
                      <span className="font-medium">{article.label}</span>
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