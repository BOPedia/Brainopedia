import React from 'react';
import { ASDComorbidities } from '../../../infographics/ASDComorbidities';

export function MentalHealth() {
  return (
    <div className="animate-fadeIn">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6">
        <h1 className="text-[#0c264d] text-3xl font-bold">Mental Health Support & Counseling</h1>
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
            <li><strong>Addressing Masking:</strong> Helping individuals reduce the exhaustion of "performing" neurotypicality.</li>
            <li><strong>Trauma-Informed Care:</strong> Recognizing the high rates of PTSD within the community.</li>
          </ul>
        </section>
      </div>

      <div className="mt-12 pt-6 border-t-2 border-gray-200">
        <h3 className="text-[#0c264d] font-bold mb-4 text-xl">Section References</h3>
        <ul className="list-none space-y-2 text-sm text-gray-600">
          <li>• Lugo-Marín et al. (2019). Anxiety and autism.</li>
          <li>• Cassidy, S., et al. (2018). Suicidality and autism research markers.</li>
          <li>• Cage, E., et al. (2018). Costs of camouflaging for autistic adults.</li>
        </ul>
      </div>
    </div>
  );
}