import React from 'react';
import { ImageWithFallback } from "../../../figma/ImageWithFallback";

/* ─── THE GUEST LIST (Interface) ─── */
interface EducationEmploymentContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function EducationEmploymentContent({ setCurrentArticle }: EducationEmploymentContentProps) {
  return (
    <div className="animate-fadeIn">
      <section className="mb-10">
        <div className="bg-[#f0f9ff] p-6 rounded-lg">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl border-b border-[#ffd166] pb-2 inline-block">
            Education & Employment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Higher Education Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Higher Education</h3>
              </div>
              
              <div className="mx-auto w-64 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-EEtab-college.png" 
                    alt="Graphic representing higher education and college life"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Increasing numbers of autistic students are pursuing college degrees, bringing deep focus and original thinking to academia:<sup className="text-green-600 font-bold ml-0.5">1</sup>
              </p>
              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
                <li><strong>Strengths:</strong> Intense dedication to subjects of interest and a high aptitude for detailed research.</li>
                <li><strong>Challenges:</strong> Managing the "hidden curriculum" of college social life and the executive function demands of unstructured schedules.</li>
                <li><strong>Supports:</strong> Accessing disability services for accommodations like extended testing time, quiet testing environments, or note-taking assistance.</li>
              </ul>
            </div>

            {/* Employment Card */}
            <div className="bg-white p-5 rounded-md border-t-4 border-[#2abcd4] shadow-sm flex flex-col">
              <div className="text-center">
                <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Employment & The Workplace</h3>
              </div>
              
              <div className="mx-auto w-64 mb-4">
                <div className="rounded-lg shadow-sm overflow-hidden bg-white">
                  <ImageWithFallback 
                    src="/images/autism/autism-living-EEtab-workplace.png" 
                    alt="Graphic representing employment and the workplace"
                  />
                </div>
              </div>

              <p className="mb-4 text-sm text-gray-700">
                Autistic adults face disproportionately high rates of un- and underemployment, despite possessing valuable skills. Standard interview processes often screen out capable autistic candidates by prioritizing neurotypical social skills over job-related competencies.<sup className="text-green-600 font-bold ml-0.5">2</sup>
              </p>

              {/* Nested Barrier/Accommodation Boxes */}
              <div className="space-y-4 mb-4 mt-2">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Common Barriers</h4>
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li>• Sensory-hostile open office plans</li>
                    <li>• Unwritten social rules and office politics</li>
                    <li>• Vague or ambiguous instructions</li>
                    <li>• The social demands of networking</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-[#10b981]">
                  <h4 className="font-bold text-[#0c264d] mb-2 text-sm">Effective Accommodations</h4>
                  <ul className="text-xs space-y-1 text-gray-700">
                    <li>• Flexible or remote work options<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
                    <li>• Written rather than verbal instructions</li>
                    <li>• Sensory-friendly workspaces</li>
                    <li>• Explicit, clear feedback loops</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 italic text-xs mt-auto">
                Note: Many autistic individuals find significant success through self-employment, allowing them to curate their own environment and schedule around their specific needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>
              Van Hees, V., Moyson, T., & Roeyers, H. (2015). "Higher education experiences of students with autism spectrum disorder: Challenges, benefits and support needs." <i>Journal of Autism and Developmental Disorders</i>, 45(6), 1673-1688.
            </li>
            <li>
              Hurley-Hanson, A. E., Giannantonio, C. M., & Griffiths, A. J. (2020). "Extreme loneliness: The status of the autistic workforce." <i>Journal of Business and Management</i>, 26(1), 1-25.
            </li>
            <li>
              Gurbuz, N., Hanley, M., & Riby, D. M. (2019). "Employment outcomes for autistic adults: Enablers and barriers to employment." <i>Autism</i>, 23(3), 617-631.
            </li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}