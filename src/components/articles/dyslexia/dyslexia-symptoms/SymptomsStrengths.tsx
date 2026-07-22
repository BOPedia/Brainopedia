import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';

interface DyslexiaSymptomsStrengthsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaSymptomsStrengths({ setCurrentArticle }: DyslexiaSymptomsStrengthsProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Symptoms & Characteristics
        </h1>
        <button 
          onClick={() => setCurrentArticle?.('dyslexia')}
          className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:block hidden"
        >
          <span className="text-lg">←</span>
          All About Dyslexia
        </button>
      </div>

      {/* Mobile Back Button */}
      <button 
        onClick={() => setCurrentArticle?.('dyslexia')}
        className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0 md:hidden mb-6"
      >
        <span className="text-lg">←</span>
        All About Dyslexia
      </button>
      
      <Tabs defaultValue="strengths" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="core" 
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-core')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Core Characteristics
          </TabsTrigger>
          <TabsTrigger 
            value="strengths" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Strengths
          </TabsTrigger>
          <TabsTrigger 
            value="impact" 
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-impact')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Impact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="strengths" className="animate-fadeIn">
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

          <div className="flex justify-end my-8 clear-both">
            <button 
              onClick={() => setCurrentArticle?.('dyslexia')}
              className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white font-normal text-sm font-spartan py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
            >
              <span className="text-lg">←</span>
              All About Dyslexia
            </button>
          </div>

          {/* REFERENCES */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Eide, B. L., & Eide, F. F. (2011). <em>The Dyslexic Advantage: Unlocking the Hidden Potential of the Dyslexic Brain</em>. Hudson Street Press.</p>
                <p>2. Von Karolyi, C. (2001). "Visual-spatial strength in dyslexia: Rapid discrimination of impossible figures." <em>Journal of Experimental Child Psychology</em>, 80(1), 66-81.</p>
                <p>3. West, T. G. (2009). <em>In the Mind's Eye: Creative Visual Thinkers, Gifted Dyslexics, and the Rise of Visual Technologies</em>. Prometheus Books.</p>
                <p>4. Schneps, M. H., et al. (2012). "Dyslexia favors visual thinking." <em>Psychological Science</em>, 23(10), 1267-1273.</p>
                <p>5. Everatt, J., et al. (1999). "Dyslexia, spatial ability, and creative thinking." <em>Dyslexia</em>, 5(3), 171-187.</p>
                <p>6. Goldberg, R. J., Higgins, E. L., Raskind, M. H., & Herman, K. L. (2003). "Predictors of success in individuals with learning disabilities: A qualitative analysis of a 20-year longitudinal study." <em>Learning Disabilities Research & Practice</em>, 18(4), 222-236.</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}