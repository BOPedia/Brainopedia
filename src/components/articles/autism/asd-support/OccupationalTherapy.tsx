import React from 'react';

export function OccupationalTherapy() {
  return (
    <div className="animate-fadeIn">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6">
        <h1 className="text-[#0c264d] text-3xl font-bold">Occupational Therapy (OT)</h1>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Occupational therapy helps autistic individuals develop the skills needed for the "occupations" of daily life—including self-care, school participation, and play.
        </p>
      </div>

      <div className="bg-[#fdf2f2] p-6 rounded-lg mb-8 shadow-sm">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border-l-4 border-[#ff6b6b]">
            <h3 className="font-bold text-[#0c264d]">Sensory Integration</h3>
            <p className="text-sm text-gray-600">Managing reactions to textures, sounds, and lights to improve regulation.</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-[#ff6b6b]">
            <h3 className="font-bold text-[#0c264d]">Motor Skills</h3>
            <p className="text-sm text-gray-600">Improving hand strength for writing (fine motor) and balance for play (gross motor).</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t-2 border-gray-200 text-xs text-gray-500">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Case-Smith, J., & Arbesman, M. (2008). Evidence-based review of occupational therapy for autism.</li>
          <li>Schaaf, R. C., et al. (2014). Sensory integration outcomes in children with autism.</li>
        </ul>
      </div>
    </div>
  );
}
