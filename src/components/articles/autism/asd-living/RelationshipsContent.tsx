import React from 'react';

/* ─── THE GUEST LIST (Interface) ─── */
interface RelationshipsContentProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function RelationshipsContent({ setCurrentArticle }: RelationshipsContentProps) {
  return (
    <div className="animate-fadeIn">
      <section className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-[#ffd166] pb-2 inline-block">
          Relationships & Social Life
        </h2>

        <div className="space-y-8">
          {/* Friendships Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Friendships</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Autistic people form deep, meaningful friendships, though the patterns of these connections may differ from neurotypical expectations:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Quality over Quantity:</strong> Many prefer one or two intense, loyal friendships over a large social circle.</li>
              <li><strong>Shared Interests:</strong> Connections are often built around "parallel play" or shared deep passions rather than small talk.</li>
              <li><strong>The "Autistic-Autistic" Bond:</strong> Many report that friendships with other neurodivergent people feel more natural and require less "masking."<sup>1, 2</sup></li>
              <li><strong>Digital Connection:</strong> Online communities can provide vital social outlets that are less sensory-taxing than in-person hangouts.</li>
            </ul>
          </div>

          {/* Romantic Relationships Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Many autistic people lead fulfilling romantic lives, bringing unique strengths like radical honesty and deep devotion to their partners:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Communication Styles:</strong> Direct communication can be a massive strength, reducing the "mind-reading" common in many relationships.</li>
              <li><strong>Sensory Intimacy:</strong> Navigating physical touch requires open dialogue about sensory boundaries and preferences.</li>
              <li><strong>Neurodiverse Couples:</strong> Relationships between autistic and neurotypical partners thrive when both parties learn each other's "social languages."</li>
            </ul>
          </div>

          {/* Family Dynamics Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Relationships</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Autism often runs in families, creating unique multi-generational dynamics:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Acceptance:</strong> Family understanding is the single greatest predictor of long-term wellbeing for autistic individuals.<sup<3/>sup></li>
              <li><strong>Autistic Parenting:</strong> Many autistic adults are parents themselves, often finding deep empathy for their children's sensory or social needs.</li>
              <li><strong>Renegotiating Autonomy:</strong> As autistic adults age, family relationships often shift toward "supported decision-making" rather than guardianship.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>
              Crompton, C. J., Ropar, D., Evans-Williams, C. V., Flynn, E. G., & Fletcher-Watson, S. (2020). "Autistic peer-to-peer information transfer is highly effective." <i>Autism</i>, 24(7), 1704-1712.
            </li>
            <li>
              Milton, D. E. (2012). "On the ontological status of autism: the 'double empathy problem'." <i>Disability & Society</i>, 27(6), 883-887.
            </li>
            <li>
              Lewis, L. F. (2017). "Realizing a diagnosis of autism spectrum disorder as an adult." <i>International Journal of Mental Health Nursing</i>, 26(4), 346-354.
            </li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed pl-2">
            <li>
              American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.). American Psychiatric Publishing.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}