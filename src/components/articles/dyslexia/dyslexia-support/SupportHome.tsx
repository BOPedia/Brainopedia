import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface SupportHomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportHome({ setCurrentArticle }: SupportHomeProps) {
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

      <Tabs defaultValue="home" className="w-full">

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

        <TabsContent value="home" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Home Support Strategies
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-support-home-TAB-intro.png"
              alt="Home support strategies for dyslexia"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-8 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Supporting an individual with dyslexia extends far beyond the classroom. Creating a nurturing, structured, and literacy-rich home environment is crucial for building their confidence and reinforcing the skills they learn at school.
            </p>
          </div>

          {/* Supportive Environment (Float Right) */}
          <h3 className="text-2xl font-bold mt-2 mb-4 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Creating a Supportive Environment</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-home-TAB-environment.png"
            alt="Creating a structured homework space"
            className="w-56 h-auto rounded-md border border-gray-300 shadow-sm float-right ml-6 mb-4"
          />

          <div className="space-y-4 mb-10">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/4">Dedicated Workspace</div>
              <div className="text-sm text-slate-700 md:w-3/4">Designate a specific, quiet, and well-lit area for homework that is free from high-traffic household distractions.</div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <div className="font-bold text-[#0A9DC4] md:w-1/4">Consistent Routines</div>
              <div className="text-sm text-slate-700 md:w-3/4">Establish predictable daily schedules. Knowing exactly when homework time begins and ends helps reduce anxiety and task avoidance.</div>
            </div>
          </div>

          {/* Reading at Home (Big Full Pic) */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">Reading at Home</h3>
          
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-home-TAB-reading.png"
            alt="Strategies for reading at home"
            className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2 text-center">Read Aloud Together</h4>
              <p className="text-sm text-slate-700 flex-grow">Modeling fluent, expressive reading helps build vocabulary and comprehension without the cognitive strain of decoding.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2 text-center">High-Interest Materials</h4>
              <p className="text-sm text-slate-700 flex-grow">Allow reading choices based on passion—comic books, graphic novels, and magazines are all valid and engaging materials.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <h4 className="font-bold text-[#0c264d] mb-2 text-center">Audiobooks Count</h4>
              <p className="text-sm text-slate-700 flex-grow">Listening to audiobooks provides access to complex narratives and advanced vocabulary that may be above their independent reading level.</p>
            </div>
          </div>

          {/* School Communication (Cards) */}
          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 clear-both">School Communication</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Check-ins Card */}
            <div className="bg-gray-300 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 text-center">Teacher Check-ins</h4>
              <div className="bg-white p-4 rounded-lg shadow-sm text-sm text-slate-700 flex-grow">
                Maintain open, regular communication with teachers. Share what is working at home and ask for specific updates on classroom progress to ensure strategies are aligned.
              </div>
            </div>

            {/* IEP/504 Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 text-center">IEP & 504 Advocacy</h4>
              <div className="bg-white p-4 rounded-lg shadow-sm text-sm text-slate-700 flex-grow">
                Prepare thoroughly for school meetings. Keep an organized binder of all evaluations, work samples, and formal communications to effectively advocate for necessary accommodations.
              </div>
            </div>
          </div>
                  
                    <ImageWithFallback 
                      src="/images/dyslexia/dyslexia-support-home-TAB-school.png"
                      alt="Timeline and intensity of dyslexia intervention"
                      className="block mx-auto w-full max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
                    />

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
            
            {/* Empty Cited Studies Section left as a structural placeholder per standard */}
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-3 text-slate-600 leading-relaxed italic" style={{ textIndent: 0 }}>
                <p>No explicit statistical claims or empirical studies directly cited in the text of this section.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Aronson, A. G. (2010). "New perspectives on reading intervention through audiobook technology." <em>Reading Psychology</em>. https://doi.org/10.1080/02702711.2010.505166</li>
                <li>Bus, A. G., van Ijzendoorn, M. H., & Pellegrini, A. D. (1995). "Joint book reading makes for success in learning to read: A meta-analysis on intergenerational transmission of literacy." <em>Review of Educational Research</em>. https://doi.org/10.3102/00346543065001001</li>
                <li>Cooper, H., Robinson, J. C., & Patall, E. A. (2006). "Does homework improve academic achievement? A synthesis of research, 1987–2003." <em>Review of Educational Research</em>. https://doi.org/10.3102/00346543076001001</li>
                <li>Epstein, J. L. (2001). <em>School, family, and community partnerships: Preparing educators and improving schools</em>. Westview Press.</li>
                <li>Epstein, J. L., & Van Voorhis, F. L. (2001). "More than minutes: Teachers' roles in designing homework." <em>Educational Psychologist</em>. https://doi.org/10.1207/S15326985EP3603_4</li>
                <li>Garriott, P. P., Wandry, D., & Snyder, L. (2000). "Teachers as parents, parents as children: What's wrong with this picture?" <em>Preventing School Failure</em>. https://doi.org/10.1080/10459880009599806</li>
                <li>Guthrie, J. T., & Humenick, N. M. (2004). "Motivating students to read: Evidence for classroom practices that increase reading motivation and achievement." In <em>The voice of evidence in reading research</em>. Paul H. Brookes.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}