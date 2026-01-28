import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface DyscalculiaDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function DyscalculiaDiagnosis({ setCurrentArticle }: DyscalculiaDiagnosisProps) {
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
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyscalculia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyscalculia
        </a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Dyscalculia: Testing & Diagnosing
      </h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">
            Accurate diagnosis of dyscalculia requires comprehensive assessment by qualified professionals.<sup>[1]</sup> 
            Early identification is critical, as intervention is most effective when started young.<sup>[2]</sup> However, 
            diagnosis at any age can provide valuable insights and access to appropriate support.
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">When to Seek Evaluation</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1754304342295-6094fe41e60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NzQ1MjMwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Math education"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Red Flags for Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Performance more than one year below grade level in mathematics<sup>[3]</sup></li>
            <li className="mb-2">Significant discrepancy between math ability and other academic areas</li>
            <li className="mb-2">Persistent difficulty despite quality instruction and intervention<sup>[4]</sup></li>
            <li className="mb-2">Extreme math anxiety or avoidance behaviors</li>
            <li className="mb-2">Continued use of immature counting strategies (finger counting past age 8-9)<sup>[5]</sup></li>
            <li className="mb-2">Family history of math learning difficulties</li>
            <li className="mb-2">Co-occurring learning disabilities (dyslexia, ADHD)<sup>[6]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Diagnostic Criteria</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">DSM-5 Criteria for Specific Learning Disorder with Impairment in Mathematics</h3>
          <p className="mb-4">
            The Diagnostic and Statistical Manual of Mental Disorders (5th edition) includes dyscalculia under Specific 
            Learning Disorder:<sup>[7]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Criterion A:</strong> Difficulties learning and using academic skills for at least 6 months despite interventions<sup>[8]</sup></li>
            <li className="mb-2"><strong>Mathematical reasoning:</strong> Difficulty with number sense, number facts, or calculation</li>
            <li className="mb-2"><strong>Mathematical problem solving:</strong> Trouble with quantitative reasoning</li>
            <li className="mb-2"><strong>Criterion B:</strong> Skills substantially below expected for chronological age<sup>[9]</sup></li>
            <li className="mb-2"><strong>Criterion C:</strong> Difficulties begin during school years</li>
            <li className="mb-2"><strong>Criterion D:</strong> Not better explained by other factors (intellectual disability, vision/hearing problems, inadequate instruction)<sup>[10]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">ICD-11 Classification</h3>
          <p className="mb-4">
            The World Health Organization's International Classification of Diseases (11th revision) classifies dyscalculia 
            as "Developmental learning disorder with impairment in mathematics."<sup>[11]</sup>
          </p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Who Can Diagnose Dyscalculia?</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Qualified Professionals</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Educational psychologists:</strong> Specialized training in learning disabilities<sup>[12]</sup></li>
            <li className="mb-2"><strong>School psychologists:</strong> Conduct assessments within educational settings</li>
            <li className="mb-2"><strong>Clinical psychologists:</strong> Licensed psychologists with expertise in cognitive assessment<sup>[13]</sup></li>
            <li className="mb-2"><strong>Neuropsychologists:</strong> Specialists in brain-behavior relationships</li>
            <li className="mb-2"><strong>Learning disability specialists:</strong> Trained in identifying specific learning disorders<sup>[14]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Multi-Disciplinary Team Approach</h3>
          <p className="mb-4">
            Comprehensive assessment often involves:<sup>[15]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Psychologist for cognitive and achievement testing</li>
            <li className="mb-2">Special education teacher for educational assessment</li>
            <li className="mb-2">Parents/caregivers providing developmental history<sup>[16]</sup></li>
            <li className="mb-2">Regular classroom teacher reporting on classroom performance</li>
            <li className="mb-2">Medical professionals ruling out other conditions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Components of a Comprehensive Assessment</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">1. Background Information and History</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Developmental history:</strong> Milestones, early number development<sup>[17]</sup></li>
            <li className="mb-2"><strong>Educational history:</strong> Academic performance, previous interventions</li>
            <li className="mb-2"><strong>Family history:</strong> Learning difficulties in family members<sup>[18]</sup></li>
            <li className="mb-2"><strong>Medical history:</strong> Relevant health conditions, medications</li>
            <li className="mb-2"><strong>Social-emotional functioning:</strong> Math anxiety, self-esteem<sup>[19]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">2. Cognitive Assessment</h3>
          <p className="mb-4">
            Standardized intelligence tests to rule out intellectual disability and identify cognitive strengths/weaknesses:<sup>[20]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>WISC-V:</strong> Wechsler Intelligence Scale for Children<sup>[21]</sup></li>
            <li className="mb-2"><strong>WAIS-IV:</strong> Wechsler Adult Intelligence Scale</li>
            <li className="mb-2"><strong>Stanford-Binet 5:</strong> Comprehensive cognitive assessment<sup>[22]</sup></li>
            <li className="mb-2"><strong>Key areas assessed:</strong> Verbal reasoning, visuospatial processing, working memory, processing speed</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">3. Mathematical Achievement Tests</h3>
          <p className="mb-4">
            Standardized tests measuring mathematical knowledge and skills:<sup>[23]</sup>
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>WIAT-III:</strong> Wechsler Individual Achievement Test (Math Problem Solving, Numerical Operations)<sup>[24]</sup></li>
            <li className="mb-2"><strong>KeyMath-3:</strong> Diagnostic assessment of mathematical understanding<sup>[25]</sup></li>
            <li className="mb-2"><strong>TEMA-3:</strong> Test of Early Mathematics Ability (ages 3-8)</li>
            <li className="mb-2"><strong>WJ-IV:</strong> Woodcock-Johnson Tests of Achievement (Math sections)<sup>[26]</sup></li>
            <li className="mb-2"><strong>KTEA-3:</strong> Kaufman Test of Educational Achievement</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">4. Number Sense and Magnitude Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Number comparison tasks:</strong> Which number is larger?<sup>[27]</sup></li>
            <li className="mb-2"><strong>Number line estimation:</strong> Where does this number go on the line?</li>
            <li className="mb-2"><strong>Approximate arithmetic:</strong> Estimate the answer<sup>[28]</sup></li>
            <li className="mb-2"><strong>Subitizing tasks:</strong> Quick quantity recognition</li>
            <li className="mb-2"><strong>Magnitude comparison of non-symbolic quantities:</strong> Comparing dot arrays<sup>[29]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">5. Specific Mathematical Skills Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Counting:</strong> Forward, backward, skip counting<sup>[30]</sup></li>
            <li className="mb-2"><strong>Arithmetic facts:</strong> Addition, subtraction, multiplication, division retrieval</li>
            <li className="mb-2"><strong>Calculation procedures:</strong> Multi-digit operations, algorithms<sup>[31]</sup></li>
            <li className="mb-2"><strong>Word problems:</strong> Mathematical reasoning and problem-solving</li>
            <li className="mb-2"><strong>Fractions and decimals:</strong> Understanding of rational numbers<sup>[32]</sup></li>
            <li className="mb-2"><strong>Measurement and geometry:</strong> Spatial-mathematical skills</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">6. Working Memory Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Verbal working memory:</strong> Digit span, letter-number sequencing<sup>[33]</sup></li>
            <li className="mb-2"><strong>Visuospatial working memory:</strong> Spatial span, visual memory</li>
            <li className="mb-2"><strong>Working memory subtests:</strong> From WISC-V or WAIS-IV<sup>[34]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">7. Processing Speed</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Rapid automatized naming of numbers<sup>[35]</sup></li>
            <li className="mb-2">Timed arithmetic fact fluency measures</li>
            <li className="mb-2">Processing speed subtests from cognitive batteries<sup>[36]</sup></li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">8. Additional Cognitive Assessments</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Executive function:</strong> Planning, inhibition, cognitive flexibility<sup>[37]</sup></li>
            <li className="mb-2"><strong>Attention:</strong> Sustained and selective attention</li>
            <li className="mb-2"><strong>Visual-spatial skills:</strong> Spatial reasoning abilities<sup>[38]</sup></li>
            <li className="mb-2"><strong>Language skills:</strong> To assess for language-based difficulties</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Observations and Qualitative Assessment</h2>
          
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Strategy use:</strong> How does the student approach mathematical problems?<sup>[39]</sup></li>
            <li className="mb-2"><strong>Error patterns:</strong> What types of mistakes are made?</li>
            <li className="mb-2"><strong>Metacognition:</strong> Awareness of own thinking and problem-solving<sup>[40]</sup></li>
            <li className="mb-2"><strong>Response to instruction:</strong> How does student learn when taught?</li>
            <li className="mb-2"><strong>Behavioral observations:</strong> Anxiety, frustration, avoidance<sup>[41]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Differential Diagnosis</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Conditions to Rule Out or Consider</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Intellectual disability:</strong> Low cognitive ability across domains<sup>[42]</sup></li>
            <li className="mb-2"><strong>Inadequate instruction:</strong> Math difficulties due to poor teaching</li>
            <li className="mb-2"><strong>Math anxiety:</strong> Performance impaired by anxiety but skills intact<sup>[43]</sup></li>
            <li className="mb-2"><strong>ADHD:</strong> Attention difficulties affecting math performance</li>
            <li className="mb-2"><strong>Working memory disorder:</strong> General memory problems<sup>[44]</sup></li>
            <li className="mb-2"><strong>Language disorders:</strong> Difficulty with word problems due to language</li>
            <li className="mb-2"><strong>Sensory impairments:</strong> Vision or hearing problems affecting learning<sup>[45]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Assessment Report</h2>
          
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1754304342484-3256d59778e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoJTIwbnVtYmVycyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NzQ1MjMwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Math numbers learning"
            className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4"
          />
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Components of a Comprehensive Report</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Background information:</strong> Reason for referral, history<sup>[46]</sup></li>
            <li className="mb-2"><strong>Test results:</strong> Scores from all assessments with interpretation</li>
            <li className="mb-2"><strong>Diagnosis:</strong> Clear statement of findings<sup>[47]</sup></li>
            <li className="mb-2"><strong>Strengths and weaknesses:</strong> Student's cognitive and academic profile</li>
            <li className="mb-2"><strong>Recommendations:</strong> Interventions, accommodations, educational planning<sup>[48]</sup></li>
            <li className="mb-2"><strong>Summary:</strong> Clear explanation for parents and educators</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Cost and Access</h2>
          
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">School-Based Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Free to families:</strong> Schools must evaluate if suspected disability<sup>[49]</sup></li>
            <li className="mb-2"><strong>Request in writing:</strong> Parent can request evaluation</li>
            <li className="mb-2"><strong>Timeline:</strong> Must be completed within 60 days in most states<sup>[50]</sup></li>
            <li className="mb-2"><strong>Purpose:</strong> Determine eligibility for special education services</li>
          </ul>

          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Private Assessment</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Cost:</strong> $1,500-$4,000+ depending on comprehensiveness<sup>[51]</sup></li>
            <li className="mb-2"><strong>Advantages:</strong> More detailed, faster timeline, independent opinion</li>
            <li className="mb-2"><strong>Insurance:</strong> Sometimes partially covered under mental health benefits<sup>[52]</sup></li>
            <li className="mb-2"><strong>Schools must consider:</strong> Results from independent evaluations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">After Diagnosis: Next Steps</h2>
          
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Educational planning:</strong> IEP or 504 Plan development<sup>[53]</sup></li>
            <li className="mb-2"><strong>Intervention:</strong> Begin evidence-based math intervention</li>
            <li className="mb-2"><strong>Accommodations:</strong> Implement recommended supports<sup>[54]</sup></li>
            <li className="mb-2"><strong>Parent education:</strong> Understanding dyscalculia and how to support</li>
            <li className="mb-2"><strong>Student education:</strong> Helping student understand their learning profile<sup>[55]</sup></li>
            <li className="mb-2"><strong>Progress monitoring:</strong> Regular assessment of intervention effectiveness</li>
            <li className="mb-2"><strong>Reassessment:</strong> Periodic re-evaluation as needed<sup>[56]</sup></li>
          </ul>

          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6 mt-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Remember:</h3>
            <div className="text-sm">
              <p>
                Diagnosis is not a label to limit potential—it's a tool for understanding, accessing support, and 
                developing effective strategies. With appropriate intervention and accommodations, individuals with 
                dyscalculia can succeed in mathematics and pursue any career path.<sup>[57]</sup>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[2] Bryant, D. P., Bryant, B. R., Gersten, R., Scammacca, N., & Chavez, M. M. (2008). "Mathematics intervention for first-and second-grade students with mathematics difficulties." <em>Remedial and Special Education</em>, 29(1), 20-32.</p>
          <p>[3] Mazzocco, M. M., & Myers, G. F. (2003). "Complexities in identifying and defining mathematics learning disability in the primary school-age years." <em>Annals of Dyslexia</em>, 53(1), 218-253.</p>
          <p>[4] Fuchs, L. S., Fuchs, D., Compton, D. L., Powell, S. R., Seethaler, P. M., Capizzi, A. M., ... & Fletcher, J. M. (2006). "The cognitive correlates of third-grade skill in arithmetic." <em>Journal of Educational Psychology</em>, 98(1), 29-43.</p>
          <p>[5] Geary, D. C., Bow-Thomas, C. C., & Yao, Y. (1992). "Counting knowledge and skill in cognitive addition." <em>Journal of Experimental Child Psychology</em>, 54(3), 372-391.</p>
          <p>[6] Landerl, K., Fussenegger, B., Moll, K., & Willburger, E. (2009). "Dyslexia and dyscalculia: Two learning disorders with different cognitive profiles." <em>Journal of Experimental Child Psychology</em>, 103(3), 309-324.</p>
          <p>[7] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[8] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Press.</p>
          <p>[9] Mazzocco, M. M., & Myers, G. F. (2003). "Complexities in identifying and defining mathematics learning disability in the primary school-age years." <em>Annals of Dyslexia</em>, 53(1), 218-253.</p>
          <p>[10] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[11] World Health Organization. (2019). <em>International statistical classification of diseases and related health problems</em> (11th ed.). WHO.</p>
          <p>[12] Flanagan, D. P., & Alfonso, V. C. (2017). <em>Essentials of specific learning disability identification</em> (2nd ed.). John Wiley & Sons.</p>
          <p>[13] Mather, N., & Wendling, B. J. (2018). <em>Essentials of evidence-based academic interventions</em>. John Wiley & Sons.</p>
          <p>[14] Shaywitz, S. E., & Shaywitz, B. A. (2013). "Making a hidden disability visible." <em>Learning Disabilities: A Multidisciplinary Journal</em>, 19(4), 131-139.</p>
          <p>[15] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Press.</p>
          <p>[16] Geary, D. C. (2004). "Mathematics and learning disabilities." <em>Journal of Learning Disabilities</em>, 37(1), 4-15.</p>
          <p>[17] Jordan, N. C., Kaplan, D., Ramineni, C., & Locuniak, M. N. (2009). "Early math matters: Kindergarten number competence and later mathematics outcomes." <em>Developmental Psychology</em>, 45(3), 850-867.</p>
          <p>[18] Shalev, R. S., Manor, O., Kerem, B., Ayali, M., Badichi, N., Friedlander, Y., & Gross-Tsur, V. (2001). "Developmental dyscalculia is a familial learning disability." <em>Journal of Learning Disabilities</em>, 34(1), 59-65.</p>
          <p>[19] Rubinsten, O., & Tannock, R. (2010). "Mathematics anxiety in children with developmental dyscalculia." <em>Behavioral and Brain Functions</em>, 6(1), 46.</p>
          <p>[20] Wechsler, D. (2014). <em>Wechsler Intelligence Scale for Children–Fifth Edition</em>. Pearson.</p>
          <p>[21] Wechsler, D. (2014). <em>WISC-V technical and interpretive manual</em>. Pearson.</p>
          <p>[22] Roid, G. H. (2003). <em>Stanford-Binet Intelligence Scales, Fifth Edition</em>. Riverside Publishing.</p>
          <p>[23] Gersten, R., Clarke, B., Jordan, N. C., Newman-Gonchar, R., Haymond, K., & Wilkins, C. (2012). "Universal screening in mathematics for the primary grades." <em>Exceptional Children</em>, 78(4), 423-445.</p>
          <p>[24] Wechsler, D. (2009). <em>Wechsler Individual Achievement Test–Third Edition</em>. Pearson.</p>
          <p>[25] Connolly, A. J. (2007). <em>KeyMath-3 Diagnostic Assessment</em>. Pearson.</p>
          <p>[26] Schrank, F. A., Mather, N., & McGrew, K. S. (2014). <em>Woodcock-Johnson IV Tests of Achievement</em>. Riverside.</p>
          <p>[27] De Smedt, B., Verschaffel, L., & Ghesquière, P. (2009). "The predictive value of numerical magnitude comparison for individual differences in mathematics achievement." <em>Journal of Experimental Child Psychology</em>, 103(4), 469-479.</p>
          <p>[28] Siegler, R. S., & Booth, J. L. (2004). "Development of numerical estimation in young children." <em>Child Development</em>, 75(2), 428-444.</p>
          <p>[29] Piazza, M., Facoetti, A., Trussardi, A. N., Berteletti, I., Conte, S., Lucangeli, D., ... & Zorzi, M. (2010). "Developmental trajectory of number acuity reveals a severe impairment in developmental dyscalculia." <em>Cognition</em>, 116(1), 33-41.</p>
          <p>[30] von Aster, M. G., & Shalev, R. S. (2007). "Number development and developmental dyscalculia." <em>Developmental Medicine & Child Neurology</em>, 49(11), 868-873.</p>
          <p>[31] Geary, D. C., Hoard, M. K., & Bailey, D. H. (2012). "Fact retrieval deficits in low achieving children and children with mathematical learning disability." <em>Journal of Learning Disabilities</em>, 45(4), 291-307.</p>
          <p>[32] Mazzocco, M. M., & Devlin, K. T. (2008). "Parts and 'holes': Gaps in rational number sense among children with vs. without mathematical learning disabilities." <em>Developmental Science</em>, 11(5), 681-691.</p>
          <p>[33] Passolunghi, M. C., & Mammarella, I. C. (2012). "Selective spatial working memory impairment in a group of children with mathematics learning disabilities." <em>Journal of Learning Disabilities</em>, 45(4), 341-350.</p>
          <p>[34] Wechsler, D. (2014). <em>WISC-V technical and interpretive manual</em>. Pearson.</p>
          <p>[35] Bull, R., & Johnston, R. S. (1997). "Children's arithmetical difficulties: Contributions from processing speed, item identification, and short-term memory." <em>Journal of Experimental Child Psychology</em>, 65(1), 1-24.</p>
          <p>[36] Geary, D. C., & Brown, S. C. (1991). "Cognitive addition: Strategy choice and speed-of-processing differences in gifted, normal, and mathematically disabled children." <em>Developmental Psychology</em>, 27(3), 398-406.</p>
          <p>[37] Bull, R., & Scerif, G. (2001). "Executive functioning as a predictor of children's mathematics ability." <em>Developmental Neuropsychology</em>, 19(3), 273-293.</p>
          <p>[38] Szűcs, D., Devine, A., Soltesz, F., Nobes, A., & Gabriel, F. (2013). "Developmental dyscalculia is related to visuo-spatial memory and inhibition impairment." <em>Cortex</em>, 49(10), 2674-2688.</p>
          <p>[39] Siegler, R. S. (1996). <em>Emerging minds: The process of change in children's thinking</em>. Oxford University Press.</p>
          <p>[40] Lucangeli, D., & Cabrele, S. (2006). "The relationship of metacognitive knowledge, skills and beliefs in children with and without mathematics learning disabilities." In A. Desoete & M. Veenman (Eds.), <em>Metacognition in mathematics education</em> (pp. 103-133).</p>
          <p>[41] Dowker, A., Sarkar, A., & Looi, C. Y. (2016). "Mathematics anxiety: What have we learned in 60 years?" <em>Frontiers in Psychology</em>, 7, 508.</p>
          <p>[42] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[43] Ashcraft, M. H., & Krause, J. A. (2007). "Working memory, math performance, and math anxiety." <em>Psychonomic Bulletin & Review</em>, 14(2), 243-248.</p>
          <p>[44] Swanson, H. L., & Beebe-Frankenberger, M. (2004). "The relationship between working memory and mathematical problem solving in children at risk." <em>Journal of Educational Psychology</em>, 96(3), 471-491.</p>
          <p>[45] Fletcher, J. M., Lyon, G. R., Fuchs, L. S., & Barnes, M. A. (2018). <em>Learning disabilities: From identification to intervention</em> (2nd ed.). Guilford Press.</p>
          <p>[46] Flanagan, D. P., & Alfonso, V. C. (2017). <em>Essentials of specific learning disability identification</em> (2nd ed.). John Wiley & Sons.</p>
          <p>[47] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[48] Mather, N., & Wendling, B. J. (2018). <em>Essentials of evidence-based academic interventions</em>. John Wiley & Sons.</p>
          <p>[49] Individuals with Disabilities Education Act, 20 U.S.C. § 1400 (2004).</p>
          <p>[50] U.S. Department of Education. (2017). <em>IDEA regulations</em>. Retrieved from https://sites.ed.gov/idea</p>
          <p>[51] Kaufmann, L., & von Aster, M. (2012). "The diagnosis and management of dyscalculia." <em>Deutsches Ärzteblatt International</em>, 109(45), 767-778.</p>
          <p>[52] American Psychological Association. (2020). <em>Understanding psychoeducational assessment</em>. APA.</p>
          <p>[53] Yell, M. L., Shriner, J. G., & Katsiyannis, A. (2006). "Individuals with Disabilities Education Improvement Act of 2004 and IDEA regulations of 2006." <em>Focus on Exceptional Children</em>, 39(1), 1-24.</p>
          <p>[54] Fuchs, L. S., Fuchs, D., & Capizzi, A. M. (2005). "Identifying appropriate test accommodations for students with learning disabilities." <em>Focus on Exceptional Children</em>, 37(6), 1-8.</p>
          <p>[55] Gerber, P. J., Ginsberg, R., & Reiff, H. B. (1992). "Identifying alterable patterns in employment success for highly successful adults with learning disabilities." <em>Journal of Learning Disabilities</em>, 25(8), 475-487.</p>
          <p>[56] Geary, D. C., Hoard, M. K., Nugent, L., & Bailey, D. H. (2012). "Mathematical cognition deficits in children with learning disabilities and persistent low achievement." <em>Journal of Educational Psychology</em>, 104(1), 206-223.</p>
          <p>[57] Butterworth, B., Varma, S., & Laurillard, D. (2011). "Dyscalculia: From brain to education." <em>Science</em>, 332(6033), 1049-1053.</p>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentArticle?.('dyscalculia'); }}
          className="text-[#2abcd4] hover:underline cursor-pointer"
        >
          ← Back to Dyscalculia
        </a>
      </div>
    </article>
  );
}
