import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface BipolarDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function BipolarDiagnosis({ setCurrentArticle }: BipolarDiagnosisProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
      
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="flex-1">
          <p className="mb-4">
            Bipolar disorder is diagnosed clinically by mental health professionals through detailed clinical interviews and a review of the individual's mood history.<sup>[25]</sup>
          </p>
          <p className="mb-4">
            Diagnosis can sometimes take time—sometimes years—as doctors must observe the pattern of episodes to distinguish it from other conditions like major depression or ADHD.<sup>[32]</sup>
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1620147512372-9e00421556bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaGlhdHJpc3QlMjBtZW50YWwlMjBoZWFsdGglMjBhc3Nlc3NtZW50JTIwdGhlcmFweXxlbnwxfHx8fDE3Njc0MDc2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mental health assessment - diagnosing bipolar disorder"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="space-y-4 mt-8">
        <h3 className="font-bold text-[#0c264d] text-xl">The Diagnostic Process</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
            <h4 className="font-bold text-[#2abcd4] mb-2">Clinical Interview</h4>
            <p className="text-sm">Detailed history of mood episodes, their duration, and impact on life functioning.<sup>[29]</sup></p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
            <h4 className="font-bold text-[#2abcd4] mb-2">Medical Evaluation</h4>
            <p className="text-sm">Blood tests and physical exams to rule out other causes like thyroid issues or substance use.<sup>[30]</sup></p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
            <h4 className="font-bold text-[#2abcd4] mb-2">Mood Tracking</h4>
            <p className="text-sm">Monitoring patterns of energy, sleep, and emotion over several weeks or months.</p>
          </div>
          <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
            <h4 className="font-bold text-[#2abcd4] mb-2">Family History</h4>
            <p className="text-sm">Assessment of genetic risk and family patterns of mood disorders.</p>
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-600 italic">
        The average age of onset is late teens to early adulthood, though it can occur at any age. Early and accurate diagnosis is key to effective long-term management.<sup>[31]</sup>
      </p>
    </div>
  );
}
