import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DownSyndromeDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function DownSyndromeDiagnosis({ setCurrentArticle }: DownSyndromeDiagnosisProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Down syndrome is identified through prenatal testing or at birth.<sup>[25]</sup> Prenatal screening tests (blood tests and ultrasound) assess risk, while diagnostic tests (CVS or amniocentesis) provide a definitive diagnosis.<sup>[26]</sup>
          </p>
          <p className="mb-4">
            At birth, the condition is typically identified by physical characteristics and confirmed through a chromosomal analysis (karyotype) blood test.<sup>[28]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5ldGljJTIwdGVzdGluZyUyMG1lZGljYWwlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NzQwODYyOHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Genetic testing - diagnosing Down syndrome"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="space-y-4 mt-8">
        <h3 className="font-bold text-[#0c264d] text-xl">Post-Diagnosis Evaluation</h3>
        <p>Following a diagnosis, a comprehensive medical evaluation typically includes:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li className="bg-white p-3 border border-gray-100 rounded shadow-sm flex items-start">
            <span className="text-[#2abcd4] mr-2">✔</span>
            <span className="text-sm"><strong>Cardiac Evaluation:</strong> Echocardiogram to check for heart defects.</span>
          </li>
          <li className="bg-white p-3 border border-gray-100 rounded shadow-sm flex items-start">
            <span className="text-[#2abcd4] mr-2">✔</span>
            <span className="text-sm"><strong>Sensory Screening:</strong> Early hearing and vision testing.</span>
          </li>
          <li className="bg-white p-3 border border-gray-100 rounded shadow-sm flex items-start">
            <span className="text-[#2abcd4] mr-2">✔</span>
            <span className="text-sm"><strong>Thyroid Testing:</strong> Regular monitoring of thyroid function.</span>
          </li>
          <li className="bg-white p-3 border border-gray-100 rounded shadow-sm flex items-start">
            <span className="text-[#2abcd4] mr-2">✔</span>
            <span className="text-sm"><strong>Developmental Assessment:</strong> Baseline for early intervention services.</span>
          </li>
        </ul>
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Early identification is crucial as it allows families to access early intervention services from birth, which significantly improves long-term outcomes.<sup>[30]</sup>
      </p>
    </div>
  );
}
