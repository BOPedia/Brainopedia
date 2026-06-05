import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyspraxiaOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyspraxiaOverview({ setCurrentArticle }: DyspraxiaOverviewProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dyspraxia Overview</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            <strong>Dyspraxia</strong>, also known as <strong>Developmental Coordination Disorder (DCD)</strong>, 
            is a neurological condition that affects physical coordination and movement.<sup>[1]</sup> It affects approximately 5-6% of children, often appearing as "clumsiness" or difficulty with tasks requiring motor planning.<sup>[3]</sup>
          </p>
          <p className="mb-4">
            The condition involves difficulties with <strong>motor planning</strong>—the brain's ability to plan and execute coordinated movements.<sup>[4]</sup> This persists throughout life, though individuals develop unique coping strategies over time.<sup>[7]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1760530675678-4221135a2bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG1vdG9yJTIwc2tpbGxzJTIwY29vcmRpbmF0aW9ufGVufDF8fHx8MTc2NzQwNzE3OHww"
            alt="Child developing motor skills and coordination"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-4 my-6">
        <h3 className="font-bold text-[#0c264d] mb-2">Did You Know?</h3>
        <p className="text-sm text-gray-700">The term "dyspraxia" comes from the Greek "dys" (difficulty) and "praxis" (action). It describes a fundamental difference in how the brain organizes physical actions.<sup>[6]</sup></p>
      </div>

      <p className="text-gray-700">
        Dyspraxia often co-occurs with other neurodivergent conditions such as ADHD, dyslexia, and autism, highlighting the interconnected nature of neurological development.<sup>[8]</sup>
      </p>
    </div>
  );
}
