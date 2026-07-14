import React from 'react';
import { Activity, Brain, Layers, Users, Hand, Sun, CheckCircle, Home } from 'lucide-react';
import { SectionActions } from '../../../SectionActions';

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

      {/* Introduction */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg shadow-sm border border-[#0A9DC4]/20 mb-8">
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
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-3 text-slate-600 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Case-Smith, J., & Arbesman, M. (2008). "Evidence-based review of occupational therapy for autism." <em>American Journal of Occupational Therapy</em>.</p>
            <p>2. Schaaf, R. C., et al. (2014). "Sensory integration outcomes in children with autism." <em>Journal of Autism and Developmental Disorders</em>.</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>American Occupational Therapy Association (AOTA) Guidelines</li>
            <li>Cleveland Clinic Occupational Therapy Guide</li>
            <li>Autism Society & Autism Speaks Toolkits</li>
            <li>Star Institute for Sensory Processing</li>
            <li>Autism National Committee (AutCom)</li>
            <li>Organization for Autism Research (OAR)</li>
          </ul>
        </div>
      </div>

    </div>
  );
}