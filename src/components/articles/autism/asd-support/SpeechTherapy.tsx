import React from 'react';

export function SpeechTherapy() {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6">
        <h1 className="text-[#0c264d] text-3xl font-bold">Speech and Language Therapy</h1>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Speech-language therapy addresses communication challenges across verbal and nonverbal modalities. 
          This intervention focuses on functional communication and quality of life rather than 
          "normalization."
        </p>
      </div>

      {/* SECTION: Understanding Communication */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8 shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Communication Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-3 rounded border-l-4 border-[#2abcd4]">
            <div className="font-bold text-[#0c264d]">Expressive</div>
            <div className="text-xs text-gray-600">Using words or signs to express needs.</div>
          </div>
          <div className="bg-white p-3 rounded border-l-4 border-[#2abcd4]">
            <div className="font-bold text-[#0c264d]">Receptive</div>
            <div className="text-xs text-gray-600">Understanding and processing spoken language.</div>
          </div>
          <div className="bg-white p-3 rounded border-l-4 border-[#2abcd4]">
            <div className="font-bold text-[#0c264d]">Pragmatic</div>
            <div className="text-xs text-gray-600">Social use of language and context.</div>
          </div>
        </div>
        
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
          <p className="text-sm font-medium">
            <strong>Neurodiversity Tip:</strong> Differences like echolalia (repeating phrases) 
            often serve a functional purpose for regulation or communication.
          </p>
        </div>
      </div>

      {/* SECTION: AAC Technology */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">AAC Options</h2>
        <p className="mb-4 text-gray-700">Augmentative and Alternative Communication (AAC) includes any communication method beyond verbal speech.</p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <div className="bg-[#0c264d] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">10</div>
            <span className="font-bold text-[#0c264d] w-24 text-sm">Low-Tech:</span>
            <span className="text-sm text-gray-600">Picture boards, gestures, and sign language.</span>
          </div>
          <div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <div className="bg-[#0c264d] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">12</div>
            <span className="font-bold text-[#0c264d] w-24 text-sm">High-Tech:</span>
            <span className="text-sm text-gray-600">Speech-generating devices (SGDs) and specialized tablet apps.</span>
          </div>
        </div>
      </div>

      {/* SECTION: References */}
      <div className="mt-12 pt-6 border-t-2 border-gray-200">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ol className="list-decimal ml-6 space-y-2 text-xs text-gray-500">
          <li>Paul, R., & Norbury, C. (2012). Language disorders from infancy through adolescence.</li>
          <li>Tager-Flusberg, H., & Kasari, C. (2013). Minimally verbal school-aged children with autism.</li>
          <li>Beukelman, D. R., & Light, J. C. (2020). Augmentative & Alternative Communication.</li>
        </ol>
      </div>
    </div>
  );
}