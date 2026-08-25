import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DownSyndromeOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DownSyndromeOverview({ setCurrentArticle }: DownSyndromeOverviewProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Down Syndrome Overview</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            <strong>Down syndrome</strong> (also known as Trisomy 21) is a genetic condition caused by the 
            presence of an extra copy of chromosome 21.<sup>[1]</sup> It affects approximately 1 in 700 babies born in the United States, making it the most common chromosomal condition.<sup>[4]</sup>
          </p>
          <p className="mb-4">
            Individuals with Down syndrome have a unique cognitive profile with both strengths and challenges.<sup>[6]</sup> While intellectual disability is typical, the range of cognitive functioning varies widely—from mild to moderate, and occasionally borderline.<sup>[7]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1654540288895-3eefdd293c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbW9zb21lcyUyMGdlbmV0aWNzJTIwRE5BJTIwYmlvbG9neXxlbnwxfHx8fDE3Njc0MDg2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Chromosomes and genetics - understanding Down syndrome"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <p className="mb-4">
        Life expectancy for individuals with Down syndrome has increased dramatically—from 25 years in 1983 to 60+ years today—thanks to improved medical care, early intervention, and societal inclusion.<sup>[9]</sup>
      </p>

      <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-4 my-6">
        <h3 className="font-bold text-[#0c264d] mb-2">Did You Know?</h3>
        <p className="text-sm">Down syndrome is named after John Langdon Down, the British physician who first described the condition in 1866. The genetic cause was discovered nearly a century later in 1959.</p>
      </div>
    </div>
  );
}
