import React from 'react';
import { Target } from 'lucide-react';

interface HomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function Home({ setCurrentArticle }: HomeProps) {
  return (
    <article className="bg-[#fffbf0] -m-8 p-4 sm:p-8 rounded-lg font-spartan">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl font-bold">
        Welcome to Brainopedia
      </h1>

      <div className="space-y-10">
        {/* Banner Image */}
        <div className="mb-8">
          <img 
            src="/images/brainopedia-banner.png" 
            alt="Brainopedia - Your encyclopedic platform about neurodivergent minds"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
          />
        </div>

        {/* Introduction */}
        <section className="max-w-4xl">
          <p className="text-lg leading-relaxed text-[#0c264d]">
            Explore our comprehensive volumes on neurodevelopmental, processing, and motor differences. 
            Select a category below to begin your journey through the encyclopedia of the mind.
          </p>
        </section>

        {/* Encyclopedia Coverage - ALL 7 CATEGORIES */}
        <section className="space-y-6">
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-l-4 border-[#2abcd4] pl-4">
            Encyclopedia Volumes
          </h2>
          
          {/* 1. Core Neurodevelopmental */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#2abcd4] shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <img src="/images/home-apple-core-neurodev.png" alt="Neural apple" className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Core Neurodevelopmental</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">Fundamental conditions affecting brain development from early childhood, shaping attention, social communication, and sensory processing.</p>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setCurrentArticle?.('adhd')} className="px-4 py-2 bg-white border-2 border-[#2abcd4] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-bold text-[#0c264d]">ADHD</button>
                  <button onClick={() => setCurrentArticle?.('autism')} className="px-4 py-2 bg-white border-2 border-[#2abcd4] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-bold text-[#0c264d]">Autism (ASD)</button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Learning Differences */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#ffd166] shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <img src="/images/home-learning-diff.png" alt="Cognitive gears" className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Learning Differences & Profiles</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">Profiles affecting how information is processed in reading, writing, and mathematics, highlighting cognitive diversity.</p>
                <div className="flex flex-wrap gap-2">
                  {['dyslexia', 'dyscalculia', 'dysgraphia', 'nvld', 'dld', 'hyperlexia', 'giftedness', 'twice-exceptional'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] transition-all font-bold text-[#0c264d] uppercase">{id.replace('-', ' ')}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Processing & Sensory */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#ec4899] shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <img src="/images/home-math-sensory-brain.png" alt="Sensory processing" className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Processing & Sensory</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">Atypical ways of interpreting sensory information, including auditory, visual, and tactile inputs.</p>
                <div className="flex flex-wrap gap-2">
                  {['apd', 'visual-processing', 'spd', 'misophonia', 'synesthesia'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-bold text-[#0c264d] uppercase">{id.replace('-', ' ')}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Movement & Motor */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#ffd700] shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <img src="/images/home-movement-motor.png" alt="Motor coordination" className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Movement & Motor</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">Conditions affecting the brain's ability to plan, coordinate, and execute physical movements.</p>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setCurrentArticle?.('dyspraxia')} className="px-4 py-2 bg-white border-2 border-[#ffd700] rounded-full text-sm hover:bg-[#ffd700] transition-all font-bold text-[#0c264d]">Dyspraxia (DCD)</button>
                  <button onClick={() => setCurrentArticle?.('tourette')} className="px-4 py-2 bg-white border-2 border-[#ffd700] rounded-full text-sm hover:bg-[#ffd700] transition-all font-bold text-[#0c264d]">Tourette Syndrome</button>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Mental Health Crossovers */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#0a9dc4] shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <img src="/images/home-mental-health-fire-brain-bright.png" alt="Mental health crossover" className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Mental Health Crossovers</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">Conditions at the intersection of neurodivergence and mental health, involving distinctive neurological patterns.</p>
                <div className="flex flex-wrap gap-2">
                  {['ocd', 'bipolar', 'schizophrenia'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#0a9dc4] rounded-full text-sm hover:bg-[#0a9dc4] hover:text-white transition-all font-bold text-[#0c264d] uppercase">{id}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6. Genetic or Environmental */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#8b5cf6] shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <img src="/images/home-genetics-or-enviro.png" alt="DNA and Environment" className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Genetic or Environmental</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">Conditions arising from genetic variations or environmental factors during prenatal development and early life.</p>
                <div className="flex flex-wrap gap-2">
                  {['down-syndrome', 'intellectual-disability', 'fasd', 'epilepsy'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#8b5cf6] rounded-full text-sm hover:bg-[#8b5cf6] hover:text-white transition-all font-bold text-[#0c264d] uppercase">{id.replace('-', ' ')}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 7. Acquired Neurodivergence */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#ffcc00] shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <img src="/images/home-acquired-brain.png" alt="Acquired brain injury" className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Acquired Neurodivergence</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">Differences that develop after birth due to injury, illness, or environmental factors affecting the brain.</p>
                <div className="flex flex-wrap gap-2">
                  {['tbi', 'cte', 'pandas'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-white border-2 border-[#ffcc00] rounded-full text-sm hover:bg-[#ffcc00] transition-all font-bold text-[#0c264d] uppercase">{id}</button>
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