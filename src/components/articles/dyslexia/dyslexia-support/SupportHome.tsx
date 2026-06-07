import React from 'react';

interface SupportHomeProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportHome({ setCurrentArticle }: SupportHomeProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-spartan text-[#0c264d]">Support: Home Strategies</h2>
        <button onClick={() => setCurrentArticle?.('dyslexia')} className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2">← All About Dyslexia</button>
      </div>
      
      <div className="prose max-w-none animate-fadeIn">
        {/* Navigation Grid (7 Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 text-xs">
          <button onClick={() => setCurrentArticle?.('dyslexia-support-interventions')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Interventions</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-tutoring')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Tutoring</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-multisensory')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Multisensory</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-technology')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Tech</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-executive')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Executive Function</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-social')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Social-Emotional</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-home')} className="p-2 rounded bg-[#0A9DC4] text-white font-bold">Home Support</button>
        </div>

        <h3 className="text-xl font-bold mb-4 text-[#0c264d]">Creating a Supportive Environment</h3>
        <ul className="list-disc ml-5 space-y-2 mb-6 text-slate-700">
          <li>Designated quiet homework space.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
          <li>Consistent routine and schedule.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
        </ul>

        <h3 className="text-xl font-bold mb-4 text-[#0c264d]">Reading at Home</h3>
        <ul className="list-disc ml-5 space-y-2 mb-6 text-slate-700">
          <li>Read aloud together.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
          <li>High-interest materials.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
          <li>Audiobooks count!<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
        </ul>

        <h3 className="text-xl font-bold mb-4 text-[#0c264d]">School Communication</h3>
        <ul className="list-disc ml-5 space-y-2 mb-6 text-slate-700">
          <li>Regular teacher check-ins.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
          <li>Prepare for IEP/504 meetings.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
        </ul>

        <div className="mt-8 pt-6 border-t">
          <h3 className="font-bold text-xl text-[#0c264d] mb-4">References</h3>
          <ol className="list-decimal ml-5 text-xs text-slate-600 space-y-2">
            <li>Epstein, J. L. (2001). <em>School, family, and community partnerships</em>. Westview Press.</li>
            <li>Cooper, H., et al. (2006). "Does homework improve academic achievement?" <em>Review of Educational Research</em>, 76(1), 1-62.</li>
            <li>Bus, A. G., et al. (1995). "Joint book reading makes for success in learning to read." <em>Review of Educational Research</em>, 65(1), 1-21.</li>
            <li>Guthrie, J. T., & Humenick, N. M. (2004). "Motivating students to read." In <em>The voice of evidence in reading research</em>. Paul H. Brookes.</li>
            <li>Aronson, A. G. (2010). "New perspectives on reading intervention through audiobook technology." <em>Reading Psychology</em>, 31(4), 315-338.</li>
            <li>Epstein, J. L., & Van Voorhis, F. L. (2001). "More than minutes." <em>Educational Psychologist</em>, 36(3), 181-193.</li>
            <li>Garriott, P. P., et al. (2000). "Teachers as parents, parents as children." <em>Preventing School Failure</em>, 45(1), 37-43.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}