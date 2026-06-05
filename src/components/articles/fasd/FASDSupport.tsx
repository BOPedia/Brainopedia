import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface FASDSupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function FASDSupport({ setCurrentArticle }: FASDSupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">FASD: Support &amp; Intervention</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">There is no cure for FASD — the brain differences caused by prenatal alcohol exposure are permanent.<sup>[1]</sup> However, outcomes are profoundly shaped by the quality of support and intervention individuals receive. Research consistently shows that informed, compassionate, and appropriately structured support dramatically reduces secondary conditions and improves quality of life.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Core Principles of FASD Support</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=1080&q=80" alt="Supportive family and education environment" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <p className="mb-4">Effective FASD support is built on understanding the neurological basis of behavior:<sup>[3]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Brain-based understanding:</strong> Behaviors are not willful defiance — they reflect genuine neurological limitations in regulation, memory, and judgment</li>
            <li className="mb-2"><strong>External scaffolding:</strong> The FASD brain needs external structure to compensate for internal executive function deficits</li>
            <li className="mb-2"><strong>Strengths-based approach:</strong> Build on genuine strengths — visual learning, creativity, loyalty, enthusiasm</li>
            <li className="mb-2"><strong>Consistent environment:</strong> Predictability reduces anxiety and improves functioning</li>
            <li className="mb-2"><strong>No punishment for inability:</strong> Distinguish between cannot and will not — punishing neurological limitations is ineffective and harmful<sup>[4]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Educational Strategies</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Classroom Accommodations</h3>
          <p className="mb-4">Students with FASD benefit from structured, concrete, visual learning environments:<sup>[5]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Preferential seating — near the teacher, away from distractions</li>
            <li className="mb-2">Visual schedules and graphic organizers</li>
            <li className="mb-2">Chunked instructions — one step at a time</li>
            <li className="mb-2">Frequent repetition and review — new learning requires many more exposures</li>
            <li className="mb-2">Reduced written output requirements — use oral responses, drawings, or technology</li>
            <li className="mb-2">Extended time on all tasks and tests<sup>[6]</sup></li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Behavioral Support at School</h3>
          <p className="mb-4">Behavioral interventions effective for FASD differ from those for typical behavioral disorders:<sup>[7]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Proactive rather than reactive — prevent problems before they escalate</li>
            <li className="mb-2">Focus on skill-building, not consequences</li>
            <li className="mb-2">Sensory breaks and movement incorporated into the day</li>
            <li className="mb-2">Calming spaces available for dysregulation</li>
            <li className="mb-2">Avoid sarcasm, idioms, and abstract language in instructions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Evidence-Based Interventions</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">GoFAR (Game On! Fostering Awareness and Resilience)</h3>
          <p className="mb-4">A family-based intervention combining parent coaching and child skills training, showing improvements in attention and adaptive behavior.<sup>[8]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Neurocognitive Habilitation</h3>
          <p className="mb-4">A manualized parent coaching program teaching caregivers to use brain-based, strengths-oriented strategies — one of the most extensively studied FASD interventions.<sup>[9]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Social Skills Training</h3>
          <p className="mb-4">Programs targeting social cognition and peer interaction — including the Children's Friendship Training program — show positive effects, though generalization to real-world settings requires ongoing practice.<sup>[10]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">MILE (Math Interactive Learning Experience)</h3>
          <p className="mb-4">A math intervention specifically developed for children with FASD using concrete, repetitive, multi-sensory approaches with demonstrated effectiveness.<sup>[11]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Medication Management</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1080&q=80" alt="Medication management and healthcare" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <p className="mb-4">No medication treats FASD itself, but medications may address co-occurring conditions:<sup>[12]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Stimulant medications:</strong> May help attention symptoms, but response in FASD may differ from typical ADHD; often requires lower doses and careful monitoring</li>
            <li className="mb-2"><strong>Antidepressants / anxiolytics:</strong> For co-occurring depression and anxiety</li>
            <li className="mb-2"><strong>Sleep aids:</strong> Melatonin for sleep initiation difficulties — highly prevalent in FASD</li>
            <li className="mb-2"><strong>Mood stabilizers:</strong> For significant emotional dysregulation</li>
          </ul>
          <p className="mb-4">Medication decisions for individuals with FASD require care — polypharmacy is common and can complicate presentations. Regular reassessment is essential.<sup>[13]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Caregiver and Family Support</h2>
          <p className="mb-4">Caregivers — biological, foster, or adoptive — are central to outcomes and are themselves in need of support:<sup>[14]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Parent training programs:</strong> FASD-specific programs like the Families Moving Forward program reduce caregiver stress and improve child outcomes</li>
            <li className="mb-2"><strong>Respite care:</strong> Caring for a child with FASD is demanding; caregiver burnout is common and real</li>
            <li className="mb-2"><strong>Support groups:</strong> FASD-specific caregiver groups reduce isolation and share practical strategies</li>
            <li className="mb-2"><strong>Understanding secondary disability:</strong> Caregivers trained in brain-based frameworks have children with significantly fewer secondary conditions<sup>[15]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Transition to Adulthood</h2>
          <p className="mb-4">Transition planning for adolescents with FASD must begin early — ideally by age 14:<sup>[16]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Vocational assessment and supported employment planning</li>
            <li className="mb-2">Independent living skills training — budgeting, cooking, personal hygiene, transportation</li>
            <li className="mb-2">Supported decision-making frameworks rather than full guardianship when possible</li>
            <li className="mb-2">Benefits navigation — SSI/SSDI, supported housing, adult disability services</li>
            <li className="mb-2">Safety planning — awareness of exploitation, healthy relationship education</li>
          </ul>
          <p className="mb-4">Adults with FASD who have appropriate support and stable housing can lead fulfilling lives, hold employment, and maintain relationships — particularly when expectations are realistic and scaffolding is available.<sup>[17]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Riley, E. P., Infante, M. A., & Warren, K. R. (2011). "Fetal alcohol spectrum disorders: An overview." <em>Neuropsychology Review</em>, 21(2), 73–80.</p>
          <p>[2] Streissguth, A. P., Bookstein, F. L., Barr, H. M., et al. (2004). "Risk factors for adverse life outcomes in fetal alcohol syndrome." <em>Journal of Developmental and Behavioral Pediatrics</em>, 25(4), 228–238.</p>
          <p>[3] Malbin, D. V. (2002). <em>Trying differently rather than harder: Fetal alcohol spectrum disorders</em>. Portland, OR: FASCETS.</p>
          <p>[4] Koren, G., Nulman, I., Chudley, A. E., & Loocke, C. (2003). "Fetal alcohol spectrum disorder." <em>CMAJ</em>, 169(11), 1181–1185.</p>
          <p>[5] Conry, J. L., & Fast, D. K. (2000). <em>Fetal alcohol syndrome and the criminal justice system</em>. Vancouver: Fetal Alcohol Syndrome Resource Society.</p>
          <p>[6] Clarren, S. K., & Lutke, J. (2008). "Building clinical capacity for fetal alcohol spectrum disorder diagnoses in Western and Northern Canada." <em>Canadian Journal of Clinical Pharmacology</em>, 15(2), e223–e237.</p>
          <p>[7] Olson, H. C., Jirikowic, T., Kartin, D., & Astley, S. (2007). "Responding to the challenge of early intervention for fetal alcohol spectrum disorders." <em>Infants and Young Children</em>, 20(2), 172–189.</p>
          <p>[8] Kable, J. A., Coles, C. D., Strickland, D. C., & Taddeo, E. (2012). "Comparing the effectiveness of on-line versus in-person caregiver education and training for FASD." <em>International Journal of Mental Health and Addiction</em>, 10(6), 791–803.</p>
          <p>[9] Bertrand, J. (2009). "Interventions for children with fetal alcohol spectrum disorders (FASDs): Overview of findings for five innovative research projects." <em>Research in Developmental Disabilities</em>, 30(5), 986–1006.</p>
          <p>[10] O'Connor, M. J., Frankel, F., Paley, B., et al. (2006). "A controlled social skills training for children with fetal alcohol spectrum disorders." <em>Journal of Consulting and Clinical Psychology</em>, 74(4), 639–648.</p>
          <p>[11] Coles, C. D., Kable, J. A., & Taddeo, E. (2009). "Math performance and behavior problems in children affected by prenatal alcohol exposure." <em>Alcoholism: Clinical and Experimental Research</em>, 33(12), 2097–2106.</p>
          <p>[12] Doig, J., McLennan, J. D., & Gibbard, W. B. (2008). "Medication effects on symptoms of attention-deficit/hyperactivity disorder in children with fetal alcohol spectrum disorder." <em>Journal of Child and Adolescent Psychopharmacology</em>, 18(4), 365–371.</p>
          <p>[13] Frankel, F., Paley, B., Marquardt, R., & O'Connor, M. J. (2006). "Stimulants, neuroleptics, and children's friendship training for children with fetal alcohol spectrum disorders." <em>Journal of Child and Adolescent Psychopharmacology</em>, 16(6), 777–789.</p>
          <p>[14] Olson, H. C., & Montague, R. A. (2011). "An innovative look at early intervention for children affected by prenatal alcohol exposure." In S. A. Adubato & D. E. Cohen (Eds.), <em>Prenatal alcohol use and fetal alcohol spectrum disorders</em>. Bentham Science.</p>
          <p>[15] Families Moving Forward Program. (2012). <em>Families Moving Forward: Supporting families of children with FASD</em>. Seattle: University of Washington.</p>
          <p>[16] Conry, J. L., & Fast, D. K. (2000). <em>Fetal alcohol syndrome and the criminal justice system</em>. Vancouver: Fetal Alcohol Syndrome Resource Society.</p>
          <p>[17] Brown, J., Whittingham, K., Boyd, R. N., McKinlay, L., & Sofronoff, K. (2014). "Does stepping stones triple P plus a FASD module improve caregiver and child outcomes?" <em>Research in Developmental Disabilities</em>, 35(11), 2912–2926.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('fasd'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to FASD</a>
      </div>
    </article>
  );
}
