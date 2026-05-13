import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

/* ─── THE GUEST LIST (Interface) ─── */
interface EnvironmentalFactorsProps {
  setCurrentArticle?: (article: string) => void;
}

/* ─── MAIN COMPONENT ─── */
export function EnvironmentalFactors({ setCurrentArticle }: EnvironmentalFactorsProps) {
  return (
    <div className="bg-[#e0f7fa] p-6 rounded-lg text-[#0c264d]">
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
        Research indicates that while autism is highly heritable, these non-genetic factors—such as maternal immune responses, metabolic conditions, or exposure to certain medications in utero—can interact with a child's genetic blueprint to influence brain development.<sup className="text-[#0c264d] font-extrabold ml-0.5">2</sup>
      </p>

      <p className="mb-8 leading-relaxed text-[#0c264d]">
        <strong>Vaccines & The Immune System:</strong> It is a deeply understandable instinct for parents to worry about the "immunological load" of the vaccine schedule on a tiny infant, wondering if spacing vaccines out might be safer for a susceptible child. Because this is such a common concern, the Institute of Medicine and pediatric researchers have studied the childhood schedule extensively. Research analyzing the total "antigen load" (the immune-stimulating proteins) shows no difference between autistic and non-autistic children.<sup className="text-[#0c264d] font-extrabold ml-0.5">5</sup> The current schedule is meticulously designed to close the "window of vulnerability" to severe, life-threatening infant diseases as safely and quickly as possible. Delaying or spacing out vaccines leaves infants unprotected during their most vulnerable months, without reducing the likelihood of autism.
      </p>

      <div className="clear-both"></div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Section 1: Prenatal */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#2abcd4]">
          <h3 className="font-bold mb-3 text-lg font-spartan text-[#0c264d]">Prenatal Factors</h3>
          <p className="text-sm mb-3 text-[#0c264d] opacity-90 italic">Factors during pregnancy associated with increased risk:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm text-[#0c264d] opacity-90">
            <li><strong>Advanced parental age:</strong> Both maternal and paternal age over 35.<sup className="text-[#0c264d] font-extrabold ml-0.5">2</sup></li>
            <li><strong>Maternal infections:</strong> Severe infections, particularly in the second trimester.<sup className="text-[#0c264d] font-extrabold ml-0.5">3</sup></li>
            <li><strong>Maternal immune activation:</strong> Immune responses affecting fetal brain development.<sup className="text-[#0c264d] font-extrabold ml-0.5">3</sup></li>
            <li><strong>Certain medications:</strong> Valproic acid exposure during pregnancy.<sup className="text-[#0c264d] font-extrabold ml-0.5">4</sup></li>
            <li><strong>Prenatal nutrition:</strong> Deficiencies in nutrients like folic acid.<sup className="text-[#0c264d] font-extrabold ml-0.5">3</sup></li>
            <li><strong>Gestational diabetes:</strong> Metabolic conditions affecting development.<sup className="text-[#0c264d] font-extrabold ml-0.5">1</sup></li>
            <li><strong>Air pollution:</strong> Exposure during pregnancy and early life.<sup className="text-[#0c264d] font-extrabold ml-0.5">3</sup></li>
          </ul>
        </div>

        {/* Section 2: Neonatal */}
        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-[#ffd166]">
          <h3 className="font-bold mb-3 text-lg font-spartan text-[#0c264d]">Perinatal & Neonatal Factors</h3>
          <p className="text-sm mb-3 text-[#0c264d] opacity-90 italic">Complications around birth associated with modest risk increases:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm text-[#0c264d] opacity-90">
            <li><strong>Preterm birth:</strong> Birth before 37 weeks, especially very preterm birth.<sup className="text-[#0c264d] font-extrabold ml-0.5">1</sup></li>
            <li><strong>Low birth weight:</strong> Particularly very low birth weight infants.<sup className="text-[#0c264d] font-extrabold ml-0.5">1</sup></li>
            <li><strong>Birth complications:</strong> Significant oxygen deprivation (hypoxia).<sup className="text-[#0c264d] font-extrabold ml-0.5">3</sup></li>
            <li><strong>Multiple births:</strong> Twins/multiples have a slightly elevated risk.<sup className="text-[#0c264d] font-extrabold ml-0.5">1</sup></li>
          </ul>
        </div>
      </div>

      {/* Gene-Environment Interactions Box with Toddler Image */}
      <div className="bg-[#2abcd4] bg-opacity-20 p-6 rounded-lg border-2 border-dashed border-[#0c264d] border-opacity-30 mb-10 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="font-bold mb-2 text-lg font-spartan text-[#0c264d]">Gene-Environment Interactions</h3>
          <p className="text-sm leading-relaxed text-[#0c264d]">
            Environmental factors likely don't act alone but interact with genetic susceptibility. Genetic vulnerability may determine which environmental factors affect a child, or environmental factors may "trigger" a genetic risk in susceptible individuals.<sup className="text-[#0c264d] font-extrabold ml-0.5">2</sup>
          </p>
        </div>
        <ImageWithFallback 
          src="/images/autism/autism-causes-Envirotab-toddler-in-nature.png" 
          alt="Toddler in nature representing environmental factors"
          className="w-40 md:w-48 h-auto rounded-xl shadow-md border border-gray-200 flex-shrink-0"
        />
      </div>

      {/* ===== REFERENCES SECTION ===== */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-20 my-8" />
      
      <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-inner">
        <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES: GREEN */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-20 pb-1">
            Cited Studies & Statistics
          </h4>
          <ol className="list-decimal ml-5 text-xs space-y-3 text-[#0c264d] opacity-90 leading-relaxed">
            <li>
              Centers for Disease Control and Prevention. (2023). "Autism Spectrum Disorder (ASD): Data and Statistics." <i>CDC</i>.
            </li>
            <li>
              Bai, D., Yip, B. H., Windham, G. C., et al. (2019). "Association of genetic and environmental factors with autism in a 5-country cohort." <i>JAMA Psychiatry</i>, 76(10), 1035-1043.
            </li>
            <li>
              Modabbernia, A., Velthorst, E., & Reichenberg, A. (2017). "Environmental risk factors for autism: An evidence-based review of systematic reviews and meta-analyses." <i>Molecular Autism</i>, 8(1), 13.
            </li>
            <li>
              Lyall, K., Croen, L., Daniels, J., et al. (2017). "The changing epidemiology of autism spectrum disorders." <i>Annual Review of Public Health</i>, 38, 81-102.
            </li>
            <li>
              DeStefano, F., Price, C. S., & Weintraub, E. S. (2013). "Increasing exposure to antibody-stimulating proteins and polysaccharides in vaccines is not associated with risk of autism." <i>The Journal of Pediatrics</i>, 163(2), 561-567.
            </li>
          </ol>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-600 font-bold mb-3 border-b border-cyan-600 border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-[#0c264d] opacity-90 leading-relaxed pl-2">
            <li>
              Institute of Medicine (US) Committee on the Assessment of Studies of Health Outcomes Related to the Recommended Childhood Immunization Schedule. (2013). <i>The Childhood Immunization Schedule and Safety</i>. National Academies Press.
            </li>
            <li>
              American Psychiatric Association. (2013). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed.).
            </li>
            <li>
              Lord, C., Elsabbagh, M., Baird, G., & Veenstra-Vanderweele, J. (2018). "Autism spectrum disorder." <i>The Lancet</i>, 392(10146), 508-520.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}