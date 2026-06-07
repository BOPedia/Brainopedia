import React from 'react';

interface SupportExecutiveProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportExecutive({ setCurrentArticle }: SupportExecutiveProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-spartan text-[#0c264d]">Support: Executive Function</h2>
        <button onClick={() => setCurrentArticle?.('dyslexia')} className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white py-2 px-6 rounded-lg font-bold transition-colors duration-200 flex items-center gap-2">← All About Dyslexia</button>
      </div>
      
      <div className="prose max-w-none animate-fadeIn">
        {/* Navigation Grid (7 Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 text-xs">
          <button onClick={() => setCurrentArticle?.('dyslexia-support-interventions')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Interventions</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-tutoring')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Tutoring</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-multisensory')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Multisensory</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-technology')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Tech</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-executive')} className="p-2 rounded bg-[#0A9DC4] text-white font-bold">Executive Function</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-social')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Social-Emotional</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-home')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Home Support</button>
        </div>

        <p className="mb-6 text-slate-700">Many individuals with dyslexia also experience executive function challenges:<sup className="text-green-600 font-bold ml-0.5">1</sup></p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-bold text-[#0c264d] mb-2">Organization</h4>
            <ul className="text-sm list-disc ml-5 space-y-1 text-slate-700">
              <li>Color-coded folders/binders.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
              <li>Digital planners.</li>
              <li>Checklist systems.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-bold text-[#0c264d] mb-2">Time Management</h4>
            <ul className="text-sm list-disc ml-5 space-y-1 text-slate-700">
              <li>Visual timers.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
              <li>Chunking large projects.</li>
              <li>Extra time allowance.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border">
            <h4 className="font-bold text-[#0c264d] mb-2">Study Skills</h4>
            <ul className="text-sm list-disc ml-5 space-y-1 text-slate-700">
              <li>SQ3R method.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
              <li>Cornell note-taking.</li>
              <li>Concept maps.<sup className="text-green-600 font-bold ml-0.5">7</sup></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <h3 className="font-bold text-xl text-[#0c264d] mb-4">References</h3>
          <ol className="list-decimal ml-5 text-xs text-slate-600 space-y-2">
            <li>Reiter, A., Tucha, O., & Lange, K. W. (2005). "Executive functions in children with dyslexia." <em>Dyslexia</em>, 11(2), 116-131.</li>
            <li>Hughes, C. A., & Suritsky, S. K. (1994). "Note-taking skills of university students with and without learning disabilities." <em>Journal of Learning Disabilities</em>, 27(1), 20-24.</li>
            <li>Gureasko-Moore, S., DuPaul, G. J., & White, G. P. (2007). "Self-management of classroom preparedness and homework." <em>School Psychology Review</em>, 36(4), 647-664.</li>
            <li>Barkley, R. A. (1997). "Behavioral inhibition, sustained attention, and executive functions." <em>Psychological Bulletin</em>, 121(1), 65-94.</li>
            <li>Dawson, P., & Guare, R. (2010). <em>Executive skills in children and adolescents</em>. Guilford Press.</li>
            <li>Robinson, F. P. (1970). <em>Effective study</em>. Harper & Row.</li>
            <li>Novak, J. D., & Gowin, D. B. (1984). <em>Learning how to learn</em>. Cambridge University Press.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}