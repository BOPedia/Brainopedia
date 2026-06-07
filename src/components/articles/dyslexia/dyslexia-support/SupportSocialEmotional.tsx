import React from 'react';

interface SupportSocialEmotionalProps {
  setCurrentArticle?: (article: string) => void;
}

export function SupportSocialEmotional({ setCurrentArticle }: SupportSocialEmotionalProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#2abcd4] p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-[#0c264d] pb-4 mb-6 gap-4">
        <h2 className="text-3xl font-spartan text-[#0c264d]">Support: Social-Emotional</h2>
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
          <button onClick={() => setCurrentArticle?.('dyslexia-support-social')} className="p-2 rounded bg-[#0A9DC4] text-white font-bold">Social-Emotional</button>
          <button onClick={() => setCurrentArticle?.('dyslexia-support-home')} className="p-2 rounded bg-gray-100 hover:bg-gray-200 font-bold">Home Support</button>
        </div>

        <h3 className="text-xl font-bold mb-4 text-[#0c264d]">Building Self-Esteem & Resilience</h3>
        <ul className="list-disc ml-5 space-y-2 mb-6 text-slate-700">
          <li>Focus on strengths/talents, not just weaknesses.<sup className="text-green-600 font-bold ml-0.5">1</sup></li>
          <li>Celebrate progress and effort.</li>
          <li>Connect with successful role models.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
          <li>Educate on dyslexia: it is a learning difference, not a deficiency.</li>
        </ul>

        <h3 className="text-xl font-bold mb-4 text-[#0c264d]">Managing Anxiety</h3>
        <ul className="list-disc ml-5 space-y-2 mb-6 text-slate-700">
          <li>Counseling for stress.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
          <li>Mindfulness and relaxation.</li>
          <li>Chunking tasks.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
        </ul>

        <h3 className="text-xl font-bold mb-4 text-[#0c264d]">Self-Advocacy</h3>
        <ul className="list-disc ml-5 space-y-2 mb-6 text-slate-700">
          <li>Understand own learning profile.<sup className="text-green-600 font-bold ml-0.5">5</sup></li>
          <li>Ask for accommodations.<sup className="text-green-600 font-bold ml-0.5">6</sup></li>
          <li>Explain dyslexia to others.</li>
        </ul>

        <div className="mt-8 pt-6 border-t">
          <h3 className="font-bold text-xl text-[#0c264d] mb-4">References</h3>
          <ol className="list-decimal ml-5 text-xs text-slate-600 space-y-2">
            <li>Humphrey, N., & Mullins, P. M. (2002). "Self-concept and self-esteem in developmental dyslexia." <em>Journal of Research in Special Educational Needs</em>, 2(2).</li>
            <li>Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</li>
            <li>Boetsch, E. A., Green, P. A., & Pennington, B. F. (1996). "Psychosocial correlates of dyslexia across the life span." <em>Development and Psychopathology</em>, 8(3), 539-562.</li>
            <li>Grills-Taquechel, A. E., et al. (2012). "Anxiety and reading difficulties." <em>Child Psychiatry & Human Development</em>, 43(1), 35-47.</li>
            <li>Daly, C., Kelley, K., & Krauss, A. (2003). <em>Self-advocacy: A valuable skill for your teenager with LD</em>.</li>
            <li>Gerber, P. J. (2012). "The impact of learning disabilities on adulthood." <em>Journal of Learning Disabilities</em>, 45(1), 31-46.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}