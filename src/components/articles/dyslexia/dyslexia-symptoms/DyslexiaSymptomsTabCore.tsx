import React from 'react';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

export function DyslexiaSymptomsTabCore() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Core Symptoms of Dyslexia</h2>
      
      <ImageWithFallback 
        src="/images/dyslexia/YOUR-CORE-SYMPTOMS-IMAGE.png" 
        alt="Early literacy and phonics"
        className="w-80 h-auto rounded-lg shadow-sm float-right ml-6 mb-4"
      />
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        Dyslexia is characterized by a range of symptoms that affect reading, writing, and language processing:<sup className="text-green-600 font-bold ml-0.5">1</sup>
      </p>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Phonological Awareness Difficulties</h3>
      <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
        <li><strong>Rhyming:</strong> Trouble recognizing or producing rhymes (e.g., "cat" and "hat").<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
        <li><strong>Syllable segmentation:</strong> Difficulty breaking words into syllables (e.g., "baseball" into "base-ball").</li>
        <li><strong>Sound identification:</strong> Challenges identifying beginning, middle, or ending sounds in words.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
        <li><strong>Sound blending:</strong> Difficulty combining sounds to make words (e.g., /c/ /a/ /t/ = "cat").</li>
        <li><strong>Sound manipulation:</strong> Trouble deleting or substituting sounds in words.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
      </ul>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Development</h3>
      <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2 clear-both">
        <li>Late talking or slow vocabulary development.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
        <li>Difficulty learning nursery rhymes or songs.</li>
        <li>Trouble remembering names of letters or numbers.</li>
        <li>Confusing similar-sounding words.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
        <li>Word-finding difficulties (knowing the concept but struggling to retrieve the word).</li>
      </ul>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family History</h3>
      <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
        <li>Parent, sibling, or other family member with dyslexia or reading difficulties.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
        <li>Family history of language-based learning problems.</li>
      </ul>

      {/* LOCAL REFERENCES */}
      <div className="mt-8 pt-6 border-t-2 border-[#0c264d] border-opacity-10">
        <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3">Core Symptoms References</h4>
        <ol className="list-decimal ml-5 text-xs space-y-2 text-slate-600 leading-relaxed">
          <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). <i>Learning disabilities: From identification to intervention</i>. Guilford Press.</li>
          <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1997). "Development of reading-related phonological processing abilities." <i>Developmental Psychology</i>, 33(4), 926-938.</li>
          <li>Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). "Contributions of phonological awareness to the growth of word-reading skills." <i>Journal of Educational Psychology</i>, 93(4), 645-662.</li>
          <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). "The development of reading-related phonological processing abilities." <i>Journal of Educational Psychology</i>, 91(1), 47-57.</li>
          <li>Shaywitz, S. E., & Shaywitz, B. A. (2001). "The neurobiology of reading and dyslexia." <i>Scientific American</i>, 284(5), 40-47.</li>
          <li>Snowling, M. J. (2000). <i>Dyslexia</i>. Oxford University Press.</li>
          <li>Shaywitz, S. E., & Shaywitz, B. A. (2008). <i>Dyslexia</i> (2nd ed.). Yale University Press.</li>
        </ol>
      </div>
    </div>
  );
}