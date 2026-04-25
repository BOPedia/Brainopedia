import React from 'react';

export function PhysicalTherapy() {
  return (
    <div className="animate-fadeIn">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6">
        <h1 className="text-[#0c264d] text-3xl font-bold">Physical Therapy (PT)</h1>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Physical therapy for autistic individuals focuses on improving gross motor skills, 
          balance, coordination, and strength to support participation in physical activities 
          and daily routines.
        </p>
      </div>

      <div className="bg-[#f0fdf4] p-6 rounded-lg mb-8 shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Key Objectives</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-[#22c55e]">
            <h3 className="font-bold text-[#0c264d]">Motor Planning & Coordination</h3>
            <p className="text-sm text-gray-600">Helping the brain and body work together to execute complex movements like climbing or riding a bike.</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-[#22c55e]">
            <h3 className="font-bold text-[#0c264d]">Postural Control</h3>
            <p className="text-sm text-gray-600">Developing core strength to improve sitting and standing endurance in school or work environments.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t-2 border-gray-200 text-xs text-gray-500">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Bhat, A. N., et al. (2011). Motor impairment in children with autism spectrum disorders.</li>
          <li>Fournier, K. A., et al. (2010). Motor function in autism spectrum disorder: A meta-analysis.</li>
        </ul>
      </div>
    </div>
  );
}