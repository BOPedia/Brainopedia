import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { useState } from 'react';

interface ADHDCausesProps {
  setCurrentArticle?: (article: string) => void;
  initialTab?: string;
}

export function ADHDCauses({ setCurrentArticle, initialTab }: ADHDCausesProps) {
  const [activeTab, setActiveTab] = useState(initialTab || 'overview');
  
  function OverviewContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] mb-4 text-2xl font-bold">Understanding ADHD Causes</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-overview-dna.png"
            alt="Brain illustration - understanding ADHD causes"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <p className="mb-4">
            The exact cause of ADHD remains under investigation, but research suggests a combination of genetic, 
            neurological, and environmental factors contribute to its development.<sup>1,2</sup> ADHD is a complex condition 
            with no single cause, and understanding its origins helps reduce stigma and emphasizes that ADHD is 
            a genuine neurobiological condition, not a result of poor parenting, lack of discipline, or personal 
            character flaws.
          </p>
          <p className="mb-4">
            Modern research has identified multiple biological mechanisms and risk factors that contribute to 
            ADHD, including differences in brain structure and function,<sup>4</sup> genetic variations,<sup>3</sup> neurotransmitter 
            imbalances, and certain environmental exposures during critical developmental periods.
          </p>
        </div>

        <div className="clear-both pt-6">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Gene-Environment Interactions</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-overview-dna-treetrunk.png"
            alt="Gene-environment interaction in ADHD"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <p className="mb-4">
            Modern research increasingly recognizes that genes and environment interact in complex ways.<sup>5,6</sup> Someone 
            with genetic vulnerability to ADHD might not develop significant symptoms in one environment but might 
            in another. Conversely, protective factors (supportive family, appropriate interventions, good education) 
            can significantly improve outcomes even for those with strong genetic predisposition.
          </p>
          <p className="mb-4">
            This understanding has important implications: while we can't change genes, we can modify environments 
            and provide supports that help individuals with ADHD thrive. Understanding biological causes doesn't 
            mean fatalism—it means we can develop more effective, targeted interventions.
          </p>
        </div>

        {/* ===== REFERENCES SECTION ===== */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
        
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
          
          {/* CITED STUDIES: GREEN */}
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
              <li>Thapar, A., & Cooper, M. (2016). "Attention deficit hyperactivity disorder." <em>Lancet</em>, 387(10024), 1240-1250.</li>
              <li>Faraone, S. V., et al. (2021). "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder." <em>Neuroscience & Biobehavioral Reviews</em>, 128, 789-818.</li>
              <li>Faraone, S. V., & Larsson, H. (2019). "Genetics of attention deficit hyperactivity disorder." <em>Molecular Psychiatry</em>, 24(4), 562-575.</li>
              <li>Cortese, S., et al. (2012). "Toward systems neuroscience of ADHD: A meta-analysis of 55 fMRI studies." <em>American Journal of Psychiatry</em>, 169(10), 1038-1055.</li>
              <li>Nigg, J. T., et al. (2010). "Gene-environment interactions and ADHD: A review of the literature." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 49(5), 432-445.</li>
              <li>Thapar, A., et al. (2013). "Gene-environment interplay in attention-deficit hyperactivity disorder and the importance of a developmental perspective." <em>British Journal of Psychiatry</em>, 202(6), 414-415.</li>
            </ol>
          </div>
          
          {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
              <li>American Psychiatric Association. (2022). <i>Diagnostic and Statistical Manual of Mental Disorders</i> (5th ed., text rev.).</li>
              <li>Barkley, R. A. (2015). <i>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</i> (4th ed.). Guilford Press.</li>
              <li>National Institute of Mental Health. (2023). "Attention-Deficit/Hyperactivity Disorder." Retrieved from nimh.nih.gov</li>
              <li>Nigg, J. T., Sibley, M. H., Thapar, A., & Karalunas, S. L. (2020). "Development of ADHD: etiology, heterogeneity, and early life course." <em>Annual Review of Developmental Psychology</em>, 2, 559-583.</li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  function GeneticsContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetics and Heredity</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-heredity-tree.png"
          alt="DNA and genetics - hereditary factors in ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

        <p className="mb-4">
          ADHD has a strong genetic component. Family studies consistently show that ADHD runs in families, 
          with children of parents with ADHD having a significantly higher risk of developing the condition 
          themselves.<sup>1</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heritability Rates</h3>
        <p className="mb-4">
          Twin studies reveal that ADHD is highly heritable, with heritability estimates around 70-80%.<sup>2,3</sup> This 
          means that genetic factors account for a substantial portion of individual differences in ADHD symptoms. 
          If one identical twin has ADHD, there's a high probability the other will as well. Recent large-scale 
          studies confirm these heritability estimates remain consistent across the lifespan, from childhood through 
          adulthood.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genome-Wide Association Studies (GWAS)</h3>
        <p className="mb-4">
          Major advances in genetic research have come from genome-wide association studies. The largest and most 
          recent GWAS meta-analysis, published in 2023, identified 27 genetic risk loci associated with ADHD by 
          analyzing data from over 38,000 individuals with ADHD and 186,000 controls.<sup>4</sup> This groundbreaking 
          study refined our understanding of ADHD's genetic architecture and implicated several cognitive domains 
          including executive function, processing speed, and working memory.
        </p>
        <p className="mb-4">
          Earlier GWAS studies, including the 2019 discovery of the first genome-wide significant risk loci,<sup>5</sup> 
          paved the way for these findings. Population-based studies analyzing ADHD symptoms in pediatric cohorts 
          have also contributed to identifying genetic variants associated with symptom severity.<sup>6</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multiple Genes Involved</h3>
        <p className="mb-4">
          Rather than being caused by a single gene, ADHD involves many genes, each contributing a small effect. 
          Research has identified multiple candidate genes,<sup>7</sup> particularly those involved in dopamine and 
          norepinephrine regulation. These include genes for dopamine receptors (DRD4, DRD5), dopamine 
          transporter (DAT1),<sup>8</sup> and other neurotransmitter-related genes. Polygenic risk scores—which combine 
          effects across many genetic variants—have shown that ADHD genetic risk affects neural activation 
          patterns during cognitive tasks, regardless of whether someone has an ADHD diagnosis.<sup>9</sup>
        </p>
        <p className="mb-4">
          The genetic architecture of ADHD is complex, and researchers continue to discover new genetic 
          variants associated with the condition. This genetic complexity helps explain why ADHD symptoms 
          vary so widely from person to person. Importantly, research has revealed shared genetic background 
          between childhood and adult ADHD, supporting the understanding that ADHD is a lifelong condition 
          with consistent genetic underpinnings.<sup>10</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genetic Overlap with Other Conditions</h3>
        <p className="mb-4">
          ADHD shares genetic risk factors with several other psychiatric and neurodevelopmental conditions. 
          Large-scale genomic studies have revealed significant genetic correlations between ADHD and conditions 
          such as autism spectrum disorder, depression, anxiety, and bipolar disorder.<sup>11</sup> This genetic overlap 
          helps explain why comorbidity is so common in ADHD and why individuals with ADHD often experience 
          multiple co-occurring conditions.
        </p>
        <p className="mb-4">
          Genetic research has also investigated sex differences in ADHD prevalence. Studies examining the 
          genetic basis of sex bias have found that while ADHD is more commonly diagnosed in males, the 
          genetic risk factors are largely similar across sexes, suggesting that sex differences may be more 
          related to expression and diagnostic patterns than underlying genetic vulnerability.<sup>12</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gene-Environment Interactions</h3>
        <p className="mb-4">
          While genetics play a major role, ADHD doesn't develop from genes alone. Environmental factors 
          interact with genetic predisposition to influence whether and how ADHD manifests.<sup>13,14</sup> Understanding 
          both genetic and environmental contributions is essential for a complete picture of ADHD's origins. 
          This interplay between nature and nurture helps explain why not everyone with genetic risk factors 
          develops ADHD, and why environmental interventions can be effective even for highly heritable conditions.
        </p>

        {/* --- ADD THIS DEEP DIVE CALLOUT --- */}
        <div className="mt-6 mb-8 bg-[#ffd166] bg-opacity-20 p-6 rounded-lg border-l-4 border-[#ffd166] shadow-sm">
          <h3 className="text-[#0c264d] font-bold mb-2 flex items-center gap-2 text-lg">
            <span className="text-xl">🧬</span> Deep Dive: Epigenetics & ADHD
          </h3>
          <p className="mb-4 text-sm text-slate-700">
            Want to understand the molecular bridge? Explore how environmental factors like stress, nutrition, and toxins can physically alter gene expression without changing underlying DNA.
          </p>
          <button
            onClick={() => setCurrentArticle?.('adhdepigenetics')}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#ffd166] hover:bg-[#ffd166] text-[#0c264d] font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Explore ADHD Epigenetics →
          </button>
        </div>
        {/* --- END DEEP DIVE CALLOUT --- */}


        {/* ===== REFERENCES SECTION ===== */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
        
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
    
          
          {/* CITED STUDIES: GREEN */}
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
              <li>Faraone, S. V., & Larsson, H. (2019). "Genetics of attention deficit hyperactivity disorder." <em>Molecular Psychiatry</em>, 24(4), 562-575.</li>
              <li>Brikell, I., Kuja-Halkola, R., & Larsson, H. (2015). "Heritability of attention-deficit hyperactivity disorder in adults." <em>American Journal of Medical Genetics Part B: Neuropsychiatric Genetics</em>, 168(6), 406-413.</li>
              <li>Larsson, H., et al. (2014). "The heritability of clinically diagnosed attention deficit hyperactivity disorder across the lifespan." <em>Psychological Medicine</em>, 44(10), 2223-2229.</li>
              <li>Demontis, D., et al. (2023). "Genome-wide analyses of ADHD identify 27 risk loci, refine the genetic architecture and implicate several cognitive domains." <em>Nature Genetics</em>, 55(2), 198-208.</li>
              <li>Demontis, D., et al. (2019). "Discovery of the first genome-wide significant risk loci for attention deficit/hyperactivity disorder." <em>Nature Genetics</em>, 51(1), 63-75.</li>
              <li>Middeldorp, C. M., et al. (2016). "A genome-wide association meta-analysis of attention-deficit/hyperactivity disorder symptoms in population-based pediatric cohorts." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 55(10), 896-905.</li>
              <li>Gizer, I. R., et al. (2009). "Candidate gene studies of ADHD: a meta-analytic review." <em>Human Genetics</em>, 126(1), 51-90.</li>
              <li>Li, D., et al. (2006). "Meta-analysis shows significant association between dopamine system genes and attention deficit hyperactivity disorder (ADHD)." <em>Human Molecular Genetics</em>, 15(14), 2276-2284.</li>
              <li>Grimm, O., et al. (2020). "Polygenic risk for ADHD affects neural activation during response inhibition regardless of ADHD diagnosis." <em>Translational Psychiatry</em>, 10(1), 1-10.</li>
              <li>Rovira, P., et al. (2020). "Shared genetic background between children and adults with attention deficit/hyperactivity disorder." <em>Neuropsychopharmacology</em>, 45(10), 1617-1626.</li>
              <li>Cross-Disorder Group of the Psychiatric Genomics Consortium. (2019). "Genomic relationships, novel loci, and pleiotropic mechanisms across eight psychiatric disorders." <em>Cell</em>, 179(7), 1469-1482.</li>
              <li>Martin, J., et al. (2018). "A genetic investigation of sex bias in the prevalence of attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 83(12), 1044-1053.</li>
              <li>Thapar, A., & Cooper, M. (2016). "Attention deficit hyperactivity disorder." <em>Lancet</em>, 387(10024), 1240-1250.</li>
              <li>Nigg, J. T., Sibley, M. H., Thapar, A., & Karalunas, S. L. (2020). "Development of ADHD: etiology, heterogeneity, and early life course." <em>Annual Review of Developmental Psychology</em>, 2, 559-583.</li>
            </ol>
          </div>
          
          {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
              <li>Nikolas, M. A., & Burt, S. A. (2010). "Genetic and environmental influences on ADHD symptom dimensions of inattention and hyperactivity: a meta-analysis." <em>Journal of Abnormal Psychology</em>, 119(1), 1-17.</li>
              <li>Franke, B., et al. (2012). "The genetics of attention deficit/hyperactivity disorder in adults, a review." <em>Molecular Psychiatry</em>, 17(10), 960-987.</li>
              <li>Faraone, S. V., & Biederman, J. (1998). "Neurobiology of attention-deficit hyperactivity disorder." <em>Biological Psychiatry</em>, 44(10), 951-958.</li>
              <li>Chang, Z., et al. (2013). "Developmental twin study of attention problems: high heritabilities throughout development." <em>JAMA Psychiatry</em>, 70(3), 311-318.</li>
              <li>Kendler, K. S., et al. (2010). "The interaction of genetic and environmental risk factors for psychiatric disorders." <em>Annual Review of Clinical Psychology</em>, 6, 183-209.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  function BrainContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Brain Structure and Function</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-structure-brain-anatomy.png"
          alt="Brain structure differences in ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

        <p className="mb-4">
          Brain imaging studies have revealed several differences in brain structure and activity in individuals 
          with ADHD. These differences help explain why people with ADHD experience challenges with attention, 
          impulse control, and executive functioning. Large-scale collaborative neuroimaging studies from the 
          past decade have provided unprecedented insights into the neurobiology of ADHD across the lifespan.
        </p>
        
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Large-Scale Neuroimaging Findings</h3>
        <p className="mb-4">
          The ENIGMA-ADHD consortium conducted the largest brain imaging study of ADHD to date, analyzing 
          brain scans from over 3,200 participants. This groundbreaking 2017 study found that individuals 
          with ADHD have smaller volumes in several subcortical brain regions, including the amygdala, 
          caudate, putamen, nucleus accumbens, and hippocampus.<sup>1</sup> These differences were most pronounced 
          in children and became less apparent with age, suggesting that some brain differences may normalize 
          during development.
        </p>
        <p className="mb-4">
          A follow-up ENIGMA study in 2019 examined cortical thickness and surface area across more than 
          2,200 individuals with ADHD and found subtle but widespread differences in cortical structure, 
          particularly in frontal, temporal, and cingulate regions.<sup>2</sup> The findings support the concept 
          that ADHD involves alterations in large-scale brain networks rather than isolated regional abnormalities.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Structural Differences</h3>
        <p className="mb-4">
          Modern neuroimaging research has identified consistent structural differences in ADHD:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Total brain volume:</strong> Meta-analyses confirm smaller total brain volume and intracranial volume in children with ADHD, with these differences being most prominent in childhood<sup>3</sup></li>
          <li className="mb-2"><strong>Subcortical regions:</strong> Reduced volume in the prefrontal cortex (responsible for executive functions), basal ganglia (involved in motor control and reward), hippocampus (memory and emotion regulation), amygdala (emotional processing), and cerebellum (coordination and timing)<sup>1</sup></li>
          <li className="mb-2"><strong>Cortical thickness:</strong> Thinner cortex in multiple regions, particularly in prefrontal and temporal areas, with some studies showing normalization in adulthood<sup>4</sup></li>
          <li className="mb-2"><strong>Delayed cortical maturation:</strong> The brain develops on a typical trajectory but more slowly, with peak cortical thickness achieved approximately 2-3 years later than in neurotypical development<sup>5</sup></li>
          <li className="mb-2"><strong>White matter microstructure:</strong> Differences in white matter organization affecting neural connectivity between brain regions, particularly in pathways connecting frontal regions to other brain areas<sup>6,7</sup></li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Differences</h3>
        <p className="mb-4">
          Functional neuroimaging reveals how brain activity differs during cognitive tasks and at rest:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Task-based activation:</strong> Underactivity in prefrontal cortex and parietal regions during tasks requiring attention, inhibition, and working memory<sup>8,11</sup></li>
          <li className="mb-2"><strong>Default mode network (DMN):</strong> Altered activity in the DMN (active during rest and mind-wandering), including insufficient suppression of this network during tasks requiring focused attention<sup>9,10</sup></li>
          <li className="mb-2"><strong>Functional connectivity:</strong> Widespread alterations in connectivity between brain regions, particularly involving networks related to attention, executive control, and reward processing<sup>11</sup></li>
          <li className="mb-2"><strong>Reward processing circuits:</strong> Reduced activation in ventral striatum during reward anticipation, which may explain motivation challenges and preference for immediate rewards<sup>12</sup></li>
          <li className="mb-2"><strong>Network organization:</strong> Less efficient organization of large-scale brain networks, potentially contributing to variability in cognitive performance<sup>10</sup></li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adult ADHD Brain Differences</h3>
        <p className="mb-4">
          Research increasingly focuses on brain structure in adults with ADHD. Studies show that while some 
          childhood brain differences normalize with age, adults with persistent ADHD continue to show structural 
          and functional differences, including reduced cortical thickness in frontal regions and altered functional 
          connectivity in attention networks. This supports the understanding that ADHD is a lifelong 
          neurodevelopmental condition, not simply a childhood disorder.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Trajectories</h3>
        <p className="mb-4">
          Longitudinal imaging studies tracking individuals over time reveal that ADHD involves altered 
          developmental trajectories rather than static abnormalities. Some brain differences are most 
          pronounced in childhood and decrease with age, while others emerge or persist into adulthood. 
          Understanding these developmental patterns helps explain why some individuals experience symptom 
          improvement while others continue to face challenges throughout life.<sup>13,14</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Clinical Implications</h3>
        <p className="mb-4">
          These neuroimaging findings validate ADHD as a neurobiological condition and help reduce stigma. 
          The brain differences identified correlate with symptom severity and cognitive performance, providing 
          biological markers that may eventually aid in diagnosis and treatment planning. However, brain imaging 
          is not currently used for clinical diagnosis of ADHD, as there is too much overlap between individuals 
          with and without ADHD at the individual level, despite clear group differences in research studies.
        </p>
        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gene-Environment Interactions</h3>
        <p className="mb-4">
          While genetics play a major role, ADHD doesn't develop from genes alone. Environmental factors 
          interact with genetic predisposition to influence whether and how ADHD manifests.<sup>13,14</sup> Understanding 
          both genetic and environmental contributions is essential for a complete picture of ADHD's origins. 
          This interplay between nature and nurture helps explain why not everyone with genetic risk factors 
          develops ADHD, and why environmental interventions can be effective even for highly heritable conditions.
        </p>

        {/* ===== REFERENCES SECTION ===== */}
        <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-8 clear-both" />
        
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-inner">
          <h3 className="font-bold mb-5 text-xl font-spartan text-[#0c264d]">References</h3>
          
          {/* CITED STUDIES: GREEN */}
          <div className="mb-6">
            <h4 className="text-sm uppercase tracking-wider text-green-700 font-bold mb-3 border-b border-green-700 border-opacity-10 pb-1">
              Cited Studies & Statistics
            </h4>
            <ol className="list-decimal ml-5 text-xs space-y-3 text-slate-600 leading-relaxed">
              <li>Hoogman, M., Bralten, J., Hibar, D. P., Mennes, M., Zwiers, M. P., Schweren, L. S., ... & Franke, B. (2017). "Subcortical brain volume differences in participants with attention deficit hyperactivity disorder in children and adults: A cross-sectional mega-analysis." <em>The Lancet Psychiatry</em>, 4(4), 310-319.</li>
              <li>Hoogman, M., Muetzel, R., Guimaraes, J. P., Shumskaya, E., Mennes, M., Zwiers, M. P., ... & Franke, B. (2019). "Brain imaging of the cortex in ADHD: A coordinated analysis of large-scale clinical and population-based samples." <em>American Journal of Psychiatry</em>, 176(7), 531-542.</li>
              <li>Frodl, T., & Skokauskas, N. (2012). "Meta-analysis of structural MRI studies in children and adults with attention deficit hyperactivity disorder indicates treatment effects." <em>Acta Psychiatrica Scandinavica</em>, 125(2), 114-126.</li>
              <li>Narr, K. L., Woods, R. P., Lin, J., Kim, J., Phillips, O. R., Del'Homme, M., ... & Toga, A. W. (2009). "Widespread cortical thinning is a robust anatomical marker for attention-deficit/hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 48(10), 1014-1022.</li>
              <li>Shaw, P., Eckstrand, K., Sharp, W., Blumenthal, J., Lerch, J. P., Greenstein, D., ... & Rapoport, J. L. (2007). "Attention-deficit/hyperactivity disorder is characterized by a delay in cortical maturation." <em>Proceedings of the National Academy of Sciences</em>, 104(49), 19649-19654.</li>
              <li>Chen, L., Hu, X., Ouyang, L., He, N., Thumbhekar Ramakrishnan, V., Guo, W., ... & Wang, Y. (2016). "A systematic review and meta-analysis of tract-based spatial statistics studies regarding attention-deficit/hyperactivity disorder." <em>Neuroscience & Biobehavioral Reviews</em>, 68, 838-847.</li>
              <li>van Ewijk, H., Heslenfeld, D. J., Zwiers, M. P., Buitelaar, J. K., & Oosterlaan, J. (2012). "Diffusion tensor imaging in attention deficit/hyperactivity disorder: A systematic review and meta-analysis." <em>Neuroscience & Biobehavioral Reviews</em>, 36(4), 1093-1106.</li>
              <li>Hart, H., Radua, J., Nakao, T., Mataix-Cols, D., & Rubia, K. (2013). "Meta-analysis of functional magnetic resonance imaging studies of inhibition and attention in attention-deficit/hyperactivity disorder: Exploring task-specific, stimulant medication, and age effects." <em>JAMA Psychiatry</em>, 70(2), 185-198.</li>
              <li>Sonuga-Barke, E. J., & Castellanos, F. X. (2007). "Spontaneous attentional fluctuations in impaired states and pathological conditions: A neurobiological hypothesis." <em>Neuroscience & Biobehavioral Reviews</em>, 31(7), 977-986.</li>
              <li>Sripada, C., Kessler, D., Fang, Y., Welsh, R. C., Prem Kumar, K., & Angstadt, M. (2014). "Disrupted network architecture of the resting brain in attention-deficit/hyperactivity disorder." <em>Human Brain Mapping</em>, 35(9), 4693-4705.</li>
              <li>Cortese, S., Kelly, C., Chabernaud, C., Proal, E., Di Martino, A., Milham, M. P., & Castellanos, F. X. (2012). "Toward systems neuroscience of ADHD: A meta-analysis of 55 fMRI studies." <em>American Journal of Psychiatry</em>, 169(10), 1038-1055.</li>
              <li>Plichta, M. M., & Scheres, A. (2014). "Ventral-striatal responsiveness during reward anticipation in ADHD and its relation to trait impulsivity in the healthy population: A meta-analytic review of the fMRI literature." <em>Neuroscience & Biobehavioral Reviews</em>, 38, 125-134.</li>
              <li>Francx, W., Zwiers, M. P., Mennes, M., Oosterlaan, J., Heslenfeld, D., Hoekstra, P. J., ... & Buitelaar, J. K. (2015). "White matter microstructure and developmental improvement of hyperactive/impulsive symptoms in attention-deficit/hyperactivity disorder." <em>Journal of Child Psychology and Psychiatry</em>, 56(12), 1289-1297.</li>
              <li>Shaw, P., Malek, M., Watson, B., Greenstein, D., de Rossi, P., & Sharp, W. (2013). "Trajectories of cerebral cortical development in childhood and adolescence and adult attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 74(8), 599-606.</li>
            </ol>
          </div>
          
          {/* BACKGROUND SOURCES: CYAN (No Indentation) */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-cyan-500 font-bold mb-3 border-b border-cyan-500 border-opacity-10 pb-1">
              Background Sources
            </h4>
            <ul className="list-none text-xs space-y-3 text-slate-600 leading-relaxed p-0 m-0">
              <li>Castellanos, F. X., & Proal, E. (2012). "Large-scale brain systems in ADHD: beyond the prefrontal-striatal model." <em>Trends in Cognitive Sciences</em>, 16(1), 17-26.</li>
              <li>Faraone, S. V., & Biederman, J. (1998). "Neurobiology of attention-deficit hyperactivity disorder." <em>Biological Psychiatry</em>, 44(10), 951-958.</li>
              <li>Rubia, K. (2018). "Cognitive neuroscience of attention deficit hyperactivity disorder (ADHD) and its clinical translation." <em>Frontiers in Human Neuroscience</em>, 12, 100.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-full w-full">
      <style>
        {`
          sup {
            color: #10b981;
            font-weight: bold;
            margin-left: 2px;
          }
        `}
      </style>
      
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      {/* Mobile button - shows only on small screens below title */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ADHD
      </button>

      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="overview" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 !h-auto">
            Overview
          </TabsTrigger>
          <TabsTrigger value="genetics" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 !h-auto">
            Genetics
          </TabsTrigger>
          <TabsTrigger value="brain" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 !h-auto">
            Brain Structure
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          <OverviewContent />
        </TabsContent>

        {/* Genetics Tab */}
        <TabsContent value="genetics" className="space-y-8">
          <GeneticsContent />
        </TabsContent>

        {/* Brain Tab */}
        <TabsContent value="brain" className="space-y-8">
          <BrainContent />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end my-8">
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>
    </article>
  );
}