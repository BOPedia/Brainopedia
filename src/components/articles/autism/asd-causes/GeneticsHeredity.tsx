import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Microscope, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function GeneticsHeredity({ setCurrentArticle }: { setCurrentArticle?: (id: string) => void }) {
  return (
    <div className="bg-[#e0f7fa] p-6 rounded-lg text-[#0c264d]">
      <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
      
      <p className="mb-6 leading-relaxed text-[#0c264d]">
        Genetics play a substantial role in autism, with heritability estimates ranging from 70-90%.<sup className="text-green-600 font-bold ml-0.5">1</sup> However, autism genetics are extraordinarily complex and involve many different genes rather than a single "autism gene."
      </p>

      <ImageWithFallback 
        src="/images/autism/autism-causes-Geneticstab-dna.png" 
        alt="Genetic representation of autism"
        className="w-full max-w-md mx-auto mb-8 rounded-xl shadow-md border border-gray-200"
      />

      {/* Heritability Evidence Section */}
      <div className="bg-white p-6 rounded-xl border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg font-spartan">Heritability Evidence</h3>
        <p className="text-sm mb-4 text-gray-700">Multiple lines of evidence demonstrate the genetic basis of autism:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">Twin Studies</div>
            <div className="text-sm text-gray-700">Identical twins have 60-90% concordance for autism, compared to 0-30% for fraternal twins.<sup className="text-green-600 font-bold ml-0.5">2</sup></div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-4">
            <div className="font-bold text-[#0c264d] mb-1">Recurrence Risk</div>
            <div className="text-sm text-gray-700">Families with one autistic child have approximately a 20% chance of having another autistic child.<sup className="text-green-600 font-bold ml-0.5">7</sup></div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-4 md:col-span-2">
            <div className="font-bold text-[#0c264d] mb-1">Broader Autism Phenotype</div>
            <div className="text-sm text-gray-700">Family members often show subclinical autistic traits even without a full diagnosis.</div>
          </div>
        </div>
      </div>

      {/* Polygenic Video Hero */}
      <div className="block mx-auto w-full max-w-3xl mb-8 rounded-lg shadow-sm overflow-hidden bg-white border border-gray-100 p-2">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/images/autism/autism-causes-genetics-polygenic.png"
          className="w-full h-auto object-contain rounded-md"
          aria-label="Animation illustrating multiple genes involved in autism"
        >
          <source 
            src="/images/autism/autism-causes-genetics-polygenic.mp4" 
            type="video/mp4" 
          />
          {/* Fallback image for older browsers or failed video loads */}
          <img 
            src="/images/autism/autism-causes-genetics-polygenic.png" 
            alt="Multiple genes involved in autism"
            className="w-full h-auto object-contain rounded-md"
          />
        </video>
      </div>

      {/* Polygenic & Epigenetic Blurb Section */}
      <div className="bg-white p-6 rounded-xl border-l-4 border-[#2abcd4] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg font-spartan">The Polygenic & Epigenetic Reality</h3>
        <p className="text-sm leading-relaxed mb-6 text-gray-700">
          Autism is highly <strong>polygenic</strong>, meaning it rarely stems from a single genetic mutation. Instead, it typically arises from the combined effects of thousands of common genetic variants scattered across the genome. While each variant individually contributes a tiny fraction to the overall likelihood, their cumulative effect creates the foundation for autism.<sup className="text-green-600 font-bold ml-0.5">8</sup> 
        </p>

        {/* Soundboard Analogy Callout */}
        <div className="bg-[#f0f9ff] p-5 rounded-lg border border-[#2abcd4] border-opacity-30 mb-6">
          <h4 className="font-bold text-[#0c264d] mb-3">The Soundboard Analogy</h4>
          <p className="text-sm leading-relaxed mb-5 text-gray-700">
            To understand what polygenic means, it helps to compare it to how we traditionally learn about genetics. Many genetic conditions are caused by a single mutation—like flipping an <strong>on/off light switch</strong>. Polygenic inheritance is completely different; it operates like a massive <strong>audio mixing board</strong> with thousands of tiny sliders.
          </p>
          
          <ImageWithFallback 
            src="/images/autism/autism-causes-genetics-soundboard.png"
            alt="Light switch versus audio soundboard analogy for genetics"
            className="w-full max-w-md mx-auto mb-5 rounded-lg shadow-sm border border-gray-200"
          />

          <p className="text-sm leading-relaxed text-gray-700">
            Pushing just one slider up a fraction of a millimeter doesn't change the song, which is why everyone carries some of these genetic variants. However, if you adjust thousands of specific sliders at once, you completely alter the acoustics, the bass, and the final sound of the track. In autism, it is the cumulative "load" of these thousands of tiny variations that shapes neurodevelopment.
          </p>
        </div>

        <p className="text-sm leading-relaxed mb-4 text-gray-700">
          However, DNA is not destiny. Environmental factors constantly interact with this genetic predisposition through a mechanism called <strong>epigenetics</strong>. Epigenetic processes act like molecular switches that can physically turn specific genes on or off based on environmental exposures (such as maternal stress, nutrition, or environmental toxins) without ever altering the underlying DNA sequence itself.<sup className="text-green-600 font-bold ml-0.5">9</sup>
        </p>
        <div 
          className="bg-[#ffd166] bg-opacity-20 p-4 rounded-lg text-sm text-[#0c264d] font-semibold flex items-center gap-3 cursor-pointer hover:bg-opacity-40 transition-colors"
          onClick={() => setCurrentArticle?.('autism-epigenetics')}
        >
          <div className="bg-white p-1 rounded-full shadow-sm flex-shrink-0"><ArrowRight size={16} className="text-[#0c264d]" /></div>
          Scroll down to the deep-dive at the bottom of this page to see exactly how epigenetics bridge the gap between environment and genetics!
        </div>
      </div>

      {/* Multiple Genes Involved Section */}
      <div className="bg-white p-6 rounded-xl border-l-4 border-[#ffd166] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg font-spartan">Genetic Architecture</h3>
        <p className="text-sm mb-4 text-gray-700">Because autism is genetically heterogeneous, different genetic variations can lead to similar outcomes:</p>
        <div className="space-y-4">
          <div className="text-sm text-gray-700"><strong>Complex Architecture:</strong> A massive study of multiplex families identified 152 distinct associated genes.<sup className="text-green-600 font-bold ml-0.5">8</sup></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#e0f7fa] bg-opacity-50 p-3 rounded text-xs text-[#0c264d]"><strong>Common Variants:</strong> Many small-effect variations common in the general population.</div>
            <div className="bg-[#e0f7fa] bg-opacity-50 p-3 rounded text-xs text-[#0c264d]"><strong>Rare Variants:</strong> Rare mutations or CNVs with much larger neurological effects.</div>
            <div className="bg-[#e0f7fa] bg-opacity-50 p-3 rounded text-xs text-[#0c264d]"><strong>Gene Interactions:</strong> Multiple genes interacting simultaneously to increase likelihood.</div>
          </div>
        </div>
      </div>

      {/* De Novo Mutations Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#2abcd4] mb-6">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg font-spartan">De Novo Mutations in Autism</h3>
        <p className="text-sm leading-relaxed mb-6 text-gray-700">
          <strong>De novo mutations</strong> are genetic changes that appear for the very first time in a child. These spontaneous mutations occur during the formation of reproductive cells or early embryonic development.<sup className="text-green-600 font-bold ml-0.5">4</sup>
        </p>

        <ImageWithFallback 
          src="/images/autism/autism-causes-DNAhelixGenetics.png" 
          alt="DNA Helix illustrating spontaneous mutations"
          className="w-full max-w-sm mx-auto mb-6 rounded-xl shadow-sm"
        />

        <div className="bg-[#e0f7fa] bg-opacity-50 p-4 rounded-lg mb-4 border border-[#2abcd4] border-opacity-20">
          <h4 className="font-bold text-sm mb-2 text-[#0c264d]">Whole Genome Sequencing Findings:</h4>
          <ul className="text-xs space-y-2 text-[#0c264d]">
            <li>• <strong>Simplex Families:</strong> De novo mutations contribute to 52-67% of cases.</li>
            <li>• <strong>Multiplex Families:</strong> Play a significantly smaller role than inherited factors.</li>
            <li>• <strong>Overall:</strong> Contribute to approximately 30-39% of all cases.<sup className="text-green-600 font-bold ml-0.5">4</sup></li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[14px]">
          <div className="p-3 border border-gray-100 rounded-lg text-sm text-gray-700 shadow-sm"><strong>Point Mutations:</strong> Single letter code changes.</div>
          <div className="p-3 border border-gray-100 rounded-lg text-sm text-gray-700 shadow-sm"><strong>CNVs:</strong> Large segment deletions or duplications.</div>
          <div className="p-3 border border-gray-100 rounded-lg text-sm text-gray-700 shadow-sm"><strong>Intronic:</strong> Targeting non-coding regions.<sup className="text-green-600 font-bold ml-0.5">4</sup></div>
        </div>
      </div>

      {/* Biological Pathways & Associated Syndromes */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        
        {/* Biological Pathways */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-[#0c264d] shadow-sm flex flex-col">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg font-spartan">Affected Pathways</h3>
          <div className="flex flex-col gap-3 text-sm flex-grow">
            <div className="font-semibold p-3 bg-gray-50 rounded border border-gray-100 text-gray-700">Synaptic Function</div>
            <div className="font-semibold p-3 bg-gray-50 rounded border border-gray-100 text-gray-700">Chromatin Remodeling</div>
            <div className="font-semibold p-3 bg-gray-50 rounded border border-gray-100 text-gray-700">Transcriptional Regulation</div>
            <div className="font-semibold p-3 bg-gray-50 rounded border border-gray-100 text-gray-700">Neuronal Migration</div>
            <div className="font-semibold p-3 bg-gray-50 rounded border border-gray-100 text-gray-700">Neurotransmitter Systems</div>
          </div>
        </div>

        {/* Associated Syndromes */}
        <div className="bg-white p-6 rounded-xl border-t-4 border-red-400 shadow-sm flex flex-col">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg font-spartan">Associated Syndromes</h3>
          <div className="space-y-4 text-sm flex-grow">
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <strong className="text-red-900">Fragile X Syndrome (FXS):</strong> Leading inherited cause of intellectual disability. ~90% of males show autistic characteristics.<sup className="text-green-600 font-bold ml-0.5">5</sup>
            </div>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <span className="px-4 py-2 bg-white border border-gray-200 rounded shadow-sm text-gray-700 text-center">Tuberous Sclerosis (25-61%)</span>
              <span className="px-4 py-2 bg-white border border-gray-200 rounded shadow-sm text-gray-700 text-center">Rett Syndrome</span>
              <span className="px-4 py-2 bg-white border border-gray-200 rounded shadow-sm text-gray-700 text-center">PTEN Mutations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sex Differences Section */}
      <div className="bg-white p-6 rounded-xl border-2 border-[#0c264d] mb-10 text-center shadow-sm">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg font-spartan">♀️ ♂️ Sex Differences in Genetics</h3>
        <p className="text-sm mb-4 text-gray-700">Ratio: approximately 3-4:1 (Males : Females)<sup className="text-green-600 font-bold ml-0.5">3</sup></p>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 bg-[#2abcd4] rounded-sm shadow-sm"></div>
          <div className="w-6 h-6 bg-[#2abcd4] rounded-sm shadow-sm"></div>
          <div className="w-6 h-6 bg-[#2abcd4] rounded-sm shadow-sm"></div>
          <span className="font-bold text-2xl px-2 text-[#0c264d]">:</span>
          <div className="w-6 h-6 bg-[#ffd166] rounded-sm shadow-sm"></div>
        </div>
        <div className="text-left text-sm space-y-3 text-gray-700 max-w-md mx-auto">
          <p>• <strong>Female Protective Effect:</strong> Females may require a higher genetic "load" or mutation threshold.</p>
          <p>• <strong>X-Linked Genes:</strong> Males only have one X chromosome, making them more vulnerable to X-linked mutations.</p>
          <p>• <strong>Diagnostic Bias:</strong> Camouflaging or different presentations frequently obscure female diagnosis.</p>
        </div>
      </div>

      {/* EPIGENETICS DEEP DIVE CARD */}
      <div 
        className="mt-10 p-6 bg-white border-2 border-dashed border-[#0c264d] border-opacity-50 rounded-xl flex items-center justify-between group hover:border-opacity-100 transition-all cursor-pointer shadow-sm"
        onClick={() => setCurrentArticle?.('autism-epigenetics')}
      >
        <div className="flex gap-4 items-center">
          <div className="bg-[#2abcd4] bg-opacity-20 p-4 rounded-full">
            <Microscope size={32} className="text-[#0c264d]" /> 
          </div>
          <div>
            <h4 className="font-bold font-spartan text-[#0c264d] text-lg">Deep Dive: The Epigenetic Interface</h4>
            <p className="text-sm font-spartan font-normal text-gray-600 mt-1">
              Explore how the environment switches these genetic markers on or off.
            </p>
          </div>
        </div>
        <div className="bg-[#0c264d] text-white p-3 rounded-full group-hover:bg-[#2abcd4] transition-colors shadow-md">
          <ArrowRight size={24} />
        </div>
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
          <div className="text-xs space-y-3 text-[#0c264d] opacity-90 leading-relaxed" style={{ textIndent: 0 }}>
            <p>
              1. Genovese, A., & Butler, M. G. (2023). "The Autism Spectrum: Behavioral, Psychiatric and Genetic Associations." <i>Genes</i>, 14(3), 637. (PMCID: PMC10048473).
            </p>
            <p>
              2. Tick, B., Bolton, P., Happé, F., Rutter, M., & Rijsdijk, F. (2016). "Heritability of autism spectrum disorders: A meta-analysis of twin studies." <i>Journal of Child Psychology and Psychiatry</i>, 57(5), 585-595. (PMCID: PMC4996332).
            </p>
            <p>
              3. Loomes, R., Hull, L., & Mandy, W. P. L. (2017). "What Is the Male-to-Female Ratio in Autism Spectrum Disorder? A Systematic Review and Meta-Analysis." <i>Journal of the American Academy of Child & Adolescent Psychiatry</i>, 56(6), 466-474.
            </p>
            <p>
              4. Yoon, S., et al. (2021). "Rates of contributory de novo mutation in high and low-risk autism families." <i>Communications Biology</i>, 4(1), 1026. (PMCID: PMC8410909).
            </p>
            <p>
              5. Haebig, E., et al. (2020). "Rates and predictors of co-occurring autism spectrum disorder in boys with fragile X syndrome." <i>Research in Developmental Disabilities</i>, 107, 103783. (PMCID: PMC9281610).
            </p>
            <p>
              6. Vignoli, A., et al. (2015). "Autism spectrum disorder in tuberous sclerosis complex: searching for risk markers." <i>Orphanet Journal of Rare Diseases</i>, 10, 154. (PMCID: PMC4668631).
            </p>
            <p>
              7. Ozonoff, S., et al. (2024). "Familial recurrence of autism: Updates from the Baby Siblings Research Consortium." <i>Pediatrics</i>, 154(2), e2023065297. (PMCID: PMC11291960).
            </p>
            <p>
              8. Cirnigliaro, M., et al. (2023). "The contributions of rare inherited and polygenic risk to ASD in multiplex families." <i>Proceedings of the National Academy of Sciences</i>, 120(31), e2215632120. (PMCID: PMC10400943).
            </p>
            <p>
              9. Loke, Y. J., Hannan, A. J., & Craig, J. M. (2015). "The Role of Epigenetics in Autism Spectrum Disorders." <i>Neural Plasticity</i>, 2015, 502812. (PMCID: PMC4538466).
            </p>
          </div>
        </div>

        {/* BACKGROUND SOURCES: CYAN */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-20 pb-1">
            Background Sources
          </h4>
          <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0" style={{ textIndent: 0 }}>
            <li>
              National Institute of Mental Health (NIMH) - <i>Autism Genetics Overview</i>.
            </li>
            <li>
              Centers for Disease Control and Prevention (CDC) - <i>Autism Spectrum Disorder (ASD) Data and Statistics</i>.
            </li>
            <li>
              Baby Siblings Research Consortium Database.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}