import React from 'react';
import { Activity, Brain, Layers, Users, Hand, Sun, CheckCircle, Home, MessageCircle, ArrowRight } from 'lucide-react';
import { SectionActions } from '../../../SectionActions';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';

interface OccupationalTherapyProps {
  setCurrentArticle?: (article: string) => void;
}

export function OccupationalTherapy({ setCurrentArticle }: OccupationalTherapyProps) {
  
  return (
    <div id="full-ot-article" className="space-y-6 text-[#0c264d] font-spartan animate-in fade-in duration-300">
      
      {/* Header with Back Button */}
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl text-[#0c264d] font-bold">
          Occupational Therapy (OT)
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism-support-therapies')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-normal py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 shrink-0"
        >
          <span className="text-xl">&larr;</span>
          Back to Therapies
        </button>
      </div>

      {/* Master Action Bar (The only one on the page!) */}
      <SectionActions 
        sectionId="full-ot-article" 
        sectionTitle="Complete Guide to Occupational Therapy" 
      />

{/* Introduction (Floated Image) */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8 flow-root">
        <ImageWithFallback 
          src="/images/autism/autism-support-TTtab-OT-intro.png"
          alt="Occupational Therapy Intro"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4 shadow-sm"
        />
        <p className="text-sm leading-relaxed mb-4">
          Occupational therapy (OT) helps people of all ages regain or build the skills needed for daily living. Rather than focusing strictly on physical movement, OT focuses on functional independence, supporting "occupations"—the meaningful activities that occupy your time, such as working, self-care, or play<sup className="text-green-600 font-bold ml-0.5">1</sup>.
        </p>
        <p className="text-sm leading-relaxed">
          For autistic individuals, OT supports functional communication, sensory regulation, and daily independence across all support levels. Because autism impacts individuals differently, an OT evaluates unique strengths and challenges to help people adapt to physical, cognitive, or developmental challenges so they can participate in everyday life<sup className="text-green-600 font-bold ml-0.5">1, 2</sup>.
        </p>
      </div>

      {/* ===== CORE INTERVENTION AREAS ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#ff6b6b] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Activity className="text-[#ff6b6b]" size={24} /> 
          Core Intervention Areas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-[#fff5f5] p-4 rounded-lg border border-[#ff6b6b]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 flex items-center gap-2">
              <Sun className="text-[#ff6b6b]" size={18} /> Sensory Integration
            </h4>
            <p className="text-sm text-gray-700">
              Developing personalized "sensory diets" to help individuals process noise, lights, or textures, minimizing sensory meltdowns and maximizing comfort<sup className="text-green-600 font-bold ml-0.5">2</sup>.
            </p>
          </div>
          
          <div className="bg-[#fff5f5] p-4 rounded-lg border border-[#ff6b6b]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 flex items-center gap-2">
              <CheckCircle className="text-[#ff6b6b]" size={18} /> Activities of Daily Living (ADLs)
            </h4>
            <p className="text-sm text-gray-700">
              Breaking down complex tasks—like brushing teeth, showering, or tying shoes—into visual, predictable, step-by-step schedules.
            </p>
          </div>

          <div className="bg-[#fff5f5] p-4 rounded-lg border border-[#ff6b6b]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 flex items-center gap-2">
              <Hand className="text-[#ff6b6b]" size={18} /> Motor Skill Development
            </h4>
            <p className="text-sm text-gray-700">
              Strengthening fine motor coordination for writing, typing, or using utensils, as well as gross motor skills for balance and body awareness.
            </p>
          </div>

          <div className="bg-[#fff5f5] p-4 rounded-lg border border-[#ff6b6b]/20">
            <h4 className="font-bold text-[#0c264d] mb-2 flex items-center gap-2">
              <Brain className="text-[#ff6b6b]" size={18} /> Executive Functioning
            </h4>
            <p className="text-sm text-gray-700">
              Teaching time management, emotional self-regulation, task initiation, and organizational strategies using visual timers and checklists.
            </p>
          </div>
        </div>
      </div>

      {/* ===== OT ACROSS AUTISM LEVELS ===== */}
      <div id="ot-levels" className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Layers className="text-[#0c264d]" size={24} /> 
          Understanding OT Across Autism Levels
        </h2>

        <div className="space-y-4">
          <div className="border-l-2 border-[#2abcd4] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">Level 1 (Requiring Support)</div>
            <p className="text-sm text-gray-700">
              Therapy often targets hidden barriers like executive dysfunction, organizational skills, emotional regulation, and navigating complex social or workplace environments.
            </p>
          </div>
          
          <div className="border-l-2 border-[#ffd166] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">Level 2 (Requiring Substantial Support)</div>
            <p className="text-sm text-gray-700">
              Focus shifts toward building clear communication routines, managing intense sensory overstimulation, adapting environments to reduce anxiety, and mastering basic self-care.
            </p>
          </div>
          
          <div className="border-l-2 border-[#ff6b6b] pl-4 py-1">
            <div className="font-bold text-[#0c264d] mb-1">Level 3 (Requiring Very Substantial Support)</div>
            <p className="text-sm text-gray-700">
              Interventions prioritize critical safety skills, introducing alternative communication tools (like AAC devices), maximizing physical independence in feeding or dressing, and creating highly predictable daily routines.
            </p>
          </div>
        </div>
      </div>

      {/* ===== OT ACROSS THE LIFESPAN ===== */}
      <div id="ot-lifespan" className="bg-[#f0f9ff] p-5 rounded-md border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Users className="text-[#2abcd4]" size={24} /> 
          OT Focus Areas by Life Stage
        </h2>
        
        <p className="text-sm text-gray-700 mb-6">
          Occupational therapy supports autistic individuals of all ages by adapting to changing life stages and developmental priorities. As a person grows, their therapy goals shift from foundational play and school readiness to workplace navigation, independent living, and aging with dignity.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Early Childhood (Ages 0-5)</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Play-Based Learning:</strong> Using play to develop fine motor control, hand-eye coordination, and functional communication.</li>
              <li><strong className="text-[#0c264d]">Sensory Exploration:</strong> Introducing different textures, sounds, and movements safely to expand sensory tolerances early.</li>
              <li><strong className="text-[#0c264d]">Routine Building:</strong> Establishing basic sleep, feeding, and dressing routines to ease daily family transitions.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">School-Age Children (Ages 6-12)</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Classroom Independence:</strong> Improving handwriting, scissor use, tool manipulation, and the ability to sit comfortably at a desk.</li>
              <li><strong className="text-[#0c264d]">Peer Interaction:</strong> Supporting social play dynamics, turn-taking, and understanding shared space during school activities.</li>
              <li><strong className="text-[#0c264d]">Self-Regulation:</strong> Teaching emotional and sensory check-ins so children can recognize when they are becoming overwhelmed.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Adolescents & Teens (Ages 13-18)</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Executive Functioning:</strong> Managing complex school schedules, long-term homework assignments, and organizing personal belongings.</li>
              <li><strong className="text-[#0c264d]">Puberty & Self-Care:</strong> Navigating body changes, learning advanced personal hygiene, and managing emotional shifts.</li>
              <li><strong className="text-[#0c264d]">Pre-Vocational Skills:</strong> Practicing basic community navigation, money management, and self-advocacy skills for the future.</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border border-[#0A9DC4]/20 shadow-sm">
            <div className="font-bold text-[#0c264d] mb-2 border-b border-gray-100 pb-1">Adults & Older Adults (Ages 19+)</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong className="text-[#0c264d]">Workplace Accommodations:</strong> Setting up sensory-friendly workspaces, organizing daily tasks, and managing professional communication.</li>
              <li><strong className="text-[#0c264d]">Independent Living:</strong> Mastering meal preparation, home maintenance, public transit navigation, and personal budgeting.</li>
              <li><strong className="text-[#0c264d]">Aging and Wellness:</strong> Maintaining mobility, adapting homes to prevent falls, and managing sensory sensitivities that change with age.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== SPECIFIC TECHNIQUES & QUESTIONS FOR YOUR OT ===== */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <MessageCircle className="text-[#0A9DC4]" size={24} /> 
          Specific Techniques & Questions for Your OT
        </h2>
        
        <p className="text-sm text-gray-700 mb-6">
          When interviewing or evaluating a new occupational therapist, it is vital to ensure they utilize modern, neurodiversity-affirming approaches. Here are specific clinical methodologies and questions you can ask to gauge their practice style<sup className="text-green-600 font-bold ml-0.5">3</sup>.
        </p>

        <div className="space-y-4">
          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <h4 className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <ArrowRight className="text-[#0A9DC4]" size={16} /> Interoception Curriculums
            </h4>
            <p className="text-sm text-gray-700 mb-2">Interoception is the internal sense of recognizing hunger, pain, temperature, and emotional states. Autistic individuals often have disrupted interoceptive signals.</p>
            <p className="text-sm italic text-[#0c264d]"><strong>Ask:</strong> "Do you utilize interoception mapping or curriculums to help them recognize their internal body signals, rather than just treating external behaviors?"<sup className="text-green-600 font-bold ml-0.5">4</sup></p>
          </div>

          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <h4 className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <ArrowRight className="text-[#0A9DC4]" size={16} /> The CO-OP Approach
            </h4>
            <p className="text-sm text-gray-700 mb-2">Cognitive Orientation to daily Occupational Performance (CO-OP) is an active, collaborative approach where the individual guides their own motor-skill goals (like learning to ride a bike or tie shoes) through problem-solving.</p>
            <p className="text-sm italic text-[#0c264d]"><strong>Ask:</strong> "Are you familiar with the CO-OP approach to allow them to lead their own goal-setting and problem-solving?"<sup className="text-green-600 font-bold ml-0.5">5</sup></p>
          </div>

          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <h4 className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <ArrowRight className="text-[#0A9DC4]" size={16} /> Affirming Sensory Diets
            </h4>
            <p className="text-sm text-gray-700 mb-2">Sensory diets should proactively regulate the nervous system, not punish or extinguish natural "stimming" (self-stimulatory behavior).</p>
            <p className="text-sm italic text-[#0c264d]"><strong>Ask:</strong> "How do you build a proactive sensory diet that supports their natural regulation, rather than trying to suppress their stimming?"</p>
          </div>

          <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#0A9DC4]/20">
            <h4 className="font-bold text-[#0c264d] mb-1 flex items-center gap-2">
              <ArrowRight className="text-[#0A9DC4]" size={16} /> AAC Integration
            </h4>
            <p className="text-sm text-gray-700 mb-2">OT does not exist in a vacuum. Motor skills are required to effectively use Alternative and Augmentative Communication (AAC) devices like tablets.</p>
            <p className="text-sm italic text-[#0c264d]"><strong>Ask:</strong> "How will you collaborate with their Speech-Language Pathologist to ensure their AAC device is fully integrated into our physical OT sessions?"</p>
          </div>
        </div>
      </div>

      {/* ===== SUPPORTING OT AT HOME ===== */}
      <div id="ot-support" className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-6">
        <h2 className="text-[#0c264d] font-bold mb-4 text-xl flex items-center justify-center gap-2">
          <Home className="text-[#d97706]" size={24} /> 
          How to Support OT Progress at Home
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#ffd166] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Maintain Environmental Predictability</div>
            <div className="text-sm text-gray-700">Use clear visual schedules and give advanced warnings before transitions to reduce anxiety and reinforce therapeutic routines.</div>
          </div>
          <div className="border-l-2 border-[#ffd166] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Co-Regulate and Honor Sensory Needs</div>
            <div className="text-sm text-gray-700">Create a dedicated "quiet zone" or sensory decompression space at home, and never force engagement with overwhelming sensory triggers.</div>
          </div>
          <div className="border-l-2 border-[#ffd166] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Presume Competence Always</div>
            <div className="text-sm text-gray-700">Give the individual ample time to respond, communicate, or complete a task independently before stepping in to help.</div>
          </div>
          <div className="border-l-2 border-[#ffd166] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Collaborate and Generalize</div>
            <div className="text-sm text-gray-700">Practice the exact communication methods, signs, or adaptive tools used during therapy sessions across all daily home routines.</div>
          </div>
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
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Literature
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Case-Smith, J., & Arbesman, M. (2008). "Evidence-based review of interventions for autism used in or of relevance to occupational therapy." <em>American Journal of Occupational Therapy</em>, 62(4), 416-429.</p>
            <p>2. Schaaf, R. C., et al. (2014). "An intervention for sensory difficulties in children with autism: A randomized trial." <em>Journal of Autism and Developmental Disorders</em>, 44(7), 1493-1506.</p>
            <p>3. Dallman, A. R., et al. (2022). "Neurodiversity-Affirming Practices in Occupational Therapy." <em>American Journal of Occupational Therapy</em>, 76(Supplement_1).</p>
            <p>4. Mahler, K. (2015). <em>Interoception: The Eighth Sensory System</em>. AAPC Publishing.</p>
            <p>5. Polatajko, H. J., & Mandich, A. (2004). <em>Enabling occupation in children: The cognitive orientation to daily occupational performance (CO-OP) approach</em>. CAOT Publications ACE.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Academic Textbooks
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>Ayres, A. J. (2005). Sensory Integration and the Child: Understanding Hidden Sensory Challenges. Western Psychological Services.</li>
            <li>Dunn, W. (2014). Sensory Profile 2: User's Manual. Pearson Clinical Assessment.</li>
            <li>Kramer, P., Hinojosa, J., & Royeen, C. B. (2020). Perspectives in Human Occupation: Participation in Life. F.A. Davis Company.</li>
            <li>Roley, S. S., et al. (2008). "Understanding occupational therapy using the AOTA Practice Framework." American Journal of Occupational Therapy.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}