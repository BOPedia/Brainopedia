import React from 'react';
import { Clock, Eye, Target, Star, MessageSquare } from 'lucide-react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

interface ChildDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function ChildDiagnosis({ setCurrentArticle }: ChildDiagnosisProps) {
  return (
    <div className="space-y-6 text-[#0c264d] font-spartan">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <ImageWithFallback 
          src="/images/autism/autism-diagnosis-DiagProctab-checkmark-gold.webp" 
          alt="Diagnostic Process Graphic with gold infinity and clipboard"
          className="w-36 h-auto float-right ml-6 mb-4 rounded-md border border-gray-300 shadow-sm"
        />
        <h2 className="font-bold mb-4 text-2xl">Pediatric Diagnostic Process</h2>
        <p className="mb-6">
          Diagnosing autism in children relies heavily on observational play, assessing early developmental milestones, and gathering behavioral history from parents and caregivers. Early diagnosis enables earlier access to support and services, which can significantly impact outcomes.
        </p>
      </div>

      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-6 text-lg">The Three-Stage Diagnostic Process</h3>
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-stretch mb-6">
          <div className="flex-1 relative">
            <div className="bg-[#e0f2fe] border-2 border-[#0A9DC4] rounded-lg p-4 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0A9DC4] text-white flex items-center justify-center font-bold text-lg shrink-0">1</div>
                <div className="font-bold text-[#0c264d]">Initial Screening</div>
              </div>
              <div className="text-sm space-y-1">
                <p>• General screening at 9, 18, 24 or 30 months<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Zwaigenbaum et al. (2015)">1</sup></p>
                <p>• Autism-specific screening at 18 and 24 months</p>
                <p>• M-CHAT-R/F and parent questionnaires</p>
              </div>
              <div className="mt-3 bg-[#0A9DC4]/10 rounded px-2 py-1 text-xs text-[#0c264d] text-center">
                <Clock className="inline w-3 h-3 mr-1" /> Brief (10-20 min)
              </div>
            </div>
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#0A9DC4] text-2xl font-bold">&rarr;</div>
          </div>

          <div className="flex-1 relative">
            <div className="bg-[#fef3c7] border-2 border-[#ffd166] rounded-lg p-4 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center font-bold text-lg shrink-0">2</div>
                <div className="font-bold text-[#0c264d]">Developmental-Behavioral</div>
              </div>
              <div className="text-sm space-y-1">
                <p>• Detailed parent interview about milestones</p>
                <p>• Direct observation in various settings</p>
                <p>• Standardized assessment tools</p>
              </div>
              <div className="mt-3 bg-[#ffd166]/20 rounded px-2 py-1 text-xs text-[#0c264d] text-center">
                <Clock className="inline w-3 h-3 mr-1" /> Several hours across visits
              </div>
            </div>
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#0A9DC4] text-2xl font-bold">&rarr;</div>
          </div>
          
          <div className="flex-1">
            <div className="bg-[#d1fae5] border-2 border-[#10b981] rounded-lg p-4 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-lg shrink-0">3</div>
                <div className="font-bold text-[#0c264d]">Comprehensive Evaluation</div>
              </div>
              <div className="text-sm space-y-1">
                <p>&bull; Multidisciplinary team approach</p>
                <p>&bull; Multiple settings (clinic, school, home)</p>
                <p>&bull; Collateral info from parents, teachers</p>
              </div>
              <div className="mt-3 bg-[#10b981]/10 rounded px-2 py-1 text-xs text-[#0c264d] text-center">
                <Clock className="inline w-3 h-3 mr-1" /> Multi-session, weeks to months
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Gold Standard Pediatric Instruments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border-2 border-[#0A9DC4] rounded-lg overflow-hidden">
            <div className="bg-[#0A9DC4] text-white px-4 py-3 text-center">
              <div className="font-bold text-lg">ADOS-2</div>
              <div className="text-xs opacity-90">Autism Diagnostic Observation Schedule</div>
            </div>
            <div className="p-4 text-sm space-y-3">
              <div className="flex items-start gap-2">
                <Eye className="w-4 h-4 text-[#0A9DC4] mt-0.5 shrink-0" />
                <div><strong>Type:</strong> Direct observation</div>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-[#0A9DC4] mt-0.5 shrink-0" />
                <div><strong>Method:</strong> Semi-structured play and interaction tasks</div>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#0A9DC4] mt-0.5 shrink-0" />
                <div><strong>Note:</strong> Most widely used observational assessment<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Lord et al. (2012)">2</sup></div>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#ffd166] rounded-lg overflow-hidden">
            <div className="bg-[#ffd166] text-[#0c264d] px-4 py-3 text-center">
              <div className="font-bold text-lg">ADI-R</div>
              <div className="text-xs opacity-80">Autism Diagnostic Interview-Revised</div>
            </div>
            <div className="p-4 text-sm space-y-3">
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-[#ffd166] mt-0.5 shrink-0" />
                <div><strong>Type:</strong> Parent or caregiver interview</div>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-[#ffd166] mt-0.5 shrink-0" />
                <div><strong>Method:</strong> In-depth questions about behavior</div>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#ffd166] mt-0.5 shrink-0" />
                <div><strong>Note:</strong> Comprehensive developmental history</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Screening Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-[#f0f9ff] rounded-lg p-4 border border-[#0A9DC4]/30">
            <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A9DC4] inline-block"></span> CARS-2
            </div>
            <div className="text-xs text-[#0A9DC4] mb-2">Childhood Autism Rating Scale</div>
            <div className="text-sm">Brief rating scale based on observation covering imitation, emotional response, and object use.</div>
          </div>

          <div className="bg-[#f0f9ff] rounded-lg p-4 border border-[#0A9DC4]/30">
            <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A9DC4] inline-block"></span> M-CHAT-R/F
            </div>
            <div className="text-xs text-[#0A9DC4] mb-2">Modified Checklist for Autism in Toddlers</div>
            <div className="text-sm">Free screening tool for toddlers (16-30 months). Parent questionnaire with follow-up interview.</div>
          </div>
        </div>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="clear-both mt-16 font-spartan">
        <h3 className="font-bold mb-5 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Zwaigenbaum, L., et al. (2015). "Early identification and interventions for autism spectrum disorder." <i>Pediatrics</i>. https://doi.org/10.1542/peds.2014-3667C</p>
            <p>2. Lord, C., et al. (2012). <i>Autism Diagnostic Observation Schedule, Second Edition (ADOS-2)</i>. Western Psychological Services. https://www.wpspublish.com/ados-2-autism-diagnostic-observation-schedule-second-edition</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). https://doi.org/10.1176/appi.books.9780890425787</p>
          </div>
        </div>
      </div>
    </div>
  );
}