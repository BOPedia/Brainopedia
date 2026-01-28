import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import tbiImage from 'figma:asset/151be65d989df3a370a653de48251f7afb21b7c5.png';

interface ArticleTBIProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleTBI({ setCurrentArticle }: ArticleTBIProps) {
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
      title: 'Living with TBI'
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
        Traumatic Brain Injury (TBI)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Traumatic Brain Injury (TBI)</strong> occurs when an external force injures the brain, 
            causing temporary or permanent changes to cognitive function, emotional regulation, sensory 
            processing, and behavior.<sup>[1]</sup> When these changes persist beyond initial recovery, TBI becomes a 
            form of acquired neurodivergence—a fundamental shift in how the brain processes information and 
            experiences the world.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Traumatic Brain Injury"
            image={tbiImage}
            data={[
              { label: 'Other names', value: 'TBI, acquired brain injury' },
              { label: 'Specialty', value: 'Neurology, Rehabilitation Medicine' },
              { label: 'Cause', value: 'External force injuring the brain' },
              { label: 'Classification', value: 'Acquired neurodivergence when permanent' },
              { label: 'Duration', value: 'Variable (days to lifelong)' },
              { label: 'Frequency', value: '2.8 million new cases annually (US)' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758691463110-697a814b2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGluanVyeSUyMHRyYXVtYSUyMGhlYWQlMjBpbXBhY3R8ZW58MXx8fHwxNzY3NDEwMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain imaging showing traumatic brain injury"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Approximately 2.8 million TBIs occur annually in the United States alone, with an estimated 
            5.3 million Americans currently living with TBI-related disabilities.<sup>[3]</sup> TBI can result from 
            falls, motor vehicle accidents, sports injuries, assaults, blast injuries, or any event causing 
            the brain to move rapidly inside the skull or be penetrated by an object.<sup>[4]</sup>
          </p>
          
          <p className="mb-4">
            The effects of TBI are 
            highly variable, depending on which areas of the brain are damaged, the severity of injury, and 
            individual factors.<sup>[5]</sup> Some individuals make significant recovery, while others experience permanent 
            changes requiring lifelong accommodation.<sup>[6]</sup> TBI is often called an "invisible disability" because 
            cognitive and emotional changes may not be outwardly apparent, leading to misunderstanding and lack 
            of support.<sup>[7]</sup>
          </p>
          
          <p className="mb-4">
            Importantly, a TBI doesn't erase who someone was—it creates a new neurological reality.<sup>[8]</sup> 
            Understanding TBI as acquired neurodivergence validates this experience and emphasizes the need for 
            ongoing support and accommodation.<sup>[9]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1740908900846-271f4f021b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2duaXRpdmUlMjBtZW1vcnklMjBjb25mdXNpb24lMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY3NDEwMzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cognitive and memory challenges following TBI"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            TBI can affect any aspect of cognition depending on injury location and severity.<sup>[10]</sup> Attention and concentration 
            difficulties include difficulty sustaining focus, being easily distracted, trouble dividing attention between 
            multiple tasks, and mental fatigue with reduced stamina.<sup>[11]</sup> Memory challenges include short-term memory difficulties, 
            challenges forming new memories, difficulty retrieving memories from before injury, forgetting conversations or 
            appointments, and problems with prospective memory.<sup>[12]</sup>
          </p>
          
          <p className="mb-4">
            Executive functioning difficulties include planning and organization 
            challenges, difficulty with multi-step tasks, impaired problem-solving and reasoning, reduced cognitive flexibility, 
            poor impulse control and judgment, and difficulty initiating tasks.<sup>[13]</sup> Processing speed changes include slowed information 
            processing, needing more time to understand or respond, delayed reaction times, and fatigue from mental effort.<sup>[14]</sup>
          </p>
          
          <p className="mb-4">
            Communication 
            and language challenges include word-finding difficulties, trouble organizing thoughts into speech, challenges with social 
            communication, and difficulty understanding complex or abstract language.<sup>[15]</sup> Sensory processing changes include sensitivity to 
            light, sound or touch, difficulty filtering sensory information, visual processing changes, vestibular dysfunction, and changes 
            to taste or smell.<sup>[16]</sup>
          </p>
          
          <p className="mb-4">
            Emotional dysregulation includes mood swings and emotional lability, increased irritability anger or aggression, 
            depression and anxiety, emotional blunting or apathy, and loss of emotional control.<sup>[17]</sup> Behavioral and personality changes include 
            impulsivity and disinhibition, social inappropriateness, reduced empathy or self-awareness, rigidity and inflexibility, and loss 
            of initiative.<sup>[18]</sup> Physical effects include chronic headaches and pain, fatigue and sleep disturbances, motor coordination difficulties, 
            and hormonal changes.<sup>[19]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1758404958502-44f156617bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NpZGVudCUyMGVtZXJnZW5jeSUyMGluanVyeSUyMHRyYXVtYXxlbnwxfHx8fDE3Njc0MTAzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Emergency trauma - causes of traumatic brain injury"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            TBI occurs when an external force injures the brain.<sup>[20]</sup> Classification by mechanism includes closed head injury (skull remains 
            intact but brain is injured by impact, rapid acceleration/deceleration, or rotational forces), penetrating injury (object 
            breaks through skull and enters brain tissue), and blast injury (pressure waves from explosions cause diffuse damage).<sup>[21]</sup>
          </p>
          
          <p className="mb-4">
            TBI 
            can result from falls, motor vehicle accidents, sports injuries, assaults, blast injuries in military, or any event causing 
            the brain to move rapidly inside the skull.<sup>[22]</sup> Severity ranges from mild TBI or concussion (brief loss of consciousness or confusion 
            with most recovering within days to weeks though 15-30% experience persistent post-concussive symptoms, often dismissed as "just 
            a concussion" despite real cognitive changes), to moderate TBI (loss of consciousness for minutes to hours, confusion lasting days 
            to weeks, significant cognitive physical and behavioral changes), to severe TBI (extended loss of consciousness or coma, profound 
            cognitive and functional impairments, often resulting in permanent disability).<sup>[23][24]</sup>
          </p>
          
          <p className="mb-4">
            Repeated mild TBIs in sports or military can cause 
            cumulative damage.<sup>[25]</sup> The brain injury causes structural damage to neurons and neural pathways, disrupts neurotransmitter systems, 
            causes inflammation and secondary injury processes, and fundamentally alters how the brain processes information creating acquired 
            neurodivergence.<sup>[26][27]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHNjYW4lMjBDVCUyME1SSSUyMG5ldXJvaW1hZ2luZ3xlbnwxfHx8fDE3Njc0MTAzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain imaging and neurological testing for TBI diagnosis"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            TBI is diagnosed by emergency medicine physicians, neurologists, or rehabilitation specialists based on injury history and 
            clinical presentation.<sup>[28]</sup> Initial assessment includes Glasgow Coma Scale to assess level of consciousness, neurological examination, 
            brain imaging (CT scan for acute injury to detect bleeding or skull fractures, MRI for detailed assessment of brain tissue), and 
            assessment of injury mechanism and severity.<sup>[29][30]</sup>
          </p>
          
          <p className="mb-4">
            For ongoing effects, comprehensive evaluation includes neuropsychological testing to 
            assess cognitive functioning across multiple domains, functional assessment of daily living skills and adaptive behavior, assessment 
            of emotional and behavioral changes, screening for co-occurring conditions (depression, anxiety, PTSD), physical and occupational 
            therapy assessments, and tracking symptoms over time to distinguish recovering from persistent effects.<sup>[31][32]</sup>
          </p>
          
          <p className="mb-4">
            Diagnosis of severity includes 
            mild, moderate, or severe based on duration of loss of consciousness, post-traumatic amnesia, and Glasgow Coma Scale scores.<sup>[33]</sup> Many 
            individuals with mild TBI are under-diagnosed or dismissed despite experiencing persistent post-concussive symptoms requiring recognition 
            of TBI as acquired neurodivergence when effects persist.<sup>[34]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1764314138160-5f04f4a50dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWhhYmlsaXRhdGlvbiUyMHRoZXJhcHklMjByZWNvdmVyeSUyMHN1cHBvcnR8ZW58MXx8fHwxNzY3NDEwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Rehabilitation and therapeutic support for TBI recovery"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Recovery and adaptation following TBI require comprehensive, individualized, and often long-term support.<sup>[35]</sup> Rehabilitation services 
            include cognitive rehabilitation therapy, speech-language therapy for communication and cognition, occupational therapy for daily 
            living skills, physical therapy for motor function, neuropsychological assessment and treatment planning, and vocational rehabilitation.<sup>[36]</sup>
          </p>
          
          <p className="mb-4">
            Cognitive accommodations include external memory aids (notebooks, apps, alarms), environmental modifications (reduced distractions, 
            organization systems), task simplification and breaking down complex activities, extended time for processing and task completion, 
            written instructions and checklists, and reduced work or academic load.<sup>[37]</sup> Emotional and mental health support includes individual therapy 
            adapted for cognitive changes, support groups with other TBI survivors, family education and counseling, psychiatric medication management 
            when appropriate, and grief counseling for identity and loss.<sup>[38]</sup>
          </p>
          
          <p className="mb-4">
            Lifestyle management includes pacing activities to prevent cognitive fatigue, 
            prioritizing sleep and rest, managing sensory environments, avoiding alcohol and substance use, and regular exercise adapted to abilities.<sup>[39]</sup> 
            Education and advocacy includes educating family, friends and employers about TBI, self-advocacy for needed accommodations, understanding 
            TBI as acquired neurodivergence, and connecting with disability community and resources.<sup>[40]</sup> Long-term considerations include that recovery can 
            continue for years through neuroplasticity, some changes may be permanent requiring acceptance and adaptation, and there is increased risk 
            of dementia and neurological conditions later in life.<sup>[41]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with TBI</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1695370993551-8ac683cd6134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGFwdGF0aW9uJTIwcmVzaWxpZW5jZSUyMGxpZmUlMjBxdWFsaXR5JTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY3NDEwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Adaptation and quality of life after TBI"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Living with TBI means navigating a changed neurological reality.<sup>[42]</sup> With understanding, appropriate support, and accommodation, individuals 
            can adapt, find new paths forward, and experience quality of life.<sup>[43]</sup> Recognizing TBI as acquired neurodivergence validates the experience 
            of living with a fundamentally altered brain while honoring the person's continued identity and potential.<sup>[44]</sup>
          </p>
          
          <p className="mb-4">
            Many individuals with TBI 
            describe feeling like themselves but also fundamentally changed, navigating a world that no longer matches their pre-injury brain.<sup>[45]</sup> Mental 
            health impacts include increased risk of depression, anxiety, PTSD, grief over loss of pre-injury self, identity challenges and adjustment 
            difficulties, social isolation, and increased suicide risk requiring comprehensive support.<sup>[46]</sup>
          </p>
          
          <p className="mb-4">
            Living well with TBI involves accessing comprehensive 
            rehabilitation services, implementing cognitive accommodations and environmental modifications, developing new strategies for memory, organization 
            and cognitive demands, accessing emotional and mental health support, educating others about the invisible nature of TBI, building self-advocacy 
            skills, and connecting with the TBI survivor community.<sup>[47]</sup> Topics related to living with TBI include adapting to cognitive changes, managing cognitive 
            fatigue and pacing activities, navigating emotional and personality changes, rebuilding identity after acquired brain injury, accessing appropriate 
            accommodations and supports, managing relationships and social connections, understanding TBI as acquired neurodivergence not personal failing, and 
            recognizing that recovery is an ongoing process with potential for continued adaptation and quality of life.<sup>[48]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Maas, A. I., Stocchetti, N., & Bullock, R. (2008). "Moderate and severe traumatic brain injury in adults." <em>The Lancet Neurology</em>, 7(8), 728-741.</p>
          <p>[2] Rabinowitz, A. R., & Levin, H. S. (2014). "Cognitive sequelae of traumatic brain injury." <em>Psychiatric Clinics</em>, 37(1), 1-11.</p>
          <p>[3] Taylor, C. A., Bell, J. M., Breiding, M. J., & Xu, L. (2017). "Traumatic brain injury-related emergency department visits, hospitalizations, and deaths—United States, 2007 and 2013." <em>MMWR Surveillance Summaries</em>, 66(9), 1-16.</p>
          <p>[4] Langlois, J. A., Rutland-Brown, W., & Wald, M. M. (2006). "The epidemiology and impact of traumatic brain injury: A brief overview." <em>The Journal of Head Trauma Rehabilitation</em>, 21(5), 375-378.</p>
          <p>[5] Dikmen, S. S., Corrigan, J. D., Levin, H. S., Machamer, J., Stiers, W., & Weisskopf, M. G. (2009). "Cognitive outcome following traumatic brain injury." <em>The Journal of Head Trauma Rehabilitation</em>, 24(6), 430-438.</p>
          <p>[6] Zaloshnja, E., Miller, T., Langlois, J. A., & Selassie, A. W. (2008). "Prevalence of long-term disability from traumatic brain injury in the civilian population of the United States, 2005." <em>The Journal of Head Trauma Rehabilitation</em>, 23(6), 394-400.</p>
          <p>[7] Rao, V., & Lyketsos, C. (2000). "Neuropsychiatric sequelae of traumatic brain injury." <em>Psychosomatics</em>, 41(2), 95-103.</p>
          <p>[8] Nochi, M. (1998). "'Loss of self' in the narratives of people with traumatic brain injuries: A qualitative analysis." <em>Social Science & Medicine</em>, 46(7), 869-878.</p>
          <p>[9] Velikonja, D., Tate, R., Ponsford, J., et al. (2014). "INCOG recommendations for management of cognition following traumatic brain injury, part V: Memory." <em>The Journal of Head Trauma Rehabilitation</em>, 29(4), 369-386.</p>
          <p>[10] McAllister, T. W., Flashman, L. A., McDonald, B. C., & Saykin, A. J. (2006). "Mechanisms of working memory dysfunction after mild and moderate TBI: Evidence from functional MRI and neurogenetics." <em>Journal of Neurotrauma</em>, 23(10), 1450-1467.</p>
          <p>[11] Azouvi, P., Arnaud, V., Dromer, E., & Vallat-Azouvi, C. (2017). "Neuropsychology of traumatic brain injury: An expert overview." <em>Revue Neurologique</em>, 173(7-8), 461-472.</p>
          <p>[12] Vakil, E. (2005). "The effect of moderate to severe traumatic brain injury (TBI) on different aspects of memory: A selective review." <em>Journal of Clinical and Experimental Neuropsychology</em>, 27(8), 977-1021.</p>
          <p>[13] McDonald, B. C., Flashman, L. A., & Saykin, A. J. (2002). "Executive dysfunction following traumatic brain injury: Neural substrates and treatment strategies." <em>NeuroRehabilitation</em>, 17(4), 333-344.</p>
          <p>[14] Dymowski, A. R., Owens, J. A., Ponsford, J. L., & Willmott, C. (2015). "Speed of processing and strategic control of attention after traumatic brain injury." <em>Journal of Clinical and Experimental Neuropsychology</em>, 37(10), 1024-1035.</p>
          <p>[15] MacDonald, S., & Johnson, C. J. (2005). "Assessment of subtle cognitive-communication deficits following acquired brain injury: A normative study of the Functional Assessment of Verbal Reasoning and Executive Strategies (FAVRES)." <em>Brain Injury</em>, 19(11), 895-902.</p>
          <p>[16] Greenwald, B. D., Kapoor, N., & Singh, A. D. (2012). "Visual impairments in the first year after traumatic brain injury." <em>Brain Injury</em>, 26(11), 1338-1359.</p>
          <p>[17] Osborn, A. J., Mathias, J. L., & Fairweather-Schmidt, A. K. (2014). "Depression following adult, non-penetrating traumatic brain injury: A meta-analysis examining methodological variables and sample characteristics." <em>Neuroscience & Biobehavioral Reviews</em>, 47, 1-15.</p>
          <p>[18] Ciurli, P., Formisano, R., Bivona, U., Cantagallo, A., & Angelelli, P. (2011). "Neuropsychiatric disorders in persons with severe traumatic brain injury: Prevalence, phenomenology, and relationship with demographic, clinical, and functional features." <em>The Journal of Head Trauma Rehabilitation</em>, 26(2), 116-126.</p>
          <p>[19] Nampiaparampil, D. E. (2008). "Prevalence of chronic pain after traumatic brain injury: A systematic review." <em>JAMA</em>, 300(6), 711-719.</p>
          <p>[20] Ghajar, J. (2000). "Traumatic brain injury." <em>The Lancet</em>, 356(9233), 923-929.</p>
          <p>[21] Meaney, D. F., & Smith, D. H. (2011). "Biomechanics of concussion." <em>Clinics in Sports Medicine</em>, 30(1), 19-31.</p>
          <p>[22] Faul, M., Xu, L., Wald, M. M., & Coronado, V. G. (2010). <em>Traumatic brain injury in the United States: Emergency department visits, hospitalizations and deaths 2002-2006</em>. Atlanta, GA: Centers for Disease Control and Prevention.</p>
          <p>[23] McCrory, P., Meeuwisse, W., Dvorak, J., et al. (2017). "Consensus statement on concussion in sport—the 5th international conference on concussion in sport held in Berlin, October 2016." <em>British Journal of Sports Medicine</em>, 51(11), 838-847.</p>
          <p>[24] Stocchetti, N., & Zanier, E. R. (2016). "Chronic impact of traumatic brain injury on outcome and quality of life: A narrative review." <em>Critical Care</em>, 20(1), 148.</p>
          <p>[25] McKee, A. C., Cantu, R. C., Nowinski, C. J., et al. (2009). "Chronic traumatic encephalopathy in athletes: Progressive tauopathy after repetitive head injury." <em>Journal of Neuropathology & Experimental Neurology</em>, 68(7), 709-735.</p>
          <p>[26] Werner, C., & Engelhard, K. (2007). "Pathophysiology of traumatic brain injury." <em>British Journal of Anaesthesia</em>, 99(1), 4-9.</p>
          <p>[27] Xiong, Y., Mahmood, A., & Chopp, M. (2013). "Animal models of traumatic brain injury." <em>Nature Reviews Neuroscience</em>, 14(2), 128-142.</p>
          <p>[28] Teasdale, G., & Jennett, B. (1974). "Assessment of coma and impaired consciousness: A practical scale." <em>The Lancet</em>, 304(7872), 81-84.</p>
          <p>[29] Jagoda, A. S., Cantrill, S. V., Wears, R. L., et al. (2002). "Clinical policy: Neuroimaging and decision making in adult mild traumatic brain injury in the acute setting." <em>Annals of Emergency Medicine</em>, 40(2), 231-249.</p>
          <p>[30] Lee, H., Wintermark, M., Gean, A. D., Ghajar, J., Manley, G. T., & Mukherjee, P. (2008). "Focal lesions in acute mild traumatic brain injury and neurocognitive outcome: CT versus 3T MRI." <em>Journal of Neurotrauma</em>, 25(9), 1049-1056.</p>
          <p>[31] Lezak, M. D., Howieson, D. B., Bigler, E. D., & Tranel, D. (2012). <em>Neuropsychological assessment</em> (5th ed.). New York: Oxford University Press.</p>
          <p>[32] Ponsford, J., Draper, K., & Schönberger, M. (2008). "Functional outcome 10 years after traumatic brain injury: Its relationship with demographic, injury severity, and cognitive and emotional status." <em>Journal of the International Neuropsychological Society</em>, 14(2), 233-242.</p>
          <p>[33] Stein, S. C., & Spettell, C. (1995). "The Head Injury Severity Scale (HISS): A practical classification of closed-head injury." <em>Brain Injury</em>, 9(5), 437-444.</p>
          <p>[34] Iverson, G. L. (2005). "Outcome from mild traumatic brain injury." <em>Current Opinion in Psychiatry</em>, 18(3), 301-317.</p>
          <p>[35] Cicerone, K. D., Langenbahn, D. M., Braden, C., et al. (2011). "Evidence-based cognitive rehabilitation: Updated review of the literature from 2003 through 2008." <em>Archives of Physical Medicine and Rehabilitation</em>, 92(4), 519-530.</p>
          <p>[36] Turner-Stokes, L., Pick, A., Nair, A., Disler, P. B., & Wade, D. T. (2015). "Multi-disciplinary rehabilitation for acquired brain injury in adults of working age." <em>Cochrane Database of Systematic Reviews</em>, (12), CD004170.</p>
          <p>[37] Sohlberg, M. M., & Mateer, C. A. (2001). <em>Cognitive rehabilitation: An integrative neuropsychological approach</em>. New York: Guilford Press.</p>
          <p>[38] Bryant, R. A., O'Donnell, M. L., Creamer, M., McFarlane, A. C., Clark, C. R., & Silove, D. (2010). "The psychiatric sequelae of traumatic injury." <em>American Journal of Psychiatry</em>, 167(3), 312-320.</p>
          <p>[39] Ponsford, J. L., Ziino, C., Parcell, D. L., et al. (2012). "Fatigue and sleep disturbance following traumatic brain injury—their nature, causes, and potential treatments." <em>The Journal of Head Trauma Rehabilitation</em>, 27(3), 224-233.</p>
          <p>[40] Lefebvre, H., Pelchat, D., Swaine, B., Gélinas, I., & Levert, M. J. (2005). "The experiences of individuals with a traumatic brain injury, families, physicians and health professionals regarding care provided throughout the continuum." <em>Brain Injury</em>, 19(8), 585-597.</p>
          <p>[41] Nordström, P., Michaëlsson, K., Gustafson, Y., & Nordström, A. (2014). "Traumatic brain injury and young onset dementia: A nationwide cohort study." <em>Annals of Neurology</em>, 75(3), 374-381.</p>
          <p>[42] Cantor, J. B., Ashman, T., Gordon, W., et al. (2008). "Fatigue after traumatic brain injury and its impact on participation and quality of life." <em>The Journal of Head Trauma Rehabilitation</em>, 23(1), 41-51.</p>
          <p>[43] Cappa, K. A., Conger, J. C., & Conger, A. J. (2011). "Injury severity and outcome: A meta-analysis of prospective studies on TBI outcome." <em>Health Psychology</em>, 30(4), 542-560.</p>
          <p>[44] Gracey, F., Palmer, S., Rous, B., et al. (2008). "'Feeling part of things': Personal construction of self after brain injury." <em>Neuropsychological Rehabilitation</em>, 18(5-6), 627-650.</p>
          <p>[45] Levack, W. M., Kayes, N. M., & Fadyl, J. K. (2010). "Experience of recovery and outcome following traumatic brain injury: A metasynthesis of qualitative research." <em>Disability and Rehabilitation</em>, 32(12), 986-999.</p>
          <p>[46] Simpson, G., & Tate, R. (2007). "Suicidality in people surviving a traumatic brain injury: Prevalence, risk factors and implications for clinical management." <em>Brain Injury</em>, 21(13-14), 1335-1351.</p>
          <p>[47] Sander, A. M., Maestas, K. L., Sherer, M., Malec, J. F., & Nakase-Richardson, R. (2012). "Relationship of caregiver and family functioning to participation outcomes after postacute rehabilitation for traumatic brain injury: A multicenter investigation." <em>Archives of Physical Medicine and Rehabilitation</em>, 93(5), 842-848.</p>
          <p>[48] Gan, C., Campbell, K. A., Gemeinhardt, M., & McFadden, G. T. (2006). "Predictors of family system functioning after brain injury." <em>Brain Injury</em>, 20(6), 587-600.</p>
        </div>
      </section>
    </article>
  );
}