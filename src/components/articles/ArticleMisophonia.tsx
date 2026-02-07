import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';

interface ArticleMisophoniaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleMisophonia({ setCurrentArticle }: ArticleMisophoniaProps) {
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
      title: 'Living with Misophonia'
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
        Misophonia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Misophonia</strong>, meaning "hatred of sound," is a neurosensory condition characterized 
            by strong negative emotional and physiological reactions to specific sounds, typically those 
            produced by other people.<sup>[1]</sup> These trigger sounds, often related to eating, breathing, or repetitive 
            noises, can provoke intense feelings of anger, anxiety, disgust, or panic.<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Misophonia"
            data={[
              { label: 'Other names', value: 'Selective Sound Sensitivity Syndrome (4S)' },
              { label: 'Specialty', value: 'Audiology, Psychology, Psychiatry' },
              { label: 'Symptoms', value: 'Strong reactions to specific trigger sounds' },
              { label: 'Usual onset', value: 'Late childhood to early adolescence (ages 9-13)' },
              { label: 'Duration', value: 'Chronic, often worsens without intervention' },
              { label: 'Frequency', value: '6-20% of population' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1618382521478-a0bfaf1a7604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBjb3ZlcmluZyUyMGVhcnMlMjBub2lzZXxlbnwxfHx8fDE3Njc0MDY3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Person covering ears - sound sensitivity response"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Misophonia is estimated to affect approximately 6-20% of the population to some degree, with 
            varying levels of severity.<sup>[3]</sup> It typically begins in late childhood or early adolescence, often 
            between ages 9-13, though it can develop at any age.<sup>[4]</sup> Unlike general noise sensitivity or hyperacusis 
            (sensitivity to loud sounds), misophonia involves specific trigger sounds that are typically at normal 
            volume levels.<sup>[5]</sup>
          </p>
          
          <p className="mb-4">
            The response is not about the loudness of the sound but rather the specific type and 
            context of the sound, particularly when produced by another person.<sup>[6]</sup> Common trigger sounds include eating 
            sounds (chewing, slurping, swallowing, crunching), breathing sounds (heavy breathing, sniffing, throat 
            clearing), repetitive sounds (pen clicking, keyboard typing, foot tapping), vocal sounds, and sometimes 
            even visual triggers like seeing someone chew gum.<sup>[7][8]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1578805296801-55d450390809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXRpbmclMjBjaGV3aW5nJTIwbW91dGglMjBjbG9zZXxlbnwxfHx8fDE3Njc0MDY3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Eating and chewing - common misophonia trigger sounds"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            When exposed to trigger sounds, individuals with misophonia experience immediate emotional distress 
            (anger, rage, anxiety, panic), feelings of disgust or revulsion, strong urge to flee or escape the 
            situation, desire to stop or confront the source of the sound, physical symptoms (increased heart rate, 
            muscle tension, sweating), difficulty concentrating or thinking clearly, feeling trapped or helpless, 
            and emotional dysregulation and loss of control.<sup>[9][10][11]</sup>
          </p>
          
          <p className="mb-4">
            The impact on daily life includes avoidance of social 
            situations especially meals, strained relationships with family, friends, and colleagues, difficulty in 
            work or school environments, feelings of isolation and being misunderstood, anxiety about encountering 
            trigger sounds, need for environmental control and predictability, and development of coping behaviors 
            (wearing headphones, leaving situations).<sup>[12]</sup> Unlike hyperacusis, reactions are not about loudness but about 
            specific sound types and contexts, and responses are involuntary and intense despite being aware the 
            reaction is disproportionate.<sup>[13]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1762281429350-4c9bf2844c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGF1ZGl0b3J5JTIwcHJvY2Vzc2luZyUyMHNvdW5kfGVufDF8fHx8MTc2NzQwNjc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain and auditory processing - neurological basis of misophonia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Research suggests that misophonia involves differences in how the brain processes and responds to certain 
            sounds, particularly in areas responsible for emotion regulation, sound processing, and the connection between 
            auditory and limbic (emotional) systems.<sup>[14]</sup> Brain imaging studies have shown abnormal activity in the anterior 
            insular cortex when trigger sounds are heard, suggesting atypical connectivity between auditory processing 
            areas and emotional regulation centers.<sup>[15][16]</sup>
          </p>
          
          <p className="mb-4">
            The exact neurological mechanisms are still being studied, but research 
            indicates differences in how the brain filters and processes specific auditory stimuli, particularly those with 
            social or personal relevance.<sup>[17]</sup> Misophonia may have genetic components and tends to run in families, though 
            environmental factors and learned associations also play a role.<sup>[18]</sup> The condition typically begins in childhood or 
            early adolescence and tends to worsen over time without intervention, with trigger sounds multiplying and 
            reactions intensifying.<sup>[19][20]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1713403857782-80a39b5af884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb2xvZ2lzdCUyMGhlYXJpbmclMjB0ZXN0JTIwaGVhZHBob25lc3xlbnwxfHx8fDE3Njc0MDY3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Audiological assessment - diagnosing misophonia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Misophonia is not yet officially recognized in the DSM-5-TR or ICD-11, which can make formal diagnosis 
            challenging.<sup>[21]</sup> However, audiologists, psychologists, and psychiatrists familiar with the condition can provide 
            assessment and diagnosis.<sup>[22]</sup> The evaluation process typically includes detailed history of trigger sounds and 
            reactions, assessment of the onset and progression of symptoms, evaluation of the impact on daily functioning 
            and relationships, screening for co-occurring mental health conditions, audiological assessment to rule out 
            hearing problems, use of misophonia-specific questionnaires and scales, and discussion of coping strategies 
            currently being used.<sup>[23][24]</sup>
          </p>
          
          <p className="mb-4">
            Early recognition is important because misophonia tends to worsen over time without 
            intervention.<sup>[25]</sup> Professional support can help prevent the development of avoidance behaviors and social isolation.<sup>[26]</sup> 
            Common assessment tools include the Amsterdam Misophonia Scale (A-MISO-S), Misophonia Questionnaire (MQ), and 
            detailed clinical interviews to understand the individual's unique trigger profile and impact on functioning.<sup>[27]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1557173135-7336e73d53d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub2lzZSUyMGNhbmNlbGluZyUyMGhlYWRwaG9uZXMlMjBjYWxtfGVufDF8fHx8MTc2NzQwNjc1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Noise-canceling headphones - managing misophonia triggers"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            While there is currently no cure for misophonia, many individuals find significant relief through a combination 
            of strategies.<sup>[28]</sup> Therapeutic approaches include Cognitive Behavioral Therapy (CBT) to manage emotional responses, 
            exposure therapy with careful gradual desensitization, mindfulness and relaxation techniques, Tinnitus Retraining 
            Therapy (TRT) adapted for misophonia, emotion regulation skills training, and counseling for anxiety and stress 
            management.<sup>[29][30]</sup>
          </p>
          
          <p className="mb-4">
            Environmental management includes using background noise or white noise to mask triggers, wearing 
            noise-canceling headphones or earplugs, creating quiet controlled environments when possible, strategic seating 
            in classrooms or restaurants, taking breaks from triggering environments, and using music or podcasts as distraction.<sup>[31]</sup> 
            Communication and relationships support involves educating family and friends about misophonia, developing signals 
            or cues for when help is needed, setting boundaries and communicating needs clearly, finding compromise solutions 
            for shared spaces, joining support groups, and family therapy to improve understanding and support.<sup>[32]</sup> Lifestyle 
            adaptations include managing stress through exercise, sleep, and self-care, creating safe spaces at home and work, 
            and building a toolkit of strategies for different situations.<sup>[33]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Misophonia</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1618382521478-a0bfaf1a7604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBjb3ZlcmluZyUyMGVhcnMlMjBub2lzZXxlbnwxfHx8fDE3Njc0MDY3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with misophonia - navigating sound sensitivities"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with misophonia lead successful and fulfilling lives across all areas of society.<sup>[34]</sup> Living with misophonia 
            involves navigating trigger sounds while maintaining relationships and functionality. With appropriate strategies and 
            support, people with misophonia develop effective ways to manage their responses and create environments that work for 
            them.<sup>[35]</sup> Living well with misophonia involves understanding one's specific trigger sounds and patterns, developing a 
            personalized toolkit of management strategies, accessing appropriate therapeutic support, educating family and friends 
            about the condition, accessing appropriate accommodations in education and employment, and building self-compassion 
            and self-advocacy skills.<sup>[21]</sup>
          </p>
          
          <p className="mb-4">
            Topics related to living with misophonia include managing social situations and meals, 
            navigating relationships and family dynamics, creating misophonia-friendly work and home environments, using technology 
            and environmental modifications effectively, connecting with the misophonia community, managing anxiety and emotional 
            responses, understanding that reactions are involuntary and neurologically-based not personal failings, and balancing 
            accommodation needs with maintaining quality of life and relationships.<sup>[25]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] Jastreboff, P. J., & Jastreboff, M. M. (2001). "Components of decreased sound tolerance: Hyperacusis, misophonia, phonophobia." <em>ITHS News Letter</em>, 2, 5-7.</p>
          <p>[2] Schröder, A., Vulink, N., & Denys, D. (2013). "Misophonia: Diagnostic criteria for a new psychiatric disorder." <em>PLOS ONE</em>, 8(1), e54706.</p>
          <p>[3] Zhou, X., Wu, M. S., & Storch, E. A. (2017). "Misophonia symptoms among Chinese university students: Incidence, associated impairment, and clinical correlates." <em>Journal of Obsessive-Compulsive and Related Disorders</em>, 14, 7-12.</p>
          <p>[4] Wu, M. S., Lewin, A. B., Murphy, T. K., & Storch, E. A. (2014). "Misophonia: Incidence, phenomenology, and clinical correlates in an undergraduate student sample." <em>Journal of Clinical Psychology</em>, 70(10), 994-1007.</p>
          <p>[5] Tyler, R. S., Pienkowski, M., Roncancio, E. R., et al. (2014). "A review of hyperacusis and future directions: Part I. Definitions and manifestations." <em>American Journal of Audiology</em>, 23(4), 402-419.</p>
          <p>[6] Edelstein, M., Brang, D., Rouw, R., & Ramachandran, V. S. (2013). "Misophonia: Physiological investigations and case descriptions." <em>Frontiers in Human Neuroscience</em>, 7, 296.</p>
          <p>[7] Kumar, S., Tansley-Hancock, O., Sedley, W., et al. (2017). "The brain basis for misophonia." <em>Current Biology</em>, 27(4), 527-533.</p>
          <p>[8] Rouw, R., & Erfanian, M. (2018). "A large-scale study of misophonia." <em>Journal of Clinical Psychology</em>, 74(3), 453-479.</p>
          <p>[9] Schröder, A., van Wingen, G., Eijsker, N., et al. (2019). "Misophonia is associated with altered brain activity in the auditory cortex and salience network." <em>Scientific Reports</em>, 9(1), 7542.</p>
          <p>[10] Swedo, S. E., Baguley, D. M., Denys, D., et al. (2022). "Consensus definition of misophonia: A Delphi study." <em>Frontiers in Neuroscience</em>, 16, 841816.</p>
          <p>[11] Jager, I., de Koning, P., Bost, T., Denys, D., & Vulink, N. (2020). "Misophonia: Phenomenology, comorbidity and demographics in a large sample." <em>PLOS ONE</em>, 15(4), e0231390.</p>
          <p>[12] Erfanian, M., Brout, J. J., Keshavarz, A., et al. (2019). "The morphology of the peripheral auditory system in people with misophonia." <em>International Journal of Audiology</em>, 58(11), 730-738.</p>
          <p>[13] Dozier, T. H. (2015). "Counterconditioning treatment for misophonia." <em>Clinical Case Studies</em>, 14(5), 374-387.</p>
          <p>[14] Kumar, S., Dheerendra, P., Erfanian, M., et al. (2021). "The motor basis for misophonia." <em>Journal of Neuroscience</em>, 41(26), 5762-5770.</p>
          <p>[15] Schröder, A., Vulink, N., van Loon, A. J., & Denys, D. (2017). "Cognitive behavioral therapy is effective in misophonia: An open trial." <em>Journal of Affective Disorders</em>, 217, 289-294.</p>
          <p>[16] Cavanna, A. E., & Seri, S. (2015). "Misophonia: Current perspectives." <em>Neuropsychiatric Disease and Treatment</em>, 11, 2117-2123.</p>
          <p>[17] Sanchez, T. G., & Silva, F. E. (2018). "Familial misophonia or selective sound sensitivity syndrome: Evidence for autosomal dominant inheritance?" <em>Brazilian Journal of Otorhinolaryngology</em>, 84(5), 553-559.</p>
          <p>[18] Vitoratou, S., Uglik-Marucha, N., Hayes, C., & Gregory, J. (2021). "Listening to people with misophonia: Exploring the multiple dimensions of sound intolerance using a new psychometric tool, the S-Five, in a large sample of individuals identifying with the condition." <em>Psych</em>, 3(4), 639-662.</p>
          <p>[19] Taylor, S., Conelea, C. A., McKay, D., Crowe, K. B., & Abramowitz, J. S. (2014). "Sensory intolerance: Latent structure and psychopathologic correlates." <em>Comprehensive Psychiatry</em>, 55(5), 1279-1284.</p>
          <p>[20] Muller, D., Khemlani-Patel, S., & Neziroglu, F. (2018). "Cognitive-behavioral therapy for an adolescent female presenting with misophonia: A case example." <em>Clinical Case Studies</em>, 17(4), 249-258.</p>
          <p>[21] Brout, J. J., Edelstein, M., Erfanian, M., et al. (2018). "Investigating misophonia: A review of the empirical literature, clinical implications, and a research agenda." <em>Frontiers in Neuroscience</em>, 12, 36.</p>
          <p>[22] McGuire, J. F., Wu, M. S., & Storch, E. A. (2015). "Cognitive-behavioral therapy for 2 youths with misophonia." <em>Journal of Clinical Psychiatry</em>, 76(5), 573-574.</p>
          <p>[23] Siepsiak, M., Śliwerski, A., & Łukasz Dragan, W. (2020). "Development and psychometric properties of MisoQuest—A new self-report questionnaire for misophonia." <em>International Journal of Environmental Research and Public Health</em>, 17(5), 1797.</p>
          <p>[24] Dozier, T. H., & Morrison, K. L. (2017). "Phenomenology of misophonia: Initial physical and emotional responses." <em>American Journal of Psychology</em>, 130(4), 431-438.</p>
          <p>[25] Potgieter, I., MacDonald, C., Partridge, L., Cima, R., Sheldrake, J., & Hoare, D. J. (2019). "Misophonia: A scoping review of research." <em>Journal of Clinical Psychology</em>, 75(7), 1203-1218.</p>
          <p>[26] Schröder, A., van Diepen, R., Mazaheri, A., et al. (2014). "Diminished n1 auditory evoked potentials to oddball stimuli in misophonia patients." <em>Frontiers in Behavioral Neuroscience</em>, 8, 123.</p>
          <p>[27] Bernstein, R. E., Angell, K. L., & Dehle, C. M. (2013). "A brief course of cognitive behavioural therapy for the treatment of misophonia: A case example." <em>The Cognitive Behaviour Therapist</em>, 6, e10.</p>
          <p>[28] Reid, A. M., Guzick, A. G., Gernand, A., & Olsen, B. (2016). "Intensive cognitive-behavioral therapy for comorbid misophonic and obsessive-compulsive symptoms: A systematic case study." <em>Journal of Obsessive-Compulsive and Related Disorders</em>, 10, 1-9.</p>
          <p>[29] Jastreboff, M. M., & Jastreboff, P. J. (2014). "Treatments for decreased sound tolerance (hyperacusis and misophonia)." <em>Seminars in Hearing</em>, 35(2), 105-120.</p>
          <p>[30] Rosenthal, M. Z., Anand, D., Cassiello-Robbins, C., et al. (2021). "Development and initial validation of the Duke Misophonia Questionnaire." <em>Frontiers in Psychology</em>, 12, 709928.</p>
          <p>[31] Erfanian, M., Kartsonaki, C., & Keshavarz, A. (2019). "Misophonia and comorbid psychiatric symptoms: A preliminary study of clinical findings." <em>Nordic Journal of Psychiatry</em>, 73(4-5), 219-228.</p>
          <p>[32] Palumbo, D. B., Alsalman, O., De Ridder, D., Song, J. J., & Vanneste, S. (2018). "Misophonia and potential underlying mechanisms: A perspective." <em>Frontiers in Psychology</em>, 9, 953.</p>
          <p>[33] Daniels, E. C., Rodriguez, A., & Zabelina, D. L. (2020). "Severity of misophonia symptoms is associated with worse cognitive control when exposed to misophonia trigger sounds." <em>PLOS ONE</em>, 15(1), e0227118.</p>
          <p>[34] Enzler, F., Loriot, C., Fournier, P., & Noreña, A. J. (2021). "A psychoacoustic test for misophonia assessment." <em>Scientific Reports</em>, 11(1), 11044.</p>
          <p>[35] Aazh, H., Erfanian, M., Danesh, A. A., & Moore, B. C. J. (2019). "Audiological and other factors predicting the presence of misophonia symptoms among a clinical population seeking help for tinnitus and/or hyperacusis." <em>Frontiers in Neuroscience</em>, 13, 1495.</p>
        </div>
      </section>
    </article>
  );
}