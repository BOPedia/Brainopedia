import { Clock, Eye, Target, Star, MessageSquare, Dna, Microscope, Zap, Ear, Droplets } from 'lucide-react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface DiagnosticProcessProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function DiagnosticProcess({ setCurrentArticle }: DiagnosticProcessProps) {
  return (

   <div className="space-y-6 text-[#0c264d] font-spartan">
      {/* Introduction with Image Wrap */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">

      <ImageWithFallback 
        src="/images/autism/autism-diagnosis-DiagProctab-checkmark-gold.png" 
        alt="Diagnostic Process Graphic with gold infinity and clipboard and"
        className="w-36 h-auto float-right ml-6 mb-4 rounded-md border border-gray-300 shadow-sm"
          />
          
      <h2 className="font-bold mb-4 text-2xl">Diagnostic Process & Tools</h2>
         <p className="mb-6">
          Diagnosing autism involves comprehensive evaluation of developmental history, behavior patterns, and 
          current functioning.<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="American Psychiatric Association (2022)">1</sup> Early diagnosis enables earlier access to support and services, which 
          can significantly impact outcomes.
          </p>
       
   </div>
   
         {/* ===== DIAGNOSTIC FRAMEWORKS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Diagnostic Frameworks (The "Rulebooks")</h3>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">
          Before administering specific tests, clinicians use standardized diagnostic manuals to determine what constitutes autism. These are not "tests" you take, but rather the criteria that the test results are compared against.
        </p>
        
        <div className="space-y-4">
          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">DSM-5-TR</div>
            <p className="text-sm text-gray-700">
              The primary manual used in the United States. To meet criteria, an individual must show persistent deficits in <strong>social communication</strong> and exhibit <strong>restricted/repetitive behaviors</strong> that began in early development and cause clinically significant impairment<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="American Psychiatric Association (2022)">1</sup>.
            </p>
          </div>

          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">ICD-11</div>
            <p className="text-sm text-gray-700">
              The World Health Organization's manual, used globally. It closely aligns with the DSM-5 but places a slightly higher emphasis on the impact of co-occurring intellectual development disorders and language impairment.
            </p>
          </div>
        </div>
      </div>

      {/* ===== 3-STAGE PROCESS INFOGRAPHIC ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-6 text-lg">The Three-Stage Diagnostic Process</h3>
        
{/* Visual Flowchart */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-stretch mb-6">
          
          {/* Stage 1: Initial Screening */}
          <div className="flex-1 relative">
            <div className="bg-[#e0f2fe] border-2 border-[#0A9DC4] rounded-lg p-4 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0A9DC4] text-white flex items-center justify-center font-bold text-lg shrink-0">1</div>
                <div className="font-bold text-[#0c264d]">Initial Screening</div>
              </div>
              <div className="text-sm space-y-1">
                <p>• General screening at 9, 18, 24 or 30 months<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Zwaigenbaum et al. (2015)">2</sup></p>
                <p>• Autism-specific screening at 18 and 24 months</p>
                <p>• M-CHAT-R/F and parent questionnaires</p>
              </div>
              <div className="mt-3 bg-[#0A9DC4]/10 rounded px-2 py-1 text-xs text-[#0c264d] text-center">
                <Clock className="inline w-3 h-3 mr-1" /> Brief (10-20 min)
              </div>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#0A9DC4] text-2xl font-bold">&rarr;</div>
            {/* Arrow for mobile */}
            <div className="md:hidden flex justify-center text-[#0A9DC4] text-2xl font-bold py-1">&darr;</div>
          </div>

          {/* Stage 2: Developmental-Behavioral Evaluation */}
          <div className="flex-1 relative">
            <div className="bg-[#fef3c7] border-2 border-[#ffd166] rounded-lg p-4 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#ffd166] text-[#0c264d] flex items-center justify-center font-bold text-lg shrink-0">2</div>
                <div className="font-bold text-[#0c264d]">Developmental-Behavioral Evaluation</div>
              </div>
              <div className="text-sm space-y-1">
                <p>• Detailed parent interview about milestones</p>
                <p>• Direct observation in various settings</p>
                <p>• Standardized assessment tools</p>
                <p>• Medical evaluation for co-occurring conditions</p>
              </div>
              <div className="mt-3 bg-[#ffd166]/20 rounded px-2 py-1 text-xs text-[#0c264d] text-center">
                <Clock className="inline w-3 h-3 mr-1" /> Several hours across visits
              </div>
            </div>
            {/* Arrow for desktop */}
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#0A9DC4] text-2xl font-bold">&rarr;</div>
            {/* Arrow for mobile */}
            <div className="md:hidden flex justify-center text-[#0A9DC4] text-2xl font-bold py-1">&darr;</div>
          </div>
          
          {/* Stage 3 */}
          <div className="flex-1">
            <div className="bg-[#d1fae5] border-2 border-[#10b981] rounded-lg p-4 h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#10b981] text-white flex items-center justify-center font-bold text-lg shrink-0">13</div>
                <div className="font-bold text-[#0c264d]">Comprehensive Diagnostic Evaluation</div>
              </div>
              <div className="text-sm space-y-1">
                <p>&bull; Multidisciplinary team approach</p>
                <p>&bull; Multiple settings (clinic, school, home)</p>
                <p>&bull; Collateral info from parents, teachers</p>
                <p>&bull; Longitudinal data over time</p>
              </div>
              <div className="mt-3 bg-[#10b981]/10 rounded px-2 py-1 text-xs text-[#0c264d] text-center">
                <Clock className="inline w-3 h-3 mr-1" /> Multi-session, weeks to months
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== GOLD STANDARD INSTRUMENTS - SIDE BY SIDE ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Gold Standard Diagnostic Instruments</h3>
        <p className="text-sm mb-4">
          These tools are considered the "gold standard" for autism diagnosis:<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Lord et al. (2012)">3</sup>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* ADOS-2 Card */}
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
                <Clock className="w-4 h-4 text-[#0A9DC4] mt-0.5 shrink-0" />
                <div><strong>Duration:</strong> 40-60 minutes</div>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#0A9DC4] mt-0.5 shrink-0" />
                <div><strong>Note:</strong> Most widely used observational assessment<sup className="text-green-700 font-bold ml-0.5 cursor-help" title="Lord et al. (2012)">3</sup></div>
              </div>
            </div>
          </div>

          {/* ADI-R Card */}
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
                <div><strong>Method:</strong> In-depth questions about social, communication, and repetitive behaviors</div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#ffd166] mt-0.5 shrink-0" />
                <div><strong>Duration:</strong> 1.5-3 hours</div>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-[#ffd166] mt-0.5 shrink-0" />
                <div><strong>Note:</strong> Comprehensive developmental history</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f9ff] rounded-lg p-3 text-center text-sm text-[#0c264d]">
          <strong>Best Practice:</strong> ADOS-2 + ADI-R + Clinical Judgment = Most accurate diagnosis
        </div>
      </div>

      {/* ===== OTHER DIAGNOSTIC & SCREENING TOOLS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Other Diagnostic & Screening Tools</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-[#f0f9ff] rounded-lg p-4 border border-[#0A9DC4]/30">
            <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A9DC4] inline-block"></span>
              CARS-2
            </div>
            <div className="text-xs text-[#0A9DC4] mb-2">Childhood Autism Rating Scale</div>
            <div className="text-sm">
              Brief rating scale based on observation. Rates 15 areas including relating to people, imitation, 
              emotional response, body or object use, and more.
            </div>
          </div>

          <div className="bg-[#f0f9ff] rounded-lg p-4 border border-[#0A9DC4]/30">
            <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A9DC4] inline-block"></span>
              SCQ
            </div>
            <div className="text-xs text-[#0A9DC4] mb-2">Social Communication Questionnaire</div>
            <div className="text-sm">
              Parent questionnaire screening tool. 40 yes or no questions covering social interaction, communication, 
              and repetitive behaviors.
            </div>
          </div>

          <div className="bg-[#f0f9ff] rounded-lg p-4 border border-[#0A9DC4]/30">
            <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A9DC4] inline-block"></span>
              M-CHAT-R/F
            </div>
            <div className="text-xs text-[#0A9DC4] mb-2">Modified Checklist for Autism in Toddlers</div>
            <div className="text-sm">
              Free screening tool for toddlers (16-30 months). Parent questionnaire with follow-up interview. 
              Widely used in pediatric practices.
            </div>
          </div>

          <div className="bg-[#f0f9ff] rounded-lg p-4 border border-[#0A9DC4]/30">
            <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0A9DC4] inline-block"></span>
              Developmental Assessments
            </div>
            <div className="text-xs text-[#0A9DC4] mb-2">Cognitive and Adaptive Measures</div>
            <div className="text-sm">
              Measure cognitive abilities, adaptive functioning, language skills. Examples: Bayley Scales, 
              Mullen Scales, Vineland Adaptive Behavior Scales.
            </div>
          </div>
        </div>
      </div>

      {/* ===== MEDICAL & GENETIC TESTING VISUAL GRID ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-2 text-lg">Medical and Genetic Testing</h3>
        <p className="text-sm mb-4">
          While not required for diagnosis, testing may be recommended:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-[#e0f2fe] to-white rounded-lg p-4 border border-[#0A9DC4]/20">
            <Dna className="w-6 h-6 text-[#0A9DC4] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">Genetic Testing</div>
            <div className="text-sm">
              Chromosomal microarray to identify genetic causes. Recommended for all with ASD diagnosis. 
              Identifies variants in ~10-20% of cases.
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#fef3c7] to-white rounded-lg p-4 border border-[#ffd166]/30">
            <Microscope className="w-6 h-6 text-[#d97706] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">Metabolic Screening</div>
            <div className="text-sm">
              If specific clinical features suggest metabolic disorder (regression, seizures, dysmorphic features).
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#d1fae5] to-white rounded-lg p-4 border border-[#10b981]/20">
            <Zap className="w-6 h-6 text-[#10b981] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">EEG</div>
            <div className="text-sm">
              Electroencephalogram if seizures suspected or developmental regression occurred.
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#fce7f3] to-white rounded-lg p-4 border border-[#f472b6]/20">
            <Ear className="w-6 h-6 text-[#f472b6] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">Hearing Test</div>
            <div className="text-sm">
              Essential to rule out hearing loss as cause of language delay or reduced response to name.
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#ede9fe] to-white rounded-lg p-4 border border-[#8b5cf6]/20">
            <Droplets className="w-6 h-6 text-[#8b5cf6] mb-2" />
            <div className="font-bold text-[#0c264d] mb-1">Lead Screening</div>
            <div className="text-sm">
              If pica (eating non-food items) or environmental lead exposure is present.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded">
        <p className="text-sm text-[#0c264d]">
          <strong>Bottom Line:</strong> Autism diagnosis is based on behavioral observation and developmental 
          history, not blood tests or brain scans. The gold standard is ADOS-2 + ADI-R + clinical judgment by 
          experienced professionals. Medical testing helps rule out other conditions and identify co-occurring issues.
        </p>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). https://doi.org/10.1176/appi.books.9780890425787</li>
            <li>Zwaigenbaum, L., Bauman, M. L., Choueiri, R., et al. (2015). Early identification and interventions for autism spectrum disorder: Executive summary. <i>Pediatrics</i>, 136(Supplement 1), S1-S9.</li>
            <li>Lord, C., Rutter, M., DiLavore, P. C., Risi, S., Gotham, K., & Bishop, S. (2012). <i>Autism diagnostic observation schedule, second edition (ADOS-2)</i>. Western Psychological Services.</li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>World Health Organization. (2019). <i>International statistical classification of diseases and related health problems</i> (11th ed.). https://icd.who.int/</li>
            <li>Lord, C., Elsabbagh, M., Baird, G., & Veenstra-Vanderweele, J. (2018). Autism spectrum disorder. <i>The Lancet</i>, 392(10146), 508-520.</li>
            <li>Lai, M. C., Lombardo, M. V., & Baron-Cohen, S. (2014). Autism. <i>The Lancet</i>, 383(9920), 896-910.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}