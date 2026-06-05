import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface FASDCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function FASDCauses({ setCurrentArticle }: FASDCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">FASD: Causes &amp; Risk Factors</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">FASD has one necessary cause: prenatal alcohol exposure (PAE).<sup>[1]</sup> However, not all pregnancies with alcohol exposure result in FASD, and not all FASD presents the same way. Understanding the factors that modulate risk helps explain the variability in outcomes and informs prevention and intervention strategies.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">How Alcohol Damages the Developing Brain</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=80" alt="Brain development and neuroscience research" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Apoptosis (Cell Death)</h3>
          <p className="mb-4">Alcohol triggers excessive apoptosis — programmed cell death — in developing neurons.<sup>[2]</sup> The fetal brain contains far more neurons than the adult brain; pruning refines the network. Alcohol causes premature, excessive pruning, permanently reducing the neural substrate available for cognitive functions.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Disrupted Neuronal Migration</h3>
          <p className="mb-4">During weeks 6–24 of gestation, neurons must migrate from their birthplace in the ventricular zone to their final positions in the cortex.<sup>[3]</sup> Alcohol disrupts this migration, causing neurons to end up in wrong locations — producing cortical abnormalities and heterotopias (displaced neuron clusters).</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Interference with Neurotransmitter Systems</h3>
          <p className="mb-4">Alcohol mimics GABA (inhibitory) and blocks NMDA glutamate receptors (excitatory).<sup>[4]</sup> During development, NMDA activity is critical for synapse formation and neural circuit building. Blocking these receptors during critical periods interferes with the formation of lasting neural connections.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Oxidative Stress</h3>
          <p className="mb-4">Alcohol metabolism generates reactive oxygen species — free radicals that damage cellular DNA and membranes.<sup>[5]</sup> The fetal brain has limited antioxidant defenses, making it particularly vulnerable. Nutritional deficiencies (common with heavy alcohol use) exacerbate this effect.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Epigenetic Changes</h3>
          <p className="mb-4">Alcohol alters DNA methylation patterns and histone modifications — epigenetic changes that affect gene expression without altering the DNA sequence itself.<sup>[6]</sup> These changes can persist throughout life and may even influence subsequent generations through germline epigenetic inheritance.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Timing of Exposure</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=80" alt="Fetal development stages and timeline" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <p className="mb-4">Different brain structures and facial features are vulnerable at different gestational periods:<sup>[7]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Weeks 3–4:</strong> Neural tube is forming — alcohol can disrupt the earliest brain architecture</li>
            <li className="mb-2"><strong>Weeks 6–10:</strong> The critical window for the facial features of FAS; face and brain development are closely linked at this time</li>
            <li className="mb-2"><strong>Weeks 10–25:</strong> Neuronal proliferation and migration — disruption causes lasting cortical abnormalities</li>
            <li className="mb-2"><strong>Third trimester:</strong> Brain growth spurt ("brain growth spurt") — the cerebellum, hippocampus, and cortex are all rapidly developing; this period may be as damaging as earlier exposure</li>
          </ul>
          <p className="mb-4">Because brain development continues throughout pregnancy and no period is without risk, there is no identified "safe window" for alcohol consumption during pregnancy.<sup>[8]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Amount and Pattern of Drinking</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Dose-Response Relationship</h3>
          <p className="mb-4">There is generally a dose-response relationship — heavier drinking causes more severe outcomes.<sup>[9]</sup> Binge drinking (4+ drinks per occasion) is particularly harmful because peak blood alcohol concentration matters greatly.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Low-Level Drinking</h3>
          <p className="mb-4">Research on the effects of low levels of alcohol (1–2 drinks per week) is mixed and inconclusive.<sup>[10]</sup> The difficulty of establishing a safe lower limit has led health authorities worldwide — including the CDC, WHO, and most national health agencies — to recommend complete abstinence during pregnancy.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Alcohol Type</h3>
          <p className="mb-4">The type of alcoholic beverage does not matter — the ethanol content does. A standard drink contains approximately 14 grams of pure alcohol regardless of beverage type.<sup>[11]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Maternal Factors</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Alcohol Metabolism</h3>
          <p className="mb-4">Genetic variation in alcohol-metabolizing enzymes (ADH and ALDH variants) affects how quickly a mother clears alcohol from her bloodstream and how much reaches the fetus.<sup>[12]</sup> Slower metabolism leads to higher and more prolonged fetal exposure for the same amount consumed.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Nutritional Status</h3>
          <p className="mb-4">Nutritional deficiencies — particularly folate, zinc, and vitamins A and E — amplify alcohol's teratogenic effects.<sup>[13]</sup> Women who drink heavily often have poor nutrition, compounding fetal risk.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Age and Parity</h3>
          <p className="mb-4">Older maternal age and higher parity (number of previous pregnancies) appear to increase risk of FASD with equivalent alcohol exposure, though the mechanisms are not fully understood.<sup>[14]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Other Substance Use</h3>
          <p className="mb-4">Tobacco, cannabis, and other drug use alongside alcohol increase teratogenic risk and complicate attribution of specific effects.<sup>[15]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Fetal Genetic Factors</h2>
          <p className="mb-4">The fetus's own genetic makeup influences susceptibility to alcohol's effects:<sup>[16]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Twin studies show that when one twin is affected, the co-twin may be unaffected or differently affected — even with identical exposure</li>
            <li className="mb-2">Genetic variants affecting fetal alcohol metabolism, neural repair mechanisms, or developmental pathways modulate risk</li>
            <li className="mb-2">This explains why siblings with similar prenatal exposure can have different FASD presentations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social and Environmental Context</h2>
          <p className="mb-4">Prenatal alcohol exposure does not occur in a vacuum — it is embedded in social context:<sup>[17]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Alcohol use disorder:</strong> The majority of pregnancies affected by heavy PAE involve maternal alcohol use disorder, which requires treatment and support</li>
            <li className="mb-2"><strong>Trauma and ACEs:</strong> Adverse childhood experiences predict later heavy drinking; mothers who drink during pregnancy often have significant trauma histories</li>
            <li className="mb-2"><strong>Social isolation:</strong> Lack of social support and community connection are risk factors</li>
            <li className="mb-2"><strong>Poverty and instability:</strong> Economic stress and housing instability are correlated with heavy drinking<sup>[18]</sup></li>
            <li className="mb-2"><strong>Cultural norms:</strong> In some cultural contexts, moderate drinking during pregnancy is normalized</li>
          </ul>
          <p className="mb-4">Prevention efforts that address FASD must also address the broader social determinants of health that drive alcohol misuse — stigma, trauma, and lack of accessible treatment are major barriers.<sup>[19]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Jones, K. L., & Smith, D. W. (1973). "Recognition of the fetal alcohol syndrome in early infancy." <em>The Lancet</em>, 302(7836), 999–1001.</p>
          <p>[2] Ikonomidou, C., Bittigau, P., Ishimaru, M. J., et al. (2000). "Ethanol-induced apoptotic neurodegeneration and fetal alcohol syndrome." <em>Science</em>, 287(5455), 1056–1060.</p>
          <p>[3] Clarren, S. K., Alvord, E. C., Sumi, S. M., Streissguth, A. P., & Smith, D. W. (1978). "Brain malformations related to prenatal exposure to ethanol." <em>Journal of Pediatrics</em>, 92(1), 64–67.</p>
          <p>[4] Costa, L. G., Vitalone, A., Cole, T. B., & Furlong, C. E. (2005). "Modulation of paraoxonase (PON1) activity." <em>Biochemical Pharmacology</em>, 69(4), 541–550.</p>
          <p>[5] Brocardo, P. S., Gil-Mohapel, J., & Christie, B. R. (2011). "The role of oxidative stress in fetal alcohol spectrum disorders." <em>Brain Research Reviews</em>, 67(1–2), 209–225.</p>
          <p>[6] Resendiz, M., Chen, Y., Öztürk, N. C., & Zhou, F. C. (2013). "Epigenetic medicine and fetal alcohol spectrum disorders." <em>Epigenomics</em>, 5(1), 73–86.</p>
          <p>[7] West, J. R. (1987). <em>Alcohol and brain development</em>. Oxford University Press.</p>
          <p>[8] Riley, E. P., Infante, M. A., & Warren, K. R. (2011). "Fetal alcohol spectrum disorders: An overview." <em>Neuropsychology Review</em>, 21(2), 73–80.</p>
          <p>[9] Jacobson, J. L., & Jacobson, S. W. (2002). "Effects of prenatal alcohol exposure on child development." <em>Alcohol Research and Health</em>, 26(4), 282–286.</p>
          <p>[10] Henderson, J., Gray, R., & Brocklehurst, P. (2007). "Systematic review of effects of low-moderate prenatal alcohol exposure on pregnancy outcome." <em>BJOG</em>, 114(3), 243–252.</p>
          <p>[11] National Institute on Alcohol Abuse and Alcoholism. (2020). <em>Alcohol facts and statistics</em>. Bethesda, MD: NIAAA.</p>
          <p>[12] McCarver, D. G., Thomasson, H. R., Martier, S. S., Sokol, R. J., & Li, T. K. (1994). "Alcohol dehydrogenase-2*3 allele protects against alcohol-related birth defects among African Americans." <em>Journal of Pharmacology and Experimental Therapeutics</em>, 271(3), 1защи1212–1219.</p>
          <p>[13] Coles, C. D. (1994). "Critical periods for prenatal alcohol exposure: Evidence from animal and human studies." <em>Alcohol Health and Research World</em>, 18(1), 22–29.</p>
          <p>[14] May, P. A., Gossage, J. P., Kalberg, W. O., et al. (2009). "Prevalence and epidemiologic characteristics of FASD from various research methods with an emphasis on recent in-school studies." <em>Developmental Disabilities Research Reviews</em>, 15(3), 176–192.</p>
          <p>[15] Sood, B., Delaney-Black, V., Covington, C., et al. (2001). "Prenatal alcohol exposure and childhood behavior at age 6 to 7 years." <em>Pediatrics</em>, 108(2), E34.</p>
          <p>[16] Gemma, S., Vichi, S., & Testai, E. (2007). "Metabolic and genetic factors contributing to alcohol induced effects and fetal alcohol syndrome." <em>Neuroscience and Biobehavioral Reviews</em>, 31(2), 221–229.</p>
          <p>[17] Popova, S., Lange, S., Probst, C., Gmel, G., & Rehm, J. (2017). "Estimation of national, regional, and global prevalence of alcohol use during pregnancy." <em>BMC Medicine</em>, 15(1), 57.</p>
          <p>[18] May, P. A., & Gossage, J. P. (2011). "Maternal risk factors for fetal alcohol spectrum disorders." <em>Alcohol Research and Health</em>, 34(1), 15–26.</p>
          <p>[19] Salmon, A. (2011). "Aboriginal mothering, FASD prevention and the contested terrain of risk." <em>Canadian Journal of Public Health</em>, 102(2), 111–114.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>
    </article>
  );
}
