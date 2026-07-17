import React from 'react';

interface HomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function Home({ setCurrentArticle }: HomeProps) {
  return (
    <article className="bg-[#ffffff] -m-8 p-4 sm:p-8 rounded-lg font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl font-bold">
        Welcome to Brainopedia
      </h1>

      <div className="space-y-12">
        {/* Banner Video */}
        <div className="mb-8">
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
        <section className="max-w-3xl">
          <p className="text-base leading-relaxed text-gray-700">
            Explore our comprehensive volumes of neurodivergent conditions shown below in seven clusters distinctly named. 
            Select a category below to begin your journey through the encyclopedia of the mind.
          </p>
        </section>

        {/* Encyclopedia Volumes - SINGLE COLUMN, CENTERED CARDS */}
        <section>
          <h2 className="text-[#0c264d] font-bold mb-8 text-2xl">Encyclopedia Volumes</h2>

          <div className="flex flex-col gap-8 items-center w-full">
            
            {/* Volume 1: Core Neurodevelopmental */}
            <div className="w-full max-w-2xl bg-gradient-to-br from-[#2abcd4]/20 to-[#2abcd4]/5 p-6 sm:p-8 rounded-xl border-2 border-[#2abcd4] shadow-sm flex flex-col items-center text-center">
              <img src="/images/home-apple-core-neurodev.png" alt="Neural apple" className="w-40 sm:w-48 h-auto rounded-lg shadow-md mb-5" />
              <div className="flex flex-col flex-1 w-full items-center">
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Core Neurodevelopmental</h3>
                <p className="mb-5 text-base leading-relaxed text-gray-700 max-w-lg">Fundamental neurodevelopmental conditions affecting attention, social communication, and sensory processing from early childhood.</p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  <button onClick={() => setCurrentArticle?.('adhd')} className="px-4 py-2 bg-white border-2 border-[#2abcd4] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-bold">ADHD</button>
                  <button onClick={() => setCurrentArticle?.('autism')} className="px-4 py-2 bg-white border-2 border-[#2abcd4] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-bold">Autism or "ASD"</button>
                </div>
              </div>
            </div>

            {/* Volume 2: Learning Differences */}
            <div className="w-full max-w-2xl bg-gradient-to-br from-[#ffd166]/30 to-[#ffd166]/5 p-6 sm:p-8 rounded-xl border-2 border-[#ffd166] shadow-sm flex flex-col items-center text-center">
              <img src="/images/home-learning-diff.png" alt="Gears" className="w-40 sm:w-48 h-auto rounded-lg shadow-md mb-5" />
              <div className="flex flex-col flex-1 w-full items-center">
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Learning Differences & Profiles</h3>
                <p className="mb-5 text-base leading-relaxed text-gray-700 max-w-lg">Profiles affecting how individuals process, retain, and express information across reading, writing, and math.</p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {['dyslexia', 'dyscalculia', 'dysgraphia', 'nvld', 'dld', 'hyperlexia', 'giftedness', 'twice-exceptional'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] hover:text-[#0c264d] transition-all font-bold uppercase">
                      {id.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Volume 3: Processing & Sensory */}
            <div className="w-full max-w-2xl bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 p-6 sm:p-8 rounded-xl border-2 border-[#ec4899] shadow-sm flex flex-col items-center text-center">
              <img src="/images/home-math-sensory-brain.png" alt="Sensory" className="w-40 sm:w-48 h-auto rounded-lg shadow-md mb-5" />
              <div className="flex flex-col flex-1 w-full items-center">
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Processing & Sensory</h3>
                <p className="mb-5 text-base leading-relaxed text-gray-700 max-w-lg">Atypical ways of interpreting sensory information like auditory, visual, and tactile inputs.</p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {['apd', 'visual-processing', 'spd', 'misophonia', 'synesthesia'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-bold uppercase">
                      {id.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Volume 4: Movement & Motor */}
            <div className="w-full max-w-2xl bg-gradient-to-br from-[#ffd700]/30 to-[#ffd700]/5 p-6 sm:p-8 rounded-xl border-2 border-[#ffd700] shadow-sm flex flex-col items-center text-center">
              <img src="/images/home-movement-motor.png" alt="Motor" className="w-40 sm:w-48 h-auto rounded-lg shadow-md mb-5" />
              <div className="flex flex-col flex-1 w-full items-center">
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Movement & Motor</h3>
                <p className="mb-5 text-base leading-relaxed text-gray-700 max-w-lg">Conditions affecting the brain's ability to plan, coordinate, and execute physical movements.</p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  <button onClick={() => setCurrentArticle?.('dyspraxia')} className="px-4 py-2 bg-white border-2 border-[#ffd700] rounded-full text-sm hover:bg-[#ffd700] hover:text-[#0c264d] transition-all font-bold uppercase">Dyspraxia</button>
                  <button onClick={() => setCurrentArticle?.('tourette')} className="px-4 py-2 bg-white border-2 border-[#ffd700] rounded-full text-sm hover:bg-[#ffd700] hover:text-[#0c264d] transition-all font-bold uppercase">Tourette</button>
                </div>
              </div>
            </div>

            {/* Volume 5: Mental Health Crossovers */}
            <div className="w-full max-w-2xl bg-gradient-to-br from-[#0a9dc4]/20 to-[#0a9dc4]/5 p-6 sm:p-8 rounded-xl border-2 border-[#0a9dc4] shadow-sm flex flex-col items-center text-center">
              <img src="/images/home-mental-health-fire-brain-bright.png" alt="Brain" className="w-40 sm:w-48 h-auto rounded-lg shadow-md mb-5" />
              <div className="flex flex-col flex-1 w-full items-center">
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Mental Health Crossovers</h3>
                <p className="mb-5 text-base leading-relaxed text-gray-700 max-w-lg">Distinctive neurological patterns at the intersection of neurodivergence and mental health.</p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {['ocd', 'bipolar', 'schizophrenia'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#0a9dc4] rounded-full text-sm hover:bg-[#0a9dc4] hover:text-white transition-all font-bold uppercase">
                      {id}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Volume 6: Genetic or Environmental */}
            <div className="w-full max-w-2xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#8b5cf6]/5 p-6 sm:p-8 rounded-xl border-2 border-[#8b5cf6] shadow-sm flex flex-col items-center text-center">
              <img src="/images/home-genetics-or-enviro.png" alt="DNA" className="w-40 sm:w-48 h-auto rounded-lg shadow-md mb-5" />
              <div className="flex flex-col flex-1 w-full items-center">
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Genetic or Environmental</h3>
                <p className="mb-5 text-base leading-relaxed text-gray-700 max-w-lg">Conditions arising from genetic variations or environmental factors during early development.</p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {['down-syndrome', 'intellectual-disability', 'fasd', 'epilepsy'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#8b5cf6] rounded-full text-sm hover:bg-[#8b5cf6] hover:text-white transition-all font-bold uppercase">
                      {id.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Volume 7: Acquired Neurodivergence */}
            <div className="w-full max-w-2xl bg-gradient-to-br from-[#ffcc00]/25 to-[#ffcc00]/5 p-6 sm:p-8 rounded-xl border-2 border-[#ffcc00] shadow-sm flex flex-col items-center text-center">
              <img src="/images/home-acquired-brain.png" alt="Injury" className="w-40 sm:w-48 h-auto rounded-lg shadow-md mb-5" />
              <div className="flex flex-col flex-1 w-full items-center">
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Acquired Neurodivergence</h3>
                <p className="mb-5 text-base leading-relaxed text-gray-700 max-w-lg">Neurological differences that can develop at any point across the lifespan due to injury, illness, or environmental factors.</p>
                <div className="flex flex-wrap gap-2 justify-center mt-auto">
                  {['tbi', 'cte', 'pandas'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#ffcc00] rounded-full text-sm hover:bg-[#ffcc00] hover:text-[#0c264d] transition-all font-bold uppercase">
                      {id}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </article>
  );
}