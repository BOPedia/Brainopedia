import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface CTELivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function CTELiving({ setCurrentArticle }: CTELivingProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with CTE</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Living with suspected CTE involves managing progressive cognitive decline, emotional and behavioral changes, and 
            physical symptoms while coping with diagnostic uncertainty.<sup>[46]</sup>
          </p>
          <p className="mb-4">
            CTE affects the whole family, with caregivers often needing significant support and resources.<sup>[47]</sup> 
            The growing awareness of CTE has led to major changes in how sports organizations and medical professionals approach head injuries.
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1764006145420-df3006edf060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjYXJlZ2l2ZXIlMjBzdXBwb3J0JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzQxMDYyMXww"
            alt="Family support and caregiving for individuals with CTE"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm my-8">
        <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Strategies for Living Well</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold">Support Systems</h4>
            <p className="text-sm">Building strong support networks including family, specialized doctors, and mental health professionals.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Lifestyle Choices</h4>
            <p className="text-sm">Maintaining a healthy diet, consistent sleep, and regular low-impact exercise to support brain health.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Self-Awareness</h4>
            <p className="text-sm">Learning to recognize mood shifts or memory lapses early and having plans in place for difficult days.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Advocacy</h4>
            <p className="text-sm">Participating in research or advocacy to help prevent future cases and advance treatment options.</p>
          </div>
        </div>
      </div>

      <p className="mb-4">
        Topics related to living with CTE include navigating mood cycles, Leveraging creative and productive 
        periods (when possible), and balancing stability needs with self-acceptance.<sup>[50]</sup>
      </p>
    </div>
  );
}
