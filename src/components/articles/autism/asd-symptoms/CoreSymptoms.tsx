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
  Repeat
} from 'lucide-react';

export function CoreSymptoms() {
  return (
    <div className="space-y-6 text-[#0c264d] font-spartan">
      {/* Introduction with Image Wrap */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <div className="block">
          <ImageWithFallback 
            src="/images/autism/autism-symptoms-Coretab-manuals.png" 
            alt="Colorful patterned brain representing autism diversity"
            className="w-48 h-auto float-right ml-6 mb-4 rounded-md border border-gray-300 shadow-sm"
          />
          
          <h2 className="font-bold mb-4 text-2xl">Understanding Core Characteristics</h2>
          <p className="mb-4 leading-relaxed">
            The characteristics of autism spectrum disorder are highly variable, but they fall into two main 
            categories as defined by the DSM-5-TR:<sup className="text-green-600 font-bold ml-0.5">1</sup> persistent differences in social communication and interaction, 
            and restricted, repetitive patterns of behavior, interests, or activities.
          </p>
        </div>
        
        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded flex items-start gap-3">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
          <p className="text-sm">
            <strong>Remember:</strong> These characteristics exist on a spectrum with tremendous variation between individuals. 
            No two autistic people present exactly the same way.
          </p>
        </div>
      </div>

      {/* DSM-5-TR Symptom Chart */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="font-bold mb-6 text-2xl text-center">DSM-5-TR Diagnostic Categories</h2>

        <div className="flex justify-center mb-8">
          <ImageWithFallback 
            src="/images/autism/autism-symptoms-Coretab-2core-venn.png"
            alt="AUTISM Diagnostic Criteria Venn Diagram"
            className="w-full max-w-2xl rounded shadow-md"
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
            <Search className="text-[#2abcd4]" /> Two Core Diagnostic Domains
          </h3>
          
          <div className="space-y-4">
            <div className="bg-[#f0f9ff] bg-opacity-50 p-4 rounded-md border-l-2 border-[#2abcd4]">
              <div className="font-bold mb-1 flex items-center gap-2">
                <MessageSquare size={18} className="text-[#2abcd4]" />
                1. Social Communication & Interaction
              </div>
              <div className="text-sm leading-relaxed">Persistent differences in social-emotional reciprocity, nonverbal communication, and developing/maintaining relationships.</div>
            </div>

            <div className="bg-[#f0f9ff] bg-opacity-50 p-4 rounded-md border-l-2 border-[#2abcd4]">
              <div className="font-bold mb-1 flex items-center gap-2">
                <Repeat size={18} className="text-[#2abcd4]" />
                2. Restricted & Repetitive Patterns
              </div>
              <div className="text-sm leading-relaxed">Including stereotyped movements, insistence on sameness, highly restricted interests, or sensory sensitivities.</div>
            </div>

            {/* Criteria C, D, E with Icon Anchors */}
            <div className="pt-4 grid md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-cyan-600">
                  <Clock size={14} /> Criterion C
                </div>
                <div className="text-[11px] leading-snug"><strong>Early Onset:</strong> Symptoms present in early development.</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-cyan-600">
                  <ShieldCheck size={14} /> Criterion D
                </div>
                <div className="text-[11px] leading-snug"><strong>Impairment:</strong> Causes clinically significant functional challenges.</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-cyan-600">
                  <Users size={14} /> Criterion E
                </div>
                <div className="text-[11px] leading-snug"><strong>Differential:</strong> Not better explained by ID or GDD.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
              
      {/* Variation Section */}
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="font-bold mb-4 text-2xl">Variation Across the Spectrum</h2>
        
        <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mb-6 text-center">
          <p className="italic text-lg">"If you've met one person with autism, you've met one person with autism."</p>
          <p className="text-sm font-bold mt-1">— Dr. Stephen Shore</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Presence", desc: "Not all individuals have all characteristics." },
            { title: "Severity", desc: "Ranges from mild to requiring very substantial support." },
            { title: "Context", desc: "Challenges fluctuate based on environment and stress." },
            { title: "Masking", desc: "Camouflaging traits to fit into neurotypical settings." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-md shadow-sm border-l-4 border-orange-400">
              <h4 className="font-bold text-sm mb-1">{item.title}</h4>
              <p className="text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />

      <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-[#10b981] font-bold mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). https://doi.org/10.1176/appi.books.9780890425787</p>
          </div>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-[#2abcd4] font-bold mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Lord, C., et al. (2020). "Autism spectrum disorder." <i>Nature Reviews Disease Primers</i>. https://doi.org/10.1038/s41572-019-0138-4</p>
            <p>Constantino, J. N., & Charman, T. (2016). "Diagnosis of autism spectrum disorder: reconciling the syndrome, its diverse etiology, and variation in expression." <i>The Lancet Neurology</i>. https://doi.org/10.1016/S1474-4422(16)00033-1</p>
            <p>Hull, L., et al. (2017). "Putting on My Best Normal: Social Camouflaging in Adults with Autism Spectrum Conditions." <i>Journal of Autism and Developmental Disorders</i>. https://doi.org/10.1007/s10803-017-3166-5</p>
          </div>
        </div>
      </div>
    </div>
  );
}