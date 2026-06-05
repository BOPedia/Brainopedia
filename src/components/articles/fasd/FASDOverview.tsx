import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface FASDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function FASDOverview({ setCurrentArticle }: FASDOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Fetal Alcohol Spectrum Disorder: Overview</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Fetal Alcohol Spectrum Disorder (FASD) is an umbrella term describing the range of lifelong physical, behavioral, and cognitive effects that can occur in a person whose mother consumed alcohol during pregnancy.<sup>[1]</sup> FASD is the leading known preventable cause of neurodevelopmental disability worldwide — yet it remains significantly underdiagnosed and misunderstood.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Is FASD?</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=80" alt="Brain development and neuroscience" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Spectrum</h3>
          <p className="mb-4">FASD is not a single diagnosis but a spectrum of conditions caused by prenatal alcohol exposure (PAE).<sup>[3]</sup> The spectrum includes:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Fetal Alcohol Syndrome (FAS):</strong> The most recognizable form, involving the full triad of facial features, growth deficits, and central nervous system abnormalities</li>
            <li className="mb-2"><strong>Partial FAS (pFAS):</strong> Some FAS features but not the full triad</li>
            <li className="mb-2"><strong>Alcohol-Related Neurodevelopmental Disorder (ARND):</strong> Neurocognitive and behavioral impairments without physical features</li>
            <li className="mb-2"><strong>Alcohol-Related Birth Defects (ARBD):</strong> Structural abnormalities of organs (heart, kidney, bones) without the CNS features</li>
            <li className="mb-2"><strong>Neurobehavioral Disorder Associated with Prenatal Alcohol Exposure (ND-PAE):</strong> DSM-5 diagnostic category emphasizing neurobehavioral profile<sup>[4]</sup></li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Why "Spectrum"?</h3>
          <p className="mb-4">Alcohol's effects on fetal development vary enormously depending on the amount, timing, and pattern of exposure; genetic factors in both mother and fetus; and nutritional and environmental variables.<sup>[5]</sup> Two individuals with similar exposure may have very different presentations.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">FASD affects an estimated <strong>2–5% of the population</strong> in the United States and Western Europe<sup>[6]</sup></li>
            <li className="mb-2">FAS alone affects approximately <strong>0.2–1.5 per 1,000 live births</strong> in the general population<sup>[7]</sup></li>
            <li className="mb-2">Rates are significantly higher in some communities with heavy drinking patterns<sup>[8]</sup></li>
            <li className="mb-2">FASD affects all races, ethnicities, and socioeconomic groups</li>
            <li className="mb-2">Many individuals remain undiagnosed into adulthood<sup>[9]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">How Alcohol Affects the Developing Brain</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=80" alt="Fetal development and brain growth" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <p className="mb-4">Alcohol is a teratogen — a substance that disrupts normal development.<sup>[10]</sup> The fetal brain is vulnerable throughout pregnancy because it is continuously developing from conception through birth (and beyond). Key mechanisms include:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Cell death:</strong> Alcohol triggers apoptosis (programmed cell death) in developing neurons, particularly during active periods of brain growth</li>
            <li className="mb-2"><strong>Disrupted migration:</strong> Neurons fail to migrate to their correct positions in the cortex<sup>[11]</sup></li>
            <li className="mb-2"><strong>Impaired myelination:</strong> Alcohol disrupts the formation of myelin sheaths that speed neural transmission</li>
            <li className="mb-2"><strong>Altered gene expression:</strong> Epigenetic changes affect how genes are expressed throughout life</li>
            <li className="mb-2"><strong>Oxidative stress:</strong> Alcohol metabolism generates free radicals that damage developing cells<sup>[12]</sup></li>
          </ul>
          <p className="mb-4">There is no established "safe" amount of alcohol during pregnancy — no trimester is risk-free. The first trimester is particularly critical for the facial features associated with FAS, but brain development continues throughout pregnancy.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The FASD Brain: Neurodiversity Perspective</h2>
          <p className="mb-4">People with FASD have brains that are genuinely organized differently — not simply damaged versions of neurotypical brains.<sup>[13]</sup> The FASD brain often shows relative strengths alongside significant challenges, and individuals frequently display creativity, humor, loyalty, enthusiasm, and strong visual-spatial abilities.</p>
          <p className="mb-4">A strengths-based approach to FASD recognizes that many challenges arise from mismatch between the FASD brain's needs and environment demands — and that appropriate support can dramatically improve outcomes.<sup>[14]</sup> The neurodiversity framework does not minimize the real challenges of FASD but situates it within a broader understanding of brain variation.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
          <p className="mb-4">FASD rarely occurs in isolation — co-occurring conditions are the rule rather than the exception:<sup>[15]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>ADHD:</strong> Present in approximately 50–70% of individuals with FASD</li>
            <li className="mb-2"><strong>Anxiety and depression:</strong> Highly prevalent; often secondary to repeated failure and social difficulties</li>
            <li className="mb-2"><strong>Sleep disorders:</strong> Disrupted sleep is nearly universal in FASD<sup>[16]</sup></li>
            <li className="mb-2"><strong>Sensory processing difficulties:</strong> Over- or under-sensitivity to sensory input</li>
            <li className="mb-2"><strong>Autism spectrum disorder:</strong> Overlapping features; may co-occur</li>
            <li className="mb-2"><strong>Reactive attachment disorder:</strong> Related to trauma history in many adopted/foster children with FASD</li>
            <li className="mb-2"><strong>Intellectual disability:</strong> Present in FAS but not all FASD<sup>[17]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Protective Factors</h2>
          <p className="mb-4">Research has identified factors that significantly improve outcomes for individuals with FASD:<sup>[18]</sup></p>
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Protective Factors:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Early diagnosis (before age 6) leads to significantly better outcomes<sup>[19]</sup></li>
              <li>Stable, nurturing home environment — biological or adoptive/foster</li>
              <li>Absence of violence in the home</li>
              <li>Connection with social services and support networks</li>
              <li>Eligible for and receiving disability-related services</li>
              <li>Remaining in school until age 18</li>
              <li>Living in a stable home as an adult rather than independently before ready</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Hoyme, H. E., Kalberg, W. O., Elliott, A. J., et al. (2016). "Updated clinical guidelines for diagnosing fetal alcohol spectrum disorders." <em>Pediatrics</em>, 138(2), e20154256.</p>
          <p>[2] Lange, S., Probst, C., Gmel, G., Rehm, J., Burd, L., & Popova, S. (2017). "Global prevalence of fetal alcohol spectrum disorder among children and youth." <em>JAMA Pediatrics</em>, 171(10), 948–956.</p>
          <p>[3] Bertrand, J., Floyd, R. L., Weber, M. K., et al. (2004). <em>Fetal alcohol syndrome: Guidelines for referral and diagnosis</em>. Centers for Disease Control and Prevention.</p>
          <p>[4] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Washington, DC: APA.</p>
          <p>[5] Guerri, C., Bazinet, A., & Riley, E. P. (2009). "Foetal alcohol spectrum disorders and alterations in brain and behaviour." <em>Alcohol and Alcoholism</em>, 44(2), 108–114.</p>
          <p>[6] May, P. A., Chambers, C. D., Kalberg, W. O., et al. (2018). "Prevalence of fetal alcohol spectrum disorders in 4 US communities." <em>JAMA</em>, 319(5), 474–482.</p>
          <p>[7] CDC. (2020). <em>Data and statistics: Fetal alcohol spectrum disorders (FASDs)</em>. Atlanta: Centers for Disease Control and Prevention.</p>
          <p>[8] Popova, S., Lange, S., Probst, C., Gmel, G., & Rehm, J. (2017). "Estimation of national, regional, and global prevalence of alcohol use during pregnancy." <em>BMC Medicine</em>, 15(1), 57.</p>
          <p>[9] Streissguth, A. P., Bookstein, F. L., Barr, H. M., Sampson, P. D., O'Malley, K., & Young, J. K. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome and fetal alcohol effects." <em>Journal of Developmental and Behavioral Pediatrics</em>, 25(4), 228–238.</p>
          <p>[10] Sokol, R. J., Delaney-Black, V., & Nordstrom, B. (2003). "Fetal alcohol spectrum disorder." <em>JAMA</em>, 290(22), 2996–2999.</p>
          <p>[11] Clarren, S. K., Alvord, E. C., Sumi, S. M., Streissguth, A. P., & Smith, D. W. (1978). "Brain malformations related to prenatal exposure to ethanol." <em>Journal of Pediatrics</em>, 92(1), 64–67.</p>
          <p>[12] Brocardo, P. S., Gil-Mohapel, J., & Christie, B. R. (2011). "The role of oxidative stress in fetal alcohol spectrum disorders." <em>Brain Research Reviews</em>, 67(1–2), 209–225.</p>
          <p>[13] Kully-Martens, K., Denys, K., Treit, S., Tamana, S., & Rasmussen, C. (2012). "A review of social skills deficits in individuals with fetal alcohol spectrum disorders." <em>Alcoholism: Clinical and Experimental Research</em>, 36(4), 568–576.</p>
          <p>[14] Paley, B., & O'Connor, M. J. (2011). "Behavioral interventions for children and adolescents with fetal alcohol spectrum disorders." <em>Alcohol Research and Health</em>, 34(1), 64–75.</p>
          <p>[15] Landgraf, M. N., Nothacker, M., Kopp, I. B., & Heinen, F. (2013). "The diagnosis of fetal alcohol syndrome." <em>Deutsches Ärzteblatt International</em>, 110(43), 703–710.</p>
          <p>[16] Jan, J. E., Asante, K. O., Conry, J. L., et al. (2010). "Sleep health issues for children with FASD." <em>International Journal of Pediatrics</em>, 2010, 639048.</p>
          <p>[17] Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). "Fetal alcohol spectrum disorders: Neuropsychological and behavioral features." <em>Neuropsychology Review</em>, 21(2), 81–101.</p>
          <p>[18] Streissguth, A. P., Bookstein, F. L., Barr, H. M., et al. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome." <em>Journal of Developmental and Behavioral Pediatrics</em>, 25(4), 228–238.</p>
          <p>[19] Astley, S. J., Olson, H. C., Kerns, K., et al. (2009). "Neuropsychological and behavioral outcomes from a comprehensive magnetic resonance study of children with fetal alcohol spectrum disorders." <em>Canadian Journal of Clinical Pharmacology</em>, 16(1), e178–e201.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>
    </article>
  );
}
