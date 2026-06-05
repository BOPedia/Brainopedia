import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface CTEDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function CTEDiagnosis({ setCurrentArticle }: CTEDiagnosisProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing CTE</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4 text-red-700 font-semibold italic">
            Currently, CTE can only be definitively diagnosed after death through neuropathological examination of brain tissue.<sup>[30]</sup>
          </p>
          <p className="mb-4">
            This involves microscopic examination of brain tissue and identification of characteristic tau protein deposits in a unique 
            pattern around small blood vessels at the depths of sulci.<sup>[31]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1741259712613-86d5b919d446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHRpc3N1ZSUyMG1pY3Jvc2NvcGUlMjByZXNlYXJjaCUyMHBhdGhvbG9neXxlbnwxfHx8fDE3Njc0MTA2MjB8MA"
            alt="Brain tissue pathology research and microscopic examination"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-[#0c264d] text-xl">Future Diagnostic Tools</h3>
        <p>Scientists are actively working on methods to diagnose CTE in living people, including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Specialized PET scans:</strong> May detect tau protein in a living brain.<sup>[32]</sup></li>
          <li><strong>Blood tests:</strong> Researching biomarkers that might indicate active neurodegeneration.<sup>[33]</sup></li>
          <li><strong>Advanced MRI:</strong> Looking for structural brain changes and connectivity issues.<sup>[34]</sup></li>
          <li><strong>Neuropsychological testing:</strong> Examining patterns of cognitive changes that suggest CTE rather than other forms of dementia.</li>
        </ul>
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Much of what we know about CTE comes from brain donation programs, such as the Boston University CTE Center and the Concussion Legacy Foundation.<sup>[36]</sup>
      </p>
    </div>
  );
}
