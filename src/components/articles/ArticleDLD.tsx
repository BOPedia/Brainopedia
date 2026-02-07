import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleDLDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDLD({ setCurrentArticle }: ArticleDLDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with DLD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dld-living');
      }
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
        Developmental Language Disorder (DLD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Developmental Language Disorder (DLD)</strong> is a neurodevelopmental condition 
            characterized by persistent difficulties in learning, understanding, and using spoken and/or 
            written language.<sup>[1]</sup> Despite normal hearing and intelligence, individuals with DLD experience 
            significant challenges with language that are not explained by other conditions, representing 
            a distinct language-processing neurotype.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Developmental Language Disorder"
            data={[
              { label: 'Other names', value: 'DLD, formerly Specific Language Impairment (SLI)' },
              { label: 'Specialty', value: 'Speech-Language Pathology' },
              { label: 'Symptoms', value: 'Persistent language learning difficulties' },
              { label: 'Not caused by', value: 'Hearing loss, autism, intellectual disability' },
              { label: 'Frequency', value: 'Approximately 7-10% of children' },
              { label: 'Duration', value: 'Lifelong, though presentations change' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/flagged/photo-1568777567165-aaaa23be84a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNwZWVjaCUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNjc0MDUyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Child speech and communication - developmental language disorder"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            DLD affects approximately 7-10% of children, making it one of the most common developmental 
            conditions—yet it remains significantly under-recognized.<sup>[3][4]</sup> The condition reflects differences 
            in how the brain processes and organizes language, affecting the acquisition and use of 
            grammar, vocabulary, narrative skills, and conversational abilities.<sup>[5]</sup>
          </p>
          
          <p className="mb-4">
            Unlike language delays 
            that resolve with time, DLD is persistent and continues into adolescence and adulthood, though 
            manifestations may change over time.<sup>[6]</sup> It's not caused by lack of exposure to language, hearing 
            loss, intellectual disability, autism, or neurological injury—it represents a primary difference 
            in language processing.<sup>[7]</sup> The term "Developmental Language Disorder" replaced older terms like 
            "Specific Language Impairment" (SLI) to better reflect current understanding and reduce stigma.<sup>[8]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758691462666-6470b740f544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGNvbnZlcnNhdGlvbiUyMHRhbGtpbmd8ZW58MXx8fHwxNjc0MDUyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Child conversation and talking - language characteristics in DLD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            DLD affects multiple aspects of language with varying patterns among individuals.<sup>[9]</sup> Expressive 
            language difficulties include limited vocabulary, grammatical errors (verb tense mistakes, word 
            order issues), short simple sentences, word-finding difficulties, trouble organizing thoughts 
            into coherent narratives, and challenges with abstract or figurative language.<sup>[10]</sup>
          </p>
          
          <p className="mb-4">
            Receptive language 
            difficulties include difficulty following complex instructions, trouble understanding long or 
            grammatically complex sentences, challenges understanding abstract concepts, missing key information 
            in conversations, and slower processing of verbal information.<sup>[11]</sup> Pragmatic language challenges may 
            include trouble taking turns in conversation, difficulty staying on topic, challenges with 
            understanding context, and difficulty making inferences.<sup>[12]</sup> Some individuals also experience challenges 
            with speech sounds and phonological awareness.<sup>[13]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMHByb2Nlc3NpbmclMjBicmFpbnxlbnwxfHx8fDE2NzQwNTI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Language processing in the brain - neurological basis of DLD"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            DLD reflects differences in how the brain processes and organizes language.<sup>[14]</sup> Research suggests 
            neurological differences in brain regions involved in language processing, though the exact 
            mechanisms are still being studied.<sup>[15]</sup> The condition has a genetic component, often running in families, 
            with multiple genes likely contributing to language processing differences.<sup>[16][17]</sup>
          </p>
          
          <p className="mb-4">
            DLD is not caused by 
            environmental factors such as lack of language exposure, hearing loss, intellectual disability, autism, 
            or neurological injury—it represents a primary, neurologically-based difference in language learning 
            and processing abilities that is present from early development.<sup>[18]</sup> Brain imaging studies have revealed 
            differences in brain structure and connectivity in regions associated with language, including areas 
            involved in phonological processing, grammar, and semantic processing.<sup>[19]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1647330707440-ece3330eb8c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlY2glMjBsYW5ndWFnZSUyMGFzc2Vzc21lbnR8ZW58MXx8fHwxNjc0MDUyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Speech language assessment - diagnosing DLD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            DLD is diagnosed through comprehensive assessment by speech-language pathologists or related 
            professionals.<sup>[20]</sup> The evaluation includes standardized language testing (expressive and receptive 
            language, vocabulary, grammar, narrative abilities), developmental and educational history, hearing 
            screening to rule out hearing loss, cognitive assessment to distinguish from intellectual disability, 
            observation of functional communication in natural settings, and screening for other conditions that 
            might explain language difficulties.<sup>[21]</sup>
          </p>
          
          <p className="mb-4">
            DLD is diagnosed when language difficulties are persistent, 
            significantly impact daily functioning or academic performance, and are not better explained by other 
            conditions such as hearing loss, autism, intellectual disability, or neurological injury.<sup>[22]</sup> Early 
            identification is crucial, as intervention is most effective when started early.<sup>[23]</sup> Assessment should 
            consider the child's linguistic and cultural background to ensure appropriate diagnosis.<sup>[24]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1673515334717-da4d85aaf38b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMHRoZXJhcHklMjBpbnRlcnZlbnRpb258ZW58MXx8fHwxNjc0MDUyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Language therapy intervention - support for DLD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Effective support for DLD involves speech-language therapy targeting grammar, vocabulary, narrative 
            skills, and pragmatic language, which is most effective when intensive and focused on functional 
            communication goals.<sup>[25][26]</sup> Educational accommodations include simplified or repeated instructions, visual 
            supports to accompany verbal information, extended time for language-based tasks, reduced language 
            load, pre-teaching of vocabulary and concepts, graphic organizers for writing, and audio recording 
            of lectures or use of assistive technology.<sup>[27]</sup>
          </p>
          
          <p className="mb-4">
            Communication strategies that help include speaking slowly 
            and clearly, breaking information into smaller chunks, checking for understanding, allowing extra 
            processing time, using concrete language and providing examples, and encouraging the individual to 
            ask for clarification.<sup>[28]</sup> Many individuals with DLD have strong visual-spatial or creative abilities and 
            benefit from hands-on and experiential learning opportunities.<sup>[29]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with DLD</h2>
          
          <img 
            src="https://images.unsplash.com/flagged/photo-1568777567165-aaaa23be84a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNwZWVjaCUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNjc0MDUyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with DLD - successful communication and relationships"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with DLD lead successful and fulfilling lives across all areas of society. With appropriate 
            support and self-understanding, many adults with DLD develop successful careers and relationships, often 
            in fields that leverage their non-verbal strengths such as visual-spatial or creative abilities.<sup>[30]</sup> Living 
            well with DLD involves understanding one's communication profile, developing personalized strategies and 
            compensatory techniques, accessing appropriate accommodations in education and employment, and building 
            confidence through areas of strength.<sup>[31]</sup>
          </p>
          
          <p className="mb-4">
            Understanding DLD as a neurological difference rather than a personal 
            failing is crucial for self-esteem and wellbeing.<sup>[32]</sup> Topics related to living with DLD include self-advocacy 
            skills, recognizing and leveraging strengths beyond language, navigating academic and professional 
            environments, managing social relationships and communication challenges, and understanding legal protections 
            for educational and workplace accommodations.<sup>[33]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE Consortium. (2016). "CATALISE: A multinational and multidisciplinary Delphi consensus study. Identifying language impairments in children." <em>PLOS ONE</em>, 11(7), e0158753.</p>
          <p>[2] Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE-2 Consortium. (2017). "Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development: Terminology." <em>Journal of Child Psychology and Psychiatry</em>, 58(10), 1068-1080.</p>
          <p>[3] Tomblin, J. B., Records, N. L., Buckwalter, P., Zhang, X., Smith, E., & O'Brien, M. (1997). "Prevalence of specific language impairment in kindergarten children." <em>Journal of Speech, Language, and Hearing Research</em>, 40(6), 1245-1260.</p>
          <p>[4] Norbury, C. F., Gooch, D., Wray, C., et al. (2016). "The impact of nonverbal ability on prevalence and clinical presentation of language disorder: Evidence from a population study." <em>Journal of Child Psychology and Psychiatry</em>, 57(11), 1247-1257.</p>
          <p>[5] Leonard, L. B. (2014). <em>Children with specific language impairment</em> (2nd ed.). Cambridge, MA: MIT Press.</p>
          <p>[6] Conti-Ramsden, G., Durkin, K., Simkin, Z., & Knox, E. (2009). "Specific language impairment and school outcomes. I: Identifying and explaining variability at the end of compulsory education." <em>International Journal of Language & Communication Disorders</em>, 44(1), 15-35.</p>
          <p>[7] Bishop, D. V. M. (2006). "What causes specific language impairment in children?" <em>Current Directions in Psychological Science</em>, 15(5), 217-221.</p>
          <p>[8] Reilly, S., Tomblin, B., Law, J., et al. (2014). "Specific language impairment: A convenient label for whom?" <em>International Journal of Language & Communication Disorders</em>, 49(4), 416-451.</p>
          <p>[9] Rice, M. L., & Wexler, K. (1996). "Toward tense as a clinical marker of specific language impairment in English-speaking children." <em>Journal of Speech and Hearing Research</em>, 39(6), 1239-1257.</p>
          <p>[10] Paul, R., & Norbury, C. F. (2012). <em>Language disorders from infancy through adolescence: Listening, speaking, reading, writing, and communicating</em> (4th ed.). St. Louis, MO: Elsevier.</p>
          <p>[11] Nation, K., Clarke, P., Marshall, C. M., & Durand, M. (2004). "Hidden language impairments in children: Parallels between poor reading comprehension and specific language impairment?" <em>Journal of Speech, Language, and Hearing Research</em>, 47(1), 199-211.</p>
          <p>[12] Adams, C. (2002). "Practitioner review: The assessment of language pragmatics." <em>Journal of Child Psychology and Psychiatry</em>, 43(8), 973-987.</p>
          <p>[13] Bishop, D. V. M., & Hayiou-Thomas, M. E. (2008). "Heritability of specific language impairment depends on diagnostic criteria." <em>Genes, Brain and Behavior</em>, 7(3), 365-372.</p>
          <p>[14] Ullman, M. T., & Pierpont, E. I. (2005). "Specific language impairment is not specific to language: The procedural deficit hypothesis." <em>Cortex</em>, 41(3), 399-433.</p>
          <p>[15] Krishnan, S., Watkins, K. E., & Bishop, D. V. M. (2016). "Neurobiological basis of language learning difficulties." <em>Trends in Cognitive Sciences</em>, 20(9), 701-714.</p>
          <p>[16] SLI Consortium. (2002). "A genomewide scan identifies two novel loci involved in specific language impairment." <em>American Journal of Human Genetics</em>, 70(2), 384-398.</p>
          <p>[17] Bishop, D. V. M. (2009). "Genes, cognition, and communication: Insights from neurodevelopmental disorders." <em>Annals of the New York Academy of Sciences</em>, 1156(1), 1-18.</p>
          <p>[18] Tomblin, J. B., & Pandich, J. (1999). "Lessons from children with specific language impairment." <em>Trends in Cognitive Sciences</em>, 3(8), 283-285.</p>
          <p>[19] Badcock, N. A., Bishop, D. V. M., Hardiman, M. J., Barry, J. G., & Watkins, K. E. (2012). "Co-localisation of abnormal brain structure and function in specific language impairment." <em>Brain and Language</em>, 120(3), 310-320.</p>
          <p>[20] American Speech-Language-Hearing Association. (2020). "Spoken language disorders." <em>ASHA Practice Portal</em>.</p>
          <p>[21] Ebbels, S. H., McCartney, E., Slonims, V., Dockrell, J. E., & Norbury, C. F. (2019). "Evidence-based pathways to intervention for children with language disorders." <em>International Journal of Language & Communication Disorders</em>, 54(1), 3-19.</p>
          <p>[22] Dockrell, J. E., & Marshall, C. R. (2015). "Measurement issues: Assessing language skills in young children." <em>Child and Adolescent Mental Health</em>, 20(2), 116-125.</p>
          <p>[23] Law, J., Garrett, Z., & Nye, C. (2004). "The efficacy of treatment for children with developmental speech and language delay/disorder: A meta-analysis." <em>Journal of Speech, Language, and Hearing Research</em>, 47(4), 924-943.</p>
          <p>[24] Paradis, J., Genesee, F., & Crago, M. B. (2011). <em>Dual language development and disorders: A handbook on bilingualism and second language learning</em> (2nd ed.). Baltimore, MD: Paul H. Brookes Publishing.</p>
          <p>[25] Boyle, J., McCartney, E., Forbes, J., & O'Hare, A. (2007). "A randomized controlled trial and economic evaluation of direct versus indirect and individual versus group modes of speech and language therapy for children with primary language impairment." <em>Health Technology Assessment</em>, 11(25), 1-139.</p>
          <p>[26] Ebbels, S. H. (2014). "Effectiveness of intervention for grammar in school-aged children with primary language impairments: A review of the evidence." <em>Child Language Teaching and Therapy</em>, 30(1), 7-40.</p>
          <p>[27] Dockrell, J. E., Lindsay, G., Roulstone, S., & Law, J. (2014). "Supporting children with speech, language and communication needs: An overview of the results of the Better Communication Research Programme." <em>International Journal of Language & Communication Disorders</em>, 49(5), 543-557.</p>
          <p>[28] Davies, P., Shanks, B., & Davies, K. (2004). "Improving narrative skills in young children with delayed language development." <em>Educational Review</em>, 56(3), 271-286.</p>
          <p>[29] Gillam, R. B., Loeb, D. F., Hoffman, L. M., et al. (2012). "The efficacy of Fast ForWord Language intervention in school-age children with language impairment: A randomized controlled trial." <em>Journal of Speech, Language, and Hearing Research</em>, 55(3), 669-693.</p>
          <p>[30] Clegg, J., Hollis, C., Mawhood, L., & Rutter, M. (2005). "Developmental language disorders—a follow-up in later adult life. Cognitive, language and psychosocial outcomes." <em>Journal of Child Psychology and Psychiatry</em>, 46(2), 128-149.</p>
          <p>[31] Conti-Ramsden, G., & Durkin, K. (2012). "Postschool educational and employment experiences of young people with specific language impairment." <em>Language, Speech, and Hearing Services in Schools</em>, 43(4), 507-520.</p>
          <p>[32] McCormack, J., Harrison, L. J., McLeod, S., & McAllister, L. (2011). "A nationally representative study of the association between communication impairment at 4–5 years and children's life activities at 7–9 years." <em>Journal of Speech, Language, and Hearing Research</em>, 54(5), 1328-1348.</p>
          <p>[33] Durkin, K., Simkin, Z., Knox, E., & Conti-Ramsden, G. (2009). "Specific language impairment and school outcomes. II: Educational context, student satisfaction, and post-compulsory progress." <em>International Journal of Language & Communication Disorders</em>, 44(1), 36-55.</p>
        </div>
      </section>
    </article>
  );
}