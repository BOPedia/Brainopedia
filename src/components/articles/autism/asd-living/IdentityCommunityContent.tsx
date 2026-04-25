import React from 'react';

export function IdentityCommunityContent() {
  return (
    <div className="animate-fadeIn">
      <section className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-[#ffd166] pb-2 inline-block">
          Identity & Community
        </h2>

        <div className="space-y-8">
          {/* Identity Development Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Journey of Identity</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Understanding oneself as autistic is often a lifelong process of reframing experiences through a neuro-affirming lens:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Late Diagnosis:</strong> For many adults, a diagnosis provides a "missing piece," replacing years of self-criticism with self-understanding.</li>
              <li><strong>Moving Beyond Shame:</strong> Shifting from a "disorder" mindset to seeing autism as a natural neurological variation.</li>
              <li><strong>Disclosure:</strong> Navigating when and how to share one's autistic identity with employers, friends, or the public.</li>
            </ul>
          </div>

          {/* Neurodiversity Movement Section */}
          <div className="bg-[#0c264d] text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-[#ffd166] font-bold mb-3 text-lg text-center uppercase tracking-wider">
              The Neurodiversity Perspective
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-center italic">
              "Autism is not a tragedy. The tragedy is the way society treats us."
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span>Focus on <strong>acceptance</strong> over "cures."</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span>Celebrating autistic communication styles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span>Challenging deficit-based narratives in medicine.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ffd166]">✓</span>
                <span><strong>Nothing About Us Without Us:</strong> Centering autistic voices.</span>
              </li>
            </ul>
          </div>

          {/* Culture & Rights Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Autistic Culture & Rights</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A vibrant culture has emerged, characterized by shared communication styles, humor, and a focus on self-advocacy:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Community Spaces:</strong> Online forums and local meetups where "autistic-to-autistic" communication flourishes.</li>
              <li><strong>Legal Rights:</strong> Leveraging the ADA (Americans with Disabilities Act) and other protections to ensure equal access.</li>
              <li><strong>Self-Advocacy:</strong> Learning to speak up for specific sensory or cognitive needs in public and private spaces.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- TAB-SPECIFIC REFERENCES --- */}
      <section className="mt-12 pt-6 border-t-2 border-gray-200">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ol className="list-decimal ml-5 space-y-3 text-sm text-gray-600">
          <li>Singer, J. (2017). NeuroDiversity: The Birth of an Idea.</li>
          <li>Kapp, S. K. (2020). Autistic Community and the Neurodiversity Movement.</li>
          <li>Botha, M., et al. (2020). "Autism is help-seeking, not a identity": The impact of the medical model.</li>
        </ol>
      </section>
    </div>
  );
}