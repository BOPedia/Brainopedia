import React from 'react';

export function EducationEmploymentContent() {
  return (
    <div className="animate-fadeIn">
      <section className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-[#ffd166] pb-2 inline-block">
          Education & Employment
        </h2>

        <div className="space-y-8">
          {/* Higher Education Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Higher Education</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Increasing numbers of autistic students are pursuing college degrees, bringing deep focus and original thinking to academia:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Strengths:</strong> Intense dedication to subjects of interest and a high aptitude for detailed research.</li>
              <li><strong>Challenges:</strong> Managing the "hidden curriculum" of college social life and the executive function demands of unstructured schedules.</li>
              <li><strong>Supports:</strong> Accessing disability services for accommodations like extended testing time, quiet testing environments, or note-taking assistance.</li>
            </ul>
          </div>

          {/* Employment Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Employment & The Workplace</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              While employment rates remain a challenge, neurodiversity hiring initiatives are beginning to recognize the immense value autistic employees bring to the workforce:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#2abcd4]/10 p-4 rounded-lg border-l-4 border-[#2abcd4]">
                <h4 className="font-bold text-[#0c264d] mb-2">Common Strengths</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Pattern recognition & logic</li>
                  <li>• Unwavering honesty & integrity</li>
                  <li>• Deep technical expertise</li>
                  <li>• Sustained focus on complex tasks</li>
                </ul>
              </div>
              <div className="bg-[#ffd166]/10 p-4 rounded-lg border-l-4 border-[#ffd166]">
                <h4 className="font-bold text-[#0c264d] mb-2">Effective Accommodations</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Flexible or remote work options</li>
                  <li>• Written rather than verbal instructions</li>
                  <li>• Sensory-friendly workspaces</li>
                  <li>• Explicit, clear feedback loops</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 italic text-sm">
              Note: Many autistic individuals find significant success through self-employment, allowing them to curate their own environment and schedule around their specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* --- TAB-SPECIFIC REFERENCES --- */}
      <section className="mt-12 pt-6 border-t-2 border-gray-200">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ol className="list-decimal ml-5 space-y-3 text-sm text-gray-600">
          <li>Hurley-Hanson, A. E., et al. (2020). Extreme Loneliness: The Status of the Autistic Workforce.</li>
          <li>Gurbuz, N., et al. (2019). Employment outcomes for autistic adults: Enablers and barriers to employment.</li>
          <li>Van Hees, V., et al. (2015). Higher education for students with ASD: Challenges and support needs.</li>
        </ol>
      </section>
    </div>
  );
}