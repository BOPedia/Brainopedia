import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface BipolarCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function BipolarCauses({ setCurrentArticle }: BipolarCausesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Bipolar disorder has a strong biological basis involving alterations in neurotransmitter systems, particularly <strong>dopamine</strong>, <strong>serotonin</strong>, and <strong>norepinephrine</strong>.<sup>[16]</sup>
          </p>
          <p className="mb-4">
            Brain imaging studies show differences in areas responsible for emotion regulation, reward processing, and energy management, including the prefrontal cortex, amygdala, and hippocampus.<sup>[17]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJvdHJhbnNtaXR0ZXJzJTIwZG9wYW1pbmUlMjBzZXJvdG9uaW58ZW58MXx8fHwxNzY3NDA3NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Brain neurotransmitters - neurological basis of bipolar disorder"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-3 text-lg">Genetic Factors</h3>
          <p className="text-sm text-gray-700">
            Bipolar disorder has a strong genetic component. Studies show an increased risk in family members, though the genetics are complex and involve multiple genes rather than a single "bipolar gene."<sup>[20][21]</sup>
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
          <h3 className="font-bold text-[#0c264d] mb-3 text-lg">Environmental Factors</h3>
          <p className="text-sm text-gray-700">
            Stressful life events, trauma, and significant disruptions (like changes in sleep patterns or routine) can trigger or exacerbate episodes in those with a genetic vulnerability.<sup>[22]</sup>
          </p>
        </div>
      </div>

      <p className="mb-4">
        Research into <strong>circadian rhythm disruption</strong> also reveals deep connections between sleep-wake cycles and mood regulation in bipolar disorder. Disruption of these internal clocks can often be a primary driver of mood shifts.<sup>[24]</sup>
      </p>
    </div>
  );
}
