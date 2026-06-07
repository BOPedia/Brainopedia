import React from 'react';

interface SupportMultisensoryProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportMultisensory({ setCurrentArticle }: SupportMultisensoryProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      
      {/* Header and Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-spartan text-[#0c264d]">Dyslexia: Support (Multisensory) Strategies</h2>
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
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#ffd166] text-[#0c264d] hover:bg-opacity-80 shadow-sm"
          >
            Tutoring & Specialized Instruction
          </button>
          
          <button 
            onClick={() => setCurrentArticle?.('dyslexia-support-multisensory')}
            className="py-3 px-6 rounded-lg font-bold transition-colors duration-200 w-full md:w-auto bg-[#0A9DC4] text-white shadow-md"
          >
            Multisensory Strategies
          </button>
        </div>

        {/* PAGE CONTENT */}
        <p className="mb-8 text-slate-700 leading-relaxed">
          Multisensory instruction engages multiple pathways in the brain simultaneously—visual, auditory, and kinesthetic-tactile—to strengthen learning and memory for individuals with dyslexia.<sup className="text-green-600 font-bold ml-0.5">1</sup>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="border border-[#2abcd4] rounded-lg p-5">
            <h4 className="font-bold text-[#0c264d] mb-3">Visual Strategies</h4>
            <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
              <li>Color-coding different phonemes or word parts to improve recognition.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
              <li>Visual cue cards for spelling and phonics rules.</li>
              <li>Using graphic organizers to structure reading comprehension and writing planning.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            </ul>
          </div>

          <div className="border border-[#2abcd4] rounded-lg p-5">
            <h4 className="font-bold text-[#0c264d] mb-3">Auditory Strategies</h4>
            <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
              <li>Saying sounds aloud while reading and writing to reinforce letter-sound connections.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
              <li>Rhyming activities and games to build core phonological awareness.</li>
              <li>Listening to audiobooks while following along with the printed text to connect auditory and visual input.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
            </ul>
          </div>

          <div className="border border-[#2abcd4] rounded-lg p-5">
            <h4 className="font-bold text-[#0c264d] mb-3">Kinesthetic Strategies</h4>
            <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
              <li>Tracing letters in sand, shaving cream, or on sandpaper surfaces.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
              <li>Building words with magnetic letters or tiles for tactile manipulation.</li>
              <li>Finger-tapping syllables or sounds to internalize word structure.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
              <li>"Skywriting" letters in the air using gross motor movements.</li>
            </ul>
          </div>
        </div>

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
                <li>Shams, L., & Seitz, A. R. (2008). "Benefits of multisensory learning." <em>Trends in Cognitive Sciences</em>, 12(11), 411-417.</li>
                <li>Moats, L., & Tolman, C. (2009). <em>Language essentials for teachers of reading and spelling (LETRS): The challenge of learning to read</em>. Sopris West Educational Services.</li>
                <li>Dexter, D. D., & Hughes, C. A. (2011). "Graphic organizers and students with learning disabilities: A meta-analysis." <em>Learning Disability Quarterly</em>, 34(1), 51-72.</li>
                <li>Ehri, L. C., & Wilce, L. S. (1980). "The influence of orthography on readers' conceptualization of the phonemic structure of words." <em>Applied Psycholinguistics</em>, 1(4), 371-385.</li>
                <li>Whittingham, J., Huffman, S., Christensen, R., & McAllister, T. (2013). "Use of audiobooks in a school library and positive effects of struggling readers' participation in a library-sponsored audiobook club." <em>School Library Research</em>, 16.</li>
                <li>Fernald, G. M. (1943). <em>Remedial techniques in basic school subjects</em>. McGraw-Hill.</li>
                <li>Boyer-Crane, C., Snowling, M. J., Duff, F. J., et al. (2008). "Improving early language and literacy skills: Differential effects of an oral language versus a phonology with reading intervention." <em>Journal of Child Psychology and Psychiatry</em>, 49(4), 422-432.</li>
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