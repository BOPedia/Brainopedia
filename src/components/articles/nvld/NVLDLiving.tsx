import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface NVLDLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function NVLDLiving({ setCurrentArticle }: NVLDLivingProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('nvld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to NVLD
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Living with NVLD
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Living with NVLD involves navigating challenges in visual-spatial processing, motor skills, and social 
            interactions while leveraging strong verbal abilities.<sup>[1]</sup> With understanding, support, and 
            appropriate accommodations, individuals with NVLD can lead successful and fulfilling lives.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Life Challenges</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwd29ya2luZ3xlbnwxfHx8fDE2NzQ1MzUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Writing working"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Navigation and Spatial Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Getting lost:</strong> Difficulty with directions and navigation<sup>[3]</sup></li>
            <li className="mb-2"><strong>Driving:</strong> Challenges learning to drive and navigating</li>
            <li className="mb-2"><strong>Spatial organization:</strong> Organizing physical spaces</li>
            <li className="mb-2"><strong>Solutions:</strong> GPS apps, written directions, landmarks</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Motor and Physical Activities</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Clumsiness in daily activities<sup>[4]</sup></li>
            <li className="mb-2">Difficulty with sports and physical recreation</li>
            <li className="mb-2">Challenges with fine motor tasks (cooking, crafts)</li>
            <li className="mb-2">Solutions: Choose non-competitive physical activities, focus on enjoyment</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Navigation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Missing social cues in daily interactions<sup>[5]</sup></li>
            <li className="mb-2">Difficulty reading situations and contexts</li>
            <li className="mb-2">Misunderstanding nonverbal communication</li>
            <li className="mb-2">Solutions: Ask directly when unsure, find understanding friends</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Education Journey</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Elementary School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Verbal strengths shine:</strong> Reading decoding, vocabulary<sup>[6]</sup></li>
            <li className="mb-2"><strong>Challenges emerge:</strong> Handwriting, math, social difficulties</li>
            <li className="mb-2"><strong>Support needs:</strong> IEP or 504 plan with accommodations</li>
            <li className="mb-2"><strong>Building confidence:</strong> Focus on verbal strengths</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Increasing organizational demands<sup>[7]</sup></li>
            <li className="mb-2">Social challenges intensify as peer interactions become complex</li>
            <li className="mb-2">Math becomes more visual-spatial (geometry)</li>
            <li className="mb-2">Need for continued support and accommodations</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">High School</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Leverage verbal abilities in coursework<sup>[8]</sup></li>
            <li className="mb-2">Accommodate visual-spatial challenges</li>
            <li className="mb-2">College planning: Choose appropriate programs</li>
            <li className="mb-2">Transition planning for independence</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">College and Higher Education</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Disability services:</strong> Register early for accommodations<sup>[9]</sup></li>
            <li className="mb-2"><strong>Course selection:</strong> Minimize visual-spatial requirements</li>
            <li className="mb-2"><strong>Major choice:</strong> Fields emphasizing verbal abilities</li>
            <li className="mb-2"><strong>Campus navigation:</strong> Maps, orientation, planning routes</li>
            <li className="mb-2"><strong>Social support:</strong> Join clubs, find understanding peers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Career and Employment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Suitable Career Paths</h3>
          <p className="mb-4">
            Careers emphasizing verbal strengths and minimizing visual-spatial demands:<sup>[10]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Writing and journalism:</strong> Verbal expression, research, editing</li>
            <li className="mb-2"><strong>Law:</strong> Verbal reasoning, advocacy, legal writing<sup>[11]</sup></li>
            <li className="mb-2"><strong>Teaching:</strong> Verbal instruction, especially language arts, history</li>
            <li className="mb-2"><strong>Counseling/therapy:</strong> Verbal communication, helping others</li>
            <li className="mb-2"><strong>Business:</strong> Roles emphasizing communication over spatial tasks</li>
            <li className="mb-2"><strong>Academia:</strong> Research and teaching in verbal fields</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Workplace Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Written instructions and procedures<sup>[12]</sup></li>
            <li className="mb-2">Verbal clarification of visual materials</li>
            <li className="mb-2">Assistive technology (GPS, organizational apps)</li>
            <li className="mb-2">Flexible work arrangements</li>
            <li className="mb-2">Understanding supervisors and colleagues</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Disclosure Decisions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Optional to disclose NVLD to employers</li>
            <li className="mb-2">May be needed for requesting accommodations<sup>[13]</sup></li>
            <li className="mb-2">Consider job requirements and culture</li>
            <li className="mb-2">Protected under ADA when requesting accommodations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Relationships and Social Life</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNjc0NTM1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Friends together"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Friendships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Finding true friends:</strong> People who appreciate you for who you are<sup>[14]</sup></li>
            <li className="mb-2"><strong>Shared interests:</strong> Connect through common verbal interests</li>
            <li className="mb-2"><strong>Direct communication:</strong> Ask directly when missing social cues</li>
            <li className="mb-2"><strong>Quality over quantity:</strong> Few close friends may be more fulfilling</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Romantic Relationships</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Open communication about needs and challenges<sup>[15]</sup></li>
            <li className="mb-2">Partners who appreciate verbal connection</li>
            <li className="mb-2">Being explicit rather than relying on nonverbal cues</li>
            <li className="mb-2">Finding someone understanding and patient</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Dynamics</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Educating family members about NVLD<sup>[16]</sup></li>
            <li className="mb-2">Asking for support when needed</li>
            <li className="mb-2">Appreciating family understanding</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Independent Living Skills</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Daily Life Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Cooking:</strong> Follow written recipes step-by-step<sup>[17]</sup></li>
            <li className="mb-2"><strong>Organization:</strong> Use checklists, calendars, routines</li>
            <li className="mb-2"><strong>Money management:</strong> Budgeting apps, written budgets</li>
            <li className="mb-2"><strong>Time management:</strong> Alarms, schedules, visual timers</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Transportation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">GPS navigation for driving</li>
            <li className="mb-2">Public transportation with written routes<sup>[18]</sup></li>
            <li className="mb-2">Rideshare apps</li>
            <li className="mb-2">Planning routes in advance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Emotional Well-being</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mental Health Considerations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Anxiety:</strong> Common due to social and spatial challenges<sup>[19]</sup></li>
            <li className="mb-2"><strong>Depression:</strong> Risk increases in adolescence and adulthood</li>
            <li className="mb-2"><strong>Self-esteem:</strong> Building confidence through strengths<sup>[20]</sup></li>
            <li className="mb-2"><strong>Therapy:</strong> CBT and supportive counseling helpful</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Coping Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Recognize and celebrate verbal strengths</li>
            <li className="mb-2">Develop compensatory strategies</li>
            <li className="mb-2">Build supportive relationships<sup>[21]</sup></li>
            <li className="mb-2">Practice self-compassion</li>
            <li className="mb-2">Seek professional help when needed</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Leveraging Strengths</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Verbal Abilities as Assets</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Communication:</strong> Strong verbal expression<sup>[22]</sup></li>
            <li className="mb-2"><strong>Learning:</strong> Excel with verbal instruction</li>
            <li className="mb-2"><strong>Memory:</strong> Strong rote verbal memory</li>
            <li className="mb-2"><strong>Reading:</strong> Often avid readers with strong comprehension (with support)</li>
            <li className="mb-2"><strong>Writing:</strong> May excel in creative or analytical writing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Building on Interests</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Pursue verbal hobbies (book clubs, debate, theater)</li>
            <li className="mb-2">Develop expertise in areas of interest<sup>[23]</sup></li>
            <li className="mb-2">Use strengths to compensate for weaknesses</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Self-Advocacy</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Understanding Your Needs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Know your NVLD profile and challenges<sup>[24]</sup></li>
            <li className="mb-2">Identify effective accommodations and strategies</li>
            <li className="mb-2">Recognize when to ask for help</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Communicating Needs</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Use verbal strengths to advocate for yourself</li>
            <li className="mb-2">Educate others about NVLD when appropriate</li>
            <li className="mb-2">Request accommodations clearly and specifically</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Forward</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Keys to Success:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Understand your profile:</strong> Know strengths and challenges</li>
              <li><strong>Use accommodations:</strong> They level the playing field, not "cheating"</li>
              <li><strong>Leverage verbal strengths:</strong> Choose paths that emphasize these abilities<sup>[25]</sup></li>
              <li><strong>Develop compensatory strategies:</strong> Technology, routines, supports</li>
              <li><strong>Build supportive relationships:</strong> People who understand and accept you</li>
              <li><strong>Focus on what you CAN do:</strong> Not limitations</li>
              <li><strong>Be patient with yourself:</strong> Progress takes time<sup>[26]</sup></li>
              <li><strong>Seek support when needed:</strong> Therapy, coaching, accommodations</li>
              <li><strong>Remember:</strong> NVLD is one aspect of who you are, not your entire identity</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Hope and Success</h2>
          
          <p className="mb-4">
            Many individuals with NVLD lead successful, fulfilling lives. With understanding, support, appropriate 
            accommodations, and by leveraging verbal strengths, people with NVLD thrive in careers, relationships, 
            and personal pursuits. The challenges are real, but so are the strengths and possibilities.<sup>[27]</sup>
          </p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Rourke, B. P. (1989). <em>Nonverbal learning disabilities: The syndrome and the model</em>. New York: Guilford Press.</p>
          <p>[2] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[3] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[4] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities: Neurodevelopmental manifestations." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
          <p>[5] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[6] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[7] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school: Educating students with NLD, Asperger syndrome, and related conditions</em>. London: Jessica Kingsley Publishers.</p>
          <p>[8] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[9] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[10] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[11] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[12] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[13] Americans with Disabilities Act of 1990, 42 U.S.C. § 12101 et seq.</p>
          <p>[14] Semrud-Clikeman, M. (2007). <em>Social competence in children</em>. New York: Springer.</p>
          <p>[15] Rourke, B. P., & Fuerst, D. R. (1991). <em>Learning disabilities and psychosocial functioning: A neuropsychological perspective</em>. New York: Guilford Press.</p>
          <p>[16] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[17] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[18] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[19] Rourke, B. P., Young, G. C., & Leenaars, A. A. (1989). "A childhood learning disability that predisposes those afflicted to adolescent and adult depression and suicide risk." <em>Journal of Learning Disabilities</em>, 22(3), 169-175.</p>
          <p>[20] Rourke, B. P., Young, G. C., & Leenaars, A. A. (1989). "A childhood learning disability that predisposes those afflicted to adolescent and adult depression and suicide risk." <em>Journal of Learning Disabilities</em>, 22(3), 169-175.</p>
          <p>[21] Semrud-Clikeman, M. (2007). <em>Social competence in children</em>. New York: Springer.</p>
          <p>[22] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[23] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[24] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[25] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[26] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[27] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('nvld'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to NVLD
        </a>
      </div>
    </article>
  );
}
