import React from 'react';

interface HomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function Home({ setCurrentArticle }: HomeProps) {
  return (
<article 
  className="bg-[#f4f4f4] bg-cover bg-center -m-8 p-4 sm:p-8 rounded-lg font-spartan"
  style={{ backgroundImage: "url('/images/home-beige-background.png')" }}
>
  <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-2xl sm:text-3xl font-normal text-[#0c264d]">
    Welcome to Brainopedia
  </h1>

      <div className="space-y-10">
        {/* Banner Video */}
        <div className="mb-6">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/images/brainopedia-banner.png"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-100 object-cover"
          >
            <source src="/images/brainopedia-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Introduction */}
        <section className="max-w-2xl mx-auto text-center">
          <p className="text-sm leading-relaxed text-gray-700">
            Browse our comprehensive collection of neurodevelopmental conditions and cognitive profiles. Choose a volume below to find detailed insights and targeted resources.
          </p>
        </section>

        {/* Encyclopedia Volumes - 1 COLUMN (Compact Rows) */}
        <section>
          <h2 className="text-[#0c264d] font-normal mb-6 text-xl sm:text-2xl text-center">Encyclopedia Volumes</h2>

          <div className="grid grid-cols-1 gap-6 w-full max-w-3xl mx-auto">
            
            {/* Volume I: Core Neurodevelopmental */}
            <div className="group relative bg-white rounded-r-2xl rounded-l-sm border-l-[12px] border-[#2abcd4] shadow-[3px_3px_0px_#f8fafc,6px_6px_12px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 duration-300 flex flex-col">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black/15 to-transparent pointer-events-none rounded-l-sm z-10"></div>
              
              <div className="p-6 flex flex-col items-center text-center z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2abcd4] mb-3 block">
                  Volume I
                </span>
                
                <img src="/images/home-apple-core-neurodev.png" alt="Neural apple" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-2 leading-tight">
                  Core Neurodevelopmental
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-5">
                  Fundamental neurodevelopmental conditions affecting attention, social communication, and sensory processing from early childhood.
                </p>
                
                <div className="w-full border-t border-gray-100 pt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-3 block tracking-wider">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button onClick={() => setCurrentArticle?.('adhd')} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#2abcd4] hover:border-[#2abcd4] hover:text-white transition-all font-normal text-slate-700">ADHD</button>
                    <button onClick={() => setCurrentArticle?.('autism')} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#2abcd4] hover:border-[#2abcd4] hover:text-white transition-all font-normal text-slate-700">Autism or "ASD"</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Volume II: Learning Differences */}
            <div className="group relative bg-white rounded-r-2xl rounded-l-sm border-l-[12px] border-[#ffd166] shadow-[3px_3px_0px_#f8fafc,6px_6px_12px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 duration-300 flex flex-col">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black/15 to-transparent pointer-events-none rounded-l-sm z-10"></div>
              
              <div className="p-6 flex flex-col items-center text-center z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4a017] mb-3 block">
                  Volume II
                </span>
                
                <img src="/images/home-learning-diff.png" alt="Gears" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-2 leading-tight">
                  Learning Differences & Profiles
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-5">
                  Distinct cognitive profiles affecting how individuals process, retain, and express information beyond traditional academics.
                </p>
                
                <div className="w-full border-t border-gray-100 pt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-3 block tracking-wider">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['dyslexia', 'dyscalculia', 'dysgraphia', 'NVLD', 'DLD', 'hyperlexia', 'giftedness', 'twice-exceptional or 2E'].map(id => (
                      <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#ffd166] hover:border-[#ffd166] hover:text-[#0c264d] transition-all font-normal text-slate-700 capitalize">
                        {id.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Volume III: Processing & Sensory */}
            <div className="group relative bg-white rounded-r-2xl rounded-l-sm border-l-[12px] border-[#0A9DC4] shadow-[3px_3px_0px_#f8fafc,6px_6px_12px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 duration-300 flex flex-col">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black/15 to-transparent pointer-events-none rounded-l-sm z-10"></div>
              
              <div className="p-6 flex flex-col items-center text-center z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A9DC4] mb-3 block">
                  Volume III
                </span>
                
                <img src="/images/home-math-sensory-brain.png" alt="Sensory" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-2 leading-tight">
                  Processing & Sensory
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-5">
                  Atypical ways of interpreting sensory information like auditory, visual, and tactile inputs from the environment.
                </p>
                
                <div className="w-full border-t border-gray-100 pt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-3 block tracking-wider">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['APD', 'Visual Processing', 'SPD', 'Misophonia', 'Synesthesia'].map(id => (
                      <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0A9DC4] hover:border-[#0A9DC4] hover:text-white transition-all font-normal text-slate-700 capitalize">
                        {id.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Volume IV: Movement & Motor */}
            <div className="group relative bg-white rounded-r-2xl rounded-l-sm border-l-[12px] border-[#0c264d] shadow-[3px_3px_0px_#f8fafc,6px_6px_12px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 duration-300 flex flex-col">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black/15 to-transparent pointer-events-none rounded-l-sm z-10"></div>
              
              <div className="p-6 flex flex-col items-center text-center z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0c264d] mb-3 block">
                  Volume IV
                </span>
                
                <img src="/images/home-movement-motor.png" alt="Motor" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-2 leading-tight">
                  Movement & Motor
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-5">
                  Conditions affecting the brain's ability to plan, coordinate, and execute physical movements seamlessly.
                </p>
                
                <div className="w-full border-t border-gray-100 pt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-3 block tracking-wider">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button onClick={() => setCurrentArticle?.('dyspraxia')} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0c264d] hover:border-[#0c264d] hover:text-white transition-all font-normal text-slate-700">Dyspraxia</button>
                    <button onClick={() => setCurrentArticle?.('tourette')} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0c264d] hover:border-[#0c264d] hover:text-white transition-all font-normal text-slate-700">Tourette Syndrome</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Volume V: Mental Health Crossovers */}
            <div className="group relative bg-white rounded-r-2xl rounded-l-sm border-l-[12px] border-[#2abcd4] shadow-[3px_3px_0px_#f8fafc,6px_6px_12px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 duration-300 flex flex-col">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black/15 to-transparent pointer-events-none rounded-l-sm z-10"></div>
              
              <div className="p-6 flex flex-col items-center text-center z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2abcd4] mb-3 block">
                  Volume V
                </span>
                
                <img src="/images/home-mental-health-fire-brain-bright.png" alt="Brain" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-2 leading-tight">
                  Mental Health Crossovers
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-5">
                  Distinctive neurological patterns found at the complex intersection of neurodivergence and mental health.
                </p>
                
                <div className="w-full border-t border-gray-100 pt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-3 block tracking-wider">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['OCD', 'Bipolar', 'Schizophrenia'].map(id => (
                      <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#2abcd4] hover:border-[#2abcd4] hover:text-white transition-all font-normal text-slate-700 capitalize">
                        {id}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Volume VI: Genetic or Environmental */}
            <div className="group relative bg-white rounded-r-2xl rounded-l-sm border-l-[12px] border-[#ffd166] shadow-[3px_3px_0px_#f8fafc,6px_6px_12px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 duration-300 flex flex-col">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black/15 to-transparent pointer-events-none rounded-l-sm z-10"></div>
              
              <div className="p-6 flex flex-col items-center text-center z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4a017] mb-3 block">
                  Volume VI
                </span>
                
                <img src="/images/home-genetics-or-enviro.png" alt="DNA" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-2 leading-tight">
                  Genetic or Environmental
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-5">
                  Conditions arising from specific genetic variations or environmental factors during early development.
                </p>
                
                <div className="w-full border-t border-gray-100 pt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-3 block tracking-wider">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Down Syndrome', 'Intellectual Disability', 'FASD', 'Epilepsy'].map(id => (
                      <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#ffd166] hover:border-[#ffd166] hover:text-[#0c264d] transition-all font-normal text-slate-700 capitalize">
                        {id.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Volume VII: Acquired Neurodivergence */}
            <div className="group relative bg-white rounded-r-2xl rounded-l-sm border-l-[12px] border-[#0A9DC4] shadow-[3px_3px_0px_#f8fafc,6px_6px_12px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1 duration-300 flex flex-col">
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-black/15 to-transparent pointer-events-none rounded-l-sm z-10"></div>
              
              <div className="p-6 flex flex-col items-center text-center z-20">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A9DC4] mb-3 block">
                  Volume VII
                </span>
                
                <img src="/images/home-acquired-brain.png" alt="Injury" className="w-20 sm:w-24 h-auto rounded-lg shadow-sm mb-4" />
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#0c264d] mb-2 leading-tight">
                  Acquired Neurodivergence
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-700 max-w-lg mb-5">
                  Neurological differences that can develop at any point across the lifespan due to injury, illness, or external factors.
                </p>
                
                <div className="w-full border-t border-gray-100 pt-4">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-3 block tracking-wider">Included Topics</span>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['tbi', 'cte', 'pandas'].map(id => (
                      <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs hover:bg-[#0A9DC4] hover:border-[#0A9DC4] hover:text-white transition-all font-normal text-slate-700 uppercase">
                        {id}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </article>
  );
}