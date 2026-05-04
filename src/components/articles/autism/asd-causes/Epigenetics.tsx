import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Microscope, Zap, Brain, ShieldAlert, BookOpen } from 'lucide-react';

interface EpigeneticsProps {
  setCurrentArticle?: (article: string) => void;
}

export function Epigenetics({ setCurrentArticle }: EpigeneticsProps) {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* --- INTRO SECTION WITH FLOATING GRAPHIC --- */}
      <div className="bg-[#f0f9ff] p-8 rounded-xl text-[#0c264d] border border-[#0c264d]/5 mb-8 shadow-sm overflow-hidden">
        {/* The Graphic: Floated right on medium screens and up */}
        <div className="md:float-right md:ml-8 mb-6 md:mb-2 w-full md:w-64 text-center">
          <p className="text-[#0c264d]/80 mb-3 italic font-medium text-xs">
            Visualizing the molecular "switches" of gene expression
          </p>
          <div className="mx-auto border border-[#0c264d]/10 rounded-lg shadow-sm bg-white p-1">
            <ImageWithFallback 
              src="/images/autism/autism-causes-epigenetics.png" 
              alt="Epigenetic mechanisms in autism"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <h2 className="font-bold mb-4 text-3xl font-spartan">The Epigenetic Interface</h2>
        <p className="leading-relaxed font-spartan text-lg">
          Epigenetics serves as the molecular intersection where environmental stressors meet genetic susceptibility. Unlike permanent DNA mutations, these changes involve chemical tags—like <strong>DNA methylation</strong>—that dictate whether a gene is active or silenced during critical windows of brain development.
        </p>
      </div>

      {/* --- KEY RISK MECHANISMS GRID (Clears the float above) --- */}
      <div className="grid md:grid-cols-2 gap-6 mb-10 clear-both">
        <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-red-500">
            <ShieldAlert size={22} />
            <h3 className="font-bold font-spartan text-lg">Valproic Acid (VPA) Exposure</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed text-gray-700">
            New research identifies VPA as a primary epigenetic disruptor. Prenatal exposure can induce autism-like behaviors by rapidly altering the fetal brain transcriptome and disrupting protein-coding genes like <strong>ADAM10</strong>.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-orange-400 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-orange-500">
            <Zap size={22} />
            <h3 className="font-bold font-spartan text-lg">Prenatal Stress & Convergence</h3>
          </div>
          <p className="text-sm font-spartan leading-relaxed text-gray-700">
            Early-life and maternal stress are now directly linked to ASD through DNA methylation. These stressors create a "convergence" where the environment silences genes necessary for healthy neural synapse function.
          </p>
        </div>
      </div>

      {/* --- REVERSIBILITY SECTION --- */}
      <div className="bg-white p-8 rounded-xl border-2 border-dashed border-[#2abcd4] mb-12 shadow-sm">
        <h3 className="font-bold mb-4 text-xl font-spartan flex items-center gap-3 text-[#0c264d]">
          <Microscope className="text-[#2abcd4]" size={28} /> 
          Future Horizons: Reversibility
        </h3>
        <p className="text-md leading-relaxed font-spartan text-gray-700">
          Because epigenetic marks are potentially reversible, researchers are investigating them as "therapeutic targets." Emerging clinical applications explore whether abnormal methylation signatures can serve as <strong>biomarkers</strong> for earlier, more objective diagnosis.
        </p>
      </div>

      {/* --- NAVIGATION BUTTON --- */}
      <div className="mb-12">
        <button 
          onClick={() => setCurrentArticle?.('autism-causes')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-sm"
        >
          <span className="text-xl">←</span> Return to Causes & Risk Factors
        </button>
      </div>

      {/* --- REFERENCES SECTION (Standardized) --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg">
        <h3 className="font-bold mb-4 text-xl font-spartan text-[#0c264d]">References</h3>
        
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-green-500 font-bold mb-3">Cited Studies & Statistics</h4>
          <ol className="list-decimal ml-5 text-xs space-y-2 text-navy-800 font-spartan">
            <li>Sariyer, E., et al. (2025). "DNA methylation mediates the association between prenatal maternal stress and ASD." International Journal of Molecular Sciences.</li>
            <li>Alfano, R., et al. (2025). "The convergence of early-life stress and autism spectrum disorder." PubMed Central.</li>
            <li>Chen, Y., et al. (2025). "New insights into mechanisms of valproic acid-induced ASD." Food and Chemical Toxicology.</li>
            <li>Bhatt, D., et al. (2024). "DNA methylation in ASD: Biomarker or therapeutic target?" PubMed Central.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-cyan-500 font-bold mb-3">Background Sources</h4>
          <ul className="list-disc ml-5 text-[14px] font-spartan leading-relaxed space-y-1 text-navy-800">
            <li>Arca, G., et al. (2024). "Intercontinental insights into ASD: A synthesis of DNA methylation and environment." Environment Epigenetics.</li>
            <li>Park, J., et al. (2024). "Epigenetic insights into ASD: DNA methylation in promoter regions and blood samples." Clinical Psychopharmacology and Neuroscience.</li>
            <li>Lord, C., et al. (2018). "Autism spectrum disorder." The Lancet, 392(10146), 508-520.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}