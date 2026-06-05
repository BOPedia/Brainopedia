import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface CTESymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function CTESymptoms({ setCurrentArticle }: CTESymptomsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">CTE Symptoms & Characteristics</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            CTE symptoms typically appear years or even decades after the last brain trauma.<sup>[12]</sup> In CTE, tau proteins 
            become abnormal and accumulate in the brain particularly around small blood vessels at the depths of sulci, 
            disrupting communication between brain cells which die over time with pathology spreading progressively and 
            brain tissue shrinking.<sup>[13][14]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1740908900846-271f4f021b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBsb3NzJTIwY29nbml0aXZlJTIwZGVjbGluZSUyMGRlbWVudGlhfGVufDF8fHx8MTc2NzQxMDYxOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cognitive decline and memory loss in CTE"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Early Stage Symptoms</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Short-term memory problems</li>
            <li>Difficulty with planning and organization (executive dysfunction)</li>
            <li>Impulsivity and poor judgment</li>
            <li>Depression and mood changes</li>
            <li>Anxiety and irritability</li>
            <li>Suicidal thoughts<sup>[15]</sup></li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Later Stage Symptoms</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Progressive memory loss</li>
            <li>Confusion and disorientation</li>
            <li>Dementia</li>
            <li>Movement problems similar to Parkinson's disease</li>
            <li>Speech and communication difficulties</li>
            <li>Difficulty swallowing<sup>[16]</sup></li>
          </ul>
        </div>
      </div>

      <p className="mb-4">
        Behavioral and emotional changes include aggression and explosive behavior, paranoia, social isolation, substance abuse, and changes in personality.<sup>[17]</sup> CTE is distinct from post-concussion syndrome, which typically improves with time while CTE is progressive.<sup>[18]</sup>
      </p>
    </div>
  );
}
