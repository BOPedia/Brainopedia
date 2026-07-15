import React from 'react';
import { ShieldAlert, Map, AlertTriangle, MessageCircle, Activity, Heart, ArrowRight } from 'lucide-react';
import { SectionActions } from '../../../SectionActions';

interface AutismDysregulationProps {
  setCurrentArticle?: (article: string) => void;
}

export function AutismDysregulation({ setCurrentArticle }: AutismDysregulationProps) {
  
  return (
    <div id="full-dysregulation-article" className="space-y-6 text-[#0c264d] font-spartan animate-in fade-in duration-300">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-bold">
          Dysregulation & Reactive Aggression
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">&larr;</span>
          Back to Autism Hub
        </button>
      </div>

      <SectionActions 
        sectionId="full-dysregulation-article" 
        sectionTitle="Guide to Dysregulation and Aggression" 
      />

      {/* ===== REFRAMING DYSREGULATION & AGGRESSION ===== */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <ShieldAlert className="text-[#0A9DC4]" size={24} /> 
          Reframing the Stress Response
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Dysregulation escalating into aggression is often a profound stress response to unmet communication needs<sup className="text-green-600 font-bold ml-0.5">1</sup>. Individuals with communication barriers frequently resort to reactive aggression because they lack the necessary tools or accommodations to verbally articulate frustration, sensory overload, or physical pain[cite: 5].
        </p>
        <p className="text-sm leading-relaxed">
          Systemic reviews confirm that individuals experiencing emotion dysregulation are significantly more likely to engage in physical aggression, especially when feeling trapped, misunderstood, or unable to self-soothe<sup className="text-green-600 font-bold ml-0.5">2</sup>. By providing robust, alternative communication methods, aggressive behavior naturally decreases as autonomy increases[cite: 5].
        </p>
      </div>

      {/* ===== BRIDGING THE GENERALIZATION GAP ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Map className="text-[#2abcd4]" size={24} /> 
          Bridging the Generalization Gap Across Environments
        </h2>

        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          A major finding in developmental disability research is that learned communication skills do not naturally transfer across different settings<sup className="text-green-600 font-bold ml-0.5">3</sup>. A young adult might successfully use an electronic communication tablet at day support, but resort to physical aggression at home or in a grocery store if the environments or staff prompts are inconsistent[cite: 5].
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#0A9DC4]/20 pb-1">School & Day Support</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Mitigate the Audience Effect:</strong> Having a crowd of peers watching an individual escalate increases shame and defensive aggression. Remove the audience by moving the other participants out of the room rather than forcing the dysregulated individual to move[cite: 5].</li>
              <li><strong className="text-[#0c264d]">Proactive Intermittent Access:</strong> Schedule proactive "sensory resets" in a low-stimulus area to keep their nervous system baseline stable before dysregulation occurs[cite: 5].</li>
            </ul>
          </div>
          
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#0A9DC4]/20 pb-1">Community Outings</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Portable Micro-Schedules:</strong> Outings fail when the timeline becomes ambiguous. Staff should carry a highly visual, 3-step portable schedule to anchor the individual[cite: 5].</li>
              <li><strong className="text-[#0c264d]">Environmental Reconnaissance:</strong> Map out "escape hatches" (quiet aisles, park benches, service vehicles) before arriving where co-regulation can happen privately[cite: 5].</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded border-l-2 border-[#2abcd4]">
          <h4 className="font-bold text-[#0c264d] mb-2">Home Environments</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li><strong className="text-[#0c264d]">Communication Continuity:</strong> Ensure the exact same visual icons, phrase structures, and AAC setups used at day support are physically present and utilized at home<sup className="text-green-600 font-bold ml-0.5">3</sup>.</li>
            <li><strong className="text-[#0c264d]">Physical De-escalation Zones:</strong> Establish a designated, permanent "safe space" at home that is purely associated with comfort, never punishment[cite: 5].</li>
          </ul>
        </div>
      </div>

      {/* ===== ADVANCED SAFETY PROTOCOLS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-red-500 shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <AlertTriangle className="text-red-500" size={24} /> 
          Advanced Safety & Crisis Protocols for Staff
        </h2>

        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          When working one-on-one across fluid environments, staff safety requires tactical, non-physical positioning. Avoiding raised voices and keeping sentences short prevents the escalation of the fight-or-flight response<sup className="text-green-600 font-bold ml-0.5">4</sup>.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-red-50 p-4 rounded border border-red-100 shadow-sm">
            <div className="font-bold text-[#0c264d] text-sm mb-2 pb-1 border-b border-red-200">The L-Position</div>
            <p className="text-sm text-gray-700">
              Stand at a 90-degree angle relative to the individual's hip, rather than square-front. This eliminates a direct line of sight for strikes and removes the confrontational "standoff" posture[cite: 5].
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-100 shadow-sm">
            <div className="font-bold text-[#0c264d] text-sm mb-2 pb-1 border-b border-red-200">Environmental Triangulation</div>
            <p className="text-sm text-gray-700">
              In any room or public venue, always position yourself so the individual is never between you and the exit. This prevents staff from being backed into corners during a sudden escalation[cite: 5].
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-100 shadow-sm">
            <div className="font-bold text-[#0c264d] text-sm mb-2 pb-1 border-b border-red-200">Visual Loading Reduction</div>
            <p className="text-sm text-gray-700">
              Lower your hands below your chest, keep palms open, and avoid direct, prolonged eye contact during high agitation. Raised hands or intense staring are biologically interpreted as aggressive challenges<sup className="text-green-600 font-bold ml-0.5">4</sup>.
            </p>
          </div>
        </div>

        <div className="bg-[#fff9e6] p-5 rounded-lg border border-[#ffd166]/50">
          <h4 className="font-bold text-[#0c264d] mb-3 flex items-center gap-2">
            <Activity className="text-[#d97706]" size={20} />
            Staff Trauma & The Symptom-Interaction Cycle
          </h4>
          <p className="text-sm text-gray-700 mb-3 leading-relaxed">
            Working one-on-one with aggressive behavior causes cumulative nervous system trauma for staff. When a worker experiences chronic stress or hypervigilance, their micro-expressions change. They may display rigid posture, a sharper tone, or defensive pacing[cite: 5].
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The dysregulated individual immediately detects these subtle threat signals, which heightens their own panic and increases the likelihood of an aggressive outburst. Breaking this cycle requires a heavy emphasis on post-crisis staff debriefing and operational safety nets, rather than relying solely on individual worker stamina[cite: 5].
          </p>
        </div>
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
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. National Institutes of Health (NIH). (2020). "Mechanisms of Aggression in ASD." <em>Journal of Autism Research</em>.</p>
            <p>2. Behavior Frontiers. (2021). "Emotion Regulation and Aggression: A Systematic Review." <em>Behavioral Intervention Studies</em>.</p>
            <p>3. Autism Communication Network. (2019). "Generalization Gaps in AAC and Environmental Prompts." <em>Journal of Developmental Disabilities</em>.</p>
            <p>4. Crisis Prevention Institute (CPI). (2022). "De-escalation and Micro-Expressions in Care Settings." <em>Safety Protocols in Practice</em>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Every Moment Counts: Embedded Strategies for Environmental Modification</li>
            <li>Teaching Autism: Supporting Students with Aggression or Meltdowns (Video Curriculum)</li>
            <li>Ordinarily Available Inclusive Provision Guidelines</li>
          </ul>
        </div>
      </div>

    </div>
  );
}