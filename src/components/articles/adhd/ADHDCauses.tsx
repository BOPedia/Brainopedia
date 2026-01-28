import { ImageWithFallback } from '../../figma/ImageWithFallback';
import dnaImage from '/images/35401594f5271eb6ffe593fab4f689790f2a9ddc.png';
import geneticsTreeImage from '/images/9759f811da820d0e2d21cb9d46720ea250db4c2f.png';
import brainAnatomyImage from '/images/c894cde8a6ff6f93903ce6650915656cb01c1eb9.png';
import neuronImage from '/images/62ed4e49bf1dbdb65df8f172e4e46c32afb854ed.png';
import environmentalImage from '/images/7edb982eb3be38c799f395add2636e312a645603.png';
import geneEnvironmentImage from '/images/6093266e331941ccb3b9ff07e9b1dd297377a26c.png';
import prenatalFactorsImage from '/images/2fcd4922eeee2f593cfdeaea44ef60d932bcd315.png';
import earlyLifeImage from '/images/aa5157bd9c05a7eb46fea9a301b2ba4ae172ea8b.png';
import riskCausationImage from '/images/d398e61c21ca18805498513c61274ab2ccdc81f2.png';
import { ADHDMyths } from '../../infographics/ADHDMyths';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';

interface ADHDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function ADHDCauses({ setCurrentArticle }: ADHDCausesProps) {
  function OverviewContent() {
    return (
      <>
        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Understanding the Causes of ADHD</h2>
          
          <img 
            src={dnaImage} 
            alt="Glowing DNA double helix representing the genetic basis of ADHD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
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
            src={geneEnvironmentImage} 
            alt="Nature environment representing gene-environment interactions"
            className="w-80 h-auto rounded-md border border-gray-300 md:float-none lg:float-right md:mx-auto lg:ml-6 mb-4"
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
        
        <img 
          src={geneticsTreeImage} 
          alt="Glowing family tree with illuminated nodes representing genetic inheritance patterns of ADHD"
          className="w-96 h-auto rounded-md border border-gray-300 md:float-none lg:float-left md:mx-auto lg:mr-6 mb-4"
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
          src={brainAnatomyImage} 
          alt="Brain neuroscience showing structural and functional differences in ADHD"
          className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
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
        
        <img 
          src={neuronImage} 
          alt="Artistic representation of a neuron and neural connections showing neurotransmitter pathways"
          className="w-96 h-auto rounded-md border border-gray-300 md:float-none lg:float-left md:mx-auto lg:mr-6 mb-4"
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
        
        <img 
          src={environmentalImage} 
          alt="Industrial environment representing environmental risk factors like pollution and lead exposure"
          className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
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
        
        <img 
          src={prenatalFactorsImage} 
          alt="Pregnant women practicing prenatal yoga representing prenatal health and wellness"
          className="w-full max-w-md rounded-md border border-gray-300 mb-6"
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
        
        <img 
          src={earlyLifeImage} 
          alt="Mother holding baby in golden sunlight representing early life and perinatal factors"
          className="w-full max-w-md rounded-md border border-gray-300 mb-6"
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
          enrichment).<sup className="text-[#10b981]">[23]</sup> Recent research emphasizes that these are associations rather than direct causes.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Other Environmental Considerations</h3>

        <p className="mb-4">
          <strong>Traumatic brain injury:</strong> Head injuries, particularly those affecting frontal brain regions, 
          can lead to attention and executive function problems similar to ADHD. While most ADHD cases don't result 
          from brain injury, individuals who sustain significant head trauma may develop secondary ADHD-like symptoms.<sup className="text-[#10b981]">[24]</sup>
        </p>

        <p className="mb-4">
          <strong>Prenatal medication exposure:</strong> Some research has investigated whether certain medications 
          taken during pregnancy might affect ADHD risk. Acetaminophen (paracetamol) use during pregnancy has been 
          associated with increased ADHD risk in some studies, though the evidence is mixed and confounding by 
          indication (the reason for taking medication) complicates interpretation.<sup className="text-[#10b981]">[25]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gene-Environment Interactions</h3>
        
        <p className="mb-4">
          Environmental risk factors don't affect everyone equally. Research increasingly shows that genetic factors 
          can moderate environmental effects—a concept called gene-environment interaction. For example, individuals 
          with certain genetic variants may be more susceptible to the negative effects of prenatal smoking exposure 
          or environmental toxins.<sup className="text-[#10b981]">[26]</sup> Similarly, protective genetic factors might buffer against environmental 
          risks. This helps explain why the same environmental exposure produces different outcomes in different people.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Risk vs. Causation</h3>
        
        <p className="mb-4">
          It's crucial to distinguish between risk factors and causes. Most environmental factors discussed here are 
          <em>associated</em> with increased ADHD risk but don't inevitably cause ADHD. Many children exposed to these 
          factors never develop ADHD, and many with ADHD had no known exposure. Environmental factors typically:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2">Increase probability of ADHD rather than directly causing it</li>
          <li className="mb-2">Have modest effect sizes compared to genetic factors</li>
          <li className="mb-2">Often interact with genetic vulnerability</li>
          <li className="mb-2">May be markers for other unmeasured risk factors</li>
          <li className="mb-2">Can affect symptom severity even if they don't cause ADHD</li>
        </ul>

        <p className="mb-4">
          Understanding these environmental risk factors is important for prevention efforts and helps explain why ADHD 
          prevalence might vary across different populations and time periods. However, the predominant cause of ADHD 
          remains genetic and neurobiological, with environmental factors playing a modifying rather than primary role 
          in most cases.
        </p>
        
        <img 
          src={riskCausationImage} 
          alt="Mother holding child representing environmental and developmental factors in ADHD"
          className="w-full max-w-md rounded-md border border-gray-300 mt-6"
        />

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

        {/* References for Environmental Factors Tab */}
        <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
          
          <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
          <div className="text-sm space-y-2">
            <p>[1] Thapar, A., Cooper, M., & Rutter, M. (2017). "Neurodevelopmental disorders." <em>The Lancet Psychiatry</em>, 4(4), 339-346.</p>
            <p>[2] Huang, L., Wang, Y., Zhang, L., Zheng, Z., Zhu, T., Qu, Y., & Mu, D. (2018). "Maternal smoking and attention-deficit/hyperactivity disorder in offspring: A meta-analysis." <em>Pediatrics</em>, 141(1), e20172465.</p>
            <p>[3] Obel, C., Zhu, J. L., Olsen, J., Breining, S., Li, J., Grønborg, T. K., ... & Rutter, M. (2016). "The risk of attention deficit hyperactivity disorder in children exposed to maternal smoking during pregnancy - a re-examination using a sibling design." <em>Journal of Child Psychology and Psychiatry</em>, 57(4), 532-537.</p>
            <p>[4] Weyrauch, D., Schwartz, M., Hart, B., Klug, M. G., & Burd, L. (2017). "Comorbid mental disorders in fetal alcohol spectrum disorders: A systematic review." <em>Journal of Developmental and Behavioral Pediatrics</em>, 38(4), 283-291.</p>
            <p>[5] Sayal, K., Heron, J., Golding, J., & Emond, A. (2014). "Prenatal alcohol exposure and gender differences in childhood mental health problems: A longitudinal population-based study." <em>Pediatrics</em>, 133(2), e388-e398.</p>
            <p>[6] Grizenko, N., Shayan, Y. R., Polotskaia, A., Ter-Stepanian, M., & Joober, R. (2008). "Relation of maternal stress during pregnancy to symptom severity and response to treatment in children with ADHD." <em>Journal of Psychiatry & Neuroscience</em>, 33(1), 10-16.</p>
            <p>[7] Morales, E., Julvez, J., Torrent, M., Ballester, F., Rodríguez-Bernal, C. L., Andiarena, A., ... & Sunyer, J. (2015). "Vitamin D in pregnancy and attention deficit hyperactivity disorder-like symptoms in childhood." <em>Epidemiology</em>, 26(4), 458-465.</p>
            <p>[8] Franz, A. P., Bolat, G. U., Bolat, H., Matijasevich, A., Santos, I. S., Silveira, R. C., ... & Moreira-Maia, C. R. (2018). "Attention-deficit/hyperactivity disorder and very preterm/very low birth weight: A meta-analysis." <em>Pediatrics</em>, 141(1), e20171645.</p>
            <p>[9] Aarnoudse-Moens, C. S., Weisglas-Kuperus, N., van Goudoever, J. B., & Oosterlaan, J. (2009). "Meta-analysis of neurobehavioral outcomes in very preterm and/or very low birth weight children." <em>Pediatrics</em>, 124(2), 717-728.</p>
            <p>[10] Pelsser, L. M., Frankena, K., Toorman, J., Savelkoul, H. F., Dubois, A. E., Pereira, R. R., ... & Buitelaar, J. K. (2011). "Effects of a restricted elimination diet on the behaviour of children with attention-deficit hyperactivity disorder (INCA study): A randomised controlled trial." <em>The Lancet</em>, 377(9764), 494-503.</p>
            <p>[11] Donzelli, G., Carducci, A., Llopis-Gonzalez, A., Verani, M., Llopis-Morales, A., Cioni, L., & Morales-Suárez-Varela, M. (2020). "The association between air pollution and the attention-deficit/hyperactivity disorder: A systematic review." <em>International Journal of Environmental Research and Public Health</em>, 17(11), 4071.</p>
            <p>[12] Forns, J., Dadvand, P., Esnaola, M., Alvarez-Pedrerol, M., López-Vicente, M., Garcia-Esteban, R., ... & Sunyer, J. (2017). "Longitudinal association between air pollution exposure at school and cognitive development in school children over a period of 3.5 years." <em>Environmental Research</em>, 159, 416-421.</p>
            <p>[13] Min, J. Y., & Min, K. B. (2017). "Exposure to ambient PM10 and NO2 and the incidence of attention-deficit hyperactivity disorder in childhood." <em>Environment International</em>, 99, 221-227.</p>
            <p>[14] Goodlad, J. K., Marcus, D. K., & Fulton, J. J. (2013). "Lead and attention-deficit/hyperactivity disorder (ADHD) symptoms: A meta-analysis." <em>Clinical Psychology Review</em>, 33(3), 417-425.</p>
            <p>[15] Nilsen, F. M., Ruiz, J. D., Tulve, N. S., & Community Health Studies Team. (2020). "A meta-analysis of stressors from the total environment associated with children's general cognitive ability." <em>International Journal of Environmental Research and Public Health</em>, 17(15), 5451.</p>
            <p>[16] Marks, A. R., Harley, K., Bradman, A., Kogut, K., Barr, D. B., Johnson, C., ... & Eskenazi, B. (2010). "Organophosphate pesticide exposure and attention in young Mexican-American children: The CHAMACOS study." <em>Environmental Health Perspectives</em>, 118(12), 1768-1774.</p>
            <p>[17] Bouchard, M. F., Bellinger, D. C., Wright, R. O., & Weisskopf, M. G. (2010). "Attention-deficit/hyperactivity disorder and urinary metabolites of organophosphate pesticides." <em>Pediatrics</em>, 125(6), e1270-e1277.</p>
            <p>[18] Sagiv, S. K., Thurston, S. W., Bellinger, D. C., Amarasiriwardena, C., & Korrick, S. A. (2012). "Prenatal organochlorine exposure and behaviors associated with attention deficit hyperactivity disorder in school-aged children." <em>American Journal of Epidemiology</em>, 175(12), 1271-1283.</p>
            <p>[19] Engel, S. M., Miodovnik, A., Canfield, R. L., Zhu, C., Silva, M. J., Calafat, A. M., & Wolff, M. S. (2010). "Prenatal phthalate exposure is associated with childhood behavior and executive functioning." <em>Environmental Health Perspectives</em>, 118(4), 565-571.</p>
            <p>[20] Kreppner, J. M., O'Connor, T. G., Rutter, M., & English and Romanian Adoptees Study Team. (2001). "Can inattention/overactivity be an institutional deprivation syndrome?" <em>Journal of Abnormal Child Psychology</em>, 29(6), 513-528.</p>
            <p>[21] Kennedy, M., Kreppner, J., Knights, N., Kumsta, R., Maughan, B., Golm, D., ... & Sonuga-Barke, E. J. (2016). "Early severe institutional deprivation is associated with a persistent variant of adult attention-deficit/hyperactivity disorder: Clinical presentation, developmental continuities and life circumstances in the English and Romanian Adoptees study." <em>Journal of Child Psychology and Psychiatry</em>, 57(10), 1113-1125.</p>
            <p>[22] Lim, L., Hart, H., Howells, H., Mehta, M. A., Simmons, A., Mirza, K., & Rubia, K. (2018). "Altered white matter connectivity in young people exposed to childhood abuse: A tract-based spatial statistics (TBSS) and tractography study." <em>Journal of Psychiatry & Neuroscience</em>, 43(3), 170241.</p>
            <p>[23] Russell, A. E., Ford, T., Williams, R., & Russell, G. (2016). "The association between socioeconomic disadvantage and attention deficit/hyperactivity disorder (ADHD): A systematic review." <em>Child Psychiatry & Human Development</em>, 47(3), 440-458.</p>
            <p>[24] Sinopoli, K. J., & Dennis, M. (2012). "Inhibitory control after traumatic brain injury in children." <em>International Journal of Developmental Neuroscience</em>, 30(3), 207-215.</p>
            <p>[25] Ystrom, E., Gustavson, K., Brandlistuen, R. E., Knudsen, G. P., Magnus, P., Susser, E., ... & Reichborn-Kjennerud, T. (2017). "Prenatal exposure to acetaminophen and risk of ADHD." <em>Pediatrics</em>, 140(5), e20163840.</p>
            <p>[26] Nigg, J., Nikolas, M., & Burt, S. A. (2010). "Measured gene-by-environment interaction in relation to attention-deficit/hyperactivity disorder." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 49(9), 863-873.</p>
          </div>
          
          <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
          <div className="text-sm space-y-2">
            <p>Barkley, R. A. (2015). <em>Attention-Deficit Hyperactivity Disorder: A Handbook for Diagnosis and Treatment</em> (4th ed.). Guilford Press.</p>
            <p>Brown, T. E. (2013). <em>A New Understanding of ADHD in Children and Adults: Executive Function Impairments</em>. Routledge.</p>
            <p>Centers for Disease Control and Prevention. (2022). "ADHD: Causes of ADHD." Retrieved from https://www.cdc.gov/ncbddd/adhd/facts.html</p>
            <p>National Institute of Mental Health. (2023). "Attention-Deficit/Hyperactivity Disorder." Retrieved from https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd</p>
          </div>
        </div>
      </div>
    );
  }

  function MythsContent() {
    return (
      <div>
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Myths and Misconceptions About ADHD Causes</h2>
        
        <div className="md:float-none lg:float-left md:mx-auto lg:mr-6 mb-4 w-96">
          <ADHDMyths />
        </div>
        
        <p className="mb-4">
          Despite decades of scientific research establishing ADHD as a neurodevelopmental condition with strong 
          genetic and neurobiological bases, many myths and misconceptions persist in popular culture. These 
          misconceptions can increase stigma, lead to inappropriate blame, and prevent people from seeking 
          appropriate help. Understanding what does <em>not</em> cause ADHD is as important as understanding 
          what does.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #1: Poor Parenting Causes ADHD</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> ADHD is caused by permissive parenting, lack of discipline, or insufficient 
          structure at home.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> Parenting style does not cause ADHD. Research consistently shows that ADHD 
          is a neurodevelopmental condition with strong genetic and biological bases. Multiple studies have 
          demonstrated that ADHD symptoms are present across different parenting styles, cultures, and family 
          structures.<sup className="text-[#10b981]">[1]</sup> While parenting approaches can influence how symptoms are managed and how 
          severe they appear, they don't create the underlying neurological differences that characterize ADHD.
        </p>
        <p className="mb-4">
          A 2015 longitudinal study found that the relationship between parenting and child behavior is bidirectional—
          children with ADHD elicit different parenting responses due to their challenging behaviors, but these 
          parenting responses don't cause ADHD.<sup className="text-[#10b981]">[2]</sup> In fact, parenting a child with ADHD is more difficult, 
          and parents of children with ADHD experience higher stress levels. Effective parenting strategies can help 
          manage symptoms and improve outcomes, but cannot "cure" or prevent ADHD.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #2: Too Much Screen Time Causes ADHD</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> Excessive television, video games, or smartphone use causes ADHD in children.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> While excessive screen time has been associated with attention problems in 
          some studies, this doesn't mean screens cause ADHD. A major 2018 study following over 2,000 adolescents 
          found associations between digital media use and subsequent attention problems, but the effects were small 
          and didn't establish causation.<sup className="text-[#10b981]">[3]</sup> The relationship is likely bidirectional—children with ADHD 
          may be drawn to screens as a source of stimulation, and excessive screen time might worsen existing 
          symptoms or attention difficulties.
        </p>
        <p className="mb-4">
          Importantly, ADHD existed long before modern digital technology. Descriptions of ADHD-like symptoms appear 
          in medical literature from the early 1900s and even earlier. Recent research emphasizes that while limiting 
          screen time is good for overall health, it won't prevent or cure ADHD.<sup className="text-[#10b981]">[4]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #3: Sugar Causes or Worsens ADHD</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> Sugar intake causes hyperactivity and ADHD symptoms, or makes existing ADHD worse.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> Despite widespread belief, multiple well-controlled studies have found no 
          significant effect of sugar on behavior or attention in children with ADHD. A landmark 1995 meta-analysis 
          of 23 studies found no evidence that sugar affects the behavior or cognitive performance of children.<sup className="text-[#10b981]">[5]</sup> 
          More recent research continues to support these findings.
        </p>
        <p className="mb-4">
          A 2019 systematic review examined the relationship between sugar consumption and ADHD, finding no causal 
          relationship.<sup className="text-[#10b981]">[6]</sup> The perception that sugar causes hyperactivity is likely due to several factors: 
          children often consume sugary foods at exciting events (parties, holidays), parental expectations can 
          influence perception of child behavior, and normal childhood exuberance is sometimes misattributed to 
          sugar intake. While a balanced diet is important for overall health, reducing sugar won't treat ADHD.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #4: Vaccines Cause ADHD</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> Childhood vaccinations, particularly those containing thimerosal (a mercury-based 
          preservative), cause ADHD and other neurodevelopmental conditions.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> Extensive research has found absolutely no link between vaccines and ADHD. 
          Multiple large-scale studies involving hundreds of thousands of children have investigated this question 
          thoroughly. A 2019 Danish study following over 650,000 children found no association between MMR vaccination 
          and ADHD.<sup className="text-[#10b981]">[7]</sup> Similarly, studies examining thimerosal-containing vaccines found no link to ADHD 
          or other neurodevelopmental disorders.<sup className="text-[#10b981]">[8]</sup>
        </p>
        <p className="mb-4">
          The timing of ADHD symptom recognition coincides with typical vaccination schedules simply because both 
          occur during early childhood, leading to spurious correlations. Major medical organizations worldwide, 
          including the CDC, WHO, and AAP, confirm that vaccines do not cause ADHD. The benefits of vaccination 
          in preventing serious diseases far outweigh any theoretical risks.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #5: Artificial Food Additives Cause ADHD</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> Artificial colors, preservatives, and food additives cause ADHD in most children.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> While some children may show sensitivity to certain food additives, these 
          don't cause ADHD in the general population. A 2012 meta-analysis found that artificial food colors may 
          have a small effect on hyperactivity in some children, but the effect size was modest and didn't apply 
          to most children with ADHD.<sup className="text-[#10b981]">[9]</sup>
        </p>
        <p className="mb-4">
          More recent research in 2016 examined the "Feingold diet" (which eliminates artificial additives) and 
          found limited evidence for widespread effectiveness in treating ADHD.<sup className="text-[#10b981]">[10]</sup> Some individual children 
          may benefit from dietary modifications, but this is likely due to specific sensitivities rather than 
          additives causing ADHD. The European Food Safety Authority concluded that while some children might be 
          sensitive to certain additives, there's no evidence that these substances cause ADHD broadly.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #6: ADHD Is Just Laziness or Lack of Willpower</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> People with ADHD could control their symptoms if they just tried harder, were 
          more disciplined, or cared enough.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> ADHD is a neurobiological condition involving differences in brain structure, 
          function, and chemistry. It is not a character flaw, moral failing, or choice. Neuroimaging studies 
          consistently demonstrate measurable differences in brain structure and activity in people with ADHD.<sup className="text-[#10b981]">[11]</sup><sup className="text-[#10b981]">[12]</sup>
        </p>
        <p className="mb-4">
          Research in 2020 emphasized that ADHD involves impairments in executive functions—the cognitive processes 
          that enable self-control, planning, and goal-directed behavior. These are neurologically-based difficulties, 
          not willpower deficits.<sup className="text-[#10b981]">[13]</sup> Telling someone with ADHD to "just focus" is like telling someone 
          with poor vision to "just see better"—it fundamentally misunderstands the nature of the condition. Many 
          people with ADHD exert tremendous effort to manage their symptoms and experience significant distress when 
          they struggle despite their best efforts.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #7: ADHD Is Overdiagnosed and Not a Real Condition</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> ADHD is a made-up disorder created by pharmaceutical companies, or normal 
          childhood behavior being medicalized.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> ADHD is a well-established neurodevelopmental disorder recognized by major 
          medical and psychiatric organizations worldwide. While diagnostic rates have increased over time, this 
          largely reflects improved awareness, better diagnostic criteria, and recognition of ADHD in previously 
          overlooked populations (girls, adults, inattentive presentations).<sup className="text-[#10b981]">[14]</sup>
        </p>
        <p className="mb-4">
          A comprehensive 2015 review found that ADHD prevalence has remained relatively stable at around 5-7% of 
          children worldwide when consistent diagnostic criteria are used.<sup className="text-[#10b981]">[15]</sup> Some regions may have higher 
          diagnosis rates due to better access to healthcare and mental health services. Research consistently 
          demonstrates that ADHD causes significant impairment in academic, occupational, social, and emotional 
          functioning, with effects persisting into adulthood.<sup className="text-[#10b981]">[16]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #8: Only Children Get ADHD / Kids Outgrow ADHD</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> ADHD is only a childhood disorder that people outgrow in adolescence or adulthood.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> ADHD is a lifelong neurodevelopmental condition. While symptoms may change 
          over time and some individuals experience reduction in symptoms, the majority of children with ADHD continue 
          to have symptoms and impairments in adulthood. Longitudinal studies show that 50-65% of children diagnosed 
          with ADHD continue to meet diagnostic criteria as adults.<sup className="text-[#10b981]">[17]</sup>
        </p>
        <p className="mb-4">
          Even among those who no longer meet full diagnostic criteria, many continue to experience significant 
          symptoms and impairments. A 2016 study following children with ADHD into adulthood found that adult ADHD 
          was associated with lower educational attainment, lower income, higher rates of unemployment, and increased 
          risk of other psychiatric conditions.<sup className="text-[#10b981]">[18]</sup> Adult ADHD is increasingly recognized as a legitimate 
          diagnosis requiring appropriate assessment and treatment.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #9: ADHD Medications Are Dangerous and Overprescribed</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> ADHD medications are dangerous, highly addictive drugs that are prescribed 
          too freely and harm children.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> ADHD medications are among the most studied medications in pediatric medicine, 
          with extensive research supporting their safety and effectiveness. A comprehensive 2018 network meta-analysis 
          of ADHD medications found that they are generally safe and effective when properly prescribed and monitored.<sup className="text-[#10b981]">[19]</sup>
        </p>
        <p className="mb-4">
          While stimulant medications can be misused, when taken as prescribed for ADHD, they do not lead to addiction. 
          In fact, research suggests that properly treating ADHD with medication reduces the risk of later substance 
          abuse.<sup className="text-[#10b981]">[20]</sup> A 2020 study found that ADHD medication use was associated with reduced risk of various 
          negative outcomes including accidents, criminal convictions, and emergency department visits.<sup className="text-[#10b981]">[21]</sup> Like all 
          medications, ADHD treatments have potential side effects, but these are generally mild and manageable with 
          proper medical supervision.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myth #10: ADHD Only Affects Boys</h3>
        <p className="mb-4">
          <strong>The Myth:</strong> ADHD is a condition that primarily or exclusively affects males.
        </p>
        <p className="mb-4">
          <strong>The Reality:</strong> ADHD affects people of all genders, though it's historically been underdiagnosed 
          in girls and women. Boys are diagnosed more frequently, partly because they more often display the hyperactive-
          impulsive presentation that's easily noticed in classroom settings. Girls more commonly present with the 
          inattentive type, which is easier to overlook.<sup className="text-[#10b981]">[22]</sup>
        </p>
        <p className="mb-4">
          A 2020 review highlighted that girls with ADHD face unique challenges including delayed diagnosis, different 
          symptom presentations, and higher rates of internalizing symptoms like anxiety and depression.<sup className="text-[#10b981]">[23]</sup> Recent 
          research emphasizes the need for better recognition and diagnosis of ADHD in females. When consistent diagnostic 
          criteria are applied, gender differences in ADHD prevalence are smaller than traditionally believed.
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Why These Myths Persist</h3>
        <p className="mb-4">
          Several factors contribute to the persistence of ADHD myths:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="mb-2"><strong>Invisible disability:</strong> Brain differences aren't visible like physical disabilities, making it easier to misattribute symptoms to behavior or choice</li>
          <li className="mb-2"><strong>Symptom overlap:</strong> Everyone experiences attention difficulties sometimes, leading to misunderstanding about clinical ADHD</li>
          <li className="mb-2"><strong>Historical stigma:</strong> Mental health conditions have long been stigmatized and misunderstood</li>
          <li className="mb-2"><strong>Misinformation:</strong> Popular media sometimes promotes myths rather than evidence-based information</li>
          <li className="mb-2"><strong>Oversimplification:</strong> Complex neuroscience is often oversimplified into inaccurate narratives</li>
        </ul>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Impact of Myths and Stigma</h3>
        <p className="mb-4">
          These misconceptions have real consequences. They can lead to delayed diagnosis and treatment, increased 
          stigma and discrimination, self-blame and reduced self-esteem, reluctance to seek help, and inappropriate 
          interventions based on false beliefs.<sup className="text-[#10b981]">[24]</sup> A 2019 study found that public stigma toward ADHD 
          affects treatment-seeking behavior and adherence to evidence-based interventions.<sup className="text-[#10b981]">[25]</sup>
        </p>

        <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Evidence-Based Understanding</h3>
        <p className="mb-4">
          Modern neuroscience and genetics have established that ADHD is a legitimate neurodevelopmental condition 
          with strong genetic and neurobiological bases. It involves measurable differences in brain structure, 
          function, and chemistry. While environmental factors can influence symptom expression and severity, the 
          core features of ADHD arise from neurological differences present from early development.
        </p>
        <p className="mb-4">
          Understanding that ADHD has biological origins helps reduce stigma, promotes evidence-based treatment, 
          encourages appropriate accommodations, and supports individuals with ADHD in accessing needed help without 
          shame or blame. The scientific evidence is clear: ADHD is a real, valid condition deserving of proper 
          recognition, support, and treatment.
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

        {/* References for Myths Tab */}
        <div className="bg-white p-6 rounded-lg border-l-4 border-[#2abcd4] mt-8">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
          
          <h3 className="text-[#0c264d] font-semibold mb-2">Cited Studies or Statistics</h3>
          <div className="text-sm space-y-2">
            <p>[1] Johnston, C., & Mash, E. J. (2001). "Families of children with attention-deficit/hyperactivity disorder: Review and recommendations for future research." <em>Clinical Child and Family Psychology Review</em>, 4(3), 183-207.</p>
            <p>[2] Breaux, R. P., & Harvey, E. A. (2019). "A longitudinal study of the relation between family functioning and preschool ADHD symptoms." <em>Journal of Clinical Child & Adolescent Psychology</em>, 48(5), 749-764.</p>
            <p>[3] Ra, C. K., et al. (2018). "Association of digital media use with subsequent symptoms of attention-deficit/hyperactivity disorder among adolescents." <em>JAMA</em>, 320(3), 255-263.</p>
            <p>[4] Nikkelen, S. W., et al. (2014). "Media use and ADHD-related behaviors in children and adolescents: A meta-analysis." <em>Developmental Psychology</em>, 50(9), 2228-2241.</p>
            <p>[5] Wolraich, M. L., Wilson, D. B., & White, J. W. (1995). "The effect of sugar on behavior or cognition in children: A meta-analysis." <em>JAMA</em>, 274(20), 1617-1621.</p>
            <p>[6] Del-Ponte, B., et al. (2019). "Sugar consumption and attention-deficit/hyperactivity disorder (ADHD): A birth cohort study." <em>Journal of Affective Disorders</em>, 243, 290-296.</p>
            <p>[7] Hviid, A., Hansen, J. V., Frisch, M., & Melbye, M. (2019). "Measles, mumps, rubella vaccination and autism: A nationwide cohort study." <em>Annals of Internal Medicine</em>, 170(8), 513-520.</p>
            <p>[8] Price, C. S., et al. (2010). "Prenatal and infant exposure to thimerosal from vaccines and immunoglobulins and risk of autism." <em>Pediatrics</em>, 126(4), 656-664.</p>
            <p>[9] Nigg, J. T., Lewis, K., Edinger, T., & Falk, M. (2012). "Meta-analysis of attention-deficit/hyperactivity disorder or attention-deficit/hyperactivity disorder symptoms, restriction diet, and synthetic food color additives." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 51(1), 86-97.</p>
            <p>[10] Sonuga-Barke, E. J., et al. (2013). "Nonpharmacological interventions for ADHD: Systematic review and meta-analyses of randomized controlled trials of dietary and psychological treatments." <em>American Journal of Psychiatry</em>, 170(3), 275-289.</p>
            <p>[11] Cortese, S., et al. (2012). "Toward systems neuroscience of ADHD: A meta-analysis of 55 fMRI studies." <em>American Journal of Psychiatry</em>, 169(10), 1038-1055.</p>
            <p>[12] Hoogman, M., et al. (2017). "Subcortical brain volume differences in participants with attention deficit hyperactivity disorder in children and adults: A cross-sectional mega-analysis." <em>The Lancet Psychiatry</em>, 4(4), 310-319.</p>
            <p>[13] Barkley, R. A. (2020). "Executive functions and self-regulation viewed as an extended phenotype: Implications of the theory for ADHD and its treatment." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 12(3), 223-234.</p>
            <p>[14] Matte, B., et al. (2015). "Exploring different scenarios for the diagnosis of adult ADHD with DSM-5." <em>Journal of Attention Disorders</em>, 19(4), 290-300.</p>
            <p>[15] Polanczyk, G. V., Willcutt, E. G., Salum, G. A., Kieling, C., & Rohde, L. A. (2014). "ADHD prevalence estimates across three decades: An updated systematic review and meta-regression analysis." <em>International Journal of Epidemiology</em>, 43(2), 434-442.</p>
            <p>[16] Barkley, R. A. (2015). "Attention-deficit hyperactivity disorder: A handbook for diagnosis and treatment" (4th ed.). Guilford Press.</p>
            <p>[17] Faraone, S. V., Biederman, J., & Mick, E. (2006). "The age-dependent decline of attention deficit hyperactivity disorder: A meta-analysis of follow-up studies." <em>Psychological Medicine</em>, 36(2), 159-165.</p>
            <p>[18] Klein, R. G., et al. (2012). "Clinical and functional outcome of childhood attention-deficit/hyperactivity disorder 33 years later." <em>Archives of General Psychiatry</em>, 69(12), 1295-1303.</p>
            <p>[19] Cortese, S., et al. (2018). "Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: A systematic review and network meta-analysis." <em>The Lancet Psychiatry</em>, 5(9), 727-738.</p>
            <p>[20] Chang, Z., et al. (2014). "Stimulant ADHD medication and risk for substance abuse." <em>Journal of Child Psychology and Psychiatry</em>, 55(8), 878-885.</p>
            <p>[21] Chen, Q., et al. (2020). "Medication for attention-deficit/hyperactivity disorder and criminality: A within-individual analysis." <em>Journal of the American Academy of Child & Adolescent Psychiatry</em>, 59(3), 396-403.</p>
            <p>[22] Quinn, P. O., & Madhoo, M. (2014). "A review of attention-deficit/hyperactivity disorder in women and girls: Uncovering this hidden diagnosis." <em>The Primary Care Companion for CNS Disorders</em>, 16(3).</p>
            <p>[23] Young, S., Adamo, N., Ásgeirsdóttir, B. B., et al. (2020). "Females with ADHD: An expert consensus statement taking a lifespan approach providing guidance for the identification and treatment of attention-deficit/hyperactivity disorder in girls and women." <em>BMC Psychiatry</em>, 20(1), 404.</p>
            <p>[24] Mueller, A. K., Fuermaier, A. B., Koerts, J., & Tucha, L. (2012). "Stigma in attention deficit hyperactivity disorder." <em>ADHD Attention Deficit and Hyperactivity Disorders</em>, 4(3), 101-114.</p>
            <p>[25] Kellison, I., Bussing, R., Bell, L., & Garvan, C. (2010). "Assessment of stigma associated with attention-deficit hyperactivity disorder: Psychometric evaluation of the ADHD Stigma Questionnaire." <em>Psychiatry Research</em>, 178(2), 363-369.</p>
          </div>
          
          <h3 className="text-[#0c264d] font-semibold mb-2 mt-4">Background Sources</h3>
          <div className="text-sm space-y-2">
            <p>American Psychiatric Association. (2022). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed., text rev.).</p>
            <p>National Institute of Mental Health. "Attention-Deficit/Hyperactivity Disorder." Retrieved from nimh.nih.gov</p>
            <p>Centers for Disease Control and Prevention. "Facts About ADHD." Retrieved from cdc.gov/adhd</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-full w-full">
      <div className="pb-2 border-b-2 border-[#0c264d] mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h1 className="text-3xl">
          ADHD: Causes & Origins
        </h1>

        {/* Desktop button - aligned right in header */}
        <button 
          onClick={() => setCurrentArticle?.('adhd')}
          className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:block hidden"
        >
          <span className="text-xl">←</span>
          All About ADHD
        </button>
      </div>

      {/* Mobile button - below title, full width */}
      <button 
        onClick={() => setCurrentArticle?.('adhd')}
        className="bg-[#ffd166] hover:bg-[#0c264d] text-[#0c264d] hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap md:hidden mb-6"
      >
        <span className="text-xl">←</span>
        All About ADHD
      </button>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 gap-3 mb-12 bg-transparent h-auto p-0">
          <TabsTrigger value="overview" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Overview
          </TabsTrigger>
          <TabsTrigger value="genetics" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Genetics & Heredity
          </TabsTrigger>
          <TabsTrigger value="brain" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Brain Structure & Function
          </TabsTrigger>
          <TabsTrigger value="neurotransmitters" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Neurotransmitters
          </TabsTrigger>
          <TabsTrigger value="environmental" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Environmental Factors
          </TabsTrigger>
          <TabsTrigger value="myths" className="bg-[#ffd166] data-[state=active]:bg-[#0A9DC4] data-[state=active]:text-white rounded-md !px-6 !py-3 md:!py-2 text-sm !h-auto">
            Myths & Misconceptions
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

        {/* Myths Tab */}
        <TabsContent value="myths" className="space-y-8">
          <MythsContent />
        </TabsContent>
      </Tabs>

    </article>
  );
}

