import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface DyslexiaSymptomsImpactProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyslexiaSymptomsImpact({ setCurrentArticle }: DyslexiaSymptomsImpactProps) {
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
      
      <Tabs defaultValue="impact" className="w-full">
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
            onClick={() => setCurrentArticle?.('dyslexia-symptoms-strengths')}
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Strengths
          </TabsTrigger>
          <TabsTrigger 
            value="impact" 
            className="bg-[#ffd166] text-[#0c264d] hover:bg-[#0c264d] hover:text-white data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white data-[state=active]:shadow-md font-normal text-sm transition-all duration-200 shadow-sm rounded-lg !px-6 !py-3 md:!py-2 !h-auto"
          >
            Impact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="impact" className="animate-fadeIn">
          
          {/* Centered Intro Section */}
          <div className="clear-both">
            <h2 className="text-[#0c264d] font-bold mb-4 text-2xl clear-both text-center">
              The Broader Impact
            </h2>
            <ImageWithFallback 
              src="/images/dyslexia/dyslexia-symptoms-impact-TAB-intro.png"
              alt="Broader impacts of dyslexia"
              className="w-full h-auto rounded-md border border-gray-300 block mx-auto mb-6 shadow-sm"
            />
            <p className="mb-10 text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
              The impact of dyslexia extends far beyond reading and spelling challenges. When unrecognized or unsupported, the condition can profoundly affect academic experiences, social interactions, and emotional well-being throughout the lifespan. However, with early identification and targeted interventions, individuals can develop effective strategies to navigate these hurdles and build lasting resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Academic Impact */}
            <div className="bg-gray-300 border-t-4 border-[#0c264d] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Academic & School Impact</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700 flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Academic Anxiety:</strong>
                    Intense fear of being called on to read aloud or completing unexpected written assignments.
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700 flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Time Constraints:</strong>
                    Severe difficulty finishing standardized tests, essays, or in-class tasks within typical timeframe requirements.
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700 flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0c264d] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-[#ffd166]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">School Refusal:</strong>
                    Avoidance behaviors driven by constant frustration, exhaustion, or a perceived lack of academic progress.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Impact */}
            <div className="bg-gray-300 border-t-4 border-[#0A9DC4] rounded-xl p-6 shadow-md flex flex-col">
              <h4 className="font-bold text-[#0c264d] text-xl mb-4 text-center">Social & Emotional Impact</h4>
              <div className="flex flex-col gap-3 flex-grow">
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700 flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Self-Esteem:</strong>
                    The ongoing struggle with academic performance directly leads to negative self-perception and imposter syndrome.
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700 flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Social Interaction:</strong>
                    Occasional difficulty with rapid-fire conversational responses or slang due to underlying word retrieval challenges.
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 text-sm text-slate-700 flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A9DC4] flex items-center justify-center shadow-sm mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <strong className="text-[#0c264d] block mb-0.5">Mental Exhaustion:</strong>
                    The significant cognitive energy required to process daily reading tasks inevitably leads to mental fatigue and burnout.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Long-term Implications Alert */}
          <div className="bg-[#0c264d] border-l-4 border-[#ffd166] p-6 mb-10 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-[#ffd166] mb-2 uppercase text-sm tracking-wider">
              Long-term Implications
            </h3>
            <p className="text-sm text-slate-200">
              While these challenges are real, they are often exacerbated by the environment rather than the condition itself. With appropriate accommodations and a strengths-based approach, many individuals mitigate these impacts effectively. Understanding the impact is the first step toward effective management and fostering resilience.
            </p>
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
            
            {/* Empty Cited Studies Section left as a structural placeholder per standard */}
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
                <p>Boetsch, E. A., et al. (1996). "Psychosocial correlates of dyslexia across the life span." <i>Development and Psychopathology</i>. https://doi.org/10.1017/s0954579400007253</p>
                <p>Carroll, J. M., & Iles, J. E. (2006). "An assessment of anxiety levels in dyslexic students in higher education." <i>British Journal of Educational Psychology</i>. https://doi.org/10.1348/000709905X66233</p>
                <p>Gerber, P. J. (2012). "The impact of learning disabilities on adulthood: A review." <i>Journal of Learning Disabilities</i>. https://doi.org/10.1177/0022219411426858</p>
                <p>Grills-Taquechel, A. E., et al. (2012). "Anxiety and reading difficulties in early elementary school." <i>Child Psychiatry & Human Development</i>. https://doi.org/10.1007/s10578-011-0246-y</p>
                <p>Humphrey, N., & Mullins, P. M. (2002). "Self-concept and self-esteem in developmental dyslexia." <i>Journal of Research in Special Educational Needs</i>. https://doi.org/10.1111/j.1471-3802.2002.00163.x</p>
                <p>Lewandowski, L. J., et al. (2008). "Symptoms of ADHD and academic concerns in college students with and without ADHD diagnoses." <i>Journal of Attention Disorders</i>. https://doi.org/10.1177/1087054707304694</p>
                <p>Meltzer, L. J. (2007). <i>Executive function in education: From theory to practice</i>. Guilford Press. https://www.guilford.com/books/Executive-Function-in-Education/Lynn-Meltzer/9781593854282</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}