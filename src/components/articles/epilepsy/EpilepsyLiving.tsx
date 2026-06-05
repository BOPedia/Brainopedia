import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface EpilepsyLivingProps {
  setCurrentArticle?: (article: string) => void;
}

export function EpilepsyLiving({ setCurrentArticle }: EpilepsyLivingProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Epilepsy: Living with Epilepsy</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Living with epilepsy means navigating a condition that is unpredictable by nature — and learning to build a life that accommodates that uncertainty without being defined by it.<sup>[1]</sup> With good medical care, supportive relationships, and practical strategies, the vast majority of people with epilepsy live full, meaningful lives. This article addresses the practical, emotional, and social dimensions of daily life with epilepsy.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Safety in Daily Life</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=1080&q=80" alt="Daily life safety and independence" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">In the Home</h3>
          <p className="mb-4">Home modifications reduce the risk of injury during seizures:<sup>[3]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Use a shower rather than a bathtub, or never bathe alone</li>
            <li className="mb-2">Use a microwave instead of a stovetop when possible, or always use back burners</li>
            <li className="mb-2">Pad sharp furniture edges; use non-slip rugs or remove them</li>
            <li className="mb-2">Keep stairways gated if seizures cause falls</li>
            <li className="mb-2">Wear a medical ID bracelet or use a seizure alert device</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Water Safety</h3>
          <p className="mb-4">Drowning is a significant risk for people with epilepsy — SUDEP (sudden unexpected death in epilepsy) risk from drowning is disproportionate.<sup>[4]</sup> Guidelines typically recommend never swimming alone, using life jackets for water activities, and informing lifeguards of the condition.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Heights and Machinery</h3>
          <p className="mb-4">Working at heights, near open machinery, or with power tools carries significant risk.<sup>[5]</sup> Vocational counselors familiar with epilepsy can help identify safe workplace modifications or alternative roles.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Driving</h2>
          <p className="mb-4">Driving restrictions are among the most significant life impacts of epilepsy.<sup>[6]</sup> Most jurisdictions require a seizure-free period before a person can drive legally — commonly 3–12 months, varying by location.</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Laws vary significantly by country and state/province</li>
            <li className="mb-2">Reporting requirements also vary; physicians may be required to report in some jurisdictions</li>
            <li className="mb-2">Some individuals qualify for driving with certain conditions (e.g., auras only, nocturnal seizures only)</li>
            <li className="mb-2">Public transportation, ride-share services, and community transportation programs are important alternatives</li>
            <li className="mb-2">Loss of driving often affects employment, social participation, and independence significantly<sup>[7]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Sleep and Lifestyle</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Sleep Hygiene</h3>
          <p className="mb-4">Sleep deprivation is one of the most common seizure triggers, making consistent sleep schedule one of the most effective non-pharmacological seizure prevention strategies.<sup>[8]</sup> Recommendations include:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Consistent bedtime and wake time, including weekends</li>
            <li className="mb-2">7–9 hours of sleep per night for adults</li>
            <li className="mb-2">Treating co-occurring sleep disorders (sleep apnea is particularly common in epilepsy)</li>
            <li className="mb-2">Avoiding late-night shift work when possible</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Alcohol and Substances</h3>
          <p className="mb-4">Alcohol lowers the seizure threshold; alcohol withdrawal is a particularly potent seizure trigger.<sup>[9]</sup> Many neurologists recommend abstinence or strictly limiting alcohol. Recreational drugs — particularly cocaine, amphetamines, and cannabis — can also interact with seizure threshold and medications.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Exercise</h3>
          <p className="mb-4">Regular physical activity is beneficial and generally safe for people with epilepsy.<sup>[10]</sup> Exercise improves mood, sleep, and seizure threshold. Contact sports and activities near traffic or water require additional precautions. Most people with well-controlled epilepsy can participate in most sports with appropriate supervision.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Women and Epilepsy</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=80" alt="Women's health and epilepsy management" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Contraception</h3>
          <p className="mb-4">Some anti-seizure medications (enzyme-inducing ASMs: carbamazepine, phenytoin, phenobarbital, topiramate, oxcarbazepine) reduce the effectiveness of hormonal contraceptives.<sup>[11]</sup> Women should discuss contraception with their neurologist to ensure both seizure control and contraceptive efficacy.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Pregnancy</h3>
          <p className="mb-4">Most women with epilepsy have healthy pregnancies and healthy babies — but careful planning is essential:<sup>[12]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Pre-conception counseling with a neurologist is strongly recommended</li>
            <li className="mb-2">Valproate carries the highest teratogenic risk — alternatives should be considered</li>
            <li className="mb-2">Folic acid supplementation (4–5 mg/day) before and during pregnancy</li>
            <li className="mb-2">Medication doses often need adjustment as pregnancy progresses</li>
            <li className="mb-2">Uncontrolled seizures during pregnancy carry their own risks<sup>[13]</sup></li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Catamenial Epilepsy</h3>
          <p className="mb-4">In catamenial epilepsy, seizures cluster around menstruation, ovulation, or the luteal phase due to hormonal influences on seizure threshold.<sup>[14]</sup> Cyclic progesterone therapy or adjusting medication doses perimenstrually may help.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Mental Health and Wellbeing</h2>
          <p className="mb-4">Mental health conditions are nearly twice as prevalent in epilepsy as in the general population — and often undertreated.<sup>[15]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Depression and anxiety:</strong> Bidirectionally related to epilepsy — not just a psychological reaction but often neurobiologically linked</li>
            <li className="mb-2"><strong>Grief and adjustment:</strong> Adjusting to diagnosis, seizure unpredictability, and changed life plans is a genuine psychological process</li>
            <li className="mb-2"><strong>Seizure anticipatory anxiety:</strong> Fear of having a seizure in public can lead to social withdrawal and avoidance</li>
            <li className="mb-2"><strong>Stigma:</strong> Internalized stigma is associated with depression and reduced quality of life<sup>[16]</sup></li>
          </ul>
          <p className="mb-4">Mindfulness-based stress reduction (MBSR) has emerging evidence for reducing seizure frequency and improving quality of life in epilepsy.<sup>[17]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">SUDEP Awareness</h2>
          <p className="mb-4">Sudden unexpected death in epilepsy (SUDEP) is the most common epilepsy-related cause of death, occurring in approximately 1 in 1,000 people with epilepsy per year — and in up to 1 in 150 for those with uncontrolled tonic-clonic seizures.<sup>[18]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Nocturnal seizures and prone position during/after seizures are significant risk factors</li>
            <li className="mb-2">Seizure monitoring devices and nocturnal monitoring can reduce risk</li>
            <li className="mb-2">Optimal seizure control remains the most important protective factor</li>
            <li className="mb-2">Open discussion with healthcare providers about SUDEP is important — despite being difficult, awareness empowers prevention<sup>[19]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Community and Advocacy</h2>
          <p className="mb-4">Epilepsy advocacy organizations provide resources, connection, and tools for self-advocacy:<sup>[20]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Epilepsy Foundation (USA):</strong> Helpline, local affiliates, online communities, research funding</li>
            <li className="mb-2"><strong>CURE Epilepsy:</strong> Focuses on research toward a cure</li>
            <li className="mb-2"><strong>Dravet Syndrome Foundation:</strong> Specific to Dravet syndrome families</li>
            <li className="mb-2"><strong>Citizens United for Research in Epilepsy (CURE):</strong> Research advocacy organization</li>
            <li className="mb-2"><strong>International League Against Epilepsy (ILAE):</strong> Global professional and scientific body</li>
          </ul>
          <p className="mb-4">Purple Day (March 26) is international epilepsy awareness day — wearing purple honors people living with epilepsy worldwide.</p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Jacoby, A., Snape, D., & Baker, G. A. (2005). "Epilepsy and social identity: The stigma of a chronic neurological disorder." <em>The Lancet Neurology</em>, 4(3), 171–178.</p>
          <p>[2] Devinsky, O. (1999). "Quality of life in epilepsy." <em>Epilepsia</em>, 40(Suppl 7), S17–S22.</p>
          <p>[3] Josephson, C. B., & Jetté, N. (2017). "Psychiatric comorbidities in epilepsy." <em>International Review of Psychiatry</em>, 29(5), 409–424.</p>
          <p>[4] Lamberts, R. J., Thijs, R. D., Laffan, A., Langan, Y., & Sander, J. W. (2012). "Sudden unexpected death in epilepsy." <em>Annals of Neurology</em>, 71(2), 221–226.</p>
          <p>[5] Drazkowski, J. (2007). "An overview of epilepsy and driving." <em>Epilepsia</em>, 48(Suppl 9), 10–12.</p>
          <p>[6] Driving and Epilepsy. (2016). <em>ILAE task force report on epilepsy and driving</em>. International League Against Epilepsy.</p>
          <p>[7] McLachlan, R. S., Starreveld, E., & Lee, M. A. (2007). "Impact of mandatory physician reporting on accident risk in epilepsy." <em>Epilepsia</em>, 48(8), 1500–1505.</p>
          <p>[8] Bazil, C. W., & Walczak, T. S. (1997). "Effects of sleep and sleep stage on epileptic and nonepileptic seizures." <em>Epilepsia</em>, 38(1), 56–62.</p>
          <p>[9] Hillbom, M., Pieninkeroinen, I., & Leone, M. (2003). "Seizures in alcohol-dependent patients." <em>CNS Drugs</em>, 17(14), 1013–1030.</p>
          <p>[10] Arida, R. M., Cavalheiro, E. A., da Silva, A. C., & Scorza, F. A. (2008). "Physical activity and epilepsy." <em>Epilepsy &amp; Behavior</em>, 13(3), 430–435.</p>
          <p>[11] Zupanc, M. L. (2006). "Antiepileptic drugs and hormonal contraceptives in adolescent women with epilepsy." <em>Neurology</em>, 66(6 Suppl 3), S37–S45.</p>
          <p>[12] Harden, C. L., Hopp, J., Ting, T. Y., et al. (2009). "Management issues for women with epilepsy — Focus on pregnancy." <em>Epilepsia</em>, 50(5), 1229–1236.</p>
          <p>[13] Tomson, T., Battino, D., Bonizzoni, E., et al. (2011). "Dose-dependent risk of malformations with antiepileptic drugs." <em>Neurology</em>, 77(22), 1996–2002.</p>
          <p>[14] Herzog, A. G. (2015). "Catamenial epilepsy: Definition, prevalence pathophysiology and treatment." <em>Seizure</em>, 24, 133–139.</p>
          <p>[15] Kanner, A. M. (2003). "Depression in epilepsy: Prevalence, clinical semiology, pathogenic mechanisms, and treatment." <em>Biological Psychiatry</em>, 54(3), 388–398.</p>
          <p>[16] Jacoby, A. (1994). "Felt versus enacted stigma: A concept revisited." <em>Social Science &amp; Medicine</em>, 38(2), 269–274.</p>
          <p>[17] Tang, V., Poon, W. S., & Kwan, P. (2015). "Mindfulness-based therapy for drug-resistant epilepsy." <em>Epilepsy &amp; Behavior</em>, 50, 49–55.</p>
          <p>[18] Shorvon, S., & Tomson, T. (2011). "Sudden unexpected death in epilepsy." <em>The Lancet</em>, 378(9801), 2028–2038.</p>
          <p>[19] Harden, C., Tomson, T., Gloss, D., et al. (2017). "Practice guideline summary: Sudden unexpected death in epilepsy incidence rates and risk factors." <em>Neurology</em>, 88(17), 1674–1680.</p>
          <p>[20] Epilepsy Foundation. (2019). <em>Living well with epilepsy: A guide for people with epilepsy and their families</em>. Landover, MD: Epilepsy Foundation.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>
    </article>
  );
}
