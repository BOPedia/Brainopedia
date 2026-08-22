import React from 'react';
import { ASDComorbidities } from '../../../infographics/ASDComorbidities';

interface MentalHealthProps {
  setCurrentArticle?: (article: string) => void;
}

export function MentalHealth({ setCurrentArticle }: MentalHealthProps) {
  return (
    <div className="animate-fadeIn font-spartan text-[#0c264d] space-y-6">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-[#0c264d] text-3xl font-bold">Mental Health Support & Counseling</h1>
        
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Mental health support for autistic individuals requires a neuro-affirming approach that recognizes 
          autistic traits as differences to be supported rather than "symptoms" to be cured.
        </p>
      </div>

      {/* Infographic stays here because it's vital evidence */}
      <div className="flex justify-center my-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <ASDComorbidities />
      </div>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-xl">Neuro-Affirming Therapy</h2>
          <p className="text-gray-700 mb-4">
            Effective mental health support focuses on:
          </p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>Modifying CBT:</strong> Using concrete language and addressing sensory needs during Talk Therapy.</li>
            <li><strong>Addressing Masking:</strong> Helping individuals reduce the exhaustion of "performing" neurotypicality.<sup className="text-green-600 font-bold ml-0.5">3</sup></li>
            <li><strong>Trauma-Informed Care:</strong> Recognizing the high rates of PTSD within the community.<sup className="text-green-600 font-bold ml-0.5">2</sup></li>
          </ul>
        </section>
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
      <div className="clear-both"></div>

      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Lugo-Marín, J., et al. (2019). "Prevalence of psychiatric disorders in adults with autism spectrum disorder: A systematic review and meta-analysis." <i>Research in Autism Spectrum Disorders</i>. https://doi.org/10.1016/j.rasd.2019.01.002</p>
            <p>2. Cassidy, S., et al. (2018). "Risk markers for suicidality in autistic adults." <i>Molecular Autism</i>. https://doi.org/10.1186/s13229-018-0226-4</p>
            <p>3. Cage, E., et al. (2018). "Experiences of Autism Acceptance and Mental Health in Autistic Adults." <i>Journal of Autism and Developmental Disorders</i>. https://doi.org/10.1007/s10803-017-3342-7</p>
          </div>
        </div>
      </div>
    </div>
  );
}