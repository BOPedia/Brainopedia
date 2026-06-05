import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface EpilepsyDiagnosisProps {
  setCurrentArticle?: (article: string) => void;
}

export function EpilepsyDiagnosis({ setCurrentArticle }: EpilepsyDiagnosisProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Epilepsy: Diagnosis &amp; Assessment</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Diagnosing epilepsy is primarily a clinical process — there is no single test that confirms or rules it out.<sup>[1]</sup> A thorough history, supported by electroencephalography (EEG) and neuroimaging, forms the diagnostic foundation. The goal is not just to confirm epilepsy but to classify the seizure type, identify the epilepsy syndrome, and determine etiology — each of which guides treatment.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Clinical History</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1080&q=80" alt="Medical consultation and history taking" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Seizure Description</h3>
          <p className="mb-4">The most critical diagnostic information comes from eyewitness accounts and the patient's own recollection.<sup>[3]</sup> Clinicians ask about:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">What happens before, during, and after the event</li>
            <li className="mb-2">Duration of the episode</li>
            <li className="mb-2">Level of awareness or consciousness</li>
            <li className="mb-2">Movements, automatisms, or vocalizations</li>
            <li className="mb-2">Recovery time and post-ictal symptoms</li>
            <li className="mb-2">Precipitating factors or triggers</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Medical and Family History</h3>
          <p className="mb-4">History of birth complications, febrile seizures, head injury, CNS infection, and stroke are all relevant.<sup>[4]</sup> A family history of epilepsy or neurological disorders raises the probability of a genetic etiology. Medication history, substance use, and sleep patterns are also reviewed.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Electroencephalography (EEG)</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Standard EEG</h3>
          <p className="mb-4">EEG records electrical activity from electrodes placed on the scalp.<sup>[5]</sup> Interictal epileptiform discharges (IEDs) — spikes, sharp waves, or spike-and-wave complexes — support an epilepsy diagnosis. A standard EEG captures 20–40 minutes of brain activity; its diagnostic yield is approximately 50% after a first seizure.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Activation Procedures</h3>
          <p className="mb-4">Hyperventilation and photic stimulation (flashing lights) are routinely performed during EEG to provoke abnormal activity.<sup>[6]</sup> Sleep deprivation before the EEG also increases the yield of epileptiform abnormalities.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Prolonged and Ambulatory EEG</h3>
          <p className="mb-4">When a standard EEG is normal but clinical suspicion remains high, prolonged EEG monitoring (24–72 hours) or long-term video-EEG telemetry is used.<sup>[7]</sup> Video-EEG simultaneously records brain electrical activity and behavior, allowing correlation of symptoms with EEG changes.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Limitations of EEG</h3>
          <p className="mb-4">A normal EEG does not rule out epilepsy.<sup>[8]</sup> EEG activity is only a sample; seizures may be infrequent, or the focus may be deep within the brain, not visible on scalp electrodes. Conversely, 0.5–2% of the general population has epileptiform EEG patterns without clinical epilepsy.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neuroimaging</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=80" alt="MRI brain imaging and neurology" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">MRI</h3>
          <p className="mb-4">MRI is the neuroimaging modality of choice for epilepsy evaluation.<sup>[9]</sup> Epilepsy-protocol MRI uses specific sequences (including T1, T2, FLAIR, and fluid attenuation inversion recovery) to identify structural causes such as hippocampal sclerosis, cortical dysplasia, tumors, and vascular malformations. 3T MRI (3 Tesla) provides significantly greater detail than 1.5T in detecting subtle focal abnormalities.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">CT Scan</h3>
          <p className="mb-4">CT is used in emergency settings when MRI is unavailable, to rapidly exclude hemorrhage, large tumors, or acute structural causes.<sup>[10]</sup> CT is inferior to MRI for detecting most epilepsy-causing lesions.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Functional Imaging</h3>
          <p className="mb-4">PET (positron emission tomography) and SPECT (single-photon emission computed tomography) are used in presurgical epilepsy evaluation:<sup>[11]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Interictal FDG-PET:</strong> Shows hypometabolism (reduced glucose use) in the epileptogenic zone</li>
            <li className="mb-2"><strong>Ictal SPECT:</strong> Shows hyperperfusion in the seizure focus during or immediately after a seizure</li>
            <li className="mb-2"><strong>Subtraction ictal SPECT coregistered to MRI (SISCOM):</strong> Combines imaging modalities to localize the seizure focus</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Laboratory Tests</h2>
          <p className="mb-4">Blood tests help rule out metabolic and systemic causes of seizures:<sup>[12]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Complete blood count, electrolytes, glucose, calcium, magnesium</li>
            <li className="mb-2">Liver and kidney function tests (relevant to medication selection)</li>
            <li className="mb-2">Thyroid function</li>
            <li className="mb-2">Toxicology screen</li>
            <li className="mb-2">Autoimmune encephalitis antibody panel (anti-NMDAR, LGI1, CASPR2) when clinically indicated</li>
            <li className="mb-2">Genetic testing — chromosomal microarray, epilepsy gene panels, whole exome sequencing<sup>[13]</sup></li>
          </ul>
          <p className="mb-4">Lumbar puncture is performed when infectious or autoimmune encephalitis is suspected.<sup>[14]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Differential Diagnosis</h2>
          <p className="mb-4">Many conditions can be mistaken for epilepsy:<sup>[15]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Syncope (vasovagal or cardiac):</strong> Fainting can include brief myoclonic jerks, often misidentified as seizures</li>
            <li className="mb-2"><strong>Psychogenic non-epileptic seizures (PNES):</strong> Seizure-like episodes without EEG changes; occur in approximately 20–30% of patients referred to epilepsy centers<sup>[16]</sup></li>
            <li className="mb-2"><strong>Transient ischemic attacks (TIAs):</strong> Focal neurological deficits that may resemble focal seizures</li>
            <li className="mb-2"><strong>Migraine with aura:</strong> Visual and sensory auras may be confused with focal aware seizures</li>
            <li className="mb-2"><strong>Sleep disorders:</strong> Night terrors, REM sleep behavior disorder, hypnic jerks</li>
            <li className="mb-2"><strong>Hyperekplexia:</strong> Exaggerated startle response</li>
            <li className="mb-2"><strong>Breath-holding spells:</strong> In young children<sup>[17]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neuropsychological Assessment</h2>
          <p className="mb-4">Comprehensive neuropsychological testing evaluates cognitive function — particularly important in drug-resistant epilepsy and presurgical evaluation.<sup>[18]</sup> Assessment typically includes:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Memory (verbal and visual)</li>
            <li className="mb-2">Attention and processing speed</li>
            <li className="mb-2">Language and naming</li>
            <li className="mb-2">Executive function</li>
            <li className="mb-2">Visuospatial abilities</li>
            <li className="mb-2">Mood and quality of life measures<sup>[19]</sup></li>
          </ul>
          <p className="mb-4">In temporal lobe epilepsy surgery, the Wada test (intracarotid amobarbital procedure) or functional MRI is used to lateralize language and memory before resection.<sup>[20]</sup></p>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Krumholz, A., Wiebe, S., Gronseth, G. S., et al. (2015). "Evidence-based guideline: Management of an unprovoked first seizure in adults." <em>Neurology</em>, 84(16), 1705–1713.</p>
          <p>[2] Scheffer, I. E., Berkovic, S., Capovilla, G., et al. (2017). "ILAE classification of the epilepsies." <em>Epilepsia</em>, 58(4), 512–521.</p>
          <p>[3] Pohlmann-Eden, B., Beghi, E., Camfield, C., & Camfield, P. (2006). "The first seizure and its management in adults and children." <em>BMJ</em>, 332(7537), 339–342.</p>
          <p>[4] Ottman, R., Hirose, S., Jain, S., et al. (2010). "Genetic testing in the epilepsies." <em>Epilepsia</em>, 51(4), 655–670.</p>
          <p>[5] Blume, W. T., Lüders, H. O., Mizrahi, E., Tassinari, C., van Emde Boas, W., & Engel, J. Jr. (2001). "Glossary of descriptive terminology for ictal semiology." <em>Epilepsia</em>, 42(9), 1212–1218.</p>
          <p>[6] Binnie, C. D., & Stefan, H. (1999). "Modern electroencephalography: Its role in epilepsy management." <em>Clinical Neurophysiology</em>, 110(10), 1671–1697.</p>
          <p>[7] Cascino, G. D. (2002). "Video-EEG monitoring in adults." <em>Epilepsia</em>, 43(Suppl 3), 80–93.</p>
          <p>[8] Pillai, J., & Sperling, M. R. (2006). "Interictal EEG and the diagnosis of epilepsy." <em>Epilepsia</em>, 47(Suppl 1), 14–22.</p>
          <p>[9] Bernasconi, N., Bernasconi, A., Caramanos, Z., et al. (2003). "Mesial temporal damage in temporal lobe epilepsy." <em>Annals of Neurology</em>, 54(6), 793–800.</p>
          <p>[10] Gaillard, W. D., Chiron, C., Cross, J. H., et al. (2009). "Guidelines for imaging infants and children with recent-onset epilepsy." <em>Epilepsia</em>, 50(9), 2147–2153.</p>
          <p>[11] la Fougère, C., Rominger, A., Förster, S., Geisler, J., & Bartenstein, P. (2009). "PET and SPECT in epilepsy." <em>Epilepsy &amp; Behavior</em>, 15(1), 50–55.</p>
          <p>[12] Huff, J. S., & Fountain, N. B. (2011). "Pathophysiology and definitions of seizures and status epilepticus." <em>Emergency Medicine Clinics of North America</em>, 29(1), 1–13.</p>
          <p>[13] Olson, H., Shen, Y., Avallone, J., et al. (2014). "Copy number variation plays an important role in clinical epilepsy." <em>Annals of Neurology</em>, 75(6), 943–958.</p>
          <p>[14] Graus, F., Titulaer, M. J., Balu, R., et al. (2016). "A clinical approach to diagnosis of autoimmune encephalitis." <em>The Lancet Neurology</em>, 15(4), 391–404.</p>
          <p>[15] Benbadis, S. R., & Hauser, W. A. (2000). "An estimate of the prevalence of psychogenic non-epileptic seizures." <em>Seizure</em>, 9(4), 280–281.</p>
          <p>[16] LaFrance, W. C. Jr., & Benbadis, S. R. (2006). "Avoiding the costs of unrecognized psychological nonepileptic seizures." <em>Neurology</em>, 66(11), 1620–1621.</p>
          <p>[17] Stephenson, J. B. (1990). <em>Fits and faints</em>. Mac Keith Press.</p>
          <p>[18] Loring, D. W., & Bauer, R. M. (2010). "Testing the limits: Cautions and concerns regarding the new MMPI-2 restructured form." <em>Psychological Assessment</em>, 22(3), 559–570.</p>
          <p>[19] Helmstaedter, C. (2004). "Neuropsychological aspects of epilepsy surgery." <em>Epilepsy &amp; Behavior</em>, 5(Suppl 1), S45–S55.</p>
          <p>[20] Wada, J., & Rasmussen, T. (1960). "Intracarotid injection of sodium amytal for the lateralization of cerebral speech dominance." <em>Journal of Neurosurgery</em>, 17(2), 266–282.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>
    </article>
  );
}
