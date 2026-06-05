import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface EpilepsySymptomsProps {
  setCurrentArticle?: (article: string) => void;
}

export function EpilepsySymptoms({ setCurrentArticle }: EpilepsySymptomsProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Epilepsy: Symptoms &amp; Characteristics</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Epilepsy is characterized by recurrent seizures, but the experience of epilepsy extends well beyond the seizures themselves.<sup>[1]</sup> Between seizures, many individuals experience cognitive, emotional, and sensory differences that are part of their neurological profile. Understanding the full symptom picture helps individuals, families, and educators provide better support.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Focal Onset Seizures</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1080&q=80" alt="Brain activity and neural patterns" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Focal Aware Seizures (Simple Partial)</h3>
          <p className="mb-4">The person remains conscious and aware. Symptoms depend on which brain region is involved:<sup>[3]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Motor: rhythmic jerking, stiffening, or weakness on one side of the body</li>
            <li className="mb-2">Sensory: tingling, numbness, visual changes, strange smells or tastes</li>
            <li className="mb-2">Autonomic: heart racing, sweating, nausea, pallor</li>
            <li className="mb-2">Psychic: déjà vu, jamais vu, fear, euphoria, dreamlike states</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Focal Impaired Awareness Seizures (Complex Partial)</h3>
          <p className="mb-4">Consciousness or awareness is altered. Automatisms (repetitive semi-purposeful movements) are common — lip smacking, hand fumbling, picking at clothing, walking in circles.<sup>[4]</sup> The person may appear confused or dazed and typically has no memory of the event.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Focal to Bilateral Tonic-Clonic</h3>
          <p className="mb-4">A focal seizure that spreads to involve both hemispheres, resulting in a convulsion.<sup>[5]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Generalized Onset Seizures</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Tonic-Clonic (Grand Mal)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Tonic phase: sudden stiffening of the body, loss of consciousness, may cry out</li>
            <li className="mb-2">Clonic phase: rhythmic jerking of limbs<sup>[6]</sup></li>
            <li className="mb-2">Duration: typically 1–3 minutes</li>
            <li className="mb-2">Post-ictal confusion and fatigue often lasting minutes to hours</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Absence Seizures (Petit Mal)</h3>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Brief lapse of awareness, typically 5–30 seconds<sup>[7]</sup></li>
            <li className="mb-2">Staring spell, may have subtle eye fluttering</li>
            <li className="mb-2">Abrupt start and end; no post-ictal confusion</li>
            <li className="mb-2">Can occur dozens to hundreds of times per day</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Myoclonic Seizures</h3>
          <p className="mb-4">Brief, shock-like muscle jerks, often in the morning. Common in juvenile myoclonic epilepsy.<sup>[8]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Atonic Seizures (Drop Attacks)</h3>
          <p className="mb-4">Sudden loss of muscle tone causing the person to fall. Protective headgear is often necessary.<sup>[9]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Tonic Seizures</h3>
          <p className="mb-4">Sudden muscle stiffening, usually during sleep, can cause falls if standing.<sup>[10]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Aura</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=1080&q=80" alt="Sensory perception and consciousness" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <p className="mb-4">An aura is a focal aware seizure that precedes a larger seizure — essentially a warning sign.<sup>[11]</sup> Common aura experiences include:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Rising epigastric sensation:</strong> A wave of feeling rising from the stomach</li>
            <li className="mb-2"><strong>Déjà vu / jamais vu:</strong> Intense familiarity or unfamiliarity with surroundings</li>
            <li className="mb-2"><strong>Fear or dread:</strong> Sudden intense anxiety without cause</li>
            <li className="mb-2"><strong>Visual disturbances:</strong> Flashing lights, colored spots, visual distortions</li>
            <li className="mb-2"><strong>Strange smells or tastes:</strong> Often described as burning or metallic<sup>[12]</sup></li>
            <li className="mb-2"><strong>Emotional experiences:</strong> Sudden joy, sadness, or detachment (depersonalization)</li>
          </ul>
          <p className="mb-4">Auras allow some individuals time to get to safety before a larger seizure. Aura recognition is an important part of seizure management.<sup>[13]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Post-Ictal State</h2>
          <p className="mb-4">The post-ictal period is the recovery phase immediately after a seizure.<sup>[14]</sup> Symptoms vary by seizure type and individual but may include:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Confusion and disorientation:</strong> Can last minutes to hours after tonic-clonic seizures</li>
            <li className="mb-2"><strong>Extreme fatigue:</strong> Often described as feeling "hit by a truck"</li>
            <li className="mb-2"><strong>Memory loss:</strong> Amnesia for the seizure itself and sometimes surrounding events<sup>[15]</sup></li>
            <li className="mb-2"><strong>Headache:</strong> Common after convulsive seizures</li>
            <li className="mb-2"><strong>Todd's paralysis:</strong> Temporary weakness or paralysis on one side of the body, lasting minutes to hours<sup>[16]</sup></li>
            <li className="mb-2"><strong>Emotional disturbance:</strong> Agitation, depression, or psychosis (rare)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Seizure Triggers</h2>
          <p className="mb-4">Many people with epilepsy can identify factors that increase their seizure likelihood:<sup>[17]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Sleep deprivation:</strong> One of the most common and potent triggers</li>
            <li className="mb-2"><strong>Stress:</strong> Emotional or physical stress lowers seizure threshold</li>
            <li className="mb-2"><strong>Missed medications:</strong> Skipping doses is a leading cause of breakthrough seizures<sup>[18]</sup></li>
            <li className="mb-2"><strong>Photosensitivity:</strong> Flashing lights trigger seizures in ~3% of people with epilepsy</li>
            <li className="mb-2"><strong>Hormonal changes:</strong> Catamenial epilepsy — seizures worsen around menstruation</li>
            <li className="mb-2"><strong>Illness and fever:</strong> Can lower seizure threshold</li>
            <li className="mb-2"><strong>Alcohol:</strong> Both intoxication and withdrawal can trigger seizures<sup>[19]</sup></li>
            <li className="mb-2"><strong>Specific stimuli:</strong> Music, reading, or eating (rare reflex epilepsies)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Between-Seizure (Interictal) Symptoms</h2>
          <p className="mb-4">Epilepsy affects brain function between seizures as well:<sup>[20]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Memory difficulties:</strong> Particularly verbal memory in temporal lobe epilepsy</li>
            <li className="mb-2"><strong>Attention and concentration:</strong> Processing speed and sustained attention often affected</li>
            <li className="mb-2"><strong>Emotional processing:</strong> Heightened emotional responses, mood variability</li>
            <li className="mb-2"><strong>Fatigue:</strong> Chronic fatigue beyond post-ictal effects<sup>[21]</sup></li>
            <li className="mb-2"><strong>Language difficulties:</strong> Word-finding problems in dominant temporal lobe epilepsy</li>
            <li className="mb-2"><strong>Medication side effects:</strong> Cognitive dulling, sedation from anti-seizure medications</li>
          </ul>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Devinsky, O., Vezzani, A., O'Brien, T. J., et al. (2018). "Epilepsy." <em>Nature Reviews Disease Primers</em>, 4, 18024.</p>
          <p>[2] Helmstaedter, C., & Witt, J. A. (2017). "Epilepsy and cognition — A bidirectional relationship?" <em>Seizure</em>, 49, 83–89.</p>
          <p>[3] Fisher, R. S., Cross, J. H., French, J. A., et al. (2017). "Operational classification of seizure types by the ILAE." <em>Epilepsia</em>, 58(4), 522–530.</p>
          <p>[4] Blumenfeld, H. (2012). "Impaired consciousness in epilepsy." <em>The Lancet Neurology</em>, 11(9), 814–826.</p>
          <p>[5] Engel, J. Jr. (2001). "A proposed diagnostic scheme for people with epileptic seizures and with epilepsy." <em>Epilepsia</em>, 42(6), 796–803.</p>
          <p>[6] Lüders, H., Acharya, J., Baumgartner, C., et al. (1998). "Semiological seizure classification." <em>Epilepsia</em>, 39(9), 1006–1013.</p>
          <p>[7] Panayiotopoulos, C. P. (1999). "Typical absence seizures and their treatment." <em>Archives of Disease in Childhood</em>, 81(4), 351–355.</p>
          <p>[8] Janz, D. (1985). "Epilepsy with impulsive petit mal (juvenile myoclonic epilepsy)." <em>Acta Neurologica Scandinavica</em>, 72(5), 449–459.</p>
          <p>[9] Oguni, H., Fukuyama, Y., Imaizumi, Y., & Uehara, T. (1992). "Video-EEG analysis of drop seizures in myoclonic astatic epilepsy of early childhood." <em>Epilepsia</em>, 33(5), 805–813.</p>
          <p>[10] Beaumanoir, A., & Dravet, C. (1992). "The Lennox-Gastaut syndrome." In J. Roger et al. (Eds.), <em>Epileptic syndromes in infancy, childhood and adolescence</em>. John Libbey.</p>
          <p>[11] Schulz, R., Lüders, H. O., Hoppe, M., Tuxhorn, I., May, T., & Ebner, A. (2001). "Interictal EEG and ictal scalp EEG propagation are highly predictive of surgical outcome in mesial temporal lobe epilepsy." <em>Epilepsia</em>, 41(5), 564–570.</p>
          <p>[12] Daly, D. D. (1975). "Ictal clinical manifestations of complex partial seizures." <em>Advances in Neurology</em>, 11, 57–83.</p>
          <p>[13] Rajna, P., Clemens, B., Csibri, É., et al. (1997). "Hungarian multicentre epidemiologic study of the warning and initial symptoms (prodrome, aura) of epileptic seizures." <em>Seizure</em>, 6(5), 361–368.</p>
          <p>[14] Tomson, T., Lindbom, U., & Nilsson, B. Y. (1992). "Nonconvulsive status epilepticus in adults: Thirty-two consecutive patients from a general hospital population." <em>Epilepsia</em>, 33(5), 829–835.</p>
          <p>[15] Kapur, N. (1993). "Transient epileptic amnesia — A clinically distinct form of neurological memory disorder." <em>Brain</em>, 116(6), 1395–1411.</p>
          <p>[16] Rolak, L. A., & Rutecki, P. (1992). "Todd's paralysis." <em>Journal of Neurology, Neurosurgery &amp; Psychiatry</em>, 55(4), 297–301.</p>
          <p>[17] Frucht, M. M., Quigg, M., Schwaner, C., & Fountain, N. B. (2000). "Distribution of seizure precipitants among epilepsy syndromes." <em>Epilepsia</em>, 41(12), 1534–1539.</p>
          <p>[18] Ettinger, A. B., & Argoff, C. E. (2007). "Use of antiepileptic drugs in the treatment of epilepsy and bipolar disorder." <em>Epilepsy &amp; Behavior</em>, 10(Suppl 1), S1–S9.</p>
          <p>[19] Hillbom, M., Pieninkeroinen, I., & Leone, M. (2003). "Seizures in alcohol-dependent patients." <em>CNS Drugs</em>, 17(14), 1013–1030.</p>
          <p>[20] Thompson, P. J., & Duncan, J. S. (2005). "Cognitive decline in severe intractable epilepsy." <em>Epilepsia</em>, 46(11), 1780–1787.</p>
          <p>[21] Jacoby, A., Baker, G. A., Steen, N., Potts, P., & Chadwick, D. W. (1996). "The clinical course of epilepsy and its psychosocial correlates." <em>Epilepsia</em>, 37(2), 148–161.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>
    </article>
  );
}
