import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyspraxiaCauses({ setCurrentArticle }: DyspraxiaCausesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Research suggests that dyspraxia results from differences in how the brain processes information required 
            for movement planning and coordination.<sup>[16]</sup> It is not caused by muscle weakness or low intelligence, but by a <strong>neurological disruption</strong> in motor pathways.
          </p>
          <p className="mb-4">
            Brain imaging has identified differences in areas like the <strong>cerebellum</strong>, <strong>basal ganglia</strong>, and <strong>motor cortex</strong>, which are essential for coordinating smooth movements.<sup>[17]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1714939722610-9169e8883bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG1vdG9yJTIwY29ydGV4JTIwY2VyZWJlbGx1bXxlbnwxfHx8fDE3Njc0MDcxNzl8MA"
            alt="Brain motor cortex and cerebellum - neurological basis of dyspraxia"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
        <h3 className="font-bold text-[#0c264d] mb-4 text-lg text-center">Developmental Factors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-[#2abcd4] mb-2">Genetic Influence</h4>
            <p className="text-sm text-gray-700">Dyspraxia tends to run in families, suggesting a strong genetic component, although no specific "dyspraxia gene" has been isolated yet.<sup>[22]</sup></p>
          </div>
          <div>
            <h4 className="font-semibold text-[#2abcd4] mb-2">Neural Maturation</h4>
            <p className="text-sm text-gray-700">The condition may stem from disruptions in neural pathways during early brain development, affecting how motor control systems mature.<sup>[21]</sup></p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4 italic text-center">
        The extra effort required for motor coordination means the dyspraxic brain is often working much harder to perform "automatic" tasks.
      </p>
    </div>
  );
}
