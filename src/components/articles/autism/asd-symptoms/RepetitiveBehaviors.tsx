import React from 'react';
import { ImageWithFallback } from '../../../figma/ImageWithFallback';
import { 
  Users, 
  RefreshCw, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  Search,
  MessageSquare,
  Repeat,
  Zap,
  Target,
  Activity
} from 'lucide-react';

export function RepetitiveBehaviors() {
  return (
    <div className="space-y-6">
      {/* 1. CENTERED INTRO & GRAPHIC */}
      <div className="text-center w-full mb-8">
        <p className="text-lg text-[#0c264d] mb-6">
          Autistic individuals display at least two of the following types of restricted, repetitive patterns:        
        </p>
        
        <div className="mx-auto w-64 md:w-80 shadow-md rounded-xl overflow-hidden"> 
          <ImageWithFallback 
            src="/images/autism/autism-symptoms-Reptab-pattern.png"
            alt="a square graphic showing colorful, symmetrical, repetitive patterns"
          />
        </div>
        
        <p className="mt-4 text-sm italic text-[#0c264d]/70">
          Visualizing the symmetry and consistency often found in repetitive patterns.
        </p>
      </div>

      {/* 2. STEREOTYPED OR REPETITIVE MOVEMENTS */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-[#ffd166]/20 rounded-lg text-[#0c264d]">
            <Activity size={24} />
          </span>
          <h3 className="text-[#0c264d] font-bold text-lg leading-tight">
            Stereotyped or Repetitive Movements, Speech, or Object Use
          </h3>
        </div>
         
        <p className="mb-6 text-[#0c264d]">
          These behaviors, often called "stimming," serve various functions including self-regulation, expressing emotions, or responding to sensory input.<sup className="text-green-600 font-bold ml-0.5">1</sup>
        </p>
          
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Motor Stereotypies</div>
              <div className="text-sm text-[#0c264d]">Hand flapping, rocking, spinning, jumping, finger flicking</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Vocal Stereotypies</div>
              <div className="text-sm text-[#0c264d]">Echolalia (repeating words), scripting, repetitive vocalizations</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Object Use</div>
              <div className="text-sm text-[#0c264d]">Lining up toys, spinning wheels, flicking strings</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="bg-[#ffd166]/10 p-3 rounded-lg text-xs italic text-[#0c264d]">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck size={14} />
                  <strong>Note:</strong>
                </div>
                Stimming serves important regulatory functions and shouldn't be suppressed unless harmful.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. INSISTENCE ON SAMENESS */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-[#ffd166]/20 rounded-lg text-[#0c264d]">
            <Repeat size={24} />
          </span>
          <h3 className="text-[#0c264d] font-bold text-lg leading-tight">
            Insistence on Sameness and Inflexible Adherence to Routines
          </h3>
        </div>

        <p className="mb-4 text-sm text-[#0c264d]">
          Many autistic individuals find comfort and security in predictability and sameness.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Rigid Routines</div>
            <div className="text-sm text-[#0c264d]">Specific sequence of activities; distress when disrupted</div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Difficulty with Transitions</div>
            <div className="text-sm text-[#0c264d]">Extreme distress when changing activities or environments</div>
          </div>
        </div>
      </div>

      {/* 4. HIGHLY RESTRICTED INTERESTS */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-[#ffd166]/20 rounded-lg text-[#0c264d]">
            <Target size={24} />
          </span>
          <h3 className="text-[#0c264d] font-bold text-lg leading-tight">
            Highly Restricted, Fixated Interests
          </h3>
        </div>

        <p className="mb-4 text-sm text-[#0c264d]">
          Special interests are a hallmark feature of autism and can be a source of joy, expertise, and identity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Intensity</div>
            <div className="text-sm text-[#0c264d]">Passionate, all-consuming focus with depth of knowledge</div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Persistence</div>
            <div className="text-sm text-[#0c264d]">Interests that may last months, years, or a lifetime</div>
          </div>
        </div>
      </div>

      {/* 5. SENSORY REACTIVITY */}
      <div className="bg-white p-6 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2 bg-[#ffd166]/20 rounded-lg text-[#0c264d]">
            <Zap size={24} />
          </span>
          <h3 className="text-[#0c264d] font-bold text-lg leading-tight">
            Hyper- or Hyporeactivity to Sensory Input<sup className="text-green-600 font-bold ml-0.5">2</sup>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="space-y-3">
            <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wide border-b border-[#2abcd4] pb-1">
              Hypersensitivity
            </h4>
            <div className="text-sm text-[#0c264d] pl-1">Overwhelmed by sounds, lights, or textures</div>
            <div className="text-sm text-[#0c264d] pl-1">Sensory overload leading to meltdowns</div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-[#0c264d] text-sm uppercase tracking-wide border-b border-[#2abcd4] pb-1">
              Hyposensitivity
            </h4>
            <div className="text-sm text-[#0c264d] pl-1">Seeking intense experiences (movement, sound)</div>
            <div className="text-sm text-[#0c264d] pl-1">High pain tolerance or seeking tactile input</div>
          </div>
        </div>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
            <li>
              Petty, S., Trickett, A., Thompson, K., Garbutt, R., & Saunders, M. (2022). Revising our understanding of emotional distress for autistic adults; call for research. <i>Current Psychology</i>, <i>42</i>, 21518-21521. https://doi.org/10.1007/s12144-022-03254-0
              <br />Cited by: 8
            </li>
            <li>
              MacLennan, K., O’Brien, S., & Tavassoli, T. (2021). In Our Own Words: The Complex Sensory Experiences of Autistic Adults. <i>Journal of Autism and Developmental Disorders</i>, <i>52</i>, 3061-3075. https://doi.org/10.1007/s10803-021-05186-3
              <br />Cited by: 236
            </li>
          </ol>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.).
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}