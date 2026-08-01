import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface DyslexiaLivingProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function DyslexiaLiving({ setCurrentArticle, initialTab }: DyslexiaLivingProps) {
  return (
    <article className="max-w-full w-full">
      
      {/* Header and Desktop Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl font-spartan text-[#0c264d] font-normal">
          Living with Dyslexia
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

      <Tabs defaultValue={initialTab || 'daily'} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger 
            value="daily" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Daily Strategies
          </TabsTrigger>
          <TabsTrigger 
            value="school" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            School Success
          </TabsTrigger>
          <TabsTrigger 
            value="work" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Workplace Strategies
          </TabsTrigger>
          <TabsTrigger 
            value="strengths" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Strengths & Success
          </TabsTrigger>
        </TabsList>
        
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-slate-700 leading-relaxed">
            Living with dyslexia presents unique challenges, but with appropriate support and self-understanding, individuals with dyslexia can thrive academically, professionally, and personally. Many highly successful people have dyslexia, demonstrating that it doesn't limit potential—it simply means learning and working differently.
          </p>
        </div>
        
        {/* =========================================
            TAB 1: DAILY STRATEGIES
            ========================================= */}
        <TabsContent value="daily" className="animate-fadeIn">
          
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Navigating Daily Life
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-living-daily-TAB-intro.png" 
              alt="Navigating daily life with dyslexia"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              Dyslexia affects more than just academic environments. The cognitive demands of reading, writing, and organizing information appear constantly throughout everyday activities. Recognizing these hurdles is the first step in developing practical, lifelong compensations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Reading Challenges */}
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-6 text-center">Reading Hurdles</h4>
              <ul className="space-y-4 text-sm w-full flex-grow text-left">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold text-lg leading-none mt-0.5">•</span>
                  <div>
                    <strong className="block text-[#0c264d] mb-1">Menus & Signs:</strong>
                    <span className="text-slate-700">Can be slow and effortful in public settings.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0A9DC4] font-bold text-lg leading-none mt-0.5">•</span>
                  <div>
                    <strong className="block text-[#0c264d] mb-1">Forms:</strong>
                    <span className="text-slate-700">Medical forms and applications can feel overwhelming.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0A9DC4] font-bold text-lg leading-none mt-0.5">•</span>
                  <div>
                    <strong className="block text-[#0c264d] mb-1">Time Pressure:</strong>
                    <span className="text-slate-700">Reading under constraints is particularly difficult.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Writing Challenges */}
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#ffd166] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#0c264d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-6 text-center">Writing Hurdles</h4>
              <ul className="space-y-4 text-sm w-full flex-grow text-left">
                <li className="flex items-start gap-3">
                  <span className="text-[#ffd166] font-bold text-lg leading-none mt-0.5">•</span>
                  <div>
                    <strong className="block text-[#0c264d] mb-1">Spelling:</strong>
                    <span className="text-slate-700">Frequent errors even in common words.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffd166] font-bold text-lg leading-none mt-0.5">•</span>
                  <div>
                    <strong className="block text-[#0c264d] mb-1">Communication:</strong>
                    <span className="text-slate-700">Anxiety about mistakes in emails or texts.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffd166] font-bold text-lg leading-none mt-0.5">•</span>
                  <div>
                    <strong className="block text-[#0c264d] mb-1">Expression Gap:</strong>
                    <span className="text-slate-700">High verbal abilities contrast with written output.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Memory Challenges */}
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#2abcd4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-6 text-center">Memory & Organization</h4>
              <ul className="space-y-4 text-sm w-full flex-grow text-left">
                <li className="flex items-start gap-3">
                  <span className="text-[#2abcd4] font-bold text-lg leading-none mt-0.5">•</span>
                  <div>
                    <strong className="block text-[#0c264d] mb-1">Working Memory:</strong>
                    <span className="text-slate-700">Difficulty holding multiple pieces of verbal info.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2abcd4] font-bold text-lg leading-none mt-0.5">•</span>
                  <div>
                    <strong className="block text-[#0c264d] mb-1">Directions:</strong>
                    <span className="text-slate-700">May need multi-step instructions written down.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2abcd4] font-bold text-lg leading-none mt-0.5">•</span>
                  <div>
                    <strong className="block text-[#0c264d] mb-1">Time Management:</strong>
                    <span className="text-slate-700">Tasks often take much longer than anticipated.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* References for Tab 1 */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed italic" style={{ textIndent: 0 }}>
                <p>No explicit statistical claims or empirical studies directly cited in the text of this section.</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Berninger, V. W., et al. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <i>Journal of School Psychology</i>. https://doi.org/10.1016/j.jsp.2006.11.008</p>
                <p>Breznitz, Z. (2006). <i>Fluency in reading: Synchronization of processes</i>. Routledge. https://doi.org/10.4324/9781410615367</p>
                <p>Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/0022219411426858</p>
                <p>Hughes, C. A., & Suritsky, S. K. (1994). "Note-taking skills of university students with and without learning disabilities." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/002221949402700104</p>
                <p>McNulty, M. A. (2003). "Dyslexia and the life course." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/00222194030360040701</p>
                <p>Swan, D., & Goswami, U. (1997). "Picture naming deficits in developmental dyslexia: The phonological representations hypothesis." <i>Brain and Language</i>. https://doi.org/10.1006/brln.1997.1735</p>
                <p>Swanson, H. L., & Berninger, V. (1995). "The role of working memory in skilled and less skilled readers' comprehension." <i>Intelligence</i>. https://doi.org/10.1016/0160-2896(95)90039-X</p>
              </div>
            </div>
          </div>
        </TabsContent>


        {/* =========================================
            TAB 2: SCHOOL SUCCESS
            ========================================= */}
        <TabsContent value="school" className="animate-fadeIn">
          
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Dyslexia in School Settings
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-living-school-TAB-intro.png" 
              alt="School settings and dyslexia"
              className="w-64 h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              From early reading instruction to the heavy textbook demands of higher education, the classroom presents evolving challenges for students with dyslexia. Anticipating these shifts allows for proactive accommodations at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Elementary */}
            <div className="bg-gray-200 border-t-4 border-[#ffd166] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Elementary School</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Learning to Read:</strong> Noticeable struggle while peers seem to pick up reading easily.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Reading Aloud:</strong> High anxiety about "popcorn reading" or reading in front of the class.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Homework Time:</strong> Tasks take significantly longer than expected for their age group.
                </div>
              </div>
            </div>

            {/* Middle/High School */}
            <div className="bg-gray-200 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Middle & High School</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Reading Demands:</strong> Sudden influx of dense textbooks, novels, and lengthy material.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Note-Taking:</strong> Difficulty capturing lecture notes while simultaneously processing verbal information.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Timed Tests:</strong> Standardized tests and exams under strict time pressure become major hurdles.
                </div>
              </div>
            </div>

            {/* College */}
            <div className="bg-gray-200 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">College & University</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Self-Advocacy:</strong> Complete responsibility shifts to the student for requesting and using disability accommodations.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Volume of Reading:</strong> Hundreds of pages per week require advanced technological compensations (like audiobooks).
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Disclosure Decisions:</strong> Navigating whether and how to disclose their learning difference to professors.
                </div>
              </div>
            </div>

          </div>

          {/* References for Tab 2 */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed italic" style={{ textIndent: 0 }}>
                <p>No explicit statistical claims or empirical studies directly cited in the text of this section.</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Ehri, L. C. (2000). "Learning to read and learning to spell: Two sides of a coin." <i>Topics in Language Disorders</i>. https://doi.org/10.1097/00011363-200020030-00005</p>
                <p>Graham, S., & Harris, K. R. (2000). "The role of self-regulation and transcription skills in writing and writing development." <i>Educational Psychologist</i>. https://doi.org/10.1207/S15326985EP3501_2</p>
                <p>Hatcher, J., et al. (2002). "Cognitive assessment of dyslexic students in higher education." <i>British Journal of Educational Psychology</i>. https://doi.org/10.1348/000709902158793</p>
                <p>Madaus, J. W. (2008). "Employment self-disclosure rates and rationales of university graduates with learning disabilities." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/0022219407313804</p>
                <p>Shaywitz, S. E., & Shaywitz, B. A. (2005). "Dyslexia (specific reading disability)." <i>Biological Psychiatry</i>. https://doi.org/10.1016/j.biopsych.2005.01.043</p>
                <p>Shaywitz, S. E., et al. (2008). "The education of dyslexic children from childhood to young adulthood." <i>Annual Review of Psychology</i>. https://doi.org/10.1146/annurev.psych.59.103006.093633</p>
                <p>Sparks, R. L., et al. (2008). "Early first-language reading and spelling skills predict later second-language reading and spelling skills." <i>Journal of Educational Psychology</i>. https://doi.org/10.1037/0022-0663.100.1.162</p>
                <p>Trainin, G., & Swanson, H. L. (2005). "Cognition, metacognition, and achievement of college students with learning disabilities." <i>Learning Disability Quarterly</i>. https://doi.org/10.2307/1593622</p>
                <p>Vogel, S. A., & Adelman, P. B. (1992). "The success of college students with learning disabilities: Factors related to educational attainment." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/002221949202500703</p>
              </div>
            </div>
          </div>
        </TabsContent>


        {/* =========================================
            TAB 3: WORKPLACE STRATEGIES
            ========================================= */}
        <TabsContent value="work" className="animate-fadeIn">
          
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Dyslexia in the Workplace
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-living-work-TAB-intro.png" 
              alt="Workplace strategies for adults with dyslexia"
              className="block mx-auto w-96 max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            
            <div className="bg-gray-100 p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4 text-center">Workplace Challenges</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full flex-grow">
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Managing high volumes of emails and written documents.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Spelling/grammar concerns during professional report writing.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Learning new systems via dense written manuals.</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h4 className="font-bold text-[#0c264d] text-lg mb-4 text-center">Accommodations</h4>
              <ul className="space-y-3 text-sm text-slate-700 w-full flex-grow">
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Assistive tech: Text-to-speech, dictation, and grammar tools.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Flexible deadlines for reading-heavy tasks.</li>
                <li className="flex items-start gap-2"><span className="text-[#0A9DC4] font-bold mt-0.5">•</span> Training modifications, such as video tutorials over manuals.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-6 text-[#0c264d] border-b border-gray-200 pb-2 text-center">Self-Advocacy & Disclosure</h3>
          
          <div className="flex flex-col gap-6 mb-12">
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#0c264d] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <svg className="w-10 h-10 text-[#ffd166] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                <h4 className="font-bold text-white text-xl">Legal Protections</h4>
                <p className="text-sm text-slate-300 mt-2">Knowing your rights.</p>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">→</span>
                    <div>The Americans with Disabilities Act (ADA) legally protects employees with dyslexia from discrimination.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">→</span>
                    <div>Employers are legally required to provide reasonable accommodations unless they create undue hardship for the business.</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row overflow-hidden">
              <div className="bg-[#0A9DC4] p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                <svg className="w-10 h-10 text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                <h4 className="font-bold text-white text-xl">Disclosure Strategy</h4>
                <p className="text-sm text-[#0c264d] mt-2 font-medium">Navigating workplace communication.</p>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-center">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong>The Decision:</strong> There is no legal requirement to disclose your dyslexia; it is entirely a personal choice based on your comfort level.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong>Strategic Disclosure:</strong> Consider disclosing only to those who need to know (like HR or a direct supervisor) to secure necessary accommodations.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0A9DC4] font-bold mt-0.5">•</span>
                    <div><strong>Pros vs Cons:</strong> Weigh the benefits of reduced stress and access to tools against potential workplace stigmas.</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* References for Tab 3 */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed italic" style={{ textIndent: 0 }}>
                <p>No explicit statistical claims or empirical studies directly cited in the text of this section.</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq. https://www.ada.gov/law-and-regs/ada/</p>
                <p>Aronson, A. G. (2010). "New perspectives on reading intervention through audiobook technology." <i>Reading Psychology</i>. https://doi.org/10.1080/02702711.2010.505166</p>
                <p>Cumming, T. M., & Rodríguez, C. D. (2017). "A meta-analysis of mobile technology supporting individuals with disabilities." <i>The Journal of Special Education Technology</i>. https://doi.org/10.1177/0162643417704439</p>
                <p>Dawson, P., & Guare, R. (2010). <i>Executive skills in children and adolescents: A practical guide to assessment and intervention</i>. Guilford Press. https://www.guilford.com/books/Executive-Skills-in-Children-and-Adolescents/Dawson-Guare/9781462535316</p>
                <p>Eckes, S. E., & Ochoa, T. A. (2005). "Students with disabilities: Transitioning from high school to higher education." <i>American Secondary Education</i>. https://www.jstor.org/stable/41064560</p>
                <p>Eide, B. L., & Eide, F. F. (2011). <i>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</i>. Penguin. https://www.penguinrandomhouse.com/books/308960/the-dyslexic-advantage-revised-and-updated-by-brock-l-eide-md-ma-and-fernette-f-eide-md/</p>
                <p>Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review of the evidenced-based literature for research and practice in adult education." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/0022219411426858</p>
                <p>Gerber, P. J., & Price, L. A. (2003). "Persons with learning disabilities in the workplace: What we know so far in the Americans with Disabilities Act era." <i>Learning Disabilities Research & Practice</i>. https://doi.org/10.1111/1540-5826.00067</p>
                <p>Higgins, E. L., & Raskind, M. H. (2005). "The compensatory effectiveness of the Quicktionary Reading Pen II." <i>Journal of Special Education Technology</i>. https://doi.org/10.1177/016264340502000203</p>
                <p>Hong, B. S., et al. (2007). "Preparing students for postsecondary education." <i>Teaching Exceptional Children</i>. https://doi.org/10.1177/004005990704000104</p>
                <p>Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004). https://sites.ed.gov/idea/statuteregulations/</p>
                <p>Leather, C., et al. (2011). "Cognitive functioning and work success in adults with dyslexia." <i>Dyslexia</i>. https://doi.org/10.1002/dys.441</p>
                <p>Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <i>Dyslexia</i>. https://doi.org/10.1002/dys.388</p>
                <p>MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <i>Learning Disabilities Research & Practice</i>. https://doi.org/10.1111/j.1540-5826.2009.00283.x</p>
                <p>Madaus, J. W. (2008). "Employment self-disclosure rates and rationales of university graduates with learning disabilities." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/0022219407313804</p>
                <p>Mayer, R. E. (2009). <i>Multimedia learning</i>. Cambridge University Press. https://doi.org/10.1017/CBO9780511811678</p>
                <p>McNamara, D. S. (2007). "Reading comprehension strategies can improve knowledge acquisition." <i>Scientific Studies of Reading</i>. https://doi.org/10.1080/10888430701530714</p>
                <p>Raskind, M. H., & Higgins, E. L. (1998). "Assistive technology for postsecondary students with learning disabilities: An overview." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/002221949803100104</p>
                <p>Raskind, M. H., et al. (1999). "Patterns of change and predictors of success in individuals with learning disabilities: Results from a twenty-year longitudinal study." <i>Learning Disabilities Research & Practice</i>. https://doi.org/10.1207/sldrp1401_4</p>
                <p>Schneps, M. H., et al. (2012). "History of reading struggles linked to enhanced learning in low spatial frequency scenes." <i>PloS One</i>. https://doi.org/10.1371/journal.pone.0035724</p>
              </div>
            </div>
          </div>
        </TabsContent>


        {/* =========================================
            TAB 4: STRENGTHS & SUCCESS
            ========================================= */}
        <TabsContent value="strengths" className="animate-fadeIn">
          
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              Strengths & Success
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-living-strengths-TAB-intro.png" 
              alt="Strengths associated with dyslexia"
              className="block mx-auto w-64 max-w-2xl mb-8 rounded-lg shadow-sm border border-slate-200 bg-white"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              While dyslexia creates real hurdles, research and anecdotal evidence strongly suggest that individuals with dyslexia develop distinctive cognitive and personal strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Cognitive */}
            <div className="bg-gray-200 border-t-4 border-[#ffd166] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Cognitive Strengths</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Spatial Reasoning:</strong> Often possess strong 3D visualization and spatial mapping abilities.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Big-Picture Thinking:</strong> Natural capability to see overarching connections and patterns others miss.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Narrative Reasoning:</strong> Strong ability to comprehend complex concepts through stories and real-world examples.
                </div>
              </div>
            </div>

            {/* Personal */}
            <div className="bg-gray-200 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Personal Strengths</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Deep Resilience:</strong> Unyielding persistence developed through years of overcoming academic challenges.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Empathy:</strong> A profound understanding of struggle and cognitive differences in others.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Creativity:</strong> Consistently finding alternative, out-of-the-box solutions when standard methods fail.
                </div>
              </div>
            </div>

            {/* Professional */}
            <div className="bg-gray-200 border-t-4 border-[#2abcd4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Professional Strengths</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Entrepreneurship:</strong> Statistically higher rates of entrepreneurship and business founding.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Delegation:</strong> Highly comfortable delegating tasks to build balanced, capable teams.
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700">
                  <strong className="text-[#0A9DC4] block mb-1">Innovation:</strong> Natural propensity for thinking outside of conventional corporate frameworks.
                </div>
              </div>
            </div>

          </div>

          {/* References for Tab 4 */}
          <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-3 border-b-2 border-[#10b981] pb-2">
                Cited Studies & Statistics
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed italic" style={{ textIndent: 0 }}>
                <p>No explicit statistical claims or empirical studies directly cited in the text of this section.</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-3 border-b-2 border-[#2abcd4] pb-2">
                Background Sources
              </h4>
              <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
                <p>Boetsch, E. A., et al. (1996). "Psychosocial correlates of dyslexia across the life span." <i>Development and Psychopathology</i>. https://doi.org/10.1017/S095457940000724X</p>
                <p>Dweck, C. S. (2006). <i>Mindset: The new psychology of success</i>. Random House. https://www.penguinrandomhouse.com/books/44330/mindset-by-carol-s-dweck-phd/</p>
                <p>Edyburn, D. L. (2013). "Critical issues in advancing the special education technology evidence base." <i>Exceptional Children</i>. https://doi.org/10.1177/001440291308000101</p>
                <p>Eide, B. L., & Eide, F. F. (2011). <i>The dyslexic advantage: Unlocking the hidden potential of the dyslexic brain</i>. Penguin. https://www.penguinrandomhouse.com/books/308960/the-dyslexic-advantage-revised-and-updated-by-brock-l-eide-md-ma-and-fernette-f-eide-md/</p>
                <p>Fletcher, J. M., et al. (2018). <i>Learning disabilities: From identification to intervention</i> (2nd ed.). Guilford Publications. https://www.guilford.com/books/Learning-Disabilities/Fletcher-Lyon-Fuchs-Barnes/9781462536375</p>
                <p>Fuchs, L. S., et al. (2005). "Identifying appropriate test accommodations for students with learning disabilities." <i>Focus on Exceptional Children</i>. https://doi.org/10.17161/fec.v37i6.6792</p>
                <p>Gerber, P. J., et al. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/002221949202500802</p>
                <p>Griffiths, Y., & Snowling, M. J. (2002). "Predictors of exception word and nonword reading in dyslexic children." <i>Journal of Educational Psychology</i>. https://doi.org/10.1037/0022-0663.94.1.34</p>
                <p>Logan, J. (2009). "Dyslexic entrepreneurs: The incidence; their coping strategies and their business skills." <i>Dyslexia</i>. https://doi.org/10.1002/dys.388</p>
                <p>Madaus, J. W. (2006). "Employment outcomes of university graduates with learning disabilities." <i>Learning Disability Quarterly</i>. https://doi.org/10.2307/30035552</p>
                <p>Morrison, F. J., & Cooney, R. R. (2002). "Parenting and academic achievement." In <i>Parenting and the child's world</i>. Psychology Press. https://doi.org/10.4324/9781410603593</p>
                <p>Raskind, M. H., et al. (1999). "Patterns of change and predictors of success in individuals with learning disabilities: Results from a twenty-year longitudinal study." <i>Learning Disabilities Research & Practice</i>. https://doi.org/10.1207/sldrp1401_4</p>
                <p>Shaywitz, S. (2003). <i>Overcoming dyslexia: A new and complete science-based program for reading problems at any level</i>. Knopf. https://www.penguinrandomhouse.com/books/165181/overcoming-dyslexia-by-sally-shaywitz-md/</p>
                <p>Singer, E. (2007). "Coping with academic failure, a study of Dutch children with dyslexia." <i>Dyslexia</i>. https://doi.org/10.1002/dys.343</p>
                <p>Sireci, S. G., et al. (2005). "Test accommodations for students with disabilities: An analysis of the interaction hypothesis." <i>Review of Educational Research</i>. https://doi.org/10.3102/00346543075001029</p>
                <p>Snowling, M. J., & Hulme, C. (2011). "Evidence‐based interventions for reading and language difficulties: Creating a virtuous circle." <i>British Journal of Educational Psychology</i>. https://doi.org/10.1348/2044-8279.002001</p>
                <p>Spear-Swerling, L. (2009). "A literacy tutoring experience for prospective special educators and struggling second graders." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/0022219409338738</p>
                <p>Torgesen, J. K. (2004). "Lessons learned from research on interventions for students who have difficulty learning to read." In <i>The voice of evidence in reading research</i>. Paul H. Brookes. https://brookespublishing.com/product/the-voice-of-evidence-in-reading-research/</p>
                <p>Turnbull, A. P., et al. (2015). <i>Families, professionals, and exceptionality: Positive outcomes through partnerships and trust</i>. Pearson. https://www.pearson.com/en-us/subject-catalog/p/families-professionals-and-exceptionality-positive-outcomes-through-partnerships-and-trust/P200000002131/9780133833683</p>
                <p>von Károlyi, C., et al. (2003). "Dyslexia linked to talent: Global visual-spatial ability." <i>Brain and Language</i>. https://doi.org/10.1016/S0006-8993(03)00040-1</p>
                <p>West, T. G. (1997). <i>In the mind's eye: Visual thinkers, gifted people with dyslexia and other learning difficulties</i>. Prometheus Books. https://rowman.com/ISBN/9781615926510/In-the-Minds-Eye-Creative-Visual-Thinkers-Gifted-Dyslexics-and-the-Rise-of-Visual-Technologies</p>
                <p>Wolff, U., & Lundberg, I. (2002). "The prevalence of dyslexia among art students." <i>Dyslexia</i>. https://doi.org/10.1002/dys.211</p>
              </div>
            </div>
          </div>
        </TabsContent>

      </Tabs>
    </article>
  );
}