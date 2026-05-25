import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface StrengthsAbilitiesProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function StrengthsAbilities({ setCurrentArticle }: StrengthsAbilitiesProps) {
  return (
    <div className="space-y-6">
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Autistic Strengths and Abilities</h2>
        
        <p className="mb-4">
          While autism is often framed through deficits, many autistic individuals possess notable strengths:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Attention to detail:</strong> Noticing patterns, details, and discrepancies others miss</li>
          <li className="mb-2"><strong>Systematic thinking:</strong> Ability to understand complex systems and logical patterns</li>
          <li className="mb-2"><strong>Deep focus:</strong> Hyperfocus on areas of interest leading to expertise</li>
          <li className="mb-2"><strong>Honesty and directness:</strong> Straightforward communication, genuine authenticity</li>
          <li className="mb-2"><strong>Visual thinking:</strong> Strong visual-spatial skills in many autistic individuals</li>
          <li className="mb-2"><strong>Memory:</strong> Exceptional memory for facts, patterns, or areas of interest</li>
          <li className="mb-2"><strong>Creative thinking:</strong> Unique perspectives and innovative problem-solving approaches</li>
          <li className="mb-2"><strong>Loyalty and consistency:</strong> Deep commitment to people, values, and interests</li>
        </ul>

        {/* --- CENTERED GRAPHIC SECTION: GEARS VIDEO --- */}
        <div className="w-full max-w-md mx-auto my-6 rounded shadow-sm overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/autism/autism-symptoms-Strengthstab-gears.png"
            className="w-full h-auto object-contain"
            aria-label="Gears illustrating the interconnected nature of autistic strengths"
          >
            <source
              src="/images/autism/autism-symptoms-Strengthstab-gears.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="mb-4">
          Recognizing and cultivating strengths while providing support for challenges is essential for helping autistic individuals thrive.
        </p>

        <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-4 rounded mt-6">
          <p className="text-sm">
            <strong>∞ Important:</strong> Autism is a natural neurological variation, not a disease or defect. 
            With appropriate support, understanding, and accommodations, autistic individuals can lead fulfilling, 
            meaningful lives and make valuable contributions to society.
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
          <p className="text-xs text-slate-600 italic pl-2">
            No inline citations for this tab.
          </p>
        </div>
        
        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
            <li>
              Mottron, L. (2011). "Changing perceptions: The power of autism." <i>Nature</i>, 479(7371), 33-35.
            </li>
            <li>
              Russell, G., Kapp, S. K., Elliott, D., Elphick, C., Gwernan-Jones, R., & Kelly, C. (2019). "Mapping the autistic advantage from the accounts of adults diagnosed with autism: A qualitative study." <i>Autism in Adulthood</i>, 1(2), 124-133.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}