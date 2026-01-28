import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import dysgraphiaImage from '/images/4c6408e083e5f03e1b7a9f221cfce0c6c8d5cf97.png';

interface ArticleDysgraphiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDysgraphia({ setCurrentArticle }: ArticleDysgraphiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Dysgraphia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dysgraphia-living');
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
        Dysgraphia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Dysgraphia</strong> is a specific learning difference that affects written expression and 
            the physical act of writing.<sup>[1]</sup> It impacts a person's ability to produce legible, organized written 
            work and can involve difficulties with handwriting, spelling, and putting thoughts into written form 
            despite adequate language and cognitive abilities.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Dysgraphia"
            image={dysgraphiaImage}
            data={[
              { label: 'Other names', value: 'Writing Learning Disorder, Disorder of Written Expression' },
              { label: 'Specialty', value: 'Educational psychology, Occupational therapy' },
              { label: 'Symptoms', value: 'Handwriting difficulties, spelling issues, written expression challenges' },
              { label: 'Usual onset', value: 'Early childhood (often noticed in school)' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '5-20% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1687145183501-0c8e76bc2175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kd3JpdGluZyUyMHBlbiUyMHdyaXRpbmd8ZW58MXx8fHwxNzY3MzI3NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Handwriting and writing - understanding dysgraphia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dysgraphia affects approximately 5-20% of the population and is thought to have a neurological 
            basis.<sup>[3]</sup> It is not related to intelligence—individuals with dysgraphia can have average or 
            above-average cognitive abilities and may excel in verbal communication, creative thinking, 
            or other academic areas.<sup>[4]</sup> The condition involves difficulties with the mechanical aspects of writing, 
            including fine motor coordination, orthographic coding (the ability to store written words in working 
            memory), and graphomotor planning (planning and executing the movements required for writing).
          </p>
          
          <p className="mb-4">
            With appropriate support and accommodations, individuals with dysgraphia can succeed academically and 
            professionally, with technology tools often significantly reducing writing-related barriers.<sup>[5]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1633442495686-e8b67cffab53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwaGFuZCUyMHBlbmNpbHxlbnwxfHx8fDE3NjczMjc0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Writing with pencil - mechanical challenges of dysgraphia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dysgraphia is characterized by difficulties with illegible or inconsistent handwriting, awkward pencil grip 
            or body position while writing, slow writing speed, difficulty keeping up with note-taking, mixing upper and 
            lowercase letters inappropriately, and inconsistent spacing between letters and words.<sup>[6]</sup> Beyond handwriting 
            mechanics, dysgraphia can affect organizing thoughts on paper, grammar and punctuation usage, spelling 
            inconsistencies, and written expression despite strong verbal skills.<sup>[7]</sup> Individuals may experience hand 
            cramping or fatigue when writing, frustration with writing tasks, and anxiety about written assignments.<sup>[8]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1566669419640-ae09e20a18d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG1vdG9yJTIwc2tpbGxzJTIwbmV1cm9zY2llbmNlfGVufDF8fHx8MTc2NzMyNzQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain and motor coordination - neurological basis of dysgraphia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Research suggests that dysgraphia involves differences in brain areas responsible for language processing, 
            motor planning, and working memory, including regions in the frontal and parietal lobes.<sup>[9]</sup> The cerebellum, 
            which coordinates fine motor movements, may also play a role in dysgraphia.<sup>[10]</sup> These neurological differences 
            affect the mechanical aspects of writing including fine motor coordination, orthographic coding (storing 
            written words in working memory), and graphomotor planning (planning and executing writing movements).<sup>[11]</sup> 
            Like other learning differences, dysgraphia has a neurological basis and may have genetic components, 
            though more research is needed to fully understand its causes.
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2N1cGF0aW9uYWwlMjB0aGVyYXB5JTIwYXNzZXNzbWVudHxlbnwxfHx8fDE3NjczMjc0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Assessment and evaluation - diagnosing dysgraphia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dysgraphia is diagnosed through comprehensive evaluation by qualified professionals such as educational 
            psychologists, occupational therapists, or neuropsychologists.<sup>[12]</sup> The assessment process includes academic 
            achievement tests for written expression, fine motor skill and visual-motor integration assessments, 
            evaluation of handwriting quality and speed, assessment of spelling and composition abilities, and review of 
            writing samples and educational history.<sup>[13]</sup> Early identification is important to provide appropriate support and 
            prevent secondary issues like academic struggles and decreased self-confidence. Diagnosis can occur at 
            any age, though it's often identified when writing demands increase in school.<sup>[14]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1651326770902-5360f70acc7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Npc3RpdmUlMjB0ZWNobm9sb2d5JTIwdHlwaW5nfGVufDF8fHx8MTc2NzMyNzQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Assistive technology and typing - support for dysgraphia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Support for dysgraphia includes educational accommodations such as extended time for writing tasks and exams, 
            use of assistive technology (speech-to-text software, word processors), reduced writing requirements, and 
            note-taking support.<sup>[15]</sup> Therapeutic interventions include occupational therapy for fine motor skills, handwriting 
            instruction and practice programs, keyboarding skills training, multisensory writing approaches, and strategies 
            for organizing and planning written work.<sup>[16]</sup> Technology tools are particularly beneficial, including word 
            processing software with spell-check, speech-to-text applications, graphic organizers, text-to-speech programs 
            for proofreading, and digital note-taking apps.<sup>[17]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dysgraphia</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1586943759341-be5595944989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0ZXIlMjBjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjczMjc0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Creative professional writing - living successfully with dysgraphia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with dysgraphia lead successful and fulfilling lives across all areas of society. With appropriate 
            support and accommodations, people with dysgraphia can succeed academically and professionally.<sup>[18]</sup> Many individuals 
            with dysgraphia excel in verbal communication, creative thinking, and other areas beyond written expression. 
            Technology tools have been transformative for people with dysgraphia, significantly reducing writing-related 
            barriers and allowing them to demonstrate their knowledge and creativity effectively.<sup>[19]</sup> Living well with dysgraphia 
            involves understanding one's writing profile, developing personalized strategies, accessing appropriate accommodations, 
            and building confidence through areas of strength. Topics include recognizing strengths beyond handwriting, navigating 
            academic and professional environments with technology support, self-advocacy, and understanding legal protections.<sup>[20]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Berninger, V. W., & Wolf, B. J. (2009). "Teaching students with dyslexia and dysgraphia: Lessons from teaching and science." <em>Brookes Publishing</em>.</p>
          <p>[2] Richards, T. L., Berninger, V. W., & Fayol, M. (2009). "fMRI activation differences between 11-year-old good and poor spellers' access in working memory to temporary and long-term orthographic representations." <em>Journal of Neurolinguistics</em>, 22(4), 327-353.</p>
          <p>[3] Chung, P. J., Patel, D. R., & Nizami, I. (2020). "Disorder of written expression and dysgraphia: Definition, diagnosis, and management." <em>Translational Pediatrics</em>, 9(Suppl 1), S46-S54.</p>
          <p>[4] Berninger, V. W. (2004). "Understanding the 'graphia' in developmental dysgraphia: A developmental neuropsychological perspective for disorders in producing written language." <em>The Handbook of Learning Disabilities</em>, 189-228.</p>
          <p>[5] Connelly, V., Campbell, S., MacLean, M., & Barnes, J. (2006). "Contribution of lower order letter writing skills to the written composition of college students with and without dyslexia." <em>Developmental Neuropsychology</em>, 29(1), 175-196.</p>
          <p>[6] Rosenblum, S., Weiss, P. L., & Parush, S. (2003). "Product and process evaluation of handwriting difficulties." <em>Educational Psychology Review</em>, 15(1), 41-81.</p>
          <p>[7] Graham, S., & Weintraub, N. (1996). "A review of handwriting research: Progress and prospects from 1980 to 1994." <em>Educational Psychology Review</em>, 8(1), 7-87.</p>
          <p>[8] Alamargot, D., & Fayol, M. (2009). "Modelling the development of written composition." In R. Beard et al. (Eds.), <em>The SAGE Handbook of Writing Development</em> (pp. 23-47). SAGE Publications.</p>
          <p>[9] Berninger, V. W., & Richards, T. L. (2010). "Inter-relationships among behavioral markers, genes, brain, and treatment in dyslexia and dysgraphia." <em>Future Neurology</em>, 5(4), 597-617.</p>
          <p>[10] Adi-Japha, E., Landau, Y. E., Frenkel, L., et al. (2007). "ADHD and dysgraphia: Underlying mechanisms." <em>Cortex</em>, 43(6), 700-709.</p>
          <p>[11] Berninger, V. W., Nielsen, K. H., Abbott, R. D., et al. (2008). "Writing problems in developmental dyslexia: Under-recognized and under-treated." <em>Journal of School Psychology</em>, 46(1), 1-21.</p>
          <p>[12] Overvelde, A., & Hulstijn, W. (2011). "Handwriting development in grade 2 and grade 3 primary school children with normal, at risk, or dysgraphic characteristics." <em>Research in Developmental Disabilities</em>, 32(2), 540-548.</p>
          <p>[13] Berninger, V. W., & Amtmann, D. (2003). "Preventing written expression disabilities through early and continuing assessment and intervention for handwriting and/or spelling problems: Research into practice." In H. L. Swanson et al. (Eds.), <em>Handbook of Learning Disabilities</em> (pp. 345-363). Guilford Press.</p>
          <p>[14] Katusic, S. K., Colligan, R. C., Weaver, A. L., & Barbaresi, W. J. (2009). "The forgotten learning disability: Epidemiology of written-language disorder in a population-based birth cohort (1976-1982), Rochester, Minnesota." <em>Pediatrics</em>, 123(5), 1306-1313.</p>
          <p>[15] Berninger, V. W., & Winn, W. D. (2006). "Implications of advancements in brain research and technology for writing development, writing instruction, and educational evolution." In C. A. MacArthur et al. (Eds.), <em>Handbook of Writing Research</em> (pp. 96-114). Guilford Press.</p>
          <p>[16] Weintraub, N., & Graham, S. (2000). "The contribution of gender, orthographic, finger function, and visual-motor processes to the prediction of handwriting status." <em>Occupational Therapy Journal of Research</em>, 20(2), 121-140.</p>
          <p>[17] MacArthur, C. A. (2009). "Reflections on research on writing and technology for struggling writers." <em>Learning Disabilities Research & Practice</em>, 24(2), 93-103.</p>
          <p>[18] Deuel, R. K. (1995). "Developmental dysgraphia and motor skills disorders." <em>Journal of Child Neurology</em>, 10(Suppl 1), S6-S8.</p>
          <p>[19] Quinlan, T. (2004). "Speech recognition technology and students with writing difficulties: Improving fluency." <em>Journal of Educational Psychology</em>, 96(2), 337-346.</p>
          <p>[20] Gregg, N., Coleman, C., Davis, M., & Chalk, J. C. (2007). "Timed essay writing: Implications for high-stakes tests." <em>Journal of Learning Disabilities</em>, 40(4), 306-318.</p>
        </div>
      </section>
    </article>
  );
}