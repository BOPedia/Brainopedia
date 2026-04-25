import React from 'react';

export function RelationshipsContent() {
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
              <li><strong>The "Autistic-Autistic" Bond:</strong> Many report that friendships with other neurodivergent people feel more natural and require less "masking."</li>
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
              <li><strong>Acceptance:</strong> Family understanding is the single greatest predictor of long-term wellbeing for autistic individuals.</li>
              <li><strong>Autistic Parenting:</strong> Many autistic adults are parents themselves, often finding deep empathy for their children's sensory or social needs.</li>
              <li><strong>Renegotiating Autonomy:</strong> As autistic adults age, family relationships often shift toward "supported decision-making" rather than guardianship.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- TAB-SPECIFIC REFERENCES --- */}
      <section className="mt-12 pt-6 border-t-2 border-gray-200">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ol className="list-decimal ml-5 space-y-3 text-sm text-gray-600">
          <li>Crompton, C. J., et al. (2020). Autistic peer-to-peer information transfer is highly effective.</li>
          <li>Milton, D. E. (2012). On the ontological status of autism: the ‘double empathy problem’.</li>
          <li>Lewis, L. F. (2017). Realizing a Diagnosis of Autism in Adulthood.</li>
        </ol>
      </section>
    </div>
  );
}