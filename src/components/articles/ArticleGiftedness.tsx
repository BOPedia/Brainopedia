import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import giftednessImage from 'figma:asset/ecca5f9e31d913d7a3c4925f7d502fd0994f7d2a.png';
import giftednessLivingImage from 'figma:asset/819980b817af84f4f708c7ded0e22c8be4ae8328.png';

interface ArticleGiftednessProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleGiftedness({ setCurrentArticle }: ArticleGiftednessProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with Giftedness',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('giftedness-living');
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
        Giftedness
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Giftedness</strong> is a neurological difference characterized by advanced cognitive 
            abilities, exceptional intensity of experience, and asynchronous development across domains.<sup>[1]</sup> 
            Far more than simply "being smart," giftedness represents a distinct neurotype involving 
            differences in brain structure, processing speed, pattern recognition, and emotional intensity 
            that fundamentally shape how individuals perceive and interact with the world.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Giftedness"
            image={giftednessImage}
            data={[
              { label: 'Other names', value: 'Intellectually gifted, high ability' },
              { label: 'Specialty', value: 'Gifted Education, Psychology' },
              { label: 'Symptoms', value: 'Advanced cognition, intensity, asynchrony' },
              { label: 'Not the same as', value: 'High achievement or academic success' },
              { label: 'Frequency', value: 'Approximately 2-10% depending on definition' },
              { label: 'Identified through', value: 'IQ testing, creativity, performance, potential' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758685733633-a12889098460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGxlYXJuaW5nJTIwZ2VuaXVzfGVufDF8fHx8MTc2NzQwNDIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Child engaged in advanced learning - representing giftedness and cognitive development"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Research using neuroimaging has identified structural and functional differences in the brains 
            of gifted individuals, including enhanced neural connectivity, increased synaptic efficiency, 
            and differences in brain metabolism.<sup>[3][4]</sup> These neurological variations create a fundamentally 
            different way of experiencing consciousness, learning, and emotional life.
          </p>
          
          <p className="mb-4">
            Giftedness affects approximately 2-10% of the population, depending on how it's defined.<sup>[5]</sup> While traditionally 
            identified through IQ testing, modern understanding recognizes multiple forms of giftedness—
            intellectual, creative, artistic, leadership, and specific academic domains—and acknowledges 
            that giftedness exists across all cultural, ethnic, and socioeconomic backgrounds.<sup>[6]</sup> Importantly, 
            giftedness is not the same as high achievement or academic success. It's a neurological way of 
            being that exists independent of performance, and gifted individuals face unique social, emotional, 
            and existential challenges alongside their cognitive strengths.<sup>[7]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRoaW5raW5nJTIwbGlnaHRidWxifGVufDF8fHx8MTc2NzQwNDIwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Creative thinking and innovation - characteristics of gifted cognition"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Gifted individuals demonstrate rapid learning and quick grasp of complex concepts, exceptional memory 
            and recall abilities, advanced reasoning and problem-solving skills, ability to see connections and 
            patterns others miss, abstract thinking from a young age, intense curiosity and endless questions, 
            preference for complexity and challenge, early language development and sophisticated vocabulary, 
            ability to concentrate intensely on areas of interest, and preference for independent self-directed 
            learning.<sup>[8][9]</sup>
          </p>
          
          <p className="mb-4">
            A hallmark of giftedness is asynchronous development—intellectual abilities far exceed 
            chronological age while emotional, social, or physical development may align more closely with age 
            peers, creating the "gifted paradox."<sup>[10]</sup> Emotional and social characteristics include heightened 
            sensitivity and emotional depth, strong sense of justice and moral development, concern with 
            philosophical and existential questions from a young age, perfectionism and high self-expectations, 
            difficulty finding like-minded peers, and feeling "different" or not fitting in.<sup>[11]</sup> Psychologist 
            Kazimierz Dąbrowski identified "overexcitabilities"—heightened intensities in psychomotor, sensual, 
            intellectual, imaginational, and emotional domains that represent neurological supersensitivities.<sup>[12]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1719550371336-7bb64b5cacfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJhbCUyMG5ldHdvcmt8ZW58MXx8fHwxNzY3NDA0MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Neural networks in the brain - neurological basis of giftedness"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Research using neuroimaging has identified structural and functional differences in the brains of 
            gifted individuals, including enhanced neural connectivity, increased synaptic efficiency, and 
            differences in brain metabolism.<sup>[13][14]</sup> These neurological variations create a fundamentally different way 
            of experiencing consciousness, learning, and emotional life. Giftedness has a strong genetic component 
            and tends to run in families, though environmental factors also play a role in how potential is expressed.<sup>[15]</sup>
          </p>
          
          <p className="mb-4">
            The exact mechanisms are still being studied, but research suggests differences in brain structure, 
            white matter development, neural efficiency, and neurotransmitter function.<sup>[16]</sup> Giftedness represents a 
            natural variation in human neurology, present from birth, that involves differences in how the brain 
            processes information, forms connections, and responds to stimuli.<sup>[17]</sup> The "overexcitabilities" common in 
            giftedness are neurological, not behavioral choices, and represent the gifted brain's enhanced 
            responsiveness to stimuli.<sup>[18]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1765851802822-da3b17de20a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlbGxlY3R1YWwlMjBkZXZlbG9wbWVudCUyMGNoZXNzfGVufDF8fHx8MTc2NzQwNDIwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Intellectual development and strategic thinking - assessment of giftedness"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Giftedness is typically identified through comprehensive evaluation including IQ testing (typically 
            scores in the top 2-10% of the population), assessment of creativity, academic achievement testing, 
            evaluation of specific talents in domains like arts, leadership, or specific subjects, portfolio 
            review of work samples, teacher and parent observations, and consideration of potential alongside 
            performance.<sup>[19][20]</sup>
          </p>
          
          <p className="mb-4">
            Modern understanding recognizes multiple forms of giftedness beyond traditional IQ testing.<sup>[21]</sup> 
            Key indicators include advanced reasoning and problem-solving, exceptional creativity and original 
            thinking, intense curiosity and deep interests, rapid learning, sophisticated vocabulary and communication, 
            and asynchronous development. Giftedness in girls, children of color, twice-exceptional individuals, and 
            those from underrepresented backgrounds is frequently overlooked, requiring culturally sensitive and 
            comprehensive identification practices.<sup>[22]</sup> Identification should look beyond overall achievement to examine 
            potential, creativity, and thinking patterns.<sup>[23]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758270704417-26c1244cfaf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0ZWQlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY3NDA0MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Educational support and enrichment - gifted education classroom"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Supporting gifted individuals requires recognizing giftedness as a neurotype with unique needs.<sup>[24]</sup> Educational 
            support includes access to appropriately challenging curriculum, acceleration or grade-skipping when beneficial, 
            enrichment opportunities and depth in areas of interest, clustering with intellectual peers, gifted programs 
            or specialized schools, mentorship and advanced learning opportunities, and allowing self-paced learning and 
            independent projects.<sup>[25]</sup>
          </p>
          
          <p className="mb-4">
            Social and emotional support includes connection with other gifted individuals (true 
            peer groups), validation of feelings and experiences, counseling from therapists who understand giftedness, 
            support for perfectionism and anxiety, teaching coping strategies for intensity, and helping develop emotional 
            intelligence and self-regulation.<sup>[26]</sup> Understanding and acceptance involves recognizing giftedness as a neurological 
            difference not just an advantage, understanding asynchronous development, accepting intensity and overexcitabilities, 
            and providing space for big questions and deep thinking.<sup>[27]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Giftedness</h2>
          
          <img 
            src={giftednessLivingImage}
            alt="Living with giftedness - thriving with advanced cognitive abilities"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Gifted individuals lead successful and fulfilling lives across all areas of society. Living as gifted involves 
            navigating unique challenges including lack of challenge in standard settings, difficulty connecting with age-peers, 
            feeling isolated or "different," existential depression and anxiety, overwhelming awareness of world problems, 
            perfectionism, multipotentiality (talents and interests in many areas making decisions overwhelming), and potential 
            misdiagnosis of overexcitabilities and intensity.<sup>[28][29]</sup>
          </p>
          
          <p className="mb-4">
            However, with appropriate understanding and support, gifted 
            individuals develop their exceptional abilities and find meaningful paths. Living well as gifted involves understanding 
            one's neurotype including asynchronous development and overexcitabilities, finding intellectual peers and community, 
            accessing appropriate challenge and enrichment, developing strategies for perfectionism and intensity, navigating 
            educational and professional environments, and building self-acceptance.<sup>[30]</sup> Learning to embrace one's intensity 
            and difference is valid and valuable for healthy identity development.<sup>[31]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Silverman, L. K. (2013). <em>Giftedness 101</em>. New York: Springer Publishing Company.</p>
          <p>[2] Webb, J. T., Gore, J. L., Amend, E. R., & DeVries, A. R. (2007). <em>A parent's guide to gifted children</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[3] Geake, J. G., & Hansen, P. C. (2005). "Neural correlates of intelligence as revealed by fMRI of fluid analogies." <em>NeuroImage</em>, 26(2), 555-564.</p>
          <p>[4] Shaw, P., Greenstein, D., Lerch, J., et al. (2006). "Intellectual ability and cortical development in children and adolescents." <em>Nature</em>, 440(7084), 676-679.</p>
          <p>[5] Pfeiffer, S. I. (2015). <em>Essentials of gifted assessment</em>. Hoboken, NJ: John Wiley & Sons.</p>
          <p>[6] Renzulli, J. S. (2012). "Reexamining the role of gifted education and talent development for the 21st century: A four-part theoretical approach." <em>Gifted Child Quarterly</em>, 56(3), 150-159.</p>
          <p>[7] Peterson, J. S. (2009). "Myth 17: Gifted and talented individuals do not have unique social and emotional needs." <em>Gifted Child Quarterly</em>, 53(4), 280-282.</p>
          <p>[8] Winner, E. (1996). <em>Gifted children: Myths and realities</em>. New York: Basic Books.</p>
          <p>[9] Rogers, K. B. (2007). "Lessons learned about educating the gifted and talented: A synthesis of the research on educational practice." <em>Gifted Child Quarterly</em>, 51(4), 382-396.</p>
          <p>[10] Silverman, L. K. (1997). "The construct of asynchronous development." <em>Peabody Journal of Education</em>, 72(3-4), 36-58.</p>
          <p>[11] Neihart, M., Reis, S. M., Robinson, N. M., & Moon, S. M. (2002). <em>The social and emotional development of gifted children: What do we know?</em> Waco, TX: Prufrock Press.</p>
          <p>[12] Dąbrowski, K. (1964). <em>Positive disintegration</em>. Boston: Little, Brown.</p>
          <p>[13] Jung, R. E., & Haier, R. J. (2007). "The Parieto-Frontal Integration Theory (P-FIT) of intelligence: Converging neuroimaging evidence." <em>Behavioral and Brain Sciences</em>, 30(2), 135-154.</p>
          <p>[14] Neubauer, A. C., & Fink, A. (2009). "Intelligence and neural efficiency." <em>Neuroscience & Biobehavioral Reviews</em>, 33(7), 1004-1023.</p>
          <p>[15] Plomin, R., & Deary, I. J. (2015). "Genetics and intelligence differences: Five special findings." <em>Molecular Psychiatry</em>, 20(1), 98-108.</p>
          <p>[16] Haier, R. J., Jung, R. E., Yeo, R. A., Head, K., & Alkire, M. T. (2004). "Structural brain variation and general intelligence." <em>NeuroImage</em>, 23(1), 425-433.</p>
          <p>[17] Dai, D. Y., & Chen, F. (2013). "Three paradigms of gifted education: In search of conceptual clarity in research and practice." <em>Gifted Child Quarterly</em>, 57(3), 151-168.</p>
          <p>[18] Mendaglio, S., & Tillier, W. (2006). "Dabrowski's theory of positive disintegration and giftedness: Overexcitability research findings." <em>Journal for the Education of the Gifted</em>, 30(1), 68-87.</p>
          <p>[19] Kaufman, A. S. (2009). <em>IQ testing 101</em>. New York: Springer Publishing Company.</p>
          <p>[20] Robinson, A., Shore, B. M., & Enersen, D. L. (2007). <em>Best practices in gifted education: An evidence-based guide</em>. Waco, TX: Prufrock Press.</p>
          <p>[21] Sternberg, R. J., & Davidson, J. E. (2005). <em>Conceptions of giftedness</em> (2nd ed.). New York: Cambridge University Press.</p>
          <p>[22] Ford, D. Y., Grantham, T. C., & Whiting, G. W. (2008). "Culturally and linguistically diverse students in gifted education: Recruitment and retention issues." <em>Exceptional Children</em>, 74(3), 289-306.</p>
          <p>[23] Subotnik, R. F., Olszewski-Kubilius, P., & Worrell, F. C. (2011). "Rethinking giftedness and gifted education: A proposed direction forward based on psychological science." <em>Psychological Science in the Public Interest</em>, 12(1), 3-54.</p>
          <p>[24] Daniels, S., & Piechowski, M. M. (2009). <em>Living with intensity: Understanding the sensitivity, excitability, and emotional development of gifted children, adolescents, and adults</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[25] Colangelo, N., Assouline, S. G., & Gross, M. U. (2004). <em>A nation deceived: How schools hold back America's brightest students</em>. Iowa City: The Connie Belin & Jacqueline N. Blank International Center for Gifted Education and Talent Development.</p>
          <p>[26] Peterson, J. S., & Ray, K. E. (2006). "Bullying among the gifted: The subjective experience." <em>Gifted Child Quarterly</em>, 50(3), 252-269.</p>
          <p>[27] Bainbridge, C. (2011). <em>The gifted child survival guide</em>. Waco, TX: Prufrock Press.</p>
          <p>[28] Schuler, P. A. (2000). "Perfectionism and gifted adolescents." <em>Journal of Secondary Gifted Education</em>, 11(4), 183-196.</p>
          <p>[29] Webb, J. T., Amend, E. R., Webb, N. E., Goerss, J., Beljan, P., & Olenchak, F. R. (2005). <em>Misdiagnosis and dual diagnoses of gifted children and adults: ADHD, bipolar, OCD, Asperger's, depression, and other disorders</em>. Scottsdale, AZ: Great Potential Press.</p>
          <p>[30] Kerr, B. A., & McKay, R. (2014). <em>Smart girls in the 21st century: Understanding talented girls and women</em>. Tucson, AZ: Great Potential Press.</p>
          <p>[31] Cross, T. L., & Cross, J. R. (2015). "Clinical and mental health issues in counseling the gifted individual." <em>Journal of Counseling & Development</em>, 93(2), 163-172.</p>
        </div>
      </section>
    </article>
  );
}