import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyspraxiaLiving({ setCurrentArticle }: DyspraxiaLivingProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dyspraxia</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Individuals with dyspraxia lead fulfilling and successful lives across many fields. While the underlying neurological profile is lifelong, many adults find their "clumsiness" becomes more manageable as they refine their environment and strategies.<sup>[35][36]</sup>
          </p>
          <p className="mb-4 text-sm italic">
            "Resilience and creative problem-solving are often hallmarks of the dyspraxic experience."
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1760530675678-4221135a2bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG1vdG9yJTIwc2tpbGxzJTIwY29vcmRpbmF0aW9ufGVufDF8fHx8MTc2NzQwNzE3OHww"
            alt="Living with dyspraxia - developing coordination skills"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm my-8">
        <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Keys to Thriving</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1 text-[#0c264d]">Embrace Your Strengths</h4>
            <p className="text-xs text-gray-600">Focus on areas like verbal expression, creative arts, and strategic thinking where dyspraxic individuals often excel.<sup>[37]</sup></p>
          </div>
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1 text-[#0c264d]">Environment Engineering</h4>
            <p className="text-xs text-gray-600">Organize your home and workspace to minimize obstacles and simplify repetitive physical tasks.<sup>[39]</sup></p>
          </div>
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1 text-[#0c264d]">Self-Advocacy</h4>
            <p className="text-xs text-gray-600">Don't be afraid to ask for accommodations at school or work—it's about equal access, not special treatment.<sup>[38]</sup></p>
          </div>
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1 text-[#0c264d]">Movement for Joy</h4>
            <p className="text-xs text-gray-600">Find physical activities that feel good, like swimming, walking, or tai chi, without the pressure of complex coordination.</p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        Living well with dyspraxia is about recognizing that your brain simply organizes action differently. By understanding your motor profile and building a supportive toolkit, you can navigate a world designed for typical coordination with confidence and success.<sup>[39]</sup>
      </p>
    </div>
  );
}
