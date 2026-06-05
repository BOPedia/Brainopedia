import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface EpilepsyCausesProps {
  setCurrentArticle?: (article: string) => void;
}

export function EpilepsyCauses({ setCurrentArticle }: EpilepsyCausesProps) {
  return (
    <article className="max-w-6xl">
      <style>{`sup { color: #10b981; }`}</style>
      <div className="mb-6">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>

      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">Epilepsy: Causes &amp; Etiology</h1>

      <div className="space-y-8">
        <div>
          <p className="mb-4">Epilepsy is not a single disease with a single cause — it is a diverse group of disorders united by the common feature of recurrent seizures.<sup>[1]</sup> The ILAE classifies epilepsy etiology into six categories: structural, genetic, infectious, metabolic, immune, and unknown. Identifying the cause is essential for treatment decisions and prognosis.<sup>[2]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Neurological Mechanisms</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=80" alt="Neural pathways and brain activity" className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Ion Channel Dysfunction</h3>
          <p className="mb-4">Many epilepsies arise from defects in ion channels — the proteins that regulate the flow of sodium, potassium, calcium, and chloride ions across neuronal membranes.<sup>[3]</sup> Mutations in genes encoding these channels (channelopathies) alter the electrical excitability of neurons, making them more prone to synchronized, abnormal firing.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Excitatory/Inhibitory Imbalance</h3>
          <p className="mb-4">Seizures reflect an imbalance between excitatory (primarily glutamatergic) and inhibitory (primarily GABAergic) neurotransmission.<sup>[4]</sup> Too much glutamate activity or too little GABA activity can lower the seizure threshold. This imbalance may be caused by genetic factors, structural damage, or metabolic disturbances.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cortical Hyperexcitability</h3>
          <p className="mb-4">The epileptogenic zone — the brain region responsible for generating seizures — exhibits abnormal hyperexcitability between seizures.<sup>[5]</sup> This may involve altered synaptic plasticity, abnormal neuronal networks, or loss of inhibitory interneurons.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Genetic Causes</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Monogenic Epilepsies</h3>
          <p className="mb-4">A single gene mutation causes some well-defined epilepsy syndromes:<sup>[6]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>SCN1A (Dravet syndrome):</strong> Loss-of-function mutations in the sodium channel gene cause severe, treatment-resistant epilepsy beginning in infancy</li>
            <li className="mb-2"><strong>KCNQ2/KCNQ3:</strong> Potassium channel mutations cause benign neonatal epilepsy</li>
            <li className="mb-2"><strong>CDKL5 deficiency disorder:</strong> Mutations in a kinase gene causing early-onset epileptic encephalopathy</li>
            <li className="mb-2"><strong>PCDH19:</strong> Protocadherin gene mutation causing epilepsy predominantly in females</li>
            <li className="mb-2"><strong>TSC1/TSC2:</strong> Tuberous sclerosis complex — benign tumors form throughout the brain<sup>[7]</sup></li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Polygenic and Complex Inheritance</h3>
          <p className="mb-4">Common epilepsies such as juvenile myoclonic epilepsy involve multiple genetic variants that interact with environmental factors.<sup>[8]</sup> First-degree relatives of people with idiopathic generalized epilepsy have a 2–4× increased risk compared to the general population.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Copy Number Variants</h3>
          <p className="mb-4">Chromosomal deletions or duplications — such as 15q11.2 deletion, 16p13.11 duplication, and 1q21.1 deletion — are found at higher rates in people with epilepsy.<sup>[9]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Structural Causes</h2>
          <ImageWithFallback src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=80" alt="Brain MRI and neuroimaging" className="w-64 h-auto rounded-md border border-gray-300 float-left mr-6 mb-4" />
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Hippocampal Sclerosis</h3>
          <p className="mb-4">The most common structural cause of drug-resistant temporal lobe epilepsy in adults.<sup>[10]</sup> Involves neuronal loss, gliosis, and synaptic reorganization in the hippocampus. Often associated with a history of prolonged febrile seizures in childhood.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Cortical Dysplasia</h3>
          <p className="mb-4">Malformations of cortical development — areas where neurons failed to migrate or differentiate normally during fetal brain development.<sup>[11]</sup> Focal cortical dysplasia (FCD) is a common cause of focal drug-resistant epilepsy and is increasingly identified by high-resolution MRI.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Brain Tumors</h3>
          <p className="mb-4">Low-grade gliomas, gangliogliomas, and dysembryoplastic neuroepithelial tumors (DNETs) frequently present with epilepsy.<sup>[12]</sup> Seizures are often the first symptom of a brain tumor.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Vascular Malformations</h3>
          <p className="mb-4">Cavernous malformations and arteriovenous malformations (AVMs) can cause chronic focal epilepsy through repeated microhemorrhages and the deposition of blood-breakdown products (hemosiderin).<sup>[13]</sup></p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Acquired Causes</h2>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Traumatic Brain Injury</h3>
          <p className="mb-4">TBI is a leading cause of acquired epilepsy, particularly in young adults and veterans.<sup>[14]</sup> The risk of post-traumatic epilepsy increases with injury severity: penetrating injuries carry up to a 50% lifetime risk. Epilepsy may develop months to years after injury.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Stroke and Cerebrovascular Disease</h3>
          <p className="mb-4">Stroke is the most common cause of new-onset epilepsy in adults over age 60.<sup>[15]</sup> Both ischemic and hemorrhagic strokes can cause epilepsy; the risk is highest in the cortical regions. Approximately 10–15% of stroke survivors develop epilepsy within 5 years.</p>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">CNS Infections</h3>
          <p className="mb-4">Infections of the brain and its coverings are a major cause of epilepsy worldwide, especially in low- and middle-income countries:<sup>[16]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Neurocysticercosis:</strong> Infection with Taenia solium tapeworm larvae — the leading infectious cause of epilepsy globally</li>
            <li className="mb-2"><strong>Bacterial meningitis:</strong> Risk of epilepsy 7–15× higher after bacterial meningitis</li>
            <li className="mb-2"><strong>Viral encephalitis:</strong> Herpes simplex encephalitis, Japanese encephalitis</li>
            <li className="mb-2"><strong>HIV-related:</strong> Epilepsy occurs in approximately 10% of people with HIV/AIDS</li>
          </ul>
          <h3 className="text-[#0c264d] font-bold mb-3 text-lg">Perinatal Injury and Hypoxia</h3>
          <p className="mb-4">Hypoxic-ischemic encephalopathy (HIE) at birth is a significant cause of epilepsy in children.<sup>[17]</sup> Premature birth, low birth weight, and birth complications are associated with increased epilepsy risk.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Metabolic Causes</h2>
          <p className="mb-4">Metabolic disorders can cause seizures by disrupting the chemical environment of neurons:<sup>[18]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Pyridoxine (vitamin B6) deficiency:</strong> Causes neonatal seizures responsive to B6 supplementation</li>
            <li className="mb-2"><strong>GLUT1 deficiency syndrome:</strong> Impaired glucose transport across the blood-brain barrier</li>
            <li className="mb-2"><strong>Phenylketonuria (PKU):</strong> Untreated PKU causes epilepsy through toxic accumulation of phenylalanine</li>
            <li className="mb-2"><strong>Mitochondrial disorders:</strong> MELAS, Leigh syndrome, and other mitochondrial diseases commonly cause epilepsy</li>
            <li className="mb-2"><strong>Storage disorders:</strong> Neuronal ceroid lipofuscinoses (Batten disease) and other lysosomal storage diseases<sup>[19]</sup></li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Immune and Autoimmune Causes</h2>
          <p className="mb-4">Autoimmune encephalitis — immune attacks on the brain — has emerged as a recognized and treatable cause of epilepsy:<sup>[20]</sup></p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Anti-NMDA receptor encephalitis:</strong> Associated with ovarian teratomas; prominent psychiatric symptoms and seizures</li>
            <li className="mb-2"><strong>LGI1 antibody encephalitis:</strong> Faciobrachial dystonic seizures are characteristic</li>
            <li className="mb-2"><strong>CASPR2 antibodies:</strong> Associated with Morvan's syndrome and limbic encephalitis</li>
            <li className="mb-2"><strong>Rasmussen encephalitis:</strong> Progressive unilateral encephalitis causing focal seizures and hemiplegia in children<sup>[21]</sup></li>
          </ul>
          <p className="mb-4">Autoimmune epilepsies are important to recognize because they respond to immunotherapy rather than standard anti-seizure medications.</p>
        </div>

        <div>
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Unknown Etiology</h2>
          <p className="mb-4">Despite thorough investigation, no cause is identified in a significant proportion of epilepsy cases.<sup>[22]</sup> This category has shrunk as genetic testing and neuroimaging have advanced. "Idiopathic" historically meant unknown cause; the ILAE now uses "idiopathic" specifically for epilepsies with a presumed genetic basis and no structural abnormality, distinguishing it from truly unknown cases ("cryptogenic" epilepsy in older terminology).</p>
          <div className="bg-white rounded-md border-2 border-[#2abcd4] p-6">
            <h3 className="text-[#0c264d] font-bold mb-3">ILAE Etiological Categories:</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li><strong>Structural:</strong> Brain abnormality visible on imaging — dysplasia, tumor, scar tissue, vascular malformation</li>
              <li><strong>Genetic:</strong> Known or inferred gene mutation as the direct cause</li>
              <li><strong>Infectious:</strong> Ongoing or past CNS infection</li>
              <li><strong>Metabolic:</strong> Metabolic disorder with epilepsy as a core feature</li>
              <li><strong>Immune:</strong> Immune-mediated inflammation as the primary cause</li>
              <li><strong>Unknown:</strong> Cause not yet identified — not a diagnosis of exclusion but a current state of knowledge</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Devinsky, O., Vezzani, A., O'Brien, T. J., et al. (2018). "Epilepsy." <em>Nature Reviews Disease Primers</em>, 4, 18024.</p>
          <p>[2] Scheffer, I. E., Berkovic, S., Capovilla, G., et al. (2017). "ILAE classification of the epilepsies." <em>Epilepsia</em>, 58(4), 512–521.</p>
          <p>[3] Catterall, W. A. (2014). "Sodium channels, inherited epilepsy, and antiepileptic drugs." <em>Annual Review of Pharmacology and Toxicology</em>, 54, 317–338.</p>
          <p>[4] Treiman, D. M. (2001). "GABAergic mechanisms in epilepsy." <em>Epilepsia</em>, 42(Suppl 3), 8–12.</p>
          <p>[5] Staley, K. J., & Dudek, F. E. (2006). "Interictal spikes and epileptogenesis." <em>Epilepsy Currents</em>, 6(6), 199–202.</p>
          <p>[6] Helbig, I., Mefford, H. C., Sharp, A. J., et al. (2009). "15q13.3 microdeletions increase risk of idiopathic generalized epilepsy." <em>Nature Genetics</em>, 41(2), 160–162.</p>
          <p>[7] Curatolo, P., Bombardieri, R., & Jozwiak, S. (2008). "Tuberous sclerosis." <em>The Lancet</em>, 372(9639), 657–668.</p>
          <p>[8] Ottman, R. (2005). "Analysis of genetically complex epilepsies." <em>Epilepsia</em>, 46(Suppl 10), 7–14.</p>
          <p>[9] Mefford, H. C., Muhle, H., Ostertag, P., et al. (2010). "Genome-wide copy number variation in epilepsy." <em>PLoS Genetics</em>, 6(5), e1000962.</p>
          <p>[10] Blümcke, I., Thom, M., Aronica, E., et al. (2013). "International consensus classification of hippocampal sclerosis in temporal lobe epilepsy." <em>Epilepsia</em>, 54(7), 1315–1329.</p>
          <p>[11] Tassi, L., Colombo, N., Garbelli, R., et al. (2002). "Focal cortical dysplasia: Neuropathological subtypes, EEG, neuroimaging and surgical outcome." <em>Brain</em>, 125(8), 1719–1732.</p>
          <p>[12] Prayson, R. A. (2010). "Pathology of epilepsy." <em>Surgical Pathology Clinics</em>, 3(4), 921–944.</p>
          <p>[13] Josephson, C. B., Leach, J. P., Duncan, R., et al. (2011). "Seizure risk from cavernous or arteriovenous malformations." <em>Neurology</em>, 76(18), 1548–1554.</p>
          <p>[14] Annegers, J. F., Hauser, W. A., Coan, S. P., & Rocca, W. A. (1998). "A population-based study of seizures after traumatic brain injuries." <em>New England Journal of Medicine</em>, 338(1), 20–24.</p>
          <p>[15] Beghi, E., D'Alessandro, R., Beretta, S., et al. (2011). "Incidence and predictors of acute symptomatic seizures after stroke." <em>Neurology</em>, 77(20), 1785–1793.</p>
          <p>[16] Carpio, A., & Hauser, W. A. (2009). "Epilepsy in the developing world." <em>Current Neurology and Neuroscience Reports</em>, 9(4), 319–326.</p>
          <p>[17] Glass, H. C., Pham, T. N., Danielsen, B., Towner, D., Glidden, D., & Wu, Y. W. (2009). "Antenatal and intrapartum risk factors for seizures in term newborns." <em>JAMA</em>, 302(22), 2443–2452.</p>
          <p>[18] Gospe, S. M. (2010). "Pyridoxine-dependent epilepsy." In R. A. Pagon et al. (Eds.), <em>GeneReviews</em>. University of Washington.</p>
          <p>[19] Mole, S. E., & Cotman, S. L. (2015). "Genetics of the neuronal ceroid lipofuscinoses (Batten disease)." <em>Biochimica et Biophysica Acta</em>, 1852(10), 2237–2241.</p>
          <p>[20] Graus, F., Titulaer, M. J., Balu, R., et al. (2016). "A clinical approach to diagnosis of autoimmune encephalitis." <em>The Lancet Neurology</em>, 15(4), 391–404.</p>
          <p>[21] Bien, C. G., Granata, T., Antozzi, C., et al. (2005). "Pathogenesis, diagnosis and treatment of Rasmussen encephalitis." <em>Brain</em>, 128(3), 454–471.</p>
          <p>[22] Shorvon, S. D. (2011). "The etiologic classification of epilepsy." <em>Epilepsia</em>, 52(6), 1052–1057.</p>
        </div>
      </section>

      <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentArticle?.('epilepsy'); }} className="text-[#2abcd4] hover:underline cursor-pointer">← Back to Epilepsy</a>
      </div>
    </article>
  );
}
