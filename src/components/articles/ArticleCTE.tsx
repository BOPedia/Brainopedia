import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import cteImage from '/images/5b4a6c3d61ef0b9eb995d5a17570cb34e2a01c90.png';

interface ArticleCTEProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleCTE({ setCurrentArticle }: ArticleCTEProps) {
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
      title: 'Living with CTE'
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
        Chronic Traumatic Encephalopathy (CTE)
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Chronic Traumatic Encephalopathy (CTE)</strong> is a progressive neurodegenerative 
            disease found in people with a history of repetitive head impacts, including symptomatic 
            concussions as well as asymptomatic subconcussive hits to the head.<sup>[1]</sup> CTE has been most commonly 
            found in contact sport athletes (football, boxing, hockey), military veterans, and others with 
            a history of repetitive brain trauma.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Chronic Traumatic Encephalopathy"
            image={cteImage}
            data={[
              { label: 'Other names', value: 'CTE, formerly "punch drunk syndrome"' },
              { label: 'Specialty', value: 'Neurology, Neuropathology' },
              { label: 'Cause', value: 'Repeated head impacts over time' },
              { label: 'Classification', value: 'Acquired neurodegenerative disease' },
              { label: 'Diagnosis', value: 'Currently only after death (post-mortem)' },
              { label: 'Duration', value: 'Progressive, lifelong' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1742410699412-986830ab6f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHByb3RlaW4lMjBuZXVyb2RlZ2VuZXJhdGl2ZSUyMGRpc2Vhc2V8ZW58MXx8fHwxNzY3NDEwNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain protein accumulation in neurodegenerative disease"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            CTE is characterized by the buildup of an abnormal protein called tau in the brain.<sup>[3]</sup> This 
            tau protein forms clumps that slowly spread throughout the brain, killing brain cells.<sup>[4]</sup> CTE 
            is different from other brain injuries because it is caused by repeated trauma over months 
            or years, rather than a single incident.<sup>[5]</sup> Currently, CTE can only be definitively diagnosed after 
            death through brain tissue analysis.<sup>[6]</sup>
          </p>
          
          <p className="mb-4">
            However, researchers are working to develop methods for diagnosing 
            CTE in living individuals.<sup>[7]</sup> The disease is progressive, meaning symptoms worsen over time, and there is 
            currently no cure.<sup>[8]</sup> CTE was first described in the 1920s as "punch drunk syndrome" in boxers.<sup>[9]</sup> In 2002, 
            Dr. Bennet Omalu discovered CTE in former NFL player Mike Webster, bringing widespread attention to the 
            condition in American football and other contact sports.<sup>[10]</sup>
          </p>
          
          <p className="mb-4">
            Having a history of head impacts does not mean 
            someone will definitely develop CTE—the relationship between head trauma and CTE is still being researched.<sup>[11]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1740908900846-271f4f021b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBsb3NzJTIwY29nbml0aXZlJTIwZGVjbGluZSUyMGRlbWVudGlhfGVufDF8fHx8MTc2NzQxMDYxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cognitive decline and memory loss in CTE"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            CTE symptoms typically appear years or even decades after the last brain trauma.<sup>[12]</sup> In CTE, tau proteins 
            become abnormal and accumulate in the brain particularly around small blood vessels at the depths of sulci, 
            disrupting communication between brain cells which die over time with pathology spreading progressively and 
            brain tissue shrinking.<sup>[13][14]</sup>
          </p>
          
          <p className="mb-4">
            Early symptoms include short-term memory problems, difficulty with planning and 
            organization (executive dysfunction), impulsivity and poor judgment, depression and mood changes, anxiety 
            and irritability, and suicidal thoughts.<sup>[15]</sup> Later stage symptoms include progressive memory loss, confusion and 
            disorientation, difficulty thinking and cognitive impairment, dementia, movement problems similar to Parkinson's 
            disease, speech and communication difficulties, and difficulty swallowing.<sup>[16]</sup>
          </p>
          
          <p className="mb-4">
            Behavioral and emotional changes include 
            aggression and explosive behavior, paranoia, social isolation, substance abuse, and changes in personality.<sup>[17]</sup> CTE is 
            distinct from post-concussion syndrome (which typically improves with time while CTE is progressive), Alzheimer's 
            disease (different pattern and location of tau though both involve tau protein, and CTE can occur at younger ages), 
            and TBI (which refers to specific injury events while CTE develops from repeated injuries over time).<sup>[18][19]</sup> These symptoms 
            can overlap with many other conditions and experiencing them does not necessarily mean someone has CTE.<sup>[20]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1508355588587-46f3cdb5da07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNwb3J0cyUyMGhlYWQlMjBpbXBhY3QlMjBjb25jdXNzaW9ufGVufDF8fHx8MTc2NzQxMDYyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Contact sports and repeated head impacts causing CTE"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            The primary cause of CTE is repeated head impacts over time.<sup>[21]</sup> These can include multiple concussions over time, 
            subconcussive hits (hits that don't cause obvious symptoms but still impact the brain), blast exposure (common 
            in military combat), and physical abuse involving repeated head trauma.<sup>[22][23]</sup>
          </p>
          
          <p className="mb-4">
            Risk factors include duration of exposure 
            (longer careers in contact sports increase risk), age of first exposure (starting contact sports at younger ages 
            may increase vulnerability), position played (in football, positions with more contact like linemen and linebackers 
            may have higher risk), genetics (certain genetic factors like the APOE4 gene may increase susceptibility), and number 
            of impacts (more frequent head impacts correlate with increased risk).<sup>[24][25][26]</sup>
          </p>
          
          <p className="mb-4">
            Populations at highest risk include contact 
            sport athletes (American football especially professional and college, boxers and mixed martial arts fighters, ice 
            hockey, rugby, soccer from heading the ball, wrestling), military personnel (veterans exposed to blast injuries, combat 
            veterans with multiple concussions), individuals with a history of physical abuse, people with epilepsy who have frequent 
            seizures with head impact, and individuals who engage in head-banging behaviors.<sup>[27][28]</sup> The repeated impacts cause abnormal tau 
            protein accumulation creating a progressive neurodegenerative process.<sup>[29]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1741259712613-86d5b919d446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHRpc3N1ZSUyMG1pY3Jvc2NvcGUlMjByZXNlYXJjaCUyMHBhdGhvbG9neXxlbnwxfHx8fDE3Njc0MTA2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain tissue pathology research and microscopic examination"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Currently, CTE can only be definitively diagnosed after death through neuropathological examination of brain tissue.<sup>[30]</sup> 
            This involves microscopic examination of brain tissue, identification of characteristic tau protein deposits in a unique 
            pattern around small blood vessels at the depths of sulci, and assessment of the pattern and distribution of pathology.<sup>[31]</sup>
          </p>
          
          <p className="mb-4">
            Scientists are actively working on methods to diagnose CTE in living people including specialized PET scans that may detect 
            tau protein, blood tests researching biomarkers that might indicate CTE, advanced MRI techniques looking for structural brain 
            changes, and neuropsychological testing examining patterns of cognitive changes that might suggest CTE.<sup>[32][33][34]</sup>
          </p>
          
          <p className="mb-4">
            While CTE cannot be 
            diagnosed with certainty in living people, doctors can assess individuals with a history of repetitive head trauma through 
            detailed medical and trauma history, neurological examination, cognitive and psychological assessments, brain imaging (MRI, 
            CT scans), and ruling out other conditions that may cause similar symptoms.<sup>[35]</sup> Much of what we know about CTE comes from brain 
            donation programs where athletes and veterans donate their brains for research after death including the Boston University 
            CTE Center, VA-BU-CLF Brain Bank, and Concussion Legacy Foundation.<sup>[36]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1766299892683-d50398e31823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VwcG9ydCUyMHRyZWF0bWVudCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzY3NDEwNjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medical support and healthcare management for CTE"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            While there is currently no cure for CTE, individuals with a history of repetitive head trauma and concerning symptoms 
            can benefit from comprehensive support.<sup>[37]</sup> Medical management includes regular monitoring by healthcare providers, treatment 
            of specific symptoms (depression, anxiety, sleep problems), cognitive rehabilitation therapy, physical therapy for movement 
            problems, and speech therapy for communication difficulties.<sup>[38]</sup>
          </p>
          
          <p className="mb-4">
            Lifestyle strategies include maintaining social connections 
            and activities, regular physical exercise as appropriate, healthy diet and sleep habits, avoiding alcohol and substance use, 
            cognitive stimulation and mental activities, and stress management techniques.<sup>[39]</sup> Support systems include mental health counseling, 
            support groups for individuals and families, occupational therapy for daily living skills, care coordination and case management, 
            and legal and financial planning.<sup>[40]</sup>
          </p>
          
          <p className="mb-4">
            Prevention and safety measures include proper helmet fitting and equipment use in sports, 
            enforcing rules that reduce dangerous plays, teaching safe tackling and playing techniques, limiting contact in practice sessions, 
            implementing return-to-play protocols after concussion, considering age-appropriate timing for contact sports, immediate removal 
            from play after suspected concussion, medical evaluation before returning to activity, education about reporting symptoms, and 
            promoting a culture where safety is prioritized over winning.<sup>[41][42]</sup> Active research areas include developing treatments targeting tau 
            protein, creating accurate diagnostic tools for living patients, identifying preventive interventions, and understanding why some 
            people develop CTE while others with similar exposure do not.<sup>[43]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with CTE</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1764006145420-df3006edf060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjYXJlZ2l2ZXIlMjBzdXBwb3J0JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2NzQxMDYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Family support and caregiving for individuals with CTE"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            While CTE cannot be definitively diagnosed in living people, individuals with a history of repetitive head trauma and concerning 
            symptoms navigate significant challenges.<sup>[44]</sup> CTE is a progressive neurodegenerative disease meaning symptoms worsen over time with 
            no current cure.<sup>[45]</sup> Living with suspected CTE involves managing progressive cognitive decline, emotional and behavioral changes, and 
            physical symptoms while coping with diagnostic uncertainty.<sup>[46]</sup>
          </p>
          
          <p className="mb-4">
            CTE affects the whole family with caregivers needing support and resources.<sup>[47]</sup> 
            The growing awareness of CTE has led to significant changes in how sports organizations, schools, and medical professionals approach 
            head injuries including improved safety protocols, rule changes in sports, increased research funding, and ongoing debates about the 
            safety of contact sports particularly for youth athletes.<sup>[48]</sup>
          </p>
          
          <p className="mb-4">
            Living well with suspected CTE involves accessing comprehensive medical 
            management for symptoms, implementing lifestyle strategies that support brain health, building strong support systems for individuals 
            and families, participating in research and brain donation programs to advance understanding, and accessing mental health support for 
            the individual and family.<sup>[49]</sup> Topics related to living with CTE include managing progressive symptoms, coping with diagnostic uncertainty 
            (cannot be confirmed until after death), navigating caregiving and family dynamics, accessing appropriate medical and therapeutic support, 
            participating in CTE research and advocacy, understanding prevention and safety in contact sports, and recognizing that CTE represents 
            an acquired progressive neurodegenerative disease requiring comprehensive ongoing support.<sup>[50]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] McKee, A. C., Cairns, N. J., Dickson, D. W., et al. (2016). "The first NINDS/NIBIB consensus meeting to define neuropathological criteria for the diagnosis of chronic traumatic encephalopathy." <em>Acta Neuropathologica</em>, 131(1), 75-86.</p>
          <p>[2] Mez, J., Daneshvar, D. H., Kiernan, P. T., et al. (2017). "Clinicopathological evaluation of chronic traumatic encephalopathy in players of American football." <em>JAMA</em>, 318(4), 360-370.</p>
          <p>[3] McKee, A. C., Stein, T. D., Nowinski, C. J., et al. (2013). "The spectrum of disease in chronic traumatic encephalopathy." <em>Brain</em>, 136(1), 43-64.</p>
          <p>[4] Stein, T. D., Alvarez, V. E., & McKee, A. C. (2014). "Chronic traumatic encephalopathy: A spectrum of neuropathological changes following repetitive brain trauma in athletes and military personnel." <em>Alzheimer's Research & Therapy</em>, 6(1), 4.</p>
          <p>[5] Baugh, C. M., Stamm, J. M., Riley, D. O., et al. (2012). "Chronic traumatic encephalopathy: Neurodegeneration following repetitive concussive and subconcussive brain trauma." <em>Brain Imaging and Behavior</em>, 6(2), 244-254.</p>
          <p>[6] Stern, R. A., Riley, D. O., Daneshvar, D. H., et al. (2011). "Long-term consequences of repetitive brain trauma: Chronic traumatic encephalopathy." <em>PM&R</em>, 3(10), S460-S467.</p>
          <p>[7] Alosco, M. L., Tripodis, Y., Jarnagin, J., et al. (2017). "Repetitive head impact exposure and later-life plasma total tau in former National Football League players." <em>Alzheimer's & Dementia: Diagnosis, Assessment & Disease Monitoring</em>, 7, 33-40.</p>
          <p>[8] Montenigro, P. H., Corp, D. T., Stein, T. D., Cantu, R. C., & Stern, R. A. (2015). "Chronic traumatic encephalopathy: Historical origins and current perspective." <em>Annual Review of Clinical Psychology</em>, 11, 309-330.</p>
          <p>[9] Martland, H. S. (1928). "Punch drunk." <em>JAMA</em>, 91(15), 1103-1107.</p>
          <p>[10] Omalu, B. I., DeKosky, S. T., Minster, R. L., Kamboh, M. I., Hamilton, R. L., & Wecht, C. H. (2005). "Chronic traumatic encephalopathy in a National Football League player." <em>Neurosurgery</em>, 57(1), 128-134.</p>
          <p>[11] Iverson, G. L., Gardner, A. J., Shultz, S. R., et al. (2019). "Chronic traumatic encephalopathy neuropathology might not be inexorably progressive or unique to repetitive neurotrauma." <em>Brain</em>, 142(12), 3672-3693.</p>
          <p>[12] Stern, R. A., Daneshvar, D. H., Baugh, C. M., et al. (2013). "Clinical presentation of chronic traumatic encephalopathy." <em>Neurology</em>, 81(13), 1122-1129.</p>
          <p>[13] McKee, A. C., Cantu, R. C., Nowinski, C. J., et al. (2009). "Chronic traumatic encephalopathy in athletes: Progressive tauopathy after repetitive head injury." <em>Journal of Neuropathology & Experimental Neurology</em>, 68(7), 709-735.</p>
          <p>[14] Goldstein, L. E., Fisher, A. M., Tagge, C. A., et al. (2012). "Chronic traumatic encephalopathy in blast-exposed military veterans and a blast neurotrauma mouse model." <em>Science Translational Medicine</em>, 4(134), 134ra60.</p>
          <p>[15] Montenigro, P. H., Baugh, C. M., Daneshvar, D. H., et al. (2014). "Clinical subtypes of chronic traumatic encephalopathy: Literature review and proposed research diagnostic criteria for traumatic encephalopathy syndrome." <em>Alzheimer's Research & Therapy</em>, 6(5), 68.</p>
          <p>[16] Corsellis, J. A., Bruton, C. J., & Freeman-Browne, D. (1973). "The aftermath of boxing." <em>Psychological Medicine</em>, 3(3), 270-303.</p>
          <p>[17] Geddes, J. F., Vowles, G. H., Nicoll, J. A., & Révész, T. (1999). "Neuronal cytoskeletal changes are an early consequence of repetitive head injury." <em>Acta Neuropathologica</em>, 98(2), 171-178.</p>
          <p>[18] Jordan, B. D. (2013). "The clinical spectrum of sport-related traumatic brain injury." <em>Nature Reviews Neurology</em>, 9(4), 222-230.</p>
          <p>[19] Hay, J., Johnson, V. E., Smith, D. H., & Stewart, W. (2016). "Chronic traumatic encephalopathy: The neuropathological legacy of traumatic brain injury." <em>Annual Review of Pathology: Mechanisms of Disease</em>, 11, 21-45.</p>
          <p>[20] Schwab, N., Wennberg, R., Grenier, K., & Tartaglia, M. C. (2019). "Association of position played and career duration and chronic traumatic encephalopathy at autopsy in elite football and hockey players." <em>Neurology</em>, 92(15), e1835-e1841.</p>
          <p>[21] Gavett, B. E., Stern, R. A., & McKee, A. C. (2011). "Chronic traumatic encephalopathy: A potential late effect of sport-related concussive and subconcussive head trauma." <em>Clinics in Sports Medicine</em>, 30(1), 179-188.</p>
          <p>[22] Ling, H., Morris, H. R., Neal, J. W., et al. (2017). "Mixed pathologies including chronic traumatic encephalopathy account for dementia in retired association football (soccer) players." <em>Acta Neuropathologica</em>, 133(3), 337-352.</p>
          <p>[23] Hicks, A. J., Clay, F. J., Hopwood, M., et al. (2019). "The association between blast traumatic brain injury and the development of chronic traumatic encephalopathy: A systematic review." <em>Journal of Neurotrauma</em>, 36(1), 26-42.</p>
          <p>[24] Lehman, E. J., Hein, M. J., Baron, S. L., & Gersic, C. M. (2012). "Neurodegenerative causes of death among retired National Football League players." <em>Neurology</em>, 79(19), 1970-1974.</p>
          <p>[25] Stamm, J. M., Bourlas, A. P., Baugh, C. M., et al. (2015). "Age of first exposure to football and later-life cognitive impairment in former NFL players." <em>Neurology</em>, 84(11), 1114-1120.</p>
          <p>[26] Cherry, J. D., Tripodis, Y., Alvarez, V. E., et al. (2016). "Microglial neuroinflammation contributes to tau accumulation in chronic traumatic encephalopathy." <em>Acta Neuropathologica Communications</em>, 4(1), 112.</p>
          <p>[27] Lakhan, S. E., & Kirchgessner, A. (2012). "Chronic traumatic encephalopathy: The dangers of getting 'dinged'." <em>SpringerPlus</em>, 1(1), 2.</p>
          <p>[28] Maroon, J. C., Winkelman, R., Bost, J., Amos, A., Mathyssek, C., & Miele, V. (2015). "Chronic traumatic encephalopathy in contact sports: A systematic review of all reported pathological cases." <em>PLoS One</em>, 10(2), e0117338.</p>
          <p>[29] Smith, D. H., Johnson, V. E., & Stewart, W. (2013). "Chronic neuropathologies of single and repetitive TBI: Substrates of dementia?" <em>Nature Reviews Neurology</em>, 9(4), 211-221.</p>
          <p>[30] Bieniek, K. F., Ross, O. A., Cormier, K. A., et al. (2015). "Chronic traumatic encephalopathy pathology in a neurodegenerative disorders brain bank." <em>Acta Neuropathologica</em>, 130(6), 877-889.</p>
          <p>[31] McKee, A. C., & Daneshvar, D. H. (2015). "The neuropathology of traumatic brain injury." <em>Handbook of Clinical Neurology</em>, 127, 45-66.</p>
          <p>[32] Barrio, J. R., Small, G. W., Wong, K. P., et al. (2015). "In vivo characterization of chronic traumatic encephalopathy using [F-18]FDDNP PET brain imaging." <em>Proceedings of the National Academy of Sciences</em>, 112(16), E2039-E2047.</p>
          <p>[33] Alosco, M. L., Kasimis, A. B., Stamm, J. M., et al. (2017). "Age of first exposure to American football and long-term neuropsychiatric and cognitive outcomes." <em>Translational Psychiatry</em>, 7(9), e1236.</p>
          <p>[34] Gozt-Więckowska, A., Kotas, R., Malec-Milewska, M., & Zajączkowska, R. (2023). "Chronic traumatic encephalopathy—pathophysiology, biomarkers and advanced neuroimaging." <em>International Journal of Molecular Sciences</em>, 24(9), 7816.</p>
          <p>[35] Gardner, A., Iverson, G. L., & McCrory, P. (2014). "Chronic traumatic encephalopathy in sport: A systematic review." <em>British Journal of Sports Medicine</em>, 48(2), 84-90.</p>
          <p>[36] Nowinski, C. J., Bureau, S. C., Buckland, M. E., et al. (2017). "Applying the Bradford Hill criteria for causation to repetitive head impacts and chronic traumatic encephalopathy." <em>Frontiers in Neurology</em>, 8, 266.</p>
          <p>[37] Iverson, G. L., & Karr, J. E. (2022). "Chronic traumatic encephalopathy: Known causes, unknown effects." <em>Physical Medicine and Rehabilitation Clinics</em>, 33(2), 375-392.</p>
          <p>[38] Kerr, Z. Y., Marshall, S. W., Harding Jr, H. P., & Guskiewicz, K. M. (2012). "Nine-year risk of depression diagnosis increases with increasing self-reported concussions in retired professional football players." <em>The American Journal of Sports Medicine</em>, 40(10), 2206-2212.</p>
          <p>[39] Vann Jones, S. A., & O'Brien, J. T. (2014). "The prevalence and incidence of dementia with Lewy bodies: A systematic review of population and clinical studies." <em>Psychological Medicine</em>, 44(4), 673-683.</p>
          <p>[40] Manley, G., Gardner, A. J., Schneider, K. J., et al. (2017). "A systematic review of potential long-term effects of sport-related concussion." <em>British Journal of Sports Medicine</em>, 51(12), 969-977.</p>
          <p>[41] Broglio, S. P., Cantu, R. C., Gioia, G. A., et al. (2014). "National Athletic Trainers' Association position statement: Management of sport concussion." <em>Journal of Athletic Training</em>, 49(2), 245-265.</p>
          <p>[42] Harmon, K. G., Clugston, J. R., Dec, K., et al. (2019). "American Medical Society for Sports Medicine position statement on concussion in sport." <em>British Journal of Sports Medicine</em>, 53(4), 213-225.</p>
          <p>[43] Daneshvar, D. H., Goldstein, L. E., Kiernan, P. T., Stein, T. D., & McKee, A. C. (2015). "Post-traumatic neurodegeneration and chronic traumatic encephalopathy." <em>Molecular and Cellular Neuroscience</em>, 66, 81-90.</p>
          <p>[44] Asken, B. M., Sullan, M. J., DeKosky, S. T., Jaffee, M. S., & Bauer, R. M. (2017). "Research gaps and controversies in chronic traumatic encephalopathy: A review." <em>JAMA Neurology</em>, 74(10), 1255-1262.</p>
          <p>[45] Omalu, B. I., Fitzsimmons, R. P., Hammers, J., & Bailes, J. (2010). "Chronic traumatic encephalopathy in a professional American wrestler." <em>Journal of Forensic Nursing</em>, 6(3), 130-136.</p>
          <p>[46] Victoroff, J. (2013). "Traumatic encephalopathy: Review and provisional research diagnostic criteria." <em>NeuroRehabilitation</em>, 32(2), 211-224.</p>
          <p>[47] Casson, I. R., Viano, D. C., Haacke, E. M., Kou, Z., & LeStrange, D. G. (2014). "Is there chronic brain damage in retired NFL players? Neuroradiology, neuropsychology, and neurology examinations of 45 retired players." <em>Sports Health</em>, 6(5), 384-395.</p>
          <p>[48] Mez, J., Solomon, T. M., Daneshvar, D. H., et al. (2015). "Assessing clinicopathological correlation in chronic traumatic encephalopathy: Rationale and methods for the UNITE study." <em>Alzheimer's Research & Therapy</em>, 7(1), 62.</p>
          <p>[49] Castellani, R. J., Perry, G., & Iverson, G. L. (2015). "Chronic effects of mild neurotrauma: Putting the cart before the horse?" <em>Journal of Neuropathology & Experimental Neurology</em>, 74(6), 493-499.</p>
          <p>[50] McKee, A. C., Alosco, M. L., & Huber, B. R. (2016). "Repetitive head impacts and chronic traumatic encephalopathy." <em>Neurosurgery Clinics</em>, 27(4), 529-535.</p>
        </div>
      </section>
    </article>
  );
}