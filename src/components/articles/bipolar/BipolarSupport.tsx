import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface BipolarSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function BipolarSupport({ setCurrentArticle }: BipolarSupportProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            A neurodivergent-affirming approach to management balances the need for stability with the acceptance of one's unique neurotype.<sup>[33]</sup>
          </p>
          <p className="mb-4">
            Management is typically multifaceted, combining medication, therapy, and lifestyle adjustments to create a personalized "tool kit" for the individual.
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1765222385397-6c2ea556086f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2F0aW9uJTIwdHJlYXRtZW50JTIwc3VwcG9ydCUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NzQwNzYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Medication and treatment support - managing bipolar disorder"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-6">
          <h3 className="font-bold text-[#166534] mb-4 text-lg">Medical & Clinical Support</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li><strong>Medication:</strong> Mood stabilizers, antipsychotics, and antidepressants.<sup>[34]</sup></li>
            <li><strong>Psychotherapy:</strong> CBT, DBT, and Family-Focused Therapy.<sup>[36]</sup></li>
            <li><strong>Psychoeducation:</strong> Learning about the condition to recognize early warning signs.</li>
            <li><strong>Crisis Planning:</strong> Developing "safety plans" for severe mood episodes.</li>
          </ul>
        </div>
        <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg p-6">
          <h3 className="font-bold text-[#075985] mb-4 text-lg">Lifestyle Strategies</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li><strong>Sleep Consistency:</strong> Maintaining a strict sleep-wake cycle (critical).<sup>[37]</sup></li>
            <li><strong>Routine:</strong> Building a predictable daily structure to anchor the internal clock.</li>
            <li><strong>Stress Management:</strong> Mindfulness and boundaries to prevent triggers.</li>
            <li><strong>Community:</strong> Peer support groups and understanding social circles.<sup>[39]</sup></li>
          </ul>
        </div>
      </div>

      <p className="mb-4 text-sm">
        Finding the right combination of support is a collaborative process between the individual and their care team, often requiring patience and trial to find what works best for their unique brain.<sup>[35]</sup>
      </p>
    </div>
  );
}
