import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface BipolarLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function BipolarLiving({ setCurrentArticle }: BipolarLivingProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Bipolar Disorder</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Living with bipolar disorder is about learning to surf the waves of one's own neurobiology. It is a lifelong neurotype that individuals learn to work with over time.<sup>[42]</sup>
          </p>
          <p className="mb-4">
            With self-understanding and the right support, people with bipolar disorder thrive in careers, lead healthy relationships, and contribute unique creative insights to society.<sup>[44]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1652772486279-b83a75cd8143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29kJTIwZW5lcmd5JTIwZW1vdGlvbnMlMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY3NDA3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Living with bipolar disorder - managing energy cycles"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm my-8">
        <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Keys to Thriving</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1 text-[#0c264d]">Radical Self-Awareness</h4>
            <p className="text-xs text-gray-600">Learning the "early warning signs" of mood shifts to take proactive action.<sup>[46]</sup></p>
          </div>
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1 text-[#0c264d]">Creative Integration</h4>
            <p className="text-xs text-gray-600">Leveraging high-energy periods for productive work while protecting rest.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1 text-[#0c264d]">Stable Foundations</h4>
            <p className="text-xs text-gray-600">Prioritizing the "non-negotiables" like sleep, hydration, and routine.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded bg-gray-50">
            <h4 className="font-semibold mb-1 text-[#0c264d]">Forgiveness & Acceptance</h4>
            <p className="text-xs text-gray-600">Understanding that mood shifts are biological, not personal failings.</p>
          </div>
        </div>
      </div>

      <p className="mb-4">
        Resilience is a hallmark of the bipolar experience. Navigating the intense emotional landscapes of this neurotype often fosters deep empathy, passion, and a profound understanding of the human condition.<sup>[45]</sup>
      </p>
    </div>
  );
}
