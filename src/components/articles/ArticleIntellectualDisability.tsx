import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleIntellectualDisabilityProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleIntellectualDisability({ setCurrentArticle }: ArticleIntellectualDisabilityProps) {
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
      title: 'Living with Intellectual Disability'
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
        Intellectual Disability (ID)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Intellectual Disability (ID)</strong>, also known as intellectual developmental disorder, 
            is a neurodevelopmental condition characterized by significant limitations in both intellectual 
            functioning (reasoning, learning, problem-solving) and adaptive behavior (practical, social, and 
            conceptual skills).<sup>[1]</sup> ID represents a diverse spectrum of cognitive functioning and is a distinct 
            neurotype with unique support needs and strengths.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Intellectual Disability"
            data={[
              { label: 'Other names', value: 'ID, Intellectual developmental disorder' },
              { label: 'Specialty', value: 'Developmental Medicine, Psychology' },
              { label: 'Symptoms', value: 'Limitations in cognitive and adaptive functioning' },
              { label: 'Onset', value: 'During developmental period (before age 18)' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: 'Approximately 1-3% of global population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMGVkdWNhdGlvbiUyMGNvZ25pdGl2ZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2NzQwODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Learning and cognitive development - understanding intellectual disability"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Intellectual disability affects approximately 1-3% of the global population, making it one of 
            the most common developmental conditions.<sup>[3]</sup> ID begins during the developmental period (before age 18) 
            and is characterized by cognitive functioning that is significantly below average, along with 
            limitations in adaptive functioning across multiple life domains.<sup>[4]</sup> Modern understanding of ID emphasizes 
            a social model perspective: disability results not solely from individual limitations, but from the 
            interaction between the person and environmental barriers.<sup>[5]</sup>
          </p>
          
          <p className="mb-4">
            With appropriate supports, accommodations, 
            and inclusion, individuals with ID can lead fulfilling, self-determined lives and contribute meaningfully 
            to their communities.<sup>[6]</sup> The term "intellectual disability" replaced older terminology to reflect a more 
            respectful, person-first approach that emphasizes human dignity and potential.<sup>[7]</sup> ID exists on a spectrum 
            with varying levels of support needs from intermittent to pervasive.<sup>[8]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1638699532230-1c7676c2a708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGFwdGl2ZSUyMHNraWxscyUyMGRhaWx5JTIwbGl2aW5nfGVufDF8fHx8MTc2NzQwODg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Adaptive skills and daily living - characteristics of ID"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            ID affects three main areas of adaptive functioning.<sup>[9]</sup> Conceptual skills include memory and learning, 
            language development and literacy, reasoning and problem-solving, abstract thinking, understanding money 
            time and numbers, and self-direction and planning.<sup>[10]</sup> Social skills include interpersonal communication, 
            understanding social cues and norms, making and maintaining friendships, social problem-solving, understanding 
            consequences of actions, and vulnerability to manipulation or exploitation.<sup>[11]</sup> Practical skills include activities 
            of daily living (eating, dressing, hygiene), using transportation, managing schedules and routines, using 
            technology and phones, occupational skills and work habits, healthcare management, and safety awareness.<sup>[12]</sup>
          </p>
          
          <p className="mb-4">
            The 
            spectrum ranges from mild ID with intermittent support needs (may develop academic skills to 6th grade level, 
            can often live independently with some support, capable of maintaining employment) to moderate ID with limited 
            support needs (academic skills to 2nd-4th grade level, can perform self-care with training), severe ID with 
            extensive support needs (limited language, requires substantial support for daily living), and profound ID with 
            pervasive support needs (requires 24-hour care).<sup>[13]</sup> Individuals with ID possess unique strengths including authentic 
            genuine social interactions, strong emotional intuition and empathy, loyalty and commitment in relationships, 
            creativity and unique perspectives, determination and persistence, and specific talents in areas like music, art, 
            or memory for details.<sup>[14][15]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1655555086913-8e8e6b242005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGRldmVsb3BtZW50JTIwbmV1cm9kZXZlbG9wbWVudCUyMGNoaWxkfGVufDF8fHx8MTc2NzQwODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain development - neurological basis of intellectual disability"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            ID has diverse etiologies often involving genetic, prenatal, perinatal, or postnatal factors.<sup>[16]</sup> Genetic causes 
            include chromosomal differences (Down syndrome, Fragile X syndrome), single-gene disorders (Rett syndrome, PKU), 
            and inherited conditions affecting brain development.<sup>[17][18]</sup> Prenatal factors include maternal infections during pregnancy, 
            fetal alcohol spectrum disorder, malnutrition or toxin exposure, and complications of prematurity.<sup>[19]</sup>
          </p>
          
          <p className="mb-4">
            Perinatal and 
            postnatal factors include birth complications and oxygen deprivation, early childhood illnesses (meningitis, severe 
            malnutrition), traumatic brain injury in early development, and severe environmental deprivation.<sup>[20]</sup> In many cases 
            (30-40%), the specific cause of ID is not identified, underscoring the complexity of brain development and the need 
            for ongoing research.<sup>[21]</sup> ID results from factors affecting brain development during the developmental period creating 
            differences in how the brain processes information and develops cognitive and adaptive skills.<sup>[22]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1560785496-321917f24016?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2dpY2FsJTIwYXNzZXNzbWVudCUyMHRlc3RpbmclMjBldmFsdWF0aW9ufGVufDF8fHx8MTc2NzQwODg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Psychological assessment - diagnosing intellectual disability"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Intellectual disability is diagnosed by psychologists or developmental specialists through comprehensive evaluation.<sup>[23]</sup> 
            The diagnostic criteria require significant limitations in intellectual functioning typically indicated by IQ score 
            approximately two standard deviations below the mean (around 70 or below), significant limitations in adaptive functioning 
            in at least one of three domains (conceptual, social, practical), and onset during the developmental period (before age 18).<sup>[24]</sup>
          </p>
          
          <p className="mb-4">
            The evaluation includes standardized cognitive assessment (IQ testing), adaptive behavior assessment through standardized 
            scales and interviews with caregivers, developmental history and medical evaluation, observation in multiple settings, and 
            assessment of support needs across life domains.<sup>[25][26]</sup> Diagnosis focuses not just on deficits but on identifying strengths and 
            determining appropriate supports.<sup>[27]</sup> The evaluation also screens for co-occurring conditions and identifies specific causes 
            when possible through genetic testing, medical workup, or developmental history.<sup>[28]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1653212883728-f4cc35b19c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0ZWQlMjBlbXBsb3ltZW50JTIwam9iJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY3NDA4ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Supported employment and training - supporting individuals with ID"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Effective support for individuals with ID emphasizes inclusion, self-determination, and quality of life.<sup>[29]</sup> Person-centered 
            planning ensures support plans are individualized based on the person's preferences, goals, and strengths with the individual 
            at the center of all decisions.<sup>[30]</sup> Educational approaches include Individualized Education Programs (IEPs), functional life skills 
            training, inclusive education when appropriate, transition planning for adulthood, and assistive technology and augmentative 
            communication.<sup>[31][32]</sup>
          </p>
          
          <p className="mb-4">
            Employment and day services include supported employment with job coaching, competitive integrated employment, 
            vocational training programs, and community participation and volunteer opportunities.<sup>[33]</sup> Living arrangements range from independent 
            living with community supports to supported living arrangements, group homes with trained staff, or family care with respite 
            services.<sup>[34]</sup> Rights and self-advocacy support includes self-advocacy training and organizations, supported decision-making (rather 
            than guardianship when possible), protection of civil rights and dignity, promoting choice and autonomy, and access to relationships, 
            sexuality education, and community life.<sup>[35][36]</sup> Healthcare includes regular health screenings and preventive care, mental health support 
            when needed, addressing co-occurring conditions, and accessible communication with healthcare providers.<sup>[37]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Intellectual Disability</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1761069234509-8205bf45a445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBpbmNsdXNpb24lMjBzb2NpYWwlMjBwYXJ0aWNpcGF0aW9ufGVufDF8fHx8MTc2NzQwODg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Community inclusion - living with intellectual disability"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with intellectual disability lead meaningful lives across all areas of society when provided with appropriate 
            supports and inclusion.<sup>[38]</sup> With the right supports, individuals with ID can experience meaningful relationships, contribute to 
            their communities, and live lives of dignity and purpose.<sup>[39]</sup> The ultimate goal of all support is to maximize quality of life, 
            autonomy, community participation, and personal fulfillment.<sup>[40]</sup> Living well with ID involves accessing person-centered supports 
            tailored to individual needs and goals, inclusive education and lifelong learning opportunities, supported or competitive 
            employment and community participation, living arrangements that promote maximum independence, building meaningful relationships 
            and social connections, and developing self-advocacy and self-determination skills.<sup>[41]</sup>
          </p>
          
          <p className="mb-4">
            Topics related to living with ID include 
            education and skill development, employment and career pathways, independent and supported living options, relationships, 
            friendships and community inclusion, self-advocacy and exercising rights, accessing healthcare and support services, and 
            understanding that with appropriate supports and societal inclusion, people with ID contribute meaningfully to families, 
            communities and society living lives of dignity, purpose and fulfillment.<sup>[42][43]</sup> The self-advocacy movement led by 
            individuals with intellectual disabilities continues to advance rights, inclusion, and recognition of full personhood.<sup>[44]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[2] Schalock, R. L., Borthwick-Duffy, S. A., Bradley, V. J., et al. (2010). <em>Intellectual disability: Definition, classification, and systems of supports</em> (11th ed.). Washington, DC: American Association on Intellectual and Developmental Disabilities.</p>
          <p>[3] Maulik, P. K., Mascarenhas, M. N., Mathers, C. D., Dua, T., & Saxena, S. (2011). "Prevalence of intellectual disability: A meta-analysis of population-based studies." <em>Research in Developmental Disabilities</em>, 32(2), 419-436.</p>
          <p>[4] Schalock, R. L., Luckasson, R. A., & Shogren, K. A. (2007). "The renaming of mental retardation: Understanding the change to the term intellectual disability." <em>Intellectual and Developmental Disabilities</em>, 45(2), 116-124.</p>
          <p>[5] Shakespeare, T. (2006). "The social model of disability." In L. J. Davis (Ed.), <em>The disability studies reader</em> (2nd ed., pp. 197-204). New York: Routledge.</p>
          <p>[6] Shogren, K. A., Luckasson, R., & Schalock, R. L. (2014). "The definition of 'context' and its application in the field of intellectual disability." <em>Journal of Policy and Practice in Intellectual Disabilities</em>, 11(2), 109-116.</p>
          <p>[7] Harris, J. C. (2013). "New terminology for mental retardation in DSM-5 and ICD-11." <em>Current Opinion in Psychiatry</em>, 26(3), 260-262.</p>
          <p>[8] Thompson, J. R., Bradley, V. J., Buntinx, W. H., et al. (2009). "Conceptualizing supports and the support needs of people with intellectual disability." <em>Intellectual and Developmental Disabilities</em>, 47(2), 135-146.</p>
          <p>[9] Tassé, M. J., Schalock, R. L., Balboni, G., et al. (2012). "The construct of adaptive behavior: Its conceptualization, measurement, and use in the field of intellectual disability." <em>American Journal on Intellectual and Developmental Disabilities</em>, 117(4), 291-303.</p>
          <p>[10] Greenspan, S., & Woods, G. W. (2014). "Intellectual disability as a disorder of reasoning and judgement: The gradual move away from intelligence quotient-ceilings." <em>Current Opinion in Psychiatry</em>, 27(2), 110-116.</p>
          <p>[11] Leffert, J. S., Siperstein, G. N., & Widaman, K. F. (2010). "Social perception in children with intellectual disabilities: The interpretation of benign and hostile intentions." <em>Journal of Intellectual Disability Research</em>, 54(2), 168-180.</p>
          <p>[12] Harrison, P. L., & Oakland, T. (2015). <em>Adaptive Behavior Assessment System</em> (3rd ed.). Torrance, CA: Western Psychological Services.</p>
          <p>[13] Luckasson, R., & Schalock, R. L. (2013). "Defining and applying a functionality approach to intellectual disability." <em>Journal of Intellectual Disability Research</em>, 57(7), 657-668.</p>
          <p>[14] Haas, K., Costley, D., Falkmer, M., Richdale, A., Sofronoff, K., & Falkmer, T. (2016). "Factors influencing the research participation of adults with autism spectrum disorders." <em>Journal of Autism and Developmental Disorders</em>, 46(5), 1793-1805.</p>
          <p>[15] Gilmore, L., Campbell, J., & Cuskelly, M. (2003). "Developmental expectations, personality stereotypes, and attitudes towards inclusive education: Community and teacher views of Down syndrome." <em>International Journal of Disability, Development and Education</em>, 50(1), 65-76.</p>
          <p>[16] Boat, T. F., & Wu, J. T. (Eds.). (2015). <em>Mental disorders and disabilities among low-income children</em>. Washington, DC: National Academies Press.</p>
          <p>[17] Rauch, A., Hoyer, J., Guth, S., et al. (2006). "Diagnostic yield of various genetic approaches in patients with unexplained developmental delay or mental retardation." <em>American Journal of Medical Genetics Part A</em>, 140(19), 2063-2074.</p>
          <p>[18] Vissers, L. E., Gilissen, C., & Veltman, J. A. (2016). "Genetic studies in intellectual disability and related disorders." <em>Nature Reviews Genetics</em>, 17(1), 9-18.</p>
          <p>[19] Popova, S., Lange, S., Probst, C., Gmel, G., & Rehm, J. (2017). "Estimation of national, regional, and global prevalence of alcohol use during pregnancy and fetal alcohol syndrome: A systematic review and meta-analysis." <em>The Lancet Global Health</em>, 5(3), e290-e299.</p>
          <p>[20] Graham, E. M., Ruis, K. A., Hartman, A. L., Northington, F. J., & Fox, H. E. (2008). "A systematic review of the role of intrapartum hypoxia-ischemia in the causation of neonatal encephalopathy." <em>American Journal of Obstetrics and Gynecology</em>, 199(6), 587-595.</p>
          <p>[21] Moeschler, J. B., Shevell, M., & Committee on Genetics. (2014). "Comprehensive evaluation of the child with intellectual disability or global developmental delays." <em>Pediatrics</em>, 134(3), e903-e918.</p>
          <p>[22] Dykens, E. M. (2015). "Family adjustment and interventions in neurodevelopmental disorders." <em>Current Opinion in Psychiatry</em>, 28(2), 121-126.</p>
          <p>[23] Sattler, J. M., & Dumont, R. (2004). <em>Assessment of children: WISC-IV and WPPSI-III supplement</em>. San Diego, CA: Jerome M. Sattler Publisher.</p>
          <p>[24] Salvador-Carulla, L., Reed, G. M., Vaez-Azizi, L. M., et al. (2011). "Intellectual developmental disorders: Towards a new name, definition and framework for 'mental retardation/intellectual disability' in ICD-11." <em>World Psychiatry</em>, 10(3), 175-180.</p>
          <p>[25] Sparrow, S. S., Cicchetti, D. V., & Saulnier, C. A. (2016). <em>Vineland Adaptive Behavior Scales</em> (3rd ed.). Bloomington, MN: Pearson.</p>
          <p>[26] Nihira, K., Leland, H., & Lambert, N. (1993). <em>AAMR Adaptive Behavior Scale—Residential and Community</em> (2nd ed.). Austin, TX: Pro-Ed.</p>
          <p>[27] Shogren, K. A., Wehmeyer, M. L., Buchanan, C. L., & Lopez, S. J. (2006). "The application of positive psychology and self-determination to research in intellectual disability." <em>Research and Practice for Persons with Severe Disabilities</em>, 31(4), 338-345.</p>
          <p>[28] Shevell, M., Ashwal, S., Donley, D., et al. (2003). "Practice parameter: Evaluation of the child with global developmental delay: Report of the Quality Standards Subcommittee of the American Academy of Neurology and The Practice Committee of the Child Neurology Society." <em>Neurology</em>, 60(3), 367-380.</p>
          <p>[29] Claes, C., Van Hove, G., Vandevelde, S., van Loon, J., & Schalock, R. L. (2010). "Person-centered planning: Analysis of research and effectiveness." <em>Intellectual and Developmental Disabilities</em>, 48(6), 432-453.</p>
          <p>[30] Holburn, S., Jacobson, J. W., Vietze, P. M., Schwartz, A. A., & Sersen, E. (2000). "Quantifying the process and outcomes of person-centered planning." <em>American Journal on Mental Retardation</em>, 105(5), 402-416.</p>
          <p>[31] Browder, D. M., Spooner, F., Ahlgrim-Delzell, L., Harris, A. A., & Wakeman, S. (2008). "A meta-analysis on teaching mathematics to students with significant cognitive disabilities." <em>Exceptional Children</em>, 74(4), 407-432.</p>
          <p>[32] Kleinert, H. L., Towles-Reeves, E., Quenemoen, R., et al. (2015). "Where students with the most significant cognitive disabilities are taught: Implications for general curriculum access." <em>Exceptional Children</em>, 81(3), 312-328.</p>
          <p>[33] Wehman, P., Schall, C., McDonough, J., et al. (2014). "Competitive employment for youth with autism spectrum disorders: Early results from a randomized clinical trial." <em>Journal of Autism and Developmental Disorders</em>, 44(3), 487-500.</p>
          <p>[34] Stancliffe, R. J., Lakin, K. C., Larson, S., et al. (2011). "Overweight and obesity among adults with intellectual disabilities who use intellectual disability/developmental disability services in 20 U.S. states." <em>American Journal on Intellectual and Developmental Disabilities</em>, 116(6), 401-418.</p>
          <p>[35] Wehmeyer, M. L., & Abery, B. H. (2013). "Self-determination and choice." <em>Intellectual and Developmental Disabilities</em>, 51(5), 399-411.</p>
          <p>[36] Blanck, P., & Martinis, J. G. (2015). "'The right to make choices': National resource center for supported decision-making." <em>Inclusion</em>, 3(1), 24-33.</p>
          <p>[37] Krahn, G. L., Hammond, L., & Turner, A. (2006). "A cascade of disparities: Health and health care access for people with intellectual disabilities." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 12(1), 70-82.</p>
          <p>[38] Nota, L., Ferrari, L., Soresi, S., & Wehmeyer, M. (2007). "Self-determination, social abilities and the quality of life of people with intellectual disability." <em>Journal of Intellectual Disability Research</em>, 51(11), 850-865.</p>
          <p>[39] Schalock, R. L., Verdugo, M. A., Jenaro, C., et al. (2005). "Cross-cultural study of quality of life indicators." <em>American Journal on Mental Retardation</em>, 110(4), 298-311.</p>
          <p>[40] Brown, I., & Brown, R. I. (2003). <em>Quality of life and disability: An approach for community practitioners</em>. London: Jessica Kingsley Publishers.</p>
          <p>[41] Carter, E. W., Owens, L., Trainor, A. A., Sun, Y., & Swedeen, B. (2009). "Self-determination skills and opportunities of adolescents with severe intellectual and developmental disabilities." <em>American Journal on Intellectual and Developmental Disabilities</em>, 114(3), 179-192.</p>
          <p>[42] Shogren, K. A., & Turnbull, A. P. (2006). "Promoting self-determination in young children with disabilities: The critical role of families." <em>Infants & Young Children</em>, 19(4), 338-352.</p>
          <p>[43] Lachapelle, Y., Wehmeyer, M. L., Haelewyck, M. C., et al. (2005). "The relationship between quality of life and self-determination: An international study." <em>Journal of Intellectual Disability Research</em>, 49(10), 740-744.</p>
          <p>[44] Caldwell, J. (2011). "Disability identity of leaders in the self-advocacy movement." <em>Intellectual and Developmental Disabilities</em>, 49(5), 315-326.</p>
        </div>
      </section>
    </article>
  );
}
