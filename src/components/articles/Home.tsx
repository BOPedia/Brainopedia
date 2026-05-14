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

      <div className="space-y-12">
        {/* Banner Image */}
        <div className="mb-8">
          <img 
            src="/images/brainopedia-banner.png" 
            alt="Brainopedia - Your encyclopedic platform about neurodivergent minds"
            className="w-full h-auto rounded-xl shadow-lg border border-gray-100"
          />
        </div>

        {/* Introduction */}
        <section className="max-w-3xl">
          <p className="text-lg leading-relaxed text-[#0c264d]">
            Explore our comprehensive volumes on neurodevelopmental, processing, and motor differences. 
            Select a category below to begin your journey through the encyclopedia of the mind.
          </p>
        </section>

        {/* Encyclopedia Coverage - High Impact Category Cards */}
        <section>
          <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-l-4 border-[#2abcd4] pl-4">
            Encyclopedia Volumes
          </h2>
          
          <div className="space-y-6">
            {/* Core Neurodevelopmental */}
            <div className="bg-white p-6 rounded-xl border-2 border-[#2abcd4] shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="/images/home-apple-core-neurodev.png" 
                  alt="Neural network apple"
                  className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start"
                />
                <div>
                  <h3 className="text-[#0c264d] text-xl font-bold mb-3">Core Neurodevelopmental</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700">
                    Fundamental conditions affecting brain development from early childhood, shaping attention, social communication, and sensory processing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setCurrentArticle?.('adhd')} className="px-4 py-2 bg-white border-2 border-[#2abcd4] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-bold">ADHD</button>
                    <button onClick={() => setCurrentArticle?.('autism')} className="px-4 py-2 bg-white border-2 border-[#2abcd4] rounded-full text-sm hover:bg-[#2abcd4] hover:text-white transition-all font-bold">Autism (ASD)</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Differences */}
            <div className="bg-white p-6 rounded-xl border-2 border-[#ffd166] shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="/images/home-learning-diff.png" 
                  alt="Cognitive processing gears"
                  className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start"
                />
                <div>
                  <h3 className="text-[#0c264d] text-xl font-bold mb-3">Learning Differences & Profiles</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700">
                    Profiles affecting how information is processed in reading, writing, and mathematics, highlighting cognitive diversity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setCurrentArticle?.('dyslexia')} className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] transition-all font-bold">Dyslexia</button>
                    <button onClick={() => setCurrentArticle?.('dyscalculia')} className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] transition-all font-bold">Dyscalculia</button>
                    <button onClick={() => setCurrentArticle?.('nvld')} className="px-4 py-2 bg-white border-2 border-[#ffd166] rounded-full text-sm hover:bg-[#ffd166] transition-all font-bold">NVLD</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing & Sensory */}
            <div className="bg-white p-6 rounded-xl border-2 border-[#ec4899] shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="/images/home-math-sensory-brain.png" 
                  alt="Sensory brain illustration"
                  className="w-48 h-auto mx-auto md:mx-0 rounded-lg shadow-md self-start"
                />
                <div>
                  <h3 className="text-[#0c264d] text-xl font-bold mb-3">Processing & Sensory</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700">
                    Atypical ways of interpreting tactile, auditory, and visual inputs, leading to unique perceptual experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setCurrentArticle?.('apd')} className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-bold">APD</button>
                    <button onClick={() => setCurrentArticle?.('spd')} className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-bold">SPD</button>
                    <button onClick={() => setCurrentArticle?.('synesthesia')} className="px-4 py-2 bg-white border-2 border-[#ec4899] rounded-full text-sm hover:bg-[#ec4899] hover:text-white transition-all font-bold">Synesthesia</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Note: You can continue adding the other categories here following this pattern */}
          </div>
        </section>

        {/* Mission Footer */}
        <section className="bg-gradient-to-r from-[#2abcd4]/10 to-[#ffd166]/20 border-l-4 border-[#2abcd4] p-6 rounded-r-xl">
          <div className="flex items-start gap-4">
            <Target className="w-8 h-8 text-[#2abcd4] mt-1 shrink-0" />
            <div>
              <h2 className="text-[#0c264d] font-bold mb-2 text-xl">Our Mission</h2>
              <p className="text-sm leading-relaxed text-[#0c264d]">
                To provide comprehensive, accessible, and respectful information about various neurodivergent experiences in a well-organized, easy-to-navigate format.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}