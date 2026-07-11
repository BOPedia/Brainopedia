import React from 'react';
import { ClipboardList, MessageSquare, ShieldAlert } from 'lucide-react';

interface AdultDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function AdultDiagnosis({ setCurrentArticle }: AdultDiagnosisProps) {
  return (
    <div className="space-y-6 text-[#0c264d] font-spartan">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="font-bold mb-4 text-2xl">Adult Diagnostic Process</h2>
        <p className="mb-4 leading-relaxed">
          While the fundamental criteria for autism remain the same across the lifespan, the tools and methods used to evaluate adults differ significantly from those used for young children. 
        </p>
        <p className="mb-2 leading-relaxed">
          Adult assessments rely heavily on self-reporting, comprehensive clinical interviews, and identifying compensatory behaviors like "masking" that have been developed over a lifetime of navigating a neurotypical world.
        </p>
      </div>

      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg flex items-center gap-2">
          <ClipboardList className="text-[#2abcd4]" /> Standard Self-Report Measures
        </h3>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Before a formal clinical evaluation, professionals typically use standardized self-report questionnaires to establish a baseline of autistic traits.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4]/20">
            <div className="font-bold text-[#0c264d] mb-1">RAADS-R</div>
            <div className="text-xs text-[#2abcd4] mb-2">Ritvo Autism Asperger Diagnostic Scale</div>
            <p className="text-sm text-gray-700">An 80-item questionnaire developed for adults. It evaluates social relatedness, sensory-motor symptoms, and language, allowing individuals to specify if a trait was present in childhood, is present now, or both.</p>
          </div>
          
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4]/20">
            <div className="font-bold text-[#0c264d] mb-1">AQ</div>
            <div className="text-xs text-[#2abcd4] mb-2">Autism Spectrum Quotient</div>
            <p className="text-sm text-gray-700">A widely used 50-question survey measuring traits across five domains. A shorter 10-question version (AQ-10) is also frequently utilized as a quick initial screener by general practitioners.</p>
          </div>
          
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#2abcd4]/20">
            <div className="font-bold text-[#0c264d] mb-1">CAT-Q</div>
            <div className="text-xs text-[#2abcd4] mb-2">Camouflaging Autistic Traits Questionnaire</div>
            <p className="text-sm text-gray-700">Highly relevant for adults, this tool specifically measures masking, assimilation, and compensation behaviors that often conceal autism on traditional deficit-based assessments.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg flex items-center gap-2">
          <MessageSquare className="text-[#ffd166]" /> Clinical Interviews & Observation
        </h3>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          No single questionnaire is diagnostic on its own. The cornerstone of an adult diagnosis is an in-depth conversation synthesizing self-report data, developmental history, and current daily functioning.
        </p>

        <div className="space-y-4">
          <div className="border-l-2 border-[#ffd166] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">MIGDAS-2</div>
            <p className="text-sm text-gray-700 leading-relaxed">
              The Monteiro Interview Guidelines for Diagnosing the Autism Spectrum acts as a guided clinical conversation focusing on an individual's strengths, unique communication style, and sensory preferences.
            </p>
          </div>

          <div className="border-l-2 border-[#ffd166] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">ADOS-2 (Module 4)</div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Module 4 is explicitly designed for verbally fluent adults. A clinician guides conversations about emotions, relationships, and future plans to observe naturalistic social behaviors.
            </p>
          </div>

          <div className="border-l-2 border-[#ffd166] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">ADI-R (Autism Diagnostic Interview-Revised)</div>
            <p className="text-sm text-gray-700 leading-relaxed">
              While originally a parent interview, this tool is still utilized in adult assessments to gather comprehensive background history if family members or caregivers are available.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-md border-l-4 border-red-400 shadow-sm mb-8">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg flex items-center gap-2">
          <ShieldAlert className="text-red-500" /> Diagnostic Barriers for Adults
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <strong className="text-red-900 block mb-1">High Cost & Insurance</strong>
            <p className="text-sm text-gray-700">Many adult assessments are not covered by standard health insurance plans, and out-of-pocket costs for a full neuropsychological evaluation can range from $1,500 to $4,000+.</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <strong className="text-red-900 block mb-1">Medical Bias & Misdiagnosis</strong>
            <p className="text-sm text-gray-700">Because many clinicians are only trained in pediatric autism, adults (especially women and high-masking individuals) are frequently misdiagnosed with anxiety or personality disorders before their autism is recognized.</p>
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />

      <div className="pt-2">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
    {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Ritvo, R. A., Ritvo, E. R., Guthrie, D., et al. (2011). "The Ritvo Autism Asperger Diagnostic Scale-Revised (RAADS-R)." <i>Journal of Autism and Developmental Disorders</i>, 41(8), 1076-1089.</p>
            <p>2. Hull, L., Mandy, W., Lai, M. C., et al. (2019). "Development and Validation of the Camouflaging Autistic Traits Questionnaire (CAT-Q)." <i>Journal of Autism and Developmental Disorders</i>, 49(3), 819-833.</p>
            <p>3. Baron-Cohen, S., et al. (2001). "The Autism-Spectrum Quotient (AQ)." <i>Journal of Autism and Developmental Disorders</i>, 31(1), 5-17.</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Monteiro, S. A. (2018). <i>MIGDAS-2: Monteiro Interview Guidelines for Diagnosing the Autism Spectrum, Second Edition</i>. Western Psychological Services.</li>
            <li>Fusar-Poli, L., Brondino, N., Politi, P., & Aguglia, E. (2020). "Missed diagnoses and misdiagnoses of adults with autism spectrum disorder." <i>European Archives of Psychiatry and Clinical Neuroscience</i>.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}