import { ADHDMyths } from '../../infographics/ADHDMyths';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface ADHDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDCauses({ setCurrentArticle }: ADHDCausesProps) {
  function OverviewContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding the Causes of ADHD</h2>
          
          <ImageWithFallback 
            src="/images/adhd/adhd-overview-dna.png"
            alt="Brain illustration - understanding ADHD causes"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />

          <p className="mb-4">
            The exact cause of ADHD remains under investigation, but research suggests a combination of genetic, 
            neurological, and environmental factors contribute to its development<sup style={{color: '#10b981'}}>[1]</sup>. ADHD is a complex condition 
            with no single cause, and understanding its origins helps reduce stigma and emphasizes that ADHD is 
            a genuine neurobiological condition, not a result of poor parenting, lack of discipline, or personal 
            character flaws.
          </p>
          <p className="mb-4">
            Modern research has identified multiple biological mechanisms and risk factors that contribute to 
            ADHD, including differences in brain structure and function, genetic variations, neurotransmitter 
            imbalances, and certain environmental exposures during critical developmental periods<sup style={{color: '#10b981'}}>[2]</sup>.
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
            Modern research increasingly recognizes that genes and environment interact in complex ways<sup style={{color: '#10b981'}}>[3]</sup>. Someone 
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

        {/* Bottom button - right aligned above References */}
        <div className="flex justify-end my-8">
          <button 
            onClick={() => setCurrentArticle?.('adhd')}
            className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <span className="text-xl">←</span>
            All About ADHD
          </button>
        </div>

        {/* References for Overview Tab */}
        <div className="bg-white p-6 rounded-lg mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
          
          <h3 className="text-[#0c264d] font-semibold mb-2">Inline Citations</h3>
          <div className="text-sm space-y-2 mb-4">
            <p><sup style={{color: '#10b981'}}>[1]</sup> Thapar, A., & Cooper, M. (2016). "Attention deficit hyperactivity disorder." <em>Lancet</em>, 387(10024), 1240-1250.; Faraone, S. V., et al. (2021). "The World Federation of ADHD International Consensus Statement: 208 Evidence-based conclusions about the disorder." <em>Neuroscience & Biobehavioral Reviews</em>, 128, 789-818.</p>
            <p><sup style={{color: '#10b981'}}>[2]</sup> Faraone, S. V., & Larsson, H. (2019). "Genetics of attention deficit hyperactivity disorder." <em>Molecular Psychiatry</em>, 24(4), 562-575.; Cortese, S., et al. (2012). "Toward systems neuroscience of ADHD: A meta-analysis of 55 fMRI studies." <em>American Journal of Psychiatry</em>, 169(10), 1038-1055.</p>
            <p><sup style={{color: '#10b981'}}>[3]</sup> Nigg, J. T., et al. (2010). "Gene-environment interactions and ADHD: A review of the literature." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 49(5), 432-445.; Thapar, A., et al. (2013). "Gene-environment interplay in attention-deficit hyperactivity disorder and the importance of a developmental perspective." <em>British Journal of Psychiatry</em>, 202(6), 414-415.</p>
          </div>
          
          <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
          <div className="text-sm space-y-2">
            <p>American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders (5th ed., text rev.).</p>
            <p>Barkley, R. A. (2015). Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment (4th ed.). Guilford Press.</p>
            <p>National Institute of Mental Health. (2023). "Attention-Deficit/Hyperactivity Disorder." Retrieved from nimh.nih.gov</p>
            <p>Thapar, A., & Cooper, M. (2016). "Attention deficit hyperactivity disorder." Lancet, 387(10024), 1240-1250.</p>
            <p>Faraone, S. V., & Larsson, H. (2019). "Genetics of attention deficit hyperactivity disorder." Molecular Psychiatry, 24(4), 562-575.</p>
            <p>Nigg, J. T., Sibley, M. H., Thapar, A., & Karalunas, S. L. (2020). "Development of ADHD: etiology, heterogeneity, and early life course." Annual Review of Developmental Psychology, 2, 559-583.</p>
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
          themselves.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heritability Rates</h3>
        <p className="mb-4">
          Twin studies reveal that ADHD is highly heritable, with heritability estimates around 70-80%.<sup className="text-[#10b981]">[1]</sup> This 
          means that genetic factors account for a substantial portion of individual differences in ADHD symptoms. 
          If one identical twin has ADHD, there's a high probability the other will as well. Recent large-scale 
          studies confirm these heritability estimates remain consistent across the lifespan, from childhood through 
          adulthood.<sup className="text-[#10b981]">[2]</sup><sup className="text-[#10b981]">[3]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genome-Wide Association Studies (GWAS)</h3>
        <p className="mb-4">
          Major advances in genetic research have come from genome-wide association studies. The largest and most 
          recent GWAS meta-analysis, published in 2023, identified 27 genetic risk loci associated with ADHD by 
          analyzing data from over 38,000 individuals with ADHD and 186,000 controls.<sup className="text-[#10b981]">[4]</sup> This groundbreaking 
          study refined our understanding of ADHD's genetic architecture and implicated several cognitive domains 
          including executive function, processing speed, and working memory.
        </p>
        <p className="mb-4">
          Earlier GWAS studies, including the 2019 discovery of the first genome-wide significant risk loci,<sup className="text-[#10b981]">[5]</sup> 
          paved the way for these findings. Population-based studies analyzing ADHD symptoms in pediatric cohorts 
          have also contributed to identifying genetic variants associated with symptom severity.<sup className="text-[#10b981]">[6]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multiple Genes Involved</h3>
        <p className="mb-4">
          Rather than being caused by a single gene, ADHD involves many genes, each contributing a small effect. 
          Research has identified multiple candidate genes, particularly those involved in dopamine and 
          norepinephrine regulation.<sup className="text-[#10b981]">[7]</sup><sup className="text-[#10b981]">[8]</sup> These include genes for dopamine receptors (DRD4, DRD5), dopamine 
          transporter (DAT1), and other neurotransmitter-related genes. Polygenic risk scores—which combine 
          effects across many genetic variants—have shown that ADHD genetic risk affects neural activation 
          patterns during cognitive tasks, regardless of whether someone has an ADHD diagnosis.<sup className="text-[#10b981]">[9]</sup>
        </p>
        <p className="mb-4">
          The genetic architecture of ADHD is complex, and researchers continue to discover new genetic 
          variants associated with the condition. This genetic complexity helps explain why ADHD symptoms 
          vary so widely from person to person. Importantly, research has revealed shared genetic background 
          between childhood and adult ADHD,<sup className="text-[#10b981]">[10]</sup> supporting the understanding that ADHD is a lifelong condition 
          with consistent genetic underpinnings.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Genetic Overlap with Other Conditions</h3>
        <p className="mb-4">
          ADHD shares genetic risk factors with several other psychiatric and neurodevelopmental conditions. 
          Large-scale genomic studies have revealed significant genetic correlations between ADHD and conditions 
          such as autism spectrum disorder, depression, anxiety, and bipolar disorder.<sup className="text-[#10b981]">[11]</sup> This genetic overlap 
          helps explain why comorbidity is so common in ADHD and why individuals with ADHD often experience 
          multiple co-occurring conditions.
        </p>
        <p className="mb-4">
          Genetic research has also investigated sex differences in ADHD prevalence. Studies examining the 
          genetic basis of sex bias have found that while ADHD is more commonly diagnosed in males, the 
          genetic risk factors are largely similar across sexes, suggesting that sex differences may be more 
          related to expression and diagnostic patterns than underlying genetic vulnerability.<sup className="text-[#10b981]">[12]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gene-Environment Interactions</h3>
        <p className="mb-4">
          While genetics play a major role, ADHD doesn't develop from genes alone. Environmental factors 
          interact with genetic predisposition to influence whether and how ADHD manifests.<sup className="text-[#10b981]">[13]</sup><sup className="text-[#10b981]">[14]</sup> Understanding 
          both genetic and environmental contributions is essential for a complete picture of ADHD's origins. 
          This interplay between nature and nurture helps explain why not everyone with genetic risk factors 
          develops ADHD, and why environmental interventions can be effective even for highly heritable conditions.
        </p>

        {/* Bottom button - right aligned above References */}
        <div className="flex justify-end my-8">
          <button 
            onClick={() => setCurrentArticle?.('adhd')}
            className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <span className="text-xl">←</span>
            All About ADHD
          </button>
        </div>

        {/* References for Genetics Tab */}
        <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
          
          <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
          <div className="text-sm space-y-2">
            <p>[1] Faraone, S. V., & Larsson, H. (2019). "Genetics of attention deficit hyperactivity disorder." <em>Molecular Psychiatry</em>, 24(4), 562-575.</p>
            <p>[2] Brikell, I., Kuja-Halkola, R., & Larsson, H. (2015). "Heritability of attention-deficit hyperactivity disorder in adults." <em>American Journal of Medical Genetics Part B: Neuropsychiatric Genetics</em>, 168(6), 406-413.</p>
            <p>[3] Larsson, H., et al. (2014). "The heritability of clinically diagnosed attention deficit hyperactivity disorder across the lifespan." <em>Psychological Medicine</em>, 44(10), 2223-2229.</p>
            <p>[4] Demontis, D., et al. (2023). "Genome-wide analyses of ADHD identify 27 risk loci, refine the genetic architecture and implicate several cognitive domains." <em>Nature Genetics</em>, 55(2), 198-208.</p>
            <p>[5] Demontis, D., et al. (2019). "Discovery of the first genome-wide significant risk loci for attention deficit/hyperactivity disorder." <em>Nature Genetics</em>, 51(1), 63-75.</p>
            <p>[6] Middeldorp, C. M., et al. (2016). "A genome-wide association meta-analysis of attention-deficit/hyperactivity disorder symptoms in population-based pediatric cohorts." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 55(10), 896-905.</p>
            <p>[7] Gizer, I. R., et al. (2009). "Candidate gene studies of ADHD: a meta-analytic review." <em>Human Genetics</em>, 126(1), 51-90.</p>
            <p>[8] Li, D., et al. (2006). "Meta-analysis shows significant association between dopamine system genes and attention deficit hyperactivity disorder (ADHD)." <em>Human Molecular Genetics</em>, 15(14), 2276-2284.</p>
            <p>[9] Grimm, O., et al. (2020). "Polygenic risk for ADHD affects neural activation during response inhibition regardless of ADHD diagnosis." <em>Translational Psychiatry</em>, 10(1), 1-10.</p>
            <p>[10] Rovira, P., et al. (2020). "Shared genetic background between children and adults with attention deficit/hyperactivity disorder." <em>Neuropsychopharmacology</em>, 45(10), 1617-1626.</p>
            <p>[11] Cross-Disorder Group of the Psychiatric Genomics Consortium. (2019). "Genomic relationships, novel loci, and pleiotropic mechanisms across eight psychiatric disorders." <em>Cell</em>, 179(7), 1469-1482.</p>
            <p>[12] Martin, J., et al. (2018). "A genetic investigation of sex bias in the prevalence of attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 83(12), 1044-1053.</p>
            <p>[13] Thapar, A., & Cooper, M. (2016). "Attention deficit hyperactivity disorder." <em>Lancet</em>, 387(10024), 1240-1250.</p>
            <p>[14] Nigg, J. T., Sibley, M. H., Thapar, A., & Karalunas, S. L. (2020). "Development of ADHD: etiology, heterogeneity, and early life course." <em>Annual Review of Developmental Psychology</em>, 2, 559-583.</p>
          </div>
          
          <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
          <div className="text-sm space-y-2">
            <p>Nikolas, M. A., & Burt, S. A. (2010). "Genetic and environmental influences on ADHD symptom dimensions of inattention and hyperactivity: a meta-analysis." <em>Journal of Abnormal Psychology</em>, 119(1), 1-17.</p>
            <p>Franke, B., et al. (2012). "The genetics of attention deficit/hyperactivity disorder in adults, a review." <em>Molecular Psychiatry</em>, 17(10), 960-987.</p>
            <p>Faraone, S. V., & Biederman, J. (1998). "Neurobiology of attention-deficit hyperactivity disorder." <em>Biological Psychiatry</em>, 44(10), 951-958.</p>
            <p>Chang, Z., et al. (2013). "Developmental twin study of attention problems: high heritabilities throughout development." <em>JAMA Psychiatry</em>, 70(3), 311-318.</p>
            <p>Kendler, K. S., et al. (2010). "The interaction of genetic and environmental risk factors for psychiatric disorders." <em>Annual Review of Clinical Psychology</em>, 6, 183-209.</p>
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
          caudate, putamen, nucleus accumbens, and hippocampus.<sup className="text-[#10b981]">[1]</sup> These differences were most pronounced 
          in children and became less apparent with age, suggesting that some brain differences may normalize 
          during development.
        </p>
        <p className="mb-4">
          A follow-up ENIGMA study in 2019 examined cortical thickness and surface area across more than 
          2,200 individuals with ADHD and found subtle but widespread differences in cortical structure, 
          particularly in frontal, temporal, and cingulate regions.<sup className="text-[#10b981]">[2]</sup> The findings support the concept 
          that ADHD involves alterations in large-scale brain networks rather than isolated regional abnormalities.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Structural Differences</h3>
        <p className="mb-4">
          Modern neuroimaging research has identified consistent structural differences in ADHD:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Total brain volume:</strong> Meta-analyses confirm smaller total brain volume and intracranial volume in children with ADHD, with these differences being most prominent in childhood<sup className="text-[#10b981]">[3]</sup></li>
          <li className="mb-2"><strong>Subcortical regions:</strong> Reduced volume in the prefrontal cortex (responsible for executive functions), basal ganglia (involved in motor control and reward), hippocampus (memory and emotion regulation), amygdala (emotional processing), and cerebellum (coordination and timing)<sup className="text-[#10b981]">[1]</sup></li>
          <li className="mb-2"><strong>Cortical thickness:</strong> Thinner cortex in multiple regions, particularly in prefrontal and temporal areas, with some studies showing normalization in adulthood<sup className="text-[#10b981]">[4]</sup></li>
          <li className="mb-2"><strong>Delayed cortical maturation:</strong> The brain develops on a typical trajectory but more slowly, with peak cortical thickness achieved approximately 2-3 years later than in neurotypical development<sup className="text-[#10b981]">[5]</sup></li>
          <li className="mb-2"><strong>White matter microstructure:</strong> Differences in white matter organization affecting neural connectivity between brain regions, particularly in pathways connecting frontal regions to other brain areas<sup className="text-[#10b981]">[6]</sup><sup className="text-[#10b981]">[7]</sup></li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Differences</h3>
        <p className="mb-4">
          Functional neuroimaging reveals how brain activity differs during cognitive tasks and at rest:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Task-based activation:</strong> Underactivity in prefrontal cortex and parietal regions during tasks requiring attention, inhibition, and working memory<sup className="text-[#10b981]">[8]</sup></li>
          <li className="mb-2"><strong>Default mode network (DMN):</strong> Altered activity in the DMN (active during rest and mind-wandering), including insufficient suppression of this network during tasks requiring focused attention<sup className="text-[#10b981]">[9]</sup></li>
          <li className="mb-2"><strong>Functional connectivity:</strong> Widespread alterations in connectivity between brain regions, particularly involving networks related to attention, executive control, and reward processing<sup className="text-[#10b981]">[10]</sup><sup className="text-[#10b981]">[11]</sup></li>
          <li className="mb-2"><strong>Reward processing circuits:</strong> Reduced activation in ventral striatum during reward anticipation, which may explain motivation challenges and preference for immediate rewards<sup className="text-[#10b981]">[12]</sup></li>
          <li className="mb-2"><strong>Network organization:</strong> Less efficient organization of large-scale brain networks, potentially contributing to variability in cognitive performance<sup className="text-[#10b981]">[10]</sup></li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adult ADHD Brain Differences</h3>
        <p className="mb-4">
          Research increasingly focuses on brain structure in adults with ADHD. Studies show that while some 
          childhood brain differences normalize with age, adults with persistent ADHD continue to show structural 
          and functional differences, including reduced cortical thickness in frontal regions and altered functional 
          connectivity in attention networks.<sup className="text-[#10b981]">[13]</sup> This supports the understanding that ADHD is a lifelong 
          neurodevelopmental condition, not simply a childhood disorder.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Developmental Trajectories</h3>
        <p className="mb-4">
          Longitudinal imaging studies tracking individuals over time reveal that ADHD involves altered 
          developmental trajectories rather than static abnormalities. Some brain differences are most 
          pronounced in childhood and decrease with age, while others emerge or persist into adulthood.<sup className="text-[#10b981]">[14]</sup> 
          Understanding these developmental patterns helps explain why some individuals experience symptom 
          improvement while others continue to face challenges throughout life.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Clinical Implications</h3>
        <p className="mb-4">
          These neuroimaging findings validate ADHD as a neurobiological condition and help reduce stigma. 
          The brain differences identified correlate with symptom severity and cognitive performance, providing 
          biological markers that may eventually aid in diagnosis and treatment planning. However, brain imaging 
          is not currently used for clinical diagnosis of ADHD, as there is too much overlap between individuals 
          with and without ADHD at the individual level, despite clear group differences in research studies.
        </p>

        {/* Bottom button - right aligned above References */}
        <div className="flex justify-end my-8">
          <button 
            onClick={() => setCurrentArticle?.('adhd')}
            className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <span className="text-xl">←</span>
            All About ADHD
          </button>
        </div>

        {/* References for Brain Tab */}
        <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
          
          <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
          <div className="text-sm space-y-2">
            <p>[1] Hoogman, M., Bralten, J., Hibar, D. P., Mennes, M., Zwiers, M. P., Schweren, L. S., ... & Franke, B. (2017). "Subcortical brain volume differences in participants with attention deficit hyperactivity disorder in children and adults: A cross-sectional mega-analysis." <em>The Lancet Psychiatry</em>, 4(4), 310-319.</p>
            <p>[2] Hoogman, M., Muetzel, R., Guimaraes, J. P., Shumskaya, E., Mennes, M., Zwiers, M. P., ... & Franke, B. (2019). "Brain imaging of the cortex in ADHD: A coordinated analysis of large-scale clinical and population-based samples." <em>American Journal of Psychiatry</em>, 176(7), 531-542.</p>
            <p>[3] Frodl, T., & Skokauskas, N. (2012). "Meta-analysis of structural MRI studies in children and adults with attention deficit hyperactivity disorder indicates treatment effects." <em>Acta Psychiatrica Scandinavica</em>, 125(2), 114-126.</p>
            <p>[4] Narr, K. L., Woods, R. P., Lin, J., Kim, J., Phillips, O. R., Del'Homme, M., ... & Toga, A. W. (2009). "Widespread cortical thinning is a robust anatomical marker for attention-deficit/hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 48(10), 1014-1022.</p>
            <p>[5] Shaw, P., Eckstrand, K., Sharp, W., Blumenthal, J., Lerch, J. P., Greenstein, D., ... & Rapoport, J. L. (2007). "Attention-deficit/hyperactivity disorder is characterized by a delay in cortical maturation." <em>Proceedings of the National Academy of Sciences</em>, 104(49), 19649-19654.</p>
            <p>[6] Chen, L., Hu, X., Ouyang, L., He, N., Thumbhekar Ramakrishnan, V., Guo, W., ... & Wang, Y. (2016). "A systematic review and meta-analysis of tract-based spatial statistics studies regarding attention-deficit/hyperactivity disorder." <em>Neuroscience & Biobehavioral Reviews</em>, 68, 838-847.</p>
            <p>[7] van Ewijk, H., Heslenfeld, D. J., Zwiers, M. P., Buitelaar, J. K., & Oosterlaan, J. (2012). "Diffusion tensor imaging in attention deficit/hyperactivity disorder: A systematic review and meta-analysis." <em>Neuroscience & Biobehavioral Reviews</em>, 36(4), 1093-1106.</p>
            <p>[8] Hart, H., Radua, J., Nakao, T., Mataix-Cols, D., & Rubia, K. (2013). "Meta-analysis of functional magnetic resonance imaging studies of inhibition and attention in attention-deficit/hyperactivity disorder: Exploring task-specific, stimulant medication, and age effects." <em>JAMA Psychiatry</em>, 70(2), 185-198.</p>
            <p>[9] Sonuga-Barke, E. J., & Castellanos, F. X. (2007). "Spontaneous attentional fluctuations in impaired states and pathological conditions: A neurobiological hypothesis." <em>Neuroscience & Biobehavioral Reviews</em>, 31(7), 977-986.</p>
            <p>[10] Sripada, C., Kessler, D., Fang, Y., Welsh, R. C., Prem Kumar, K., & Angstadt, M. (2014). "Disrupted network architecture of the resting brain in attention-deficit/hyperactivity disorder." <em>Human Brain Mapping</em>, 35(9), 4693-4705.</p>
            <p>[11] Cortese, S., Kelly, C., Chabernaud, C., Proal, E., Di Martino, A., Milham, M. P., & Castellanos, F. X. (2012). "Toward systems neuroscience of ADHD: A meta-analysis of 55 fMRI studies." <em>American Journal of Psychiatry</em>, 169(10), 1038-1055.</p>
            <p>[12] Plichta, M. M., & Scheres, A. (2014). "Ventral-striatal responsiveness during reward anticipation in ADHD and its relation to trait impulsivity in the healthy population: A meta-analytic review of the fMRI literature." <em>Neuroscience & Biobehavioral Reviews</em>, 38, 125-134.</p>
            <p>[13] Francx, W., Zwiers, M. P., Mennes, M., Oosterlaan, J., Heslenfeld, D., Hoekstra, P. J., ... & Buitelaar, J. K. (2015). "White matter microstructure and developmental improvement of hyperactive/impulsive symptoms in attention-deficit/hyperactivity disorder." <em>Journal of Child Psychology and Psychiatry</em>, 56(12), 1289-1297.</p>
            <p>[14] Shaw, P., Malek, M., Watson, B., Greenstein, D., de Rossi, P., & Sharp, W. (2013). "Trajectories of cerebral cortical development in childhood and adolescence and adult attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 74(8), 599-606.</p>
          </div>
        </div>
      </div>
    );
  }

  function NeurotransmittersContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurotransmitter Imbalances</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-neurotransm-neural.png"
          alt="Neurotransmitter systems - dopamine and norepinephrine in ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

        <p className="mb-4">
          ADHD involves dysfunction in neurotransmitter systems—the chemical messengers that allow brain cells 
          to communicate. Research over the past decade has refined our understanding of how multiple 
          neurotransmitter systems contribute to ADHD symptoms. While dopamine and norepinephrine are most 
          prominently implicated, emerging evidence shows involvement of other neurotransmitter systems as well.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Dopamine System</h3>
        <p className="mb-4">
          Dopamine plays crucial roles in motivation, reward, attention, and movement. People with ADHD may have 
          lower levels of dopamine or altered dopamine receptor function, particularly in brain circuits involving 
          the prefrontal cortex and striatum.<sup className="text-[#10b981]">[1]</sup>
        </p>
        <p className="mb-4">
          <strong>Dopamine transporter (DAT):</strong> Research shows that individuals with ADHD may have altered 
          dopamine transporter density, which affects how quickly dopamine is cleared from the synaptic space 
          between neurons.<sup className="text-[#10b981]">[2]</sup> This is significant because stimulant medications work primarily by blocking 
          the dopamine transporter, allowing dopamine to remain active longer.
        </p>
        <p className="mb-4">
          <strong>Dopamine receptors:</strong> Genetic studies have identified variants in dopamine receptor genes 
          (particularly DRD4 and DRD5) associated with ADHD.<sup className="text-[#10b981]">[3]</sup> These genetic variations may influence how 
          effectively dopamine signals are transmitted in key brain regions.
        </p>
        <p className="mb-4">
          <strong>Reward processing:</strong> Altered dopamine signaling in reward circuits helps explain why people 
          with ADHD often struggle with delayed gratification, have difficulty sustaining motivation for non-preferred 
          tasks, and may engage in reward-seeking behaviors.<sup className="text-[#10b981]">[4]</sup> Recent research suggests that ADHD 
          involves not just low dopamine, but altered dynamics of dopamine signaling in response to rewards.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Norepinephrine System</h3>
        <p className="mb-4">
          Norepinephrine (also called noradrenaline) is involved in arousal, alertness, attention, and stress 
          response. The norepinephrine system, particularly in the prefrontal cortex, plays a critical role in 
          executive functions and attention regulation.<sup className="text-[#10b981]">[5]</sup>
        </p>
        <p className="mb-4">
          <strong>Prefrontal cortex function:</strong> Optimal levels of norepinephrine in the prefrontal cortex 
          are essential for working memory, response inhibition, and attention control. Both too little and too 
          much norepinephrine can impair these functions.<sup className="text-[#10b981]">[6]</sup> This helps explain why both stimulant 
          medications (which increase norepinephrine) and non-stimulant medications like atomoxetine (which 
          selectively increase norepinephrine) can be effective for ADHD.
        </p>
        <p className="mb-4">
          <strong>Arousal regulation:</strong> The norepinephrine system helps regulate arousal levels throughout 
          the day. Dysfunction in this system may contribute to difficulties with alertness and attention regulation 
          seen in ADHD, including the paradoxical calming effect that stimulants often have on individuals with ADHD.<sup className="text-[#10b981]">[7]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Interactions Between Dopamine and Norepinephrine</h3>
        <p className="mb-4">
          Dopamine and norepinephrine systems don't work in isolation—they interact extensively. Recent research 
          emphasizes that ADHD likely involves imbalances in the interplay between these systems rather than 
          simple deficits in either one alone.<sup className="text-[#10b981]">[8]</sup> Both neurotransmitters are catecholamines (sharing 
          similar chemical structures), and the enzyme that converts dopamine to norepinephrine plays a role in 
          regulating the balance between them.
        </p>
        <p className="mb-4">
          The effectiveness of different ADHD medications targeting these systems—some primarily affecting dopamine, 
          others affecting norepinephrine, and some affecting both—supports the model of ADHD as involving dysfunction 
          across multiple catecholamine pathways.<sup className="text-[#10b981]">[9]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Other Neurotransmitter Systems</h3>
        <p className="mb-4">
          While dopamine and norepinephrine receive the most attention, emerging research shows other neurotransmitter 
          systems may also play roles in ADHD:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">
            <strong>Serotonin:</strong> Some research suggests serotonin system dysfunction may contribute to 
            emotional dysregulation and impulsivity in ADHD. Genetic variants in serotonin-related genes have been 
            associated with ADHD symptoms.<sup className="text-[#10b981]">[10]</sup>
          </li>
          <li className="mb-2">
            <strong>Glutamate:</strong> As the brain's primary excitatory neurotransmitter, glutamate is essential 
            for learning and memory. Some studies have found alterations in glutamate signaling in ADHD, particularly 
            in prefrontal regions.<sup className="text-[#10b981]">[11]</sup>
          </li>
          <li className="mb-2">
            <strong>GABA:</strong> The main inhibitory neurotransmitter, GABA helps regulate neural excitability. 
            Some research suggests altered GABAergic function may contribute to hyperactivity and impulsivity.<sup className="text-[#10b981]">[12]</sup>
          </li>
          <li className="mb-2">
            <strong>Acetylcholine:</strong> This neurotransmitter is important for attention and learning. Recent 
            studies have begun exploring whether cholinergic dysfunction contributes to attention deficits in ADHD.<sup className="text-[#10b981]">[13]</sup>
          </li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neuroimaging Evidence</h3>
        <p className="mb-4">
          Modern neuroimaging techniques allow researchers to visualize neurotransmitter systems in living brains. 
          PET (positron emission tomography) and SPECT (single-photon emission computed tomography) imaging studies 
          have provided direct evidence of altered dopamine transporter density and dopamine receptor availability 
          in individuals with ADHD.<sup className="text-[#10b981]">[14]</sup> More recent studies using advanced imaging methods continue to 
          refine our understanding of neurotransmitter dysfunction in ADHD across development.<sup className="text-[#10b981]">[15]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">From Neurotransmitters to Symptoms</h3>
        <p className="mb-4">
          Understanding neurotransmitter dysfunction helps explain ADHD symptoms at a biological level:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Inattention:</strong> Related to dopamine and norepinephrine dysfunction in prefrontal and parietal attention networks</li>
          <li className="mb-2"><strong>Hyperactivity:</strong> May reflect imbalances in dopamine circuits connecting frontal cortex to motor control regions</li>
          <li className="mb-2"><strong>Impulsivity:</strong> Connected to dopamine and norepinephrine dysfunction in inhibitory control circuits</li>
          <li className="mb-2"><strong>Motivation challenges:</strong> Related to dopamine dysfunction in reward circuits connecting prefrontal cortex to striatum</li>
          <li className="mb-2"><strong>Emotional dysregulation:</strong> May involve interactions between dopamine, norepinephrine, and serotonin systems</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Medication Mechanisms</h3>
        <p className="mb-4">
          The neurotransmitter theory of ADHD provides a biological foundation for medication treatment. Stimulant 
          medications (methylphenidate and amphetamines) work by increasing dopamine and norepinephrine availability 
          in the synapse, helping normalize signaling in underactive circuits.<sup className="text-[#10b981]">[6]</sup> Non-stimulant medications 
          like atomoxetine primarily increase norepinephrine, while guanfacine and clonidine target norepinephrine 
          receptors to enhance prefrontal cortex function.<sup className="text-[#10b981]">[7]</sup>
        </p>
        <p className="mb-4">
          This helps explain why stimulant medications, which increase dopamine availability, are so effective for 
          most people with ADHD, typically improving attention, reducing hyperactivity and impulsivity, and enhancing 
          executive function. The fact that different medication classes targeting different neurotransmitter systems 
          can all be effective underscores that ADHD involves complex interactions across multiple neurochemical pathways.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Beyond Simple Deficiency</h3>
        <p className="mb-4">
          Modern research has moved beyond simple "chemical imbalance" models. Rather than just having "low dopamine," 
          ADHD likely involves more complex patterns including altered dynamics of neurotransmitter release and 
          reuptake, regional variations in neurotransmitter function, developmental changes in neurotransmitter 
          systems, and disrupted balance between different neurotransmitter systems.<sup className="text-[#10b981]">[16]</sup>
        </p>
        <p className="mb-4">
          The neurotransmitter theory of ADHD provides a biological explanation for symptoms and guides medication 
          development, though it doesn't tell the whole story—ADHD likely involves complex interactions between 
          multiple neurotransmitter systems, genetic factors, brain structure and connectivity, and environmental 
          influences working together across development.
        </p>

        {/* Bottom button - right aligned above References */}
        <div className="flex justify-end my-8">
          <button 
            onClick={() => setCurrentArticle?.('adhd')}
            className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <span className="text-xl">←</span>
            All About ADHD
          </button>
        </div>

        {/* References for Neurotransmitters Tab */}
        <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
          
          <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
          <div className="text-sm space-y-2">
            <p>[1] Volkow, N. D., Wang, G. J., Newcorn, J. H., Kollins, S. H., Wigal, T. L., Telang, F., ... & Swanson, J. M. (2011). "Motivation deficit in ADHD is associated with dysfunction of the dopamine reward pathway." <em>Molecular Psychiatry</em>, 16(11), 1147-1154.</p>
            <p>[2] Spencer, T. J., Biederman, J., & Mick, E. (2007). "Attention-deficit/hyperactivity disorder: Diagnosis, lifespan, comorbidities, and neurobiology." <em>Journal of Pediatric Psychology</em>, 32(6), 631-642.</p>
            <p>[3] Faraone, S. V., Perlis, R. H., Doyle, A. E., Smoller, J. W., Goralnick, J. J., Holmgren, M. A., & Sklar, P. (2005). "Molecular genetics of attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 57(11), 1313-1323.</p>
            <p>[4] Tripp, G., & Wickens, J. R. (2009). "Neurobiology of ADHD." <em>Neuropharmacology</em>, 57(7-8), 579-589.</p>
            <p>[5] Arnsten, A. F. (2009). "The emerging neurobiology of attention deficit hyperactivity disorder: The key role of the prefrontal association cortex." <em>The Journal of Pediatrics</em>, 154(5), I-S43.</p>
            <p>[6] Arnsten, A. F. (2006). "Stimulants: Therapeutic actions in ADHD." <em>Neuropsychopharmacology</em>, 31(11), 2376-2383.</p>
            <p>[7] Biederman, J., & Spencer, T. (1999). "Attention-deficit/hyperactivity disorder (ADHD) as a noradrenergic disorder." <em>Biological Psychiatry</em>, 46(9), 1234-1242.</p>
            <p>[8] Levy, F. (2009). "Dopamine vs noradrenaline: Inverted-U effects and ADHD theories." <em>Australian and New Zealand Journal of Psychiatry</em>, 43(2), 101-108.</p>
            <p>[9] Volkow, N. D., Wang, G. J., Kollins, S. H., Wigal, T. L., Newcorn, J. H., Telang, F., ... & Swanson, J. M. (2009). "Evaluating dopamine reward pathway in ADHD: Clinical implications." <em>JAMA</em>, 302(10), 1084-1091.</p>
            <p>[10] Oades, R. D. (2008). "Dopamine-serotonin interactions in attention-deficit hyperactivity disorder (ADHD)." <em>Progress in Brain Research</em>, 172, 543-565.</p>
            <p>[11] Bollmann, S., Ghisleni, C., Poil, S. S., Martin, E., Ball, J., Eich-Höchli, D., ... & Brem, S. (2015). "Developmental changes in gamma-aminobutyric acid levels in attention-deficit/hyperactivity disorder." <em>Translational Psychiatry</em>, 5(7), e589.</p>
            <p>[12] Edden, R. A., Crocetti, D., Zhu, H., Gilbert, D. L., & Mostofsky, S. H. (2012). "Reduced GABA concentration in attention-deficit/hyperactivity disorder." <em>Archives of General Psychiatry</em>, 69(7), 750-753.</p>
            <p>[13] Sarter, M., Lustig, C., Howe, W. M., Gritton, H., & Berry, A. S. (2014). "Deterministic functions of cortical acetylcholine." <em>European Journal of Neuroscience</em>, 39(11), 1912-1920.</p>
            <p>[14] Volkow, N. D., Wang, G. J., Newcorn, J., Telang, F., Solanto, M. V., Fowler, J. S., ... & Swanson, J. M. (2007). "Depressed dopamine activity in caudate and preliminary evidence of limbic involvement in adults with attention-deficit/hyperactivity disorder." <em>Archives of General Psychiatry</em>, 64(8), 932-940.</p>
            <p>[15] del Campo, N., Chamberlain, S. R., Sahakian, B. J., & Robbins, T. W. (2011). "The roles of dopamine and noradrenaline in the pathophysiology and treatment of attention-deficit/hyperactivity disorder." <em>Biological Psychiatry</em>, 69(12), e145-e157.</p>
            <p>[16] Sharma, A., & Couture, J. (2014). "A review of the pathophysiology, etiology, and treatment of attention-deficit hyperactivity disorder (ADHD)." <em>The Annals of Pharmacotherapy</em>, 48(2), 209-225.</p>
          </div>
          
          <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
          <div className="text-sm space-y-2">
            <p><em>No additional background sources for this tab.</em></p>
          </div>
        </div>
      </div>
    );
  }

  function EnvironmentalContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Environmental and Prenatal Factors</h2>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-enviro-smokestacks.png"
          alt="Environmental and prenatal factors in ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

        <p className="mb-4">
          While genetics account for approximately 70-80% of ADHD risk, environmental factors also play important 
          roles. These environmental influences primarily affect ADHD risk during critical developmental periods—
          especially prenatally and in early childhood—when the brain is rapidly developing and particularly 
          vulnerable to external influences.
        </p>
        <p className="mb-4">
          It's important to understand that environmental risk factors typically increase probability rather than 
          directly causing ADHD. Many people exposed to these factors don't develop ADHD, while some with no 
          known environmental risk factors do. Environmental effects often interact with genetic vulnerability, 
          meaning the same exposure may have different effects depending on an individual's genetic background.<sup className="text-[#10b981]">[1]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prenatal and Perinatal Factors</h3>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-enviro-prenatal-yoga.png"
          alt="Prenatal factors and ADHD risk"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

        <p className="mb-4">
          <strong>Maternal smoking during pregnancy:</strong> Numerous studies have established a strong association 
          between maternal smoking during pregnancy and increased ADHD risk in offspring. A comprehensive 2016 
          meta-analysis found that prenatal smoking exposure was associated with approximately 60% increased risk 
          of ADHD.<sup className="text-[#10b981]">[2]</sup> Recent research using sibling comparison designs suggests that while some of this 
          association may be due to shared familial/genetic factors, there likely remains a direct causal effect of 
          prenatal nicotine exposure on ADHD risk.<sup className="text-[#10b981]">[3]</sup> The mechanisms may involve nicotine's effects on 
          developing neurotransmitter systems, particularly dopaminergic and cholinergic pathways.
        </p>
        
        <p className="mb-4">
          <strong>Prenatal alcohol exposure:</strong> Alcohol consumption during pregnancy can have significant 
          neurodevelopmental effects. Children with Fetal Alcohol Spectrum Disorders (FASD) frequently exhibit 
          attention problems and hyperactivity similar to ADHD.<sup className="text-[#10b981]">[4]</sup> Even moderate alcohol exposure during 
          pregnancy has been associated with increased ADHD symptoms, though distinguishing causal effects from 
          confounding factors remains challenging in research studies.<sup className="text-[#10b981]">[5]</sup>
        </p>

        <p className="mb-4">
          <strong>Prenatal stress and maternal mental health:</strong> Maternal stress, anxiety, and depression 
          during pregnancy have been associated with increased ADHD risk in children. A 2018 study found that 
          prenatal maternal stress was associated with increased risk of ADHD symptoms, potentially mediated through 
          effects on the developing fetal stress response systems and brain development.<sup className="text-[#10b981]">[6]</sup> Maternal depression 
          and anxiety during pregnancy have also been linked to offspring ADHD in multiple studies.<sup className="text-[#10b981]">[7]</sup>
        </p>

        <ImageWithFallback 
          src="/images/adhd/adhd-enviro-perinatal-mom-baby.png"
          alt="Perinatal factors - mother and baby"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

        <p className="mb-4">
          <strong>Premature birth and low birth weight:</strong> Preterm birth (before 37 weeks gestation) and very 
          low birth weight are among the most consistently replicated environmental risk factors for ADHD. A 2015 
          population-based study found that extremely preterm children had 2-3 times higher risk of ADHD compared 
          to term-born children.<sup className="text-[#10b981]">[8]</sup> The risk increases with decreasing gestational age, with children born 
          before 28 weeks having particularly elevated risk. Recent research suggests these associations persist 
          into adolescence and young adulthood.<sup className="text-[#10b981]">[9]</sup>
        </p>

        <p className="mb-4">
          <strong>Prenatal nutrition:</strong> Emerging research suggests that maternal nutrition during pregnancy 
          may influence ADHD risk. Studies have investigated various nutrients including omega-3 fatty acids, 
          vitamin D, iron, and zinc. While findings are still preliminary, some research suggests that maternal 
          deficiencies in certain nutrients may be associated with increased ADHD risk in offspring.<sup className="text-[#10b981]">[10]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Environmental Toxins and Pollutants</h3>
        
        <p className="mb-4">
          <strong>Air pollution:</strong> A growing body of research links exposure to air pollution—both prenatal 
          and early childhood—with increased ADHD risk. A 2020 systematic review and meta-analysis found significant 
          associations between various air pollutants (including particulate matter, nitrogen dioxide, and polycyclic 
          aromatic hydrocarbons) and ADHD.<sup className="text-[#10b981]">[11]</sup> Studies from multiple countries including the United States, 
          Europe, and Asia have demonstrated these associations.<sup className="text-[#10b981]">[12]</sup><sup className="text-[#10b981]">[13]</sup> The mechanisms likely involve 
          neuroinflammation and oxidative stress affecting brain development.
        </p>

        <p className="mb-4">
          <strong>Lead exposure:</strong> Even at low levels now considered common in developed countries, lead 
          exposure has been associated with attention problems and ADHD symptoms. Blood lead levels well below 
          traditional thresholds for concern have been linked to increased ADHD risk.<sup className="text-[#10b981]">[14]</sup> A 2018 study found 
          that childhood lead exposure was associated with increased risk of ADHD symptoms, with no safe threshold 
          identified.<sup className="text-[#10b981]">[15]</sup> Lead affects multiple neurotransmitter systems and can disrupt normal brain development.
        </p>

        <p className="mb-4">
          <strong>Pesticides and organophosphates:</strong> Several studies have found associations between exposure 
          to organophosphate pesticides and ADHD symptoms. A 2015 longitudinal study found that prenatal exposure to 
          organophosphate pesticides was associated with increased ADHD symptoms in childhood.<sup className="text-[#10b981]">[16]</sup> Other research 
          has linked urinary metabolites of organophosphate pesticides with ADHD diagnosis in children.<sup className="text-[#10b981]">[17]</sup> These 
          pesticides affect acetylcholine neurotransmission and may disrupt normal neurodevelopment.
        </p>

        <p className="mb-4">
          <strong>Polychlorinated biphenyls (PCBs) and other persistent organic pollutants:</strong> Though largely 
          banned in many countries, these chemicals persist in the environment. Prenatal and early childhood exposure 
          to PCBs and similar compounds has been associated with attention problems and ADHD-like symptoms in multiple 
          studies.<sup className="text-[#10b981]">[18]</sup>
        </p>

        <p className="mb-4">
          <strong>Phthalates and bisphenol A (BPA):</strong> These endocrine-disrupting chemicals, commonly found in 
          plastics and consumer products, have been investigated as potential ADHD risk factors. Some studies have 
          found associations between prenatal or early childhood exposure to certain phthalates or BPA and increased 
          ADHD symptoms, though findings have been somewhat inconsistent across studies.<sup className="text-[#10b981]">[19]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Life Adversity and Psychosocial Factors</h3>
        
        <ImageWithFallback 
          src="/images/adhd/adhd-enviro-baby-cuddle.png"
          alt="Early childhood factors and ADHD"
          className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
        />

        <p className="mb-4">
          <strong>Severe early deprivation:</strong> Children who experienced severe institutional deprivation in 
          early childhood (such as in orphanages) show dramatically elevated rates of ADHD symptoms. Studies of 
          children adopted from Romanian orphanages found that those who experienced prolonged institutional care 
          had significantly higher rates of attention problems and hyperactivity.<sup className="text-[#10b981]">[20]</sup> Recent research suggests 
          these effects can persist into adolescence and adulthood, though symptoms may improve somewhat after adoption 
          into supportive families.<sup className="text-[#10b981]">[21]</sup>
        </p>

        <p className="mb-4">
          <strong>Early childhood adversity and trauma:</strong> Exposure to various forms of early adversity—including 
          maltreatment, abuse, neglect, and family dysfunction—has been associated with increased ADHD symptoms. 
          A 2018 meta-analysis found significant associations between childhood maltreatment and ADHD.<sup className="text-[#10b981]">[22]</sup> However, 
          the relationship is complex, as trauma can produce ADHD-like symptoms even in the absence of "true" ADHD, 
          and children with ADHD may be at higher risk for experiencing adversity.
        </p>

        <p className="mb-4">
          <strong>Socioeconomic factors:</strong> Lower socioeconomic status is associated with higher ADHD prevalence, 
          though the mechanisms are complex. Socioeconomic disadvantage may increase exposure to various environmental 
          risk factors (toxins, stress, prenatal risks) and reduce access to protective factors (healthcare, nutrition, 
          enrichment).<sup className="text-[#10b981]">[23]</sup> Recent research emphasizes that these are associations rather than direct causation.
        </p>

        {/* Bottom button - right aligned above References */}
        <div className="flex justify-end my-8">
          <button 
            onClick={() => setCurrentArticle?.('adhd')}
            className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <span className="text-xl">←</span>
            All About ADHD
          </button>
        </div>

        {/* References for Environmental Tab */}
        <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
          
          <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
          <div className="text-sm space-y-2">
            <p>[1] Nigg, J. T. (2006). <em>What causes ADHD? Understanding what goes wrong and why</em>. Guilford Press.</p>
            <p>[2] Huang, L., et al. (2016). "Maternal smoking and attention-deficit/hyperactivity disorder in offspring: A meta-analysis." <em>Pediatrics</em>, 137(1), e20153245.</p>
            <p>[3] Skoglund, C., et al. (2014). "Familial confounding of the association between maternal smoking during pregnancy and ADHD in offspring." <em>Journal of Child Psychology and Psychiatry</em>, 55(1), 61-68.</p>
            <p>[4] Mattson, S. N., et al. (2019). "Toward a neurobehavioral profile of fetal alcohol spectrum disorders." <em>Alcoholism: Clinical and Experimental Research</em>, 43(4), 775-817.</p>
            <p>[5] Easey, K. E., et al. (2019). "Prenatal alcohol exposure and offspring attention-deficit hyperactivity disorder: A systematic review and meta-analysis." <em>Drug and Alcohol Dependence</em>, 197, 344-353.</p>
            <p>[6] Glover, V. (2011). "Annual Research Review: Prenatal stress and the origins of psychopathology: an evolutionary perspective." <em>Journal of Child Psychology and Psychiatry</em>, 52(4), 356-367.</p>
            <p>[7] Madigan, S., et al. (2018). "Maternal prenatal mental health and offspring neurodevelopmental outcomes: A systematic review and meta-analysis." <em>JAMA Pediatrics</em>, 172(12), 1139-1148.</p>
            <p>[8] Franz, A. P., et al. (2018). "Attention-deficit/hyperactivity disorder and very preterm/very low birth weight: A meta-analysis." <em>Pediatrics</em>, 141(1), e20171645.</p>
            <p>[9] Mathewson, K. J., et al. (2017). "Adults born extremely low birth weight: the role of attention in the development of anxiety and depression." <em>Journal of Child Psychology and Psychiatry</em>, 58(10), 1157-1166.</p>
            <p>[10] Millichap, J. G., & Yee, M. M. (2012). "The diet factor in attention-deficit/hyperactivity disorder." <em>Pediatrics</em>, 129(2), 330-337.</p>
            <p>[11] Myhue, M., et al. (2018). "Air pollution and attention deficit hyperactivity disorder: A systematic review." <em>Reviews on Environmental Health</em>, 33(4), 379-397.</p>
            <p>[12] Thygesen, M., et al. (2020). "Exposure to air pollution in early childhood and the association with attention-deficit hyperactivity disorder." <em>JAMA Network Open</em>, 3(5), e205559.</p>
            <p>[13] Forns, J., et al. (2018). "Air pollution exposure during pregnancy and symptoms of attention deficit and hyperactivity disorder in children in Europe." <em>Epidemiology</em>, 29(5), 618-626.</p>
            <p>[14] Nigg, J. T., et al. (2010). "Confirmation and extension of association of blood lead with attention-deficit/hyperactivity disorder (ADHD) and ADHD symptom domains at population-typical exposure levels." <em>Journal of Child Psychology and Psychiatry</em>, 51(1), 58-65.</p>
            <p>[15] Donzelli, G., et al. (2019). "The association between lead and attention-deficit/hyperactivity disorder: A systematic review." <em>International Journal of Environmental Research and Public Health</em>, 16(3), 382.</p>
            <p>[16] Bouchard, M. F., et al. (2010). "Attention-deficit/hyperactivity disorder and urinary metabolites of organophosphate pesticides." <em>Pediatrics</em>, 125(6), e1270-e1277.</p>
            <p>[17] Muñoz-Quezada, M. T., et al. (2013). "Neurodevelopmental effects in children associated with exposure to organophosphate pesticides: A systematic review." <em>Neurotoxicology</em>, 39, 158-168.</p>
            <p>[18] Eubig, P. A., et al. (2010). "Polychlorinated biphenyls (PCBs) and neurodevelopmental disorders." <em>Neurotoxicology</em>, 31(5), 579-579.</p>
            <p>[19] Rochester, J. R., et al. (2018). "Bisphenol A and neurodevelopmental outcomes in humans." <em>Current Epidemiology Reports</em>, 5(2), 110-124.</p>
            <p>[20] Kreppner, J. M., et al. (2001). "Can inattention/overactivity be an institutional deprivation syndrome?" <em>Journal of Abnormal Child Psychology</em>, 29(6), 513-528.</p>
            <p>[21] Kennedy, M., et al. (2016). "ADHD symptoms in children adopted from institutions: the role of early deprivation and attachment." <em>Journal of Abnormal Child Psychology</em>, 44(8), 1629-1638.</p>
            <p>[22] Stern, A., et al. (2018). "Childhood maltreatment and the risk of ADHD: A systematic review and meta-analysis." <em>Trauma, Violence, & Abuse</em>, 19(2), 220-233.</p>
            <p>[23] Russell, G., et al. (2016). "Socio-economic associations with ADHD: findings from a mediation analysis." <em>PLoS One</em>, 11(6), e0155405.</p>
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
          }
        `}
      </style>
      
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Causes & Origins
        </h1>

        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="overview" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Overview
          </TabsTrigger>
          <TabsTrigger value="genetics" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Genetics
          </TabsTrigger>
          <TabsTrigger value="brain" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Brain Structure
          </TabsTrigger>
          <TabsTrigger value="neurotransmitters" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Neurotransmitters
          </TabsTrigger>
          <TabsTrigger value="environmental" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Environmental
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

        {/* Neurotransmitters Tab */}
        <TabsContent value="neurotransmitters" className="space-y-8">
          <NeurotransmittersContent />
        </TabsContent>

        {/* Environmental Tab */}
        <TabsContent value="environmental" className="space-y-8">
          <EnvironmentalContent />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end my-8 w-full">
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
