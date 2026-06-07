import React from 'react';

interface DyslexiaSymptomsStrengthsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaSymptomsStrengths({ setCurrentArticle }: DyslexiaSymptomsStrengthsProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      {/* Header and Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-spartan text-[#0c264d]">Symptoms: Strengths</h2>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2"
        >
          <span>←</span> All About Dyslexia
        </button>
      </div>
      
      <div className="prose max-w-none animate-fadeIn">
        
        {/* INTERACTIVE TABS */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <button onClick={() => setCurrentArticle?.('dyslexia-symptoms-core')} className="py-3 px-6 rounded-lg font-bold bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm">Core Characteristics</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-symptoms-strengths')} className="py-3 px-6 rounded-lg font-bold bg-[#0A9DC4] text-white shadow-md">Strengths</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-symptoms-impact')} className="py-3 px-6 rounded-lg font-bold bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm">Impact</button>
        </div>

        {/* CONTENT */}
        <p className="mb-8 text-slate-700 leading-relaxed">
          It is a misconception that dyslexia is only defined by reading challenges. Many individuals with dyslexia demonstrate unique cognitive strengths that often correlate with the neurobiological differences inherent to the condition.<sup className="text-green-600 font-bold ml-0.5">1</sup>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="text-xl font-bold mb-3 text-[#0A9DC4]">Visual-Spatial Processing</h4>
            <p className="text-sm text-slate-700">
              Enhanced ability to visualize and manipulate complex 3D objects and structural systems.<sup className="text-green-600 font-bold ml-0.5">2</sup> Many excel in architecture, engineering, and visual design fields where spatial reasoning is critical.<sup className="text-green-600 font-bold ml-0.5">3</sup>
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="text-xl font-bold mb-3 text-[#0A9DC4]">Creative & Big-Picture Thinking</h4>
            <p className="text-sm text-slate-700">
              A tendency to prioritize holistic, conceptual "big-picture" understanding over rote memorization of details.<sup className="text-green-600 font-bold ml-0.5">4</sup> This promotes innovative problem-solving and unique connections between disparate ideas.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="text-xl font-bold mb-3 text-[#0A9DC4]">Problem-Solving & Reasoning</h4>
            <p className="text-sm text-slate-700">
              Often possess high aptitude for complex problem-solving, particularly in situations that require novel approaches rather than traditional, linear algorithmic thinking.<sup className="text-green-600 font-bold ml-0.5">5</sup>
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="text-xl font-bold mb-3 text-[#0A9DC4]">Resilience & Perseverance</h4>
            <p className="text-sm text-slate-700">
              Navigating learning differences requires developing robust compensatory strategies and resilience, often leading to strong self-advocacy and perseverance in the face of academic or career challenges.<sup className="text-green-600 font-bold ml-0.5">6</sup>
            </p>
          </div>
        </div>

        {/* REFERENCES */}
        <div className="mt-12 pt-6 border-t-2 border-gray-100">
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <button onClick={() => setCurrentArticle?.('dyslexia')} className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 mb-8 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2">← All About Dyslexia</button>
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
              <li>Eide, B. L., & Eide, F. F. (2011). <em>The Dyslexic Advantage: Unlocking the Hidden Potential of the Dyslexic Brain</em>. Hudson Street Press.</li>
              <li>Von Karolyi, C. (2001). "Visual-spatial strength in dyslexia: Rapid discrimination of impossible figures." <em>Journal of Experimental Child Psychology</em>, 80(1), 66-81.</li>
              <li>West, T. G. (2009). <em>In the Mind's Eye: Creative Visual Thinkers, Gifted Dyslexics, and the Rise of Visual Technologies</em>. Prometheus Books.</li>
              <li>Schneps, M. H., et al. (2012). "Dyslexia favors visual thinking." <em>Psychological Science</em>, 23(10), 1267-1273.</li>
              <li>Everatt, J., et al. (1999). "Dyslexia, spatial ability, and creative thinking." <em>Dyslexia</em>, 5(3), 171-187.</li>
              <li>Goldberg, R. J., Higgins, E. L., Raskind, M. H., & Herman, K. L. (2003). "Predictors of success in individuals with learning disabilities: A qualitative analysis of a 20-year longitudinal study." <em>Learning Disabilities Research & Practice</em>, 18(4), 222-236.</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
}