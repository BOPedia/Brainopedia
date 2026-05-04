import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Microscope, Zap, Brain, ShieldAlert, BookOpen } from 'lucide-react';

export function Epigenetics() {
  return (
    
         
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <div className="block">
        <ImageWithFallback 
          src="/images/autism/autism-causes-epigenetics.png" 
          alt="Epigenetic mechanisms in autism"
          className="w-48 h-auto float-right ml-6 mb-4 rounded-md border border-gray-300 shadow-sm"
        />
        <div className="clear-both mt-6"></div>
        <h2 className="font-bold mb-4 text-2xl font-spartan">The Epigenetic Interface</h2>
        
        <p className="mb-6 leading-relaxed font-spartan text-lg">
          Epigenetics serves as the molecular intersection where environmental stressors meet genetic susceptibility. Unlike permanent DNA mutations, these changes involve chemical tags—like <strong>DNA methylation</strong>—that dictate whether a gene is active or silenced during critical windows of brain development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Key Risk Mechanism: VPA */}
        <div className="bg-white p-5 rounded-lg border-l-4 border-red-400 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-red-500">
            <ShieldAlert size={22} />
            <h3 className="font-bold font-spartan">Valproic Acid (VPA) Exposure</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed">
            New research identifies VPA as a primary epigenetic disruptor. Prenatal exposure can induce autism-like behaviors by rapidly altering the fetal brain transcriptome and disrupting protein-coding genes like <strong>ADAM10</strong>.
          </p>
        </div>

        {/* Key Risk Mechanism: Maternal Stress */}
        <div className="bg-white p-5 rounded-lg border-l-4 border-orange-400 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-orange-500">
            <Zap size={22} />
            <h3 className="font-bold font-spartan">Prenatal Stress & Convergence</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed">
            Early-life and maternal stress are now directly linked to ASD through DNA methylation. These stressors create a "convergence" where the environment silences genes necessary for healthy neural synapse function.
          </p>
        </div>
      </div>

      <div className="bg-[#2abcd4] bg-opacity-10 p-6 rounded-lg border-2 border-dashed border-[#2abcd4] mb-10">
        <h3 className="font-bold mb-2 text-lg font-spartan flex items-center gap-2">
          <Microscope className="text-[#2abcd4]" /> Future Horizons: Reversibility
        </h3>
        <p className="text-sm leading-relaxed font-spartan">
          Because epigenetic marks are potentially reversible, researchers are investigating them as "therapeutic targets." Emerging clinical applications explore whether abnormal methylation signatures can serve as <strong>biomarkers</strong> for earlier, more objective diagnosis.
        </p>
      </div>

      {/* --- BACKGROUND SOURCES SECTION --- */}
      <div className="mt-12 pt-8 border-t border-[#2abcd4] border-opacity-30">
        <div className="flex items-center gap-2 mb-4 text-[#2abcd4]">
          <BookOpen size={20} />
          <h3 className="font-bold uppercase tracking-widest text-sm font-spartan">Background Sources</h3>
        </div>
        
        <div className="space-y-4 text-[11px] leading-snug text-[#4a6b8a] font-spartan">
          <p>Alfano, R., et al. (2025). The convergence of early-life stress and autism spectrum disorder. PubMed Central.</p>
          <p>Arca, G., et al. (2024). Intercontinental insights into ASD: A synthesis of DNA methylation and environment. Environment Epigenetics.</p>
          <p>Bhatt, D., et al. (2024). DNA methylation in ASD: Biomarker or therapeutic target? PubMed Central.</p>
          <p>Chen, Y., et al. (2025). New insights into mechanisms of valproic acid-induced ASD. Food and Chemical Toxicology.</p>
          <p>Park, J., et al. (2024). Epigenetic insights into ASD: DNA methylation in promoter regions and blood samples. Clinical Psychopharmacology and Neuroscience.</p>
          <p>Sariyer, E., et al. (2025). DNA methylation mediates the association between prenatal maternal stress and ASD. International Journal of Molecular Sciences.</p>
        </div>
      </div>
    </div>
  );
}