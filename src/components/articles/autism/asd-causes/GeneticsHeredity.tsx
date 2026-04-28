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

      {/* --- REFERENCES --- */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8" />
      <div className="text-[14px] text-gray-500 space-y-1">
        <p>[78] Genovese & Butler (2023). [79] Tick et al. (2016). [80] Loomes et al. (2017). [81] Yoon et al. (2021). [82] Haebig et al. (2020). [83] Vignoli et al. (2015). [84] Ozonoff et al. (2024). [85] Cirnigliaro et al. (2023).</p>
      </div>
    </div>
  );
}