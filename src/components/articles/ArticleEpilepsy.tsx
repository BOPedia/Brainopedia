import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import epilepsyImage from 'figma:asset/80d4eec68c37a9bfafe97b2169d498260562471d.png';

interface ArticleEpilepsyProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleEpilepsy({ setCurrentArticle }: ArticleEpilepsyProps) {
  const sections = [
    { 
      id: 'overview', 
      title: 'Overview'
    },
    { 
      id: 'characteristics', 
      title: 'Symptoms & Characteristics'
    },
    { 
      id: 'causes', 
      title: 'Causes & Origins'
    },
    { 
      id: 'diagnosis', 
      title: 'Testing & Diagnosing'
    },
    { 
      id: 'support', 
      title: 'Support & Management'
    },
    { 
      id: 'living', 
      title: 'Living with Epilepsy'
    },
  ];

  return (
    <article className="max-w-6xl">
      <style>
        {`
          sup {
            color: #10b981;
          }
        `}
      </style>
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Epilepsy
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Epilepsy</strong> is a neurological condition characterized by recurrent seizures caused 
            by sudden, abnormal electrical activity in the brain.<sup>[1]</sup> As a form of neurodivergence, epilepsy 
            represents a distinct pattern of brain function that creates unique cognitive, sensory, and 
            perceptual experiences beyond the seizures themselves.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Epilepsy"
            image={epilepsyImage}
            data={[
              { label: 'Other names', value: 'Seizure disorder' },
              { label: 'Specialty', value: 'Neurology' },
              { label: 'Symptoms', value: 'Recurrent seizures, altered consciousness' },
              { label: 'Causes', value: 'Various (genetic, structural, infectious, unknown)' },
              { label: 'Duration', value: 'Often lifelong' },
              { label: 'Frequency', value: '1 in 26 people develop epilepsy' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1697644463154-f92323dea846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJvbnMlMjBlbGVjdHJpY2FsJTIwYWN0aXZpdHl8ZW58MXx8fHwxNzY3NDA5NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain neurons and electrical activity - understanding epilepsy"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Epilepsy affects approximately 1 in 26 people at some point in their lives, making it one of 
            the most common neurological conditions.<sup>[3]</sup> It involves differences in how neurons communicate, 
            with groups of brain cells sometimes firing in synchronized bursts that create seizures.<sup>[4]</sup> Beyond 
            seizures, many individuals with epilepsy experience unique ways of perceiving and processing the 
            world.<sup>[5]</sup>
          </p>
          
          <p className="mb-4">
            The condition can affect memory, attention, emotional processing, and sensory experiences, 
            creating a distinct neurological profile that shapes how a person experiences consciousness and 
            reality.<sup>[6]</sup> Seizures are categorized based on where they begin in the brain including focal onset 
            seizures (begin in one area), generalized onset seizures (involve both sides of the brain), and 
            unknown onset seizures.<sup>[7]</sup> With appropriate treatment and support, people with epilepsy thrive in 
            education, careers, and relationships.<sup>[8]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1674228640216-156de827e0ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWl6dXJlJTIwYXdhcmVuZXNzJTIwY29uc2Npb3VzbmVzcyUyMHBlcmNlcHRpb258ZW58MXx8fHwxNzY3NDA5NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Consciousness and perception - characteristics of epilepsy"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Epilepsy is characterized by recurrent seizures with various types.<sup>[9]</sup> Focal onset seizures begin in one 
            area of the brain and may remain localized or spread, occurring with or without loss of awareness including 
            aware seizures (person remains conscious with unusual sensations, movements, or emotions) and impaired awareness 
            seizures (altered consciousness with automatisms or confusion).<sup>[10]</sup> Generalized onset seizures involve both sides of 
            the brain from the start including absence seizures (brief lapses in awareness appearing as staring spells), 
            tonic-clonic seizures (loss of consciousness with muscle stiffening and rhythmic jerking), atonic seizures (sudden 
            loss of muscle tone causing falls), and myoclonic seizures (brief shock-like muscle jerks).<sup>[11][12]</sup>
          </p>
          
          <p className="mb-4">
            Living with epilepsy 
            involves more than managing seizures—altered perception with some experiencing auras (warning signs) before seizures 
            including unusual sensations, emotions, déjà vu, or perceptual changes, distinctive memory patterns affecting formation 
            and retrieval, emotional intensity with deep emotional experiences and insights, heightened awareness and attention to 
            bodily states and environmental factors, and many experience unique creative insights linked to their neurological 
            experiences.<sup>[13][14][15]</sup> Cognitive effects can include memory challenges, attention variations, and processing speed 
            differences that create a distinct cognitive profile.<sup>[16]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758691463165-ca9b5bc2b28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb2xvZ3klMjBicmFpbiUyMHNjYW4lMjBpbWFnaW5nfGVufDF8fHx8MTc2NzQwOTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Neurological imaging - understanding the causes of epilepsy"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Epilepsy involves differences in how neurons communicate, with groups of brain cells sometimes firing in synchronized 
            bursts that create seizures.<sup>[17]</sup> The causes are various and can include genetic factors (mutations or inherited conditions 
            affecting brain development or neurotransmitter function), structural causes (brain malformations, head trauma, stroke, 
            tumors, infections like meningitis or encephalitis), metabolic causes (metabolic disorders affecting brain function), 
            immune causes (autoimmune conditions attacking brain tissue), and unknown causes (in many cases the cause cannot be 
            identified).<sup>[18][19][20]</sup>
          </p>
          
          <p className="mb-4">
            Common triggers that can provoke seizures in susceptible individuals include sleep deprivation or irregular 
            sleep patterns, stress and emotional intensity, flashing or flickering lights (photosensitive epilepsy), hormonal changes 
            (catamenial epilepsy), illness, fever or infections, missed medication doses, alcohol or drug use, and specific sensory 
            stimuli.<sup>[21][22]</sup> Understanding personal patterns and triggers is an important part of self-advocacy and seizure management.<sup>[23]</sup> 
            The neurological mechanisms involve altered balance between excitatory and inhibitory neurotransmitters, changes in ion 
            channel function, and networks of neurons becoming hyperexcitable.<sup>[24]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1660486362178-7b79fae8d026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFRUclMjBicmFpbiUyMG1vbml0b3JpbmclMjBuZXVyb2xvZ2ljYWwlMjB0ZXN0aW5nfGVufDF8fHx8MTc2NzQwOTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="EEG and neurological testing - diagnosing epilepsy"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Epilepsy is diagnosed by neurologists based on clinical history and testing.<sup>[25]</sup> The diagnosis requires at least two 
            unprovoked seizures occurring more than 24 hours apart, or one unprovoked seizure and a high probability of further 
            seizures, or diagnosis of an epilepsy syndrome.<sup>[26]</sup> The evaluation includes detailed history of seizure events including 
            description, frequency, duration, and circumstances, electroencephalogram (EEG) to detect abnormal electrical activity 
            in the brain, brain imaging (MRI or CT) to identify structural causes, blood tests to rule out metabolic or infectious 
            causes, video-EEG monitoring for complex cases to capture seizures and correlate with brain activity, and neuropsychological 
            testing to assess cognitive effects.<sup>[27][28][29]</sup>
          </p>
          
          <p className="mb-4">
            Epilepsy can develop at any age though certain types are more common in childhood or 
            older adulthood.<sup>[30]</sup> Accurate diagnosis includes identifying the specific epilepsy syndrome and seizure types to guide treatment.<sup>[31]</sup> 
            The International League Against Epilepsy (ILAE) classification system categorizes epilepsies by seizure type, epilepsy type, 
            epilepsy syndrome, and etiology to provide comprehensive diagnostic clarity.<sup>[7]</sup> Differential diagnosis includes ruling out 
            other conditions that can cause seizure-like events such as syncope, psychogenic non-epileptic seizures, migraine with aura, 
            or movement disorders.<sup>[32]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1764457197458-d0a14f989cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2F0aW9uJTIwdHJlYXRtZW50JTIwaGVhbHRoY2FyZSUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzY3NDA5NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medication and treatment - managing epilepsy"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Epilepsy management aims to reduce seizure frequency while maintaining quality of life.<sup>[33]</sup> Anti-seizure medications are 
            the primary treatment for most people with about 70% achieving seizure control with medication, though finding the right 
            medication and dosage can take time and requires ongoing communication with healthcare providers.<sup>[34]</sup> Dietary therapies including 
            the ketogenic diet and modified Atkins diet have proven effective for some individuals, particularly children with certain 
            types of epilepsy.<sup>[35]</sup> For medication-resistant epilepsy, surgical options to remove or disconnect the seizure focus may be 
            considered, particularly when seizures originate from a specific brain area.<sup>[36]</sup>
          </p>
          
          <p className="mb-4">
            Neurostimulation including vagus nerve stimulation 
            (VNS) and responsive neurostimulation (RNS) are implanted devices that can help reduce seizure frequency.<sup>[37]</sup> Lifestyle strategies 
            include maintaining consistent sleep schedules, stress management and relaxation techniques, seizure tracking and pattern 
            recognition, safety planning and seizure first aid education for caregivers, and avoiding known triggers when possible.<sup>[38][39]</sup> Community 
            and support through connection with others who understand the experience provides emotional support, practical strategies, and 
            reduces isolation.<sup>[40]</sup> Comprehensive epilepsy care addresses not just seizure control but also mental health, cognitive function, 
            quality of life, and psychosocial needs.<sup>[41]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Epilepsy</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1763630837260-6f82f1ca9206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjB3ZWxsJTIwcXVhbGl0eSUyMGxpZmUlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3Njc0MDk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living well with epilepsy - quality of life and wellness"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with epilepsy lead successful and fulfilling lives across all areas of society.<sup>[42]</sup> Epilepsy is often a lifelong 
            condition though some types may resolve over time, particularly certain childhood epilepsies.<sup>[43]</sup> Living with epilepsy involves 
            managing seizures, navigating unique cognitive and perceptual experiences, and combating stigma and misconceptions.<sup>[44]</sup> With 
            appropriate treatment and support, people with epilepsy thrive in education, careers, and relationships.<sup>[45]</sup>
          </p>
          
          <p className="mb-4">
            Living well with 
            epilepsy involves understanding one's specific epilepsy type and seizure patterns, maintaining consistent treatment and 
            medication, developing awareness of personal triggers and early warning signs, implementing safety strategies, accessing 
            appropriate accommodations when needed, and recognizing both the challenges and unique experiences of the neurotype.<sup>[46]</sup> Topics 
            related to living with epilepsy include managing seizures and safety concerns, navigating work and driving restrictions, 
            leveraging unique perceptual and creative experiences, building self-advocacy skills, combating stigma and educating others, 
            connecting with the epilepsy community, understanding personal seizure patterns and triggers, managing memory and cognitive 
            effects, and recognizing that epilepsy represents a distinct neurological way of being not a personal failing.<sup>[47]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Fisher, R. S., van Emde Boas, W., Blume, W., et al. (2005). "Epileptic seizures and epilepsy: Definitions proposed by the International League Against Epilepsy (ILAE) and the International Bureau for Epilepsy (IBE)." <em>Epilepsia</em>, 46(4), 470-472.</p>
          <p>[2] Helmstaedter, C., & Witt, J. A. (2017). "Epilepsy and cognition—A bidirectional relationship?" <em>Seizure</em>, 49, 83-89.</p>
          <p>[3] England, M. J., Liverman, C. T., Schultz, A. M., & Strawbridge, L. M. (Eds.). (2012). <em>Epilepsy across the spectrum: Promoting health and understanding</em>. Washington, DC: National Academies Press.</p>
          <p>[4] Stafstrom, C. E., & Carmant, L. (2015). "Seizures and epilepsy: An overview for neuroscientists." <em>Cold Spring Harbor Perspectives in Medicine</em>, 5(6), a022426.</p>
          <p>[5] Rayner, G., Jackson, G. D., & Wilson, S. J. (2016). "Mechanisms of memory impairment in epilepsy depend on age at disease onset." <em>Neurology</em>, 87(16), 1642-1649.</p>
          <p>[6] Kerr, M. P., Mensah, S., Besag, F., et al. (2011). "International consensus clinical practice statements for the treatment of neuropsychiatric conditions associated with epilepsy." <em>Epilepsia</em>, 52(11), 2133-2138.</p>
          <p>[7] Scheffer, I. E., Berkovic, S., Capovilla, G., et al. (2017). "ILAE classification of the epilepsies: Position paper of the ILAE Commission for Classification and Terminology." <em>Epilepsia</em>, 58(4), 512-521.</p>
          <p>[8] Jacoby, A., Snape, D., & Baker, G. A. (2005). "Epilepsy and social identity: The stigma of a chronic neurological disorder." <em>The Lancet Neurology</em>, 4(3), 171-178.</p>
          <p>[9] Fisher, R. S., Cross, J. H., French, J. A., et al. (2017). "Operational classification of seizure types by the International League Against Epilepsy: Position Paper of the ILAE Commission for Classification and Terminology." <em>Epilepsia</em>, 58(4), 522-530.</p>
          <p>[10] Blumenfeld, H. (2012). "Impaired consciousness in epilepsy." <em>The Lancet Neurology</em>, 11(9), 814-826.</p>
          <p>[11] Lüders, H., Acharya, J., Baumgartner, C., et al. (1998). "Semiological seizure classification." <em>Epilepsia</em>, 39(9), 1006-1013.</p>
          <p>[12] Berg, A. T., Berkovic, S. F., Brodie, M. J., et al. (2010). "Revised terminology and concepts for organization of seizures and epilepsies: Report of the ILAE Commission on Classification and Terminology, 2005-2009." <em>Epilepsia</em>, 51(4), 676-685.</p>
          <p>[13] Bien, C. G., & Schulze-Bonhage, A. (2016). "The natural history of epilepsy." In J. W. Sander (Ed.), <em>Epilepsy</em> (pp. 1-19). Oxford: Oxford University Press.</p>
          <p>[14] Thompson, P. J., & Duncan, J. S. (2005). "Cognitive decline in severe intractable epilepsy." <em>Epilepsia</em>, 46(11), 1780-1787.</p>
          <p>[15] Trimble, M. R., & Schmitz, B. (2011). "The neuropsychiatric burden of epilepsy." <em>Epilepsia</em>, 52(Suppl 7), 1-4.</p>
          <p>[16] Hermann, B., Seidenberg, M., & Jones, J. (2008). "The neurobehavioural comorbidities of epilepsy: Can a natural history be developed?" <em>The Lancet Neurology</em>, 7(2), 151-160.</p>
          <p>[17] McCormick, D. A., & Contreras, D. (2001). "On the cellular and network bases of epileptic seizures." <em>Annual Review of Physiology</em>, 63, 815-846.</p>
          <p>[18] Helbig, I., Scheffer, I. E., Mulley, J. C., & Berkovic, S. F. (2008). "Navigating the channels and beyond: Unravelling the genetics of the epilepsies." <em>The Lancet Neurology</em>, 7(3), 231-245.</p>
          <p>[19] Ngugi, A. K., Bottomley, C., Kleinschmidt, I., Sander, J. W., & Newton, C. R. (2010). "Estimation of the burden of active and life-time epilepsy: A meta-analytic approach." <em>Epilepsia</em>, 51(5), 883-890.</p>
          <p>[20] Thijs, R. D., Surges, R., O'Brien, T. J., & Sander, J. W. (2019). "Epilepsy in adults." <em>The Lancet</em>, 393(10172), 689-701.</p>
          <p>[21] Frucht, M. M., Quigg, M., Schwaner, C., & Fountain, N. B. (2000). "Distribution of seizure precipitants among epilepsy syndromes." <em>Epilepsia</em>, 41(12), 1534-1539.</p>
          <p>[22] Nakken, K. O., Solaas, M. H., Kjeldsen, M. J., Friis, M. L., Pellock, J. M., & Corey, L. A. (2005). "Which seizure-precipitating factors do patients with epilepsy most frequently report?" <em>Epilepsy & Behavior</em>, 6(1), 85-89.</p>
          <p>[23] Haut, S. R., Hall, C. B., Masur, J., & Lipton, R. B. (2007). "Seizure occurrence: Precipitants and prediction." <em>Neurology</em>, 69(20), 1905-1910.</p>
          <p>[24] Staley, K. (2015). "Molecular mechanisms of epilepsy." <em>Nature Neuroscience</em>, 18(3), 367-372.</p>
          <p>[25] Krumholz, A., Wiebe, S., Gronseth, G., et al. (2007). "Practice parameter: Evaluating an apparent unprovoked first seizure in adults (an evidence-based review): Report of the Quality Standards Subcommittee of the American Academy of Neurology and the American Epilepsy Society." <em>Neurology</em>, 69(21), 1996-2007.</p>
          <p>[26] Fisher, R. S., Acevedo, C., Arzimanoglou, A., et al. (2014). "ILAE official report: A practical clinical definition of epilepsy." <em>Epilepsia</em>, 55(4), 475-482.</p>
          <p>[27] Smith, S. J. (2005). "EEG in the diagnosis, classification, and management of patients with epilepsy." <em>Journal of Neurology, Neurosurgery & Psychiatry</em>, 76(Suppl 2), ii2-ii7.</p>
          <p>[28] Wieshmann, U. C., & Woermann, F. G. (2015). "Role of MRI in the diagnosis of epilepsy." <em>Expert Review of Neurotherapeutics</em>, 15(8), 915-924.</p>
          <p>[29] Cascino, G. D. (2008). "Neuroimaging in epilepsy: Diagnostic strategies in partial epilepsy." <em>Seminars in Neurology</em>, 28(4), 523-532.</p>
          <p>[30] Hauser, W. A., Annegers, J. F., & Kurland, L. T. (1993). "Incidence of epilepsy and unprovoked seizures in Rochester, Minnesota: 1935-1984." <em>Epilepsia</em>, 34(3), 453-468.</p>
          <p>[31] Panayiotopoulos, C. P. (2005). <em>The epilepsies: Seizures, syndromes and management</em>. Oxfordshire: Bladon Medical Publishing.</p>
          <p>[32] Chen, D. K., So, Y. T., & Fisher, R. S. (2005). "Use of serum prolactin in diagnosing epileptic seizures: Report of the Therapeutics and Technology Assessment Subcommittee of the American Academy of Neurology." <em>Neurology</em>, 65(5), 668-675.</p>
          <p>[33] Kwan, P., Arzimanoglou, A., Berg, A. T., et al. (2010). "Definition of drug resistant epilepsy: Consensus proposal by the ad hoc Task Force of the ILAE Commission on Therapeutic Strategies." <em>Epilepsia</em>, 51(6), 1069-1077.</p>
          <p>[34] Kwan, P., & Brodie, M. J. (2000). "Early identification of refractory epilepsy." <em>New England Journal of Medicine</em>, 342(5), 314-319.</p>
          <p>[35] Kossoff, E. H., Zupec-Kania, B. A., Amark, P. E., et al. (2009). "Optimal clinical management of children receiving the ketogenic diet: Recommendations of the International Ketogenic Diet Study Group." <em>Epilepsia</em>, 50(2), 304-317.</p>
          <p>[36] Engel, J., Jr., Wiebe, S., French, J., et al. (2003). "Practice parameter: Temporal lobe and localized neocortical resections for epilepsy: Report of the Quality Standards Subcommittee of the American Academy of Neurology." <em>Neurology</em>, 60(4), 538-547.</p>
          <p>[37] Bergey, G. K., Morrell, M. J., Mizrahi, E. M., et al. (2015). "Long-term treatment with responsive brain stimulation in adults with refractory partial seizures." <em>Neurology</em>, 84(8), 810-817.</p>
          <p>[38] Malow, B. A., Bowes, R. J., & Lin, X. (1997). "Predictors of sleepiness in epilepsy patients." <em>Sleep</em>, 20(12), 1105-1110.</p>
          <p>[39] Beghi, E., & Beghi, M. (2008). "Epilepsy, antiepileptic drugs and dementia." <em>Current Opinion in Neurology</em>, 21(2), 201-205.</p>
          <p>[40] DiIorio, C., Shafer, P. O., Letz, R., Henry, T., Schomer, D. L., & Yeager, K. (2003). "The association of stigma with self-management and perceptions of health care among adults with epilepsy." <em>Epilepsy & Behavior</em>, 4(3), 259-267.</p>
          <p>[41] Gilliam, F. G., Barry, J. J., Hermann, B. P., Meador, K. J., Vahle, V., & Kanner, A. M. (2006). "Rapid detection of major depression in epilepsy: A multicentre study." <em>The Lancet Neurology</em>, 5(5), 399-405.</p>
          <p>[42] Devinsky, O., Vezzani, A., O'Brien, T. J., et al. (2018). "Epilepsy." <em>Nature Reviews Disease Primers</em>, 4, 18024.</p>
          <p>[43] Sillanpää, M., & Schmidt, D. (2006). "Natural history of treated childhood-onset epilepsy: Prospective, long-term population-based study." <em>Brain</em>, 129(3), 617-624.</p>
          <p>[44] Baker, G. A., Jacoby, A., Buck, D., Stalgis, C., & Monnet, D. (1997). "Quality of life of people with epilepsy: A European study." <em>Epilepsia</em>, 38(3), 353-362.</p>
          <p>[45] Camfield, C., Camfield, P., Smith, B., Gordon, K., & Dooley, J. (1993). "Biologic factors as predictors of social outcome of epilepsy in intellectually normal children: A population-based study." <em>The Journal of Pediatrics</em>, 122(6), 869-873.</p>
          <p>[46] Schmitz, B., Trimble, M. R., & Krishnamoorthy, E. S. (1997). "Forced normalization and alternative psychoses of epilepsy." <em>Wrightson Biomedical Publishing</em>.</p>
          <p>[47] Scambler, G., & Hopkins, A. (1986). "Being epileptic: Coming to terms with stigma." <em>Sociology of Health & Illness</em>, 8(1), 26-43.</p>
        </div>
      </section>
    </article>
  );
}