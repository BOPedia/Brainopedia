import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleFASDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleFASD({ setCurrentArticle }: ArticleFASDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview'
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics'
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins'
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing'
    },
    { 
      id: 'support', 
      title: 'Support & Management'
    },
    { 
      id: 'living', 
      title: 'Living with FASD'
    },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Fetal Alcohol Spectrum Disorder (FASD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Fetal Alcohol Spectrum Disorder (FASD)</strong> is a permanent brain-based physical 
            disability caused by prenatal alcohol exposure.<sup>[1]</sup> FASD represents a spectrum of conditions with 
            significant effects on cognition, behavior, emotional regulation, adaptive functioning, and 
            physical health.<sup>[2]</sup> It is the leading preventable cause of developmental disability, yet also one 
            of the most misunderstood and under-diagnosed conditions.<sup>[3]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Fetal Alcohol Spectrum Disorder"
            data={[
              { label: 'Other names', value: 'FASD, includes FAS, pFAS, ARND, ARBD' },
              { label: 'Specialty', value: 'Developmental Medicine, Neuropsychology' },
              { label: 'Cause', value: 'Prenatal alcohol exposure' },
              { label: 'Nature', value: 'Permanent brain-based physical disability' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: 'Estimated 2-5% of US population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1753197273814-d90d4a4cc98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFuY3klMjBwcmVuYXRhbCUyMGhlYWx0aCUyMGZldGFsJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY3NDA5MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Prenatal health and fetal development - understanding FASD"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            FASD affects an estimated 2-5% of the population in the United States and other Western 
            countries, making it more common than autism.<sup>[4]</sup> The condition occurs when alcohol consumed during 
            pregnancy passes through the placenta and disrupts the developing brain and other organs.<sup>[5]</sup> Because 
            there is no known safe amount or timing of alcohol use during pregnancy, any alcohol exposure 
            can potentially cause harm.<sup>[6]</sup>
          </p>
          
          <p className="mb-4">
            The effects of FASD are lifelong and can range from mild to severe.<sup>[7]</sup> 
            While the brain damage is permanent, individuals with FASD can thrive with appropriate diagnosis, 
            understanding, and support.<sup>[8]</sup> Early diagnosis, protective factors like stable home environments, and 
            neurodiversity-affirming approaches significantly improve outcomes.<sup>[9]</sup> FASD is not a reflection of the 
            individual's worth or potential—it is a medical condition requiring understanding, accommodation, and 
            support.<sup>[10]</sup> The spectrum includes Fetal Alcohol Syndrome (FAS), Partial FAS (pFAS), Alcohol-Related 
            Neurodevelopmental Disorder (ARND), and Alcohol-Related Birth Defects (ARBD).<sup>[11]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1666362755385-1856fca1a330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBmdW5jdGlvbiUyMGNvZ25pdGl2ZSUyMGNoYWxsZW5nZXN8ZW58MXx8fHwxNzY3NDA5MTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cognitive and executive function challenges in FASD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Prenatal alcohol exposure causes structural and functional changes to the developing brain with common 
            areas of impairment.<sup>[12]</sup> Executive functioning challenges include difficulty with planning and organization, 
            poor impulse control, challenges with working memory, trouble shifting attention or being flexible, and 
            difficulty learning from consequences.<sup>[13]</sup> Memory and learning difficulties include difficulty forming and 
            retrieving memories, challenges with learning and retaining new information, need for extensive repetition, 
            and inconsistent performance.<sup>[14]</sup> Attention and processing challenges include attention difficulties (often 
            misdiagnosed as ADHD alone), slow processing speed, difficulty filtering irrelevant information, and overwhelm 
            with multiple stimuli.<sup>[15]</sup>
          </p>
          
          <p className="mb-4">
            Social cognition challenges include difficulty reading social cues, challenges understanding 
            consequences of actions, vulnerability to manipulation and exploitation, and overly trusting or inappropriate social 
            boundaries.<sup>[16]</sup> Emotional regulation difficulties include difficulty managing emotions, mood dysregulation, heightened 
            stress response, and co-occurring mental health conditions.<sup>[17]</sup> Sensory processing differences include sensory sensitivities 
            or seeking behaviors and over- or under-responsivity to sensory input.<sup>[18]</sup> Adaptive functioning challenges include difficulties 
            with self-care, money management, time management, safety awareness, and maintaining employment.<sup>[9]</sup> Many individuals with FASD 
            do not have visible physical features making diagnosis challenging and leading to it being called an "invisible disability."<sup>[19]</sup> 
            Individuals with FASD often have notable strengths including being friendly, outgoing and sociable, creative and artistic 
            abilities, verbal skills and storytelling, persistence and determination, empathy and emotional sensitivity, and specific 
            talents in areas of interest.<sup>[20]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1721637990437-36b77376cfe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXRhbCUyMGJyYWluJTIwZGV2ZWxvcG1lbnQlMjBuZXVyb2RldmVsb3BtZW50fGVufDF8fHx8MTc2NzQwOTE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fetal brain development - neurological basis of FASD"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            FASD is caused by prenatal alcohol exposure.<sup>[21]</sup> When alcohol is consumed during pregnancy, it passes through 
            the placenta and disrupts the developing brain and other organs.<sup>[22]</sup> Alcohol is a teratogen (substance that causes 
            birth defects) that interferes with cell development, migration, and organization in the developing fetus.<sup>[23]</sup> The 
            timing, amount, and pattern of alcohol exposure affect the severity and type of damage, though there is no known 
            safe amount or timing of alcohol use during pregnancy—any alcohol exposure can potentially cause harm.<sup>[24]</sup>
          </p>
          
          <p className="mb-4">
            The 
            developing brain is particularly vulnerable throughout pregnancy with different brain regions developing at different 
            times, so alcohol exposure at any point can affect specific structures and functions.<sup>[25]</sup> Alcohol causes permanent changes 
            to brain structure including reduced brain size, abnormalities in the corpus callosum, differences in the cerebellum 
            and basal ganglia, and disrupted neural pathways.<sup>[26][27]</sup> These structural changes result in the functional impairments in 
            executive functioning, memory, attention, social cognition, emotional regulation, and sensory processing that characterize 
            FASD.<sup>[28]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGlhZ25vc2lzJTIwY2xpbmljYWwlMjBldmFsdWF0aW9ufGVufDF8fHx8MTc2NzQwOTE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Clinical evaluation - diagnosing FASD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            FASD is diagnosed through comprehensive evaluation by trained clinicians using FASD-specific diagnostic criteria.<sup>[29]</sup> 
            Confirmed prenatal alcohol exposure is not always required for diagnosis if brain dysfunction and features are present.<sup>[30]</sup> 
            The evaluation includes detailed history including pregnancy history and any known alcohol exposure, physical examination 
            for characteristic facial features and growth deficiency (in FAS), neuropsychological testing to assess cognitive functioning 
            and adaptive behavior across multiple domains, behavioral assessment, screening for co-occurring conditions, and medical 
            evaluation to assess for organ abnormalities (ARBD).<sup>[31][32]</sup>
          </p>
          
          <p className="mb-4">
            Diagnostic categories include Fetal Alcohol Syndrome (FAS) with growth 
            deficiency, characteristic facial features, and central nervous system impairment; Partial FAS (pFAS) with some but not all 
            criteria; Alcohol-Related Neurodevelopmental Disorder (ARND) with significant brain-based impairments without physical features; 
            and Alcohol-Related Birth Defects (ARBD) with physical abnormalities affecting organs.<sup>[33]</sup> Diagnosis is often delayed or missed because 
            many individuals don't have visible physical features, symptoms overlap with other conditions, and FASD awareness among clinicians 
            varies.<sup>[34]</sup> Early diagnosis is critical to prevent secondary disabilities.<sup>[35]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0aXZlJTIwY2FyZSUyMGFkYXB0aXZlJTIwc2tpbGxzJTIwdGhlcmFweXxlbnwxfHx8fDE3Njc0MDkxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Supportive care and therapy - supporting individuals with FASD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            FASD requires a neurodevelopmental approach that recognizes brain-based differences rather than seeing behaviors as willful 
            or oppositional.<sup>[36]</sup> Brain-based accommodations include concrete simplified instructions with visual supports, consistent routines 
            and predictability, supervision and external structure for memory and organization, shorter work periods with breaks, reduced 
            sensory overload, and direct teaching of skills.<sup>[37]</sup> Environmental modifications include stable nurturing home environment (protective 
            factor), structured supervised settings, supported decision-making and guardianship when needed, and protection from exploitation 
            and victimization.<sup>[38]</sup>
          </p>
          
          <p className="mb-4">
            Educational and vocational support includes IEPs with FASD-informed accommodations, functional life skills training, 
            supported employment with job coaching, alternative discipline approaches that recognize brain-based challenges, and transition planning 
            that addresses adaptive functioning gaps.<sup>[39]</sup> Therapeutic interventions include mental health support for co-occurring conditions, executive 
            function coaching, social skills training with explicit instruction, occupational therapy for sensory and adaptive skills, and family 
            education and support.<sup>[40]</sup> Reframing behaviors involves understanding that behaviors are brain-based not intentional: "won't" should be 
            understood as "can't," inconsistency reflects brain function not lack of effort, repeated mistakes are symptoms of memory and executive 
            function challenges, and social difficulties are neurological not character flaws.<sup>[41]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with FASD</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1615388599690-02c0d4a3dfa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFiaWxpdHklMjBzdXBwb3J0JTIwbWVhbmluZ2Z1bCUyMGxpZmV8ZW58MXx8fHwxNzY3NDA5MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Stability and meaningful life - living with FASD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with FASD can lead fulfilling lives when their unique neurocognitive profile is understood and supported.<sup>[42]</sup> 
            With informed support that matches the person's neurocognitive profile, individuals with FASD can experience stability, 
            success, and quality of life.<sup>[43]</sup> The key is understanding FASD as a permanent brain-based disability requiring lifelong, 
            developmentally appropriate support.<sup>[44]</sup> Without appropriate diagnosis and support, individuals with FASD are at high risk for 
            secondary disabilities including mental health disorders, disrupted school experience, unemployment, homelessness, substance 
            use disorders, legal system involvement, and victimization—but these secondary disabilities are preventable with early diagnosis, 
            appropriate support, and protective environments.<sup>[45]</sup>
          </p>
          
          <p className="mb-4">
            Living well with FASD involves early diagnosis and FASD-informed support, 
            brain-based accommodations and environmental modifications, protective stable home environment, educational and vocational support 
            with appropriate accommodations, therapeutic interventions for co-occurring conditions, and supported decision-making and supervision 
            as needed.<sup>[46]</sup> Topics related to living with FASD include navigating executive functioning challenges, managing memory and learning 
            differences, developing adaptive living skills with support, building safe social connections with protection from exploitation, 
            accessing FASD-informed education and employment support, understanding that FASD is brain-based not willful or behavioral, and 
            recognizing that with appropriate understanding and support individuals with FASD can experience stability success and meaningful lives.<sup>[47]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Jones, K. L., & Smith, D. W. (1973). "Recognition of the fetal alcohol syndrome in early infancy." <em>The Lancet</em>, 302(7836), 999-1001.</p>
          <p>[2] Hoyme, H. E., Kalberg, W. O., Elliott, A. J., et al. (2016). "Updated clinical guidelines for diagnosing fetal alcohol spectrum disorders." <em>Pediatrics</em>, 138(2), e20154256.</p>
          <p>[3] May, P. A., Chambers, C. D., Kalberg, W. O., et al. (2018). "Prevalence of fetal alcohol spectrum disorders in 4 US communities." <em>JAMA</em>, 319(5), 474-482.</p>
          <p>[4] May, P. A., Baete, A., Russo, J., et al. (2014). "Prevalence and characteristics of fetal alcohol spectrum disorders." <em>Pediatrics</em>, 134(5), 855-866.</p>
          <p>[5] Burd, L., Roberts, D., Olson, M., & Odendaal, H. (2007). "Ethanol and the placenta: A review." <em>The Journal of Maternal-Fetal & Neonatal Medicine</em>, 20(5), 361-375.</p>
          <p>[6] American Academy of Pediatrics. (2015). "Fetal alcohol spectrum disorders." <em>Pediatrics</em>, 136(5), e1395-e1406.</p>
          <p>[7] Streissguth, A. P., Bookstein, F. L., Barr, H. M., Sampson, P. D., O'Malley, K., & Young, J. K. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome and fetal alcohol effects." <em>Journal of Developmental & Behavioral Pediatrics</em>, 25(4), 228-238.</p>
          <p>[8] Petrenko, C. L., Tahir, N., Mahoney, E. C., & Chin, N. P. (2014). "Prevention of secondary conditions in fetal alcohol spectrum disorders: Identification of systems-level barriers." <em>Maternal and Child Health Journal</em>, 18(6), 1496-1505.</p>
          <p>[9] Streissguth, A. P., Barr, H. M., Kogan, J., & Bookstein, F. L. (1996). "Understanding the occurrence of secondary disabilities in clients with fetal alcohol syndrome (FAS) and fetal alcohol effects (FAE)." <em>Final report to the Centers for Disease Control and Prevention</em> (Tech. Rep. No. 96-06). Seattle: University of Washington School of Medicine.</p>
          <p>[10] Burd, L., Klug, M. G., Martsolf, J. T., & Kerbeshian, J. (2003). "Fetal alcohol syndrome: Neuropsychiatric phenomics." <em>Neurotoxicology and Teratology</em>, 25(6), 697-705.</p>
          <p>[11] Chudley, A. E., Conry, J., Cook, J. L., Loock, C., Rosales, T., & LeBlanc, N. (2005). "Fetal alcohol spectrum disorder: Canadian guidelines for diagnosis." <em>CMAJ</em>, 172(5 suppl), S1-S21.</p>
          <p>[12] Mattson, S. N., Crocker, N., & Nguyen, T. T. (2011). "Fetal alcohol spectrum disorders: Neuropsychological and behavioral features." <em>Neuropsychology Review</em>, 21(2), 81-101.</p>
          <p>[13] Kodituwakku, P. W. (2007). "Defining the behavioral phenotype in children with fetal alcohol spectrum disorders: A review." <em>Neuroscience & Biobehavioral Reviews</em>, 31(2), 192-201.</p>
          <p>[14] Rasmussen, C., & Bisanz, J. (2009). "Executive functioning in children with fetal alcohol spectrum disorders: Profiles and age-related differences." <em>Child Neuropsychology</em>, 15(3), 201-215.</p>
          <p>[15] Coles, C. D., Platzman, K. A., Raskind-Hood, C. L., Brown, R. T., Falek, A., & Smith, I. E. (1997). "A comparison of children affected by prenatal alcohol exposure and attention deficit, hyperactivity disorder." <em>Alcoholism: Clinical and Experimental Research</em>, 21(1), 150-161.</p>
          <p>[16] Greenbaum, R. L., Stevens, S. A., Nash, K., Koren, G., & Rovet, J. (2009). "Social cognitive and emotion processing abilities of children with fetal alcohol spectrum disorders: A comparison with attention deficit hyperactivity disorder." <em>Alcoholism: Clinical and Experimental Research</em>, 33(10), 1656-1670.</p>
          <p>[17] O'Connor, M. J., & Paley, B. (2009). "Psychiatric conditions associated with prenatal alcohol exposure." <em>Developmental Disabilities Research Reviews</em>, 15(3), 225-234.</p>
          <p>[18] Franklin, L., Deitz, J., Jirikowic, T., & Astley, S. (2008). "Children with fetal alcohol spectrum disorders: Problem behaviors and sensory processing." <em>American Journal of Occupational Therapy</em>, 62(3), 265-273.</p>
          <p>[19] Astley, S. J. (2010). "Profile of the first 1,400 patients receiving diagnostic evaluations for fetal alcohol spectrum disorder at the Washington State Fetal Alcohol Syndrome Diagnostic & Prevention Network." <em>Canadian Journal of Clinical Pharmacology</em>, 17(1), e132-e164.</p>
          <p>[20] Olson, H. C., Oti, R., Gelo, J., & Beck, S. (2009). "'Family matters:' Fetal alcohol spectrum disorders and the family." <em>Developmental Disabilities Research Reviews</em>, 15(3), 235-249.</p>
          <p>[21] Riley, E. P., Infante, M. A., & Warren, K. R. (2011). "Fetal alcohol spectrum disorders: An overview." <em>Neuropsychology Review</em>, 21(2), 73-80.</p>
          <p>[22] Burd, L., Blair, J., & Dropps, K. (2012). "Prenatal alcohol exposure, blood alcohol concentrations and alcohol elimination rates for the mother, fetus and newborn." <em>Journal of Perinatology</em>, 32(9), 652-659.</p>
          <p>[23] Jones, K. L., Smith, D. W., Ulleland, C. N., & Streissguth, P. (1973). "Pattern of malformation in offspring of chronic alcoholic mothers." <em>The Lancet</em>, 301(7815), 1267-1271.</p>
          <p>[24] Henderson, J., Gray, R., & Brocklehurst, P. (2007). "Systematic review of effects of low-moderate prenatal alcohol exposure on pregnancy outcome." <em>BJOG: An International Journal of Obstetrics & Gynaecology</em>, 114(3), 243-252.</p>
          <p>[25] Goodlett, C. R., Horn, K. H., & Zhou, F. C. (2005). "Alcohol teratogenesis: Mechanisms of damage and strategies for intervention." <em>Experimental Biology and Medicine</em>, 230(6), 394-406.</p>
          <p>[26] Lebel, C., Roussotte, F., & Sowell, E. R. (2011). "Imaging the impact of prenatal alcohol exposure on the structure of the developing human brain." <em>Neuropsychology Review</em>, 21(2), 102-118.</p>
          <p>[27] Roebuck, T. M., Mattson, S. N., & Riley, E. P. (1998). "A review of the neuroanatomical findings in children with fetal alcohol syndrome or prenatal exposure to alcohol." <em>Alcoholism: Clinical and Experimental Research</em>, 22(2), 339-344.</p>
          <p>[28] Norman, A. L., Crocker, N., Mattson, S. N., & Riley, E. P. (2009). "Neuroimaging and fetal alcohol spectrum disorders." <em>Developmental Disabilities Research Reviews</em>, 15(3), 209-217.</p>
          <p>[29] Cook, J. L., Green, C. R., Lilley, C. M., et al. (2016). "Fetal alcohol spectrum disorder: A guideline for diagnosis across the lifespan." <em>CMAJ</em>, 188(3), 191-197.</p>
          <p>[30] Astley, S. J. (2004). <em>Diagnostic guide for fetal alcohol spectrum disorders: The 4-digit diagnostic code</em> (3rd ed.). Seattle: University of Washington.</p>
          <p>[31] Bertrand, J., Floyd, R. L., Weber, M. K., et al. (2004). "Fetal alcohol syndrome: Guidelines for referral and diagnosis." <em>Atlanta, GA: Centers for Disease Control and Prevention</em>.</p>
          <p>[32] Mattson, S. N., Foroud, T., Sowell, E. R., et al. (2010). "Collaborative Initiative on Fetal Alcohol Spectrum Disorders: Methodology of clinical projects." <em>Alcohol</em>, 44(7-8), 635-641.</p>
          <p>[33] Stratton, K., Howe, C., & Battaglia, F. (Eds.). (1996). <em>Fetal alcohol syndrome: Diagnosis, epidemiology, prevention, and treatment</em>. Washington, DC: National Academy Press.</p>
          <p>[34] Chasnoff, I. J., Wells, A. M., & King, L. (2015). "Misdiagnosis and missed diagnoses in foster and adopted children with prenatal alcohol exposure." <em>Pediatrics</em>, 135(2), 264-270.</p>
          <p>[35] Streissguth, A. P. (1997). <em>Fetal alcohol syndrome: A guide for families and communities</em>. Baltimore: Paul H. Brookes Publishing.</p>
          <p>[36] Malbin, D. (2002). <em>Fetal alcohol spectrum disorders: Trying differently rather than harder</em> (2nd ed.). Portland, OR: FASCETS.</p>
          <p>[37] Paley, B., & O'Connor, M. J. (2009). "Intervention for individuals with fetal alcohol spectrum disorders: Treatment approaches and case management." <em>Developmental Disabilities Research Reviews</em>, 15(3), 258-267.</p>
          <p>[38] Olson, H. C., Jirikowic, T., Kartin, D., & Astley, S. (2007). "Responding to the challenge of early intervention for fetal alcohol spectrum disorders." <em>Infants & Young Children</em>, 20(2), 172-189.</p>
          <p>[39] Kalberg, W. O., & Buckley, D. (2007). "FASD: What types of intervention and rehabilitation are useful?" <em>Neuroscience & Biobehavioral Reviews</em>, 31(2), 278-285.</p>
          <p>[40] Bertrand, J. (2009). "Interventions for children with fetal alcohol spectrum disorders (FASDs): Overview of findings for five innovative research projects." <em>Research in Developmental Disabilities</em>, 30(5), 986-1006.</p>
          <p>[41] Malbin, D. V. (2004). "Fetal alcohol spectrum disorders and the role of family court judges in improving outcomes for children and families." <em>Juvenile and Family Court Journal</em>, 55(2), 53-63.</p>
          <p>[42] Conry, J., & Fast, D. K. (2004). "Fetal alcohol syndrome and the criminal justice system." <em>Vancouver, BC: British Columbia Fetal Alcohol Syndrome Resource Society</em>.</p>
          <p>[43] Duquette, C., Stodel, E., Fullarton, S., & Hagglund, K. (2006). "Persistence in high school: Experiences of adolescents and young adults with fetal alcohol spectrum disorder." <em>Journal of Intellectual & Developmental Disability</em>, 31(4), 219-231.</p>
          <p>[44] Brown, N. N., Burd, L., Grant, T., Edwards, W., Adler, R., & Streissguth, A. (2015). "Prenatal alcohol exposure: An assessment strategy for the legal context." <em>International Journal of Law and Psychiatry</em>, 42, 144-148.</p>
          <p>[45] Spohr, H. L., Willms, J., & Steinhausen, H. C. (2007). "Fetal alcohol spectrum disorders in young adulthood." <em>The Journal of Pediatrics</em>, 150(2), 175-179.</p>
          <p>[46] Petrenko, C. L., & Alto, M. E. (2017). "Interventions in fetal alcohol spectrum disorders: An international perspective." <em>European Journal of Medical Genetics</em>, 60(1), 79-91.</p>
          <p>[47] Streissguth, A. P., & Kanter, J. (Eds.). (1997). <em>The challenge of fetal alcohol syndrome: Overcoming secondary disabilities</em>. Seattle: University of Washington Press.</p>
        </div>
      </section>
    </article>
  );
}