import React from 'react';
import { ASDComorbidities } from '../../infographics/ASDComorbidities';

export function MentalHealthContent() {
  return (
    <div className="animate-fadeIn">
      <section className="mb-10">
        <h2 className="text-[#0c264d] font-bold mb-6 text-2xl border-b border-[#ffd166] pb-2 inline-block">
          Mental Health & Wellbeing
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Co-occurring Conditions</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Autistic individuals often experience co-occurring mental health conditions. These are frequently not 
              "part of autism" itself, but rather a result of the chronic stress of living in a world not 
              designed for neurodivergent needs.
            </p>

            {/* Your Infographic */}
            <div className="flex justify-center my-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <ASDComorbidities />
            </div>

            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Anxiety:</strong> 40-50% prevalence. Often related to social unpredictability or sensory overwhelm.</li>
              <li><strong>Depression:</strong> 20-37% prevalence. Frequently linked to the exhaustion of "masking."</li>
              <li><strong>ADHD:</strong> 30-60% prevalence. Significant overlap in executive function challenges.</li>
              <li><strong>OCD:</strong> 17-37% prevalence. Distinct from, but often co-occurring with, autistic repetitive behaviors.</li>
              <li><strong>Sleep Disorders:</strong> 40-83% prevalence. Affects overall emotional regulation and daily functioning.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border-2 border-[#2abcd4] rounded-xl p-5 bg-white shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Threats to Wellbeing</h3>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <strong>Masking:</strong> Suppressing traits to fit in, leading to burnout.</li>
                <li>• <strong>Invalidation:</strong> Being told your sensory struggles "aren't real."</li>
                <li>• <strong>Lack of Autonomy:</strong> Feeling a lack of control over one's environment.</li>
              </ul>
            </div>

            <div className="border-2 border-[#2abcd4] rounded-xl p-5 bg-white shadow-sm">
              <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Protective Factors</h3>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>• <strong>Neuro-Affirming Support:</strong> Care that respects autistic ways of being.</li>
                <li>• <strong>Special Interests:</strong> Using deep passions for regulation and joy.</li>
                <li>• <strong>Community:</strong> Connection with other autistic people.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION REFERENCES (Pulled from your SVG) --- */}
      <section className="mt-12 pt-6 border-t-2 border-gray-200">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ul className="list-none space-y-3 text-sm text-gray-600">
          <li>• <strong>Anxiety:</strong> Lugo-Marín et al. (2019); Hollocks et al. (2019)</li>
          <li>• <strong>Depression:</strong> Hudson et al. (2019); Hollocks et al. (2019)</li>
          <li>• <strong>ADHD:</strong> Leitner (2014); Taurines et al. (2012)</li>
          <li>• <strong>OCD:</strong> Meier et al. (2015); Postorino et al. (2017)</li>
          <li>• <strong>Sleep:</strong> Schwichtenberg et al. (2022)</li>
          <li className="pt-2 italic text-gray-400">Note: These citations align with the Brainopedia co-occurring conditions infographic.</li>
        </ul>
      </section>
    </div>
  );
}