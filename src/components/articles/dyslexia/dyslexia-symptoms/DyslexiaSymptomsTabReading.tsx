import React from 'react';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

export function DyslexiaSymptomsTabReading() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">Reading Challenges in Dyslexia</h2>
      
      <p className="mb-6 text-gray-700 leading-relaxed">
        Dyslexia typically becomes most apparent when children begin formal reading instruction:<sup className="text-green-600 font-bold ml-0.5">1</sup>
      </p>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Difficulties</h3>
      
      <ImageWithFallback 
        src="/images/dyslexia/dyslexia-symptoms-reading-letters-air.png" 
        alt="Child struggling with reading"
        className="w-64 h-auto rounded-lg shadow-sm float-left mr-6 mb-4"
      />
      
      <ul className="list-disc ml-6 mb-8 text-gray-700 space-y-2">
        <li><strong>Slow progress:</strong> Learning to read much slower than peers despite adequate instruction.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
        <li><strong>Decoding problems:</strong> Difficulty sounding out unfamiliar words; may guess based on context or first letter.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
        <li><strong>Reading fluency:</strong> Slow, choppy reading with frequent errors; reading requires enormous effort.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
        <li><strong>Accuracy issues:</strong> Substituting, omitting, or adding words when reading.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
        <li><strong>Loss of place:</strong> Frequently losing place while reading, skipping lines.</li>
        <li><strong>Avoidance:</strong> Reluctance to read, especially aloud; may complain of headaches or fatigue.</li>
        <li><strong>Comprehension struggles:</strong> Poor comprehension despite good listening comprehension; cognitive energy goes to decoding rather than understanding.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
      </ul>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg clear-both">Language Processing</h3>
      <ul className="list-disc ml-6 mb-6 text-gray-700 space-y-2">
        <li>Mispronouncing multisyllabic words (e.g., "aminal" for "animal").<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
        <li>Confusing words that sound similar.</li>
        <li>Difficulty learning foreign languages, especially reading and spelling in the new language.</li>
        <li>Trouble remembering sequences (alphabet, days of week, months).</li>
        <li>Word retrieval problems; may use fillers or circumlocution.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
      </ul>

      <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Memory and Processing Speed</h3>
      <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-2">
        <li><strong>Verbal working memory:</strong> Difficulty holding verbal information in mind.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
        <li><strong>Rapid naming:</strong> Slow at rapidly naming familiar objects, colors, or letters.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
        <li><strong>Following multi-step directions:</strong> May need directions repeated or simplified.</li>
        <li><strong>Rote memorization:</strong> Difficulty memorizing math facts, lists, or sequences.</li>
      </ul>

      {/* LOCAL REFERENCES */}
      <div className="mt-8 pt-6 border-t-2 border-[#0c264d] border-opacity-10">
        <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3">Cited Studies & Statistics</h4>
        <ol className="list-decimal ml-5 text-xs space-y-2 text-slate-600 leading-relaxed">
          <li>Shaywitz, S. E., & Shaywitz, B. A. (2008). <i>Dyslexia</i> (2nd ed.). Yale University Press.</li>
          <li>National Institute of Child Health and Human Development. (2000). <i>Report of the National Reading Panel</i>.</li>
          <li>Snowling, M. J. (2000). <i>Dyslexia</i>. Oxford University Press.</li>
          <li>Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2007). <i>Learning disabilities: From identification to intervention</i>. Guilford Press.</li>
          <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1997). "Development of reading-related phonological processing abilities." <i>Developmental Psychology</i>, 33(4), 926-938.</li>
          <li>Torgesen, J. K., Wagner, R. K., Rashotte, C. A., & Rose, E. (2001). "Contributions of phonological awareness to the growth of word-reading skills." <i>Journal of Educational Psychology</i>, 93(4), 645-662.</li>
          <li>Wagner, R. K., Torgesen, J. K., & Rashotte, C. A. (1999). "The development of reading-related phonological processing abilities." <i>Journal of Educational Psychology</i>, 91(1), 47-57.</li>
        </ol>
      </div>
    </div>
  );
}