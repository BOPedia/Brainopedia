import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface EpilepsyOverviewProps {
  setCurrentArticle?: (article: string) => void;
}

export function EpilepsyOverview({ setCurrentArticle }: EpilepsyOverviewProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Epilepsy: Overview</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Epilepsy is one of the most common neurological conditions worldwide, affecting approximately 1 in 26 people at some point in their lives.<sup>[1]</sup> As a form of neurodivergence, epilepsy represents a distinct pattern of brain activity that shapes how a person perceives and experiences the world — not only during seizures, but in the intervals between them as well.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">What Is Epilepsy?</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=80" alt="Brain neuron activity illustration" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Definition</h3>
          <p className="mb-4">Epilepsy is a neurological disorder characterized by recurrent, unprovoked seizures caused by sudden, abnormal electrical discharges in the brain.<sup>[3]</sup> The International League Against Epilepsy (ILAE) defines epilepsy as at least two unprovoked seizures occurring more than 24 hours apart, one unprovoked seizure with a high probability of further seizures, or diagnosis of an epilepsy syndrome.<sup>[4]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">How Seizures Occur</h3>
          <p className="mb-4">The brain communicates through electrical signals between neurons. In epilepsy, groups of neurons sometimes fire in an abnormally synchronized burst, disrupting normal brain function.<sup>[5]</sup> The nature of the seizure depends on where in the brain the abnormal activity begins and how far it spreads.<sup>[6]</sup></p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Epilepsy vs. Seizure Disorder</h3>
          <p className="mb-4">Not all seizures indicate epilepsy. A single seizure triggered by a specific cause — fever, low blood sugar, or alcohol withdrawal — is not epilepsy. Epilepsy requires recurrent, unprovoked seizures.<sup>[7]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Types of Epilepsy</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Focal Onset Epilepsies</h3>
          <p className="mb-4">Seizures begin in one area (focus) of the brain. They may remain localized or spread to involve more of the brain.<sup>[8]</sup> Examples include temporal lobe epilepsy (the most common focal epilepsy in adults), frontal lobe epilepsy, and occipital lobe epilepsy.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Generalized Onset Epilepsies</h3>
          <p className="mb-4">Seizures involve both hemispheres of the brain from the outset.<sup>[9]</sup> Examples include:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Childhood absence epilepsy — brief staring spells</li>
            <li className="mb-2">Juvenile myoclonic epilepsy (JME) — morning myoclonic jerks, tonic-clonic seizures</li>
            <li className="mb-2">Dravet syndrome — severe, often medication-resistant</li>
            <li className="mb-2">Lennox-Gastaut syndrome — multiple seizure types, intellectual disability</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Unknown Onset</h3>
          <p className="mb-4">When the beginning of the seizure is not observed or cannot be classified.<sup>[10]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Prevalence</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=80" alt="Healthcare and neurology setting" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Approximately <strong>3.4 million people</strong> in the United States have epilepsy<sup>[11]</sup></li>
            <li className="mb-2"><strong>65 million people</strong> worldwide have epilepsy<sup>[12]</sup></li>
            <li className="mb-2">1 in 26 people will develop epilepsy during their lifetime<sup>[13]</sup></li>
            <li className="mb-2">Epilepsy affects all ages, sexes, races, and ethnicities</li>
            <li className="mb-2">Highest incidence in young children and adults over 65<sup>[14]</sup></li>
            <li className="mb-2">~80% of people with epilepsy live in low- and middle-income countries<sup>[15]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Co-occurring Conditions</h2>
          <p className="mb-4">Epilepsy frequently occurs alongside other neurological and psychiatric conditions:<sup>[16]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Depression:</strong> 2–3× more prevalent than in the general population</li>
            <li className="mb-2"><strong>Anxiety disorders:</strong> Affect approximately 20–25% of people with epilepsy<sup>[17]</sup></li>
            <li className="mb-2"><strong>ADHD:</strong> Particularly common in children with epilepsy</li>
            <li className="mb-2"><strong>Autism spectrum disorder:</strong> Higher rates in epilepsy, especially in childhood-onset forms</li>
            <li className="mb-2"><strong>Migraine:</strong> Bidirectional relationship with epilepsy<sup>[18]</sup></li>
            <li className="mb-2"><strong>Sleep disorders:</strong> Disrupted sleep architecture common</li>
            <li className="mb-2"><strong>Intellectual disability:</strong> Present in some epilepsy syndromes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">The Neurodivergent Perspective</h2>
          <p className="mb-4">Beyond managing seizures, many people with epilepsy describe a fundamentally different relationship with consciousness, time, and perception.<sup>[19]</sup> Some individuals describe heightened creativity, intense emotional experiences, and unique perceptual states — particularly those associated with temporal lobe epilepsy.<sup>[20]</sup> Historical figures believed to have had epilepsy include Julius Caesar, Napoleon Bonaparte, Fyodor Dostoevsky, and Vincent van Gogh.</p>
          <p className="mb-4">Epilepsy carries significant social stigma in many cultures, which can be more disabling than the seizures themselves.<sup>[21]</sup> The neurodiversity framework encourages recognizing epilepsy as a brain difference that, while requiring medical management, also shapes identity and experience in meaningful ways.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Looking Ahead</h2>
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">Key Takeaways:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>Epilepsy is defined by recurrent, unprovoked seizures and affects 1 in 26 people</li>
              <li>There are many types of epilepsy, classified by seizure onset and etiology</li>
              <li>About 70% of people with epilepsy achieve seizure control with medication<sup>[22]</sup></li>
              <li>Co-occurring mental health conditions are common and deserve attention</li>
              <li>With appropriate treatment and support, people with epilepsy live full, meaningful lives</li>
              <li>Stigma remains a major barrier — education and advocacy are critical</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Hauser, W. A., Annegers, J. F., & Kurland, L. T. (1993). "Incidence of epilepsy and unprovoked seizures in Rochester, Minnesota: 1935–1984." <em>Epilepsia</em>, 34(3), 453–468.</p>
          <p>[2] Hermann, B., Seidenberg, M., & Jones, J. (2008). "The neurobehavioural comorbidities of epilepsy." <em>The Lancet Neurology</em>, 7(2), 151–160.</p>
          <p>[3] Fisher, R. S., van Emde Boas, W., Blume, W., et al. (2005). "Epileptic seizures and epilepsy: Definitions proposed by the ILAE and the IBE." <em>Epilepsia</em>, 46(4), 470–472.</p>
          <p>[4] Fisher, R. S., Acevedo, C., Arzimanoglou, A., et al. (2014). "ILAE official report: A practical clinical definition of epilepsy." <em>Epilepsia</em>, 55(4), 475–482.</p>
          <p>[5] Stafstrom, C. E., & Carmant, L. (2015). "Seizures and epilepsy: An overview for neuroscientists." <em>Cold Spring Harbor Perspectives in Medicine</em>, 5(6), a022426.</p>
          <p>[6] Scheffer, I. E., Berkovic, S., Capovilla, G., et al. (2017). "ILAE classification of the epilepsies." <em>Epilepsia</em>, 58(4), 512–521.</p>
          <p>[7] Beghi, E. (2020). "The epidemiology of epilepsy." <em>Neuroepidemiology</em>, 54(2), 185–191.</p>
          <p>[8] Fisher, R. S., Cross, J. H., French, J. A., et al. (2017). "Operational classification of seizure types by the ILAE." <em>Epilepsia</em>, 58(4), 522–530.</p>
          <p>[9] Berg, A. T., Berkovic, S. F., Brodie, M. J., et al. (2010). "Revised terminology and concepts for organization of seizures and epilepsies." <em>Epilepsia</em>, 51(4), 676–685.</p>
          <p>[10] Scheffer, I. E., et al. (2017). "ILAE classification of the epilepsies." <em>Epilepsia</em>, 58(4), 512–521.</p>
          <p>[11] Zack, M. M., & Kobau, R. (2017). "National and state estimates of the numbers of adults and children with active epilepsy." <em>MMWR</em>, 66(31), 821–825.</p>
          <p>[12] Ngugi, A. K., Bottomley, C., Kleinschmidt, I., Sander, J. W., & Newton, C. R. (2010). "Estimation of the burden of active and life-time epilepsy." <em>Epilepsia</em>, 51(5), 883–890.</p>
          <p>[13] Hesdorffer, D. C., Logroscino, G., Benn, E. K., Katri, N., Cascino, G., & Hauser, W. A. (2011). "Estimating risk for developing epilepsy: A population-based study in Rochester, Minnesota." <em>Neurology</em>, 76(1), 23–27.</p>
          <p>[14] Hauser, W. A. (1997). "Incidence and prevalence." In J. Engel Jr. & T. A. Pedley (Eds.), <em>Epilepsy: A comprehensive textbook</em>. Lippincott-Raven.</p>
          <p>[15] World Health Organization. (2019). <em>Epilepsy: A public health imperative</em>. Geneva: WHO.</p>
          <p>[16] Kerr, M. P., Mensah, S., Besag, F., et al. (2011). "International consensus clinical practice statements for the treatment of neuropsychiatric conditions associated with epilepsy." <em>Epilepsia</em>, 52(11), 2133–2138.</p>
          <p>[17] Scott, A. J., Sharpe, L., Hunt, C., & Gandy, M. (2017). "Anxiety and depressive disorders in people with epilepsy: A meta-analysis." <em>Epilepsia</em>, 58(6), 973–982.</p>
          <p>[18] Ottman, R., & Lipton, R. B. (1994). "Comorbidity of migraine and epilepsy." <em>Neurology</em>, 44(11), 2105–2110.</p>
          <p>[19] Trimble, M. R., & Schmitz, B. (Eds.). (2011). <em>The neuropsychiatry of epilepsy</em> (2nd ed.). Cambridge University Press.</p>
          <p>[20] Waxman, S. G., & Geschwind, N. (1975). "The interictal behavior syndrome of temporal lobe epilepsy." <em>Archives of General Psychiatry</em>, 32(12), 1580–1586.</p>
          <p>[21] Jacoby, A., Snape, D., & Baker, G. A. (2005). "Epilepsy and social identity: The stigma of a chronic neurological disorder." <em>The Lancet Neurology</em>, 4(3), 171–178.</p>
          <p>[22] Kwan, P., & Brodie, M. J. (2000). "Early identification of refractory epilepsy." <em>New England Journal of Medicine</em>, 342(5), 314–319.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>
    </article>
  );
}
