import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DownSyndromeSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DownSyndromeSymptoms({ setCurrentArticle }: DownSyndromeSymptomsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Down syndrome creates a distinct pattern of cognitive strengths and challenges.<sup>[10]</sup> Cognitive strengths often include visual learning, social awareness, and strong long-term memory.<sup>[11]</sup>
          </p>
          <p className="mb-4">
            Common physical characteristics include almond-shaped eyes with an upward slant, a flattened facial profile, and low muscle tone (hypotonia).<sup>[15]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1763831488402-107bb1824471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njc0MDg2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Visual learning and education - cognitive strengths in Down syndrome"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Cognitive Profile</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700">Strengths</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Visual learning and spatial processing</li>
                <li>Social awareness and emotional intelligence</li>
                <li>Observational learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-700">Challenges</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>Verbal short-term memory</li>
                <li>Auditory processing</li>
                <li>Expressive language development</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Associated Health Conditions</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Congenital heart defects (approx. 50%)</li>
            <li>Hearing and vision issues</li>
            <li>Thyroid problems</li>
            <li>Sleep apnea</li>
            <li>Increased susceptibility to infections<sup>[16][17]</sup></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
