import React from 'react';

interface PhysicalTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function PhysicalTherapy({ setCurrentArticle }: PhysicalTherapyProps) {
  return (
    <div className="animate-fadeIn font-spartan text-[#0c264d] space-y-6">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">Physical Therapy (PT)</h1>
        
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      <div className="mb-8">
        <p className="mb-4 leading-relaxed text-gray-700">
          Physical therapy for autistic individuals focuses on improving gross motor skills, 
          balance, coordination, and strength. While often associated with injury recovery, 
          PT in the context of neurodivergence addresses the underlying neurological 
          differences in motor planning and sensory processing.
        </p>
        <p className="mb-4 leading-relaxed text-gray-700">
          Research indicates that up to 87% of autistic children demonstrate some form of 
          motor impairment, ranging from low muscle tone to significant challenges with 
          balance and gait<sup className="text-green-600 font-bold ml-0.5">1</sup>.
        </p>
      </div>

      {/* Core Focus Areas */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg mb-8 shadow-sm border-l-4 border-[#2abcd4]">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Areas of Intervention</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-1">Gross Motor Skills</h3>
            <p className="text-sm text-gray-700">Mastering large muscle movements such as jumping, running, and navigating stairs safely.</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-1">Proprioceptive Input</h3>
            <p className="text-sm text-gray-700">Activities that provide deep pressure to joints and muscles to improve body awareness and regulation.</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-1">Balance & Vestibular</h3>
            <p className="text-sm text-gray-700">Strengthening the inner ear system to reduce clumsiness and improve stability during play.</p>
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-[#ffd166] shadow-sm">
            <h3 className="font-bold text-[#0c264d] mb-1">Motor Planning (Praxis)</h3>
            <p className="text-sm text-gray-700">The ability to conceive, plan, and carry out a sequence of unfamiliar physical actions.</p>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Beyond Physical Movement</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Physical therapy often has a secondary "ripple effect" on social and emotional well-being. 
          Studies show that improving a child's physical competence increases their confidence 
          to join peer groups in the playground, directly impacting social inclusion 
          and reducing anxiety related to physical education<sup className="text-green-600 font-bold ml-0.5">2</sup>.
        </p>
      </div>

      {/* Back Button Bottom */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Bhat, A. N. (2020). "Is Motor Impairment in Autism Spectrum Disorder Distinct From Developmental Coordination Disorder? A Report From the SPARK Study." <i>Physical Therapy</i>. https://doi.org/10.1093/ptj/pzaa007</p>
            <p>2. Healy, S., et al. (2018). "The effect of physical activity interventions on youth with autism spectrum disorder: A meta-analysis." <i>Autism Research</i>. https://doi.org/10.1002/aur.1895</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>American Physical Therapy Association. (2024). "Pediatric Physical Therapy for Developmental Disorders." https://www.apta.org/</p>
            <p>Fournier, K. A., et al. (2010). "Motor Coordination in Autism Spectrum Disorders: A Synthesis and Meta-Analysis." <i>Journal of Autism and Developmental Disorders</i>. https://doi.org/10.1007/s10803-010-0981-3</p>
            <p>Autism Society of America. (2023). "Physical Therapy and Sensory Integration." https://autismsociety.org/</p>
          </div>
        </div>
      </div>
    </div>
  );
}