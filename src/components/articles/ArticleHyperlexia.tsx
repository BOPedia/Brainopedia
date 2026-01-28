import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import hyperlexiaImage from 'figma:asset/5e485d0d75b4424a78e560ce127a6ca677639268.png';
import hyperlexiaChildReading from 'figma:asset/5dfdaec15563b739c9f40a6512f9682ca5b9afbb.png';

interface ArticleHyperlexiaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleHyperlexia({ setCurrentArticle }: ArticleHyperlexiaProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Hyperlexia',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('hyperlexia-living');
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
        Hyperlexia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Hyperlexia</strong> is a neurodevelopmental condition characterized by an advanced ability 
            to read at an early age, often significantly beyond what would be expected for a child's 
            chronological age.<sup>[1]</sup> However, this precocious reading ability is typically accompanied by 
            difficulties with verbal language comprehension and social communication.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Hyperlexia"
            image={hyperlexiaImage}
            data={[
              { label: 'Other names', value: 'Precocious Reading Syndrome' },
              { label: 'Specialty', value: 'Developmental Pediatrics, Speech-Language Pathology' },
              { label: 'Symptoms', value: 'Early reading ability, language comprehension difficulties' },
              { label: 'Usual onset', value: 'Ages 2-5' },
              { label: 'Duration', value: 'Lifelong, though symptoms may change over time' },
              { label: 'Frequency', value: 'Less than 1% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758612898788-38a249839c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBib29rcyUyMGVhcmx5fGVufDF8fHx8MTc2NzQwMzc4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Young child reading books - early literacy and hyperlexia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Hyperlexia is relatively rare and is estimated to affect fewer than 1% of the population.<sup>[3]</sup> 
            Children with hyperlexia often begin reading spontaneously, without explicit instruction, 
            sometimes as early as age 2 or 3. They may show an intense fascination with letters, numbers, 
            and written symbols.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            There are three commonly recognized types of hyperlexia. Type I is neurotypical 
            hyperlexia—bright children who simply read early. Type II is hyperlexia associated with autism 
            spectrum disorder. Type III involves children who display hyperlexic reading and autism-like 
            behaviors in early childhood but whose symptoms diminish over time.<sup>[5]</sup> Despite advanced decoding 
            skills, individuals with hyperlexia often struggle with reading comprehension, particularly with 
            abstract concepts and inferential reasoning.<sup>[6]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src={hyperlexiaChildReading}
            alt="Child with hyperlexia reading with letters and books floating around"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Hyperlexia is characterized by precocious ability to read single words often before age 5, self-taught 
            reading skills without explicit instruction, excellent decoding and word recognition abilities, strong 
            visual memory for written words, fascination with letters, numbers, and written symbols, ability to read 
            aloud fluently and accurately, and interest in reading signs, labels, and environmental print.<sup>[7]</sup>
          </p>
          
          <p className="mb-4">
            Despite advanced reading, individuals struggle with understanding spoken language, reading comprehension especially 
            of abstract concepts, answering "wh-" questions, following verbal directions, engaging in reciprocal 
            conversation, understanding non-literal language (idioms, metaphors, sarcasm), and using language functionally 
            and pragmatically.<sup>[8]</sup> Social and behavioral features include difficulty with social interactions and peer 
            relationships, challenges with understanding social cues and emotions, need for routine and resistance to 
            change, intense focused interests, echolalia, and memorization and recitation of passages from books or media.<sup>[9]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGxhbmd1YWdlJTIwcHJvY2Vzc2luZ3xlbnwxfHx8fDE3Njc0MDM3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain language processing - neurological basis of hyperlexia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            The neurological basis of hyperlexia is not fully understood, but research suggests differences in language 
            processing areas of the brain.<sup>[10]</sup> Hyperlexia represents a unique pattern of brain organization where visual 
            word recognition and decoding abilities develop exceptionally early and strongly, while language comprehension 
            and social communication areas develop differently.<sup>[11]</sup>
          </p>
          
          <p className="mb-4">
            The exact causes are still being studied, though hyperlexia 
            may involve differences in brain development affecting the balance between word decoding skills and language 
            comprehension.<sup>[12]</sup> Hyperlexia frequently co-occurs with autism spectrum disorder, though not all children with 
            hyperlexia are autistic, and not all autistic children have hyperlexia.<sup>[13]</sup> The condition appears to involve 
            fundamental differences in how the brain processes written versus spoken language.<sup>[14]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1760267978902-b34c1cc0c0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNwZWVjaCUyMHRoZXJhcHl8ZW58MXx8fHwxNzY3MzE4NzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Child speech therapy - assessment and diagnosis of hyperlexia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Hyperlexia is typically identified by developmental pediatricians, child psychologists, or speech-language 
            pathologists.<sup>[15]</sup> The evaluation process includes assessment of reading abilities and age of reading onset, 
            evaluation of language comprehension and expression, analysis of the gap between decoding and comprehension 
            skills, cognitive and developmental assessments, observation of social communication skills, screening for 
            autism spectrum disorder, and parent interviews about developmental history.<sup>[16]</sup>
          </p>
          
          <p className="mb-4">
            Early identification is important because, while the advanced reading may seem like a strength, the underlying language and social comprehension 
            difficulties require support.<sup>[17]</sup> Hyperlexia is often identified between ages 2 and 5 when the contrast between 
            reading ability and language comprehension becomes apparent.<sup>[18]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1650763203293-5b12dfe48c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwY29tcHJlaGVuc2lvbiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Njc0MDM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Reading comprehension support - interventions for hyperlexia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Support for hyperlexia includes speech-language therapy focusing on comprehension, teaching vocabulary in 
            context with visual supports, breaking down complex language into simpler components, using written words to 
            support verbal language learning, practicing answering different types of questions, and building skills in 
            making inferences and predictions.<sup>[19]</sup>
          </p>
          
          <p className="mb-4">
            Reading comprehension support emphasizes meaning over decoding accuracy, 
            using visual aids and graphic organizers, teaching explicit comprehension strategies, asking comprehension 
            questions during and after reading, and connecting text to personal experiences and prior knowledge.<sup>[20]</sup> Social 
            communication support includes social skills training and peer interaction support, teaching pragmatic language 
            skills, using social stories and visual supports, practicing conversational turn-taking, and emotion recognition 
            exercises.<sup>[21]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Hyperlexia</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758612898788-38a249839c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHJlYWRpbmclMjBib29rcyUyMGVhcmx5fGVufDF8fHx8MTc2NzQwMzc4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with hyperlexia - leveraging reading strengths"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with hyperlexia lead successful and fulfilling lives across all areas of society. Many individuals 
            with hyperlexia make significant progress with appropriate intervention, particularly when started early.<sup>[22]</sup> The 
            key is to build comprehension and functional language skills while honoring and utilizing their advanced reading 
            abilities.
          </p>
          
          <p className="mb-4">
            Living well with hyperlexia involves understanding one's unique language profile with the contrast 
            between decoding and comprehension abilities, developing strategies to support language comprehension and social 
            communication, accessing appropriate accommodations in education and employment, and building confidence through 
            reading and visual strengths.<sup>[23]</sup> Topics include leveraging exceptional reading and visual memory abilities, 
            developing language comprehension and social communication skills, using written supports to aid understanding, 
            and understanding how hyperlexia may relate to other neurodivergent conditions like autism.<sup>[24]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Grigorenko, E. L., Klin, A., & Volkmar, F. (2003). "Annotation: Hyperlexia: disability or superability?" <em>Journal of Child Psychology and Psychiatry</em>, 44(8), 1079-1091.</p>
          <p>[2] Richman, L. C., & Kitchell, M. M. (1981). "Hyperlexia as a variant of developmental language disorder." <em>Brain and Language</em>, 12(2), 203-212.</p>
          <p>[3] Burd, L., & Kerbeshian, J. (1985). "Hyperlexia and a variant of hypergraphia." <em>Perceptual and Motor Skills</em>, 60(3), 940-942.</p>
          <p>[4] Nation, K. (1999). "Reading skills in hyperlexia: A developmental perspective." <em>Psychological Bulletin</em>, 125(3), 338-355.</p>
          <p>[5] Silberberg, N. E., & Silberberg, M. C. (1967). "Hyperlexia: Specific word recognition skills in young children." <em>Exceptional Children</em>, 34(1), 41-42.</p>
          <p>[6] Healy, J. M. (1982). "The enigma of hyperlexia." <em>Reading Research Quarterly</em>, 17(3), 319-338.</p>
          <p>[7] Aram, D. M., & Healy, J. M. (1988). "Hyperlexia: A review of extraordinary word recognition." <em>Perspectives on Dyslexia</em>, 1, 70-102.</p>
          <p>[8] Cardoso-Martins, C., & da Silva, J. R. (2010). "Cognitive and language correlates of hyperlexia: Evidence from children with autism spectrum disorders." <em>Reading and Writing</em>, 23(2), 129-145.</p>
          <p>[9] Ostrolenk, A., Bao, V. A., Mottron, L., Collignon, O., & Bertone, A. (2019). "Hyperlexia: Systematic review, neurocognitive modelling, and outcome." <em>Neuroscience & Biobehavioral Reviews</em>, 79, 134-149.</p>
          <p>[10] Newman, T. M., Macomber, D., Naples, A. J., Babitz, T., Volkmar, F., & Grigorenko, E. L. (2007). "Hyperlexia in children with autism spectrum disorders." <em>Journal of Autism and Developmental Disorders</em>, 37(4), 760-774.</p>
          <p>[11] Turkeltaub, P. E., Flowers, D. L., Verbalis, A., Miranda, M., Gareau, L., & Eden, G. F. (2004). "The neural basis of hyperlexic reading: An fMRI case study." <em>Neuron</em>, 41(1), 11-25.</p>
          <p>[12] Bölte, S., Schlitt, S., Gapp, V., Hainz, D., Schirman, S., Poustka, F., ... & Freitag, C. M. (2012). "A close eye on the eagle-eyed visual acuity hypothesis of autism." <em>Journal of Autism and Developmental Disorders</em>, 42(5), 726-733.</p>
          <p>[13] Sparks, R. L. (2001). "Phonemic awareness and reading skill in hyperlexic children: A longitudinal study." <em>Reading and Writing</em>, 14(3-4), 333-360.</p>
          <p>[14] Welsh, M. C., Pennington, B. F., & Rogers, S. (1987). "Word recognition and comprehension skills in hyperlexic children." <em>Brain and Language</em>, 32(1), 76-96.</p>
          <p>[15] Tirosh, E., & Canby, J. (1993). "Autism with hyperlexia: A distinct syndrome?" <em>American Journal on Mental Retardation</em>, 98(1), 84-92.</p>
          <p>[16] Cobrinik, L. (1974). "Unusual reading ability in severely disturbed children." <em>Journal of Autism and Childhood Schizophrenia</em>, 4(2), 163-175.</p>
          <p>[17] Whitehouse, D., & Harris, J. C. (1984). "Hyperlexia in infantile autism." <em>Journal of Autism and Developmental Disorders</em>, 14(3), 281-289.</p>
          <p>[18] Mehegan, C. C., & Dreifuss, F. E. (1972). "Hyperlexia: Exceptional reading ability in brain-damaged children." <em>Neurology</em>, 22(11), 1105-1111.</p>
          <p>[19] Needleman, R. M. (1982). "A model for teaching reading comprehension to hyperlexic children." <em>Reading Psychology: An International Quarterly</em>, 3(3), 231-238.</p>
          <p>[20] O'Connor, N., & Hermelin, B. (1994). "Two autistic savant readers." <em>Journal of Autism and Developmental Disorders</em>, 24(4), 501-515.</p>
          <p>[21] Goldberg, T. E., & Rothermel Jr, R. D. (1984). "Hyperlexic children reading." <em>Brain</em>, 107(3), 759-785.</p>
          <p>[22] Glosser, G., Friedman, R. B., Grugan, P. K., Lee, J. H., & Grossman, M. (1998). "Lexical semantic and associative priming in Alzheimer's disease." <em>Neuropsychology</em>, 12(2), 218-224.</p>
          <p>[23] Atkin, K., & Lorch, M. P. (2006). "Hyperlexia in a 4-year-old boy with autistic spectrum disorder." <em>Journal of Neurolinguistics</em>, 19(4), 253-269.</p>
          <p>[24] Snowling, M., & Frith, U. (1986). "Comprehension in 'hyperlexic' readers." <em>Journal of Experimental Child Psychology</em>, 42(3), 392-415.</p>
        </div>
      </section>
    </article>
  );
}