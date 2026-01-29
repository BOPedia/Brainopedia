import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';
import { ASDReferences } from './ASDReferences';

interface ASDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

type TabType = 'genetics' | 'environmental' | 'brain' | 'myths' | 'research';

export function ASDCauses({ setCurrentArticle }: ASDCausesProps) {
  const [activeTab, setActiveTab] = useState<TabType>('environmental');

  const tabs = [
    { id: 'environmental' as TabType, label: 'Environmental Factors' },
    { id: 'brain' as TabType, label: 'Brain Development' },
    { id: 'myths' as TabType, label: 'Myths & Misconceptions' },
    { id: 'genetics' as TabType, label: 'Genetics & Heredity' },
    { id: 'research' as TabType, label: 'Current Research' },
  ];

  function renderTabContent(tab: TabType) {
    switch (tab) {
      case 'genetics':
        return <GeneticsContent />;
      case 'environmental':
        return <EnvironmentalContent />;
      case 'brain':
        return <BrainContent />;
      case 'myths':
        return <MythsContent />;
      case 'research':
        return <ResearchContent />;
      default:
        return null;
    }
  }

  function GeneticsContent() {
    return (
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Factors</h2>
        
        <p className="mb-6">
          Genetics play a substantial role in autism, with heritability estimates ranging from 70-90%.<sup>[78]</sup> 
          However, autism genetics are complex and involve many genes rather than a single "autism gene."
        </p>

        <div className="flex justify-center mb-6">
          <img 
            src={geneticsImage} 
            alt="DNA helix representing genetic factors in autism"
            className="w-full max-w-3xl h-auto rounded-md"
          />
        </div>

        {/* Heritability Evidence */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Heritability Evidence</h3>
          <p className="mb-4 text-sm">
            Multiple lines of evidence demonstrate the genetic basis of autism:
          </p>
          
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Twin Studies</div>
                <div className="text-sm">Identical twins have 60-90% concordance for autism, compared to 0-30% for fraternal twins<sup>[79]</sup></div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Recurrence Risk</div>
                <div className="text-sm">Families with one autistic child have approximately a 20% chance of having another autistic child<sup>[84]</sup></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Broader Autism Phenotype</div>
                <div className="text-sm">Family members often show subclinical autistic traits even without full diagnosis</div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Genes Involved */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Multiple Genes Involved</h3>
          <p className="mb-4 text-sm">
            Autism is genetically heterogeneous, meaning different genetic variations can lead to similar outcomes:
          </p>
          
          <div className="space-y-3">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Complex Genetic Architecture</div>
              <div className="text-sm">A comprehensive whole-genome sequencing study of multiplex families identified 152 genes associated with autism risk when combined with other studies<sup>[85]</sup></div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Common Variants</div>
              <div className="text-sm">Many small-effect genetic variations that are common in the population</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Rare Variants</div>
              <div className="text-sm">Rare genetic mutations or copy number variations (CNVs) with larger effects</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1">Gene Interactions</div>
              <div className="text-sm">Multiple genes interacting together to increase autism risk</div>
            </div>
          </div>
        </div>

        {/* De Novo Mutations - Detailed Section */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">De Novo Mutations in Autism</h3>
          <p className="mb-4 text-sm">
            <strong>De novo mutations</strong> are genetic changes that appear for the first time in a child and are not inherited 
            from either parent. These spontaneous mutations occur during the formation of reproductive cells or early embryonic development. 
            Research shows that de novo mutations play a significant role in autism, particularly in families with no previous history of autism.<sup>[81]</sup>
          </p>

          <div className="bg-[#f0f9ff] p-4 rounded-md mb-4">
            <h4 className="font-bold text-[#0c264d] mb-2 text-base">Key Findings from Whole Genome Sequencing Research</h4>
            <p className="text-sm mb-3">
              A comprehensive study using whole genome sequencing (WGS) examined both simplex families (only one child with autism) 
              and multiplex families (multiple children with autism) to understand how often de novo mutations contribute to autism:<sup>[81]</sup>
            </p>
            
            <div className="space-y-3">
              <div className="border-l-2 border-[#2abcd4] pl-3 bg-white p-2 rounded">
                <div className="font-bold text-[#0c264d] mb-1">Low-Risk Families (Simplex)</div>
                <div className="text-sm">De novo mutations contribute to <strong>52-67% of autism cases</strong> in families with no prior autism history</div>
              </div>
              
              <div className="border-l-2 border-[#ffd166] pl-3 bg-white p-2 rounded">
                <div className="font-bold text-[#0c264d] mb-1">High-Risk Families (Multiplex)</div>
                <div className="text-sm">De novo mutations play a <strong>significantly smaller role</strong> in families with multiple autistic children, 
                suggesting inherited genetic factors are more important in these families</div>
              </div>
              
              <div className="border-l-2 border-[#2abcd4] pl-3 bg-white p-2 rounded">
                <div className="font-bold text-[#0c264d] mb-1">Overall Population</div>
                <div className="text-sm">Across all autism cases, de novo mutations contribute to approximately <strong>30-39% of cases</strong></div>
              </div>
            </div>
          </div>

          <h4 className="font-bold text-[#0c264d] mb-2 text-base">Types of De Novo Mutations</h4>
          <div className="space-y-2 mb-4">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1 text-sm">Point Mutations (SNVs)</div>
              <div className="text-sm">Single letter changes in the DNA code, affecting individual genes</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1 text-sm">Copy Number Variations (CNVs)</div>
              <div className="text-sm">Deletions or duplications of larger DNA segments</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="font-bold text-[#0c264d] mb-1 text-sm">Intronic Mutations</div>
              <div className="text-sm">Recent research shows excess de novo events targeting introns (non-coding gene regions), 
              not just coding regions, expanding our understanding beyond traditional gene studies<sup>[81]</sup></div>
            </div>
          </div>

          <div className="bg-[#ffd166] border-l-4 border-[#0c264d] p-3 rounded text-sm">
            <p className="mb-2">
              <strong>Why This Matters:</strong> Understanding de novo mutations helps explain why autism can appear in families 
              with no history of the condition. It also shows that autism arises through multiple genetic pathways—some families 
              have inherited risk factors passed down through generations, while others develop autism through spontaneous new mutations.
            </p>
            <p className="mb-0">
              This research used advanced whole genome sequencing rather than older methods, providing a more complete picture 
              that includes non-coding regions of the genome previously overlooked in earlier studies.
            </p>
          </div>
        </div>

        {/* Affected Biological Pathways */}
        <div className="bg-white p-5 rounded-md border-l-4 border-[#0c264d] shadow-sm mb-6">
          <h3 className="text-[#0c264d] font-bold mb-4 text-lg">Affected Biological Pathways</h3>
          <p className="mb-4 text-sm">
            Autism-associated genes affect several key developmental processes:
          </p>
          
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Synaptic Function</div>
                <div className="text-sm">Genes affecting how neurons communicate at synapses</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Chromatin Remodeling</div>
                <div className="text-sm">Genes regulating how DNA is packaged and which genes are expressed</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Transcriptional Regulation</div>
                <div className="text-sm">Genes controlling the expression of other genes</div>
              </div>
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Neuronal Migration</div>
                <div className="text-sm">Genes affecting how neurons move to their correct positions during development</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="border-l-2 border-[#2abcd4] pl-3">
                <div className="font-bold text-[#0c264d] mb-1">Neurotransmitter Systems</div>
                <div className="text-sm">Genes affecting GABA, glutamate, serotonin, and other neurotransmitter systems</div>
              </div>
            </div>
          </div>
        </div>

        {/* Associated Genetic Syndromes */}
        <div className="bg-white p-5 rounded-md border-2 border-[#0c264d] mb-4">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Associated Genetic Syndromes</h3>
          <p className="mb-3 text-sm">
            Some genetic syndromes have high rates of autism:
          </p>
          
          <div className="space-y-3">
            {/* Fragile X Syndrome - Expanded */}
            <div className="bg-[#f0f9ff] p-4 rounded-md">
              <div className="font-bold text-[#0c264d] mb-2 text-base">Fragile X Syndrome (FXS)</div>
              <p className="text-sm mb-3">
                <strong>Fragile X Syndrome is the leading inherited cause of intellectual disability</strong> and shows 
                exceptionally high overlap with autism.<sup>[82]</sup> FXS is caused by a CGG trinucleotide expansion in the 
                FMR1 gene on the X chromosome.
              </p>
              
              <div className="mb-3">
                <div className="font-bold text-[#0c264d] mb-1 text-sm">Co-Occurring Autism Rates:</div>
                <p className="text-sm mb-2">
                  Research indicates that <strong>approximately 90% of males with FXS demonstrate characteristics of autism spectrum disorder</strong>, 
                  such as hand flapping, poor eye contact, repetitive behaviors, and restricted interests.<sup>[82]</sup>
                </p>
                <p className="text-sm mb-2">
                  However, formal co-diagnosis rates vary significantly (20-75%) depending on the assessment tool used:<sup>[82]</sup>
                </p>
                <ul className="text-sm ml-4 space-y-1">
                  <li>• <strong>ADOS (Autism Diagnostic Observation Schedule):</strong> ~97% meet criteria</li>
                  <li>• <strong>ADI-R (Autism Diagnostic Interview-Revised):</strong> ~91% meet criteria</li>
                  <li>• <strong>CARS-2 (Childhood Autism Rating Scale):</strong> ~52% meet criteria</li>
                  <li>• <strong>Combined assessment:</strong> ~48% meet criteria on all three measures</li>
                  <li>• <strong>Importantly:</strong> 100% met criteria on at least one measure</li>
                </ul>
              </div>

              <div className="bg-white border-l-2 border-[#ffd166] pl-3 py-2 rounded text-sm">
                <p className="mb-2">
                  <strong>Why the variation?</strong> The different assessment tools may emphasize different behavioral features. 
                  While almost all boys with FXS show some autistic characteristics, debate continues about whether these reflect 
                  the same underlying mechanisms as idiopathic (non-syndromic) autism or represent a distinct "syndromic autism" profile.
                </p>
                <p className="mb-0">
                  <strong>Language connection:</strong> Research shows that expressive language abilities, particularly expressive vocabulary, 
                  are strongly associated with autism symptom severity in boys with FXS.<sup>[82]</sup>
                </p>
              </div>
            </div>

            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="text-sm"><strong>Tuberous Sclerosis:</strong> 25-61% have autism<sup>[83]</sup></div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="text-sm"><strong>Rett Syndrome:</strong> Previously considered part of autism spectrum</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="text-sm"><strong>PTEN Mutations:</strong> Associated with macrocephaly and autism</div>
            </div>
          </div>
        </div>

        {/* Gender Differences in Genetics */}
        <div className="bg-white p-5 rounded-md border-2 border-[#0c264d] mb-4">
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">♀️ ♂️ Sex Differences in Genetics</h3>
          <p className="mb-3 text-sm">
            Autism is diagnosed more frequently in males than females, with research indicating a ratio of approximately 
            <strong> 3-4:1</strong>.<sup>[80]</sup> This sex difference may have genetic underpinnings:
          </p>
          
          {/* Visual Gender Ratio Chart */}
          <div className="bg-[#f0f9ff] rounded-md p-4 mt-4 mb-4">
            <div className="text-center mb-3">
              <div className="text-lg font-bold text-[#0c264d]">Diagnostic Gender Ratio</div>
              <div className="text-sm text-gray-600 mb-3">(Loomes et al., 2017 Meta-Analysis)</div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <div className="flex gap-1 mb-2">
                  <div className="w-8 h-8 bg-[#2abcd4] rounded"></div>
                  <div className="w-8 h-8 bg-[#2abcd4] rounded"></div>
                  <div className="w-8 h-8 bg-[#2abcd4] rounded"></div>
                </div>
                <div className="text-sm font-bold text-[#0c264d]">Males</div>
              </div>
              <div className="text-2xl text-gray-400">:</div>
              <div className="text-center">
                <div className="flex gap-1 mb-2">
                  <div className="w-8 h-8 bg-[#ffd166] rounded"></div>
                </div>
                <div className="text-sm font-bold text-[#0c264d]">Females</div>
              </div>
            </div>
            <div className="text-center mt-2 text-sm text-gray-600">3:1 ratio (closer to 3.3:1)</div>
          </div>

          <p className="mb-3 text-sm">
            <strong>Possible genetic explanations:</strong>
          </p>
          
          <div className="space-y-2">
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="text-sm"><strong>Female Protective Effect:</strong> Females may require a higher genetic "load" to develop autism, potentially due to biological differences in brain development</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="text-sm"><strong>X-Linked Genes:</strong> Some autism risk genes are located on the X chromosome; males have only one X chromosome while females have two</div>
            </div>
            <div className="border-l-2 border-[#2abcd4] pl-3">
              <div className="text-sm"><strong>Diagnostic Bias:</strong> However, this ratio likely also reflects diagnostic bias—females may be underdiagnosed because they often present differently or "camouflage" symptoms more effectively</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function EnvironmentalContent() {
    return (
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental Factors</h2>
        
        <img 
          src={environmentalImage} 
          alt="Environmental factors in autism development"
          className="w-80 h-auto rounded-md float-left mr-6 mb-4"
        />
        
        <p className="mb-4">
          While genetics are crucial, environmental factors—particularly during pregnancy and early development—also 
          contribute to autism risk. "Environmental" refers to non-genetic factors, not just pollution 
          or toxins.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal Factors</h3>
        <p className="mb-4">
          Several factors during pregnancy are associated with increased autism risk:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Advanced parental age:</strong> Both maternal and paternal age over 35 associated with slightly increased risk</li>
          <li className="mb-2"><strong>Maternal infections:</strong> Severe infections during pregnancy, particularly in second trimester</li>
          <li className="mb-2"><strong>Maternal immune activation:</strong> Maternal immune system response during pregnancy affecting fetal brain development</li>
          <li className="mb-2"><strong>Certain medications:</strong> Valproic acid exposure during pregnancy associated with increased autism risk</li>
          <li className="mb-2"><strong>Prenatal nutrition:</strong> Deficiencies in certain nutrients like folic acid may play a role</li>
          <li className="mb-2"><strong>Gestational diabetes:</strong> Maternal metabolic conditions affecting fetal development</li>
          <li className="mb-2"><strong>Air pollution:</strong> Exposure to certain air pollutants during pregnancy and early life</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Perinatal and Neonatal Factors</h3>
        <p className="mb-4">
          Complications around birth are associated with modest increases in autism risk:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Preterm birth:</strong> Birth before 37 weeks, especially very preterm birth</li>
          <li className="mb-2"><strong>Low birth weight:</strong> Particularly very low birth weight infants</li>
          <li className="mb-2"><strong>Birth complications:</strong> Significant oxygen deprivation, though effect is small</li>
          <li className="mb-2"><strong>Multiple births:</strong> Twins and higher-order multiples have slightly elevated risk</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gene-Environment Interactions</h3>
        <p className="mb-4">
          Environmental factors likely don't act alone but interact with genetic susceptibility:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Genetic vulnerability may determine which environmental factors affect a child</li>
          <li className="mb-2">Environmental factors may trigger genetic risk in susceptible individuals</li>
          <li className="mb-2">Epigenetic changes (changes in gene expression without DNA sequence changes) may mediate these interactions</li>
        </ul>
      </div>
    );
  }

  function BrainContent() {
    return (
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Brain Development in Autism</h2>
        
        <p className="mb-4">
          Genetic and environmental factors ultimately affect brain development, leading to the neurological 
          differences characteristic of autism.<sup>[44]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Structural Brain Differences</h3>
        
        <img 
          src={brainConnectivityImage} 
          alt="Brain connectivity and neural networks in autism"
          className="w-80 h-auto rounded-md float-right ml-6 mb-4"
        />
        
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Brain overgrowth:</strong> Many autistic children show accelerated brain growth in early childhood, particularly in frontal cortex<sup>[45]</sup></li>
          <li className="mb-2"><strong>Altered connectivity:</strong> Differences in how brain regions connect and communicate<sup>[46]</sup></li>
          <li className="mb-2"><strong>Regional differences:</strong> Variations in size and structure of specific brain areas including amygdala, cerebellum, and corpus callosum<sup>[47]</sup></li>
          <li className="mb-2"><strong>White matter differences:</strong> Atypical development of myelin and white matter tracts<sup>[48]</sup></li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Brain Differences</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Neural connectivity patterns:</strong> Reduced long-range connectivity but increased local connectivity in some regions<sup>[49]</sup></li>
          <li className="mb-2"><strong>Social brain networks:</strong> Differences in activation of brain regions involved in social cognition<sup>[50]</sup></li>
          <li className="mb-2"><strong>Sensory processing:</strong> Atypical neural responses to sensory stimuli<sup>[51]</sup></li>
          <li className="mb-2"><strong>Default mode network:</strong> Differences in brain network active during rest and self-referential thinking<sup>[52]</sup></li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cellular and Molecular Level</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Synaptic differences:</strong> Altered number, structure, or function of synapses<sup>[53]</sup></li>
          <li className="mb-2"><strong>Neuronal migration:</strong> Some evidence of atypical neuronal positioning during development<sup>[54]</sup></li>
          <li className="mb-2"><strong>Excitatory/inhibitory balance:</strong> Imbalance between excitatory and inhibitory neurotransmission<sup>[55]</sup></li>
          <li className="mb-2"><strong>Neuroinflammation:</strong> Evidence of immune activation in some autistic brains<sup>[56]</sup></li>
          <li className="mb-2"><strong>Mitochondrial function:</strong> Some individuals show mitochondrial dysfunction<sup>[57]</sup></li>
        </ul>
      </div>
    );
  }

  function MythsContent() {
    return (
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Does NOT Cause Autism</h2>
        
        <div className="bg-white rounded-md border-2 border-[#0c264d] p-6 mb-4">
          <h3 className="text-center text-[#0c264d] font-bold mb-4">Debunked Myths About Autism Causes</h3>
          <div className="space-y-3 text-sm">
            <p><strong>✗ Vaccines:</strong> Extensive research has conclusively shown vaccines do not cause autism<sup>[2][58]</sup></p>
            <p><strong>✗ MMR vaccine specifically:</strong> The fraudulent study claiming this link has been retracted; no credible evidence supports it<sup>[59]</sup></p>
            <p><strong>✗ Thimerosal:</strong> This preservative was removed from childhood vaccines over 20 years ago; autism rates continued to rise<sup>[60]</sup></p>
            <p><strong>✗ Parenting style:</strong> "Refrigerator mother" theory has been thoroughly discredited; parenting does not cause autism<sup>[61]</sup></p>
            <p><strong>✗ Too much screen time:</strong> No evidence that technology use causes autism<sup>[62]</sup></p>
            <p><strong>✗ Poor nutrition alone:</strong> While nutrition affects health, diet alone does not cause autism</p>
          </div>
        </div>

        <img 
          src={vaccineImage} 
          alt="Vaccine being administered - vaccines do not cause autism"
          className="w-full max-w-sm h-auto rounded-md mx-auto mb-6"
        />

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Vaccine-Autism Myth</h3>
        <p className="mb-4">
          The claim that vaccines cause autism originated from a fraudulent 1998 study by Andrew Wakefield that has 
          been retracted.<sup>[63]</sup> Since then:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Dozens of large-scale studies involving millions of children have found no link between vaccines and autism<sup>[64]</sup></li>
          <li className="mb-2">The original author was found to have financial conflicts of interest and ethical violations<sup>[65]</sup></li>
          <li className="mb-2">Autism signs often emerge around the same age children receive vaccines, but correlation does not equal causation<sup>[66]</sup></li>
          <li className="mb-2">Autism rates have not decreased in areas where vaccination rates dropped<sup>[67]</sup></li>
          <li className="mb-2">Scientific consensus across all major medical organizations affirms vaccines are safe and do not cause autism<sup>[68]</sup></li>
        </ul>
      </div>
    );
  }

  function ResearchContent() {
    return (
      <div className="bg-[#f0f9ff] p-6 rounded-lg">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Current Understanding and Future Research</h2>
        
        <p className="mb-4">
          Our understanding of autism's causes continues to evolve:<sup>[69]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What We Know</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Autism is highly heritable but genetically complex</li>
          <li className="mb-2">Multiple genes and environmental factors contribute</li>
          <li className="mb-2">Brain development is affected during prenatal and early postnatal periods</li>
          <li className="mb-2">There is no single cause—different combinations of factors lead to autism in different individuals</li>
          <li className="mb-2">Autism is a natural neurological variation, not a disease to be "cured"</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">What We're Still Learning</h3>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">How specific genetic variations lead to autism traits</li>
          <li className="mb-2">Which environmental factors matter most and for whom</li>
          <li className="mb-2">How genes and environment interact during development</li>
          <li className="mb-2">Why autism presentation varies so widely</li>
          <li className="mb-2">Sex/gender differences in autism genetics and development</li>
          <li className="mb-2">Biomarkers that could enable earlier identification</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Research Priorities</h3>
        <p className="mb-4">
          Current autism research focuses on:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Understanding mechanisms that translate genetic risk into autistic traits</li>
          <li className="mb-2">Identifying subtypes of autism based on underlying biology</li>
          <li className="mb-2">Developing interventions and supports that improve quality of life</li>
          <li className="mb-2">Understanding co-occurring conditions and their biological bases</li>
          <li className="mb-2">Centering autistic voices in research priorities and methods</li>
        </ul>

        <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
          <h3 className="text-[#0c264d] font-bold mb-3">Important Perspective</h3>
          <p className="text-sm text-gray-700">
            While understanding autism's causes is scientifically interesting and may help with early identification 
            and support, many in the autistic community emphasize that autism is not a disease requiring a "cure" but 
            a neurological difference requiring acceptance, accommodation, and support. Research should 
            focus on improving autistic people's quality of life rather than preventing or eliminating autism.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>

      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex items-center justify-between">
        <h1 className="text-3xl">
          Autism: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-md text-sm transition-colors ${
              activeTab === tab.id
                ? 'bg-[#0A9DC4] text-white'
                : 'bg-[#ffd166] text-[#0c264d] hover:bg-[#ffd166]/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {renderTabContent(activeTab)}
      </div>

      {/* Bottom back button - positioned to the right above References */}
      <div className="flex justify-end mt-8 mb-6">
        <button 
          onClick={() => setCurrentArticle?.('autism')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About Autism
        </button>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <ASDReferences />
        </div>
      </section>
    </article>
  );
}