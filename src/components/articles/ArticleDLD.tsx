import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import { ImageWithFallback } from '../figma/ImageWithFallback';

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
            font-weight: 600;
          }
        `}
      </style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl font-spartan text-[#0c264d]">
        Developmental Language Disorder (DLD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-[#0c264d]">Developmental Language Disorder (DLD)</strong> is a neurodevelopmental condition 
            characterized by persistent difficulties in learning, understanding, and using spoken and/or 
            written language. Despite normal hearing and intelligence, individuals with DLD experience 
            significant challenges with language that are not explained by other conditions, representing 
            a distinct language-processing neurotype.
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

       {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Developmental Language Disorder"
            image="/images/dld/dld-main-infobox.webp"
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

      <div className="space-y-8 mt-12 clear-both">
        
        {/* SECTION: OVERVIEW */}
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-overview-intro.webp"
            alt="Overview of DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            DLD affects approximately 7-10% of children, making it one of the most common yet profoundly under-recognized developmental conditions.<sup>1, 2</sup> It reflects neurological differences in how the brain processes language, affecting grammar, vocabulary, and conversation. Unlike temporary language delays, DLD is persistent and lifelong. It is not caused by hearing loss, autism, or intellectual disability—it is a distinct primary language-processing neurotype.
          </p>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-overview');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CHARACTERISTICS */}
        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-symptoms-intro.webp"
            alt="Symptoms of DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            DLD impacts expressive and receptive language in varying patterns. Individuals may struggle with limited vocabulary, grammatical errors, short sentences, and finding the right words. Receptively, they often find following complex instructions or understanding abstract concepts challenging. Pragmatic difficulties, like taking turns in conversation or making inferences, are also common alongside speech sound challenges.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-symptoms');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: CAUSES */}
        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-causes-intro.webp"
            alt="Causes of DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            DLD reflects differences in how the brain processes and organizes language. Research suggests neurological differences in brain regions involved in language processing.<sup>3</sup> It has a strong genetic component and often runs in families. Brain imaging studies have revealed differences in brain structure and connectivity in regions specifically associated with phonological processing, grammar, and semantics.<sup>4</sup>
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-causes');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: DIAGNOSIS */}
        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-diagnosis-intro.webp"
            alt="Diagnosing DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Diagnosis requires a comprehensive assessment by a speech-language pathologist. Evaluations include standardized testing for expressive and receptive language, cognitive assessments, and hearing screenings to rule out other conditions. DLD is diagnosed when persistent language difficulties significantly impact daily functioning and aren't explained by other developmental disabilities.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-diagnosis');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: SUPPORT */}
        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-support-intro.webp"
            alt="Support for DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            Effective support involves targeted speech-language therapy focused on functional communication, grammar, and vocabulary. Educational accommodations like simplified instructions, visual supports, extended time, and pre-teaching concepts are vital. Strategies such as speaking clearly, chunking information, and allowing extra processing time help significantly, alongside leaning into visual-spatial or hands-on learning strengths.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-support');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>

        {/* SECTION: LIVING */}
        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm flow-root">
          <ImageWithFallback 
            src="/images/dld/dld-living-intro.webp"
            alt="Living with DLD"
            className="w-56 h-auto block mx-auto float-none md:float-right md:ml-6 mb-6 md:mb-4 rounded-lg shadow-sm"
          />
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with DLD</h2>
          
          <p className="mb-4 text-slate-700 leading-relaxed">
            With appropriate support, individuals with DLD lead highly successful lives. Many thrive in careers that leverage their non-verbal strengths, such as visual-spatial or creative fields. Thriving involves understanding one's communication profile, developing compensatory strategies, and securing workplace accommodations. Recognizing DLD as a neurological difference rather than a personal failing is crucial for self-esteem.
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentArticle?.('dld-living');
            }}
            className="mt-2 px-4 py-2 bg-[#ffd166] text-[#0c264d] rounded hover:bg-[#0c264d] hover:text-white transition-colors font-bold"
          >
            Read more →
          </button>
        </section>
      </div>

      {/* REFERENCES SECTION */}
      <hr className="border-t-2 border-[#0c264d] border-opacity-10 my-10 clear-both" />
      
      <div className="bg-white bg-opacity-50 p-6 md:p-8 rounded-xl shadow-inner">
        <h3 className="font-bold font-spartan mb-6 text-xl text-[#0c264d]">References</h3>
        
        {/* CITED STUDIES */}
        <div className="mb-8">
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#10b981] mb-4 border-b-2 border-[#10b981] pb-2">
            Cited Studies & Statistics
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>1. Tomblin, J. B., Records, N. L., Buckwalter, P., Zhang, X., Smith, E., & O'Brien, M. (1997). "Prevalence of specific language impairment in kindergarten children." <i>Journal of Speech, Language, and Hearing Research</i>, 40(6), 1245-1260.</p>
            <p>2. Norbury, C. F., Gooch, D., Wray, C., et al. (2016). "The impact of nonverbal ability on prevalence and clinical presentation of language disorder: Evidence from a population study." <i>Journal of Child Psychology and Psychiatry</i>, 57(11), 1247-1257.</p>
            <p>3. Leonard, L. B. (2014). <i>Children with specific language impairment</i> (2nd ed.). Cambridge, MA: MIT Press.</p>
            <p>4. Badcock, N. A., Bishop, D. V. M., Hardiman, M. J., Barry, J. G., & Watkins, K. E. (2012). "Co-localisation of abnormal brain structure and function in specific language impairment." <i>Brain and Language</i>, 120(3), 310-320.</p>
          </div>
        </div>

        {/* BACKGROUND SOURCES */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#2abcd4] mb-4 border-b-2 border-[#2abcd4] pb-2">
            Background Sources
          </h4>
          <div className="text-xs space-y-4 text-slate-700 leading-relaxed" style={{ textIndent: 0 }}>
            <p>Adams, C. (2002). "Practitioner review: The assessment of language pragmatics." <i>Journal of Child Psychology and Psychiatry</i>, 43(8), 973-987.</p>
            <p>American Speech-Language-Hearing Association. (2020). "Spoken language disorders." <i>ASHA Practice Portal</i>.</p>
            <p>Bishop, D. V. M. (2006). "What causes specific language impairment in children?" <i>Current Directions in Psychological Science</i>, 15(5), 217-221.</p>
            <p>Bishop, D. V. M. (2009). "Genes, cognition, and communication: Insights from neurodevelopmental disorders." <i>Annals of the New York Academy of Sciences</i>, 1156(1), 1-18.</p>
            <p>Bishop, D. V. M., & Hayiou-Thomas, M. E. (2008). "Heritability of specific language impairment depends on diagnostic criteria." <i>Genes, Brain and Behavior</i>, 7(3), 365-372.</p>
            <p>Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE Consortium. (2016). "CATALISE: A multinational and multidisciplinary Delphi consensus study. Identifying language impairments in children." <i>PLOS ONE</i>, 11(7), e0158753.</p>
            <p>Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE-2 Consortium. (2017). "Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development: Terminology." <i>Journal of Child Psychology and Psychiatry</i>, 58(10), 1068-1080.</p>
            <p>Boyle, J., McCartney, E., Forbes, J., & O'Hare, A. (2007). "A randomized controlled trial and economic evaluation of direct versus indirect and individual versus group modes of speech and language therapy for children with primary language impairment." <i>Health Technology Assessment</i>, 11(25), 1-139.</p>
            <p>Clegg, J., Hollis, C., Mawhood, L., & Rutter, M. (2005). "Developmental language disorders—a follow-up in later adult life. Cognitive, language and psychosocial outcomes." <i>Journal of Child Psychology and Psychiatry</i>, 46(2), 128-149.</p>
            <p>Conti-Ramsden, G., & Durkin, K. (2012). "Postschool educational and employment experiences of young people with specific language impairment." <i>Language, Speech, and Hearing Services in Schools</i>, 43(4), 507-520.</p>
            <p>Conti-Ramsden, G., Durkin, K., Simkin, Z., & Knox, E. (2009). "Specific language impairment and school outcomes. I: Identifying and explaining variability at the end of compulsory education." <i>International Journal of Language & Communication Disorders</i>, 44(1), 15-35.</p>
            <p>Davies, P., Shanks, B., & Davies, K. (2004). "Improving narrative skills in young children with delayed language development." <i>Educational Review</i>, 56(3), 271-286.</p>
            <p>Dockrell, J. E., Lindsay, G., Roulstone, S., & Law, J. (2014). "Supporting children with speech, language and communication needs: An overview of the results of the Better Communication Research Programme." <i>International Journal of Language & Communication Disorders</i>, 49(5), 543-557.</p>
            <p>Dockrell, J. E., & Marshall, C. R. (2015). "Measurement issues: Assessing language skills in young children." <i>Child and Adolescent Mental Health</i>, 20(2), 116-125.</p>
            <p>Durkin, K., Simkin, Z., Knox, E., & Conti-Ramsden, G. (2009). "Specific language impairment and school outcomes. II: Educational context, student satisfaction, and post-compulsory progress." <i>International Journal of Language & Communication Disorders</i>, 44(1), 36-55.</p>
            <p>Ebbels, S. H. (2014). "Effectiveness of intervention for grammar in school-aged children with primary language impairments: A review of the evidence." <i>Child Language Teaching and Therapy</i>, 30(1), 7-40.</p>
            <p>Ebbels, S. H., McCartney, E., Slonims, V., Dockrell, J. E., & Norbury, C. F. (2019). "Evidence-based pathways to intervention for children with language disorders." <i>International Journal of Language & Communication Disorders</i>, 54(1), 3-19.</p>
            <p>Gillam, R. B., Loeb, D. F., Hoffman, L. M., et al. (2012). "The efficacy of Fast ForWord Language intervention in school-age children with language impairment: A randomized controlled trial." <i>Journal of Speech, Language, and Hearing Research</i>, 55(3), 669-693.</p>
            <p>Krishnan, S., Watkins, K. E., & Bishop, D. V. M. (2016). "Neurobiological basis of language learning difficulties." <i>Trends in Cognitive Sciences</i>, 20(9), 701-714.</p>
            <p>Law, J., Garrett, Z., & Nye, C. (2004). "The efficacy of treatment for children with developmental speech and language delay/disorder: A meta-analysis." <i>Journal of Speech, Language, and Hearing Research</i>, 47(4), 924-943.</p>
            <p>McCormack, J., Harrison, L. J., McLeod, S., & McAllister, L. (2011). "A nationally representative study of the association between communication impairment at 4–5 years and children's life activities at 7–9 years." <i>Journal of Speech, Language, and Hearing Research</i>, 54(5), 1328-1348.</p>
            <p>Nation, K., Clarke, P., Marshall, C. M., & Durand, M. (2004). "Hidden language impairments in children: Parallels between poor reading comprehension and specific language impairment?" <i>Journal of Speech, Language, and Hearing Research</i>, 47(1), 199-211.</p>
            <p>Paradis, J., Genesee, F., & Crago, M. B. (2011). <i>Dual language development and disorders: A handbook on bilingualism and second language learning</i> (2nd ed.). Baltimore, MD: Paul H. Brookes Publishing.</p>
            <p>Paul, R., & Norbury, C. F. (2012). <i>Language disorders from infancy through adolescence: Listening, speaking, reading, writing, and communicating</i> (4th ed.). St. Louis, MO: Elsevier.</p>
            <p>Reilly, S., Tomblin, B., Law, J., et al. (2014). "Specific language impairment: A convenient label for whom?" <i>International Journal of Language & Communication Disorders</i>, 49(4), 416-451.</p>
            <p>Rice, M. L., & Wexler, K. (1996). "Toward tense as a clinical marker of specific language impairment in English-speaking children." <i>Journal of Speech and Hearing Research</i>, 39(6), 1239-1257.</p>
            <p>SLI Consortium. (2002). "A genomewide scan identifies two novel loci involved in specific language impairment." <i>American Journal of Human Genetics</i>, 70(2), 384-398.</p>
            <p>Tomblin, J. B., & Pandich, J. (1999). "Lessons from children with specific language impairment." <i>Trends in Cognitive Sciences</i>, 3(8), 283-285.</p>
            <p>Ullman, M. T., & Pierpont, E. I. (2005). "Specific language impairment is not specific to language: The procedural deficit hypothesis." <i>Cortex</i>, 41(3), 399-433.</p>
          </div>
        </div>
      </div>
    </article>
  );
}