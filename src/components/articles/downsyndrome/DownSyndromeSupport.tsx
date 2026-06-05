import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DownSyndromeSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function DownSyndromeSupport({ setCurrentArticle }: DownSyndromeSupportProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Comprehensive, early, and ongoing support enables individuals with Down syndrome to reach their full potential.<sup>[32]</sup> Early intervention services (birth to age 3) are critical for motor, communication, and cognitive development.
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758205308106-5760d0227cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcGVkaWF0cmljJTIwd2VsbG5lc3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3Njc0MDg2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healthcare and wellness - supporting individuals with Down syndrome"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-6">
          <h3 className="font-bold text-[#166534] mb-4 text-lg">Therapeutic Services</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li><strong>Physical Therapy:</strong> For motor development and core strength.</li>
            <li><strong>Occupational Therapy:</strong> For daily living and fine motor skills.</li>
            <li><strong>Speech-Language Therapy:</strong> For communication and feeding support.</li>
            <li><strong>Behavioral Support:</strong> Using positive reinforcement strategies.</li>
          </ul>
        </div>
        <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg p-6">
          <h3 className="font-bold text-[#075985] mb-4 text-lg">Educational Support</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Inclusive education in mainstream classrooms.</li>
            <li>Individualized Education Programs (IEPs).</li>
            <li>Visual learning strategies and assistive technology.</li>
            <li>Transition planning for post-secondary life.<sup>[34]</sup></li>
          </ul>
        </div>
      </div>

      <p className="mb-4">
        Healthcare should follow Down syndrome-specific guidelines, including coordination across specialties and accessible communication to ensure the individual's dignity and autonomy.<sup>[37]</sup>
      </p>
    </div>
  );
}
