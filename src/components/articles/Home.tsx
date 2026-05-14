import React from 'react';
import { Target } from 'lucide-react';

interface HomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function Home({ setCurrentArticle }: HomeProps) {
  return (
    <article className="bg-white -m-8 rounded-lg font-spartan overflow-hidden">
      {/* Top Section - Clean White */}
      <div className="p-4 sm:p-8 bg-white">
        <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl font-bold text-[#0c264d]">
          Welcome to Brainopedia
        </h1>

        {/* Banner Image */}
        <div className="mb-8">
          <img 
            src="/images/brainopedia-banner.png" 
            alt="Brainopedia Banner"
            className="w-full h-auto rounded-xl shadow-md border border-gray-100"
          />
        </div>

        {/* Introduction */}
        <section className="max-w-4xl mb-4">
          <p className="text-lg leading-relaxed text-[#0c264d]">
            Explore our comprehensive volumes on neurodevelopmental, processing, and motor differences. 
            Select a category below to begin your journey through the encyclopedia of the mind.
          </p>
        </section>
      </div>

      {/* The "Blue Stage" for Cards to Pop - FIXED TAG BELOW */}
      <div className="bg-[#f0f9ff] p-4 sm:p-10 border-y border-blue-100">
        <h2 className="text-[#0c264d] font-bold mb-8 text-2xl text-center md:text-left">
          Encyclopedia Volumes
        </h2>
        
        <div className="space-y-8">
          {/* 1. Core Neurodevelopmental */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img src="/images/home-apple-core-neurodev.png" alt="Neural apple" className="w-48 h-auto rounded-lg shadow-sm" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Core Neurodevelopmental</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">Fundamental conditions affecting brain development from early childhood, shaping attention, social communication, and sensory processing.</p>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setCurrentArticle?.('adhd')} className="px-5 py-2 bg-[#f0f9ff] text-[#0c264d] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-bold border border-blue-100">ADHD</button>
                  <button onClick={() => setCurrentArticle?.('autism')} className="px-5 py-2 bg-[#f0f9ff] text-[#0c264d] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-bold border border-blue-100">Autism (ASD)</button>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Learning Differences */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img src="/images/home-learning-diff.png" alt="Cognitive gears" className="w-48 h-auto rounded-lg shadow-sm" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Learning Differences & Profiles</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">Profiles affecting how information is processed in reading, writing, and mathematics, highlighting cognitive diversity.</p>
                <div className="flex flex-wrap gap-2">
                  {['dyslexia', 'dyscalculia', 'dysgraphia', 'nvld', 'dld', 'hyperlexia', 'giftedness', 'twice-exceptional'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-gray-50 text-[#0c264d] rounded-full text-xs hover:bg-[#ffd166] transition-all font-bold border border-gray-100 uppercase">{id.replace('-', ' ')}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Processing & Sensory */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img src="/images/home-math-sensory-brain.png" alt="Sensory processing" className="w-48 h-auto rounded-lg shadow-sm" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Processing & Sensory</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">Atypical ways of interpreting sensory information, including auditory, visual, and tactile inputs.</p>
                <div className="flex flex-wrap gap-2">
                  {['apd', 'visual-processing', 'spd', 'misophonia', 'synesthesia'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-gray-50 text-[#0c264d] rounded-full text-xs hover:bg-[#ec4899] hover:text-white transition-all font-bold border border-gray-100 uppercase">{id.replace('-', ' ')}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. Movement & Motor */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img src="/images/home-movement-motor.png" alt="Motor coordination" className="w-48 h-auto rounded-lg shadow-sm" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Movement & Motor</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">Conditions affecting the brain's ability to plan, coordinate, and execute physical movements.</p>
                <div className="flex flex-wrap gap-2">
                  {['dyspraxia', 'tourette'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-5 py-2 bg-gray-50 text-[#0c264d] rounded-full text-sm hover:bg-[#ffd700] transition-all font-bold border border-gray-100 uppercase">{id.replace('-', ' ')}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. Mental Health Crossovers */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img src="/images/home-mental-health-fire-brain-bright.png" alt="Mental health crossover" className="w-48 h-auto rounded-lg shadow-sm" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Mental Health Crossovers</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">Conditions at the intersection of neurodivergence and mental health, involving distinctive neurological patterns.</p>
                <div className="flex flex-wrap gap-2">
                  {['ocd', 'bipolar', 'schizophrenia'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-5 py-2 bg-gray-50 text-[#0c264d] rounded-full text-sm hover:bg-[#0a9dc4] hover:text-white transition-all font-bold border border-gray-100 uppercase">{id}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6. Genetic or Environmental */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img src="/images/home-genetics-or-enviro.png" alt="DNA and Environment" className="w-48 h-auto rounded-lg shadow-sm" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Genetic or Environmental</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">Conditions arising from genetic variations or environmental factors during prenatal development and early life.</p>
                <div className="flex flex-wrap gap-2">
                  {['down-syndrome', 'intellectual-disability', 'fasd', 'epilepsy'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-4 py-2 bg-gray-50 text-[#0c264d] rounded-full text-xs hover:bg-[#8b5cf6] hover:text-white transition-all font-bold border border-gray-100 uppercase">{id.replace('-', ' ')}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 7. Acquired Neurodivergence */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img src="/images/home-acquired-brain.png" alt="Acquired brain injury" className="w-48 h-auto rounded-lg shadow-sm" />
              <div>
                <h3 className="text-[#0c264d] text-xl font-bold mb-3">Acquired Neurodivergence</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-600">Differences that develop after birth due to injury, illness, or environmental factors affecting the brain.</p>
                <div className="flex flex-wrap gap-2">
                  {['tbi', 'cte', 'pandas'].map(id => (
                    <button key={id} onClick={() => setCurrentArticle?.(id)} className="px-5 py-2 bg-gray-50 text-[#0c264d] rounded-full text-sm hover:bg-[#ffcc00] transition-all font-bold border border-gray-100 uppercase">{id}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
{/* ... End of the Blue Stage div ... */}
      </div> 

      {/* Mission Footer Section - Full Width Bar */}
      <section className="w-full p-8 sm:p-12 bg-white text-center border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <Target className="w-10 h-10 text-[#2abcd4] mx-auto mb-4" />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl uppercase tracking-widest">Our Mission</h2>
          <p className="text-base leading-relaxed text-gray-600 italic">
            "Brainopedia is an innovative online encyclopedia dedicated to providing comprehensive, 
            accessible, and respectful information about neurodivergent experiences, fostering understanding 
            through well-organized, research-informed content."
          </p>
        </div>
      </section>
    </article>
  );
}