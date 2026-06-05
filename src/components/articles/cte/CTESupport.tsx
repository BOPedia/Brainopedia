import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface CTESupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function CTESupport({ setCurrentArticle }: CTESupportProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management for CTE</h2>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <p className="mb-4">
            While there is currently no cure for CTE, individuals with a history of repetitive head trauma and concerning symptoms 
            can benefit from comprehensive support.<sup>[37]</sup> Medical management includes regular monitoring by healthcare providers and treatment of specific symptoms.
          </p>
        </div>
        <div className="md:w-1/3">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1766299892683-d50398e31823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VwcG9ydCUyMHRyZWF0bWVudCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY3NDEwNjIxfDA"
            alt="Medical support and healthcare management for CTE"
            className="w-full h-auto rounded-md border border-gray-300 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-lg p-6">
          <h3 className="font-bold text-[#166534] mb-4 text-lg">Therapeutic Interventions</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Cognitive rehabilitation therapy</li>
            <li>Physical therapy for movement issues</li>
            <li>Speech therapy for communication</li>
            <li>Mental health counseling</li>
            <li>Sleep management</li>
          </ul>
        </div>
        <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg p-6">
          <h3 className="font-bold text-[#075985] mb-4 text-lg">Prevention & Safety</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Return-to-play protocols after concussion</li>
            <li>Safe tackling techniques in sports</li>
            <li>Proper helmet fitting</li>
            <li>Limiting contact in practice</li>
            <li>Immediate removal after suspected injury</li>
          </ul>
        </div>
      </div>

      <p className="mb-4">
        Active research areas include developing treatments targeting tau 
        protein, creating accurate diagnostic tools for living patients, and identifying preventive interventions.<sup>[43]</sup>
      </p>
    </div>
  );
}
