import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyspraxiaSymptoms({ setCurrentArticle }: DyspraxiaSymptomsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Dyspraxia affects both <strong>gross motor skills</strong> (large movements) and <strong>fine motor skills</strong> (small, precise movements).<sup>[9]</sup> Individuals often face challenges with activities that others perform automatically.
          </p>
          <p className="mb-4">
            Beyond physical movement, dyspraxia can also impact organization, time management, and sometimes speech coordination (verbal dyspraxia).<sup>[11]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1763468839619-45036f744d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwbW90b3IlMjBza2lsbHMlMjBoYW5kd3JpdGluZ3xlbnwxfHx8fDE3Njc0MDcxODB8MA"
            alt="Fine motor skills and handwriting challenges"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Motor Challenges</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-[#2abcd4] mr-2">•</span>
              <span>Poor balance and spatial awareness (bumping into things).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2abcd4] mr-2">•</span>
              <span>Difficulty with handwriting, typing, or using utensils.<sup>[10]</sup></span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2abcd4] mr-2">•</span>
              <span>Challenges with multi-step physical tasks (e.g., tying laces).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2abcd4] mr-2">•</span>
              <span>Fatigue from the extra effort required for simple movements.</span>
            </li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Cognitive & Social Effects</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-[#2abcd4] mr-2">•</span>
              <span>Difficulty following multi-step instructions.<sup>[13]</sup></span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2abcd4] mr-2">•</span>
              <span>Challenges with time management and organization.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2abcd4] mr-2">•</span>
              <span>Short-term memory difficulties.<sup>[12]</sup></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">★</span>
              <span><strong>Strengths:</strong> High creativity, verbal skills, and empathy.<sup>[14]</sup></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
