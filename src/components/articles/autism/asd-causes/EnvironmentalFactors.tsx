import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface EnvironmentalFactorsProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function EnvironmentalFactors({ setCurrentArticle }: EnvironmentalFactorsProps) {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Factors</h2>
      
      <ImageWithFallback 
        src="/images/autism/autism-causes-Envirotab-pregnant.png" 
        alt="Pregnant woman representing environmental factors"
        className="w-48 h-auto float-left mr-6 mb-4 rounded-xl shadow-md border border-gray-300"
      />
    
      <p className="mb-4 leading-relaxed text-[#0c264d]">
        When geneticists and researchers talk about the "environment" in relation to autism, they aren't just talking about trees, weather, or pollution. In developmental biology, "environmental factors" refer to any non-genetic biological influence that affects a child's development, particularly during the critical prenatal window.
      </p>

      <p className="mb-4 leading-relaxed text-[#0c264d]">
        Research indicates that while autism is highly heritable, these non-genetic factors—such as maternal immune responses, metabolic conditions, or exposure to certain medications in utero—can interact with a child's genetic blueprint to influence brain development.<sup>2</sup>
      </p>

      <p className="mb-8 leading-relaxed text-[#0c264d]">
        <strong>What does NOT cause autism:</strong> It is equally important to highlight what has been scientifically ruled out. Extensive, global research has conclusively proven that vaccines do not cause autism. Additionally, outdated psychological theories blaming parenting styles or a lack of affection have been entirely debunked.
      </p>

      <div className="clear-both"></div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Section 1: Prenatal */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-3 text-lg font-spartan text-[#0c264d]">Prenatal Factors</h3>
          <p className="text-sm mb-3 text-gray-700 italic">Factors during pregnancy associated with increased risk:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
            <li><strong>Advanced parental age:</strong> Both maternal and paternal age over 35.<sup>2</sup></li>
            <li><strong>Maternal infections:</strong> Severe infections, particularly in the second trimester.<sup>3</sup></li>
            <li><strong>Maternal immune activation:</strong> Immune responses affecting fetal brain development.<sup>3</sup></li>
            <li><strong>Certain medications:</strong> Valproic acid exposure during pregnancy.<sup>4</sup></li>
            <li><strong>Prenatal nutrition:</strong> Deficiencies in nutrients like folic acid.<sup>3</sup></li>
            <li><strong>Gestational diabetes:</strong> Metabolic conditions affecting development.<sup>1</sup></li>
            <li><strong>Air pollution:</strong> Exposure during pregnancy and early life.<sup>3</sup></li>
          </ul>
        </div>

        {/* Section 2: Neonatal */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-3 text-lg font-spartan text-[#0c264d]">Perinatal & Neonatal Factors</h3>
          <p className="text-sm mb-3 text-gray-700 italic">Complications around birth associated with modest risk increases:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700">
            <li><strong>Preterm birth:</strong> Birth before 37 weeks, especially very preterm birth.<sup>1</sup></li>
            <li><strong>Low birth weight:</strong> Particularly very low birth weight infants.<sup>1</sup></li>
            <li><strong>Birth complications:</strong> Significant oxygen deprivation (hypoxia).<sup>3</sup></li>
            <li><strong>Multiple births:</strong> Twins/multiples have a slightly elevated risk.<sup>1</sup></li>
          </ul>
        </div>
      </div>

      {/* Gene-Environment Interactions Box with Toddler Image */}
      <div className="bg-[#2abcd4] bg-opacity-10 p-6 rounded-lg border-2 border-dashed border-[#2abcd4] mb-10 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">Gene-Environment Interactions</h3>
          <p className="text-sm leading-relaxed text-gray-700">
            Environmental factors likely don't act alone but interact with genetic susceptibility. Genetic vulnerability may determine which environmental factors affect a child, or environmental factors may "trigger" a genetic risk in susceptible individuals.<sup>2</sup>
          </p>
        </div>
        <ImageWithFallback 
          src="/images/autism/autism-causes-Envirotab-toddler-in-nature.png" 
          alt="Toddler in nature representing environmental factors"
          className="w-40 md:w-48 h-auto rounded-xl shadow-md border border-gray-200 flex-shrink-0"
        />
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
            <li></li>