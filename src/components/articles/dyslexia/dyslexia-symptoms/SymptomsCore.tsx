import React from 'react';

interface SymptomsCoreProps {
  setCurrentArticle?: (article: string) => void;
}

// CHANGED THIS LINE TO MATCH YOUR ROUTE EXACTLY!
export function DyslexiaSymptomsCore({ setCurrentArticle }: SymptomsCoreProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-spartan text-[#0c264d]">Symptoms: Core Characteristics</h2>
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
          <button onClick={() => setCurrentArticle?.('dyslexia-symptoms-core')} className="py-3 px-6 rounded-lg font-bold bg-[#0A9DC4] text-white shadow-md">Core Characteristics</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-symptoms-strengths')} className="py-3 px-6 rounded-lg font-bold bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm">Strengths</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-symptoms-impact')} className="py-3 px-6 rounded-lg font-bold bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm">Impact</button>
        </div>

        {/* CONTENT */}
        <h3 className="text-2xl font-bold mt-2 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Primary Reading Challenges</h3>
        <p className="mb-4 text-slate-700">Dyslexia is primarily characterized by neurobiological differences that impede the development of accurate and fluent word recognition.<sup className="text-green-600 font-bold ml-0.5">1</sup></p>
        
        <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
          <li><strong>Decoding difficulties:</strong> Challenges sounding out new words, often due to phonological processing deficits.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
          <li><strong>Slow, labored reading:</strong> High cognitive demand spent on decoding leaves little capacity for comprehension.</li>
          <li><strong>Inaccurate word recognition:</strong> Guessing words based on shape or context rather than mapping letter-to-sound.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
          <li><strong>Phonological awareness:</strong> Difficulty manipulating the individual sounds (phonemes) within words.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-3 text-[#0c264d] border-b border-gray-200 pb-2">Spelling & Writing</h3>
        <ul className="list-disc ml-6 space-y-2 mb-8 text-slate-700">
          <li><strong>Poor spelling:</strong> Often does not match phonological rules (e.g., phonetic spelling errors).<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
          <li><strong>Writing output:</strong> Written expression may be limited compared to oral vocabulary due to the mechanics of spelling and writing.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
        </ul>

        {/* REFERENCES */}
        <div className="mt-12 pt-6 border-t-2 border-gray-100">
          <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
            <button onClick={() => setCurrentArticle?.('dyslexia')} className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 mb-8 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2">← All About Dyslexia</button>
            <h3 className="font-bold font-spartan mb-5 text-xl text-[#0c264d]">References</h3>
            <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
              <li>Shaywitz, S. E., & Shaywitz, B. A. (2005). "Dyslexia (specific reading disability)." <em>Biological Psychiatry</em>, 57(11), 1301-1309.</li>
              <li>Wagner, R. K., & Torgesen, J. K. (1987). "The nature of phonological processing." <em>Psychological Bulletin</em>, 101(2), 192-212.</li>
              <li>Stanovich, K. E. (1988). "Explaining the differences between the dyslexic and the garden-variety poor reader." <em>Journal of Learning Disabilities</em>, 21(10), 590-604.</li>
              <li>Ehri, L. C. (2000). "Learning to read and learning to spell." <em>Topics in Language Disorders</em>, 20(3), 19-36.</li>
              <li>Graham, S., & Harris, K. R. (2009). "Almost everything you need to know about writing instruction." <em>Focus on Exceptional Children</em>, 42(2), 1-22.</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
}