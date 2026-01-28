import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DLDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function DLDOverview({ setCurrentArticle }: DLDOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <div className="mb-6">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        DLD: Overview
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Developmental Language Disorder (DLD) is a neurodevelopmental condition affecting the acquisition and 
            use of language across spoken, written, and sign modalities.<sup>[1]</sup> Children with DLD have significant 
            difficulties learning and using language that cannot be explained by other conditions such as autism, 
            intellectual disability, or hearing loss.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is DLD?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNwZWFraW5nfGVufDF8fHx8MTY3NDUzNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Child speaking"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Definition and Core Concept</h3>
          <p className="mb-4">
            DLD is characterized by difficulties with language that persist despite adequate opportunity for learning 
            and in the absence of other developmental conditions that could explain the language difficulties.<sup>[3]</sup> 
            The condition affects understanding (receptive language), expression (expressive language), or both.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The CATALISE Consensus</h3>
          <p className="mb-4">
            In 2017, the CATALISE consortium reached international consensus on terminology and criteria for DLD:<sup>[4]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Terminology:</strong> "Developmental Language Disorder" replaces "Specific Language Impairment (SLI)"</li>
            <li className="mb-2"><strong>Criteria:</strong> Language difficulties that impact everyday life and are not associated with a known biomedical condition<sup>[5]</sup></li>
            <li className="mb-2"><strong>Identification:</strong> Standardized language assessments typically used</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Not Just "Late Talking"</h3>
          <p className="mb-4">
            DLD is a persistent condition, not a developmental delay that children simply outgrow.<sup>[6]</sup> While 
            some late talkers catch up, children with DLD continue to struggle with language throughout childhood 
            and often into adulthood.
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Types and Profiles</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Language Domains Affected</h3>
          <p className="mb-4">
            DLD can affect various aspects of language:<sup>[7]</sup>
          </p>

          <h4 className="font-bold mb-2">1. Expressive Language DLD</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Primary difficulties with language production</li>
            <li className="mb-2">Understanding may be relatively stronger<sup>[8]</sup></li>
            <li className="mb-2">Challenges forming sentences, using grammar, finding words</li>
          </ul>

          <h4 className="font-bold mb-2">2. Receptive Language DLD</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Primary difficulties understanding language</li>
            <li className="mb-2">May also have expressive difficulties<sup>[9]</sup></li>
            <li className="mb-2">More severe functional impact</li>
          </ul>

          <h4 className="font-bold mb-2">3. Mixed Receptive-Expressive DLD</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulties with both understanding and expression</li>
            <li className="mb-2">Most common presentation<sup>[10]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Common is DLD?</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Prevalence:</strong> Affects approximately 7-10% of children<sup>[11]</sup></li>
            <li className="mb-2"><strong>Comparison:</strong> More common than autism (approximately 1-2%)</li>
            <li className="mb-2"><strong>Awareness:</strong> Despite prevalence, DLD remains under-recognized<sup>[12]</sup></li>
            <li className="mb-2"><strong>Every classroom:</strong> Statistically, 1-2 children in every classroom have DLD</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gender Distribution</h3>
          <p className="mb-4">
            DLD is more common in boys than girls, with ratios ranging from 2:1 to 3:1 depending on the study.<sup>[13]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Historical Context</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGhpc3Rvcnl8ZW58MXx8fHwxNjc0NTM1MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Books history"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Evolution of Terminology</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Historical terms:</strong> "Specific Language Impairment (SLI)," "Language Delay," "Language Disorder"<sup>[14]</sup></li>
            <li className="mb-2"><strong>2017 consensus:</strong> International agreement on "Developmental Language Disorder"</li>
            <li className="mb-2"><strong>Rationale:</strong> More inclusive, less stigmatizing, clearer terminology<sup>[15]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Why the Change?</h3>
          <p className="mb-4">
            The term "Specific Language Impairment" was problematic because:<sup>[16]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">"Specific" implied language was the only area affected (often not true)</li>
            <li className="mb-2">"Impairment" was stigmatizing</li>
            <li className="mb-2">Strict exclusionary criteria excluded many children who needed support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impact on Daily Life</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communication Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty expressing thoughts and needs<sup>[17]</sup></li>
            <li className="mb-2">Trouble understanding instructions and conversations</li>
            <li className="mb-2">Frustration when not understood</li>
            <li className="mb-2">Missing important information in daily interactions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Impact</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reading comprehension difficulties<sup>[18]</sup></li>
            <li className="mb-2">Writing challenges</li>
            <li className="mb-2">Trouble following multi-step directions</li>
            <li className="mb-2">Difficulty learning new vocabulary and concepts<sup>[19]</sup></li>
            <li className="mb-2">Lower academic achievement across subjects</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social and Emotional Impact</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty making and maintaining friendships<sup>[20]</sup></li>
            <li className="mb-2">Social isolation and loneliness</li>
            <li className="mb-2">Lower self-esteem</li>
            <li className="mb-2">Increased risk of bullying<sup>[21]</sup></li>
            <li className="mb-2">Higher rates of anxiety and depression</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
          
          <p className="mb-4">
            DLD frequently occurs alongside other conditions:<sup>[22]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Dyslexia:</strong> Reading difficulties common</li>
            <li className="mb-2"><strong>ADHD:</strong> Attention difficulties often co-occur<sup>[23]</sup></li>
            <li className="mb-2"><strong>Speech sound disorders:</strong> Pronunciation difficulties</li>
            <li className="mb-2"><strong>Motor coordination difficulties:</strong> Some overlap with DCD</li>
            <li className="mb-2"><strong>Social communication difficulties:</strong> Can overlap with autism traits<sup>[24]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prognosis and Long-term Outcomes</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Persistence of DLD</h3>
          <p className="mb-4">
            DLD is a lifelong condition for most individuals:<sup>[25]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Language difficulties typically persist into adulthood</li>
            <li className="mb-2">May become less obvious but continue to impact functioning<sup>[26]</sup></li>
            <li className="mb-2">Early intervention improves outcomes but doesn't "cure"</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">With Appropriate Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Language skills can significantly improve<sup>[27]</sup></li>
            <li className="mb-2">Academic success is possible with accommodations</li>
            <li className="mb-2">Many adults with DLD lead successful lives</li>
            <li className="mb-2">Career choices may need to consider language demands<sup>[28]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Why Awareness Matters</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">The Hidden Condition:</h3>
            <p className="mb-4">
              Despite affecting 1 in 15 children, DLD remains under-recognized:<sup>[29]</sup>
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Many children remain undiagnosed or misdiagnosed</li>
              <li>Less public awareness compared to other conditions like autism or dyslexia<sup>[30]</sup></li>
              <li>Teachers and parents may not recognize symptoms</li>
              <li>Early identification and intervention are crucial for better outcomes</li>
              <li>Increasing awareness helps children get support they need</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">DLD Around the World</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Universal Condition</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">DLD occurs across all languages and cultures<sup>[31]</sup></li>
            <li className="mb-2">Manifestations may differ depending on language structure</li>
            <li className="mb-2">Prevalence rates similar across countries</li>
            <li className="mb-2">International research collaboration advances understanding</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE consortium. (2017). "Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development: Terminology." <em>Journal of Child Psychology and Psychiatry</em>, 58(10), 1068-1080.</p>
          <p>[2] Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., & CATALISE-2 consortium. (2016). "CATALISE: A multinational and multidisciplinary Delphi consensus study. Identifying language impairments in children." <em>PLoS ONE</em>, 11(7), e0158753.</p>
          <p>[3] Leonard, L. B. (2014). <em>Children with specific language impairment</em> (2nd ed.). Cambridge, MA: MIT Press.</p>
          <p>[4] Rice, M. L. (2013). "Language growth and genetics of specific language impairment." <em>International Journal of Speech-Language Pathology</em>, 15(3), 223-233.</p>
          <p>[5] Tomblin, J. B., & Zhang, X. (2006). "The dimensionality of language ability in school-age children." <em>Journal of Speech, Language, and Hearing Research</em>, 49(6), 1193-1208.</p>
          <p>[6] Bishop, D. V. M. (1997). <em>Uncommon understanding: Development and disorders of language comprehension in children</em>. Hove, UK: Psychology Press.</p>
          <p>[7] Tomblin, J. B., Records, N. L., Buckwalter, P., Zhang, X., Smith, E., & O'Brien, M. (1997). "Prevalence of specific language impairment in kindergarten children." <em>Journal of Speech, Language, and Hearing Research</em>, 40(6), 1245-1260.</p>
          <p>[8] McGregor, K. K., Goffman, L., Van Horne, A. O., Hogan, T. P., & Finestack, L. H. (2020). "Developmental language disorder: Applications for advocacy, research, and clinical service." <em>Perspectives of the ASHA Special Interest Groups</em>, 5(1), 38-46.</p>
          <p>[9] Bishop, D. V. M. (2014). "Ten questions about terminology for children with unexplained language problems." <em>International Journal of Language & Communication Disorders</em>, 49(4), 381-415.</p>
          <p>[10] Conti-Ramsden, G., & Botting, N. (2004). "Social difficulties and victimization in children with SLI at 11 years of age." <em>Journal of Speech, Language, and Hearing Research</em>, 47(1), 145-161.</p>
          <p>[11] Catts, H. W., Fey, M. E., Tomblin, J. B., & Zhang, X. (2002). "A longitudinal investigation of reading outcomes in children with language impairments." <em>Journal of Speech, Language, and Hearing Research</em>, 45(6), 1142-1157.</p>
          <p>[12] Mueller, K. L., & Tomblin, J. B. (2012). "Examining the comorbidity of language disorders and ADHD." <em>Topics in Language Disorders</em>, 32(3), 228-246.</p>
          <p>[13] Bishop, D. V. M. (2010). "Which neurodevelopmental disorders get researched and why?" <em>PLoS ONE</em>, 5(11), e15112.</p>
          <p>[14] Clegg, J., Hollis, C., Mawhood, L., & Rutter, M. (2005). "Developmental language disorders—a follow-up in later adult life." <em>Journal of Child Psychology and Psychiatry</em>, 46(2), 128-149.</p>
          <p>[15] Law, J., Garrett, Z., & Nye, C. (2004). "The efficacy of treatment for children with developmental speech and language delay/disorder: A meta-analysis." <em>Journal of Speech, Language, and Hearing Research</em>, 47(4), 924-943.</p>
          <p>[16] Conti-Ramsden, G., Durkin, K., Simkin, Z., & Knox, E. (2009). "Specific language impairment and school outcomes. I: Identifying and explaining variability at the end of compulsory education." <em>International Journal of Language & Communication Disorders</em>, 44(1), 15-35.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to DLD
        </a>
      </div>
    </article>
  );
}