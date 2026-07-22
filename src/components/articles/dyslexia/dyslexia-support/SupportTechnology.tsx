import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';

interface SupportTechnologyProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportTechnology({ setCurrentArticle }: SupportTechnologyProps) {
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

      <Tabs defaultValue="technology" className="w-full">
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

        <TabsContent value="technology" className="animate-fadeIn">
          <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Assistive Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-[#2abcd4] rounded-lg p-4">
              <h4 className="font-bold text-[#0A9DC4] mb-2">Reading Technology</h4>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li><strong>Text-to-speech:</strong> NaturalReader, Voice Dream Reader, Kurzweil 3000.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
                <li><strong>OCR:</strong> Converts images/PDFs to readable text.</li>
                <li><strong>Electronic books:</strong> Kindle, iPad with accessibility features.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
                <li><strong>Reading pens:</strong> C-Pen Reader scans/reads text aloud.</li>
              </ul>
            </div>
            <div className="border border-[#2abcd4] rounded-lg p-4">
              <h4 className="font-bold text-[#0A9DC4] mb-2">Writing Technology</h4>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li><strong>Word prediction:</strong> Co:Writer, Read&Write.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
                <li><strong>Speech-to-text:</strong> Google Docs voice typing, Windows dictation.</li>
                <li><strong>Grammar checkers:</strong> Grammarly, ProWritingAid.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
              </ul>
            </div>
            <div className="border border-[#2abcd4] rounded-lg p-4">
              <h4 className="font-bold text-[#0A9DC4] mb-2">Organization Tools</h4>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li><strong>Organizers:</strong> Google Calendar, Trello, Notion.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
                <li><strong>Note-taking:</strong> OneNote, Notability (with audio).</li>
                <li><strong>Study apps:</strong> Quizlet, Evernote.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Educational Programs (IEP vs. 504)</h3>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h4 className="font-bold text-[#0c264d] mb-3">IEP (Individualized Education Program)</h4>
            <p className="text-sm text-slate-700 mb-2">Under IDEA for students whose dyslexia impacts academic performance.</p>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1 mb-4">
              <li>Includes specialized instruction (e.g., resource room).</li>
              <li>Requires measurable annual goals and monitoring.</li>
            </ul>

            <h4 className="font-bold text-[#0c264d] mb-3">504 Plan</h4>
            <p className="text-sm text-slate-700 mb-2">Under Section 504 of the Rehabilitation Act; requires accommodations only.</p>
            <ul className="list-disc ml-5 text-sm text-slate-700 space-y-1">
              <li>Modifies the learning environment (e.g., extended time).</li>
              <li>Broad eligibility; easier to qualify than IEP.</li>
            </ul>
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
                <p>1. Stodden, R. A., Roberts, K. D., Takahashi, K., Park, H. J., & Stodden, N. J. (2012). "Use of text-to-speech software to improve reading skills of high school struggling readers." <em>Procedia Computer Science</em>, 14, 359-362.</p>
                <p>2. Schneps, M. H., Thomson, J. M., Sonnert, G., Pomplun, M., Chen, C., & Heffner-Wong, A. (2013). "Shorter lines facilitate reading in those who struggle." <em>PloS One</em>, 8(8), e71161.</p>
                <p>3. MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
                <p>4. Grimes, D., & Warschauer, M. (2010). "Utility in a fallible tool: A multi-site case study of automated writing evaluation." <em>The Journal of Technology, Learning and Assessment</em>, 8(6).</p>
                <p>5. Cumming, T. M., & Rodríguez, C. D. (2017). "A meta-analysis of mobile technology supporting individuals with disabilities." <em>The Journal of Special Education Technology</em>, 32(2), 93-109.</p>
                <p>6. Haydon, T., Mancil, G. R., Kroeger, S. D., McLeskey, J., & Lin, W. J. (2011). "A review of the effectiveness of guided notes for students who struggle learning academic content." <em>Preventing School Failure</em>, 55(4), 226-231.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</li>
                <li>Yell, M. L., & Bateman, D. F. (2017). "Endrew F. v. Douglas County School District (2017): FAPE and the U.S. Supreme Court." <em>Teaching Exceptional Children</em>, 50(1), 7-15.</li>
                <li>Section 504 of the Rehabilitation Act of 1973, 29 U.S.C. § 794.</li>
                <li>Zirkel, P. A. (2009). "What does the law say? Section 504, the ADA, and the schools." <em>Teaching Exceptional Children</em>, 41(5), 68-71.</li>
                <li>Drasgow, E., Yell, M. L., & Robinson, T. R. (2001). "Developing legally correct and educationally appropriate IEPs." <em>Remedial and Special Education</em>, 22(6), 359-373.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}