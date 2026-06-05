import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface EpilepsySupportProps {
  setCurrentArticle?: (article: string) => void;
}

export function EpilepsySupport({ setCurrentArticle }: EpilepsySupportProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Epilepsy: Support &amp; Treatment</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Epilepsy management extends well beyond seizure suppression — it encompasses medication management, surgical options, dietary therapies, psychological support, and education and workplace accommodations.<sup>[1]</sup> Approximately 70% of people with epilepsy achieve seizure freedom with medication, but for the remaining 30%, a more comprehensive approach is required.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Anti-Seizure Medications (ASMs)</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1080&q=80" alt="Medication management and pharmacy" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">First-Line Medications</h3>
          <p className="mb-4">Medication selection depends on seizure type, epilepsy syndrome, patient age, sex, and comorbidities:<sup>[3]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Levetiracetam:</strong> Broad-spectrum; commonly used for focal and generalized epilepsies</li>
            <li className="mb-2"><strong>Lamotrigine:</strong> Broad-spectrum; well-tolerated; preferred in women of childbearing age</li>
            <li className="mb-2"><strong>Valproate:</strong> Highly effective for generalized epilepsies; teratogenic — caution in women<sup>[4]</sup></li>
            <li className="mb-2"><strong>Carbamazepine / Oxcarbazepine:</strong> Focal epilepsies; may worsen absence or myoclonic seizures</li>
            <li className="mb-2"><strong>Ethosuximide:</strong> First-line for childhood absence epilepsy</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Newer Medications</h3>
          <p className="mb-4">Second- and third-generation ASMs include lacosamide, perampanel, brivaracetam, cenobamate, and fenfluramine (for Dravet syndrome).<sup>[5]</sup> These often have better tolerability profiles and fewer drug interactions.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Medication Principles</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Start low, titrate slowly to minimize side effects</li>
            <li className="mb-2">Monotherapy is preferred; if first medication fails, try a second before combining<sup>[6]</sup></li>
            <li className="mb-2">Never stop ASMs abruptly — withdrawal can trigger status epilepticus</li>
            <li className="mb-2">Regular blood level monitoring for some medications (phenytoin, carbamazepine, valproate)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Surgical Treatment</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Resective Surgery</h3>
          <p className="mb-4">For drug-resistant focal epilepsy, surgical removal of the epileptogenic zone offers seizure freedom in 60–80% of appropriately selected patients with temporal lobe epilepsy.<sup>[7]</sup> Presurgical evaluation includes prolonged video-EEG, MRI, neuropsychological testing, and functional imaging.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Corpus Callosotomy</h3>
          <p className="mb-4">Sectioning the corpus callosum prevents seizures from spreading between hemispheres, particularly effective for drop attacks (atonic seizures) in Lennox-Gastaut syndrome.<sup>[8]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Laser Interstitial Thermal Therapy (LITT)</h3>
          <p className="mb-4">A minimally invasive technique using laser-guided heat to ablate the seizure focus, particularly for mesial temporal lobe epilepsy.<sup>[9]</sup> Recovery time is shorter than open surgery.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Responsive Neurostimulation (RNS)</h3>
          <p className="mb-4">An implanted device monitors brain activity and delivers electrical stimulation when it detects abnormal patterns, aborting seizures before they fully develop.<sup>[10]</sup> Useful for people who cannot undergo resection (e.g., bilateral foci or involvement of eloquent cortex).</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurostimulation Devices</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1080&q=80" alt="Neurostimulation and brain therapy" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Vagus Nerve Stimulation (VNS)</h3>
          <p className="mb-4">An implanted device delivers regular electrical pulses to the vagus nerve, reducing seizure frequency in approximately 50% of patients — though complete seizure freedom is rare.<sup>[11]</sup> VNS is also used as an on-demand therapy: patients swipe a magnet over the device when they feel a seizure coming.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Deep Brain Stimulation (DBS)</h3>
          <p className="mb-4">Stimulation of the anterior nucleus of the thalamus (ANT-DBS) reduces seizure frequency by approximately 40–50% and is FDA-approved for drug-resistant focal epilepsy.<sup>[12]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Dietary Therapies</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ketogenic Diet</h3>
          <p className="mb-4">A high-fat, low-carbohydrate diet that induces ketosis and has proven anti-seizure effects.<sup>[13]</sup> Reduces seizures by 50% or more in approximately 50% of children who try it. Particularly effective for Dravet syndrome, GLUT1 deficiency, and pyruvate dehydrogenase deficiency.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Modified Atkins Diet and Low Glycemic Index Treatment</h3>
          <p className="mb-4">Less restrictive alternatives to the classic ketogenic diet that are more practical for older children and adults.<sup>[14]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Seizure First Aid</h2>
          <p className="mb-4">Everyone in a person's life should know basic seizure first aid:<sup>[15]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Stay calm</strong> — most seizures resolve within 1–3 minutes</li>
            <li className="mb-2"><strong>Time the seizure</strong> — call emergency services if it lasts more than 5 minutes</li>
            <li className="mb-2"><strong>Protect from injury</strong> — clear the area, cushion the head, turn on side to prevent choking</li>
            <li className="mb-2"><strong>Do NOT restrain</strong> or put anything in the mouth<sup>[16]</sup></li>
            <li className="mb-2"><strong>Stay with the person</strong> until full recovery</li>
            <li className="mb-2"><strong>Rescue medications:</strong> Diastat (rectal diazepam), Nayzilam (nasal midazolam), Valtoco — prescribed for prolonged seizures</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Psychological and Social Support</h2>
          <p className="mb-4">Mental health support is as important as seizure control:<sup>[17]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Cognitive-behavioral therapy (CBT):</strong> Effective for anxiety and depression in epilepsy; also developed for PNES</li>
            <li className="mb-2"><strong>Psychotherapy for adjustment:</strong> Grief around diagnosis, loss of driving privileges, and uncertainty about seizures</li>
            <li className="mb-2"><strong>Support groups:</strong> Epilepsy Foundation, local epilepsy support groups, and online communities</li>
            <li className="mb-2"><strong>Family education:</strong> Family members need training in seizure recognition, first aid, and emotional support<sup>[18]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">School and Workplace Support</h2>
          <p className="mb-4">Students with epilepsy are entitled to educational accommodations under IDEA and Section 504:<sup>[19]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Individualized Health Plans (IHPs) detailing seizure response protocols</li>
            <li className="mb-2">Extra time on tests — accounting for post-ictal cognitive effects</li>
            <li className="mb-2">Flexible attendance for medical appointments</li>
            <li className="mb-2">Access to rescue medications at school</li>
            <li className="mb-2">Reduced course loads during periods of poor seizure control</li>
          </ul>
          <p className="mb-4">In the workplace, reasonable accommodations under the ADA may include flexible scheduling, remote work during recovery periods, and modified safety protocols.<sup>[20]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Kwan, P., & Brodie, M. J. (2000). "Early identification of refractory epilepsy." <em>New England Journal of Medicine</em>, 342(5), 314–319.</p>
          <p>[2] Brodie, M. J., Barry, S. J., Bamagous, G. A., Norrie, J. D., & Kwan, P. (2012). "Patterns of treatment response in newly diagnosed epilepsy." <em>Neurology</em>, 78(20), 1548–1554.</p>
          <p>[3] Glauser, T., Ben-Menachem, E., Bourgeois, B., et al. (2013). "Updated ILAE evidence review of antiepileptic drug efficacy and effectiveness as initial monotherapy for epileptic seizures and syndromes." <em>Epilepsia</em>, 54(3), 551–563.</p>
          <p>[4] Tomson, T., Battino, D., Bonizzoni, E., et al. (2011). "Dose-dependent risk of malformations with antiepileptic drugs." <em>Neurology</em>, 77(22), 1996–2002.</p>
          <p>[5] Bialer, M., & White, H. S. (2010). "Key factors in the discovery and development of new antiepileptic drugs." <em>Nature Reviews Drug Discovery</em>, 9(1), 68–82.</p>
          <p>[6] Perucca, E. (2005). "An introduction to antiepileptic drugs." <em>Epilepsia</em>, 46(Suppl 4), 31–37.</p>
          <p>[7] Engel, J. Jr., McDermott, M. P., Wiebe, S., et al. (2012). "Early surgical therapy for drug-resistant temporal lobe epilepsy." <em>JAMA</em>, 307(9), 922–930.</p>
          <p>[8] Maehara, T., & Shimizu, H. (2001). "Surgical outcome of corpus callosotomy in patients with drop attacks." <em>Seizure</em>, 10(3), 202–205.</p>
          <p>[9] Jermakowicz, W. J., Kanner, A. M., Sur, S., et al. (2017). "Laser thermal ablation for mesiotemporal epilepsy." <em>Epilepsy Research</em>, 131, 76–82.</p>
          <p>[10] Bergey, G. K., Morrell, M. J., Mizrahi, E. M., et al. (2015). "Long-term treatment with responsive brain stimulation in adults with refractory partial seizures." <em>Neurology</em>, 84(8), 810–817.</p>
          <p>[11] Morris, G. L., & Mueller, W. M. (1999). "Long-term treatment with vagus nerve stimulation in patients with refractory epilepsy." <em>Neurology</em>, 53(8), 1731–1735.</p>
          <p>[12] Fisher, R., Salanova, V., Witt, T., et al. (2010). "Electrical stimulation of the anterior nucleus of thalamus for treatment of refractory epilepsy." <em>Epilepsia</em>, 51(5), 899–908.</p>
          <p>[13] Neal, E. G., Chaffe, H., Schwartz, R. H., et al. (2008). "The ketogenic diet for the treatment of childhood epilepsy." <em>The Lancet Neurology</em>, 7(6), 500–506.</p>
          <p>[14] Kossoff, E. H., Zupec-Kania, B. A., Amark, P. E., et al. (2009). "Optimal clinical management of children receiving the ketogenic diet." <em>Epilepsia</em>, 50(2), 304–317.</p>
          <p>[15] Epilepsy Foundation. (2017). <em>Seizure first aid and safety</em>. Landover, MD: Epilepsy Foundation.</p>
          <p>[16] St. Louis, E. K., & Cascino, G. D. (2016). "Diagnosis of epilepsy and related episodic disorders." <em>CONTINUUM: Lifelong Learning in Neurology</em>, 22(1), 15–37.</p>
          <p>[17] Kerr, M. P., Mensah, S., Besag, F., et al. (2011). "International consensus clinical practice statements for the treatment of neuropsychiatric conditions associated with epilepsy." <em>Epilepsia</em>, 52(11), 2133–2138.</p>
          <p>[18] Leenen, L. A., Hendriksen, J. G., Kerkhof, I. J., et al. (2016). "What do patients and their caregivers want from epilepsy care?" <em>Epilepsy &amp; Behavior</em>, 63, 1–7.</p>
          <p>[19] Wodrich, D. L., & Cunningham, M. M. (2008). "School-based tertiary and targeted interventions for students with chronic medical conditions." <em>Psychology in the Schools</em>, 45(1), 52–62.</p>
          <p>[20] Lineberry, T. W., & Bostwick, J. M. (2006). "Epilepsy in the workplace." <em>Mayo Clinic Proceedings</em>, 81(7), 954–963.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>
    </article>
  );
}
