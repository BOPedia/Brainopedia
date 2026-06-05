import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface CTEOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function CTEOverview({ setCurrentArticle }: CTEOverviewProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">CTE Overview</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            <strong>Chronic Traumatic Encephalopathy (CTE)</strong> is a progressive neurodegenerative 
            disease found in people with a history of repetitive head impacts.<sup>[1]</sup> It is characterized by the buildup of an abnormal protein called tau in the brain.<sup>[3]</sup> This tau protein forms clumps that slowly spread throughout the brain, killing brain cells.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            CTE is different from other brain injuries because it is caused by repeated trauma over months 
            or years, rather than a single incident.<sup>[5]</sup> Currently, CTE can only be definitively diagnosed after 
            death through brain tissue analysis.<sup>[6]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1742410699412-986830ab6f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHByb3RlaW4lMjBuZXVyb2RlZ2VuZXJhdGl2ZSUyMGRpc2Vhc2V8ZW58MXx8fHwxNzY3NDEwNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Brain protein accumulation in neurodegenerative disease"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <p className="mb-4">
        However, researchers are working to develop methods for diagnosing 
        CTE in living individuals.<sup>[7]</sup> The disease is progressive, meaning symptoms worsen over time, and there is 
        currently no cure.<sup>[8]</sup> CTE was first described in the 1920s as "punch drunk syndrome" in boxers.<sup>[9]</sup>
      </p>
      
      <p className="mb-4">
        In 2002, Dr. Bennet Omalu discovered CTE in former NFL player Mike Webster, bringing widespread attention to the 
        condition in American football and other contact sports.<sup>[10]</sup> Having a history of head impacts does not mean 
        someone will definitely develop CTE—the relationship between head trauma and CTE is still being researched.<sup>[11]</sup>
      </p>

      <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-4 my-6">
        <h3 className="font-bold text-[#0c264d] mb-2">Key Fact</h3>
        <p className="text-sm">CTE is not caused by a single concussion, but by the cumulative effect of hundreds or thousands of "subconcussive" hits that don't even cause symptoms at the time.</p>
      </div>
    </div>
  );
}
