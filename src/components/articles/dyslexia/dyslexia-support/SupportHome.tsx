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
              <div className="bg-white p-5 rounded-lg shadow-sm text-sm text-slate-700 flex-grow space-y-5">
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Align Strategies:</strong>
                    Maintain open, regular communication with teachers. Share what is working at home and ask for classroom updates.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Map Timelines:</strong>
                    For college-bound students, use meetings to proactively map out transition timelines and deadlines.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Update Evaluations:</strong>
                    Ensure psychoeducational evaluations remain current (universities typically require testing within three years).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Shift to Self-Advocacy:</strong>
                    Gradually hand over the reins toward student-led meetings to build university-level independence.
                  </div>
                </div>

              </div>
            </div>

            {/* IEP/504 Card */}
            <div className="bg-gray-300 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-3 text-center">IEP & 504 Advocacy</h4>
              <div className="bg-white p-5 rounded-lg shadow-sm text-sm text-slate-700 flex-grow space-y-5">
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Meeting Preparation:</strong>
                    Prepare thoroughly for school meetings to effectively advocate for necessary accommodations.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Digital Organization:</strong>
                    Keep a dedicated folder of documents on your computer or phone for quick reference during meetings.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Physical Binder:</strong>
                    If you prefer paper copies, maintain an organized binder of all evaluations, work samples, and formal communications.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Actionable Advocacy:</strong>
                    Use these organized records to clearly demonstrate the student's progress and secure necessary interventions.
                  </div>
                </div>

              </div>
            </div>
          </div>
                  
          <ImageWithFallback 
            src="/images/dyslexia/dyslexia-support-home-TAB-school.png"
            alt="School communication and advocacy strategies"
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