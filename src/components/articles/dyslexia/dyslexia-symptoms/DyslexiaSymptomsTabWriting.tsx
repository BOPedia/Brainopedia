import React from 'react';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';


export function DyslexiaSymptomsTabWriting() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Writing and Spelling Challenges</h2>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        Dyslexia often manifests in difficulties with writing and spelling, which can be immensely frustrating for individuals:<sup className="text-green-600 font-bold ml-0.5">1</sup>
      </p>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Spelling and Writing Difficulties</h3>
      <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
        <li><strong>Spelling:</strong> Severe and persistent spelling problems; inconsistent spelling of the same word.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
        <li><strong>Phonetic spelling:</strong> Spelling words as they sound rather than conventionally (e.g., "sed" for "said").</li>
        <li><strong>Omitted letters:</strong> Frequently leaving out letters, especially vowels.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
        <li><strong>Letter reversals:</strong> Continuing to reverse letters (b/d, p/q) beyond age 7.</li>
        <li><strong>Writing avoidance:</strong> Extreme reluctance to write; written work much weaker than oral expression.</li>
      </ul>

      {/* LOCAL REFERENCES */}
      <div className="mt-8 pt-6 border-t-2 border-[#0c264d] border-opacity-10">
        <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3">Cited Studies & Statistics</h4>
        <ol className="list-decimal ml-5 text-xs space-y-2 text-slate-600 leading-relaxed">
          <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). "The development of reading-related phonological processing abilities." <i>Journal of Educational Psychology</i>, 91(1), 47-57.</li>
          <li>Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). "Contributions of phonological awareness to the growth of word-reading skills." <i>Journal of Educational Psychology</i>, 93(4), 645-662.</li>
        </ol>
      </div>
    </div>
  );
}