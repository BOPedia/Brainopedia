import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface BipolarSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function BipolarSymptoms({ setCurrentArticle }: BipolarSymptomsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Bipolar disorder involves cycles between different mood states, primarily mania (or hypomania) and depression.<sup>[9]</sup> These cycles can vary in length and intensity depending on the individual and the type of bipolar disorder.
          </p>
          <p className="mb-4 text-sm italic">
            "Viewing bipolar as a neurotype acknowledges natural cycles of energy and creativity that can be understood and worked with strategically."<sup>[14]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1549185545-f5b8a1fc481a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2R1Y3Rpdml0eSUyMGFydCUyMGV4cHJlc3Npb258ZW58MXx8fHwxNzY3NDA3NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Creative expression and productivity - characteristics of bipolar"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="bg-[#fff7ed] border border-[#fed7aa] rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-[#9a3412] mb-4 text-xl flex items-center">
            <span className="mr-2">⚡</span> Manic/Hypomanic State
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Elevated or irritable mood</li>
            <li>Increased energy and activity</li>
            <li>Decreased need for sleep</li>
            <li>Racing thoughts and rapid speech</li>
            <li>Inflated self-esteem or grandiosity</li>
            <li>Impulsive or risky behaviors<sup>[10]</sup></li>
          </ul>
        </div>
        <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-[#075985] mb-4 text-xl flex items-center">
            <span className="mr-2">🌙</span> Depressive State
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Persistent sad, empty, or hopeless mood</li>
            <li>Loss of interest or pleasure</li>
            <li>Fatigue and low energy</li>
            <li>Sleep disturbances (insomnia or oversleeping)</li>
            <li>Difficulty concentrating or making decisions</li>
            <li>Thoughts of death or suicide<sup>[12]</sup></li>
          </ul>
        </div>
      </div>

      <div className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
        <h3 className="font-bold text-[#0c264d] mb-4 text-xl">Neurodivergent Strengths</h3>
        <p className="text-sm mb-4">While managing the challenges, many people with bipolar disorder exhibit:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          <li>• Periods of exceptional creative output</li>
          <li>• Innovative and "outside-the-box" thinking</li>
          <li>• Deep emotional empathy and passion</li>
          <li>• Heightened sensitivity to surroundings</li>
          <li>• Unique perspectives on complex problems</li>
          <li>• Remarkable resilience and self-awareness</li>
        </ul>
      </div>
    </div>
  );
}
