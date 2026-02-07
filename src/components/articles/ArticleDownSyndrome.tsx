import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleDownSyndromeProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDownSyndrome({ setCurrentArticle }: ArticleDownSyndromeProps) {
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
      title: 'Living with Down Syndrome'
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
        Down Syndrome
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Down syndrome</strong> (also known as Trisomy 21) is a genetic condition caused by the 
            presence of an extra copy of chromosome 21.<sup>[1]</sup> This chromosomal difference results in a distinct 
            neurocognitive profile, characteristic physical features, and specific health considerations.<sup>[2]</sup> 
            Down syndrome represents a natural variation in human genetics and is one of the most common 
            chromosomal conditions, occurring across all racial, ethnic, and socioeconomic groups.<sup>[3]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Down Syndrome"
            data={[
              { label: 'Other names', value: 'Trisomy 21' },
              { label: 'Specialty', value: 'Medical Genetics, Developmental Medicine' },
              { label: 'Cause', value: 'Extra copy of chromosome 21' },
              { label: 'Identified', value: 'Prenatal testing or at birth' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: 'Approximately 1 in 700 births' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1654540288895-3eefdd293c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbW9zb21lcyUyMGdlbmV0aWNzJTIwRE5BJTIwYmlvbG9neXxlbnwxfHx8fDE3Njc0MDg2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Chromosomes and genetics - understanding Down syndrome"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Down syndrome affects approximately 1 in 700 babies born in the United States, making it the 
            most common chromosomal condition.<sup>[4]</sup> The condition was first described by British physician 
            John Langdon Down in 1866, though the genetic cause wasn't identified until 1959 by French 
            geneticist Jérôme Lejeune.<sup>[5]</sup> Individuals with Down syndrome have a unique cognitive profile with 
            both strengths and challenges.<sup>[6]</sup>
          </p>
          
          <p className="mb-4">
            While intellectual disability is typical, the range of cognitive 
            functioning varies widely—from mild to moderate, and occasionally borderline.<sup>[7]</sup> With appropriate 
            support, education, and inclusion, people with Down syndrome attend school, work, form relationships, 
            and participate fully in community life.<sup>[8]</sup> Life expectancy for individuals with Down syndrome has 
            increased dramatically—from 25 years in 1983 to 60+ years today—thanks to improved medical care, 
            early intervention, and societal inclusion.<sup>[9]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1763831488402-107bb1824471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBsZWFybmluZyUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3Njc0MDg2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Visual learning and education - cognitive strengths in Down syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Down syndrome creates a distinct pattern of cognitive strengths and challenges.<sup>[10]</sup> Cognitive strengths 
            include visual learning and visual-spatial processing, social awareness and emotional intelligence, 
            learning through observation and imitation, strong long-term memory especially for faces and places, 
            and visuospatial short-term memory.<sup>[11][12]</sup> Cognitive challenges include verbal short-term memory and working 
            memory, auditory processing and sequential processing, expressive language (typically more delayed than 
            receptive language), abstract reasoning and generalization, and processing speed.<sup>[13]</sup>
          </p>
          
          <p className="mb-4">
            Language development 
            is typically delayed with receptive language usually stronger than expressive language, and speech may 
            be affected by low muscle tone and structural differences.<sup>[14]</sup> Common physical characteristics include 
            almond-shaped eyes with an upward slant, flattened facial profile, low muscle tone (hypotonia), short 
            stature, and single crease across the palm.<sup>[15]</sup> Associated health conditions include congenital heart defects 
            (approximately 50% of babies), hearing and vision issues, thyroid problems, sleep apnea, gastrointestinal 
            issues, and increased susceptibility to infections.<sup>[16][17]</sup> Social and emotional characteristics include generally 
            being affectionate, social, and enjoying interpersonal connection, strong emotional awareness and empathy, 
            and experiencing the full range of emotions.<sup>[18]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1654540288895-3eefdd293c1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbW9zb21lcyUyMGdlbmV0aWNzJTIwRE5BJTIwYmlvbG9neXxlbnwxfHx8fDE3Njc0MDg2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Chromosome 21 - genetic basis of Down syndrome"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Down syndrome results from having an extra copy of chromosome 21.<sup>[19]</sup> There are three genetic variations: 
            Trisomy 21 (95% of cases) where every cell has three copies of chromosome 21 instead of two occurring 
            randomly during cell division and not inherited, Translocation Down Syndrome (3-4% of cases) where part 
            of chromosome 21 attaches to another chromosome with about one-third of translocation cases inherited from 
            a parent carrier, and Mosaic Down Syndrome (1-2% of cases) where only some cells have the extra chromosome 
            21 while others have the typical number.<sup>[20][21]</sup>
          </p>
          
          <p className="mb-4">
            Advanced maternal age increases the likelihood of having a baby 
            with Down syndrome, though babies with Down syndrome are born to mothers of all ages.<sup>[22]</sup> Down syndrome is not 
            caused by anything the parents did or didn't do—it's a naturally occurring genetic variation that happens 
            during cell division.<sup>[23]</sup> The extra genetic material from chromosome 21 affects development throughout the body, 
            particularly influencing brain development and physical features.<sup>[24]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5ldGljJTIwdGVzdGluZyUyMG1lZGljYWwlMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NzQwODYyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Genetic testing - diagnosing Down syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Down syndrome is identified through prenatal testing or at birth.<sup>[25]</sup> Prenatal screening tests include blood 
            tests and ultrasound that assess risk, while diagnostic tests include chorionic villus sampling (CVS) or 
            amniocentesis that provide definitive diagnosis.<sup>[26][27]</sup> At birth, Down syndrome is typically identified by physical 
            characteristics and confirmed through chromosomal analysis (karyotype) blood test.<sup>[28]</sup>
          </p>
          
          <p className="mb-4">
            Following diagnosis, 
            comprehensive evaluation includes cardiac evaluation (echocardiogram) to check for heart defects, hearing 
            and vision screening, thyroid function testing, developmental assessment, and establishment of care with 
            specialists familiar with Down syndrome.<sup>[15][29]</sup> Early identification allows for early intervention services from 
            birth and connection with support resources for families.<sup>[30]</sup> Healthcare providers follow Down syndrome-specific 
            guidelines to monitor for associated health conditions throughout the lifespan.<sup>[31]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758205308106-5760d0227cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcGVkaWF0cmljJTIwd2VsbG5lc3MlMjBjaGlsZHJlbnxlbnwxfHx8fDE3Njc0MDg2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Healthcare and wellness - supporting individuals with Down syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Comprehensive, early, and ongoing support enables individuals with Down syndrome to reach their full potential.<sup>[32]</sup> 
            Early intervention services from birth to age 3 include physical therapy for motor development, occupational 
            therapy for daily living skills, speech-language therapy for communication, and family support and education.<sup>[33]</sup> 
            Educational support includes inclusive education with appropriate supports and modifications, Individualized 
            Education Programs (IEPs), visual learning strategies and assistive technology, literacy instruction (many 
            individuals learn to read), life skills and functional academics, and transition planning for adulthood.<sup>[34][35]</sup>
          </p>
          
          <p className="mb-4">
            Employment and independence support includes competitive integrated employment with supports, vocational training 
            and job coaching, independent or supported living arrangements, and community participation and recreation.<sup>[36]</sup> 
            Healthcare includes regular health screenings following Down syndrome-specific guidelines, coordination of care 
            across specialties, accessible health communication, and mental health support when needed.<sup>[37]</sup> Advocacy and rights 
            support includes self-advocacy training, protection of civil rights and dignity, presumption of competence, and 
            person-centered planning and supported decision-making.<sup>[38][39]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Down Syndrome</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1767274094403-8bb7bd097e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNsdXNpb24lMjBjb21tdW5pdHklMjBwYXJ0aWNpcGF0aW9uJTIwcGVvcGxlfGVufDF8fHx8MTc2NzQwODYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Community inclusion - living with Down syndrome"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            People with Down syndrome lead fulfilling and meaningful lives across all areas of society.<sup>[40]</sup> Many adults with 
            Down syndrome now live independently or semi-independently, pursue careers, and enjoy rich fulfilling lives.<sup>[41]</sup> 
            With inclusion, respect, and appropriate supports, they contribute to their families, communities, and society 
            in meaningful ways living lives of purpose and dignity.<sup>[42]</sup> Living well with Down syndrome involves accessing early 
            intervention and ongoing support services, inclusive education and lifelong learning opportunities, supported 
            employment and community participation, healthcare monitoring and management of associated conditions, building 
            relationships and social connections, and developing self-advocacy and self-determination skills.<sup>[43]</sup>
          </p>
          
          <p className="mb-4">
            Topics related 
            to living with Down syndrome include education and literacy development, employment and career development, 
            independent and supported living options, health and wellness management, relationships, friendships and community 
            inclusion, self-advocacy and rights, and understanding that people with Down syndrome are individuals first with 
            unique personalities, preferences, talents and dreams who thrive with appropriate support and societal inclusion.<sup>[44][45]</sup> 
            The Down syndrome community and advocacy movement continues to advance inclusion, rights, and opportunities for 
            individuals with Down syndrome.<sup>[46]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Lejeune, J., Gautier, M., & Turpin, R. (1959). "Study of somatic chromosomes from 9 mongoloid children." <em>Comptes Rendus Hebdomadaires des Seances de l'Academie des Sciences</em>, 248(11), 1721-1722.</p>
          <p>[2] Antonarakis, S. E., Lyle, R., Dermitzakis, E. T., Reymond, A., & Deutsch, S. (2004). "Chromosome 21 and Down syndrome: From genomics to pathophysiology." <em>Nature Reviews Genetics</em>, 5(10), 725-738.</p>
          <p>[3] Parker, S. E., Mai, C. T., Canfield, M. A., et al. (2010). "Updated national birth prevalence estimates for selected birth defects in the United States, 2004-2006." <em>Birth Defects Research Part A: Clinical and Molecular Teratology</em>, 88(12), 1008-1016.</p>
          <p>[4] Mai, C. T., Isenburg, J. L., Canfield, M. A., et al. (2019). "National population-based estimates for major birth defects, 2010-2014." <em>Birth Defects Research</em>, 111(18), 1420-1435.</p>
          <p>[5] Down, J. L. (1866). "Observations on an ethnic classification of idiots." <em>London Hospital Reports</em>, 3, 259-262.</p>
          <p>[6] Chapman, R. S., & Hesketh, L. J. (2000). "Behavioral phenotype of individuals with Down syndrome." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 6(2), 84-95.</p>
          <p>[7] Grieco, J., Pulsifer, M., Seligsohn, K., Skotko, B., & Schwartz, A. (2015). "Down syndrome: Cognitive and behavioral functioning across the lifespan." <em>American Journal of Medical Genetics Part C: Seminars in Medical Genetics</em>, 169(2), 135-149.</p>
          <p>[8] Buckley, S., Bird, G., Sacks, B., & Archer, T. (2006). "A comparison of mainstream and special education for teenagers with Down syndrome: Implications for parents and teachers." <em>Down Syndrome Research and Practice</em>, 9(3), 54-67.</p>
          <p>[9] Glasson, E. J., Sullivan, S. G., Hussain, R., Petterson, B. A., Montgomery, P. D., & Bittles, A. H. (2002). "The changing survival profile of people with Down's syndrome: Implications for genetic counselling." <em>Clinical Genetics</em>, 62(5), 390-393.</p>
          <p>[10] Silverman, W. (2007). "Down syndrome: Cognitive phenotype." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 13(3), 228-236.</p>
          <p>[11] Jarrold, C., & Baddeley, A. D. (1997). "Short-term memory for verbal and visuospatial information in Down's syndrome." <em>Cognitive Neuropsychiatry</em>, 2(2), 101-122.</p>
          <p>[12] Vicari, S., Bellucci, S., & Carlesimo, G. A. (2000). "Implicit and explicit memory: A functional dissociation in persons with Down syndrome." <em>Neuropsychologia</em>, 38(3), 240-251.</p>
          <p>[13] Lanfranchi, S., Jerman, O., Dal Pont, E., Alberti, A., & Vianello, R. (2010). "Executive function in adolescents with Down syndrome." <em>Journal of Intellectual Disability Research</em>, 54(4), 308-319.</p>
          <p>[14] Miller, J. F. (1999). "Profiles of language development in children with Down syndrome." In J. F. Miller, M. Leddy, & L. A. Leavitt (Eds.), <em>Improving the communication of people with Down syndrome</em> (pp. 11-39). Baltimore: Paul H. Brookes Publishing.</p>
          <p>[15] Bull, M. J., & Committee on Genetics. (2011). "Health supervision for children with Down syndrome." <em>Pediatrics</em>, 128(2), 393-406.</p>
          <p>[16] Freeman, S. B., Bean, L. H., Allen, E. G., et al. (2008). "Ethnicity, sex, and the incidence of congenital heart defects: A report from the National Down Syndrome Project." <em>Genetics in Medicine</em>, 10(3), 173-180.</p>
          <p>[17] Roizen, N. J., & Patterson, D. (2003). "Down's syndrome." <em>The Lancet</em>, 361(9365), 1281-1289.</p>
          <p>[18] Fidler, D. J., Most, D. E., & Philofsky, A. D. (2009). "The Down syndrome behavioural phenotype: Taking a developmental approach." <em>Down Syndrome Research and Practice</em>, 12(3), 37-44.</p>
          <p>[19] Hassold, T., & Hunt, P. (2001). "To err (meiotically) is human: The genesis of human aneuploidy." <em>Nature Reviews Genetics</em>, 2(4), 280-291.</p>
          <p>[20] Sherman, S. L., Allen, E. G., Bean, L. H., & Freeman, S. B. (2007). "Epidemiology of Down syndrome." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 13(3), 221-227.</p>
          <p>[21] Malt, E. A., Dahl, R. C., Haugsand, T. M., et al. (2013). "Health and disease in adults with Down syndrome." <em>Tidsskrift for Den Norske Legeforening</em>, 133(3), 290-294.</p>
          <p>[22] Allen, E. G., Freeman, S. B., Druschel, C., et al. (2009). "Maternal age and risk for trisomy 21 assessed by the origin of chromosome nondisjunction: A report from the Atlanta and National Down Syndrome Projects." <em>Human Genetics</em>, 125(1), 41-52.</p>
          <p>[23] Antonarakis, S. E. (2017). "Down syndrome and the complexity of genome dosage imbalance." <em>Nature Reviews Genetics</em>, 18(3), 147-163.</p>
          <p>[24] Lott, I. T., & Dierssen, M. (2010). "Cognitive deficits and associated neurological complications in individuals with Down's syndrome." <em>The Lancet Neurology</em>, 9(6), 623-633.</p>
          <p>[25] American College of Obstetricians and Gynecologists. (2020). "Screening for fetal chromosomal abnormalities: ACOG Practice Bulletin, Number 226." <em>Obstetrics & Gynecology</em>, 136(4), e48-e69.</p>
          <p>[26] Norton, M. E., Jacobsson, B., Swamy, G. K., et al. (2015). "Cell-free DNA analysis for noninvasive examination of trisomy." <em>New England Journal of Medicine</em>, 372(17), 1589-1597.</p>
          <p>[27] Akolekar, R., Beta, J., Picciarelli, G., Ogilvie, C., & D'Antonio, F. (2015). "Procedure-related risk of miscarriage following amniocentesis and chorionic villus sampling: A systematic review and meta-analysis." <em>Ultrasound in Obstetrics & Gynecology</em>, 45(1), 16-26.</p>
          <p>[28] Hook, E. B. (1981). "Rates of chromosome abnormalities at different maternal ages." <em>Obstetrics & Gynecology</em>, 58(3), 282-285.</p>
          <p>[29] Weijerman, M. E., van Furth, A. M., Vonk Noordegraaf, A., van Wouwe, J. P., Broers, C. J., & Gemke, R. J. (2008). "Prevalence, neonatal characteristics, and first-year mortality of Down syndrome: A national study." <em>The Journal of Pediatrics</em>, 152(1), 15-19.</p>
          <p>[30] Guralnick, M. J. (2011). "Why early intervention works: A systems perspective." <em>Infants & Young Children</em>, 24(1), 6-28.</p>
          <p>[31] Jensen, K. M., & Bulova, P. D. (2014). "Managing the care of adults with Down's syndrome." <em>BMJ</em>, 349, g5596.</p>
          <p>[32] Dunst, C. J., Bruder, M. B., Trivette, C. M., & Hamby, D. W. (2006). "Everyday activity settings, natural learning environments, and early intervention practices." <em>Journal of Policy and Practice in Intellectual Disabilities</em>, 3(1), 3-10.</p>
          <p>[33] Roberts, J. E., Price, J., & Malkin, C. (2007). "Language and communication development in Down syndrome." <em>Mental Retardation and Developmental Disabilities Research Reviews</em>, 13(1), 26-35.</p>
          <p>[34] de Graaf, G., & van Hove, G. (2015). "Learning to read in regular schools: A follow-up study on the literacy development of children with Down syndrome in inclusive education." <em>Research in Developmental Disabilities</em>, 36, 397-406.</p>
          <p>[35] Buckley, S., Bird, G., & Byrne, A. (1996). "The practical and theoretical significance of teaching literacy skills to children with Down syndrome." In J. A. Rondal et al. (Eds.), <em>Down's syndrome: Psychological, psychobiological and socio-educational perspectives</em> (pp. 119-128). London: Whurr Publishers.</p>
          <p>[36] Migliore, A., Mank, D., Grossi, T., & Rogan, P. (2007). "Integrated employment or sheltered workshops: Preferences of adults with intellectual disabilities, their families, and staff." <em>Journal of Vocational Rehabilitation</em>, 26(1), 5-19.</p>
          <p>[37] Santoro, S. L., Chicoine, B., Jasien, J. M., et al. (2021). "Screening and management in Down syndrome: A review of the evidence." <em>American Journal of Medical Genetics Part C: Seminars in Medical Genetics</em>, 187(3), 359-370.</p>
          <p>[38] Shogren, K. A., Wehmeyer, M. L., Buchanan, C. L., & Lopez, S. J. (2006). "The application of positive psychology and self-determination to research in intellectual disability: A content analysis of 30 years of literature." <em>Research and Practice for Persons with Severe Disabilities</em>, 31(4), 338-345.</p>
          <p>[39] Turnbull, H. R., & Stowe, M. J. (2001). "Five models for thinking about disability: Implications for policy responses." <em>Journal of Disability Policy Studies</em>, 12(3), 198-205.</p>
          <p>[40] Skorji, V. M., & Saleh, M. N. (2021). "Quality of life in adults with Down syndrome: A systematic review." <em>Journal of Applied Research in Intellectual Disabilities</em>, 34(4), 1041-1053.</p>
          <p>[41] Smith, D. S. (2001). "Health care management of adults with Down syndrome." <em>American Family Physician</em>, 64(6), 1031-1038.</p>
          <p>[42] Foley, K. R., Jacoby, P., Girdler, S., et al. (2013). "Functioning and post-school transition outcomes for young people with Down syndrome." <em>Child: Care, Health and Development</em>, 39(6), 789-800.</p>
          <p>[43] Feldman, M. A., Owen, F., Andrews, A., et al. (2012). "Health self-advocacy training for persons with intellectual disabilities." <em>Journal of Intellectual Disability Research</em>, 56(11), 1110-1121.</p>
          <p>[44] van Gameren-Oosterom, H. B., Fekkes, M., Buitendijk, S. E., Mohangoo, A. D., Bruil, J., & Van Wouwe, J. P. (2011). "Development, problem behavior, and quality of life in a population based sample of eight-year-old children with Down syndrome." <em>PLoS One</em>, 6(7), e21879.</p>
          <p>[45] Gilmore, L., & Cuskelly, M. (2014). "Vulnerability to loneliness in people with intellectual disability: An explanatory model." <em>Journal of Policy and Practice in Intellectual Disabilities</em>, 11(3), 192-199.</p>
          <p>[46] Skotko, B. G., Levine, S. P., & Goldstein, R. (2011). "Self-perceptions from people with Down syndrome." <em>American Journal of Medical Genetics Part A</em>, 155(10), 2360-2369.</p>
        </div>
      </section>
    </article>
  );
}