import React from 'react';

interface SupportTutoringProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportTutoring({ setCurrentArticle }: SupportTutoringProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      {/* Header and Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-spartan text-[#0c264d]">Dyslexia: Support (Tutoring & Specialized Instruction)</h2>
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
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-support-interventions')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm"
          >
            Evidence-Based Interventions
          </button>
          
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-support-tutoring')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#0A9DC4] text-white shadow-md"
          >
            Tutoring & Specialized Instruction
          </button>
          
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-support-multisensory')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm"
          >
            Multisensory Strategies
          </button>
        </div>

        {/* PAGE CONTENT */}
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

        {/* REFERENCES SECTION */}
        <div className="mt-12 pt-6 border-t-2 border-gray-100">
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            
            {/* BACK TO TOP BUTTON */}
            <button 
              onClick={() => setCurrentArticle?.('dyslexia')}
              className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 mb-8 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2"
            >
              <span>←</span> All About Dyslexia
            </button>

            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase tracking-wider text-green-700 mb-3 border-b border-green-700 border-opacity-10 pb-1">
                Cited Studies & Statistics
              </h4>
              <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
                <li>Spear-Swerling, L. (2009). "A literacy tutoring experience for prospective special educators and struggling second graders." <em>Journal of Learning Disabilities</em>, 42(5), 431-443.</li>
                <li>Joshi, R. M., Binks, E., Graham, L., et al. (2009). "Do textbooks used in university reading education courses conform to the instructional recommendations of the National Reading Panel?" <em>Journal of Learning Disabilities</em>, 42(5), 458-463.</li>
                <li>Torgesen, J. K., Wagner, R. K., Rashotte, C. A., et al. (2010). "Computer-assisted instruction to prevent early reading difficulties in students at risk for dyslexia: Outcomes from two instructional approaches." <em>Annals of Dyslexia</em>, 60(1), 40-56.</li>
                <li>Lovett, M. W., Lacerenza, L., Borden, S. L., et al. (2000). "Components of effective remediation for developmental reading disabilities: Combining phonological and strategy-based instruction to improve outcomes." <em>Journal of Educational Psychology</em>, 92(2), 263-283.</li>
                <li>Hock, M. F., Pulvers, K. A., Deshler, D. D., & Schumaker, J. B. (2001). "The effects of an after-school tutoring program on the academic performance of at-risk students and students with LD." <em>Remedial and Special Education</em>, 22(3), 172-186.</li>
                <li>Ritter, G. W., Barnett, J. H., Denny, G. S., & Albin, G. R. (2009). "The effectiveness of volunteer tutoring programs for elementary and middle school students: A meta-analysis." <em>Review of Educational Research</em>, 79(1), 3-38.</li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-cyan-500 mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
                Background Sources
              </h4>
              <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
                <li>International Dyslexia Association. (2017). <i>Dyslexia in the Classroom: What Every Teacher Needs to Know</i>.</li>
                <li>American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}