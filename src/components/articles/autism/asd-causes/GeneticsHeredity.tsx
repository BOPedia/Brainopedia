import React from 'react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export function GeneticsHeredity() {
  return (
    <div className="bg-[#f0f9ff] p-6 rounded-lg text-[#0c264d]">
      <h2 className="font-bold mb-4 text-2xl">Genetic Factors</h2>
      
      <p className="mb-6 leading-relaxed">
        Genetics play a substantial role in autism, with heritability estimates ranging from 70-90%.<sup className="text-green-600 font-bold ml-0.5">[78]</sup> However, autism genetics are complex and involve many genes rather than a single "autism gene."
      </p>

      <ImageWithFallback 
        src="/images/autism/autism-causes-Geneticstab-dna.png" 
        alt="Genetic representation of autism"
        className="w-full max-w-md mx-auto mb-8 rounded-lg shadow-sm"
      />

      {/* Heritability Evidence Section */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Heritability Evidence</h3>
        <p className="text-sm mb-4">Multiple lines of evidence demonstrate the genetic basis of autism:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Twin Studies</div>
            <div className="text-sm">Identical twins have 60-90% concordance for autism, compared to 0-30% for fraternal twins.<sup className="text-green-600 font-bold ml-0.5">[79]</sup></div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3">
            <div className="font-bold text-[#0c264d] mb-1">Recurrence Risk</div>
            <div className="text-sm">Families with one autistic child have approximately a 20% chance of having another autistic child.<sup className="text-green-600 font-bold ml-0.5">[84]</sup></div>
          </div>
          <div className="border-l-2 border-[#2abcd4] pl-3 md:col-span-2">
            <div className="font-bold text-[#0c264d] mb-1">Broader Autism Phenotype</div>
            <div className="text-sm">Family members often show subclinical autistic traits even without full diagnosis.</div>
          </div>
        </div>
      </div>

      {/* Multiple Genes Involved Section */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#ffd166] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Multiple Genes Involved</h3>
        <p className="text-sm mb-4">Autism is genetically heterogeneous, meaning different genetic variations can lead to similar outcomes:</p>
        <div className="space-y-4">
          <div className="text-sm"><strong>Complex Genetic Architecture:</strong> A study of multiplex families identified 152 associated genes.<sup className="text-green-600 font-bold ml-0.5">[85]</sup></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#f0f9ff] p-3 rounded text-xs"><strong>Common Variants:</strong> Many small-effect variations common in the population.</div>
            <div className="bg-[#f0f9ff] p-3 rounded text-xs"><strong>Rare Variants:</strong> Rare mutations or CNVs with larger effects.</div>
            <div className="bg-[#f0f9ff] p-3 rounded text-xs"><strong>Gene Interactions:</strong> Multiple genes interacting to increase risk.</div>
          </div>
        </div>
      </div>

      {/* De Novo Mutations Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2abcd4] mb-6">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">De Novo Mutations in Autism</h3>
        <p className="text-sm leading-relaxed mb-6">
          <strong>De novo mutations</strong> are genetic changes that appear for the first time in a child. These spontaneous mutations occur during the formation of reproductive cells or early embryonic development.<sup className="text-green-600 font-bold ml-0.5">[81]</sup>
        </p>

        <ImageWithFallback 
          src="/images/autism/autism-causes-DNAhelixGenetics.png" 
          alt="DNA Helix illustrating spontaneous mutations"
          className="w-full max-w-sm mx-auto mb-6 rounded-lg"
        />

        <div className="bg-[#f0f9ff] p-4 rounded mb-4">
          <h4 className="font-bold text-sm mb-2">Whole Genome Sequencing Findings:</h4>
          <ul className="text-xs space-y-2">
            <li>• <strong>Simplex Families:</strong> De novo mutations contribute to 52-67% of cases.</li>
            <li>• <strong>Multiplex Families:</strong> Play a significantly smaller role than inherited factors.</li>
            <li>• <strong>Overall:</strong> Contribute to approximately 30-39% of all cases.<sup className="text-green-600 font-bold ml-0.5">[81]</sup></li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[10px]">
          <div className="p-2 border border-gray-100 rounded"><strong>Point Mutations:</strong> Single letter code changes.</div>
          <div className="p-2 border border-gray-100 rounded"><strong>CNVs:</strong> Large segment deletions/duplications.</div>
          <div className="p-2 border border-gray-100 rounded"><strong>Intronic:</strong> Targeting non-coding regions.<sup className="text-green-600 font-bold ml-0.5">[81]</sup></div>
        </div>
      </div>

      {/* Biological Pathways */}
      <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Affected Biological Pathways</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
          <div className="font-semibold p-2 bg-gray-50 rounded">Synaptic Function</div>
          <div className="font-semibold p-2 bg-gray-50 rounded">Chromatin Remodeling</div>
          <div className="font-semibold p-2 bg-gray-50 rounded">Transcriptional Regulation</div>
          <div className="font-semibold p-2 bg-gray-50 rounded">Neuronal Migration</div>
          <div className="font-semibold p-2 bg-gray-50 rounded md:col-span-2">Neurotransmitter Systems (GABA, Serotonin, etc.)</div>
        </div>
      </div>

      {/* Associated Syndromes */}
      <div className="bg-white p-5 rounded-md border-l-4 border-red-400 shadow-sm mb-6">
        <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Associated Genetic Syndromes</h3>
        <div className="space-y-4 text-sm">
          <div className="bg-red-50 p-4 rounded">
            <strong>Fragile X Syndrome (FXS):</strong> Leading inherited cause of intellectual disability. ~90% of males show autistic characteristics.<sup className="text-green-600 font-bold ml-0.5">[82]</sup>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-bold">
            <span className="px-3 py-1 bg-white border border-gray-200 rounded">Tuberous Sclerosis (25-61%)</span>
            <span className="px-3 py-1 bg-white border border-gray-200 rounded">Rett Syndrome</span>
            <span className="px-3 py-1 bg-white border border-gray-200 rounded">PTEN Mutations</span>
          </div>
        </div>
      </div>

      {/* Sex Differences Section */}
      <div className="bg-white p-5 rounded-md border-2 border-[#0c264d] mb-10 text-center">
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">♀️ ♂️ Sex Differences in Genetics</h3>
        <p className="text-sm mb-4">Ratio: approximately 3-4:1 (Males : Females)<sup className="text-green-600 font-bold ml-0.5">[80]</sup></p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-5 h-5 bg-[#2abcd4] rounded-sm"></div>
          <div className="w-5 h-5 bg-[#2abcd4] rounded-sm"></div>
          <div className="w-5 h-5 bg-[#2abcd4] rounded-sm"></div>
          <span className="font-bold text-xl px-2">:</span>
          <div className="w-5 h-5 bg-[#ffd166] rounded-sm"></div>
        </div>
        <div className="text-left text-xs space-y-1 text-gray-600">
          <p>• <strong>Female Protective Effect:</strong> Females may require higher genetic "load."</p>
          <p>• <strong>X-Linked Genes:</strong> Males only have one X chromosome.</p>
          <p>• <strong>Diagnostic Bias:</strong> Camouflaging or different presentations in females.</p>
        </div>
      </div>

{/* --- REFERENCES SECTION --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      
      <div className="bg-white bg-opacity-50 p-6 rounded-lg">
        <h3 className="font-bold mb-4 text-xl font-spartan">References</h3>
        
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-wider text-green-700 font-bold mb-3">Cited Studies & Statistics</h4>
          <ol className="list-decimal ml-5 text-xs space-y-2 text-gray-700">
            <li>Genovese, A., & Butler, M. G. (2023). "The Autism Spectrum: Behavioral, Psychiatric and Genetic Associations." Genes, 14(3), 637. PMCID: PMC10048473.</li>
            <li>Tick, B., Bolton, P., Happé, F., Rutter, M., & Rijsdijk, F. (2016). "Heritability of autism spectrum disorders: A meta-analysis of twin studies." Journal of Child Psychology and Psychiatry, 57(5), 585-595. PMCID: PMC4996332.</li>
            <li>Loomes, R., Hull, L., & Mandy, W. P. L. (2017). "What Is the Male-to-Female Ratio in Autism Spectrum Disorder? A Systematic Review and Meta-Analysis." Journal of the American Academy of Child & Adolescent Psychiatry, 56(6), 466-474.</li>
            <li>Yoon, S., et al. (2021). "Rates of contributory de novo mutation in high and low-risk autism families." Communications Biology, 4(1), 1026. PMCID: PMC8410909.</li>
            <li>Haebig, E., et al. (2020). "Rates and predictors of co-occurring autism spectrum disorder in boys with fragile X syndrome." Research in Developmental Disabilities, 107, 103783. PMCID: PMC9281610.</li>
            <li>Vignoli, A., et al. (2015). "Autism spectrum disorder in tuberous sclerosis complex: searching for risk markers." Orphanet Journal of Rare Diseases, 10, 154. PMCID: PMC4668631.</li>
            <li>Ozonoff, S., et al. (2024). "Familial recurrence of autism: Updates from the Baby Siblings Research Consortium." Pediatrics, 154(2), e2023065297. PMCID: PMC11291960.</li>
            <li>Cirnigliaro, M., et al. (2023). "The contributions of rare inherited and polygenic risk to ASD in multiplex families." Proceedings of the National Academy of Sciences, 120(31), e2215632120. PMCID: PMC10400943.</li>
          </ol>
        </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-3">Background Sources</h4>
                <ul className="list-disc ml-5 text-[14px] leading-relaxed space-y-1 text-gray-500">
                  <li>National Institute of Mental Health (NIMH) - Autism Genetics Overview</li>
                  <li>CDC - Autism Spectrum Disorder (ASD) Data and Statistics</li>
                  <li>Baby Siblings Research Consortium Database</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }