import React from 'react';

export function DyslexiaSymptomsTabAge() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Age-Specific Signs of Dyslexia</h2>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        Dyslexia presents differently at various developmental stages, from early childhood to adulthood:<sup className="text-green-600 font-bold ml-0.5">1</sup>
      </p>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Signs (Preschool)</h3>
      <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
        <li>Late talking or slow vocabulary development.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
        <li>Difficulty learning nursery rhymes or songs.</li>
        <li>Trouble remembering names of letters or numbers.</li>
        <li>Confusing similar-sounding words.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
        <li>Word-finding difficulties (knowing the concept but struggling to retrieve the word).</li>
      </ul>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Age Symptoms (K-5th Grade)</h3>
      <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
        <li><strong>Slow progress:</strong> Learning to read much slower than peers despite adequate instruction.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
        <li><strong>Decoding problems:</strong> Difficulty sounding out unfamiliar words.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
        <li><strong>Reading fluency:</strong> Slow, choppy reading with frequent errors.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
        <li><strong>Accuracy issues:</strong> Substituting, omitting, or adding words when reading.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
        <li><strong>Comprehension struggles:</strong> Poor comprehension despite good listening comprehension.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
      </ul>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adult Manifestations</h3>
      <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
        <li>Slow reading speed, particularly with dense or technical material.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
        <li>Re-reading passages multiple times for comprehension.</li>
        <li>Spelling errors in emails, reports, and other writing.</li>
        <li>Difficulty with proofreading; may miss own errors.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
        <li>Reliance on spell-check and grammar-check tools.</li>
        <li>Avoiding jobs requiring extensive reading and writing when possible.</li>
      </ul>

      {/* LOCAL REFERENCES */}
      <div className="mt-8 pt-6 border-t-2 border-[#0c264d] border-opacity-10">
        <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3">Age-Specific Signs References</h4>
        <ol className="list-decimal ml-5 text-xs space-y-2 text-slate-600 leading-relaxed">
          <li>Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). "Contributions of phonological awareness to the growth of word-reading skills." <i>Journal of Educational Psychology</i>, 93(4), 645-662.</li>
          <li>Shaywitz, S. E., & Shaywitz, B. A. (2001). "The neurobiology of reading and dyslexia." <i>Scientific American</i>, 284(5), 40-47.</li>
          <li>Snowling, M. J. (2000). <i>Dyslexia</i>. Oxford University Press.</li>
          <li>National Institute of Child Health and Human Development. (2000). <i>Report of the National Reading Panel</i>.</li>
          <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). <i>Learning disabilities: From identification to intervention</i>. Guilford Press.</li>
          <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1997). "Development of reading-related phonological processing abilities." <i>Developmental Psychology</i>, 33(4), 926-938.</li>
          <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). "The development of reading-related phonological processing abilities." <i>Journal of Educational Psychology</i>, 91(1), 47-57.</li>
        </ol>
      </div>
    </div>
  );
}