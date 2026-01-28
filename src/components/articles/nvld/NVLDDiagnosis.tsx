import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface NVLDDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function NVLDDiagnosis({ setCurrentArticle }: NVLDDiagnosisProps) {
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
        NVLD: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Diagnosing NVLD presents unique challenges because it is not an official DSM-5 diagnosis.<sup>[1]</sup> 
            However, qualified professionals can identify the NVLD pattern through comprehensive neuropsychological 
            assessment focusing on the distinctive profile of verbal strengths and nonverbal weaknesses.<sup>[2]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Challenges</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">No Official Diagnosis</h3>
          <p className="mb-4">
            NVLD is not currently recognized in the DSM-5 or ICD-11:<sup>[3]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Widely used clinically despite lack of official status</li>
            <li className="mb-2">No standardized diagnostic criteria across professionals</li>
            <li className="mb-2">May be diagnosed under "Other Specified Learning Disorder" in DSM-5</li>
            <li className="mb-2">Research ongoing regarding classification<sup>[4]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Overlapping Conditions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Symptoms overlap with ASD, ADHD, DCD<sup>[5]</sup></li>
            <li className="mb-2">Verbal strengths may mask difficulties</li>
            <li className="mb-2">Comprehensive assessment needed for accurate identification</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Who Can Evaluate for NVLD?</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Qualified Professionals</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Neuropsychologists:</strong> Most qualified to identify NVLD pattern<sup>[6]</sup></li>
            <li className="mb-2"><strong>Clinical psychologists:</strong> With expertise in learning disabilities</li>
            <li className="mb-2"><strong>School psychologists:</strong> May identify pattern in educational settings</li>
            <li className="mb-2"><strong>Developmental pediatricians:</strong> In collaboration with psychologists</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Evaluation Process</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0JTIwYXNzZXNzbWVudHxlbnwxfHx8fDE2NzQ1MzUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Test assessment"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Background Information</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Developmental history (motor milestones, language development)<sup>[7]</sup></li>
            <li className="mb-2">Medical history (neurological conditions, injuries)</li>
            <li className="mb-2">Academic history (strengths and weaknesses)</li>
            <li className="mb-2">Social history (friendships, social challenges)</li>
            <li className="mb-2">Family history (learning disabilities, related conditions)</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Parent and Teacher Interviews</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Current concerns and difficulties</li>
            <li className="mb-2">Observations of social interactions</li>
            <li className="mb-2">Academic performance patterns<sup>[8]</sup></li>
            <li className="mb-2">Motor coordination and daily living skills</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cognitive and Intelligence Testing</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">IQ Assessment</h3>
          <p className="mb-4">
            The hallmark of NVLD is the VIQ-PIQ split:<sup>[9]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>WISC-V or WAIS-IV:</strong> Wechsler Intelligence Scales</li>
            <li className="mb-2"><strong>Verbal Comprehension Index:</strong> Typically average to above-average</li>
            <li className="mb-2"><strong>Visual-Spatial Index:</strong> Significantly lower than verbal</li>
            <li className="mb-2"><strong>Fluid Reasoning Index:</strong> May be lower, especially nonverbal tasks<sup>[10]</sup></li>
            <li className="mb-2"><strong>Processing Speed Index:</strong> Often lower</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Discrepancy Patterns</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Typically 10+ point difference between verbal and visual-spatial scores<sup>[11]</sup></li>
            <li className="mb-2">Greater discrepancy may indicate more significant NVLD</li>
            <li className="mb-2">Pattern more important than absolute scores</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Visual-Spatial and Motor Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Visual-Spatial Tests</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Rey-Osterrieth Complex Figure:</strong> Copy and recall complex design<sup>[12]</sup></li>
            <li className="mb-2"><strong>Beery VMI:</strong> Visual-Motor Integration test</li>
            <li className="mb-2"><strong>Judgment of Line Orientation:</strong> Spatial perception</li>
            <li className="mb-2"><strong>Block Design:</strong> From WISC/WAIS</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Motor Skills Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Grooved Pegboard:</strong> Fine motor dexterity and speed</li>
            <li className="mb-2"><strong>Finger Tapping Test:</strong> Motor speed<sup>[13]</sup></li>
            <li className="mb-2"><strong>Handwriting samples:</strong> Graphomotor skills</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Academic Achievement Testing</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Reading Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Decoding:</strong> Typically strong<sup>[14]</sup></li>
            <li className="mb-2"><strong>Reading comprehension:</strong> May decline with complex text</li>
            <li className="mb-2"><strong>Pattern:</strong> Decoding stronger than comprehension</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Mathematics Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Arithmetic:</strong> Computational difficulties<sup>[15]</sup></li>
            <li className="mb-2"><strong>Math reasoning:</strong> Especially visual-spatial problems</li>
            <li className="mb-2"><strong>Geometry:</strong> Significant challenges</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Written Expression</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Handwriting difficulties due to motor and spatial issues</li>
            <li className="mb-2">Organization challenges in written work<sup>[16]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Social-Emotional Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills Evaluation</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Difficulty reading facial expressions and social cues<sup>[17]</sup></li>
            <li className="mb-2">Challenges with pragmatic language (social use of language)</li>
            <li className="mb-2">Problems with perspective-taking</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Emotional Functioning</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Assessment for anxiety and depression<sup>[18]</sup></li>
            <li className="mb-2">Behavioral rating scales from parents and teachers</li>
            <li className="mb-2">Self-report measures (for older children/adolescents)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Differential Diagnosis</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNjc0NTM1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Student learning"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Distinguishing from Other Conditions</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Autism Spectrum Disorder:</strong> NVLD lacks restricted interests and repetitive behaviors<sup>[19]</sup></li>
            <li className="mb-2"><strong>ADHD:</strong> NVLD has specific visual-spatial deficits</li>
            <li className="mb-2"><strong>Dyslexia:</strong> Opposite pattern (reading vs. visual-spatial)</li>
            <li className="mb-2"><strong>DCD:</strong> NVLD includes broader cognitive and social deficits</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Rourke's Diagnostic Guidelines</h3>
          <p className="mb-4">
            Based on Rourke's work, NVLD typically includes:<sup>[20]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Bilateral tactile-perceptual deficits (right worse than left)</li>
            <li className="mb-2">Bilateral psychomotor coordination deficits (right worse than left)</li>
            <li className="mb-2">Visual-spatial-organizational deficits</li>
            <li className="mb-2">Difficulty with novel or complex situations</li>
            <li className="mb-2">Deficits in nonverbal problem-solving</li>
            <li className="mb-2">Well-developed rote verbal skills</li>
            <li className="mb-2">Verbosity</li>
            <li className="mb-2">Social interaction deficits</li>
            <li className="mb-2">Academic difficulties, especially in mathematics</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evaluation Report</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Components</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Background information and reason for referral</li>
            <li className="mb-2">Tests administered and behavioral observations</li>
            <li className="mb-2">Test results and interpretations<sup>[21]</sup></li>
            <li className="mb-2">Summary and diagnostic impressions</li>
            <li className="mb-2">Detailed recommendations for support</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Classification</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Based Services</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">May qualify under "Specific Learning Disability" (SLD)<sup>[22]</sup></li>
            <li className="mb-2">Or "Other Health Impairment" (OHI) in some cases</li>
            <li className="mb-2">504 Plan if doesn't qualify for IEP</li>
            <li className="mb-2">Accommodations based on identified needs</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Important Considerations</h2>
          
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Points:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Comprehensive neuropsychological evaluation essential<sup>[23]</sup></li>
              <li>Look for pattern across multiple areas, not isolated deficits</li>
              <li>VIQ-PIQ discrepancy important but not the only factor</li>
              <li>Early identification allows earlier intervention</li>
              <li>Diagnosis provides framework for understanding and support<sup>[24]</sup></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[2] Rourke, B. P. (1989). <em>Nonverbal learning disabilities: The syndrome and the model</em>. New York: Guilford Press.</p>
          <p>[3] Mammarella, I. C., & Cornoldi, C. (2014). "An analysis of the criteria used to diagnose children with nonverbal learning disability (NLD)." <em>Child Neuropsychology</em>, 20(3), 255-280.</p>
          <p>[4] Fine, J. G., Semrud-Clikeman, M., Bledsoe, J. C., & Musielak, K. A. (2013). "A critical review of the literature on NLD as a developmental disorder." <em>Child Neuropsychology</em>, 19(2), 190-223.</p>
          <p>[5] Klin, A., Volkmar, F. R., Sparrow, S. S., Cicchetti, D. V., & Rourke, B. P. (1995). "Validity and neuropsychological characterization of Asperger syndrome: Convergence with nonverbal learning disabilities syndrome." <em>Journal of Child Psychology and Psychiatry</em>, 36(7), 1127-1140.</p>
          <p>[6] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[7] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[8] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school: Educating students with NLD, Asperger syndrome, and related conditions</em>. London: Jessica Kingsley Publishers.</p>
          <p>[9] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities: Neurodevelopmental manifestations." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
          <p>[10] Wechsler, D. (2014). <em>Wechsler Intelligence Scale for Children</em> (5th ed.). San Antonio, TX: Pearson.</p>
          <p>[11] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[12] Meyers, J. E., & Meyers, K. R. (1995). <em>Rey Complex Figure Test and Recognition Trial</em>. Odessa, FL: Psychological Assessment Resources.</p>
          <p>[13] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[14] Rourke, B. P. (1995). "Syndrome of nonverbal learning disabilities." <em>Clinical Child and Family Psychology Review</em>, 1(4), 209-234.</p>
          <p>[15] Rourke, B. P., & Conway, J. A. (1997). "Disabilities of arithmetic and mathematical reasoning: Perspectives from neurology and neuropsychology." <em>Journal of Learning Disabilities</em>, 30(1), 34-46.</p>
          <p>[16] Thompson, S. (1997). <em>The source for nonverbal learning disorders</em>. East Moline, IL: LinguiSystems.</p>
          <p>[17] Semrud-Clikeman, M., & Hynd, G. W. (1990). "Right hemispheric dysfunction in nonverbal learning disabilities: Social, academic, and adaptive functioning in adults and children." <em>Psychological Bulletin</em>, 107(2), 196-209.</p>
          <p>[18] Rourke, B. P., Young, G. C., & Leenaars, A. A. (1989). "A childhood learning disability that predisposes those afflicted to adolescent and adult depression and suicide risk." <em>Journal of Learning Disabilities</em>, 22(3), 169-175.</p>
          <p>[19] Klin, A., Volkmar, F. R., Sparrow, S. S., Cicchetti, D. V., & Rourke, B. P. (1995). "Validity and neuropsychological characterization of Asperger syndrome." <em>Journal of Child Psychology and Psychiatry</em>, 36(7), 1127-1140.</p>
          <p>[20] Rourke, B. P. (1989). <em>Nonverbal learning disabilities</em>. New York: Guilford Press.</p>
          <p>[21] Tanguay, P. B. (2002). <em>Nonverbal learning disabilities at school</em>. London: Jessica Kingsley Publishers.</p>
          <p>[22] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[23] Rourke, B. P. (2000). "Neuropsychological and psychosocial subtyping: A review of investigations within the University of Windsor laboratory." <em>Canadian Psychology</em>, 41(1), 34-51.</p>
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
