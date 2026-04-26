import React from 'react';

export function PhysicalTherapy() {
  return (
    <div className="animate-fadeIn">
      {/* Header Section */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6">
        <h1 className="text-[#0c264d] text-3xl font-bold">Physical Therapy (PT)</h1>
      </div>

      <div className="mb-8">
        <p className="mb-4 leading-relaxed">
          Physical therapy for autistic individuals focuses on improving gross motor skills, 
          balance, coordination, and strength. While often associated with injury recovery, 
          PT in the context of neurodivergence addresses the underlying neurological 
          differences in motor planning and sensory processing.
        </p>
        <p className="mb-4 leading-relaxed">
          Research indicates that up to 87% of autistic children demonstrate some form of 
          motor impairment, ranging from low muscle tone to significant challenges with 
          balance and gait<span className="text-[#10b981] font-bold"><sup>[1]</sup></span>.
        </p>
      </div>

      {/* Core Focus Areas - Yellow Border Standard */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8 shadow-sm border-l-4 border-[#2abcd4]">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Areas of Intervention</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border-l-4 border-[#ffd166]">
            <h3 className="font-bold text-[#0c264d]">Gross Motor Skills</h3>
            <p className="text-sm">Mastering large muscle movements such as jumping, running, and navigating stairs safely.</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-[#ffd166]">
            <h3 className="font-bold text-[#0c264d]">Proprioceptive Input</h3>
            <p className="text-sm">Activities that provide deep pressure to joints and muscles to improve body awareness and regulation.</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-[#ffd166]">
            <h3 className="font-bold text-[#0c264d]">Balance & Vestibular</h3>
            <p className="text-sm">Strengthening the inner ear system to reduce clumsiness and improve stability during play.</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-[#ffd166]">
            <h3 className="font-bold text-[#0c264d]">Motor Planning (Praxis)</h3>
            <p className="text-sm">The ability to conceive, plan, and carry out a sequence of unfamiliar physical actions.</p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Beyond Physical Movement</h2>
        <p className="mb-4 leading-relaxed">
          Physical therapy often has a secondary "ripple effect" on social and emotional well-being. 
          Studies show that improving a child's physical competence increases their confidence 
          to join peer groups in the playground, directly impacting social inclusion 
          and reducing anxiety related to physical education<span className="text-[#10b981] font-bold"><sup>[2]</sup></span>.
        </p>
      </div>

      {/* MANDATORY REFERENCES SECTION */}
      <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        
        <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
        <div className="text-sm space-y-2 ml-4">
          <p>[1] Bhat, A. N. (2020). "Motor Impairment Prevalence in Autistic Children." <em>Physical Therapy Journal</em>, 100(4), 633-644.</p>
          <p>[2] Healy, S., et al. (2018). "The Impact of Physical Activity on Social Skills in ASD." <em>Current Psychiatry Reports</em>, 20(9), 81.</p>
        </div>
        
        <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
        <div className="text-sm space-y-2">
          <p>American Physical Therapy Association. (2024). "Pediatric Physical Therapy for Developmental Disorders."</p>
          <p>Fournier, K. A., et al. (2010). "Motor function in autism spectrum disorder: A meta-analysis." Journal of Autism and Developmental Disorders.</p>
          <p>Autism Society of America. (2023). "Physical Therapy and Sensory Integration."</p>
        </div>
      </div>
    </div>
  );
}