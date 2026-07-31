import React from 'react';
import { ShieldAlert, Map, AlertTriangle, Activity, Sparkles } from 'lucide-react';
import { SectionActions } from '../../../SectionActions';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

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
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      <SectionActions 
        sectionId="full-dysregulation-article" 
        sectionTitle="Guide to Dysregulation and Aggression" 
      />
      
      {/* ===== INTRODUCTION: A SHARED EXPERIENCE ===== */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-speech-dysreg-intro.png"
          alt="Caregiver and individual co-regulation"
          className="w-64 h-auto rounded-md float-right ml-6 mb-4 shadow-sm"
        />
        <p className="text-base leading-relaxed text-gray-700">
          Navigating dysregulation is a profoundly shared experience between the autistic individual and their support team. When the nervous system is pushed to its limits—often due to overwhelming sensory input or a lack of accessible communication tools—it creates intense distress for the individual and a parallel layer of stress for the caregiver. True support is never about compliance or controlling behavior; it is about building a co-regulated partnership where the individual’s urgent need for physical and emotional safety, and the caregiver’s need for sustainable, compassionate strategies, are equally prioritized and deeply honored.
        </p>
        <div className="clear-both"></div>
      </div>

      {/* ===== THE SPIKY PROFILE: STRENGTHS & VULNERABILITIES ===== */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ffd166] mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Sparkles className="text-[#ffd166]" size={24} /> 
          The Spiky Cognitive Profile: Understanding Asynchronous Development
        </h2>
        <p className="text-sm leading-relaxed mb-4 text-gray-700">
          To support a dysregulated individual effectively, we must first presume competence. Many autistic individuals possess a "spiky" cognitive profile, where extraordinary strengths—such as deep focus, remarkable memory, or immense empathy—exist alongside significant vulnerabilities in sensory processing and internal regulation.<sup className="text-green-600 font-bold ml-0.5">5</sup>
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          When staff understand that this individual is not "acting out," but rather navigating a brain that processes information with different intensity, the training shifts from "control" to "attunement." By respecting and leveraging their unique strengths, we create a sense of safety that is the most effective tool for preventing escalation. When the individual feels understood, the need for reactive aggression diminishes significantly.
        </p>
      </div>

      {/* ===== HIDDEN PAIN: MEDICAL & TRAUMA TRIGGERS ===== */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#ff6b6b] mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <Activity className="text-[#ff6b6b]" size={24} /> 
          Hidden Pain: Medical Comorbidities & Trauma
        </h2>
        
        <p className="text-base leading-relaxed mb-4 text-gray-700">
          When evaluating dysregulation, it is critical to look beyond the surface behavior and audit for hidden pain, unmet physical needs, or underlying trauma. Because many autistic individuals experience differences in interoception—the ability to recognize internal bodily signals—or face significant communication barriers, what appears to be an aggressive outburst is frequently an urgent, desperate communication of acute physical distress.
        </p>
        
        <p className="text-base leading-relaxed mb-4 text-gray-700">
          Research indicates that medical comorbidities are highly prevalent in the autistic community; for instance, gastrointestinal (GI) disorders affect between 46% and 84% of autistic children<sup className="text-green-600 font-bold ml-0.5">6</sup>, while migraine prevalence in autistic adults is estimated at over 42%, more than double the rate of the general population<sup className="text-green-600 font-bold ml-0.5">7</sup>.
        </p>
        
        <p className="text-base leading-relaxed text-gray-700">
          When an individual cannot verbally articulate that they are experiencing debilitating acid reflux, severe constipation, a blinding headache, a blood-sugar crash from hunger, or a nervous system flashback triggered by past trauma, their biological fight-or-flight system naturally takes over. Reframing reactive behavior as a distress signal for hidden physical pain allows support teams to shift away from behavioral management and toward compassionate medical and emotional attunement.
        </p>
      </div>

      {/* ===== REFRAMING DYSREGULATION & AGGRESSION ===== */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center gap-2">
          <ShieldAlert className="text-[#0A9DC4]" size={24} /> 
          Reframing the Stress Response
        </h2>
        <p className="text-sm leading-relaxed mb-4 text-gray-700">
          Dysregulation escalating into aggression is often a profound stress response to unmet communication needs<sup className="text-green-600 font-bold ml-0.5">1</sup>. Individuals with communication barriers frequently resort to reactive aggression because they lack the necessary tools or accommodations to verbally articulate frustration, sensory overload, or physical pain.
        </p>
        <p className="text-sm leading-relaxed text-gray-700">
          Systemic reviews confirm that individuals experiencing emotion dysregulation are significantly more likely to engage in physical aggression, especially when feeling trapped, misunderstood, or unable to self-soothe<sup className="text-green-600 font-bold ml-0.5">2</sup>. By providing robust, alternative communication methods, aggressive behavior naturally decreases as autonomy increases.
        </p>
      </div>

      {/* ===== BRIDGING THE GENERALIZATION GAP ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Map className="text-[#2abcd4]" size={24} /> 
          Bridging the Generalization Gap Across Environments
        </h2>

        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          A major finding in developmental disability research is that learned communication skills do not naturally transfer across different settings<sup className="text-green-600 font-bold ml-0.5">3</sup>. A young adult might successfully use an electronic communication tablet at day support, but resort to physical aggression at home or in a grocery store if the environments or staff prompts are inconsistent.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#0A9DC4]/20 pb-1">School & Day Support</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Mitigate the Audience Effect:</strong> Having a crowd of peers watching an individual escalate increases shame and defensive aggression. Remove the audience by moving the other participants out of the room rather than forcing the dysregulated individual to move.</li>
              <li><strong className="text-[#0c264d]">Proactive Intermittent Access:</strong> Schedule proactive "sensory resets" in a low-stimulus area to keep their nervous system baseline stable before dysregulation occurs.</li>
            </ul>
          </div>
          
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 border-b border-[#0A9DC4]/20 pb-1">Community Outings</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Portable Micro-Schedules:</strong> Outings fail when the timeline becomes ambiguous. Staff should carry a highly visual, 3-step portable schedule to anchor the individual.</li>
              <li><strong className="text-[#0c264d]">Environmental Reconnaissance:</strong> Map out "escape hatches" (quiet aisles, park benches, service vehicles) before arriving where co-regulation can happen privately.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-4 rounded border-l-2 border-[#2abcd4]">
          <h4 className="font-bold text-[#0c264d] mb-2">Home Environments</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li><strong className="text-[#0c264d]">Communication Continuity:</strong> Ensure the exact same visual icons, phrase structures, and AAC setups used at day support are physically present and utilized at home<sup className="text-green-600 font-bold ml-0.5">3</sup>.</li>
            <li><strong className="text-[#0c264d]">Physical De-escalation Zones:</strong> Establish a designated, permanent "safe space" at home that is purely associated with comfort, never punishment.</li>
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
              Stand at a 90-degree angle relative to the individual's hip, rather than square-front. This eliminates a direct line of sight for strikes and removes the confrontational "standoff" posture.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded border border-red-100 shadow-sm">
            <div className="font-bold text-[#0c264d] text-sm mb-2 pb-1 border-b border-red-200">Environmental Triangulation</div>
            <p className="text-sm text-gray-700">
              In any room or public venue, always position yourself so the individual is never between you and the exit. This prevents staff from being backed into corners during a sudden escalation.
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
            Working one-on-one with aggressive behavior causes cumulative nervous system trauma for staff. When a worker experiences chronic stress or hypervigilance, their micro-expressions change. They may display rigid posture, a sharper tone, or defensive pacing.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            The dysregulated individual immediately detects these subtle threat signals, which heightens their own panic and increases the likelihood of an aggressive outburst. Breaking this cycle requires a heavy emphasis on post-crisis staff debriefing and operational safety nets, rather than relying solely on individual worker stamina.
          </p>
        </div>
      </div>

      {/* Back Button Bottom */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-3 border-b-2 border-[#10b981] pb-1">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Purba, C. A. P., et al. (2024). "Managing Aggressive Behavior in Adolescents With Autism Spectrum Disorder: Pharmacological and Non-Pharmacological Approaches." <i>Journal of the Korean Academy of Child and Adolescent Psychiatry</i>. https://doi.org/10.5765/jkacap.240026</p>
            <p>2. Smith, K., et al. (2026). "Emotion Regulation and Aggression: A Systematic Review and Meta-Analysis." <i>Aggressive Behavior</i>. https://doi.org/10.1002/ab.70055</p>
            <p>3. Fahmie, T. A., et al. (2020). "Topographies and functions of emerging problem behavior and appropriate requests in neurotypical preschoolers." <i>Journal of Applied Behavior Analysis</i>. https://doi.org/10.1002/jaba.741</p>
            <p>4. Ibrahim, K., et al. (2019). "Reduced Amygdala–Prefrontal Functional Connectivity in Children With Autism Spectrum Disorder and Co-occurring Disruptive Behavior." <i>Biological Psychiatry: Cognitive Neuroscience and Neuroimaging</i>. https://doi.org/10.1016/j.bpsc.2019.01.009</p>
            <p>5. Hughes, J. E. A., et al. (2018). "Savant syndrome has a distinct psychological profile in autism." <i>Molecular Autism</i>. https://doi.org/10.1186/s13229-018-0237-1</p>
            <p>6. McElhanon, B. O., et al. (2014). "Gastrointestinal Symptoms in Autism Spectrum Disorder: A Meta-analysis." <i>Pediatrics</i>. https://doi.org/10.1542/peds.2013-3995</p>
            <p>7. Croen, L. A., et al. (2015). "The health status of adults on the autism spectrum." <i>Autism</i>. https://doi.org/10.1177/1362361315577517</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-3 border-b-2 border-[#2abcd4] pb-1">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Crisis Prevention Institute (CPI). (n.d.). "De-escalation & Crisis Prevention Training for Health Care." https://www.crisisprevention.com/industries/health-care/</p>
            <p>Kimberly's Educational Resources. (n.d.). "Alternative Communication Options: Evaluating AAC, Independence, and Expression." https://www.kimberlyedu.org/alternative-communication-options</p>
          </div>
        </div>
      </div>

    </div>
  );
}