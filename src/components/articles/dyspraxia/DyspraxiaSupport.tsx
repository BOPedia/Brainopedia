import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyspraxiaSupport({ setCurrentArticle }: DyspraxiaSupportProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Support for dyspraxia focuses on building <strong>functional motor skills</strong> and developing <strong>compensatory strategies</strong>.<sup>[29]</sup>
          </p>
          <p className="mb-4 text-sm text-gray-700">
            Early intervention can help children develop the muscle memory and coordination needed for daily life, while adults often focus on workplace accommodations and organizational tools.
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1561577732-4aaa488cd807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxhbmNlJTIwY29vcmRpbmF0aW9uJTIwZXhlcmNpc2UlMjB0aGVyYXB5fGVufDF8fHx8MTc2NzQwNzE3OXww"
            alt="Balance and coordination therapy exercises"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-6">
          <h3 className="font-bold text-[#166534] mb-4 text-lg">Therapeutic Interventions</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li><strong>Occupational Therapy:</strong> Fine motor skills, typing, and sensory integration.<sup>[30]</sup></li>
            <li><strong>Physiotherapy:</strong> Core strength, balance, and gross motor coordination.</li>
            <li><strong>Task-Specific Training:</strong> Practicing specific activities until they become automatic.</li>
            <li><strong>Speech Therapy:</strong> If verbal dyspraxia is present.</li>
          </ul>
        </div>
        <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg p-6">
          <h3 className="font-bold text-[#075985] mb-4 text-lg">Accommodations & Aids</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li><strong>Education:</strong> Extra time for tests, use of laptop/tablet for writing.<sup>[31]</sup></li>
            <li><strong>Assistive Tech:</strong> Speech-to-text software, ergonomic keyboards.<sup>[34]</sup></li>
            <li><strong>Life Hacks:</strong> Elastic laces, slip-on shoes, visual planners.<sup>[32]</sup></li>
            <li><strong>Emotional Support:</strong> Counseling to address frustration and anxiety.<sup>[33]</sup></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
