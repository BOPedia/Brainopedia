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
        <TabsContent value="executive">
    <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both text-center">
            How to Support Executive Dysfunction
          </h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-execdys-TAB-tools.png"
            alt="Executive dysfunction support tools"
            className="block mx-auto w-full max-w-2xl mb-10 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
            Many individuals with dyslexia also experience co-occurring executive function challenges. Supporting these foundational skills is just as vital as providing direct reading intervention.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Organization Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Organization</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Color-Coding:</strong> Use color-coded folders and binders to quickly categorize subjects and reduce physical clutter.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Digital Planners:</strong> Centralize assignments and due dates using digital tools like Google Calendar or Notion.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Checklist Systems:</strong> Provide explicit, step-by-step visual breakdowns for routine daily tasks.
                </div>
              </div>
            </div>

            {/* Time Management Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Time Management</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Visual Timers:</strong> Use visual clocks to make the abstract concept of passing time concrete and visible.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Task Chunking:</strong> Break large, overwhelming projects into smaller milestones with mini-deadlines.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Time Allowances:</strong> Formalize extended time for reading and testing to remove the pressure of processing speed.
                </div>
              </div>
            </div>

            {/* Study Skills Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Study Skills</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">SQ3R Method:</strong> Survey, Question, Read, Recite, and Review to actively engage with the text rather than passively scanning.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Cornell Notes:</strong> Use structured note-taking systems that force the summarization and synthesis of key concepts.
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4]">Concept Maps:</strong> Leverage mind-mapping tools to visually connect ideas, bypassing heavy text-based outlining.
                </div>
              </div>
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
                <p>1. Reiter, A., Tucha, O., & Lange, K. W. (2005). "Executive functions in children with dyslexia." <em>Dyslexia</em>. https://doi.org/10.1002/dys.289</p>
                <p>2. Hughes, C. A., & Suritsky, S. K. (1994). "Note-taking skills of university students with and without learning disabilities." <em>Journal of Learning Disabilities</em>. https://doi.org/10.1177/002221949402700104</p>
                <p>3. Gureasko-Moore, S., DuPaul, G. J., & White, G. P. (2007). "Self-management of classroom preparedness and homework." <em>School Psychology Review</em>. https://doi.org/10.1080/02796015.2007.12087923</p>
                <p>4. Barkley, R. A. (1997). "Behavioral inhibition, sustained attention, and executive functions." <em>Psychological Bulletin</em>. https://doi.org/10.1037/0033-2909.121.1.65</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Dawson, P., & Guare, R. (2010). <em>Executive skills in children and adolescents</em>. Guilford Press.</li>
                <li>Novak, J. D., & Gowin, D. B. (1984). <em>Learning how to learn</em>. Cambridge University Press.</li>
                <li>Robinson, F. P. (1970). <em>Effective study</em>. Harper & Row.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}