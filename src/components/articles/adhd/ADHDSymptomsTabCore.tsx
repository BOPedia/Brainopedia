import React, { useState } from 'react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { AlertTriangle, Eye, EarOff, ListX, FolderOpen, BrainCog, Search, Sparkles, CalendarX, Hand, ArrowUpFromLine, Mountain, VolumeX, Zap, MessageSquare, MessageCircle, Hourglass, UserMinus, ChevronDown, ChevronUp } from 'lucide-react';

// --- ACCORDION COMPONENT ---
// Placed outside the main export function so it doesn't re-render unnecessarily
const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-md border-l-4 border-[#2abcd4] shadow-sm overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-[#0c264d] font-bold text-lg m-0">{title}</h3>
        {isOpen ? (
          <ChevronUp className="text-[#2abcd4] flex-shrink-0 ml-4" />
        ) : (
          <ChevronDown className="text-[#2abcd4] flex-shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="p-5 pt-0 border-t border-gray-100 mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface TabCoreProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDSymptomsTabCore({ setCurrentArticle }: TabCoreProps) {
  return (
    <div className="space-y-8 w-full">
      {/* Core Symptoms of ADHD Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#f0f9ff] p-6 rounded-lg">
        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-[#0c264d] font-bold text-2xl">Core Symptoms of ADHD</h2>
          
          <p className="leading-relaxed">
            ADHD is characterized by a persistent pattern of inattention, hyperactivity, and impulsivity that 
            interferes with functioning or development. These symptoms must be present before age 12, occur 
            in multiple settings (home, school, work), and significantly impair functioning to meet diagnostic 
            criteria.
          </p>
          <p className="leading-relaxed">
            The Diagnostic and Statistical Manual of Mental Disorders (DSM-5-TR)<sup className="text-green-600 font-bold ml-0.5">1</sup> identifies three presentations 
            of ADHD: predominantly inattentive, predominantly hyperactive-impulsive, and combined presentation. 
            Each presentation has distinct symptom profiles, though individuals may experience symptoms from 
            multiple categories.
          </p>
          
          <div className="bg-[#d6e9ff] border-l-4 border-[#0c264d] p-4 rounded mt-4">
            <p className="text-sm">
              <strong>Important:</strong> A diagnosis requires at least 6 symptoms from either category (or both) 
              for children, and 5 symptoms for adults age 17+<sup className="text-green-600 font-bold ml-0.5">1</sup>, persisting for at least 6 months.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-4 flex justify-center lg:pt-10">
          <ImageWithFallback 
            src="/images/adhd/adhd-core-symptoms-apple.png"
            alt="ADHD Core Symptoms"
            className="w-52 h-auto rounded shadow-sm"
          />
        </div>
      </section>

      {/* Defining ADHD Diagnostic Criteria Section */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg space-y-4">
        <h2 className="text-[#0c264d] font-bold text-2xl">Defining ADHD: DSM-5-TR Diagnostic Criteria</h2>
        
        <p className="leading-relaxed">
          The diagram above illustrates the complete DSM-5-TR diagnostic criteria<sup className="text-green-600 font-bold ml-0.5">1</sup> for ADHD, showing the specific 
          symptoms that define each presentation. To receive a diagnosis of ADHD combined type, an individual 
          must meet criteria from both the inattention category (left circle) and the impulsivity/hyperactivity 
          category (right circle). These symptoms must be present for at least 6 months and be inappropriate 
          for the person's developmental level.
        </p>
        
        <div className="bg-[#ffe8d6] border-l-4 border-[#0c264d] p-4 rounded">
          <p className="text-sm">
            <strong>Clinical Requirement:</strong> A comprehensive ADHD evaluation should include multiple sources of 
            information (self-report, parent/partner input, school/work records) and rule out other conditions that may 
            present similarly.
          </p>
        </div>
      </div>

      {/* 18 DSM-5 Criteria Section */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg space-y-6 mt-8">
        <h2 className="text-[#0c264d] font-bold text-2xl mb-2">The 18 DSM-5 Diagnostic Criteria</h2>
        <p className="text-slate-700 mb-6 text-sm">
          Expand the sections below to read the exact clinical criteria used by medical professionals to diagnose ADHD. 
          For a deeper dive into what these symptoms look like in daily life, explore the specific tabs above.
        </p>
        
        <div className="space-y-4">
          {/* Accordion 1: Reading Guide */}
          <Accordion title="How to Read These Symptoms">
            <ul className="text-sm space-y-2 list-disc ml-5 text-slate-800">
              <li><strong>Children (under 17):</strong> At least <strong>6 out of 9</strong> symptoms from either category (Inattention OR Hyperactivity-Impulsivity)</li>
              <li><strong>Adults (17+):</strong> At least <strong>5 out of 9</strong> symptoms from either category</li>
              <li><strong>Must be present before age 12</strong></li>
              <li><strong>Must occur in two or more settings</strong> (home, school, work, with friends, etc.)</li>
              <li><strong>Must interfere with functioning</strong> (academic, social, or occupational)</li>
              <li><strong>Must persist for at least 6 months</strong></li>
              <li><strong>Not better explained by another mental disorder</strong></li>
            </ul>
          </Accordion>

          {/* Accordion 2: Inattention */}
          <Accordion title="Inattention Criteria (9 Symptoms)">
            <div className="space-y-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-[#2abcd4] shrink-0" />1. Careless Mistakes</div>
                <div className="text-sm text-slate-700">Often fails to give close attention to details or makes careless mistakes in schoolwork, work, or other activities</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><Eye className="w-4 h-4 text-[#2abcd4] shrink-0" />2. Difficulty Sustaining Attention</div>
                <div className="text-sm text-slate-700">Often has difficulty sustaining attention in tasks or play activities</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><EarOff className="w-4 h-4 text-[#2abcd4] shrink-0" />3. Doesn't Seem to Listen</div>
                <div className="text-sm text-slate-700">Often does not seem to listen when spoken to directly</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><ListX className="w-4 h-4 text-[#2abcd4] shrink-0" />4. Doesn't Follow Through</div>
                <div className="text-sm text-slate-700">Often does not follow through on instructions and fails to finish schoolwork, chores, or duties in the workplace (not due to oppositional behavior or failure to understand)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><FolderOpen className="w-4 h-4 text-[#2abcd4] shrink-0" />5. Difficulty Organizing</div>
                <div className="text-sm text-slate-700">Often has difficulty organizing tasks and activities</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><BrainCog className="w-4 h-4 text-[#2abcd4] shrink-0" />6. Avoids Sustained Mental Effort</div>
                <div className="text-sm text-slate-700">Often avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort (such as schoolwork or homework)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><Search className="w-4 h-4 text-[#2abcd4] shrink-0" />7. Loses Things</div>
                <div className="text-sm text-slate-700">Often loses things necessary for tasks or activities (e.g., school materials, pencils, books, tools, wallets, keys, paperwork, eyeglasses, mobile phones)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><Sparkles className="w-4 h-4 text-[#2abcd4] shrink-0" />8. Easily Distracted</div>
                <div className="text-sm text-slate-700">Is often easily distracted by extraneous stimuli (for older adolescents and adults, may include unrelated thoughts)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><CalendarX className="w-4 h-4 text-[#2abcd4] shrink-0" />9. Forgetful</div>
                <div className="text-sm text-slate-700">Is often forgetful in daily activities</div>
              </div>
            </div>
          </Accordion>

          {/* Accordion 3: Hyperactivity-Impulsivity */}
          <Accordion title="Hyperactivity-Impulsivity Criteria (9 Symptoms)">
            <div className="mb-4 text-sm font-semibold text-[#0c264d]">Hyperactivity (6 symptoms):</div>
            <div className="space-y-4 mb-6">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><Hand className="w-4 h-4 text-[#2abcd4] shrink-0" />10. Fidgets or Squirms</div>
                <div className="text-sm text-slate-700">Often fidgets with or taps hands or feet or squirms in seat</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><ArrowUpFromLine className="w-4 h-4 text-[#2abcd4] shrink-0" />11. Leaves Seat</div>
                <div className="text-sm text-slate-700">Often leaves seat in situations when remaining seated is expected (e.g., classroom, office, workplace)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><Mountain className="w-4 h-4 text-[#2abcd4] shrink-0" />12. Runs About or Climbs</div>
                <div className="text-sm text-slate-700">Often runs about or climbs in situations where it is inappropriate (in adolescents or adults, may be limited to feeling restless)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><VolumeX className="w-4 h-4 text-[#2abcd4] shrink-0" />13. Unable to Play Quietly</div>
                <div className="text-sm text-slate-700">Often unable to play or engage in leisure activities quietly</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><Zap className="w-4 h-4 text-[#2abcd4] shrink-0" />14. "On the Go"</div>
                <div className="text-sm text-slate-700">Is often "on the go," acting as if "driven by a motor"</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-[#2abcd4] shrink-0" />15. Talks Excessively</div>
                <div className="text-sm text-slate-700">Often talks excessively</div>
              </div>
            </div>

            <div className="mb-4 text-sm font-semibold text-[#0c264d]">Impulsivity (3 symptoms):</div>
            <div className="space-y-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><MessageCircle className="w-4 h-4 text-[#2abcd4] shrink-0" />16. Blurts Out Answers</div>
                <div className="text-sm text-slate-700">Often blurts out an answer before a question has been completed (e.g., completes people's sentences, cannot wait for turn in conversation)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><Hourglass className="w-4 h-4 text-[#2abcd4] shrink-0" />17. Difficulty Waiting Turn</div>
                <div className="text-sm text-slate-700">Often has difficulty waiting their turn (e.g., while waiting in line)</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1 flex items-center gap-2"><UserMinus className="w-4 h-4 text-[#2abcd4] shrink-0" />18. Interrupts or Intrudes</div>
                <div className="text-sm text-slate-700">Often interrupts or intrudes on others (e.g., butts into conversations, games, or activities; may start using other people's things without asking or receiving permission)</div>
              </div>
            </div>
          </Accordion>
        </div>

        {/* Bottom Callout */}
        <div className="bg-[#f0e6ff] border-l-4 border-[#0c264d] p-4 rounded space-y-3 mt-6">
          <p className="text-sm font-bold text-[#0c264d]">
            Important Note: Having some of these symptoms occasionally is normal. ADHD is diagnosed when:
          </p>
          <ul className="text-sm space-y-1 list-disc ml-5 text-slate-800">
            <li>Symptoms are severe enough to interfere with daily life</li>
            <li>They occur consistently across different settings</li>
            <li>They've been present since childhood (before age 12)</li>
            <li>They can't be better explained by another condition</li>
          </ul>
          <p className="text-sm pt-1">
            <strong>Self-Assessment vs. Diagnosis:</strong> Online checklists and symptom lists can help you recognize patterns, but only a qualified healthcare professional can diagnose ADHD through comprehensive evaluation.
          </p>
        </div>
      </div>

      {/* Main Back Button */}
      <div className="flex justify-end my-8 w-full">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-md"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
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
            <li>
              American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.). Washington, DC: American Psychiatric Association.
            </li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              National Institute of Mental Health. (2024). "Attention-Deficit/Hyperactivity Disorder." NIMH.
            </li>
            <li>
              Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}