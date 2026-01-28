import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import dyscalculiaImage from 'figma:asset/942081213f181d1d76ad2c993c5b71835dc31a4f.png';

interface ArticleDyscalculiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleDyscalculia({ setCurrentArticle }: ArticleDyscalculiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Dyscalculia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('dyscalculia-living');
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
        Dyscalculia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Dyscalculia</strong> is a specific learning difference that affects a person's ability to 
            understand and work with numbers and mathematical concepts.<sup>[1]</sup> Often called "math dyslexia," dyscalculia 
            is characterized by difficulties with number sense, mathematical reasoning, and performing mathematical 
            calculations that are inconsistent with overall cognitive abilities.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Dyscalculia"
            image={dyscalculiaImage}
            data={[
              { label: 'Other names', value: 'Math learning disability, number blindness' },
              { label: 'Specialty', value: 'Educational psychology, Neurology' },
              { label: 'Symptoms', value: 'Difficulty with numbers, calculations, and math concepts' },
              { label: 'Usual onset', value: 'Early childhood' },
              { label: 'Duration', value: 'Lifelong' },
              { label: 'Frequency', value: '3-7% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1754304342447-82dabf632a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMG51bWJlcnMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY3MzI3MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Mathematics and numbers - understanding dyscalculia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyscalculia affects approximately 3-7% of the population and is thought to have a neurological basis.<sup>[3]</sup> 
            Like dyslexia, dyscalculia is not related to intelligence—individuals with dyscalculia can have average 
            or above-average intelligence and may excel in other academic areas such as reading, writing, or the arts.<sup>[4]</sup> 
            The condition involves difficulties with understanding numerical quantities, number symbols, and the 
            relationships between them.
          </p>
          
          <p className="mb-4">
            This can make everyday tasks involving numbers—such as telling time, managing money, measuring ingredients, 
            or understanding schedules—challenging. With appropriate support and accommodations, individuals with dyscalculia 
            can be successful in both academic and professional settings.<sup>[5]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1764700754052-afc4e11c5c64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxjdWxhdG9yJTIwY291bnRpbmclMjBtYXRofGVufDF8fHx8MTc2NzMyNzIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Calculator and counting - mathematical challenges in dyscalculia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyscalculia is characterized by difficulties with understanding quantities and the concept of "more" or "less," 
            recognizing numbers and number symbols, counting accurately, performing mental math calculations, memorizing math 
            facts, understanding mathematical concepts and operations, and estimating amounts or distances.<sup>[6]</sup> Beyond academic 
            mathematics, dyscalculia can affect financial management and budgeting, cooking and following recipes, navigation 
            and direction-finding, time management and scheduling, and understanding statistics and probabilities.<sup>[7]</sup> These 
            difficulties stem from underlying deficits in number sense and numerical processing.<sup>[8]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG1hdGhlbWF0aWNzJTIwbmV1cm9zY2llbmNlfGVufDF8fHx8MTc2NzMyNzIxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain and mathematics - neurological basis of dyscalculia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Research suggests that dyscalculia involves differences in brain areas responsible for numerical processing, 
            particularly the intraparietal sulcus and surrounding regions in the parietal lobe.<sup>[9]</sup> These areas are involved in 
            our basic "number sense"—the intuitive understanding of quantities and their relationships. Like other learning 
            differences, dyscalculia has a neurological basis and tends to run in families, suggesting a genetic component.<sup>[10]</sup> 
            Brain imaging studies have revealed differences in how individuals with dyscalculia process numerical information, 
            which helps explain why mathematical tasks that seem intuitive to others can be particularly challenging for people 
            with this condition.<sup>[11]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1560785496-3c9d27877182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbWF0aCUyMHRlc3R8ZW58MXx8fHwxNzY3MzI3MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Educational testing - assessment for dyscalculia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Dyscalculia is diagnosed through comprehensive evaluation by qualified professionals such as educational 
            psychologists or neuropsychologists.<sup>[12]</sup> The assessment process includes standardized tests of mathematical ability, 
            assessment of number sense and numerical reasoning, evaluation of cognitive abilities and processing, review of 
            educational history and performance, interviews with the individual, parents, and teachers, and screening for 
            co-occurring conditions.<sup>[13]</sup> Because dyscalculia is less well-known than dyslexia, it may go undiagnosed, particularly 
            if the individual performs well in other academic areas. Some people are not diagnosed until adulthood when they 
            encounter specific challenges in work or daily life involving numbers.<sup>[14]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1581089778245-3ce67677f718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGluZyUyMG1hdGhlbWF0aWNzJTIwc3VwcG9ydHxlbnwxfHx8fDE3NjczMjcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Teaching mathematics - instructional support for dyscalculia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Support for dyscalculia includes multi-sensory instruction using concrete manipulatives, visual representations of 
            mathematical concepts, breaking down complex problems into smaller steps, explicit teaching of mathematical language 
            and symbols, and building number sense through games and activities.<sup>[15]</sup> Accommodations and tools include calculator 
            use when appropriate, extended time on tests and assignments, access to formula sheets and number lines, graph paper 
            for organizing work, digital tools and apps for math support, and alternative assessment methods.<sup>[16]</sup> Technology such 
            as smartphone calculators, money management apps, digital calendars, and GPS navigation can be particularly helpful 
            for managing daily life tasks.<sup>[17]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Dyscalculia</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758518727592-706e80ebc354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjBwcm9mZXNzaW9uYWwlMjBzdWNjZXNzfGVufDF8fHx8MTc2NzMyNzIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional success - living successfully with dyscalculia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with dyscalculia lead successful and fulfilling lives across all areas of society. With appropriate 
            support and accommodations, people with dyscalculia can be successful in both academic and professional settings.<sup>[18]</sup> 
            Many careers don't require advanced mathematics, and modern technology can help compensate for calculation difficulties 
            in both professional and personal contexts. Living well with dyscalculia involves understanding one's learning profile, 
            developing personalized strategies and using assistive technology, accessing appropriate accommodations in education 
            and employment, and building confidence through areas of strength.<sup>[19]</sup> Topics include recognizing strengths beyond 
            mathematics, navigating academic and professional environments, using technology to support daily tasks, self-advocacy, 
            and understanding legal protections for educational and workplace accommodations.<sup>[20]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Butterworth, B. (2005). "The development of arithmetical abilities." <em>Journal of Child Psychology and Psychiatry</em>, 46(1), 3-18.</p>
          <p>[2] Shalev, R. S. (2004). "Developmental dyscalculia." <em>Journal of Child Neurology</em>, 19(10), 765-771.</p>
          <p>[3] Gross-Tsur, V., Manor, O., & Shalev, R. S. (1996). "Developmental dyscalculia: Prevalence and demographic features." <em>Developmental Medicine & Child Neurology</em>, 38(1), 25-33.</p>
          <p>[4] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[5] Mazzocco, M. M., & Myers, G. F. (2003). "Complexities in identifying and defining mathematics learning disability in the primary school-age years." <em>Annals of Dyslexia</em>, 53(1), 218-253.</p>
          <p>[6] Dehaene, S. (1997). <em>The Number Sense: How the Mind Creates Mathematics</em>. Oxford University Press.</p>
          <p>[7] Parsons, S., & Bynner, J. (2005). "Does numeracy matter more?" <em>National Research and Development Centre for Adult Literacy and Numeracy</em>, London.</p>
          <p>[8] Wilson, A. J., & Dehaene, S. (2007). "Number sense and developmental dyscalculia." In D. Coch, G. Dawson, & K. Fischer (Eds.), <em>Human Behavior, Learning, and the Developing Brain: Atypical Development</em> (pp. 212-238). Guilford Press.</p>
          <p>[9] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
          <p>[10] Shalev, R. S., Manor, O., Kerem, B., et al. (2001). "Developmental dyscalculia is a familial learning disability." <em>Journal of Learning Disabilities</em>, 34(1), 59-65.</p>
          <p>[11] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[12] Dowker, A. (2005). <em>Individual Differences in Arithmetic: Implications for Psychology, Neuroscience and Education</em>. Psychology Press.</p>
          <p>[13] Mazzocco, M. M. (2007). "Defining and differentiating mathematical learning disabilities and difficulties." In D. B. Berch & M. M. Mazzocco (Eds.), <em>Why Is Math So Hard for Some Children?</em> (pp. 29-47). Paul H. Brookes Publishing.</p>
          <p>[14] Shalev, R. S., & Gross-Tsur, V. (2001). "Developmental dyscalculia." <em>Pediatric Neurology</em>, 24(5), 337-342.</p>
          <p>[15] Gersten, R., Chard, D. J., Jayanthi, M., et al. (2009). "Mathematics instruction for students with learning disabilities: A meta-analysis of instructional components." <em>Review of Educational Research</em>, 79(3), 1202-1242.</p>
          <p>[16] Bryant, D. P., Bryant, B. R., Gersten, R., et al. (2008). "Mathematics intervention for first- and second-grade students with mathematics difficulties: The effects of tier 2 intervention delivered as booster lessons." <em>Remedial and Special Education</em>, 29(1), 20-32.</p>
          <p>[17] Moyer-Packenham, P. S., & Westenskow, A. (2013). "Effects of virtual manipulatives on student achievement and mathematics learning." <em>International Journal of Virtual and Personal Learning Environments</em>, 4(3), 35-50.</p>
          <p>[18] Geary, D. C., Hoard, M. K., Nugent, L., & Bailey, D. H. (2012). "Mathematical cognition deficits in children with learning disabilities and persistent low achievement: A five-year prospective study." <em>Journal of Educational Psychology</em>, 104(1), 206-223.</p>
          <p>[19] Butterworth, B., & Laurillard, D. (2010). "Low numeracy and dyscalculia: Identification and intervention." <em>ZDM Mathematics Education</em>, 42(6), 527-539.</p>
          <p>[20] Iuculano, T., Moro, R., & Butterworth, B. (2011). "Updating working memory and arithmetical attainment in school." <em>Learning and Individual Differences</em>, 21(6), 655-661.</p>
        </div>
      </section>
    </article>
  );
}