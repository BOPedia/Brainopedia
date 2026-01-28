import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface NVLDSymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function NVLDSymptoms({ setCurrentArticle }: NVLDSymptomsProps) {
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
        NVLD: Symptoms & Characteristics
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Nonverbal Learning Disability presents with a distinctive pattern of symptoms characterized by strong 
            verbal abilities alongside significant deficits in visual-spatial, motor, and social domains.<sup>[1]</sup> 
            The constellation of symptoms typically becomes more apparent as academic and social demands increase.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual-Spatial Deficits</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXp6bGUlMjBzcGF0aWFsfGVufDF8fHx8MTY3NDUzNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Puzzle spatial"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Spatial Perception Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Poor spatial awareness:</strong> Difficulty judging distances and spatial relationships<sup>[3]</sup></li>
            <li className="mb-2"><strong>Navigation problems:</strong> Getting lost easily, poor sense of direction</li>
            <li className="mb-2"><strong>Visual details:</strong> Missing visual details or patterns</li>
            <li className="mb-2"><strong>Part-whole relationships:</strong> Difficulty seeing how parts fit into wholes<sup>[4]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Motor Integration</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty copying shapes and designs</li>
            <li className="mb-2">Poor performance on puzzles and building tasks<sup>[5]</sup></li>
            <li className="mb-2">Challenges with mazes and dot-to-dot activities</li>
            <li className="mb-2">Trouble with hands-on construction and assembly</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual Organization</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty organizing visual information on a page</li>
            <li className="mb-2">Poor spatial organization of written work<sup>[6]</sup></li>
            <li className="mb-2">Trouble with visual scanning and tracking</li>
            <li className="mb-2">Challenges interpreting graphs, charts, and diagrams</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Motor Coordination Difficulties</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gross Motor Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Clumsiness:</strong> Frequent tripping, bumping into things<sup>[7]</sup></li>
            <li className="mb-2"><strong>Balance problems:</strong> Difficulty with activities requiring balance</li>
            <li className="mb-2"><strong>Bilateral coordination:</strong> Trouble coordinating both sides of body</li>
            <li className="mb-2"><strong>Sports challenges:</strong> Difficulty with team sports and physical activities<sup>[8]</sup></li>
            <li className="mb-2"><strong>Motor milestones:</strong> Delayed walking, running, or bike riding</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Fine Motor Skills</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Poor handwriting despite adequate instruction<sup>[9]</sup></li>
            <li className="mb-2">Difficulty with buttoning, zipping, tying shoes</li>
            <li className="mb-2">Challenges with scissors, coloring within lines</li>
            <li className="mb-2">Trouble with manipulating small objects</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Graphomotor Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Inconsistent letter formation and sizing</li>
            <li className="mb-2">Poor spatial organization on paper<sup>[10]</sup></li>
            <li className="mb-2">Difficulty staying on lines</li>
            <li className="mb-2">Slow, labored handwriting</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social and Emotional Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Nonverbal Communication Deficits</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Reading facial expressions:</strong> Difficulty interpreting emotional expressions<sup>[11]</sup></li>
            <li className="mb-2"><strong>Body language:</strong> Missing nonverbal social cues</li>
            <li className="mb-2"><strong>Personal space:</strong> Standing too close or too far from others</li>
            <li className="mb-2"><strong>Eye contact:</strong> Inappropriate or inconsistent eye contact<sup>[12]</sup></li>
            <li className="mb-2"><strong>Gestures:</strong> Limited use of or misunderstanding of gestures</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Interaction Challenges</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty making and keeping friends<sup>[13]</sup></li>
            <li className="mb-2">Missing subtle social cues and context</li>
            <li className="mb-2">Literal interpretation of language (missing sarcasm, idioms)</li>
            <li className="mb-2">Talking "too much" or dominating conversations</li>
            <li className="mb-2">Difficulty with social timing and turn-taking<sup>[14]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Emotional Regulation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Anxiety, especially in social or novel situations<sup>[15]</sup></li>
            <li className="mb-2">Difficulty coping with change or transitions</li>
            <li className="mb-2">Low frustration tolerance</li>
            <li className="mb-2">Risk for depression, particularly in adolescence<sup>[16]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Academic Symptoms</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwcHJvYmxlbXxlbnwxfHx8fDE2NzQ1MzUxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Math problem"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mathematics Difficulties</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Visual-spatial aspects:</strong> Difficulty with geometry, measurement, graphing<sup>[17]</sup></li>
            <li className="mb-2"><strong>Place value:</strong> Trouble understanding spatial aspects of numbers</li>
            <li className="mb-2"><strong>Calculation errors:</strong> Misaligning numbers in columns</li>
            <li className="mb-2"><strong>Word problems:</strong> Difficulty visualizing problems (despite good reading)<sup>[18]</sup></li>
            <li className="mb-2"><strong>Math facts:</strong> May struggle despite strong verbal memory</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Comprehension</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Decoding vs. comprehension split:</strong> Can decode words but miss meaning<sup>[19]</sup></li>
            <li className="mb-2"><strong>Inferencing:</strong> Difficulty making inferences and reading between lines</li>
            <li className="mb-2"><strong>Main idea:</strong> Trouble identifying central themes</li>
            <li className="mb-2"><strong>Novel information:</strong> Challenges with new or complex material</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Written Expression</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty organizing thoughts on paper<sup>[20]</sup></li>
            <li className="mb-2">Poor handwriting affecting output</li>
            <li className="mb-2">Verbose but disorganized writing</li>
            <li className="mb-2">Trouble with visual layout and spacing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Science and Other Subjects</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty with diagrams, charts, and visual representations</li>
            <li className="mb-2">Challenges with hands-on experiments and labs<sup>[21]</sup></li>
            <li className="mb-2">Trouble with maps in geography</li>
            <li className="mb-2">Difficulty in art class with spatial and motor demands</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Executive Function Symptoms</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Organization and Planning</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Poor organizational skills<sup>[22]</sup></li>
            <li className="mb-2">Difficulty planning and executing multi-step tasks</li>
            <li className="mb-2">Trouble with time management</li>
            <li className="mb-2">Disorganized backpack, desk, locker, room</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Flexibility and Problem-Solving</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty adapting to new situations<sup>[23]</sup></li>
            <li className="mb-2">Rigid thinking patterns</li>
            <li className="mb-2">Trouble problem-solving in novel situations</li>
            <li className="mb-2">Preference for routines and predictability</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Verbal Strengths</h2>
          
          <p className="mb-4">
            While these are strengths, they can sometimes create their own challenges:<sup>[24]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Advanced vocabulary:</strong> May seem "too adult" or pedantic</li>
            <li className="mb-2"><strong>Rote verbal memory:</strong> Can memorize and recite facts extensively</li>
            <li className="mb-2"><strong>Early reading:</strong> Often learn to read early and read fluently</li>
            <li className="mb-2"><strong>Verbal expression:</strong> Articulate when speaking about interests</li>
            <li className="mb-2"><strong>Attention to detail:</strong> Notice and remember verbal details</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Developmental Progression</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Preschool and Early Elementary</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Motor delays more apparent than academic issues<sup>[25]</sup></li>
            <li className="mb-2">Advanced verbal skills may mask difficulties</li>
            <li className="mb-2">Avoidance of physical activities</li>
            <li className="mb-2">Difficulty with coloring, cutting, drawing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Upper Elementary</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Math difficulties become more evident</li>
            <li className="mb-2">Social challenges increase as peer interactions become more complex</li>
            <li className="mb-2">Organizational demands exceed abilities<sup>[26]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Middle School and Beyond</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Reading comprehension gaps widen</li>
            <li className="mb-2">Social isolation may increase</li>
            <li className="mb-2">Risk for anxiety and depression<sup>[27]</sup></li>
            <li className="mb-2">Challenges with independence and self-care skills</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Distinguishing Features</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Diagnostic Indicators:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>VIQ-PIQ discrepancy:</strong> Significant gap between verbal and performance IQ scores<sup>[28]</sup></li>
              <li><strong>Verbal strengths:</strong> Advanced language skills, early reading</li>
              <li><strong>Visual-spatial weaknesses:</strong> Poor spatial reasoning and visual processing</li>
              <li><strong>Motor difficulties:</strong> Fine and gross motor coordination challenges</li>
              <li><strong>Social deficits:</strong> Difficulty reading nonverbal cues</li>
              <li><strong>Academic pattern:</strong> Struggles with math, especially visual-spatial aspects</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Rourke, B. P. (1989). <em>Nonverbal learning disabilities: The syndrome and the model</em>. New York: Guilford Press.</p>
          <p>[2] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities: Neurodevelopmental manifestations." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
          <p>[3] Rourke, B. P., & Conway, J. A. (1997). "Disabilities of arithmetic and mathematical reasoning: Perspectives from neurology and neuropsychology." <em>Journal of Learning Disabilities</em>, 30(1), 34-46.</p>
          <p>[4] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[5] Drummond, C. R., Ahmad, S. A., & Rourke, B. P. (2005). "Rules for the classification of younger children with nonverbal learning disabilities." <em>Archives of Clinical Neuropsychology</em>, 20(2), 171-182.</p>
          <p>[6] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[7] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[8] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[9] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
          <p>[10] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[11] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[12] Rourke, B. P., & Fuerst, D. R. (1991). <em>Learning disabilities and psychosocial functioning: A neuropsychological perspective</em>. New York: Guilford Press.</p>
          <p>[13] Semrud-Clikeman, M. (2007). <em>Social competence in children</em>. New York: Springer.</p>
          <p>[14] Rourke, B. P., & Fuerst, D. R. (1991). <em>Learning disabilities and psychosocial functioning</em>. New York: Guilford Press.</p>
          <p>[15] Rourke, B. P., Young, G. C., & Leenaars, A. A. (1989). "A childhood learning disability that predisposes those afflicted to adolescent and adult depression and suicide risk." <em>Journal of Learning Disabilities</em>, 22(3), 169-175.</p>
          <p>[16] Rourke, B. P., Young, G. C., & Leenaars, A. A. (1989). "A childhood learning disability that predisposes those afflicted to adolescent and adult depression and suicide risk." <em>Journal of Learning Disabilities</em>, 22(3), 169-175.</p>
          <p>[17] Rourke, B. P., & Conway, J. A. (1997). "Disabilities of arithmetic and mathematical reasoning." <em>Journal of Learning Disabilities</em>, 30(1), 34-46.</p>
          <p>[18] Rourke, B. P. (1993). "Arithmetic disabilities, specific and otherwise: A neuropsychological perspective." <em>Journal of Learning Disabilities</em>, 26(4), 214-226.</p>
          <p>[19] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[20] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[21] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school: Educating students with NLD, Asperger syndrome, and related conditions</em>. London: Jessica Kingsley Publishers.</p>
          <p>[22] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[23] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[24] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[25] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[26] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[27] Rourke, B. P., Young, G. C., & Leenaars, A. A. (1989). "A childhood learning disability that predisposes those afflicted to adolescent and adult depression and suicide risk." <em>Journal of Learning Disabilities</em>, 22(3), 169-175.</p>
          <p>[28] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
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
