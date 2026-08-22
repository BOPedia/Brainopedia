import React from 'react';

interface ABATherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function ABATherapy({ setCurrentArticle }: ABATherapyProps) {
  return (
    <div className="animate-fadeIn font-spartan text-[#0c264d] space-y-6">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">Applied Behavior Analysis (ABA)</h1>
        
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
        <p className="text-base text-gray-700 leading-relaxed">
          ABA is a behavior-focused therapy that uses reinforcement to teach skills. While it is widely used, it is important to understand both its goals and the ongoing community dialogue regarding its implementation.<sup className="text-green-600 font-bold ml-0.5">1</sup>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg border-l-4 border-[#0c264d] shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-3">Key Concepts</h3>
          <ul className="text-sm space-y-3 text-gray-700">
            <li>• <strong>Positive Reinforcement:</strong> Rewarding desired behaviors to encourage repetition.</li>
            <li>• <strong>Task Analysis:</strong> Breaking complex skills into tiny, achievable steps.</li>
            <li>• <strong>Data-Driven:</strong> Constant measurement of progress to adjust the plan.</li>
          </ul>
        </div>
        
        <div className="bg-[#fffbeb] p-5 rounded-lg border-l-4 border-[#d97706] shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-3">Community Perspective</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Modern advocates emphasize that ABA should never be used to "mask" autistic traits or suppress harmless stimming.<sup className="text-green-600 font-bold ml-0.5">2</sup> The focus should always be on the individual's safety, autonomy, and chosen goals.
          </p>
        </div>
      </div>

      {/* Back Button Bottom */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <div className="clear-both"></div>

      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Lovaas, O. I. (1987). "Behavioral treatment and normal educational and intellectual functioning in young autistic children." <i>Journal of Consulting and Clinical Psychology</i>. https://doi.org/10.1037/0022-006X.55.1.3</p>
            <p>2. Kapp, S. K., et al. (2019). "'People should be allowed to do what they like': Autistic adults' views and experiences of stimming." <i>Autism</i>. https://doi.org/10.1177/1362361319829628</p>
          </div>
        </div>
      </div>
    </div>
  );
}