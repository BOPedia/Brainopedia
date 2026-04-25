import React from 'react';

export function ABATherapy() {
  return (
    <div className="animate-fadeIn">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6">
        <h1 className="text-[#0c264d] text-3xl font-bold">Applied Behavior Analysis (ABA)</h1>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          ABA is a behavior-focused therapy that uses reinforcement to teach skills. While it is widely used, it is important to understand both its goals and the ongoing community dialogue regarding its implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
          <h3 className="font-bold text-[#0c264d] mb-3">Key Concepts</h3>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>• <strong>Positive Reinforcement:</strong> Rewarding desired behaviors to encourage repetition.</li>
            <li>• <strong>Task Analysis:</strong> Breaking complex skills into tiny, achievable steps.</li>
            <li>• <strong>Data-Driven:</strong> Constant measurement of progress to adjust the plan.</li>
          </ul>
        </div>
        <div className="bg-[#fffbeb] p-5 rounded-lg border border-[#fef3c7]">
          <h3 className="font-bold text-[#0c264d] mb-3 text-amber-800">Community Perspective</h3>
          <p className="text-xs text-amber-900 leading-relaxed">
            Modern advocates emphasize that ABA should never be used to "mask" autistic traits or suppress harmless stimming. The focus should always be on the individual's safety, autonomy, and chosen goals.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t-2 border-gray-200 text-xs text-gray-500">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Lovaas, O. I. (1987). Behavioral treatment and normal educational and intellectual functioning.</li>
          <li>Kapp, S. K., et al. (2019). 'People should be allowed to do what they like': Autistic adults' views on ABA.</li>
        </ul>
      </div>
    </div>
  );
}