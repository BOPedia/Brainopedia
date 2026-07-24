import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface SupportExecutiveProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportExecutive({ setCurrentArticle }: SupportExecutiveProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Dyslexia: Support & Management
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

      <Tabs defaultValue="executive" className="w-full">
   <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="interventions" 
            onClick={() => setCurrentArticle?.('dyslexia-support-interventions')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Interventions
          </TabsTrigger>
          <TabsTrigger 
            value="tutoring" 
            onClick={() => setCurrentArticle?.('dyslexia-support-tutoring')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Tutoring
          </TabsTrigger>
          <TabsTrigger 
            value="multisensory" 
            onClick={() => setCurrentArticle?.('dyslexia-support-multisensory')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Multisensory
          </TabsTrigger>
          <TabsTrigger 
            value="technology" 
            onClick={() => setCurrentArticle?.('dyslexia-support-technology')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Tech & Tools
          </TabsTrigger>
          <TabsTrigger 
            value="executive" 
            onClick={() => setCurrentArticle?.('dyslexia-support-executive')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Executive Function
          </TabsTrigger>
          <TabsTrigger 
            value="social" 
            onClick={() => setCurrentArticle?.('dyslexia-support-social')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Social-Emotional
          </TabsTrigger>
          <TabsTrigger 
            value="home" 
            onClick={() => setCurrentArticle?.('dyslexia-support-home')} 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Home Support
          </TabsTrigger>
        </TabsList>
                  <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both text-center">How to Support Executive Dysfunction</h3>
                  
                  <ImageWithFallback 
                    src="/images/dyslexia/dyslexia-support-execdys-TAB-tools.png"
                    alt="Timeline and intensity of dyslexia intervention"
                    className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
                  />
        <TabsContent value="executive" className="animate-fadeIn">
          <p className="mb-6 text-slate-700 leading-relaxed">
            Many individuals with dyslexia also experience executive function challenges:<sup className="text-green-600 font-bold ml-0.5">1</sup>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-bold text-[#0c264d] mb-2">Organization</h4>
              <ul className="text-sm list-disc ml-5 space-y-1 text-slate-700">
                <li>Color-coded folders/binders.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
                <li>Digital planners.</li>
                <li>Checklist systems.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-bold text-[#0c264d] mb-2">Time Management</h4>
              <ul className="text-sm list-disc ml-5 space-y-1 text-slate-700">
                <li>Visual timers.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
                <li>Chunking large projects.</li>
                <li>Extra time allowance.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h4 className="font-bold text-[#0c264d] mb-2">Study Skills</h4>
              <ul className="text-sm list-disc ml-5 space-y-1 text-slate-700">
                <li>SQ3R method.</li>
                <li>Cornell note-taking.</li>
                <li>Concept maps.</li>
              </ul>
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

          {/* REFERENCES SECTION */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
                <p>1. Reiter, A., Tucha, O., & Lange, K. W. (2005). "Executive functions in children with dyslexia." <em>Dyslexia</em>, 11(2), 116-131.</p>
                <p>2. Hughes, C. A., & Suritsky, S. K. (1994). "Note-taking skills of university students with and without learning disabilities." <em>Journal of Learning Disabilities</em>, 27(1), 20-24.</p>
                <p>3. Gureasko-Moore, S., DuPaul, G. J., & White, G. P. (2007). "Self-management of classroom preparedness and homework." <em>School Psychology Review</em>, 36(4), 647-664.</p>
                <p>4. Barkley, R. A. (1997). "Behavioral inhibition, sustained attention, and executive functions." <em>Psychological Bulletin</em>, 121(1), 65-94.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Dawson, P., & Guare, R. (2010). <em>Executive skills in children and adolescents</em>. Guilford Press.</li>
                <li>Robinson, F. P. (1970). <em>Effective study</em>. Harper & Row.</li>
                <li>Novak, J. D., & Gowin, D. B. (1984). <em>Learning how to learn</em>. Cambridge University Press.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}