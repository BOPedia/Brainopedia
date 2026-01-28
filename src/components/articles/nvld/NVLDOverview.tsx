import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface NVLDOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function NVLDOverview({ setCurrentArticle }: NVLDOverviewProps) {
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
        NVLD: Overview
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Nonverbal Learning Disability (NVLD), also called Nonverbal Learning Disorder, is a neurodevelopmental 
            condition characterized by strengths in verbal abilities alongside significant challenges in visual-spatial 
            processing, motor skills, and social perception.<sup>[1]</sup> Despite strong language skills, individuals 
            with NVLD struggle with understanding nonverbal information and spatial relationships.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What is NVLD?</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXp6bGUlMjBzcGF0aWFsfGVufDF8fHx8MTY3NDUzNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Puzzle spatial"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Definition and Core Concept</h3>
          <p className="mb-4">
            NVLD represents a pattern of neuropsychological assets and deficits first comprehensively described 
            by Byron Rourke in the 1980s.<sup>[3]</sup> The condition involves a specific profile where verbal 
            skills are relatively intact or even advanced, while nonverbal abilities are significantly impaired.
          </p>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">The Verbal-Nonverbal Discrepancy</h3>
          <p className="mb-4">
            The hallmark of NVLD is a significant split between verbal and nonverbal abilities:<sup>[4]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Verbal strengths:</strong> Strong vocabulary, verbal memory, reading decoding</li>
            <li className="mb-2"><strong>Nonverbal weaknesses:</strong> Visual-spatial processing, motor coordination, social cues</li>
            <li className="mb-2"><strong>Discrepancy:</strong> Often 10+ point difference between Verbal IQ and Performance IQ</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Controversy and Recognition</h3>
          <p className="mb-4">
            NVLD is not currently recognized as an official diagnosis in the DSM-5 or ICD-11.<sup>[5]</sup> However, 
            it is widely used by neuropsychologists and educators to describe a specific pattern of learning difficulties. 
            Research is ongoing regarding its classification and diagnostic criteria.<sup>[6]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Features of NVLD</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Primary Deficits</h3>
          <p className="mb-4">
            According to Rourke's model, NVLD involves deficits in three main areas:<sup>[7]</sup>
          </p>

          <h4 className="font-bold mb-2">1. Visual-Spatial-Organizational</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Poor spatial perception and reasoning</li>
            <li className="mb-2">Difficulty with visual details and patterns<sup>[8]</sup></li>
            <li className="mb-2">Challenges organizing visual information</li>
            <li className="mb-2">Problems with spatial relationships and directions</li>
          </ul>

          <h4 className="font-bold mb-2">2. Motor and Psychomotor</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Poor fine and gross motor coordination</li>
            <li className="mb-2">Awkward or clumsy movements<sup>[9]</sup></li>
            <li className="mb-2">Difficulty with balance and bilateral coordination</li>
            <li className="mb-2">Challenges with handwriting and physical activities</li>
          </ul>

          <h4 className="font-bold mb-2">3. Social Perception</h4>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty reading facial expressions and body language<sup>[10]</sup></li>
            <li className="mb-2">Missing social cues and context</li>
            <li className="mb-2">Challenges understanding nonverbal communication</li>
            <li className="mb-2">Literal interpretation of language</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Strengths in NVLD</h2>
          
          <p className="mb-4">
            Individuals with NVLD typically have notable verbal strengths:<sup>[11]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Advanced vocabulary:</strong> Rich, sophisticated word knowledge</li>
            <li className="mb-2"><strong>Strong rote verbal memory:</strong> Excellent at memorizing verbal information</li>
            <li className="mb-2"><strong>Early reading skills:</strong> Often learn to read early and decode well<sup>[12]</sup></li>
            <li className="mb-2"><strong>Verbal reasoning:</strong> Good at verbal problem-solving</li>
            <li className="mb-2"><strong>Attention to detail:</strong> Notice verbal details and patterns</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNjc0NTM1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student learning"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Common is NVLD?</h3>
          <p className="mb-4">
            Prevalence estimates are difficult because NVLD is not an official diagnosis:<sup>[13]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Estimated to affect 1-3% of the general population</li>
            <li className="mb-2">May be underdiagnosed due to lack of official recognition</li>
            <li className="mb-2">Verbal strengths can mask difficulties in early years</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Gender Distribution</h3>
          <p className="mb-4">
            Unlike many neurodevelopmental conditions, NVLD appears to affect males and females relatively equally, 
            or may even be slightly more common in females.<sup>[14]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">NVLD vs. Other Conditions</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">NVLD vs. Autism Spectrum Disorder</h3>
          <p className="mb-4">
            NVLD and ASD share some similarities, particularly in social challenges:<sup>[15]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Similarities:</strong> Social difficulties, literal thinking, preference for routines</li>
            <li className="mb-2"><strong>Differences:</strong> NVLD lacks restricted interests and repetitive behaviors typical of ASD</li>
            <li className="mb-2"><strong>Overlap:</strong> Some individuals may meet criteria for both</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">NVLD vs. Dyslexia</h3>
          <p className="mb-4">
            NVLD is sometimes considered the "opposite" of dyslexia:<sup>[16]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Dyslexia:</strong> Verbal/language difficulties, visual-spatial strengths</li>
            <li className="mb-2"><strong>NVLD:</strong> Verbal/language strengths, visual-spatial difficulties</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">NVLD vs. ADHD</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Can co-occur with ADHD<sup>[17]</sup></li>
            <li className="mb-2">NVLD involves specific visual-spatial deficits not seen in ADHD alone</li>
            <li className="mb-2">Both may involve executive function challenges</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Impact Across the Lifespan</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Early Childhood</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Motor delays (walking, running, riding bike)</li>
            <li className="mb-2">Advanced verbal skills may mask other difficulties<sup>[18]</sup></li>
            <li className="mb-2">Difficulty with puzzles, building blocks, drawing</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School Years</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Struggles with math, especially visual-spatial aspects<sup>[19]</sup></li>
            <li className="mb-2">Handwriting difficulties</li>
            <li className="mb-2">Social isolation and friendship challenges</li>
            <li className="mb-2">Organizational difficulties increase as demands grow</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Adolescence and Adulthood</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Continued social challenges<sup>[20]</sup></li>
            <li className="mb-2">Anxiety and depression risk</li>
            <li className="mb-2">Difficulty with independent living skills (driving, navigation)</li>
            <li className="mb-2">Career challenges in visually-demanding fields</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
          
          <p className="mb-4">
            NVLD frequently occurs alongside other conditions:<sup>[21]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Anxiety disorders:</strong> Particularly social anxiety</li>
            <li className="mb-2"><strong>Depression:</strong> Due to social and academic struggles</li>
            <li className="mb-2"><strong>ADHD:</strong> Attention and executive function challenges</li>
            <li className="mb-2"><strong>Autism Spectrum Disorder:</strong> Overlapping features<sup>[22]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prognosis and Hope</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">With Appropriate Support:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Individuals with NVLD can succeed academically and professionally<sup>[23]</sup></li>
              <li>Verbal strengths can be leveraged in many careers</li>
              <li>Social skills can improve with explicit teaching</li>
              <li>Accommodations and assistive technology help compensate for weaknesses</li>
              <li>Early identification and intervention improve outcomes<sup>[24]</sup></li>
              <li>Many individuals with NVLD lead fulfilling, successful lives</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Rourke, B. P. (1989). <em>Nonverbal learning disabilities: The syndrome and the model</em>. New York: Guilford Press.</p>
          <p>[2] Rourke, B. P., & Tsatsanis, K. D. (2000). "Nonverbal learning disabilities and Asperger syndrome." In A. Klin, F. R. Volkmar, & S. S. Sparrow (Eds.), <em>Asperger syndrome</em> (pp. 231-253). New York: Guilford Press.</p>
          <p>[3] Rourke, B. P. (1989). <em>Nonverbal learning disabilities: The syndrome and the model</em>. New York: Guilford Press.</p>
          <p>[4] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities: Neurodevelopmental manifestations." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
          <p>[5] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[6] Mammarella, I. C., & Cornoldi, C. (2014). "An analysis of the criteria used to diagnose children with nonverbal learning disability (NLD)." <em>Child Neuropsychology</em>, 20(3), 255-280.</p>
          <p>[7] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[8] Drummond, C. R., Ahmad, S. A., & Rourke, B. P. (2005). "Rules for the classification of younger children with nonverbal learning disabilities and basic phonological processing disabilities." <em>Archives of Clinical Neuropsychology</em>, 20(2), 171-182.</p>
          <p>[9] Rourke, B. P., & Conway, J. A. (1997). "Disabilities of arithmetic and mathematical reasoning: Perspectives from neurology and neuropsychology." <em>Journal of Learning Disabilities</em>, 30(1), 34-46.</p>
          <p>[10] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[11] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[12] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[13] Mammarella, I. C., & Cornoldi, C. (2014). "An analysis of the criteria used to diagnose children with nonverbal learning disability." <em>Child Neuropsychology</em>, 20(3), 255-280.</p>
          <p>[14] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
          <p>[15] Klin, A., Volkmar, F. R., Sparrow, S. S., Cicchetti, D. V., & Rourke, B. P. (1995). "Validity and neuropsychological characterization of Asperger syndrome: Convergence with nonverbal learning disabilities syndrome." <em>Journal of Child Psychology and Psychiatry</em>, 36(7), 1127-1140.</p>
          <p>[16] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[17] Semrud-Clikeman, M. (2007). <em>Social competence in children</em>. New York: Springer.</p>
          <p>[18] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[19] Rourke, B. P., & Conway, J. A. (1997). "Disabilities of arithmetic and mathematical reasoning." <em>Journal of Learning Disabilities</em>, 30(1), 34-46.</p>
          <p>[20] Rourke, B. P., & Fuerst, D. R. (1991). <em>Learning disabilities and psychosocial functioning: A neuropsychological perspective</em>. New York: Guilford Press.</p>
          <p>[21] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[22] Klin, A., Volkmar, F. R., Sparrow, S. S., Cicchetti, D. V., & Rourke, B. P. (1995). "Validity and neuropsychological characterization of Asperger syndrome." <em>Journal of Child Psychology and Psychiatry</em>, 36(7), 1127-1140.</p>
          <p>[23] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school: Educating students with NLD, Asperger syndrome, and related conditions</em>. London: Jessica Kingsley Publishers.</p>
          <p>[24] Rourke, B. P. (2000). "Neuropsychological and psychosocial subtyping: A review of investigations within the University of Windsor laboratory." <em>Canadian Psychology</em>, 41(1), 34-51.</p>
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
