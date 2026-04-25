import React from 'react';

export function DailyLifeContent() {
  return (
    <div className="animate-fadeIn">
      <section className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-[#ffd166] pb-2 inline-block">
          Daily Life & Practical Considerations
        </h2>

        <div className="space-y-8">
          {/* Communication Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication in Daily Life</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Autistic people communicate in diverse ways, often diverging from neurotypical expectations:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Verbal communication:</strong> Many are fluent but may struggle with processing speed or social pragmatics.</li>
              <li><strong>Selective mutism:</strong> Speaking in certain comfortable situations but not others.</li>
              <li><strong>Nonspeaking:</strong> Roughly 25-30% of autistic people are nonspeaking or minimally speaking.</li>
              <li><strong>AAC users:</strong> Utilizing tablets, letter boards, or sign language to communicate.</li>
              <li><strong>Processing time:</strong> Requiring extra time to translate spoken words into meaning.</li>
            </ul>
          </div>

          {/* Sensory Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sensory Experiences</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Sensory differences are not just "preferences"; they profoundly affect daily functioning:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Environmental management:</strong> Curating home spaces to reduce overwhelming stimuli.</li>
              <li><strong>Accommodations:</strong> Using tools like noise-canceling headphones or tinted lenses.</li>
              <li><strong>Sensory seeking:</strong> Actively engaging in "stimming" or sensory input to self-regulate.</li>
              <li><strong>Recovery:</strong> Needing significant "recharge time" after sensory-heavy outings.</li>
            </ul>
          </div>

          {/* Executive Function Section */}
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Executive Function & Energy</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Managing the "business of being alive" can require more cognitive effort:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Visual supports:</strong> Using checklists and timers to compensate for internal organization challenges.</li>
              <li><strong>Task initiation:</strong> Finding it difficult to start even simple tasks without a clear "on-ramp."</li>
              <li><strong>Autistic Burnout:</strong> Chronic exhaustion caused by prolonged masking and over-exertion.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Independent Living Section */}
      <section className="bg-slate-50 p-6 rounded-xl mb-10 border-l-4 border-[#2abcd4]">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl">Independent Living Arrangements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <ul className="space-y-2">
            <li>🏠 <strong>Independent:</strong> Living alone or with partners.</li>
            <li>👥 <strong>Supported:</strong> Living independently with visiting staff.</li>
          </ul>
          <ul className="space-y-2">
            <li>👨‍👩‍👧 <strong>With Family:</strong> Living with parents by choice or necessity.</li>
            <li>🏡 <strong>Group Homes:</strong> Shared living with 24-hour support.</li>
          </ul>
        </div>
      </section>

      {/* --- TAB-SPECIFIC REFERENCES --- */}
      <section className="mt-12 pt-6 border-t-2 border-gray-200">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ol className="list-decimal ml-5 space-y-3 text-sm text-gray-600">
          <li>Raymaker, D. M., et al. (2020). "Having All of Your Internal Resources Exhausted Beyond Measure": An Exploratory Study of Autistic Burnout.</li>
          <li>Belek, B. (2019). Articulating sensory experience: What properties of the world matter to autistic people?</li>
        </ol>
      </section>
    </div>
  );
}