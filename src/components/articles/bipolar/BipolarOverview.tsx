import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface BipolarOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function BipolarOverview({ setCurrentArticle }: BipolarOverviewProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Bipolar Disorder Overview</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            <strong>Bipolar disorder</strong> is a neurological condition characterized by significant shifts 
            in mood, energy, and activity levels.<sup>[1]</sup> Increasingly viewed through a neurodivergent lens, it represents a distinct pattern of energy cycles, creativity, and emotional intensity rooted 
            in brain chemistry and neural processing differences.<sup>[2]</sup>
          </p>
          <p className="mb-4">
            Bipolar disorder affects approximately 2.8% of adults in the United States and involves 
            alterations in neurotransmitter systems, particularly dopamine, serotonin, and norepinephrine.<sup>[3]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1652772486279-b83a75cd8143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29kJTIwZW5lcmd5JTIwZW1vdGlvbnMlMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY3NDA3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mood and energy cycles - understanding bipolar disorder"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="bg-[#f0f9ff] border-l-4 border-[#2abcd4] p-4 my-6">
        <h3 className="font-bold text-[#0c264d] mb-2">Neurodivergent Perspective</h3>
        <p className="text-sm">The neurodivergent perspective recognizes bipolar disorder not just as an illness, but as a neurotype with both challenges and unique gifts, such as periods of exceptional creativity and productivity.<sup>[5][6]</sup></p>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-[#0c264d] text-xl">Major Types of Bipolar Disorder</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Bipolar I:</strong> Defined by manic episodes that last at least 7 days, or by manic symptoms that are so severe that the person needs immediate hospital care. Usually, depressive episodes occur as well.<sup>[7]</sup></li>
          <li><strong>Bipolar II:</strong> Defined by a pattern of depressive episodes and hypomanic episodes, but not the full-blown manic episodes that are typical of Bipolar I.</li>
          <li><strong>Cyclothymic Disorder:</strong> Defined by periods of hypomanic symptoms as well as periods of depressive symptoms lasting for at least 2 years (1 year in children and adolescents).</li>
        </ul>
      </div>
    </div>
  );
}
