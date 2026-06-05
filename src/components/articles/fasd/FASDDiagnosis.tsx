import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface FASDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function FASDDiagnosis({ setCurrentArticle }: FASDDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">FASD: Diagnosis &amp; Assessment</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">FASD remains profoundly underdiagnosed. Most individuals are not diagnosed until school age or later — and many are never diagnosed at all, instead accumulating psychiatric diagnoses that address symptoms but not their underlying cause.<sup>[1]</sup> Early, accurate diagnosis is the most important factor in improving long-term outcomes.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=80" alt="Clinical assessment and diagnosis" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fetal Alcohol Syndrome (FAS)</h3>
          <p className="mb-4">FAS requires all three of the following, plus confirmed or unknown PAE:<sup>[3]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">All three facial features (smooth philtrum, thin upper lip, small palpebral fissures)</li>
            <li className="mb-2">Growth deficiency (height or weight at or below 10th percentile)</li>
            <li className="mb-2">Central nervous system abnormality (structural, neurological, or functional)</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Partial FAS (pFAS)</h3>
          <p className="mb-4">Two of the three facial features, plus either growth deficiency or CNS involvement, with confirmed PAE.<sup>[4]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Alcohol-Related Neurodevelopmental Disorder (ARND)</h3>
          <p className="mb-4">CNS abnormalities meeting criteria for the full spectrum, with confirmed significant PAE, but without the facial features or growth deficiency.<sup>[5]</sup> ARND is the most common and most commonly missed FASD diagnosis.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">ND-PAE (DSM-5)</h3>
          <p className="mb-4">The DSM-5 diagnosis of Neurobehavioral Disorder Associated with Prenatal Alcohol Exposure focuses on the neurobehavioral profile and requires confirmed PAE plus impairments in three domains: neurocognitive, self-regulation, and adaptive functioning.<sup>[6]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Guidelines</h2>
          <p className="mb-4">Several diagnostic guidelines are used internationally. The most widely used in North America include:<sup>[7]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Hoyme et al. (2016) / CDC guidelines:</strong> Updated clinical guidelines widely used in the US</li>
            <li className="mb-2"><strong>Astley 4-Digit Code:</strong> A systematic coding approach ranking four features on a 4-point scale for each</li>
            <li className="mb-2"><strong>Canadian guidelines (Chudley et al., 2005; Cook et al., 2016):</strong> Comprehensive multidisciplinary approach</li>
            <li className="mb-2"><strong>Australian guidelines:</strong> Population-adapted framework</li>
          </ul>
          <p className="mb-4">Lack of a single internationally standardized diagnostic system contributes to underdiagnosis and inconsistent prevalence estimates.<sup>[8]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Multidisciplinary Assessment</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1080&q=80" alt="Multidisciplinary team assessment" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <p className="mb-4">Comprehensive FASD diagnosis ideally involves a multidisciplinary team:<sup>[9]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Dysmorphologist or developmental pediatrician:</strong> Physical examination, facial feature assessment, growth measurements</li>
            <li className="mb-2"><strong>Neuropsychologist:</strong> Cognitive testing, memory, executive function, academic achievement</li>
            <li className="mb-2"><strong>Speech-language pathologist:</strong> Language comprehension, pragmatic communication</li>
            <li className="mb-2"><strong>Occupational therapist:</strong> Sensory processing, adaptive function, fine motor skills</li>
            <li className="mb-2"><strong>Social worker:</strong> Family history, living situation, support needs, referrals</li>
            <li className="mb-2"><strong>Psychiatrist or psychologist:</strong> Mental health assessment, behavioral profile</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Confirming Prenatal Alcohol Exposure</h2>
          <p className="mb-4">Confirmation of PAE is often the most challenging aspect of FASD diagnosis:<sup>[10]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Biological mothers may not disclose drinking due to shame, guilt, or legal concerns</li>
            <li className="mb-2">Adoptees and foster children may have no accessible birth history</li>
            <li className="mb-2">Retrospective reporting of alcohol use during pregnancy is unreliable</li>
          </ul>
          <p className="mb-4">Some diagnostic frameworks allow diagnosis with "unknown" PAE when the clinical profile is consistent. Biomarkers being researched include fatty acid ethyl esters in meconium and phosphatidylethanol (PEth) in dried blood spots from newborns.<sup>[11]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neuropsychological Testing</h2>
          <p className="mb-4">Comprehensive neuropsychological assessment examines the specific domains affected by FASD:<sup>[12]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>General intelligence:</strong> Full-scale IQ (WISC, WAIS, Leiter) — but IQ alone is insufficient</li>
            <li className="mb-2"><strong>Working memory:</strong> Digit span, spatial working memory tasks</li>
            <li className="mb-2"><strong>Executive function:</strong> Wisconsin Card Sorting Test, BRIEF questionnaire, Towers tasks</li>
            <li className="mb-2"><strong>Learning and memory:</strong> CVLT, WRAML — particularly verbal learning and recall</li>
            <li className="mb-2"><strong>Processing speed:</strong> Coding, symbol search</li>
            <li className="mb-2"><strong>Adaptive behavior:</strong> Vineland Adaptive Behavior Scales — often reveals the true functional impairment<sup>[13]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Differential Diagnosis</h2>
          <p className="mb-4">FASD overlaps significantly with many other neurodevelopmental conditions:<sup>[14]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>ADHD:</strong> Highest diagnostic overlap — FASD-related attention difficulties often receive ADHD diagnosis without exploring etiology</li>
            <li className="mb-2"><strong>Autism spectrum disorder:</strong> Social difficulties and repetitive behaviors overlap</li>
            <li className="mb-2"><strong>Intellectual disability:</strong> Present in some but not all FASD</li>
            <li className="mb-2"><strong>Reactive attachment disorder:</strong> Common co-occurrence in children with trauma history</li>
            <li className="mb-2"><strong>Learning disabilities:</strong> Reading, math, language difficulties</li>
            <li className="mb-2"><strong>Other genetic conditions:</strong> Williams syndrome, 22q11 deletion syndrome, Noonan syndrome can have overlapping facial and cognitive features<sup>[15]</sup></li>
          </ul>
          <p className="mb-4">These diagnoses may co-occur with FASD rather than exclude it. FASD should be ruled in or out when any of these conditions is diagnosed, particularly with known risk factors.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Barriers to Diagnosis</h2>
          <p className="mb-4">Despite the impact of FASD, diagnosis remains rare relative to prevalence:<sup>[16]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Stigma surrounding maternal alcohol use discourages disclosure and referral</li>
            <li className="mb-2">Clinician training in FASD recognition is limited</li>
            <li className="mb-2">Multidisciplinary diagnostic teams are not widely available outside major centers</li>
            <li className="mb-2">PAE confirmation is often impossible for adopted/foster children</li>
            <li className="mb-2">FASD's "invisible" presentation — normal appearance in most cases — means clinicians don't think to consider it<sup>[17]</sup></li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Chasnoff, I. J., Wells, A. M., Telford, E., Schmidt, C., & Messer, G. (2010). "Neurodevelopmental functioning in children with FAS, pFAS, and ARND." <em>Journal of Developmental and Behavioral Pediatrics</em>, 31(3), 192–201.</p>
          <p>[2] Astley, S. J., Olson, H. C., Kerns, K., et al. (2009). "Neuropsychological and behavioral outcomes from a comprehensive magnetic resonance study of children with fetal alcohol spectrum disorders." <em>Canadian Journal of Clinical Pharmacology</em>, 16(1), e178–e201.</p>
          <p>[3] Hoyme, H. E., Kalberg, W. O., Elliott, A. J., et al. (2016). "Updated clinical guidelines for diagnosing fetal alcohol spectrum disorders." <em>Pediatrics</em>, 138(2), e20154256.</p>
          <p>[4] Bertrand, J., Floyd, R. L., Weber, M. K., et al. (2004). <em>Fetal alcohol syndrome: Guidelines for referral and diagnosis</em>. Centers for Disease Control and Prevention.</p>
          <p>[5] Sokol, R. J., Delaney-Black, V., & Nordstrom, B. (2003). "Fetal alcohol spectrum disorder." <em>JAMA</em>, 290(22), 2996–2999.</p>
          <p>[6] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Washington, DC: APA.</p>
          <p>[7] Cook, J. L., Green, C. R., Lilley, C. M., et al. (2016). "Fetal alcohol spectrum disorder: A guideline for diagnosis across the lifespan." <em>CMAJ</em>, 188(3), 191–197.</p>
          <p>[8] Chudley, A. E., Conry, J., Cook, J. L., et al. (2005). "Fetal alcohol spectrum disorder: Canadian guidelines for diagnosis." <em>CMAJ</em>, 172(5 Suppl), S1–S21.</p>
          <p>[9] Clarren, S. K., Olson, H. C., Clarren, S. G. B., & Astley, S. J. (2000). "A child with fetal alcohol syndrome." In M. Guralnick (Ed.), <em>Interdisciplinary clinical assessment of young children with developmental disabilities</em>. Brookes.</p>
          <p>[10] Chasnoff, I. J., Wells, A. M., & King, L. (2015). "Misdiagnosis and missed diagnoses in foster and adopted children with prenatal alcohol exposure." <em>Pediatrics</em>, 135(2), 264–270.</p>
          <p>[11] Bearer, C. F., Jacobson, J. L., Jacobson, S. W., et al. (2003). "Validation of a new biomarker of fetal exposure to alcohol." <em>Journal of Pediatrics</em>, 143(4), 463–469.</p>
          <p>[12] Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). "Fetal alcohol spectrum disorders: Neuropsychological and behavioral features." <em>Neuropsychology Review</em>, 21(2), 81–101.</p>
          <p>[13] Crocker, N., Vaurio, L., Riley, E. P., & Mattson, S. N. (2009). "Comparison of adaptive behavior in children with heavy prenatal alcohol exposure or attention-deficit/hyperactivity disorder." <em>Alcoholism: Clinical and Experimental Research</em>, 33(11), 2015–2023.</p>
          <p>[14] Fryer, S. L., McGee, C. L., Matt, G. E., Riley, E. P., & Mattson, S. N. (2007). "Evaluation of psychopathological conditions in children with heavy prenatal alcohol exposure." <em>Pediatrics</em>, 119(3), e733–e741.</p>
          <p>[15] Hagberg, B., & Kyllerman, M. (1983). "Epidemiology of mental retardation — A Swedish survey." <em>Brain and Development</em>, 5(5), 441–449.</p>
          <p>[16] Burd, L., Klug, M. G., Martsolf, J. T., & Kerbeshian, J. (2003). "Fetal alcohol syndrome: Neuropsychiatric phenomics." <em>Neurotoxicology and Teratology</em>, 25(6), 697–705.</p>
          <p>[17] Mukherjee, R. A., Hollins, S., & Turk, J. (2006). "Fetal alcohol spectrum disorder: An overview." <em>Journal of the Royal Society of Medicine</em>, 99(6), 298–302.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>
    </article>
  );
}
