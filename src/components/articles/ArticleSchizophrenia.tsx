import React from 'react';
import { InfoBox } from '../InfoBox';
import { TableOfContents } from '../TableOfContents';
import schizophreniaImage from 'figma:asset/9f3673c5fa85a929463d88f30ff351806ce7f957.png';

interface ArticleSchizophreniaProps {
  setCurrentArticle?: (article: string) => void;
}

export function ArticleSchizophrenia({ setCurrentArticle }: ArticleSchizophreniaProps) {
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
      title: 'Living with Schizophrenia'
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
        Schizophrenia
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left column - Intro paragraph and Quick Links stacked */}
        <div className="space-y-6">
          <p>
            <strong>Schizophrenia</strong> is a complex neurological condition that affects how a person 
            perceives reality, thinks, and experiences the world.<sup>[1]</sup> As understanding evolves, many advocates 
            recognize schizophrenia as representing a distinct neurotype—a fundamentally different way of 
            processing information and experiencing consciousness, rather than simply a "broken brain."<sup>[2]</sup>
          </p>
          
          <TableOfContents sections={sections} subtitle="QUICK LINKS" variant="navy" />
        </div>

        {/* Right column - InfoBox */}
        <div className="w-full">
          <InfoBox
            title="Schizophrenia"
            image={schizophreniaImage}
            data={[
              { label: 'Specialty', value: 'Psychiatry, Psychology, Neurology' },
              { label: 'Symptoms', value: 'Altered perception, different thought patterns, varied experiences' },
              { label: 'Usual onset', value: 'Late teens to early 30s' },
              { label: 'Duration', value: 'Lifelong neurotype' },
              { label: 'Frequency', value: 'Approximately 1% of population' },
              { label: 'Related conditions', value: 'Schizoaffective disorder' },
            ]}
          />
        </div>
      </div>

      <div className="space-y-8 mt-20 clear-both">
        <section id="overview" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Overview</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1687367168095-844e7908b0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJjZXB0aW9uJTIwcmVhbGl0eSUyMGNvbnNjaW91c25lc3MlMjBtZW50YWx8ZW58MXx8fHwxNzY3NDA4MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Perception and reality - understanding schizophrenia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Schizophrenia affects approximately 1% of the global population and involves differences in 
            brain structure, neurotransmitter function (particularly dopamine and glutamate), and neural 
            connectivity.<sup>[3]</sup> Research shows variations in brain regions responsible for perception, thought 
            organization, and reality testing.<sup>[4]</sup> The neurodivergent perspective acknowledges that individuals 
            with schizophrenia experience reality through a different perceptual lens.<sup>[5]</sup>
          </p>
          
          <p className="mb-4">
            While this can create 
            significant challenges, it also represents a unique form of consciousness and human experience that 
            deserves understanding and respect.<sup>[6]</sup> Related conditions include schizoaffective disorder (symptoms of 
            both schizophrenia and a mood disorder), schizophreniform disorder (similar to schizophrenia but shorter 
            duration), and brief psychotic disorder (sudden onset of psychotic symptoms lasting less than one month).<sup>[7]</sup> 
            Understanding schizophrenia as a neurotype emphasizes the neurological basis and the importance of both 
            support and dignity.<sup>[8]</sup>
          </p>
        </section>

        <section id="characteristics" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Symptoms & Characteristics</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1723283207299-aa59d7b17275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRob3VnaHQlMjBkaXNvcmdhbml6ZWQlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3Njc0MDgyODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Abstract thought patterns - characteristics of schizophrenia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Schizophrenia involves a range of experiences traditionally categorized into positive, negative, and 
            cognitive symptoms.<sup>[9]</sup> Positive symptoms (additions to experience) include hallucinations (perceiving things 
            others don't, most commonly auditory but can be visual, tactile, or olfactory), delusions (strongly held 
            beliefs that differ from shared reality), disorganized thinking (difficulty organizing thoughts in conventional 
            patterns), and unusual movements or catatonia.<sup>[10][11]</sup>
          </p>
          
          <p className="mb-4">
            Negative symptoms (reductions in experience) include reduced 
            emotional expression, decreased motivation (avolition), social withdrawal, reduced speech (alogia), and 
            difficulty experiencing pleasure (anhedonia).<sup>[12]</sup> Cognitive symptoms include difficulties with working memory, 
            challenges with executive function, attention difficulties, and processing speed variations.<sup>[13]</sup> Viewing schizophrenia 
            through a neurodivergent lens acknowledges that experiences like hallucinations represent real neurological phenomena 
            and genuine perceptions even if not shared by others, recognizes exceptional creativity, unique perspectives, and 
            profound philosophical insights many individuals demonstrate, honors that experiences can hold personal meaning and 
            significance, emphasizes the whole person rather than reducing them to a diagnosis, and recognizes the abilities, 
            resilience, and courage required to navigate a world designed for neurotypical perception.<sup>[14][15]</sup>
          </p>
        </section>

        <section id="causes" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Causes & Origins</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpbiUyMGRvcGFtaW5lJTIwbmV1cm90cmFuc21pdHRlcnMlMjBuZXVyYWx8ZW58MXx8fHwxNzY3NDA4MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Brain neurotransmitters - neurological basis of schizophrenia"
            className="w-64 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Schizophrenia involves differences in brain structure, neurotransmitter function (particularly dopamine and 
            glutamate), and neural connectivity.<sup>[16]</sup> Research shows variations in brain regions responsible for perception, 
            thought organization, and reality testing including the prefrontal cortex, hippocampus, and thalamus.<sup>[17][18]</sup> Brain imaging 
            reveals structural and functional differences in neural circuits that process perception, organize thoughts, and 
            distinguish internal from external stimuli.<sup>[19]</sup>
          </p>
          
          <p className="mb-4">
            Schizophrenia has a strong genetic component with studies showing 
            increased risk in family members, though the genetics are complex involving multiple genes and their interactions.<sup>[20][21]</sup> 
            Environmental factors including prenatal factors (maternal infection, malnutrition), birth complications, childhood 
            trauma, and substance use can contribute to development or exacerbation in those with genetic vulnerability.<sup>[22][23]</sup> The 
            condition represents a fundamental difference in how the brain processes perception, organizes thoughts, and experiences 
            reality, creating a distinct form of consciousness and perceptual experience.<sup>[24]</sup>
          </p>
        </section>

        <section id="diagnosis" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Testing & Diagnosing</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1653130892581-7c0ae1f4e8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaGlhdHJpYyUyMGV2YWx1YXRpb24lMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzY3NDA4MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Psychiatric evaluation - diagnosing schizophrenia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Schizophrenia is diagnosed clinically by mental health professionals including psychiatrists or psychologists.<sup>[25]</sup> 
            The diagnostic criteria include two or more of the following symptoms present for a significant portion of time 
            during a one-month period: delusions, hallucinations, disorganized speech, grossly disorganized or catatonic behavior, 
            or negative symptoms.<sup>[26]</sup> Additionally, functioning in major areas (work, relationships, self-care) is significantly below 
            pre-onset levels, continuous signs persist for at least six months, other conditions are ruled out (mood disorders, 
            substance use, medical conditions), and if autism or communication disorder is present, prominent delusions or 
            hallucinations must also be present.<sup>[27]</sup>
          </p>
          
          <p className="mb-4">
            The evaluation includes detailed clinical interview and psychiatric history, 
            assessment of symptoms and their duration, medical evaluation to rule out other causes, screening for substance use, 
            neuropsychological testing when appropriate, and gathering information from family or others when possible.<sup>[28][29]</sup> Onset is 
            typically in late teens to early 30s, with men often experiencing onset earlier than women.<sup>[30]</sup> Early intervention 
            and coordinated specialty care programs have shown improved outcomes.<sup>[31]</sup>
          </p>
        </section>

        <section id="support" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Support & Management</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1763310225009-50214e3c99d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc3VwcG9ydCUyMHJlY292ZXJ5JTIwd2VsbG5lc3N8ZW58MXx8fHwxNzY3NDA4MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Therapy and recovery support - managing schizophrenia"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            A neurodivergent-affirming approach emphasizes collaboration, choice, and quality of life.<sup>[32]</sup> Medication including 
            antipsychotic medications can help manage symptoms by affecting dopamine and other neurotransmitter systems, with 
            finding the right medication and dosage being highly individual and a collaborative decision.<sup>[33][34]</sup> Therapy and counseling 
            including Cognitive Behavioral Therapy (CBT), family therapy, and peer support can help develop coping strategies and 
            improve quality of life, with emphasis on understanding rather than simply eliminating experiences.<sup>[35]</sup>
          </p>
          
          <p className="mb-4">
            Supported employment 
            and education programs provide accommodations and support for work and educational goals, recognizing abilities and 
            potential.<sup>[36]</sup> Peer support and community including connection with others who share similar experiences provides validation, 
            practical strategies, and reduces isolation, with organizations like the Hearing Voices Network offering alternatives to 
            purely medical models.<sup>[37][38]</sup> Trauma-informed care recognizes that many individuals have experienced trauma which may be connected 
            to their perceptual experiences, with addressing trauma being an important part of healing and wellbeing.<sup>[39]</sup> Additional support 
            includes case management and coordinated care, housing support, social skills training, and crisis planning.<sup>[40]</sup>
          </p>
        </section>

        <section id="living" className="bg-white border-2 border-[#2abcd4] rounded-lg p-6 shadow-sm">
          <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">Living with Schizophrenia</h2>
          
          <img 
            src="https://images.unsplash.com/photo-1687367168095-844e7908b0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJjZXB0aW9uJTIwcmVhbGl0eSUyMGNvbnNjaW91c25lc3MlMjBtZW50YWx8ZW58MXx8fHwxNzY3NDA4MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Living with schizophrenia - navigating unique experiences"
            className="w-80 h-auto rounded-md border border-gray-300 float-right ml-6 mb-4"
          />
          
          <p className="mb-4">
            Individuals with schizophrenia lead meaningful and fulfilling lives across all areas of society.<sup>[41]</sup> Schizophrenia is 
            a lifelong neurotype that individuals learn to navigate and manage throughout their lives.<sup>[42]</sup> Living with schizophrenia 
            involves understanding and working with one's unique perceptual experiences, accessing appropriate support, and building 
            a meaningful life.<sup>[43]</sup> With appropriate treatment, peer support, accommodations, and self-understanding, people with schizophrenia 
            thrive in education, careers, relationships, and creative pursuits.<sup>[44]</sup>
          </p>
          
          <p className="mb-4">
            Living well with schizophrenia involves understanding 
            one's specific experiences and patterns, accessing appropriate medication and therapeutic support, building peer connections 
            and community, developing strategies for managing challenging experiences, accessing accommodations in education and employment, 
            and recognizing both the challenges and unique perspectives of the neurotype.<sup>[45]</sup> Topics related to living with schizophrenia 
            include navigating different perceptual experiences, leveraging creativity and unique insights, building meaningful relationships, 
            managing stigma and misconceptions, accessing appropriate support and accommodations, connecting with peer support and advocacy 
            movements, understanding that perceptual differences are real neurological phenomena not personal failings, and developing 
            resilience, self-advocacy skills, and self-understanding through the experience.<sup>[46]</sup>
          </p>
        </section>
      </div>

      {/* References Section */}
      <section className="mt-12 pt-6 border-t-2 border-gray-300">
        <h2 className="text-[#0c264d] font-bold mb-4 text-2xl">References</h2>
        <div className="text-sm space-y-2">
          <p>[1] American Psychiatric Association. (2013). <em>Diagnostic and statistical manual of mental disorders</em> (5th ed.). Arlington, VA: American Psychiatric Publishing.</p>
          <p>[2] Geekie, J., Randal, P., Lampshire, D., & Read, J. (2012). <em>Experiencing psychosis: Personal and professional perspectives</em>. London: Routledge.</p>
          <p>[3] Saha, S., Chant, D., Welham, J., & McGrath, J. (2005). "A systematic review of the prevalence of schizophrenia." <em>PLoS Medicine</em>, 2(5), e141.</p>
          <p>[4] Karlsgodt, K. H., Sun, D., & Cannon, T. D. (2010). "Structural and functional brain abnormalities in schizophrenia." <em>Current Directions in Psychological Science</em>, 19(4), 226-231.</p>
          <p>[5] Longden, E., Corstens, D., Escher, S., & Romme, M. (2012). "Voice hearing in a biographical context: A model for formulating the relationship between voices and life history." <em>Psychosis</em>, 4(3), 224-234.</p>
          <p>[6] McCarthy-Jones, S., Krueger, J., Larøi, F., Broome, M., & Fernyhough, C. (2013). "Stop, look, listen: The need for philosophical phenomenological perspectives on auditory verbal hallucinations." <em>Frontiers in Human Neuroscience</em>, 7, 127.</p>
          <p>[7] Malaspina, D., Owen, M. J., Heckers, S., et al. (2013). "Schizoaffective disorder in the DSM-5." <em>Schizophrenia Research</em>, 150(1), 21-25.</p>
          <p>[8] Deegan, P. E. (1988). "Recovery: The lived experience of rehabilitation." <em>Psychosocial Rehabilitation Journal</em>, 11(4), 11-19.</p>
          <p>[9] Tandon, R., Nasrallah, H. A., & Keshavan, M. S. (2009). "Schizophrenia, 'just the facts' 4. Clinical features and conceptualization." <em>Schizophrenia Research</em>, 110(1-3), 1-23.</p>
          <p>[10] Waters, F., Collerton, D., Ffytche, D. H., et al. (2014). "Visual hallucinations in the psychosis spectrum and comparative information from neurodegenerative disorders and eye disease." <em>Schizophrenia Bulletin</em>, 40(Suppl 4), S233-S245.</p>
          <p>[11] Corlett, P. R., Taylor, J. R., Wang, X. J., Fletcher, P. C., & Krystal, J. H. (2010). "Toward a neurobiology of delusions." <em>Progress in Neurobiology</em>, 92(3), 345-369.</p>
          <p>[12] Foussias, G., & Remington, G. (2010). "Negative symptoms in schizophrenia: Avolition and Occam's razor." <em>Schizophrenia Bulletin</em>, 36(2), 359-369.</p>
          <p>[13] Green, M. F., Kern, R. S., & Heaton, R. K. (2004). "Longitudinal studies of cognition and functional outcome in schizophrenia: Implications for MATRICS." <em>Schizophrenia Research</em>, 72(1), 41-51.</p>
          <p>[14] Romme, M., & Escher, S. (2000). <em>Making sense of voices: A guide for mental health professionals working with voice-hearers</em>. London: Mind Publications.</p>
          <p>[15] Jamison, K. R. (2017). "Schizophrenia, manic-depressive illness, and creativity." <em>Scientific American Mind</em>, 18(1), 62-67.</p>
          <p>[16] Howes, O. D., & Kapur, S. (2009). "The dopamine hypothesis of schizophrenia: Version III—The final common pathway." <em>Schizophrenia Bulletin</em>, 35(3), 549-562.</p>
          <p>[17] Shenton, M. E., Dickey, C. C., Frumin, M., & McCarley, R. W. (2001). "A review of MRI findings in schizophrenia." <em>Schizophrenia Research</em>, 49(1-2), 1-52.</p>
          <p>[18] Ellison-Wright, I., & Bullmore, E. (2010). "Anatomy of bipolar disorder and schizophrenia: A meta-analysis." <em>Schizophrenia Research</em>, 117(1), 1-12.</p>
          <p>[19] Friston, K. J., & Frith, C. D. (1995). "Schizophrenia: A disconnection syndrome?" <em>Clinical Neuroscience</em>, 3(2), 89-97.</p>
          <p>[20] Sullivan, P. F., Kendler, K. S., & Neale, M. C. (2003). "Schizophrenia as a complex trait: Evidence from a meta-analysis of twin studies." <em>Archives of General Psychiatry</em>, 60(12), 1187-1192.</p>
          <p>[21] Schizophrenia Working Group of the Psychiatric Genomics Consortium. (2014). "Biological insights from 108 schizophrenia-associated genetic loci." <em>Nature</em>, 511(7510), 421-427.</p>
          <p>[22] Brown, A. S., & Derkits, E. J. (2010). "Prenatal infection and schizophrenia: A review of epidemiologic and translational studies." <em>American Journal of Psychiatry</em>, 167(3), 261-280.</p>
          <p>[23] Varese, F., Smeets, F., Drukker, M., et al. (2012). "Childhood adversities increase the risk of psychosis: A meta-analysis of patient-control, prospective-and cross-sectional cohort studies." <em>Schizophrenia Bulletin</em>, 38(4), 661-671.</p>
          <p>[24] Sass, L. A., & Parnas, J. (2003). "Schizophrenia, consciousness, and the self." <em>Schizophrenia Bulletin</em>, 29(3), 427-444.</p>
          <p>[25] World Health Organization. (2018). <em>International classification of diseases for mortality and morbidity statistics</em> (11th ed.). Geneva: WHO.</p>
          <p>[26] Tandon, R., Gaebel, W., Barch, D. M., et al. (2013). "Definition and description of schizophrenia in the DSM-5." <em>Schizophrenia Research</em>, 150(1), 3-10.</p>
          <p>[27] Addington, J., Cadenhead, K. S., Cornblatt, B. A., et al. (2012). "North American Prodrome Longitudinal Study (NAPLS 2): Overview and recruitment." <em>Schizophrenia Research</em>, 142(1-3), 77-82.</p>
          <p>[28] Keefe, R. S., & Fenton, W. S. (2007). "How should DSM-V criteria for schizophrenia include cognitive impairment?" <em>Schizophrenia Bulletin</em>, 33(4), 912-920.</p>
          <p>[29] McGorry, P. D., & van Os, J. (2013). "Redeeming diagnosis in psychiatry: Timing versus specificity." <em>The Lancet</em>, 381(9863), 343-345.</p>
          <p>[30] Ochoa, S., Usall, J., Cobo, J., Labad, X., & Kulkarni, J. (2012). "Gender differences in schizophrenia and first-episode psychosis: A comprehensive literature review." <em>Schizophrenia Research and Treatment</em>, 2012, 916198.</p>
          <p>[31] Kane, J. M., Robinson, D. G., Schooler, N. R., et al. (2016). "Comprehensive versus usual community care for first-episode psychosis: 2-year outcomes from the NIMH RAISE early treatment program." <em>American Journal of Psychiatry</em>, 173(4), 362-372.</p>
          <p>[32] Davidson, L., Rakfeldt, J., & Strauss, J. (2010). <em>The roots of the recovery movement in psychiatry: Lessons learned</em>. Chichester: Wiley-Blackwell.</p>
          <p>[33] Leucht, S., Tardy, M., Komossa, K., et al. (2012). "Antipsychotic drugs versus placebo for relapse prevention in schizophrenia: A systematic review and meta-analysis." <em>The Lancet</em>, 379(9831), 2063-2071.</p>
          <p>[34] Lieberman, J. A., Stroup, T. S., McEvoy, J. P., et al. (2005). "Effectiveness of antipsychotic drugs in patients with chronic schizophrenia." <em>New England Journal of Medicine</em>, 353(12), 1209-1223.</p>
          <p>[35] Wykes, T., Steel, C., Everitt, B., & Tarrier, N. (2008). "Cognitive behavior therapy for schizophrenia: Effect sizes, clinical models, and methodological rigor." <em>Schizophrenia Bulletin</em>, 34(3), 523-537.</p>
          <p>[36] Bond, G. R., Drake, R. E., & Becker, D. R. (2012). "Generalizability of the Individual Placement and Support (IPS) model of supported employment outside the US." <em>World Psychiatry</em>, 11(1), 32-39.</p>
          <p>[37] Corstens, D., Longden, E., McCarthy-Jones, S., Waddingham, R., & Thomas, N. (2014). "Emerging perspectives from the Hearing Voices Movement: Implications for research and practice." <em>Schizophrenia Bulletin</em>, 40(Suppl 4), S285-S294.</p>
          <p>[38] Mead, S., Hilton, D., & Curtis, L. (2001). "Peer support: A theoretical perspective." <em>Psychiatric Rehabilitation Journal</em>, 25(2), 134-141.</p>
          <p>[39] Read, J., van Os, J., Morrison, A. P., & Ross, C. A. (2005). "Childhood trauma, psychosis and schizophrenia: A literature review with theoretical and clinical implications." <em>Acta Psychiatrica Scandinavica</em>, 112(5), 330-350.</p>
          <p>[40] Dixon, L. B., Dickerson, F., Bellack, A. S., et al. (2010). "The 2009 schizophrenia PORT psychosocial treatment recommendations and summary statements." <em>Schizophrenia Bulletin</em>, 36(1), 48-70.</p>
          <p>[41] Bellack, A. S. (2006). "Scientific and consumer models of recovery in schizophrenia: Concordance, contrasts, and implications." <em>Schizophrenia Bulletin</em>, 32(3), 432-442.</p>
          <p>[42] Liberman, R. P., & Kopelowicz, A. (2005). "Recovery from schizophrenia: A concept in search of research." <em>Psychiatric Services</em>, 56(6), 735-742.</p>
          <p>[43] Anthony, W. A. (1993). "Recovery from mental illness: The guiding vision of the mental health service system in the 1990s." <em>Psychosocial Rehabilitation Journal</em>, 16(4), 11-23.</p>
          <p>[44] Harding, C. M., Brooks, G. W., Ashikaga, T., Strauss, J. S., & Breier, A. (1987). "The Vermont longitudinal study of persons with severe mental illness, II: Long-term outcome of subjects who retrospectively met DSM-III criteria for schizophrenia." <em>American Journal of Psychiatry</em>, 144(6), 727-735.</p>
          <p>[45] Tew, J., Ramon, S., Slade, M., Bird, V., Melton, J., & Le Boutillier, C. (2012). "Social factors and recovery from mental health difficulties: A review of the evidence." <em>British Journal of Social Work</em>, 42(3), 443-460.</p>
          <p>[46] Slade, M., Amering, M., Farkas, M., et al. (2014). "Uses and abuses of recovery: Implementing recovery-oriented practices in mental health systems." <em>World Psychiatry</em>, 13(1), 12-20.</p>
        </div>
      </section>
    </article>
  );
}