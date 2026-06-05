import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyspraxiaDiagnosis({ setCurrentArticle }: DyspraxiaDiagnosisProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Dyspraxia (DCD) is diagnosed through comprehensive assessments by specialists like <strong>Occupational Therapists (OTs)</strong> or developmental pediatricians.<sup>[23]</sup>
          </p>
          <p className="mb-4 text-sm text-gray-700">
            For a formal diagnosis, motor difficulties must significantly impact daily life or academic performance and cannot be explained by other medical conditions or intellectual disability.<sup>[26]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1709127347884-a106974ef58d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2N1cGF0aW9uYWwlMjB0aGVyYXB5JTIwYXNzZXNzbWVudCUyMGNoaWxkfGVufDF8fHx8MTc2NzQwNzE4MHww"
            alt="Occupational therapy assessment for dyspraxia"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-[#0c264d] text-xl text-center">Standardized Assessments</h3>
        <p className="text-sm text-center text-gray-600 mb-6">Clinicians use specific tools to measure motor proficiency compared to age-matched peers.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-gray-200 rounded shadow-sm">
            <h4 className="font-bold text-[#2abcd4] mb-1">MABC-2</h4>
            <p className="text-xs text-gray-700">Movement Assessment Battery for Children. Tests balance, ball skills, and manual dexterity.<sup>[28]</sup></p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded shadow-sm">
            <h4 className="font-bold text-[#2abcd4] mb-1">BOT-2</h4>
            <p className="text-xs text-gray-700">Bruininks-Oseretsky Test of Motor Proficiency. Evaluates fine and gross motor skills across eight categories.<sup>[24]</sup></p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded shadow-sm">
            <h4 className="font-bold text-[#2abcd4] mb-1">Functional Observation</h4>
            <p className="text-xs text-gray-700">Clinical observation of how the individual moves in real-world settings (e.g., playground, classroom).</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded shadow-sm">
            <h4 className="font-bold text-[#2abcd4] mb-1">Developmental History</h4>
            <p className="text-xs text-gray-700">Review of motor milestones like sitting up, crawling, and walking.<sup>[25]</sup></p>
          </div>
        </div>
      </div>
    </div>
  );
}
