import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface NVLDSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function NVLDSupport({ setCurrentArticle }: NVLDSupportProps) {
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
        NVLD: Support & Management
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Effective support for NVLD involves addressing visual-spatial, motor, social, and academic challenges 
            through targeted interventions, accommodations, and leveraging verbal strengths.<sup>[1]</sup> A multi-faceted 
            approach yields the best outcomes.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Interventions</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNjc0NTM1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student learning"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Teaching Strategies</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Verbal instruction:</strong> Explain concepts verbally, leveraging strengths<sup>[3]</sup></li>
            <li className="mb-2"><strong>Explicit teaching:</strong> Direct instruction rather than discovery learning</li>
            <li className="mb-2"><strong>Step-by-step breakdown:</strong> Break complex tasks into smaller steps<sup>[4]</sup></li>
            <li className="mb-2"><strong>Verbal mediation:</strong> Teach self-talk strategies for problem-solving</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mathematics Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Verbal explanations of mathematical concepts<sup>[5]</sup></li>
            <li className="mb-2">Graph paper for organizing calculations</li>
            <li className="mb-2">Calculator use for computation</li>
            <li className="mb-2">Extra time for visual-spatial math problems</li>
            <li className="mb-2">Minimize geometry requirements when possible</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Comprehension</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Explicit teaching of inferencing skills<sup>[6]</sup></li>
            <li className="mb-2">Graphic organizers to visualize text structure</li>
            <li className="mb-2">Pre-teaching vocabulary and concepts</li>
            <li className="mb-2">Questioning strategies to monitor comprehension</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Occupational Therapy</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fine Motor Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Handwriting interventions<sup>[7]</sup></li>
            <li className="mb-2">Adaptive pencil grips</li>
            <li className="mb-2">Activities to build hand strength and coordination</li>
            <li className="mb-2">Keyboarding instruction as alternative</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Motor Integration</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Visual-motor integration activities<sup>[8]</sup></li>
            <li className="mb-2">Spatial orientation exercises</li>
            <li className="mb-2">Practice with puzzles, construction tasks</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gross Motor Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Balance and coordination activities</li>
            <li className="mb-2">Bilateral coordination exercises</li>
            <li className="mb-2">Adaptive physical education when needed<sup>[9]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social Skills Training</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Explicit Social Skills Instruction</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Teaching nonverbal cues:</strong> Explicit instruction in reading facial expressions<sup>[10]</sup></li>
            <li className="mb-2"><strong>Body language:</strong> Understanding personal space, posture, gestures</li>
            <li className="mb-2"><strong>Social rules:</strong> Direct teaching of unwritten social rules<sup>[11]</sup></li>
            <li className="mb-2"><strong>Perspective-taking:</strong> Understanding others' points of view</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills Groups</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Structured groups with peers<sup>[12]</sup></li>
            <li className="mb-2">Practice in safe, supportive environment</li>
            <li className="mb-2">Feedback and coaching</li>
            <li className="mb-2">Generalization to natural settings</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pragmatic Language Therapy</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Speech-language therapy for social communication</li>
            <li className="mb-2">Understanding figurative language, idioms, sarcasm<sup>[13]</sup></li>
            <li className="mb-2">Conversational turn-taking</li>
            <li className="mb-2">Topic maintenance and shifts</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Classroom Accommodations</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tfGVufDF8fHx8MTY3NDUzNTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Teacher classroom"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Academic Accommodations</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Extended time:</strong> For tests and assignments<sup>[14]</sup></li>
            <li className="mb-2"><strong>Reduced copying:</strong> Provide handouts instead of board copying</li>
            <li className="mb-2"><strong>Verbal explanations:</strong> Explain visual materials verbally</li>
            <li className="mb-2"><strong>Calculator use:</strong> For computation in math</li>
            <li className="mb-2"><strong>Graph paper:</strong> For math organization</li>
            <li className="mb-2"><strong>Preferential seating:</strong> Near teacher, away from distractions<sup>[15]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organizational Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Color-coded folders and materials</li>
            <li className="mb-2">Written schedules and checklists<sup>[16]</sup></li>
            <li className="mb-2">Assignment notebooks or digital planners</li>
            <li className="mb-2">Extra set of books at home</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Note-Taking Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Teacher-provided notes or outlines</li>
            <li className="mb-2">Peer note-takers</li>
            <li className="mb-2">Audio recording lectures<sup>[17]</sup></li>
            <li className="mb-2">Laptops for note-taking</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Assistive Technology</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Writing Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Word processing:</strong> Typing instead of handwriting<sup>[18]</sup></li>
            <li className="mb-2"><strong>Speech-to-text:</strong> Dictation software</li>
            <li className="mb-2"><strong>Graphic organizers:</strong> Digital planning tools</li>
            <li className="mb-2"><strong>Spell-check and grammar-check:</strong> Writing supports</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization and Planning</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Digital calendars and planners</li>
            <li className="mb-2">Task management apps<sup>[19]</sup></li>
            <li className="mb-2">Timers and alarms for transitions</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Navigation and Spatial Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">GPS and mapping apps</li>
            <li className="mb-2">Visual schedules and maps</li>
            <li className="mb-2">Color-coding for locations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Counseling and Mental Health Support</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Individual Therapy</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Cognitive-behavioral therapy for anxiety<sup>[20]</sup></li>
            <li className="mb-2">Building self-esteem and resilience</li>
            <li className="mb-2">Coping strategies for frustration</li>
            <li className="mb-2">Social problem-solving</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Family Support</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Parent education about NVLD<sup>[21]</sup></li>
            <li className="mb-2">Family therapy when helpful</li>
            <li className="mb-2">Sibling support</li>
            <li className="mb-2">Connecting with support groups</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Daily Living Skills</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Self-Care Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Explicit instruction in daily routines<sup>[22]</sup></li>
            <li className="mb-2">Visual schedules and checklists</li>
            <li className="mb-2">Breaking tasks into steps</li>
            <li className="mb-2">Practice and repetition</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Safety Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Direct teaching of safety rules</li>
            <li className="mb-2">Navigation and directional skills</li>
            <li className="mb-2">Understanding social dangers</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Leveraging Strengths</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Building on Verbal Abilities:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Use verbal strengths:</strong> Verbal learning, discussion, audiobooks<sup>[23]</sup></li>
              <li><strong>Career paths:</strong> Verbal careers (writing, law, teaching, counseling)</li>
              <li><strong>Advocacy:</strong> Teach self-advocacy using verbal skills</li>
              <li><strong>Creativity:</strong> Writing, storytelling, verbal arts<sup>[24]</sup></li>
              <li><strong>Interests:</strong> Encourage areas of strength and passion</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Rourke, B. P. (1989). <em>Nonverbal learning disabilities: The syndrome and the model</em>. New York: Guilford Press.</p>
          <p>[2] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[3] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school: Educating students with NLD, Asperger syndrome, and related conditions</em>. London: Jessica Kingsley Publishers.</p>
          <p>[4] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[5] Rourke, B. P., & Conway, J. A. (1997). "Disabilities of arithmetic and mathematical reasoning: Perspectives from neurology and neuropsychology." <em>Journal of Learning Disabilities</em>, 30(1), 34-46.</p>
          <p>[6] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[7] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[8] Beery, K. E., & Beery, N. A. (2010). <em>The Beery-Buktenica developmental test of visual-motor integration</em>. Minneapolis, MN: Pearson.</p>
          <p>[9] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[10] Semrud-Clikeman, M. (2007). <em>Social competence in children</em>. New York: Springer.</p>
          <p>[11] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[12] Semrud-Clikeman, M. (2007). <em>Social competence in children</em>. New York: Springer.</p>
          <p>[13] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[14] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[15] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[16] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[17] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[18] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[19] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[20] Rourke, B. P., Young, G. C., & Leenaars, A. A. (1989). "A childhood learning disability that predisposes those afflicted to adolescent and adult depression and suicide risk." <em>Journal of Learning Disabilities</em>, 22(3), 169-175.</p>
          <p>[21] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[22] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[23] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[24] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
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
