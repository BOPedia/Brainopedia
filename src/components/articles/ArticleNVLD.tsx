import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import nvldImage from 'figma:asset/24fa4bd6be32eb6b5926655ff7a54b635e91d2da.png';

interface ArticleNVLDProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleNVLD({ setCurrentArticle }: ArticleNVLDProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-overview');
      }
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-symptoms');
      }
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-causes');
      }
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-diagnosis');
      }
    },
    { 
      id: 'support', 
      title: 'Support & Management',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-support');
      }
    },
    { 
      id: 'living', 
      title: 'Living with NVLD',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentArticle?.('nvld-living');
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
        Non-Verbal Learning Disability (NVLD)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Non-Verbal Learning Disability (NVLD)</strong> is a neurological condition characterized 
            by a specific pattern of strengths and challenges: exceptional verbal abilities combined with 
            difficulties in visual-spatial processing, motor coordination, and social perception.<sup>[1]</sup> This creates 
            a unique learning profile where language-based tasks come easily while non-verbal information 
            processing presents significant challenges.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Non-Verbal Learning Disability"
            image={nvldImage}
            data={[
              { label: 'Other names', value: 'NVLD, NLD' },
              { label: 'Specialty', value: 'Neuropsychology, Educational Psychology' },
              { label: 'Symptoms', value: 'Strong verbal skills, visual-spatial challenges' },
              { label: 'Key pattern', value: 'Left hemisphere strengths, right hemisphere challenges' },
              { label: 'Frequency', value: 'Approximately 3-4% of population' },
              { label: 'Often confused with', value: 'Autism spectrum (but distinct)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1725359642413-9061e10b7e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGF0aWFsJTIwdmlzdWFsJTIwcGF0dGVybnN8ZW58MXx8fHwxNzY3MzI3NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Visual spatial patterns - understanding NVLD challenges"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            NVLD represents a distinct pattern of brain organization where the right hemisphere—responsible 
            for visual-spatial processing, pattern recognition, and holistic thinking—functions differently 
            than typical, while left hemisphere functions (language, sequential processing, verbal reasoning) 
            often exceed typical development.<sup>[3]</sup> This neurological profile affects approximately 3-4% of the 
            population and can significantly impact learning, social interaction, and daily functioning.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            NVLD is distinct from other learning disabilities because of the specific pattern of verbal strengths 
            alongside non-verbal challenges. While NVLD shares some features with autism spectrum disorder, 
            particularly in social perception challenges, it is a distinct condition with its own neurological 
            signature and support needs.<sup>[5]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758274252229-81e88cab5ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBpbnRlcmFjdGlvbiUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzY3MzI3NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Social interaction - challenges with non-verbal communication in NVLD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            NVLD presents across three primary domains. Visual-spatial-organizational challenges include difficulty 
            with spatial relationships and visual organization, challenges with puzzles, maps, diagrams, and visual 
            patterns, trouble organizing physical spaces, and difficulty with geometry and spatial aspects of mathematics.<sup>[6]</sup> 
            Motor coordination difficulties include poor fine motor skills affecting handwriting, gross motor challenges 
            with sports, balance, and coordination, and appearing clumsy or accident-prone.<sup>[7]</sup> Social perception challenges 
            include difficulty reading facial expressions and body language, challenges understanding non-verbal social cues, 
            literal interpretation of language, and difficulty with social problem-solving and flexibility.<sup>[8]</sup> Individuals 
            with NVLD often demonstrate remarkable strengths including exceptional vocabulary, strong verbal memory, and 
            advanced verbal reasoning abilities.<sup>[9]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1647613561332-3d88a6a0048e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGhlbWlzcGhlcmVzJTIwbmV1cm9zY2llbmNlfGVufDF8fHx8MTc2NzMyNzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain hemispheres - neurological basis of NVLD"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            NVLD represents a distinct pattern of brain organization related to hemispheric functioning. Research 
            suggests differences in how the right hemisphere of the brain processes information, particularly in 
            areas responsible for visual-spatial processing, pattern recognition, and holistic thinking, while left 
            hemisphere functions often exceed typical development.<sup>[10]</sup> The exact neurological mechanisms are still being 
            studied, but brain imaging research has shown differences in white matter development and inter-hemispheric 
            communication.<sup>[11]</sup> NVLD may have genetic components and tends to run in families, though the specific causes 
            are not fully understood. The condition is present from birth and represents a fundamental difference in 
            brain organization and information processing.<sup>[12]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1711409650645-a568a59446f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb3BzeWNob2xvZ2ljYWwlMjBhc3Nlc3NtZW50JTIwdGVzdGluZ3xlbnwxfHx8fDE3NjczMjc1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Neuropsychological assessment - comprehensive testing for NVLD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            NVLD is diagnosed through comprehensive neuropsychological evaluation by qualified professionals such as 
            neuropsychologists or educational psychologists.<sup>[13]</sup> The assessment includes standardized cognitive testing 
            showing the characteristic pattern of high verbal abilities with lower visual-spatial and motor skills, 
            evaluation of visual-spatial processing and visual-motor integration, assessment of motor coordination and 
            fine motor skills, and social-emotional and adaptive functioning evaluation.<sup>[14]</sup> The diagnosis is based on the 
            specific pattern of strengths and weaknesses rather than any single test score. NVLD is often identified in 
            elementary school when visual-spatial and social demands increase, though some individuals may not be 
            diagnosed until later.<sup>[15]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1763310225009-50214e3c99d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc3VwcG9ydCUyMGludGVydmVudGlvbnxlbnwxfHx8fDE3NjczMjc1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Therapy and support - interventions for NVLD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Effective support for NVLD builds on verbal strengths while providing accommodations for challenges. 
            Educational accommodations include verbal explanations for visual information, extended time for tasks 
            requiring visual-spatial or motor skills, use of assistive technology for writing, and breaking complex 
            tasks into sequential verbal steps.<sup>[16]</sup> Social skills support includes explicit teaching of social rules 
            and expectations, role-playing and practice of social scenarios, and verbally explaining non-verbal social 
            cues.<sup>[17]</sup> Therapeutic interventions include occupational therapy for motor skills and visual-spatial 
            development, cognitive-behavioral therapy for anxiety management, executive function coaching, and social 
            skills therapy. Technology tools include GPS and navigation apps, organizational apps with reminders, and 
            speech-to-text software.<sup>[18]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with NVLD</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1551989745-347c28b620e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjczMjc1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional success - living successfully with NVLD"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with NVLD lead successful and fulfilling lives across all areas of society. Many excel in careers 
            that leverage their exceptional verbal abilities such as writing, teaching, law, counseling, and research.<sup>[19]</sup> 
            With appropriate support and self-understanding, people with NVLD develop effective strategies for navigating 
            visual-spatial and social challenges. Living well with NVLD involves understanding one's cognitive profile, 
            developing compensatory strategies and using assistive technology, accessing appropriate accommodations in 
            education and employment, and building confidence through verbal and language-based strengths.<sup>[20]</sup> Topics include 
            leveraging exceptional verbal abilities, managing visual-spatial challenges with technology, navigating social 
            relationships with explicit strategies, managing anxiety, self-advocacy skills, and understanding legal protections.
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Rourke, B. P. (1989). <em>Nonverbal Learning Disabilities: The Syndrome and the Model</em>. Guilford Press.</p>
          <p>[2] Mamen, M. (2007). <em>Understanding Nonverbal Learning Disabilities: A Common-Sense Guide for Parents and Professionals</em>. Jessica Kingsley Publishers.</p>
          <p>[3] Semrud-Clikeman, M., & Glass, K. (2010). "The relation of humor and child development: Social, adaptive, and emotional aspects." <em>Journal of Child Neurology</em>, 25(10), 1248-1260.</p>
          <p>[4] Pelletier, P. M., Ahmad, S. A., & Rourke, B. P. (2001). "Classification rules for basic phonological processing disabilities and nonverbal learning disabilities: Formulation and external validity." <em>Child Neuropsychology</em>, 7(2), 84-98.</p>
          <p>[5] Klin, A., Volkmar, F. R., Sparrow, S. S., et al. (1995). "Validity and neuropsychological characterization of Asperger syndrome: Convergence with nonverbal learning disabilities syndrome." <em>Journal of Child Psychology and Psychiatry</em>, 36(7), 1127-1140.</p>
          <p>[6] Cornoldi, C., Rigoni, F., Tressoldi, P. E., & Vio, C. (1999). "Imagery deficits in nonverbal learning disabilities." <em>Journal of Learning Disabilities</em>, 32(1), 48-57.</p>
          <p>[7] Rourke, B. P., & Tsatsanis, K. D. (2000). "Nonverbal learning disabilities and Asperger syndrome." In A. Klin et al. (Eds.), <em>Asperger Syndrome</em> (pp. 231-253). Guilford Press.</p>
          <p>[8] Bloom, E., & Heath, N. (2010). "Recognition, expression, and understanding facial expressions of emotion in adolescents with nonverbal and general learning disabilities." <em>Journal of Learning Disabilities</em>, 43(2), 180-192.</p>
          <p>[9] Drummond, C. R., Ahmad, S. A., & Rourke, B. P. (2005). "Rules for the classification of younger children with nonverbal learning disabilities and basic phonological processing disabilities." <em>Archives of Clinical Neuropsychology</em>, 20(2), 171-182.</p>
          <p>[10] Weintraub, S., & Mesulam, M. M. (1983). "Developmental learning disabilities of the right hemisphere: Emotional, interpersonal, and cognitive components." <em>Archives of Neurology</em>, 40(8), 463-468.</p>
          <p>[11] Fine, J. G., Semrud-Clikeman, M., Bledsoe, J. C., & Musielak, K. A. (2013). "A critical review of the literature on NLD as a developmental disorder." <em>Child Neuropsychology</em>, 19(2), 190-223.</p>
          <p>[12] Rourke, B. P., Ahmad, S. A., Collins, D. W., et al. (2002). "Child clinical/pediatric neuropsychology: Some recent advances." <em>Annual Review of Psychology</em>, 53, 309-339.</p>
          <p>[13] Forrest, B. J. (2004). "The utility of math difficulties, internalized psychopathology, and visual-spatial deficits to identify children with the nonverbal learning disability syndrome: Evidence for a visual-spatial disability." <em>Child Neuropsychology</em>, 10(2), 129-146.</p>
          <p>[14] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[15] Thompson, S. (1997). <em>The Source for Nonverbal Learning Disorders</em>. LinguiSystems.</p>
          <p>[16] Tanguay, P. B. (2002). <em>Nonverbal Learning Disabilities at School: Educating Students with NLD, Asperger Syndrome and Related Conditions</em>. Jessica Kingsley Publishers.</p>
          <p>[17] Palombo, J. (2006). <em>Nonverbal Learning Disabilities: A Clinical Perspective</em>. W. W. Norton & Company.</p>
          <p>[18] Davis, J. M., & Broitman, J. (2011). "Nonverbal learning disabilities in children: Bridging the gap between science and practice." <em>Springer Science & Business Media</em>.</p>
          <p>[19] Whitney, R. V. (2002). <em>Bridging the Gap: Raising a Child with Nonverbal Learning Disorder</em>. Perigee Books.</p>
          <p>[20] Stewart, K. (2002). <em>Helping a Child with Nonverbal Learning Disorder or Asperger's Disorder</em>. New Harbinger Publications.</p>
        </div>
      </section>
    </article>
  );
}