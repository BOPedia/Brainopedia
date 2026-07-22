import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs';

interface SupportTutoringProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportTutoring({ setCurrentArticle }: SupportTutoringProps) {
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

      <Tabs defaultValue="tutoring" className="w-full">
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

        <TabsContent value="tutoring" className="animate-fadeIn">
          <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Finding a Qualified Tutor</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-bold text-[#0A9DC4] mb-2">Credentials to Look For</h4>
              <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                <li><strong>Certification:</strong> Look for training in Orton-Gillingham, Wilson, or similar structured literacy approaches.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
                <li><strong>CALT:</strong> Certified Academic Language Therapist is the gold standard credential from the International Dyslexia Association (IDA).<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
                <li><strong>Experience:</strong> Specific training and proven experience working successfully with dyslexic students.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#0A9DC4] mb-2">Resources for Search</h4>
              <ul className="list-disc ml-5 space-y-2 text-slate-700 text-sm">
                <li>Academy of Orton-Gillingham Practitioners and Educators (AOGPE).</li>
                <li>International Dyslexia Association (IDA) local branch referral lists.</li>
                <li>Local school district special education department recommendations.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Intensity & Duration</h3>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li><strong>Intensity:</strong> 2-5 sessions per week is considered most effective for significant growth.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li><strong>Duration:</strong> Typically 45-90 minutes per session depending on age and stamina.</li>
            <li><strong>Timeline:</strong> Significant gains typically require 2-3 years of consistent, evidence-based intervention.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
            <li><strong>Grouping:</strong> One-on-one is often preferred for dyslexia, though small groups of 2-3 students can be effective with trained instructors.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Cost Considerations</h3>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
            <li><strong>Private tutoring:</strong> Ranges from $50–$150+ per hour depending on the tutor's credentials and location.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
            <li><strong>Learning centers:</strong> Programs like Lindamood-Bell, Huntington, or Sylvan offer structured, intensive programs with different fee structures.</li>
            <li><strong>School-based services:</strong> Public education provides free specialized instruction if a student qualifies for an IEP (Individualized Education Program).</li>
            <li><strong>Sliding scale:</strong> Some independent tutors offer reduced rates, and local nonprofit community programs may provide subsidized support.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
          </ul>

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
                <p>1. Spear-Swerling, L. (2009). "A literacy tutoring experience for prospective special educators and struggling second graders." <em>Journal of Learning Disabilities</em>, 42(5), 431-443.</p>
                <p>2. Joshi, R. M., Binks, E., Graham, L., et al. (2009). "Do textbooks used in university reading education courses conform to the instructional recommendations of the National Reading Panel?" <em>Journal of Learning Disabilities</em>, 42(5), 458-463.</p>
                <p>3. Torgesen, J. K., Wagner, R. K., Rashotte, C. A., et al. (2010). "Computer-assisted instruction to prevent early reading difficulties in students at risk for dyslexia: Outcomes from two instructional approaches." <em>Annals of Dyslexia</em>, 60(1), 40-56.</p>
                <p>4. Lovett, M. W., Lacerenza, L., Borden, S. L., et al. (2000). "Components of effective remediation for developmental reading disabilities: Combining phonological and strategy-based instruction to improve outcomes." <em>Journal of Educational Psychology</em>, 92(2), 263-283.</p>
                <p>5. Hock, M. F., Pulvers, K. A., Deshler, D. D., & Schumaker, J. B. (2001). "The effects of an after-school tutoring program on the academic performance of at-risk students and students with LD." <em>Remedial and Special Education</em>, 22(3), 172-186.</p>
                <p>6. Ritter, G. W., Barnett, J. H., Denny, G. S., & Albin, G. R. (2009). "The effectiveness of volunteer tutoring programs for elementary and middle school students: A meta-analysis." <em>Review of Educational Research</em>, 79(1), 3-38.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  );
}